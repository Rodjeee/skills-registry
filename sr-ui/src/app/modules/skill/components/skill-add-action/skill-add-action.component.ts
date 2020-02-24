import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { SkillAddActionContentComponent } from '../skill-add-action-content/skill-add-action-content.component';

@Component({
  selector: 'app-skill-add-action',
  templateUrl: './skill-add-action.component.html',
  styleUrls: ['./skill-add-action.component.scss']
})
export class SkillAddActionComponent implements OnInit {

  constructor(public dialog: MatDialog, private snackbar: MatSnackBar) { }

  ngOnInit() {
  }

  openAddActionDialog(): void {
    this.dialog.open(SkillAddActionContentComponent, {
      width: '420px'
    });
  }
}
