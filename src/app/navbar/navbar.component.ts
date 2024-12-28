import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShareServiceService } from '../services/share-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule,CommonModule ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  name='chouchene med amine'
  id=23042003
  private s=inject(ShareServiceService)
  verif=this.s.isAdmin
}
