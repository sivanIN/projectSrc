import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { HospitalComponent } from './components/hospital/hospital.component';
import { HomeComponent } from './components/home/home.component';
import { HealthComponent } from './components/health/health.component';
import { Healthpolicy } from './healthpolicy';
import {FormsModule} from  '@angular/forms'
import { HealthpolicydetailsComponent } from './components/healthpolicydetails/healthpolicydetails.component';
import { UserpolicypageComponent } from './components/userpolicypage/userpolicypage.component';
import { AdminpolicylistComponent } from './components/adminpolicylist/adminpolicylist.component';
import { LoginComponent } from './components/login/login.component';


const route:Routes=[
  {path:"",component:WelcomeComponent},
  {path:"hospital",component:HospitalComponent},
  {path:"homepoliciy",component:HomeComponent},
  {path:"healthpoliciy",component:HealthComponent},
  {path:"healthpolicy/:policyid",component:HealthpolicydetailsComponent},
  {path:"mypolicy",component:UserpolicypageComponent},
  {path:"admin",component:AdminpolicylistComponent},
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent},

  
]

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    WelcomeComponent,
    HospitalComponent,
    HomeComponent,
    HealthComponent,
    HealthpolicydetailsComponent,
    UserpolicypageComponent,
    AdminpolicylistComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(route),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
