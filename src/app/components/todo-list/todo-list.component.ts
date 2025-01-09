import {Component, inject} from '@angular/core';
import {MatFormField, MatLabel, MatSuffix} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {MatIcon} from '@angular/material/icon';
import {MatButtonToggle, MatButtonToggleGroup} from '@angular/material/button-toggle';
import {MatListOption, MatSelectionList} from '@angular/material/list';
import {TodosStore} from '../../store/todos.store';
import {NgStyle} from '@angular/common';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    MatFormField,
    MatInput,
    MatIcon,
    MatSuffix,
    MatButtonToggleGroup,
    MatButtonToggle,
    MatSelectionList,
    MatListOption,
    MatLabel,
    NgStyle
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
  store = inject(TodosStore);

  async onAddTodo(value: string) {
    await this.store.addTodo(value);
  }

  async onDeleteTodo(id: string, event: MouseEvent) {
    event.stopPropagation();
    await this.store.deleteTodo(id);
  }

  async onTodoToggle(id: string, completed: boolean) {
    await this.store.updateTodo(id, completed);
  }
}
