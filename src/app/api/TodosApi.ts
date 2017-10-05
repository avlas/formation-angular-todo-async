import { Todo } from '../model/Todo';

export class TodosApi {

  getTodos(): Promise <Array <Todo> > {
      return new Promise(
          (resolve) => {
              setTimeout(
                  () => {
                      resolve(
                      [
                          new Todo('Send a mail', false),
                          new Todo('Call mom', true),
                          new Todo('Go to gym', false),
                          new Todo('Clean the chicken', true),
                          new Todo('Buy a car', false)
                      ]
                    );
                  },
                  2000
              );
          }
      );
  }

  addToList(todo): Promise <any> {
      // this.getTodos().then(
      //   (apiTodos) => { this.serviceTodos = apiTodos; }
      // );
      //
      // this.serviceTodos.unshift(todo);

      return new Promise(
          (resolve, reject) => {
              setTimeout(
                  () => {
                      resolve(
                          [
                              new Todo('Send a mail', false),
                              new Todo('Call mom', true),
                              new Todo('Go to gym', false),
                              new Todo('Clean the chicken', true),
                              new Todo('Buy a car', false),
                              new Todo(todo.title, todo.isDone)
                          ]
                      );
                      reject( 'Impossible to add !!');
                  },
                2000
              );
          }
      );
  }

  reset(): Promise <any> {
      return new Promise(
          (resolve, reject) => {
              setTimeout(
                  () => {
                      resolve( [] );
                      reject('Impossible to reset !!');
                  },
                  2000
              );
          }
      );
  }
}
