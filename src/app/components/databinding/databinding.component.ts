import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.scss'
})
export class DatabindingComponent {

  // Data Types
  // string,number,boolean,date

  courseName:string = "Angular 18"; //string
  inputType = "radio"; //string
  myClassName:string = "bg-primary";
  currentData:Date = new Date();
  stateName:string = "Essex";
  isIndian:boolean = true;

  firstName = signal('Shubham Dutta');


  constructor(){
    // this.inputType = "124"
  }
 

showAlert(message:string){
  alert(message)

}
changeCourseName(){
  this.courseName = "React.js";
  this.firstName.set("Tania Aroza");

  }

}
