import { Component } from '@angular/core';

@Component({
  selector: 'app-click-button',
  imports: [],
  templateUrl: './click-button.html',
  styleUrl: './click-button.css'
})
export class ClickButton {
 showAlert() {
    alert("Button Clicked!");
  }
}
