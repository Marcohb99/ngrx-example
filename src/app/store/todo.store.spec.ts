import {TodosStore} from './todos.store';
import {TestBed} from '@angular/core/testing';
import {TodosService} from '../services/todos.service';
import {expect, jest} from '@jest/globals';
import {Todo} from '../model/todo.model';

const todoServiceMock = {
  getTodos: jest.fn().mockImplementationOnce(() => [{id: '1', title: 'test', completed: false}]),
  addTodo: jest.fn().mockImplementationOnce(() => {
    return {id: '1', title: 'test', completed: false};
  }),
  deleteTodo: jest.fn().mockImplementationOnce(() => []),
  updateTodo: jest.fn().mockImplementationOnce(() => {
    return {id: '1', title: 'test', completed: true};
  }),
};

describe('TodoStore', () => {
  let store: TodosStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: TodosService, useValue: todoServiceMock}
      ]
    });
    store = TestBed.inject(TodosStore);
  });

  it('should create entity', async () => {
    expect(store.todos()).toEqual([]);
    const title: string = 'test';
    await store.addTodo(title)
    expect(todoServiceMock.addTodo).toHaveBeenCalledWith({"completed": false, "title": title});
    expect(store.todos() as Todo[])
      .toEqual([{id: '1', title: 'test', completed: false} as Todo])
  });

  it('should load all todos', async () => {
    await store.loadAll()
    expect(todoServiceMock.getTodos).toHaveBeenCalled();
    expect(store.todos() as Todo[])
      .toEqual([{id: '1', title: 'test', completed: false} as Todo])
  });

  it('should delete entity', async () => {
    await store.deleteTodo('2')
    expect(todoServiceMock.deleteTodo).toHaveBeenCalled();
  });

  it('should update entity', async () => {
    await store.updateTodo('1', true)
    expect(todoServiceMock.updateTodo).toHaveBeenCalled();
  });
});
