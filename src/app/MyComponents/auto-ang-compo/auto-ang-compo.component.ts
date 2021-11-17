import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-auto-ang-compo',
  templateUrl: './auto-ang-compo.component.html',
  styleUrls: ['./auto-ang-compo.component.css'],
  encapsulation: ViewEncapsulation.Emulated, //Default
})
export class AutoAngCompoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
