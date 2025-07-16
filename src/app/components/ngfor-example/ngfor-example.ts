import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ngfor-example',
  imports: [CommonModule,FormsModule],
  templateUrl: './ngfor-example.html',
  styleUrl: './ngfor-example.css'
})
export class NgforExample {
  cityList: string[] = [ 'Nashik','solapur', 'satana','Mumbai', 'Pune', 'Delhi']; 
  newCity: string = ''; 

  addCity() {
    const city = this.newCity;
    if (city) {
      this.cityList.push(city);
      this.newCity = '';
    }
}
}
