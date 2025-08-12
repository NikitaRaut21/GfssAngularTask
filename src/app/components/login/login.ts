import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  userObj:any={
    userName:'',
    password:'',
  }
  router =inject (Router)
    login() {
    if (this.userObj.userName === 'admin' && this.userObj. password === '1234') {
      alert("Login successful");
      localStorage.setItem('loginUser', this.userObj.userName);
      this.router.navigateByUrl('variabletask');
    } else {
      alert("Login failed");
    }
  }
}
