import { Component, OnInit } from '@angular/core';
import { IData } from './interface';

@Component({
  selector: 'app-interfac-p',
  templateUrl: './interfac-p.component.html',
  styleUrls: ['./interfac-p.component.css'],
})
export class InterfacPComponent implements OnInit {
  data: IData = {
    id: 1,
    name: 'Faizy',
    sex: false,
    imageUrl: '../../../../assets/Images/Faizy',
  };

  constructor() {}

  ngOnInit(): void {}
}
