import {Todo} from '../model/todo.model';
import {patchState, signalStore, withComputed, withMethods, withState} from '@ngrx/signals';
import {computed, inject} from '@angular/core';
import {TodosService} from '../services/todos.service';

export type TodosFilter = "all" | "pending" | "completed";

type TodosState = {
  todos: Todo[];
  loading: boolean;
  filter: TodosFilter;
}


const initialState: TodosState = {
  todos: [],
  loading: false,
  filter: "all",
}

export const TodosStore = signalStore(
  {providedIn: 'root'},
  withState(initialState),
  withMethods(
    (store, todosService = inject(TodosService)) => ({
      async loadAll() {
        patchState(store, {loading: true});
        const todos = await todosService.getTodos();
        patchState(store, {todos, loading: false});
      },
      async addTodo(title: string) {
        const newTodo: Todo = await todosService.addTodo({title, completed: false});
        patchState(store, (state) => ({
          todos: [...state.todos, newTodo]
        }));
      },
      async deleteTodo(id: string){
        await todosService.deleteTodo(id);
        patchState(store, state => ({
          todos: state.todos.filter(t => t.id !== id)
        }))
      },
      async updateTodo(id: string, completed: boolean) {
        await todosService.updateTodo(id, completed);
        patchState(store, state => ({
          todos: state.todos.map(t => t.id === id ? {...t, completed} : t)
        }))
      },
      updateFilter(filter: TodosFilter) {
        patchState(store, {filter});
      }
    })
  ),
  // Como todas las propiedades del state se convierten en señales
  // para el filtro usaremos una computed signal
  withComputed((state) => ({
    filteredTodos: computed(() => {

      // Esto hace que la señal "filteredTodos" se emita en cuanto hay un cambio en los todos.
      // es decir, crea una dependencia
      const todos = state.todos();
      switch (state.filter()) {
        case "all":
          return todos;
        case "pending":
          return todos.filter(t => !t.completed)
        case "completed":
          return todos.filter(t => t.completed)
      }
    })
  }))
);
