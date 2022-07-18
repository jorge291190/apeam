import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor(private http:HttpClient) {

  }

  getPesoNeto(){
    let data = JSON.parse(localStorage.getItem("credencial"));
    let url = `https://tciconsultoria.com.mx/Apeam/pesoNeto/charts/pesoNeto.php?q=${data.rfc}`;
    return this.http.get(url);
  }

  getMedia(){
    let data = JSON.parse(localStorage.getItem("credencial"));
    let url = `https://tciconsultoria.com.mx/Apeam/pesoNeto/charts/media.php?q=${data.rfc}`;
    return this.http.get(url);
  }

  getMuestreos(){
    let data = JSON.parse(localStorage.getItem("credencial"));
    let url = `https://tciconsultoria.com.mx/Apeam/pesoNeto/charts/muestreos.php?q=${data.rfc}`;
    return this.http.get(url);
  }
}
