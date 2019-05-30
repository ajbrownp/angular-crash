import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  //when taking in some data from parent component
  @Input() todo: Todo;
  //wehn sending some info to parent component
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();
  
  constructor( private todoService:TodoService ) { }

    ngOnInit() {

    }

  //set dynamic classes
    setClasses() {
      let classes = {
        todo: true,
        'is-complete': this.todo.completed
      }
      return classes;
    }
      
    //on toggle
    onToggle(todo) {
      // toggle in UI
      todo.completed = !todo.completed;
      //toggle on Server
      this.todoService.toggleCompleted(todo).subscribe( todo => 
        console.log('todo from todo.item.component', todo));
    }

    //delete todo
    onDelete(todo) {
      this.deleteTodo.emit(todo);      
    }
}
