import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeuserRoutingModule } from './homeuser-routing.module';
import { HomeComponent } from '../../../home/home.component';
import { HomeuserComponent } from './homeuser.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeuserComponent,
    HomeuserRoutingModule
  ]
})
export class HomeuserModule { }
