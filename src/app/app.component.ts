import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { StructuralDirectivesComponent } from "./components/structural-directives/structural-directives.component";
import { AttributeDirectiveComponent } from "./components/attribute-directive/attribute-directive.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DatabindingComponent, StructuralDirectivesComponent, AttributeDirectiveComponent,AddEmployeeComponent,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular18';
}
