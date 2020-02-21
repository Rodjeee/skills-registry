import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SkillAddActionContentComponent } from '../skill-add-action-content/skill-add-action-content.component';

@Component({
  selector: 'app-skill-add-action',
  templateUrl: './skill-add-action.component.html',
  styleUrls: ['./skill-add-action.component.scss']
})
export class SkillAddActionComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openAddActionDialog(): void {
    const dialogRef = this.dialog.open(SkillAddActionContentComponent, {
      width: '350px'
    });
    console.log('h1');

    dialogRef.afterClosed().subscribe(result => {
      console.log('The skill add action button was closed' + result);
    });
  }


}
