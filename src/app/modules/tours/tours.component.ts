import { Component, OnInit } from '@angular/core';
import { ToursService } from 'src/app/shared/services/tours.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
 
@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.css']
})
export class ToursComponent implements OnInit {
  _dataRead:any;
  _tours ;
  displayBasic2: boolean;
  displayBasic3: boolean;
  toursForm :FormGroup;
  displayBasic: boolean;

  constructor(private toursServ:ToursService ,private fb: FormBuilder) { 
    this.toursForm =this.fb.group({
      titre: ['', Validators.compose([
       
        Validators.required])],
        amount: ['', Validators.required],
        description: ['', Validators.required],
        rate: ['', Validators.required],
        actions: ['', Validators.required],
    });
  }
  ngOnInit() {
    this.display();
  }
  showBasicDialog3() {
    this.displayBasic3 = true;
  }
  showBasicDialog2(item) {
    this._dataRead=item;
    this.displayBasic2 = true;
}
showBasicDialog(item) {
  this._dataRead = item;
  this.displayBasic = true;
}
  display(){
   this.toursServ.getTours().subscribe(res=>{
     console.log(res);
    this._tours =res;    
   })
  }
  
  
}
