import { Routes } from '@angular/router';
import path from 'node:path';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './profile/profile.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ViewComponent } from './view/view.component';
import { DetailsComponent } from './details/details.component';
import { guardAdminGuard } from './guards/guard-admin.guard';

export const routes: Routes = [
    {path: "",component:HomeComponent},
    {path: "about",component:AboutComponent,canActivate:[guardAdminGuard]},
    {path: "contact",component:ContactComponent,canActivate:[guardAdminGuard]},
    {path: "profile",component:ProfileComponent,canActivate:[guardAdminGuard]},


    {path: "profile",children:[
        {path:'view/:name',component:ViewComponent},
        {path:'details',component:DetailsComponent}
    ]

    }, 
    {path:'cha',redirectTo:'',pathMatch:'full'},    
    {path:'**',component:PagenotfoundComponent}
    

    ];
