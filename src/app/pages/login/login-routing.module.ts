import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPage } from './login.page';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),HttpClientModule, AngularSvgIconModule.forRoot()],
  exports: [RouterModule],
})
export class LoginPageRoutingModule {}
