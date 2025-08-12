import { Component , inject } from '@angular/core';
import {  Router,RouterLink,RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
   standalone: true, 
  imports: [RouterOutlet,RouterLink],
  templateUrl: './layout.html',
  styleUrl: './layout.css'
})
export class Layout {
  router= inject(Router)

  logOff(){
  localStorage.removeItem('loginUser');
    this.router.navigateByUrl('login');
    // localStorage.removeItem('loginUser');
    // this.router.navigateByUrl('login');
  }
}
