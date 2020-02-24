import { Component, OnInit, EventEmitter } from '@angular/core';
import { SkillCategoryService } from '../../../../services/skill/skill-category.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-skill-category-create',
  templateUrl: './skill-category-create.component.html',
  styleUrls: ['./skill-category-create.component.scss']
})
export class SkillCategoryCreateComponent implements OnInit {

  createSkillCategoryForm: FormGroup;
  Name: string;
  actionChoice = new EventEmitter();

  constructor(private skillCategoryService: SkillCategoryService, private skillCategoryForm: FormBuilder, private dialogRef: MatDialogRef<SkillCategoryCreateComponent>) { }

  ngOnInit() {
    this.createSkillCategoryValidator();
  }

  createSkillCategoryValidator() {
    this.createSkillCategoryForm = this.skillCategoryForm.group({
      Name: ['', Validators.required]
    });
  }

  async createSkillCategory(Name) {
    await this.skillCategoryService.createSkillCategory(Name).toPromise();
    this.dialogRef.close();
  }

}
