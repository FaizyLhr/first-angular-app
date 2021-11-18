import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'first-app';
  public name = 'Faizy';
  public message = '';

  // Code For Directives
  // viewMode = 'map';
  // viewMode = 'list';
  viewMode = 'other';

  methods = [1];

  // courses2 = [1, 2, 3];
  courses2 = [];
  // courses = [1, 2, 3];
  courses = [];
  courses3 = [1, 2, 3];
  // courses3 = [];

  models = [
    { id: 1, name: 'model1' },
    { id: 2, name: 'model2' },
    { id: 3, name: 'model3' },
    { id: 4, name: 'model4' },
  ];



  onAdd() {
    this.models.push({ id: 5, name: 'model5' });
  }
  onDel(model: { id: number; name: string }) {
    let index = this.models.indexOf(model);
    this.models.splice(index, 1);
  }
}
