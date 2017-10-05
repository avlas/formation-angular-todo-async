import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Todo} from '../model/Todo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  titleText: string;

  @Output()
  add: EventEmitter<Todo> = new EventEmitter<Todo>();

  @Output()
  reset: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onAdd(): void {
      if(this.titleText !== ''){
          this.add.emit(new Todo(this.titleText));
      }
      this.titleText = '';
  }

  onReinit(): void {
      this.reset.emit();
  }
}
