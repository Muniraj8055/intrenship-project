import { Component, OnInit } from '@angular/core';
import { MenuListPage } from '../menu-list/menu-list.page';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  rootPage= MenuListPage

  constructor() { }

  ngOnInit() {
  }

}
