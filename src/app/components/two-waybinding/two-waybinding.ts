import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two-waybinding',
  imports: [FormsModule],
  templateUrl: './two-waybinding.html',
  styleUrl: './two-waybinding.css'
})
export class TwoWaybinding {
userInput: string = '';
}
