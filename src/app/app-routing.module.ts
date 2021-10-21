import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { HotelComponent } from './modules/hotel/hotel.component';
import { ReservationHotelComponent } from './modules/reservation-hotel/reservation-hotel.component';
import { ReservationTourComponent } from './modules/reservation-tour/reservation-tour.component';
import { ToursComponent } from './modules/tours/tours.component';
import { UserComponent } from './modules/user/user.component';


const routes: Routes = [{
  path: '',
  component: HomeComponent,
},
{
  path: 'login',
  component: LoginComponent,
},
{
  path: 'tours',
  component: ToursComponent,
},
{
  path: 'hotel',
  component:HotelComponent
},
{
  path: 'reservation-hotel',
  component:ReservationHotelComponent
},
{
  path: 'reservation-tour',
  component:ReservationTourComponent
},
{
  path: 'users',
  component:UserComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
