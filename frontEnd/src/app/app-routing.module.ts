import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DonatenowComponent } from './donatenow/donatenow.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { HerosComponent } from './heros/heros.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { VaccinationComponent } from './vaccination/vaccination.component';

const routes: Routes = [
  { path: '', component:LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'donatenow', component: DonatenowComponent },
  { path: 'contact', component: ContactusComponent },
  { path: 'blog', component: BlogComponent },
  {path: 'heros',component:HerosComponent},
  {path: 'vaccination',component:VaccinationComponent},
  { path: '**', component: ErrorpageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
