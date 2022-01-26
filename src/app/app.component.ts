import { Component } from '@angular/core';
import {UserserviceService} from './userservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Apicallservice';
  mydata=undefined;
  constructor(private user:UserserviceService){
    this.user.getData().subscribe((data:any)=>{
      console.log(data);
       this.mydata=data;
    })
  }
}
