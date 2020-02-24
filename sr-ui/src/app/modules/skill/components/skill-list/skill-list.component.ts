import { Component, OnInit } from '@angular/core';

import { SkillService } from '../../../../services/skill/skill.service';
import { SkillCategoryService } from '../../../../services/skill/skill-category.service';
import { Skill } from '../../../../models/skills/skill.model';
@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.scss']
})
export class SkillListComponent implements OnInit {

  skills: Skill[] = [];
  skillCategoryID: string;

  constructor(private skillService: SkillService, private skillCategoryService: SkillCategoryService) {
  }

  ngOnInit() {
    this.skillCategoryService.receivedFilter.subscribe((param: string) => {
      this.skillCategoryID = param;
      this.getAllSkillsInCategory();
    })
  }

  getAllSkillsInCategory() {
    this.skillService.getAllSkillsInCategory(this.skillCategoryID).subscribe((data: Skill[]) => {
      this.skills = data;
    })
  }
}
