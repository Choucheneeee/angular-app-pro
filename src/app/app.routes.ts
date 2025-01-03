import { Routes } from '@angular/router';
import path from 'node:path';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './profile/profile.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DetailsComponent } from './details/details.component';
import { guardAdminGuard } from './guards/guard-admin.guard';
import { FrontLayoutComponent } from './layouts/front-layout/front-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';

export const routes: Routes = [
    {path:"",component:FrontLayoutComponent,
        children: [
            {path:"",loadChildren:()=>import('./views/front/home/home.module').then(m=>m.HomeModule)},
            {path:"about",loadChildren:()=>import('./views/front/about/about.module').then(m=>m.AboutModule)},
            {path:"contact",loadChildren:()=>import('./views/front/contact/contact.module').then(m=>m.ContactModule)}


        ]
    },
    {path:"admin",component:AdminLayoutComponent,
        children:[
            {path:'',loadChildren:()=>import('./views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},
            {path:'addproduct',loadChildren:()=>import('./views/admin/addproduct/addproduct.module').then(m=>m.AddproductModule)},
            {path:'addstudent',loadChildren:()=>import('./views/admin/addstudent/addstudent.module').then(m=>m.AddstudentModule)}


        ]
    },
    {path:"user",component:UserLayoutComponent,
        children:[
            {path:'',loadChildren:()=>import('./views/user/homeuser/homeuser.module').then(m=>m.HomeuserModule)},
            {path:'viewcard',loadChildren:()=>import('./views/user/viewcard/viewcard.module').then(m=>m.ViewcardModule)},
            {path:'viewproduct',loadChildren:()=>import('./views/user/viewproduct/viewproduct.module').then(m=>m.ViewproductModule)},
            {path:'viewstudent',loadChildren:()=>import('./views/user/viewstudent/viewstudent.module').then(m=>m.ViewstudentModule)}



        ]
    },




    {path:'cha',redirectTo:'',pathMatch:'full'},    
    {path:'**',component:PagenotfoundComponent}
    

    ];
