import { Component, OnInit } from '@angular/core';
import { HouseService } from './filtering.service';
import { IHouses } from './houses';

@Component({
  selector: 'app-filtering',
  templateUrl: './filtering.component.html',
  styleUrls: ['./filtering.component.css'],
  // Register Service for a Specific Component
  // providers: [HouseService],
})
export class FilteringComponent implements OnInit {
  private _filterVal: string = 'w';

  pageTitle: string = 'Filter Page';

  houses: IHouses[] = [];

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

  onRatingClicked(message: string): void {
    // console.log(message);

    this.pageTitle = `Product List :  ${message}`;
  }

  constructor(private houseService: HouseService) {}

  ngOnInit(): void {
    this.houses = this.houseService.getHouses();
    this.performFilter(this._filterVal);
  }
}
