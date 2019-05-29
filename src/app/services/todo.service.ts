import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Todo } from '../models/Todo';


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosUrl:string = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit:string = '?_limit=10';

  constructor(private http:HttpClient) {}
  
  // when fetching this url, getTodos will return an observable
  getTodos(): Observable<Todo[]> {
    // return this.http.get<Todo[]>(this.todosUrl);
    return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`);
    // return [
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
