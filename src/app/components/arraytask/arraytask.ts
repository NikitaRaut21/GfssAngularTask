import { Component } from '@angular/core';

@Component({
  selector: 'app-arraytask',
  imports: [],
  templateUrl: './arraytask.html',
  styleUrl: './arraytask.css'
})
export class Arraytask {
  cities: string[] = ["Nashik","Nagpur", "Mumbai", "Pune", "Delhi", "Bangalore"];

  constructor() {
    console.log("Cities Array:", this.cities);
    console.log("Length of Cities Array:", this.cities.length);
    console.log("3rd Element of Array:", this.cities[2]); 
  }
}
