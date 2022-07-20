import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
const KEY = "4p3aM4C";
@Injectable({
  providedIn: 'root'
})
export class EncryptService {

  constructor() { }

  encryptTxt( txt:string ){
      return CryptoJS.AES.encrypt(txt.trim(),KEY.trim()).toString();
  }

  decryptTxt( txt:string ){
      return CryptoJS.AES.decrypt(txt.trim(), KEY.trim()).toString(CryptoJS.enc.Utf8); 
  }

  b64encode(txt:string){
    return btoa(txt);
  }

  b64decode(txt:string){
    return atob(txt);
  }
}
