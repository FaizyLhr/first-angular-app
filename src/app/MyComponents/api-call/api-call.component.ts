import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-api-call',
  templateUrl: './api-call.component.html',
  styleUrls: ['./api-call.component.css'],
})
export class ApiCallComponent implements OnInit {
  todos: any = undefined;
  id: number | undefined;
  title: number | undefined;
  completed: boolean | undefined;

  constructor(private _apiCall: ApiService) {}
  ngOnInit(): void {
    this._apiCall.getApiCall().subscribe((data) => {
      // console.log('Get Api Data : ', data);
      this.todos = data;
    });
  }
}
