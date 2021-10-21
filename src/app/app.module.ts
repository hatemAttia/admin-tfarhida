import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    BrowserModule,
    AppRoutingModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
