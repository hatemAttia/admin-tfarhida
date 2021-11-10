import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { HotelService } from "src/app/shared/services/hotel.service";

@Component({
  selector: "app-hotel",
  templateUrl: "./hotel.component.html",
  styleUrls: ["./hotel.component.css"],
})
export class HotelComponent implements OnInit {
  _hotel: any;
  _dataRead: any;
  displayBasic2: boolean;
  displayBasic: boolean;
  displayBasic3: boolean;
  hotelForm :FormGroup;


  constructor(
    private hotelServ: HotelService,
    private fb: FormBuilder
    ) { 

    this.hotelForm =this.fb.group({
      name: ['', Validators.compose([
       
        Validators.required])],
        nb_chambre: ['', Validators.required],
        type: ['', Validators.required],
      prix: ['', Validators.required],
    });
}

  ngOnInit() {
    this.display();
  }
  showBasicDialog3() {
    this.displayBasic3 = true;
  }
  showBasicDialog2(item) {
    this._dataRead = item;
    this.displayBasic2 = true;
  }
  showBasicDialog(item) {
    this._dataRead = item;
    this.displayBasic = true;
  }
  display(){
    this.hotelServ.getHotel().subscribe(res=>{
      console.log(res);
     this._hotel =res;    
    })
   }
}
