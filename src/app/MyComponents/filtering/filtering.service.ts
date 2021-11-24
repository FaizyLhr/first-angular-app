import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { IHouses } from './houses';

// For Whole Application Injection
@Injectable({
  providedIn: 'root',
})
// Register Service for a Specific Component
// Set Provider field in that Component
export class HouseService {
  private houseUrl = 'api/houses/houses.json';

  constructor(private http: HttpClient) {}

  getHouses(): Observable<IHouses[]> {
    return this.http.get<IHouses[]>(this.houseUrl).pipe(
      tap((data) => {
        return console.log('All : ', JSON.stringify(data));
      }),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An Error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned an error Code: ${err.status}, error message is ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

  // private handleError(err: HttpErrorResponse);
}
