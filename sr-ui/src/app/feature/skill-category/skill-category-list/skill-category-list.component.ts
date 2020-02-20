import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SkillCategoryService } from '../../../services/skill-category.service';
import { SkillCategory } from 'src/app/models/skill-category.model';


@Component({
  selector: 'app-skill-category-list',
  templateUrl: './skill-category-list.component.html',
  styleUrls: ['./skill-category-list.component.css'],
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
