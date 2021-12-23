import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './signinout/login/login/login.component';
import { RegisterComponent } from './signinout/register/register/register.component';
import { WelcomeComponent } from './welcome/welcome/welcome.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},

  { path: '', pathMatch: 'full', redirectTo: 'welcome'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
