import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FacturasService {

  constructor(private http: HttpClient) { }

  getFacturas(){
    return this.http.post('https://tciconsultoria.com.mx/Apeam/ConsultaFactura/getFacturas.php', localStorage.getItem('credencial'));
  }

  getDetalleFactura(){
    let factura = JSON.parse(localStorage.getItem('factura'));
    const credencial = {folio: factura.folio};
    return this.http.post('https://tciconsultoria.com.mx/Apeam/ConsultaFactura/getResultadoCorte.php', credencial)
  }
}
