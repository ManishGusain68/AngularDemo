import { Component } from "@angular/core";
import { RoomsService } from "./rooms.service";

@Component({
    selector: 'rooms',
    templateUrl: './rooms.component.html'
})
export class RoomsComponent{
 title="number of rooms";
 rooms;

 constructor(service : RoomsService){
     //commenting below part because its very tightly coupled
     //let service=new RoomsService().getRooms();
     //this.rooms=service;
     
     this.rooms=service.getRooms();
 }
}