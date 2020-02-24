import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SkillRoutingModule } from './skill.routing';
import { SkillComponent } from './page/skill/skill.component';
import { SharedModule } from '../../shared/shared.module';
import { SkillCategoryListComponent } from './components/skill-category-list/skill-category-list.component';
import { SearchSkillComponent } from './components/search-skill/search-skill.component';
import { SkillAddActionComponent } from './components/skill-add-action/skill-add-action.component';
import { SkillAddActionContentComponent } from './components/skill-add-action-content/skill-add-action-content.component';
import { SkillCategoryCreateComponent } from './components/skill-category-create/skill-category-create.component';
import { SkillListComponent } from './components/skill-list/skill-list.component';
import { SkillCreateComponent } from './components/skill-create/skill-create.component';


@NgModule({
    declarations: [SkillComponent, SkillCategoryListComponent, SearchSkillComponent, SkillAddActionComponent, SkillAddActionContentComponent, SkillCategoryCreateComponent, SkillListComponent, SkillCreateComponent],
    imports: [

        SharedModule,
        RouterModule.forChild(SkillRoutingModule)
    ],
    entryComponents: [
        SkillAddActionContentComponent
    ]
})
export class SkillModule {}