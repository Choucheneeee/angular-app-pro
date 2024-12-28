import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ShareServiceService } from '../services/share-service.service';
import { resolve } from 'path';
import { rejects } from 'assert';

export const guardAdminGuard: CanActivateFn = (route, state) => {
  const router=inject(Router)
  const share=inject(ShareServiceService)
  return new Promise((resolve,rejects)=>{
    if (share.isAdmin){
      resolve(true)
    }
    else{
      router.navigate(['/'])
      resolve(false)
    }
  })
};
