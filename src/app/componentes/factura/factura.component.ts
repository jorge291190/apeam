import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {MatTableDataSource} from '@angular/material/table';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {

  constructor(private router: Router,
              private activated: ActivatedRoute,
              private http: HttpClient) {

  }
  consulta: any;
  factura: any;
  registros: any = new Array();
  tiles: any[] = [
    {id: 1, text: 'One', cols: 1, rows: 6, color: ''},
    {id: 2, text: 'Two', cols: 2, rows: 6, color: ''},
    {id: 3, text: 'Two', cols: 1, rows: 6, color: ''}
  ];
  displayedColumns: string[] = ['reg', 'fecha', 'kilos'];
  dataSource;
  ngOnInit() {
    Swal.fire({
      title: 'Cargando Certificados',
      icon: 'info'
    });
    Swal.showLoading();

    this.factura = JSON.parse(localStorage.getItem('factura'));
    const credencial = {folio: this.factura.folio};
    this.http.post('https://tciconsultoria.com.mx/Apeam/ConsultaFactura/getResultadoCorte.php', credencial).subscribe(
      (data: any) => {
        data.forEach(element => {
          const temp = {
              nocertificado: element.nocertificado,
              fecha_expedicion_f: element.fecha_expedicion_f,
              kilogramos: element.kilogramos
            };
          this.registros.push(temp);
        });
        this.dataSource = new MatTableDataSource(this.registros);
        Swal.close();
      }

    );
  }

  internet(url: string) {
      window.open(url);
  }

  navegar() {
    this.router.navigateByUrl('facturas');
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
