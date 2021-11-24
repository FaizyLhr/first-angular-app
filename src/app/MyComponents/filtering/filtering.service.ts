import { Component, Injectable } from '@angular/core';
import { IHouses } from './houses';

// For Whole Application Injection
@Injectable({
  providedIn: 'root',
})
// Register Service for a Specific Component
// Set Provider field in that Component
export class HouseService {
  getHouses(): IHouses[] {
    return [
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
  }
}
