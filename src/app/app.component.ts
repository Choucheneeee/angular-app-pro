import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule, RouterOutlet } from '@angular/router';
import { FooterComponent } from "./footer/footer.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AboutComponent } from "./about/about.component";
import { HttpClientModule } from '@angular/common/http';
import { LayoutsModule } from './layouts/layouts.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    LayoutsModule,
],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  first="chouchene"
  note="58" 
  profile={
    "name": "chouchene",
    "age": 25,
    "city": "tunis"
  }
  p:any
  b:any
  myprint(event:any){
    console.log('parent')
    console.log(event,':::event')
    console.log("your position:",event.pos)
    this.b=event.browser
    this.p=event.pos
  }

}
