import { Component, OnInit } from '@angular/core';
import { HotelService } from 'src/app/shared/services/hotel.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {
_hotel;any;
  constructor(private hotelServ:HotelService) { }

  ngOnInit() {
    this.display();
  }

  display(){
   this._hotel= this.hotelServ.getHotel()
  }
}
