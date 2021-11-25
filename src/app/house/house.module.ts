import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FilteringComponent } from '../MyComponents/filtering/filtering.component';
import { StarComponent } from '../MyComponents/star/star.component';
import { HouseDetailsComponent } from '../MyComponents/house-details/house-details.component';

@NgModule({
  declarations: [FilteringComponent, StarComponent, HouseDetailsComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    // If We are Not supposed to define routes on house module file
    // RouterModule.forChild([
    //   {
    //     path: 'chk',
    //     component: StarComponent,
    //   },
    // ]),
  ],
})
export class HouseModule {}
