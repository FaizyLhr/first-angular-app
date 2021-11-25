import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FilteringComponent } from '../MyComponents/filtering/filtering.component';
import { HouseDetailsComponent } from '../MyComponents/house-details/house-details.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [FilteringComponent, HouseDetailsComponent],
  imports: [
    RouterModule,
    SharedModule,
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
