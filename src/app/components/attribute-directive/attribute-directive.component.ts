import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attribute-directive',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './attribute-directive.component.html',
  styleUrl: './attribute-directive.component.scss'
})
export class AttributeDirectiveComponent {

  div1BgClor:string = 'bg-primary';
  isDiv2Active:boolean = true;
  num1:string = '';
  num2:string = '';
  isActive:boolean = false;
  customerStyle:any = {
    'color':'white',
    'background-color' :'red',
    'width':'200px',
    'height':'200px'

  };

  isDiv1Visible:boolean = true;
  isDiv2Visible:boolean = true;
  
  selectedState:string = '';

  cityArray:string[] = ['Essex', 'Sussex','London', 'Bristol'];

  studentList:any[]=[
    {
      id:1,
      name:"Shubham",
      totalMarks:30,
      gender:'Male',
      city: "Colchster",
      isActive:true
    },
    {
      id:22,
      name:"Test2",
      totalMarks:18,

      gender:'Female',
      city: "Colchster1",
      isActive:false
    },
    {
      id:3,
      name:"Test3",
      totalMarks:28,
      
      gender:'Male',
      city: "Colchster2",
      isActive:false
    },
    {
      id:4,
      name:"Test4",
      totalMarks:10,

      gender:'Female',
      city: "Colchster3",
      isActive:false
    },
    {
      id:5,
      name:"Test5",
      totalMarks:20,

      gender:'Female',
      
      city: "Colchster4",
      isActive:false
    },

  ]

  addRedClass(){
    this.div1BgClor = "bg-danger"
  }

  addBlueClass(){
    this.div1BgClor = "bg-primary"
  }
}
