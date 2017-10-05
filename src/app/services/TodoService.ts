import { Injectable } from '@angular/core';
import { TodosApi } from '../api/TodosApi';
import { Todo } from '../model/Todo';

@Injectable()
export class TodoService {

    constructor (private todoApi: TodosApi) { }

  // ASYNCHRONE
    getTodos(): Promise <Array <Todo> >  {
        return this.todoApi.getTodos();
    }

    // ASYNCHRONE
    addToList(todo): Promise <any>  {
        return this.todoApi.addToList(todo);
    }

    // ASYNCHRONE
    resetList(): Promise <any>  {
        return this.todoApi.reset();
    }

    // SYNCHRONE

    // addToList(todo): Array<Todo> {
    //     this.todos.unshift(todo);
    //     return this.todos;
    // }

    // SYNCHRONE
    // resetList(): Array<Todo> {
    //   return this.todos = [];
    // }

    // SYNCHRONE
    // getTodoList() : Array<Todo> {
    //     return this.serviceTodos;
    // }


}
