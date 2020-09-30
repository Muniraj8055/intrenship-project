import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full",
  },
  {
    path: "login",
    loadChildren: () =>
      import("./pages/login/login.module").then((m) => m.LoginPageModule),
  },
  {
    path: "forgot-password",
    loadChildren: () =>
      import("./pages/forgot-password/forgot-password.module").then(
        (m) => m.ForgotPasswordPageModule
      ),
  },

  {
    path: "menu",
    loadChildren: () =>
      import("./pages/menu/menu.module").then((m) => m.MenuPageModule), canLoad: [AuthGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
