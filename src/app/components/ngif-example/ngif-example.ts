import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ngif-example',
  imports: [FormsModule,CommonModule],
  templateUrl: './ngif-example.html',
  styleUrl: './ngif-example.css'
})
export class NgifExample {
 gender: string = '';
  input1: string = '';
  input2: string = '';
}
