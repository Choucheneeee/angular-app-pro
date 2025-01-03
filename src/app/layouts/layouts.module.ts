import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontLayoutComponent } from './front-layout/front-layout.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    
  ],
  imports: [
    FrontLayoutComponent,
    AdminLayoutComponent,
    UserLayoutComponent,
    CommonModule,
    RouterModule,
  ]
})
export class LayoutsModule { }
