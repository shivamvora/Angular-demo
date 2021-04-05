import { Component } from '@angular/core';


interface Alert {
  type: string;
  message: string;
}

const ALERTS: Alert[] = [{
    type: 'success',
    message: 'This is an success alert',
  }, {
    type: 'info',
    message: 'This is an info alert',
  }, {
    type: 'warning',
    message: 'This is a warning alert',
  }, {
    type: 'danger',
    message: 'This is a danger alert',
  }, {
    type: 'primary',
    message: 'This is a primary alert',
  }, {
    type: 'secondary',
    message: 'This is a secondary alert',
  }, {
    type: 'light',
    message: 'This is a light alert',
  }, {
    type: 'dark',
    message: 'This is a dark alert',
  }
];
 
 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

alerts!: Alert[];

  constructor() {
    this.reset();
  }

  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  reset() {
    this.alerts = Array.from(ALERTS);
  }

//   appName = 'blog app';
//   show=false;
//   myEvent(evt:any){
//     console.warn(evt);
//   }
//   name="shivam";
// getName(){
//     // alert("shivam vora");
//   }

//   currentVal="";
//   getVal(val:any)
//   {
//     console.warn(val);
//     this.currentVal=val;
//   }
//   btnval="";
//   getValueFromButtonClick(val1:any){
//     console.warn(val1);
//     this.btnval=val1;
//   }
//   obj = {
//     name:'kelly',
//     age:20
//   }
//   arr=['bruce','tonny','ivan','peter'];
//   siteUrl = window.location.href;

//   disabledBox=true;
//   enableBox(){
//     this.disabledBox=false;
//   }
//   color='yellow';
//   data=[{
//     name:'shivam',
//     age:20,
//     email:'shivam@gmail.com'
//   },
//   {
//     name:'dehil',
//     age:20,
//     email:'dehil@gmail.com'
//   },
//   {
//     name:'mitul',
//     age:25,
//     email:'mitul@gmail.com'
//   },
//   {
//     name:'jemin',
//     age:26,
//     email:'jemin@gmail.com'
//   }
// ]

// getUserValue(value:any){
//   console.log(value);
// }

 model = {
    left: true,
    middle: false,
    right: false
  };

}


