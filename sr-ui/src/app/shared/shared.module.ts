import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatToolbarModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class SharedModule { }
