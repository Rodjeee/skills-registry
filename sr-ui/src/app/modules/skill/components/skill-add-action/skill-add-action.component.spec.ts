import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillAddActionComponent } from './skill-add-action.component';

describe('SkillAddActionComponent', () => {
  let component: SkillAddActionComponent;
  let fixture: ComponentFixture<SkillAddActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillAddActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillAddActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
