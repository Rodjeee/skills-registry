import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-skill-add-action-content',
  templateUrl: './skill-add-action-content.component.html',
  styleUrls: ['./skill-add-action-content.component.scss']
})
export class SkillAddActionContentComponent {
  actionChoice: boolean = false
  isNewSkillCategory: boolean = false;
  isNewSkillToCategory: boolean = false;

  constructor() { }

  newSkillCategoryContent(): void {
    this.isNewSkillCategory = true;
    this.actionChoice = true;
  }

  newSkillToCategoryContent(): void {
    this.isNewSkillToCategory = true;
    this.actionChoice = true;
  }
}
