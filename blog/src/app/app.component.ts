import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appName = 'blog app';
  show=false;
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
  btnval="";
  getValueFromButtonClick(val1:any){
    console.warn(val1);
    this.btnval=val1;
  }
  obj = {
    name:'kelly',
    age:20
  }
  arr=['bruce','tonny','ivan','peter'];
  siteUrl = window.location.href;

  disabledBox=true;
  enableBox(){
    this.disabledBox=false;
  }
  color='yellow';
  data=[{
    name:'shivam',
    age:20,
    email:'shivam@gmail.com'
  },
  {
    name:'dehil',
    age:20,
    email:'dehil@gmail.com'
  },
  {
    name:'mitul',
    age:25,
    email:'mitul@gmail.com'
  },
  {
    name:'jemin',
    age:26,
    email:'jemin@gmail.com'
  }
]

getUserValue(value:any){
  console.log(value);
}
}


