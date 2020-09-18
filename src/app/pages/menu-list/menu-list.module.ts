import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuListPageRoutingModule } from './menu-list-routing.module';

import { MenuListPage } from './menu-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuListPageRoutingModule
  ],
  declarations: [MenuListPage]
})
export class MenuListPageModule {}
