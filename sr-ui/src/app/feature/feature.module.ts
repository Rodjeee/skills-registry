import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { SkillCategoryService } from '../services/skill-category.service';
import { SkillCategoryListComponent } from './skill-category/skill-category-list/skill-category-list.component';
import { SkillCategoryCreateComponent } from './skill-category/skill-category-create/skill-category-create.component';
import { SkillHomepageComponent } from './skill-category/skill-homepage/skill-homepage.component';
import { SkillListComponent } from './skill-category/skill-list/skill-list.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
@NgModule({
  declarations: [
    SkillCategoryListComponent,
    SkillCategoryCreateComponent,
    SkillHomepageComponent,
    SkillListComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatGridListModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatExpansionModule,
    MatCardModule
  ],
  exports: [
    SkillHomepageComponent
  ],
  providers: [
    SkillCategoryService
  ]
})
export class FeatureModule { }
