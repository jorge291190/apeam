import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { PagosService } from 'src/app/service/pagos.service';

@Component({
  selector: 'app-complementos',
  templateUrl: './complementos.component.html',
  styleUrls: ['./complementos.component.css']
})
export class ComplementosComponent implements OnInit {


  tiles: any[] = [
    {id: 1, text: 'One', cols: 3, rows: 6, color: ''},
    {id: 2, text: 'Two', cols: 1, rows: 6, color: ''}
  ];
  isLoading = false;
  isEmpty = false;
  displayedColumns: string[] = ['folio', 'fecha', 'razon', 'descargar'];
  dataSource;
  title = "complementos";
  constructor(private router: Router,
              private pagosService: PagosService) {

              }

ngOnInit() {
  this.isLoading = true;
  this.pagosService.getPagos().subscribe( (data: any) => {
      if(data.length > 0){
        this.dataSource = new MatTableDataSource(data);
        this.isLoading = false;
      }else{
        this.isEmpty = true;
        this.isLoading = false;
      }
  },err => {
    this.isEmpty = true;
    this.isLoading = false;
  });
}

internet(url: string) {
  window.open(url);
}

applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
}


}
