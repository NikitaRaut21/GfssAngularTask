import { Component } from '@angular/core';

@Component({
  selector: 'app-objecttask',
  imports: [],
  templateUrl: './objecttask.html',
  styleUrl: './objecttask.css'
})
export class Objecttask {
 // Task A: Product Info
  product = {
    ProductName: "Mobile Phone",
    Category: "Electronics",
    Price: 40000,
    Discount: "15%"
  };

  // Task B: Train Ticket Info
  trainTicket = {
    TrainName: "laxmi Express",
    TrainNo: 12135,
    NoOfPassinger: 3,
    From: "Nashik",
    To: "Mumbai",
    DateOfJourney: "08-04-2023 05.00 PM"
  };

  // Task C: School Info
  school = {
    SchoolName: "New English School Panchale",
    PrincipleName: "Mrs. RS Gadakh",
    ContactNo: "9876543245",
    Address: "panchale Road, Nashik"
  };

  constructor() {
    // Task A Output
    console.log("Product Name:", this.product.ProductName);
    console.log("Product Price:", this.product.Price);

    // Task C Initial Output
    console.log("School Info Before Update:", this.school);

    // Add SchoolEmail
    (this.school as any).SchoolEmail = "newenglishschoolpanchale@edu";

    // Updated School Info
    console.log("School Info After Update:", this.school);
  }
  
}
