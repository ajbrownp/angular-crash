import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:Todo[];



  constructor(private todoService:TodoService) { }

  ngOnInit() {
    //this.todos = this.todoService.getTodos(); //we can't do this any more when using an observable, in this case we need to do the following

    //this.todoService.getTodos().subscribe(); //we need to subscribe the service to the observable

    this.todoService.getTodos().subscribe( todos => {
      this.todos = todos;
    }); 
    
    //initilize todo's with some data
    // this.todos = [
    //   {
    //     id:1,
    //     title:'Todo one',
    //     completed: false
    //   },
    //   {
    //     id:2,
    //     title:'Todo two',
    //     completed: false
    //   },
    //   {
    //     id:3,
    //     title:'Todo three',
    //     completed: true
    //   },
    //   {
    //     id:4,
    //     title:'Todo four',
    //     completed: true
    //   }
    // ]
  }

}
