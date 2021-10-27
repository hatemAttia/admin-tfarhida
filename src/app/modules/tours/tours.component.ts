import { Component, OnInit } from '@angular/core';
import { ToursService } from 'src/app/shared/services/tours.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
 
@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.css']
})
export class ToursComponent implements OnInit {
  _dataRead:any;
  _tours ;
  displayBasic2: boolean;

  constructor(private toursServ:ToursService,private modalService: NgbModal) { }
  ngOnInit() {
    this.display();
  }
  showBasicDialog2(item) {
    this._dataRead=item;
    this.displayBasic2 = true;
}
  display(){
   this._tours= this.toursServ.getTours()
  }
  
}
