import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})


export class ProfileComponent {
  id=''
  name=''
  contry=''
  constructor(private route:ActivatedRoute){
    this.route.queryParamMap.subscribe(data=>{
      this.id=data.get('id')|| ''
      this.name=data.get('name')|| ''
      this.contry=data.get('contry')|| '' 
 

    })

  }

}
