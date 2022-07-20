import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor(private http:HttpClient,private storage:StorageService) {

  }

  getPesoNeto(){
    let data = this.storage.getCredentials();
    let url = `https://tciconsultoria.com.mx/Apeam/pesoNeto/charts/pesoNeto.php?q=${data.rfc}`;
    return this.http.get(url);
  }

  getMedia(){
    let data = this.storage.getCredentials();
    let url = `https://tciconsultoria.com.mx/Apeam/pesoNeto/charts/media.php?q=${data.rfc}`;
    return this.http.get(url);
  }

  getMuestreos(){
    let data = this.storage.getCredentials();
    let url = `https://tciconsultoria.com.mx/Apeam/pesoNeto/charts/muestreos.php?q=${data.rfc}`;
    return this.http.get(url);
  }
}
