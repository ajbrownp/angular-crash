import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:Todo[];



  constructor() { }

  ngOnInit() {
    this.todos = [
      {
        id:1,
        title:'Todo one',
        completed: false
      },
      {
        id:2,
        title:'Todo two',
        completed: false
      },
      {
        id:3,
        title:'Todo three',
        completed: true
      },
      {
        id:4,
        title:'Todo four',
        completed: true
      }
    ]
  }

}
