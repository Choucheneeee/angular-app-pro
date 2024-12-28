import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareServiceService {
  profile={
    name: 'chaaaa',
    age: 30,
    contry:"Tunisia"
  }
  url="www.chaaa.tn"
  isAdmin=true

  constructor() { }


  affiche(){
    console.log(this.profile.name)
    console.log(this.profile.age)
    console.log(this.profile.contry)


  }
}
