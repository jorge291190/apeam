import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../service/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor( private ls:LoginService, private route: Router ){

  }
  canActivate(): boolean{    
    if(this.ls.isAuth()){
        return true;
    }else{
      this.route.navigateByUrl('login');
      return false;
    }
  }
  
}
