import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from '../model/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input()
  todo: Todo;

  @Output()
  modifiedTodo: EventEmitter< Todo > = new EventEmitter< Todo >();

  constructor() { }

  ngOnInit() {
  }

  onChange(): void {
      this.modifiedTodo.emit(this.todo);
  }

  // onClick(event): void {
  //   this.todo.isDone = event.target.checked;
  //   this.color = (this.todo.isDone === true) ? 'green' : 'red';
  // }
}
