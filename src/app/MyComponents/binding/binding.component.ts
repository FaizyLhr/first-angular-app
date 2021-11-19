import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css'],
})
export class BindingComponent implements OnInit {
  val: string = 'Init';
  source: string = '../../../assets/Images/Faizy.jpg';
  bgColor: string = 'green';
  fontSize: number = 30;
  bolVal: boolean = false;
  uName: string = 'Faizy';
  price: number = 45;

  // Getter and Setter
  private _list: string = '';

  get list(): string {
    console.log('In Getter : ', this._list);
    return this._list;
  }
  set list(value: string) {
    this._list = value;
    console.log('In Setter : ', value);
  }

  toggleBoolean(): void {
    this.bolVal = !this.bolVal;
  }

  constructor() {}

  ngOnInit(): void {
    this.list = 'Faizy';
  }
}
