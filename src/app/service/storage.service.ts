import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { EncryptService } from './encrypt.service';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private encrypt:EncryptService) {

  }

  setCredentials(object){
    localStorage.setItem(environment.key, this.encrypt.encryptTxt( JSON.stringify(object) ));
  }

  getCredentials(){
   let data = localStorage.getItem( environment.key );
   return data != null && data != "" ? this.getJson(data): null;
  }

  getJson(data):any{
    try {
      return JSON.parse( this.encrypt.decryptTxt(data) );
    } catch (error) {
      return null;
    }
  }

  setInvoice(number){
    localStorage.setItem(environment.invoice, this.encrypt.encryptTxt( JSON.stringify(number) ));
  }

  getInvoice(){
    let data = localStorage.getItem( environment.invoice );
    return data != null && data != "" ? this.getJson(data) : null;
  }
}
