import { Component,EventEmitter,Input,Output } from '@angular/core';

@Component({
  selector: 'app-btn',
  imports: [],
  templateUrl: './btn.html',
  styleUrl: './btn.css'
})
export class Btn {
  @Input() btnText: string = '';
  @Input() btnClass: string = '';
  
  @Output() onBtnClick = new EventEmitter<any>();

  onClick() {
    debugger;
     this.onBtnClick.emit("Hi From Child");
  }
}
