import { Component, OnInit } from '@angular/core';
import { Todo } from '../model/Todo';
import { TodoService } from '../services/TodoService';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  providers: [ TodoService ]
})
export class TodoListComponent implements OnInit {

    todos: Array <Todo> = [];

    constructor( private todoService: TodoService ) {}

    onAdd(todo): void {
        this.todoService.addToList(todo)
        .then(
            (apiTodos) => { this.todos = apiTodos; }
        )
        .catch(
            (message) => { console.log(message); }
        );
    }

    onReset(): void {
        this.todoService.resetList()
        .then(
            (apiTodos) => {this.todos = apiTodos; }
        )
        .catch(
            (message) => { console.log(message); }
        );
    }

    onModifToto(todo): void {
          console.log('todo : ', todo.toString());
    }

    ngOnInit() {
         this.todoService.getTodos()
         .then(
              (apiTodos) => { this.todos = apiTodos; }
         );

        // this.todos = [
        //     new Todo('Send a mail', false),
        //     new Todo('Call mom', true),
        //     new Todo('Go to gym', false),
        //     new Todo('Clean the chicken', true),
        //     new Todo('Buy a car', false)
        // ];
    }
}
