import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { HolderService } from './holder.service';

@Injectable({
  providedIn: 'root'
})
export class MasterGuard implements CanActivate {
  constructor(private hold:HolderService,private rou:Router){}

  canActivate():boolean{
    if(this.hold.GetisMaster())
    {
      return true;
    }
    else{
      window.alert("You don't have permission to view this Page");
      this.rou.navigateByUrl("/Login");
      return false;
    }
  }
  
}
