import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { StructuralDirectivesComponent } from './components/structural-directives/structural-directives.component';
import { AttributeDirectiveComponent } from './components/attribute-directive/attribute-directive.component';
import { ControlflowComponent } from './controlflow/controlflow.component';

export const routes: Routes = [
    {
        path:'add-emp',
        component:AddEmployeeComponent,


    },
    {
        path:'data-binding',
        component:DatabindingComponent
    },
    {
        path:'emp-list',
        component:EmployeeListComponent
    },
    {
        path:'structural-dir',
        component:StructuralDirectivesComponent
    },
    {
        path:'attribute-dir',
        component:AttributeDirectiveComponent
    },
    {
        path:'controlFlow',
        component:ControlflowComponent
    },
];
