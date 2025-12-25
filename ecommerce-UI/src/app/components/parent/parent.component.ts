import { Component, Input, Output } from '@angular/core';
import { ChildComponent } from "../child/child.component";

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  initVal: number = 0;
  receivedVal: number = 0;

  receiveVal(val: number){
    this.receivedVal = val;
  }
}
