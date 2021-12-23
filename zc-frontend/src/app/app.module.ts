import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './signinout/login/login/login.component';
import { LogoutComponent } from './signinout/logout/logout/logout.component';
import { RegisterComponent } from './signinout/register/register/register.component';
import { WelcomeComponent } from './welcome/welcome/welcome.component';
import { TraderDashboardComponent } from './trader/trader-dashboard/trader-dashboard/trader-dashboard.component';
import { BuyShareComponent } from './trader/buy-share/buy-share/buy-share.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    WelcomeComponent,
    TraderDashboardComponent,
    BuyShareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
