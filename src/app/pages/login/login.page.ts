import { Component, OnInit } from "@angular/core";
import {
  NavController,
  AlertController,
  LoadingController,
} from "@ionic/angular";
import { FormBuilder, Validators } from "@angular/forms";
import { AuthenticationService } from "src/app/services/authentication.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  credentials: any;

  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private alertController: AlertController,
    private router: Router,
    private loadingController: LoadingController,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    this.credentials = this.fb.group({
      email: ["eve.holt@reqres.in", [Validators.required, Validators.email]],
      password: ["cityslicka", [Validators.required, Validators.minLength(6)]],
    });
  }

  async login() {
    const loading = await this.loadingController.create();
    await loading.present();

    this.authService.login(this.credentials.value).subscribe(
      async (res) => {
        await loading.dismiss();
        this.router.navigateByUrl("/menu/details/0", { replaceUrl: true });
      },
      async (res) => {
        await loading.dismiss();
        const alert = await this.alertController.create({
          header: "Login failed",
          message: res.error.error,
          buttons: ["OK"],
        });

        await alert.present();
      }
    );
    // this.navCtrl.navigateRoot("/menu/details/0");
  }

  // Easy access for form fields
  get email() {
    return this.credentials.get("email");
  }

  get password() {
    return this.credentials.get("password");
  }
}
