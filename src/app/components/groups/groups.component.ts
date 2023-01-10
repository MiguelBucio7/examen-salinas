import { Component, OnInit } from '@angular/core';
import { EmploeesService } from '../../services/emploees.service';
import { FormGroup, FormBuilder } from '@angular/forms';

interface Groups {
  groups: { id: number; name: string }[];
}
@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css'],
})
export class GroupsComponent implements OnInit {
  droppedItems: { name: string; checked: boolean }[] = [];
  items: Groups['groups'] = [];
  searchField = '';
  nameGroup = '';

  constructor(
    private employeesService: EmploeesService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.employeesService
      .getGroupsEmployees('miguel_cruz')
      .subscribe((r: { data: Groups }) => {
        console.log('groups', r);
        this.items = r.data.groups;
      });
  }

  onItemDrop(e: { dragData: { id: string; name: string } }) {
    this.droppedItems = [];
    this.nameGroup = '';
    this.nameGroup = e.dragData.name;
    console.log('drag', e);
    this.employeesService
      .getEmployeesByGroup('miguel_cruz', e.dragData.id)
      .subscribe(
        (r: { data: { employees: { name: string; checked: boolean }[] } }) => {
          console.log('get employes by group', r.data.employees);
          for (const empl of r.data.employees) {
            empl.checked = true;
            this.droppedItems.push(empl);
          }
        }
      );
  }

  cleanGroup(): void {
    this.droppedItems = [];
    this.nameGroup = '';
  }

  selectAll(ev: any): void {
    console.log('evento', ev);
    const checkedAll: { name: string; checked: boolean }[] = [];
    this.droppedItems.forEach((elm) => {
      elm.checked = true;
      checkedAll.push(elm);
    });
    setTimeout(() => {
      this.droppedItems = checkedAll;
      console.log('this.droped item', this.droppedItems);
    }, 2000);
  }
}
