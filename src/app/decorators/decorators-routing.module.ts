import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DecoratorsPage } from './decorators.page';

const routes: Routes = [
  {
    path: '',
    component: DecoratorsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DecoratorsPageRoutingModule {}
