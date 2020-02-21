import { Component, OnInit } from '@angular/core';
import { SkillCategoryService } from '../../../../services/skill/skill-category.service';
import { SkillCategory } from '../../../../models/skills/skill-category.model';

@Component({
  selector: 'app-skill-category-list',
  templateUrl: './skill-category-list.component.html',
  styleUrls: ['./skill-category-list.component.scss']
})
export class SkillCategoryListComponent implements OnInit {

  skillCategories: SkillCategory[] = [];z

  constructor(private skillCategoryService: SkillCategoryService) { }

  ngOnInit(): void {
    this.getAllSkillCategory();
  }

  getAllSkillCategory() {
    this.skillCategoryService.getAllSkillCategory().subscribe((data: SkillCategory[]) => {
      this.skillCategories = data;
    });
  }
}
