import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToursComponent } from './modules/tours/tours.component';
import { NavBarComponent } from './shared/compoent/nav-bar/nav-bar.component';
import { FooterComponent } from './shared/compoent/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SideBarComponent } from './shared/compoent/side-bar/side-bar.component';
import { LoginComponent } from './auth/login/login.component';
import {ButtonModule} from 'primeng/button';
import { HotelComponent } from './modules/hotel/hotel.component';
import { UserComponent } from './modules/user/user.component';
import { ReservationTourComponent } from './modules/reservation-tour/reservation-tour.component';
import { ReservationHotelComponent } from './modules/reservation-hotel/reservation-hotel.component';
import { CategorieComponent } from './modules/categorie/categorie.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RatingModule} from 'primeng/rating';
import { FilterService, PrimeNGConfig } from 'primeng/api';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ToursComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    SideBarComponent,
    LoginComponent,
    HotelComponent,
    UserComponent,
    ReservationTourComponent,
    ReservationHotelComponent,
    CategorieComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    NgbModule,
    BrowserAnimationsModule,
    DialogModule,
    ReactiveFormsModule,

    
  ],
  providers: [PrimeNGConfig,FilterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
