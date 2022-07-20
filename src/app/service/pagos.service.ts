import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class PagosService {

  constructor(private http: HttpClient,private storage:StorageService) { }
  
  getPagos(){
    let data = JSON.stringify( this.storage.getCredentials() );
    return this.http.post('https://tciconsultoria.com.mx/Apeam/ConsultaFactura/complementos.php', data );
  }
}
