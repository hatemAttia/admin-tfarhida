import { Injectable } from '@angular/core';
import { hotel } from '../models/hotel';
import { HttpClient, HttpClientModule } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class HotelService {
  hotel :Array<hotel>
  constructor(private http: HttpClient) { 
    this.hotel=[
      {
      id:"1",
      name:"sahra beach",
      nb_chambre:6,
      type:"*****",
      prix:200,
      
      image:"assets/images/hotel.png"
    },
    {
      id:"2",
      name:"mouradi beach",
      nb_chambre:5,
      type:"****",
      prix:100,
      
      image:"assets/images/hotel.png"
    },
    {
      id:"3",
      name:"talasa",
      nb_chambre:6,
      type:"*****",
      prix:150,
     
      image:"assets/images/hotel.png"
    }
  ];
    
  }

  getHotel(){
    return this.http.get("http://localhost:3001/hotel");
  }
  addhotel(data) {
    return this.http.post("http://localhost:3001/hotel",data);
  
}
}
