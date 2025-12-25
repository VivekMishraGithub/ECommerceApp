import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
@Input() initialVal: number = 0;
@Output() valEmitter = new EventEmitter<number>();

increase(){
  this.initialVal++;
  this.valEmitter.emit(this.initialVal);
}

decrease(){
  if(this.initialVal > 0){
        this.initialVal--;
        this.valEmitter.emit(this.initialVal);
  }
}
}
