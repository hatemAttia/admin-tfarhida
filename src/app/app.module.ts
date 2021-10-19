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

@NgModule({
  declarations: [
    AppComponent,
    ToursComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    SideBarComponent,
    LoginComponent
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
