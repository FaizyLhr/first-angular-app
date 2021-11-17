import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-parent-child',
  templateUrl: './parent-child.component.html',
  styleUrls: ['./parent-child.component.css'],
})
export class ParentChildComponent implements OnInit {
  // Accepting Data from Parent Component
  // 1 Method
  // @Input() public parentData: any;
  // 2 Method
  @Input('parentData') public name: any;

  // Sending Data to Parent Component
  @Output() public childEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  fireEvent() {
    this.childEvent.emit('Hey Brand of Brands');
  }
}
