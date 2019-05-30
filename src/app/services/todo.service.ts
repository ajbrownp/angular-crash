import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../models/Todo';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'aplication/json'
  }) 

}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosUrl:string = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit:string = '?_limit=5';

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

  // Toggle completed
  toggleCompleted(todo:Todo):Observable<any> {
    const url = `${this.todosUrl}/${todo.id}`;
    console.log('todo from todo.service', todo);
    return this.http.put(url, todo, httpOptions);
  }

  //Delete todo
  deleteTodo(todo:Todo):Observable<Todo> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.delete<Todo>(url, httpOptions);
  }
  
  //Add Todo
  addTodo(todo:Todo):Observable<Todo> {
    console.log(todo);
    return this.http.post<Todo>(this.todosUrl, todo, httpOptions);
  }
}
