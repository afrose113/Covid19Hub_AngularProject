import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { DesignutilityService } from './appServices/designutility.service';
import { HomeComponent } from './home/home.component';
import { DonatenowComponent } from './donatenow/donatenow.component';
import { ContactusComponent } from './contactus/contactus.component';
import { BlogComponent } from './blog/blog.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
//
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HerosComponent } from './heros/heros.component';
import { VaccinationComponent } from './vaccination/vaccination.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, DonatenowComponent, ContactusComponent, BlogComponent, ErrorpageComponent, HerosComponent, VaccinationComponent, LoginComponent, RegisterComponent, NavbarComponent, FooterComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule, HttpClientModule,ReactiveFormsModule,FormsModule],
  providers: [DesignutilityService],
  bootstrap: [AppComponent],
})
export class AppModule {}
