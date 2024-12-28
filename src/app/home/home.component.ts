import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ShareServiceService } from '../services/share-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  profile={
    "firstname":''
  }
  constructor(private route:Router,private mydata:ShareServiceService){
    
  }

  goTodetails(){
    this.route.navigate(['/profile/details'])
    
  }

  goToview(){
    console.log(this.profile.firstname)
    this.route.navigate(['/profile/view/'+this.profile.firstname])

  }
  add(f:NgForm){
    let data=f.value
    console.log(data)
  
  }
}
