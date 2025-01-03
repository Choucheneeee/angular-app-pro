import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewcardRoutingModule } from './viewcard-routing.module';
import { ViewcardComponent } from './viewcard.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ViewcardComponent,
    ViewcardRoutingModule
  ]
})
export class ViewcardModule { }
