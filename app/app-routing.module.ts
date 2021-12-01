import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployeeAllComponent } from './employee-all/employee-all.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'all', component: EmployeeAllComponent},
  {path: 'add', component: EmployeeCreateComponent},
  {path: 'edit/:id', component: EmployeeEditComponent},
  {path: '', redirectTo: 'all', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
