import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from "./footer/footer.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HomeComponent } from "./home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    NavbarComponent,
    FooterComponent,
    ReactiveFormsModule,
    HomeComponent
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

}
