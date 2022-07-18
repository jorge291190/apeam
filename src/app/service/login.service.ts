import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  response:any;
  constructor(private http:HttpClient) { }

  login(credencial){
    return this.response = this.http.post('https://tciconsultoria.com.mx/Apeam/ConsultaFactura/auth.php', credencial);
  }

  isAuth(){
    return this.response != null || localStorage.getItem('credencial') != null;
  }
}
