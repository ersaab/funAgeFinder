import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  wlcm = "Welcome to Age Finder"
  phno;
  byear;
  age = "";

  getage(phno, byear)
  {
    let mult = (((phno * 2) + 5) * 50) + 1770;
    console.log(mult);
    this.age = (mult - byear).toString().slice(1);
    console.log(this.age);
  }
}
