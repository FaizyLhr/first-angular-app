import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutoAngCompoComponent } from './MyComponents/auto-ang-compo/auto-ang-compo.component';
import { manAngCompoComponent } from './MyComponents/man-ang-compo/man-ang-compo.component';
import { secManGenCompo } from './MyComponents/sec-man-gen-compo/sec-man-gen-compo.component';
import { ParentChildComponent } from './MyComponents/parent-child/parent-child.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './MyComponents/nav-bar/nav-bar.component';
import { NotFoundComponent } from './MyComponents/not-found/not-found.component';
import { Child1Component } from './MyComponents/child1/child1.component';
import { Child2Component } from './MyComponents/child2/child2.component';
import { ChildNavComponent } from './MyComponents/child-nav/child-nav.component';

@NgModule({
  declarations: [AppComponent, NavBarComponent, routingComponents, NotFoundComponent, Child1Component, Child2Component, ChildNavComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
