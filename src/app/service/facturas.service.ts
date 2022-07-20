import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class FacturasService {

  constructor(private http: HttpClient, private storage:StorageService) { }

  getFacturas(){
    let data = JSON.stringify( this.storage.getCredentials() );
    return this.http.post('https://tciconsultoria.com.mx/Apeam/ConsultaFactura/getFacturas.php', data);
  }

  getDetalleFactura(){
    let factura = this.storage.getInvoice();
    const credencial = {folio: factura.folio};
    return this.http.post('https://tciconsultoria.com.mx/Apeam/ConsultaFactura/getResultadoCorte.php', credencial)
  }
}
