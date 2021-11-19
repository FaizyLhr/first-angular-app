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

  toggleBoolean(): void {
    this.bolVal = !this.bolVal;
  }

  constructor() {}

  ngOnInit(): void {}
}
