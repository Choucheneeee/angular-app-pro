import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewcardComponent } from './viewcard.component';

const routes: Routes = [
    {path:"",component:ViewcardComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewcardRoutingModule { }
