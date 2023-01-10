import { Component, OnInit } from '@angular/core';
import { EmploeesService } from '../../services/emploees.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';


interface Employees {
  employees: Employee[];
}
interface Employee {
  id: number;
  name: string;
  last_name: string;
  birthday: number;
}
@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css'],
})
export class ListEmployeeComponent implements OnInit {
  employes: Employee[] = [];
  // @ts-ignore
  formEmploye: FormGroup;

  constructor(private employeeService: EmploeesService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formEmploye = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(30), Validators.minLength(3)]],
      last_name: ['', [Validators.required,Validators.minLength(3), Validators.maxLength(30)]],
      birthday: ['', Validators.required],
    });

    this.employeeService
      .getEmploye('miguel_cruz')
      .subscribe((resp: Employees) => {
        console.log('employee', resp.employees);
        this.employes = resp.employees;
      });
  }

  addEmployee(): void {
    const employeeData = this.formEmploye.getRawValue()
    console.log('employeeData', employeeData);
    this.employeeService
      .addEmployee('miguel_cruz', employeeData)
      .subscribe((resp: { success: boolean }) => {
        console.log('response', resp);
        if(resp.success){
          this.employes.unshift(employeeData);
        }
        this.formEmploye.reset();
      });
  }
}
