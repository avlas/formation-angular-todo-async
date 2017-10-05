import { Todo } from '../model/Todo';

export class TodosApi {

  todos: Array<Todo> = [];

  getTodos(): Promise <Array <Todo> > {
      return new Promise(
          (resolve) => {
              setTimeout(
                  () => {
                      resolve ( [...this.todos] );
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
                      // reject ('Impossible to add !!');
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
                      // reject ('Impossible to reset !!');
                  },
                  2000
              );
          }
      );
  }
}
