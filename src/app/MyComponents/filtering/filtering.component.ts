import { Component, OnInit } from '@angular/core';
import { IHouses } from './houses';

@Component({
  selector: 'app-filtering',
  templateUrl: './filtering.component.html',
  styleUrls: ['./filtering.component.css'],
})
export class FilteringComponent implements OnInit {
  private _filterVal: string = 'area';

  houses: IHouses[] = [
    {
      id: 1,
      rooms: 3,
      phone: 12321,
      city: 'lhr',
      rent: 300,
      area: 'Wafaqi',
      rating: 3,
    },
    {
      id: 2,
      rooms: 3,
      phone: 12321,
      city: 'lhr',
      rent: 300,
      rating: 5,
      area: 'i',
    },
    {
      id: 3,
      rooms: 3,
      phone: 12321,
      city: 'lhr',
      rent: 300,
      area: 'aqi',
      rating: 2,
    },
    {
      id: 4,
      rooms: 3,
      phone: 12321,
      city: 'lhr',
      rent: 300,
      area: 'faqi',
      rating: 1,
    },
  ];
  public get filterVal(): string {
    return this._filterVal;
  }
  public set filterVal(value: string) {
    this._filterVal = value;
    this.performFilter(value);
  }

  performFilter(filterBy: string): IHouses[] {
    filterBy = filterBy.toLocaleLowerCase();

    this.filteredHouses = [];

    this.houses.filter((house: IHouses) => {
      if (house.area.toLocaleLowerCase().includes(filterBy)) {
        this.filteredHouses.push(house);
      }
    });
    // console.log(this.filteredHouses);
    return this.filteredHouses;
  }

  arr: IHouses[] = [];
  filteredHouses: IHouses[] = [];

  constructor() {}

  ngOnInit(): void {}
}
