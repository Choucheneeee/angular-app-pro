import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddproductRoutingModule } from './addproduct-routing.module';
import { AddproductComponent } from './addproduct/addproduct.component';


@NgModule({
  declarations: [],
  imports: [
    AddproductComponent,
    CommonModule,
    AddproductRoutingModule
  ]
})
export class AddproductModule { }
