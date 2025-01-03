import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddstudentRoutingModule } from './addstudent-routing.module';
import { AddstudentComponent } from './addstudent/addstudent.component';


@NgModule({
  declarations: [],
  imports: [
    AddstudentComponent,
    CommonModule,
    AddstudentRoutingModule
  ]
})
export class AddstudentModule { }
