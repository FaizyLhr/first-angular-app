import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutoAngCompoComponent } from './MyComponents/auto-ang-compo/auto-ang-compo.component';
import { manAngCompoComponent } from './MyComponents/man-ang-compo/man-ang-compo.component';

@NgModule({
  declarations: [AppComponent, AutoAngCompoComponent, manAngCompoComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
