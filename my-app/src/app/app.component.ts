import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hello = false;
  array = [];


  onClicking(){
    this.hello = !this.hello;
    this.array.push(this.array.length + 1);
  }
}
