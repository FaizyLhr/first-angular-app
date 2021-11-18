import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AutoAngCompoComponent } from './MyComponents/auto-ang-compo/auto-ang-compo.component';
import { manAngCompoComponent } from './MyComponents/man-ang-compo/man-ang-compo.component';
import { secManGenCompo } from './MyComponents/sec-man-gen-compo/sec-man-gen-compo.component';
import { ParentChildComponent } from './MyComponents/parent-child/parent-child.component';
import { NotFoundComponent } from './MyComponents/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: AutoAngCompoComponent,
  },
  {
    path: 'automatic-generated-component',
    component: AutoAngCompoComponent,
  },
  {
    path: 'manually-generated-component',
    component: manAngCompoComponent,
  },
  {
    path: 'second-manually-generated-component',
    component: secManGenCompo,
  },
  {
    path: 'communication-component',
    component: ParentChildComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const routingComponents = [
  AutoAngCompoComponent,
  manAngCompoComponent,
  secManGenCompo,
  ParentChildComponent,
];
