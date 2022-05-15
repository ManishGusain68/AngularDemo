import { Component, OnInit } from '@angular/core';
import { MessageServiceService } from './message-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HotelManagerApp';
  service;

  constructor(service :MessageServiceService){
    this.service=service;
  }
 

  data={
    id:112,
    message:"Message from angular app",
    newdata:{
      age:31
    }
  }

  btnclick(){
    console.log("button clicked");
    this.service.sendMessage(this.data).subscribe(
      response=>{
        console.log(response);
      },
      error=>{
        console.log(error);
      }

  )
  }
}
