import { Component, OnInit } from '@angular/core';
import { ToursService } from 'src/app/shared/services/tours.service';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.css']
})
export class ToursComponent implements OnInit {

  _tours ;
  constructor(private toursServ:ToursService) { }
  ngOnInit() {
    this.display();
  }

  display(){
   this._tours= this.toursServ.getTours()
  }
}
