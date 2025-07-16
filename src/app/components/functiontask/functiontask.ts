import { Component } from '@angular/core';

@Component({
  selector: 'app-functiontask',
  imports: [],
  templateUrl: './functiontask.html',
  styleUrl: './functiontask.css'
})
export class Functiontask {

  constructor() {
    // Task A
    this.firstFunction();

    // Task B
    const result = this.square(6);
    console.log("Square of 6 is:", result);
  }

  // Task A
  firstFunction(): void {
    console.log("This is my first function");
  }

  // Task B
  square(num: number): number {
    return num * num;
  }
}
