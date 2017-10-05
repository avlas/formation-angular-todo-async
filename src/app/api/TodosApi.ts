import { Todo } from '../model/Todo';

export class TodosApi {

  todos: Array<Todo> = [];

  getTodos(): Promise <Array <Todo> > {
      return new Promise(
          (resolve, reject) => {
              setTimeout(
                  () => {
                      // [...this.todos] => en ES6, [] copy le tableau "todos" dans un nouveau tableau
                      resolve ( [...this.todos] );

                      reject ( 'API - Impossible to get !!' );
                  },
                  2000
              );
          }
      );
  }

  addToList(todo): Promise <any> {
      return new Promise(
          (resolve, reject) => {
              setTimeout(
                  () => {

                      this.todos = [todo, ...this.todos];

                      resolve ( this.todos );

                      reject ('API - Impossible to add !!');
                  },
                1000
              );
          }
      );
  }

  reset(): Promise <any> {
      return new Promise(
          (resolve, reject) => {
              setTimeout(
                  () => {

                      this.todos = [];

                      resolve ( this.todos );

                      reject ('API - Impossible to reset !!');
                  },
                  2000
              );
          }
      );
  }
}
