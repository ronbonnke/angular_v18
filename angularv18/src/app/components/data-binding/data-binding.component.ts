import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  // string, number, boolean, date, any, void, null, undefined, never, object
  
  // variable decalrations in angular
  courseName: string = "angular18";
  inputType = "checkbox";
  inputTypeRadio = "radio";
  myClassName: string = "bg-danger text-white";
  rollNo: number = 123;
  isNumber: boolean = true;
  currentDate: Date = new Date();

  constructor(){

  }

  changeCourseName(){
    this.courseName = "New-course";
  }

  showAlert(message: string){ 
    alert(message);
  }

}
