import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SkillCategoryListComponent } from './skill-category/skill-category-list/skill-category-list.component';
import { SkillHomepageComponent } from './skill-category/skill-homepage/skill-homepage.component';


const routes: Routes = [
  {
    path: 'skillcategories',
    component: SkillCategoryListComponent
  },
  {
    path: '',
    component: SkillHomepageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
