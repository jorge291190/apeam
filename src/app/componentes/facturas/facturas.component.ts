import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {MatTableDataSource} from '@angular/material/table';
import Swal from 'sweetalert2';
import { FacturasService } from 'src/app/service/facturas.service';
import { StorageService } from 'src/app/service/storage.service';
import { EncryptService } from 'src/app/service/encrypt.service';
import { TitleChange } from '../common/utils/title';
@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.css']
})
export class FacturasComponent implements OnInit {

  tiles: any[] = [
    {id: 1, text: 'One', cols: 3, rows: 6, color: ''},
    {id: 2, text: 'Two', cols: 1, rows: 6, color: ''}
  ];
  displayedColumns: string[] = ['folio', 'fecha', 'fechaf', 'saldo', 'moneda', 'descargar', 'ver'];
  dataSource;
  isLoading = false;
  isEmpty = false;
  title = "facturas";
  constructor(private router: Router,private facturasService:FacturasService, private storage:StorageService,private t:TitleChange ) {
    t.changeTitle("Facturas");
  }
  ngOnInit() {
    this.isLoading = true;
    this.facturasService.getFacturas().subscribe( (data:any) => {    
        if(data.length > 0){
          this.dataSource = new MatTableDataSource(data);
          this.isLoading = false;
        }else{
          this.isLoading = false;
          this.isEmpty = true;
        }
      },err=> {
        this.isLoading = false;
        this.isEmpty = true;
      });
      
  }
  
  navegar(codigo, ruta) {
    this.storage.setInvoice(codigo);
    this.router.navigateByUrl(ruta);
  }

  internet(url: string) {
    window.open(url);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  isObjectEmptyNumber(object){
    return Object.keys(object).length ? object : 0;
  }

}
