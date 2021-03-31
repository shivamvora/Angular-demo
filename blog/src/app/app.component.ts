import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appName = 'blog app';
  myEvent(evt:any){
    console.warn(evt);
  }
  name="shivam";
getName(){
    // alert("shivam vora");
  }
  currentVal="";
  getVal(val:any)
  {
    console.warn(val);
    this.currentVal=val;
  }
  obj = {
    name:'kelly',
    age:20
  }
  arr=['bruce','tonny','ivan','peter'];
  siteUrl = window.location.href;

}


