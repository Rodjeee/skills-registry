import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DashboardRoutingModule } from './dashboard.routing';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { SharedModule } from '../../shared/shared.module';
import { FilterEmployeeComponent } from './components/filter-employee/filter-employee.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';

@NgModule({
  declarations: [DashboardComponent, FilterEmployeeComponent, EmployeeListComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(DashboardRoutingModule),
  ]
})
export class DashboardModule { }