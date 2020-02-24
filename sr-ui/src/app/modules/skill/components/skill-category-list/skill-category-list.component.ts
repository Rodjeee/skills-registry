import { Component, OnInit } from '@angular/core';
import { SkillCategoryService } from '../../../../services/skill/skill-category.service';
import { SkillCategory } from '../../../../models/skills/skill-category.model';
import { ActivatedRoute, Router } from '@angular/router';
import { SkillService } from '../../../../services/skill/skill.service';

@Component({
  selector: 'app-skill-category-list',
  templateUrl: './skill-category-list.component.html',
  styleUrls: ['./skill-category-list.component.scss']
})
export class SkillCategoryListComponent implements OnInit {

  skillCategory: any;
  skillCategories: SkillCategory[] = [];
  skillCategoryID: string;

  constructor(private skillCategoryService: SkillCategoryService, private skillService: SkillService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllSkillCategory();
    
    //let paramID: any = this.activatedRoute.snapshot.params;
  }

  getAllSkillCategory() {
    this.skillCategoryService.getAllSkillCategory().subscribe((data: SkillCategory[]) => {
      this.skillCategories = data;
    });
  }

  getSelectedCategory(skillCategory: SkillCategory): void {
    this.skillCategory = skillCategory._id;
    this.skillCategoryService.raiseEvent(this.skillCategory);
  }
}
