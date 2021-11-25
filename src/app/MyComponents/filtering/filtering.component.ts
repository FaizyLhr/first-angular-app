import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HouseService } from './filtering.service';
import { IHouses } from './houses';

@Component({
  selector: 'app-filtering',
  templateUrl: './filtering.component.html',
  styleUrls: ['./filtering.component.css'],
  // Register Service for a Specific Component
  // providers: [HouseService],
})
export class FilteringComponent implements OnInit, OnDestroy {
  private _filterVal: string = 'w';

  errorMessage: string = '';

  pageTitle: string = 'Filter Page';

  houses: IHouses[] = [
    {
      id: 1,
      rooms: 3,
      phone: 12321,
      city: 'lhr',
      rent: 300,
      area: 'wafaqi',
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

  sub!: Subscription;
  // sub: Subscription | undefined;

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
    this.sub = this.houseService.getHouses().subscribe({
      next: (houses) => {
        this.houses = houses;
      },
      error: (err) => {
        this.errorMessage = err;
      },
    });
    this.performFilter(this._filterVal);
    // this.houses = this.houseService.getHouses();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
