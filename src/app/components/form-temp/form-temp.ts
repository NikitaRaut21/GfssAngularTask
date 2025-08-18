import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Constant } from '../../Constants/const';

@Component({
  selector: 'app-form-temp',
  imports: [FormsModule,JsonPipe],
  templateUrl: './form-temp.html',
  styleUrl: './form-temp.css'
})
export class FormTemp {
  ValidationMsg:any= Constant.VALIDATION_MSG;
 studentObj: any = {
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    zip: '',
    isAcceptTerm: false
  }

  formValue: any;

  saveForm() {
    this.formValue = this.studentObj;
   
    
  }

  resetForm() {
   this.studentObj={
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    zip: '',
    isAcceptTerm: false
  }
  }
}
