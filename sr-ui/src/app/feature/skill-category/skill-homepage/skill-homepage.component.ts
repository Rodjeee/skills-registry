import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-skill-homepage',
  templateUrl: './skill-homepage.component.html',
  styleUrls: ['./skill-homepage.component.css'],
})
export class SkillHomepageComponent implements OnInit {

  searchSkillForm: FormGroup;
  searchSkill: any;

  constructor() { }

  ngOnInit(): void {
    this.searchSkillForm = new FormGroup({
      searchSkill: new FormControl('')
    });
  }


}
