import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AutoAngCompoComponent } from './MyComponents/auto-ang-compo/auto-ang-compo.component';
import { manAngCompoComponent } from './MyComponents/man-ang-compo/man-ang-compo.component';
import { secManGenCompo } from './MyComponents/sec-man-gen-compo/sec-man-gen-compo.component';
import { ParentChildComponent } from './MyComponents/parent-child/parent-child.component';
import { NotFoundComponent } from './MyComponents/not-found/not-found.component';
import { ChildNavComponent } from './MyComponents/child-nav/child-nav.component';
import { Child1Component } from './MyComponents/child1/child1.component';
import { Child2Component } from './MyComponents/child2/child2.component';

const routes: Routes = [
  // Redirection
  {
    path: '',
    redirectTo: '/automatic-generated-component',
    // To implement on all not found paths use as
    // pathMatch: 'prefix',
    // To implement on specific not found path use as
    pathMatch: 'full',
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
    path: 'child-Nav',
    component: ChildNavComponent,
    children: [
      {
        path: 'child-1',
        component: Child1Component,
      },
      {
        path: 'child-2',
        component: Child2Component,
      },
    ],
  },
  // 404 Page Route
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
