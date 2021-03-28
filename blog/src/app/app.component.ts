import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appName = 'blog app';
  name="shivam";
getName(){
    return this.name
  }
  obj = {
    name:'kelly',
    age:20
  }
  arr=['bruce','tonny','ivan','peter'];
  siteUrl = window.location.href;
}
