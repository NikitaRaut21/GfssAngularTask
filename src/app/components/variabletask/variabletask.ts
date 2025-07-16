import { Component } from '@angular/core';

@Component({
  selector: 'app-variabletask',
  imports: [],
  templateUrl: './variabletask.html',
  styleUrl: './variabletask.css'
})
export class Variabletask {
     // Task A: Name Variables
  firstName: string = "Nikita";
  middleName: string = "Madukar";
  lastName: string = "Raut";
  fullName: string = "";
  

  // Task B: Student Details
  studentName: string = "Nikita Raut";
  contactNo: string = "9876543210";
  fatherName: string = "Mr. Madhukar Raut";
  motherName: string = "Mrs.Surekha Raut";
  studentClass: string = "BE Computer";
  rollNo: number = 17;

  // Task C: Address Info
  address: string = "Panchale";
  city: string = "Nashik";
  state: string = "Maharashtra";
  pincode: string = "422102";

  constructor() {
    // Generate full name task 1
    this.fullName = this.firstName + " " + this.middleName + " " + this.lastName;
    console.log("Full Name:", this.fullName);

    // Student Details task2
    console.log("Student Details:");
    console.log("Name:", this.studentName);
    console.log("Contact No:", this.contactNo);
    console.log("Father Name:", this.fatherName);
    console.log("Mother Name:", this.motherName);
    console.log("Class:", this.studentClass);
    console.log("Roll No:", this.rollNo);

    // Address and City task3
    console.log("Address:", this.address);
    console.log("City:", this.city);
  }
}
