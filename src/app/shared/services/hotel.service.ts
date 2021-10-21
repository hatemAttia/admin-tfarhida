import { Injectable } from '@angular/core';
import { hotel } from '../models/hotel';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  hotel :Array<hotel>
  constructor() { 
    this.hotel=[{
      id:"1",
      name:"sahra beach",
      nb_chambre:6,
      type:"*****",
      prix:200,
      adresse:"sahra@gmail.com",
      image:"assets/images/hotel.png"
    },
    {
      id:"2",
      name:"mouradi beach",
      nb_chambre:5,
      type:"****",
      prix:100,
      adresse:"mouradiclub@gmail.com",
      image:"assets/images/hotel.png"
    },
    {
      id:"3",
      name:"talasa",
      nb_chambre:6,
      type:"*****",
      prix:150,
      adresse:"talasa@gmail.com",
      image:"assets/images/hotel.png"
    }
  ];
    
  }

  getHotel(){
   return this.hotel;
  }
  
}
