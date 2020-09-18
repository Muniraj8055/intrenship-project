import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuListPage } from './menu-list.page';

const routes: Routes = [
  {
    path: '',
    component: MenuListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuListPageRoutingModule {}
