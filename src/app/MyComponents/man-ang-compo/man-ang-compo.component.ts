import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-man-ang-compo',
  template: `<h1>World!!</h1>
    <p>This template definition spans multiple lines.</p> `,
  // templateUrl: './man-ang-compo.component.html',
  // styleUrls: ['./man-ang-compo.component.css'],
  styles: ['h1 { background-color: grey; }'],
  encapsulation: ViewEncapsulation.None,
})
export class manAngCompoComponent {}
