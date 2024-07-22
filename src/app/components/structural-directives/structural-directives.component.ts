import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structural-directives',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './structural-directives.component.html',
  styleUrl: './structural-directives.component.scss'
})
export class StructuralDirectivesComponent {

  isDiv1Visible:boolean = true;
  isDiv2Visible:boolean = true;
  num1:string = '';
  num2:string = '';
  isActive:boolean = false;
  selectedState:string = '';

  cityArray:string[] = ['Essex', 'Sussex','London', 'Bristol'];

  studentList:any[]=[
    {
      id:1,
      name:"Shubham",
      city: "Colchster",
      isActive:true
    },
    {
      id:22,
      name:"Test2",
      city: "Colchster1",
      isActive:false
    },
    {
      id:3,
      name:"Test3",
      city: "Colchster2",
      isActive:false
    },
    {
      id:4,
      name:"Test4",
      city: "Colchster3",
      isActive:false
    },
    {
      id:5,
      name:"Test5",
      city: "Colchster4",
      isActive:false
    },

  ]

  showDiv1(){
  this.isDiv1Visible= true;

  }
  hideDiv1(){
  this.isDiv1Visible= false;

  }
  toggleDiv2(){
    this.isDiv2Visible =!this.isDiv2Visible;
  }
}
