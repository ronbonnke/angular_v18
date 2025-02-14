import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structural-directive',
  imports: [CommonModule, FormsModule],
  templateUrl: './structural-directive.component.html',
  styleUrl: './structural-directive.component.css'
})
export class StructuralDirectiveComponent {
  
  // div1
  isDiv1Visible: boolean = true;
  showDiv1() {
    this.isDiv1Visible = true;
  }
  HideDiv1() {
    this.isDiv1Visible = false;
  }


  // div2
  isDiv2Visible: boolean = true;
  toggleDiv2() {
    this.isDiv2Visible = !this.isDiv2Visible;
    // if(this.isDiv2Visible == true) {
    //   this.isDiv2Visible = false;
    // } else {
    //   this.isDiv2Visible = true;
    // }
  }


  // div 3
  num1: string = ""
  num2: string = ""



  // div 4
  // for checkbox
  isActive: boolean = false;


  selectedState: string = "";
  
  
  // for other dropdowns
  cityArray: string[] = ["pune", "mumbai", "delhi", "bangalore"];


// Array of objects
  studentList: any[] = [
    {name: "Ron", std_Id: 201, city: "Bangalore", isActive: false},
    {name: "jay", std_Id: 202, city: "chennai", isActive: true},
    {name: "Bonnke", std_Id: 203, city: "cuddalore", isActive: false},
    {name: "tom", std_Id: 204, city: "himachal", isActive: true},
    {name: "ste", std_Id: 205, city: "goa", isActive: true},
  ]
}
