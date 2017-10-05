export class Todo {
  constructor(public title: string,
              public isDone?: boolean) {

  }

  toString () {
      return `${this.title} | ${this.isDone}`;
  }

  print () {
      console.log( this.toString() );
  }
}
