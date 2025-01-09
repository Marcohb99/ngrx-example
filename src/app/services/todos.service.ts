import { Injectable } from '@angular/core';
import {Todo} from '../model/todo.model';
import {TODOS} from '../model/mock-data';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  async getTodos(): Promise<Todo[]> {
    await this.sleep(1000);
    return TODOS;
  }

  async sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
