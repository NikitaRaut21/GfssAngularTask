import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-bootstrap-ngfor',
  imports: [CommonModule],
  templateUrl: './bootstrap-ngfor.html',
  styleUrl: './bootstrap-ngfor.css'
})
export class BootstrapNgfor {
users = [
    { name: 'Nikita Raut', email: 'niks2102@gmail.com', age: 22, city: 'Nashik' },
    { name: 'Rutuja Jadhav', email: 'rutja0103@gmail.com', age: 33, city: 'Solpaur' },
    { name: 'Sarita sadgir', email: 'sari120@gmail.com', age: 28, city: 'Nagar' }
  ];
}
