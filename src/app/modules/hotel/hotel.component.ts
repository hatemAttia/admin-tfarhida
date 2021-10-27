import { Component, OnInit } from "@angular/core";
import { HotelService } from "src/app/shared/services/hotel.service";

@Component({
  selector: "app-hotel",
  templateUrl: "./hotel.component.html",
  styleUrls: ["./hotel.component.css"],
})
export class HotelComponent implements OnInit {
  _hotel: any;
  _dataRead:any;
  displayBasic2: boolean;
  displayBasic: boolean;
  
  constructor(private hotelServ: HotelService) {}

  ngOnInit() {
    this.display();
  }
  showBasicDialog2(item) {
    this._dataRead=item;
    this.displayBasic2 = true;
}
showBasicDialog(item) {
  this._dataRead=item;
  this.displayBasic = true;
}
  display() {
    this._hotel = this.hotelServ.getHotel();
  }
  
}
