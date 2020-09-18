import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children:[
      {path:'details/:level', loadChildren:()=> import('../content/content.module').then( m=>m.ContentPageModule)}
    ]
  },{
    path:'',
    redirectTo:"/menu/details/0"
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
