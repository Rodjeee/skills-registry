import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillCategoryCreateComponent } from './skill-category-create.component';

describe('SkillCategoryCreateComponent', () => {
  let component: SkillCategoryCreateComponent;
  let fixture: ComponentFixture<SkillCategoryCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillCategoryCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillCategoryCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
