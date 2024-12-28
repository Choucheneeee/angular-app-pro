import { Component, Input, input, OnDestroy, OnInit } from '@angular/core'; // Import necessary Angular core modules
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms'; // Import necessary form modules for reactive forms
import { Router } from '@angular/router'; // Import Router for navigation
import { ShareServiceService } from '../services/share-service.service'; // Import service for shared data or logic
import { CommonModule } from '@angular/common'; // Import CommonModule for Angular modules like ngIf, ngFor
import { first, Subscription } from 'rxjs'; // Import RxJS operators and Subscription class
import { tick } from '@angular/core/testing'; // Import tick function (though it's not used in this code)
import { title } from 'process'; // Import title (though it's not used in this code)

@Component({
  selector: 'app-home', // The selector for this component, used to reference it in the HTML
  standalone: true, // Marks this component as standalone, meaning it can be used independently in other modules
  imports: [
    CommonModule, // Import CommonModule to use common directives like ngIf, ngFor
    ReactiveFormsModule // Import ReactiveFormsModule for reactive forms functionality
  ],
  templateUrl: './home.component.html', // The HTML template for this component
  styleUrls: ['./home.component.css'] // The CSS file for this component
})
export class HomeComponent implements OnInit, OnDestroy { // Define HomeComponent class implementing OnInit and OnDestroy interfaces
  
  myForm: any; // Declare the form group for the component
  num: any; // Declare variable to hold the value received from observable
  ob: Subscription; // Declare Subscription to handle observable unsubscribe logic
  
  @Input('name') myName:any
  @Input("note") note:any
  @Input('myprofile') pr:any
  constructor(private fb: FormBuilder, private share: ShareServiceService) { // Constructor injects FormBuilder and ShareServiceService
    this.ob = this.share.testObservable().subscribe((val => { // Subscribe to the observable returned by ShareService
      console.log("subscribed"); // Log message when subscribed
      this.num = val; // Assign the received value to the 'num' variable
    }));




    // Initialize the form group with validation rules
    this.myForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]], // firstname field with validation
      lastname: ['', Validators.required], // lastname field with required validation
      age: ['0', Validators.required], // age field with required validation
      email: ['', [Validators.email, Validators.required]], // email field with email validation and required validation
      items: this.fb.array([ // items is a FormArray of FormGroups
        this.fb.group({
          id: ['1'], // Initial item with 'id' 1
          title: [''] // Title of the item (empty initially)
        }),
        this.fb.group({
          id: ['2'], // Initial item with 'id' 2
          title: [''] // Title of the item (empty initially)
        })
      ])
    });
  }

  print() { // Method to print the current form value to the console
    console.log("form: ", this.myForm.value);
  }

  // Getter methods for easy access to form controls
  get firstname() {
    return this.myForm.get('firstname');
  }

  get lastname() {
    return this.myForm.get('lastname');
  }

  get age() {
    return this.myForm.get('age');
  }

  get email() {
    return this.myForm.get('email');
  }

  // Getter method for accessing 'items' as a FormArray
  get items() {
    return this.myForm.get('items') as FormArray;
  }

  addnew() { // Method to add a new item to the 'items' FormArray
    let newrows = this.fb.group({
      id: [''], // New item with empty 'id'
      title: [''] // New item with empty 'title'
    });
    this.items.push(newrows); // Add the new item to the 'items' array
  }

  delete(i: any) { // Method to remove an item from the 'items' FormArray at a specific index
    this.items.removeAt(i); // Remove the item at index 'i'
  }

  ngOnInit() { // Lifecycle hook called after component initialization
    this.myForm.patchValue({ // Patch value for the 'firstname' field (other fields remain unchanged)
      firstname: 'John', // Set 'firstname' to 'John'
    });
  }

  ngOnDestroy(): void { // Lifecycle hook called just before component is destroyed
    console.log('destroy'); // Log message when component is destroyed
    this.ob.unsubscribe(); // Unsubscribe from the observable to prevent memory leaks
  }
}
