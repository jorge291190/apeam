import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ChartService } from 'src/app/service/chart.service';
import { GraphicsService } from 'src/app/service/graphics.service';
import { TitleChange } from '../common/utils/title';

@Component({
  selector: 'app-lista-sin-muestreos',
  templateUrl: './lista-sin-muestreos.component.html',
  styleUrls: ['./lista-sin-muestreos.component.css']
})
export class ListaSinMuestreosComponent implements OnInit {
  dataSource;
  isLoading = false;
  isEmpty = false;
  tiles: any[] = [
    {id: 1, text: 'One', cols: 3, rows: 6, color: ''},
    {id: 2, text: 'Two', cols: 1, rows: 6, color: ''}
  ];
  displayedColumns: string[] = ['fecha', 'mes','ano', 'nota'];
  constructor(public g: GraphicsService,public chartService:ChartService,private t:TitleChange) { 
    t.changeTitle("Listado sin muestreos");
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.chartService.getMuestreos().subscribe( (response:any) => {
      if(response.length > 0){
        this.dataSource =  new MatTableDataSource(response);
        this.isLoading = false;
      }else{
        this.isLoading = false;
        this.isEmpty = true;
      }
    }, err => {
      this.g.showAlertError(err,"Error al obtener listado de muestreos!");
        this.isLoading = false;
        this.isEmpty = true;
    });

  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
