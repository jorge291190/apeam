import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PagosService {

  constructor(private http: HttpClient) { }
  
  getPagos(){
    return this.http.post('https://tciconsultoria.com.mx/Apeam/ConsultaFactura/complementos.php', localStorage.getItem('credencial') );
  }
}
