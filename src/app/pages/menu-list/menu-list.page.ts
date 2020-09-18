import { Component, OnInit } from "@angular/core";
import { ProfilePage } from "../profile/profile.page";

@Component({
  selector: "app-menu-list",
  templateUrl: "./menu-list.page.html",
  styleUrls: ["./menu-list.page.scss"],
})
export class MenuListPage implements OnInit {
  nextPage = ProfilePage;

  constructor() {}

  ngOnInit() {}
}
