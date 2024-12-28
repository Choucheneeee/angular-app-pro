import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
  testObservable(){
    return new Observable((observer) => {
      setTimeout(()=>{
        observer.next('test1')
      },2000) 
      setTimeout(()=>{
        observer.next('test2')
        },4000)
        setTimeout(()=>{
          observer.next('test3')
        },6000) 
        setTimeout(()=>{
          observer.next('test4')
          },8000)
        setTimeout(()=>{
          observer.complete()
        },9000) 
        setTimeout(()=>{
          observer.next('test5')
          },10000)

    })
  }
}
