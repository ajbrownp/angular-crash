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
  }

  deleteTodoFormTodoComponent(todo:Todo){
    //update todos array, filter the todos array and eliminate the todo that matches the todo.id that is getting passed as attr. This delete from the UI
    this.todos = this.todos.filter(t => t.id !== todo.id);
    //to eliminate from the server
    this.todoService.deleteTodo(todo).subscribe();
  }

  addTodoFromTodoComponent(todo:Todo){
    console.log(this.todos);
    
    this.todoService.addTodo(todo).subscribe(todo => {
      this.todos.push(todo);
     
    });
  }

}
