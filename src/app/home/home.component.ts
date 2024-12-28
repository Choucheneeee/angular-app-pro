import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ShareServiceService } from '../services/share-service.service';
import { CommonModule } from '@angular/common';
import { first } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  myForm:any

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      firstname: ['', [Validators.required,Validators.minLength(3),Validators.maxLength(10)]],
      lastname: ['', Validators.required],
      age: ['0', Validators.required],
      email: ['',[ Validators.email,Validators.required]],

    });
}
  print(){
    console.log("form: ",this.myForm.value);
  }


}
