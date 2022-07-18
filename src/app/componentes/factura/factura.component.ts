import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import Swal from 'sweetalert2';
import { FacturasService } from 'src/app/service/facturas.service';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {
  isLoading = false;
  isEmpty = false;
  factura;
  tiles: any[] = [
    {id: 1, text: 'One', cols: 1, rows: 6, color: ''},
    {id: 2, text: 'Two', cols: 2, rows: 6, color: ''},
    {id: 3, text: 'Two', cols: 1, rows: 6, color: ''}
  ];
  displayedColumns: string[] = ['reg', 'fecha', 'kilos'];
  dataSource;
  title = "manifiestos";
  constructor(private router: Router,
              private facturaService: FacturasService) {
                this.factura = JSON.parse( localStorage.getItem('factura') );
  }
  
  ngOnInit() {
    this.isLoading =  true;
    this.facturaService.getDetalleFactura().subscribe(
        (data: any) => {
            if(data.length > 0){
              this.dataSource = new MatTableDataSource(data);
              this.isLoading = false;
            }else{
              this.isLoading = false;
              this.isEmpty = true;
            }
    },err => {
      this.isLoading = false;
      this.isEmpty = true;
    });
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
