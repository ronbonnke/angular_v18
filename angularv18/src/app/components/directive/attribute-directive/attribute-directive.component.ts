import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute-directive',
  imports: [CommonModule],
  templateUrl: './attribute-directive.component.html',
  styleUrl: './attribute-directive.component.css'
})
export class AttributeDirectiveComponent {

  bgdiv1color: string = "";

  redClass() {
    this.bgdiv1color = "bg-danger";
  }

  blueClass() {
    this.bgdiv1color = "bg-primary";
  }


}


//  all bootstrap colors
//  bg-primary
//  bg-secondary
//  bg-success
//  bg-danger
//  bg-warning
//  bg-info
