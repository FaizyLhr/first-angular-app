import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './MyComponents/nav-bar/nav-bar.component';
import { NotFoundComponent } from './MyComponents/not-found/not-found.component';
import { Child1Component } from './MyComponents/child1/child1.component';
import { Child2Component } from './MyComponents/child2/child2.component';
import { ChildNavComponent } from './MyComponents/child-nav/child-nav.component';
import { BindingComponent } from './MyComponents/binding/binding.component';
import { DirectivePracComponent } from './MyComponents/directive-prac/directive-prac.component';
import { FurtherComponent } from './MyComponents/further/further.component';
import { InterfacPComponent } from './MyComponents/interfac-p/interfac-p.component';
import { HouseModule } from './house/house.module';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    routingComponents,
    NotFoundComponent,
    Child1Component,
    Child2Component,
    ChildNavComponent,
    BindingComponent,
    DirectivePracComponent,
    FurtherComponent,
    InterfacPComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    // If We are Not supposed to define routes on app routing module file
    // RouterModule.forRoot([
    //   {
    //     path: 'chk',
    //     component: StarComponent,
    //   },
    // ]),
    HouseModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
