import { Injectable } from '@angular/core';
import { TodosApi } from '../api/TodosApi';
import { Todo } from '../model/Todo';

@Injectable()
export class TodoService {
    todos: Array<Todo> = [];

    constructor (private todoApi: TodosApi) { }

  // ASYNCHRONE
    getTodos(): Promise <Array <Todo> >  {
        return this.todoApi.getTodos()
        .then(
            (apiTodos) => {
                this.todos = [...apiTodos];

                return new Promise(
                    (resolve, reject) => {
                        resolve ( this.todos );
                        reject ( 'SERVICE - Impossible to get !!' );
                    }
                );
            }
        )
        .catch(
            (message) => { console.log(message); }
        );
    }

    // ASYNCHRONE
    addToList(todo): Promise <any>  {
        return this.todoApi.addToList(todo)
        .then(
            (apiTodos) => {
                 this.todos = [...apiTodos];

                return new Promise(
                    (resolve, reject) => {
                        resolve ( this.todos );
                        reject ( 'SERVICE - Impossible to add !!' );
                    }
                 );
            }
        )
        .catch(
            (message) => { console.log(message); }
        );
    }

    // ASYNCHRONE
    resetList(): Promise <any>  {
        return this.todoApi.reset()
        .then(
            (apiTodos) => {
                this.todos = [...apiTodos];

                return new Promise(
                    (resolve, reject) => {
                        resolve ( this.todos );
                        reject ( 'SERVICE - Impossible to reset !!' );
                    }
                );
            }
        )
        .catch(
            (message) => { console.log(message); }
        );
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
