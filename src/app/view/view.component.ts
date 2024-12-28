import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {
  name=""
  constructor(private route:ActivatedRoute){
    this.route.paramMap.subscribe(data=> {
    this.name=data.get("name")||''
    })
  }
}
