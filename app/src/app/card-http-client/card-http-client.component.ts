import { Component, OnInit } from '@angular/core';
import {Todo, TodosService} from './todos.service';

@Component({
  selector: 'app-card-http-client',
  templateUrl: './card-http-client.component.html',
  styleUrls: ['./card-http-client.component.scss']
})
export class CardHttpClientComponent implements OnInit {

  todos: Todo[] = [];

  loading: boolean = false;

  todoTitle = "";

  error = "";

  constructor(private todoService: TodosService) { }

  ngOnInit() {
    this.fetchTodos();
  }

  addTodo() {
    if (!this.todoTitle.trim()) {
      return;
    }
    const todo = {
      title: this.todoTitle,
      completed: false
    };
    this.todoService.addTodo(todo)
      .subscribe(todo => {
        this.todos.push(todo);
        this.todoTitle = '';
      });
  }

  fetchTodos() {
    this.loading = true;
    this.todoService.fetchTodos()
      .subscribe(response => {
        this.todos = response;
        this.loading = false;
      }, error => {
        this.error = error.message;
      });
  }

  removeTodo(id: number) {
    this.todoService.removeTodo(id)
      .subscribe(() => {
        this.todos = this.todos.filter((todo: Todo) => todo.id !== id);
      })
  }

  completeTodo(id: number) {
    this.todoService.completeTodo(id)
      .subscribe((editTodo: Todo) => {
        this.todos.find((todo: Todo) => todo.id === editTodo.id).completed = true;
      });
  }
}
