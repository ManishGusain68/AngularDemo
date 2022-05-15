import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {

  private baseUrl:string="http://localhost:9091";


  constructor(private http:HttpClient) { }

  sendMessage(data: any){
    console.log("inside messaging service");
    console.log(`${this.baseUrl}/api/message`);
    console.log(data);
    return this.http.post(`${this.baseUrl}/api/message`,data);
    
  }
}
