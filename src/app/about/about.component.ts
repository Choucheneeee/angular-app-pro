import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, viewChild } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit,AfterViewInit {
  
  @ViewChild('first') myInput!: ElementRef;
  constructor(){

  }
  ngOnInit(){

  }
  b:any
  ngAfterViewInit(): void {
    this.myInput.nativeElement.focus()
    this.myInput.nativeElement.value="cha"
    }
}
