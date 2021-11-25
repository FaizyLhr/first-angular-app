import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IHouses } from '../filtering/houses';

@Component({
  selector: 'app-house-details',
  templateUrl: './house-details.component.html',
  styleUrls: ['./house-details.component.css'],
})
export class HouseDetailsComponent implements OnInit {
  pageTitle: string = 'House Details';
  house: IHouses | undefined;
  // house!: IHouses;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const houseID = this.route.snapshot.paramMap.get('houseID');
    console.log(houseID);
    // console.log(this.house);
    // if (this.house) {
    //   console.log(this.house.area);
    // }

    this.pageTitle += ` : ${houseID}`;

    this.house = {
      id: 1,
      rooms: 3,
      phone: 12321,
      city: 'lhr',
      rent: 300,
      area: 'wafaqi',
      rating: 3,
    };
  }

  onBack(): void {
    this.router.navigate(['/further/filter']);
  }
}
