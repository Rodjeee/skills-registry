import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent, MatAutocomplete } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';


interface Detail {
  value: string;
  viewValue: string,
}

@Component({
  selector: 'app-filter-employee',
  templateUrl: './filter-employee.component.html',
  styleUrls: ['./filter-employee.component.scss']
})
export class FilterEmployeeComponent {
  visible = true;
  selectable = true;
  removable = true;
  seperatorKeysCodes: number[] = [ENTER, COMMA];
  skillCtrl = new FormControl();
  filteredSkills: Observable<string[]>;
  skills: string[] = [];
  allSkills: string[] = ['Java', 'C++', 'Python', 'PHP', 'Swift'];

  @ViewChild('skillInput', {static : true}) skillInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto', {static : true}) matAutocomplete: MatAutocomplete;

  constructor() { 
    this.filteredSkills = this.skillCtrl.valueChanges.pipe(
      startWith(null),
      map((skill: string | null) => skill ? this._filter(skill) : this.allSkills.slice()));
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add skill
    if ((value || '').trim()) {
      this.skills.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.skillCtrl.setValue(null);
  }

  remove(skill: string): void {
    const index = this.skills.indexOf(skill);

    if (index >= 0) {
      this.skills.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.skills.push(event.option.viewValue);
    this.skillInput.nativeElement.value = '';
    this.skillCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allSkills.filter(skill => skill.toLowerCase().indexOf(filterValue) === 0);
  }

  details: Detail[] = [
    {value: 'name-0', viewValue: 'Name'},
    {value: 'proficiency-1', viewValue: 'Proficiency level'},
    {value: 'date-2', viewValue: 'Date Updated'},
    {value: 'designation', viewValue: 'Designation'}
  ];
}
