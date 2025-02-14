import { Component, signal } from '@angular/core';
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
  stateName: string = "Maharashtra";
  inputType = "checkbox";
  inputTypeRadio = "radio";
  myClassName: string = "bg-danger text-white";
  rollNo: number = 123;
  isIndian: boolean = false;
  currentDate: Date = new Date();


  firstName = signal("ronBonnke")

  constructor(){

  }

  changeCourseName(){
    this.courseName = "New-course";
    this.firstName.set("bonnkeRon")
  }

  showAlert(message: string){ 
    alert(message);
  }

}
