import { Component } from '@angular/core';
import { Alert } from '../../reusableCoponents/alert/alert/alert';
import { Router } from '@angular/router';



@Component({
  selector: 'app-image-comp',
  imports: [Alert],
  templateUrl: './image-comp.html',
  styleUrl: './image-comp.css'
})
export class ImageComp {
  
  constructor(private router: Router) {}
  navigateObjectTask(){
    this.router.navigate(['/object-task']);
    
  }

}
