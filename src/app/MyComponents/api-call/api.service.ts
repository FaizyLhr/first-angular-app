import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getApiCall() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }

  getApiDetailCall() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos/1');
  }

  postApiCall() {
    // return this.http.post('https://jsonplaceholder.typicode.com/post/600');
  }
}
