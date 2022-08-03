import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  response:any;
  constructor(private http:HttpClient,private storage:StorageService) { }

  login(credencial){
    return this.response = this.http.post('https://tciconsultoria.com.mx/Apeam/ConsultaFactura/auth.php', credencial);
  }

  isAuth(){
    let data = this.storage.getCredentials();    
    return this.response != null || data != null;
  }

  logOut(){
    localStorage.clear();
    location.reload();
  }
}
