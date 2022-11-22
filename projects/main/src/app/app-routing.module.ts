import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Subapp1Component } from './subapp1/subapp1.component';
import { Subapp2Component } from './subapp2/subapp2.component';

const routes: Routes = [
  {
    path: 'subapp1',
    component: Subapp1Component,
  },
  {
    path: 'subapp2',
    component: Subapp2Component,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
