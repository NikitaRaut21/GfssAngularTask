import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';



@Component({
  selector: 'app-alert',
  imports: [CommonModule],
  templateUrl: './alert.html',
  styleUrl: './alert.css'
})
export class Alert {
 @Input() message:string ='';
 @Input() alertType:string ='';
}
