import {Component, inject, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TodosStore} from './store/todos.store';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'ngrx-tutorial';
  store = inject(TodosStore);
  ngOnInit() {
    this.store.loadAll().then(() => console.log('Todos loaded!'));
  }

  async loadTodos() {
    this.store.loadAll();
  }
}
