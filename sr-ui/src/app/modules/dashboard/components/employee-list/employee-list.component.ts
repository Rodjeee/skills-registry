import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'designation', 'totalSkill', 'updateDate', 'getDetail'];
  dataSource = new MatTableDataSource<Employee>(EMPLOYEE_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

}

export interface Employee {
  position: number;
  name: string;
  designation: string;
  totalSkill: number;
  updateDate: string;
}

const EMPLOYEE_DATA: Employee[] = [
  {position: 1, name: 'John Doe', designation: 'Senior Developer', totalSkill: 99, updateDate: new Date().toLocaleDateString()},
  {position: 1, name: 'John Doe', designation: 'Senior Developer', totalSkill: 99, updateDate: new Date().toLocaleDateString()},
  {position: 1, name: 'John Doe', designation: 'Senior Developer', totalSkill: 99, updateDate: new Date().toLocaleDateString()},
  {position: 1, name: 'John Doe', designation: 'Senior Developer', totalSkill: 99, updateDate: new Date().toLocaleDateString()},
  {position: 1, name: 'John Doe', designation: 'Senior Developer', totalSkill: 99, updateDate: new Date().toLocaleDateString()},
  {position: 1, name: 'John Doe', designation: 'Senior Developer', totalSkill: 99, updateDate: new Date().toLocaleDateString()},
  {position: 1, name: 'John Doe', designation: 'Senior Developer', totalSkill: 99, updateDate: new Date().toLocaleDateString()},
  {position: 1, name: 'John Doe', designation: 'Senior Developer', totalSkill: 99, updateDate: new Date().toLocaleDateString()},
  {position: 1, name: 'John Doe', designation: 'Senior Developer', totalSkill: 99, updateDate: new Date().toLocaleDateString()},
  {position: 1, name: 'John Doe', designation: 'Senior Developer', totalSkill: 99, updateDate: new Date().toLocaleDateString()},
  {position: 1, name: 'John Doe', designation: 'Senior Developer', totalSkill: 99, updateDate: new Date().toLocaleDateString()},
  {position: 1, name: 'John Doe', designation: 'Senior Developer', totalSkill: 99, updateDate: new Date().toLocaleDateString()},
  {position: 1, name: 'John Doe', designation: 'Senior Developer', totalSkill: 99, updateDate: new Date().toLocaleDateString()},
  {position: 1, name: 'John Doe', designation: 'Senior Developer', totalSkill: 99, updateDate: new Date().toLocaleDateString()},
  {position: 1, name: 'John Doe', designation: 'Senior Developer', totalSkill: 99, updateDate: new Date().toLocaleDateString()},
  {position: 1, name: 'John Doe', designation: 'Senior Developer', totalSkill: 99, updateDate: new Date().toLocaleDateString()},
  {position: 1, name: 'John Doe', designation: 'Senior Developer', totalSkill: 99, updateDate: new Date().toLocaleDateString()},
  {position: 1, name: 'John Doe', designation: 'Senior Developer', totalSkill: 99, updateDate: new Date().toLocaleDateString()},
  {position: 1, name: 'John Doe', designation: 'Senior Developer', totalSkill: 99, updateDate: new Date().toLocaleDateString()},
  {position: 1, name: 'John Doe', designation: 'Senior Developer', totalSkill: 99, updateDate: new Date().toLocaleDateString()},
  {position: 1, name: 'John Doe', designation: 'Senior Developer', totalSkill: 99, updateDate: new Date().toLocaleDateString()},
  {position: 1, name: 'John Doe', designation: 'Senior Developer', totalSkill: 99, updateDate: new Date().toLocaleDateString()},
  {position: 1, name: 'John Doe', designation: 'Senior Developer', totalSkill: 99, updateDate: new Date().toLocaleDateString()},
  {position: 1, name: 'John Doe', designation: 'Senior Developer', totalSkill: 99, updateDate: new Date().toLocaleDateString()},
  {position: 1, name: 'John Doe', designation: 'Senior Developer', totalSkill: 99, updateDate: new Date().toLocaleDateString()},
  {position: 1, name: 'John Doe', designation: 'Senior Developer', totalSkill: 99, updateDate: new Date().toLocaleDateString()},
  {position: 1, name: 'John Doe', designation: 'Senior Developer', totalSkill: 99, updateDate: new Date().toLocaleDateString()},
  {position: 1, name: 'John Doe', designation: 'Senior Developer', totalSkill: 99, updateDate: new Date().toLocaleDateString()},
  {position: 1, name: 'John Doe', designation: 'Senior Developer', totalSkill: 99, updateDate: new Date().toLocaleDateString()},
  {position: 1, name: 'John Doe', designation: 'Senior Developer', totalSkill: 99, updateDate: new Date().toLocaleDateString()},
  {position: 1, name: 'John Doe', designation: 'Senior Developer', totalSkill: 99, updateDate: new Date().toLocaleDateString()},
  {position: 1, name: 'John Doe', designation: 'Senior Developer', totalSkill: 99, updateDate: new Date().toLocaleDateString()},
  {position: 1, name: 'John Doe', designation: 'Senior Developer', totalSkill: 99, updateDate: new Date().toLocaleDateString()},
  {position: 1, name: 'John Doe', designation: 'Senior Developer', totalSkill: 99, updateDate: new Date().toLocaleDateString()},
  {position: 1, name: 'John Doe', designation: 'Senior Developer', totalSkill: 99, updateDate: new Date().toLocaleDateString()},
  {position: 1, name: 'John Doe', designation: 'Senior Developer', totalSkill: 99, updateDate: new Date().toLocaleDateString()},
];
