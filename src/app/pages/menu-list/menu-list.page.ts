import { Component, OnInit } from "@angular/core";
import { ProfilePage } from "../profile/profile.page";
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: "app-menu-list",
  templateUrl: "./menu-list.page.html",
  styleUrls: ["./menu-list.page.scss"],
})
export class MenuListPage implements OnInit {
  nextPage = ProfilePage;

  constructor(private authService: AuthenticationService, private router: Router) {}

  ngOnInit() {}
  async logout() {
    await this.authService.logout();
    this.router.navigateByUrl('/', { replaceUrl: true });
  }
}
