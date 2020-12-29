import { Component, OnInit , EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
 @Output() intervalFired = new EventEmitter<number>();
interval;
count =0;


 constructor() { }

  ngOnInit(): void {
  }

  onStart(){
    this.interval = setInterval(()=>{
      this.intervalFired.emit(this.count+ 1);
       this.count++;
    }, 1000);
 }

 onStop(){
     clearInterval(this.interval);
 }

}
