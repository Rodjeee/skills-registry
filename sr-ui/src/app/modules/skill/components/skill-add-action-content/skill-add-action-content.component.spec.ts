import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillAddActionContentComponent } from './skill-add-action-content.component';

describe('SkillAddActionContentComponent', () => {
  let component: SkillAddActionContentComponent;
  let fixture: ComponentFixture<SkillAddActionContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillAddActionContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillAddActionContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
