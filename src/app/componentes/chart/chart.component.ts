import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { ChartService } from 'src/app/service/chart.service';
import { TitleChange } from '../common/utils/title';
import { ModalSampleComponent } from './modal-sample/modal-sample.component';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  argsDataChart:any [] = [];
  argsDataChartFilter:any [] = [];
  dataFilter:number [] = [];
  dataFilterRangoMin:number [] = [];
  dataFilterDif:number [] = [];
  labelFilter:Label [] = [];
  argsYears:string [] = [];
  yearFilter:string ="";
  public lineChartData: ChartDataSets[] = [
    { data: [], label: 'Peso promedio' },
    { data: [], label: 'Rango min' },
    { data: [], label: 'Diferencia' },
  ];
  public lineChartLabels: Label[] = [];
  public chartType: ChartType;
  public lineChartOptions: ChartOptions = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(68,67,187,1)',
      hoverBackgroundColor: 'rgba(0,0,0,1)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'bar';
  public lineChartPlugins = [];

  tiles: any[] = [
    {id: 1, text: 'One', cols: 3, rows: 6, color: ''},
    {id: 2, text: 'Two', cols: 1, rows: 6, color: ''}
  ];
  isLoading = false;
  isEmpty = false;
  constructor(private chartService:ChartService,public dialog: MatDialog,private t:TitleChange) { 
    t.changeTitle("Peso neto");
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.chartService.getPesoNeto().subscribe( (response:any)=> {
      if(response.length > 0){
        this.argsDataChart = response;
        console.log(response);
        
        this.initChart(response[0].currentYear);
        this.isLoading = false;
        this.isEmpty = false;
      }else{
        this.isLoading = false;
        this.isEmpty = true;
      }      
    },err => {
      this.isLoading = false;
        this.isEmpty = true;
    });
  }

  
  async initChart(year){
    this.dataFilter = [];
    this.dataFilterRangoMin = [];
    this.dataFilterDif = [];
    this.labelFilter = [];
    this.argsDataChartFilter = [];
    await this.argsDataChart.forEach( (peso:any) => {
      if(peso.year == year){
        this.dataFilter.push( peso.peso_promedio );
        this.labelFilter.push( peso.mounth);
        this.dataFilterRangoMin.push(peso.rango_min_permitido);
        this.dataFilterDif.push(peso.dif__x_min);
        this.argsDataChartFilter.push(peso);
      }
      let yearfind = this.argsYears.some( (year) => year === peso.year);
      if(!yearfind){
        this.argsYears.push( peso.year );        
      }    
    });
    this.lineChartData[0].data = this.dataFilter;
    this.lineChartData[1].data = this.dataFilterRangoMin;
    this.lineChartData[2].data = this.dataFilterDif;
    this.lineChartLabels = this.labelFilter;  
    this.yearFilter = year;
  }

  
  chartClicked(event){
    if(event.active.length > 0){
      let data = this.getObjectClick(event.active[0]._index);
      this.openModal(data);
    }
  }

  getObjectClick(index){
    return this.argsDataChartFilter[index];
  }

  openModal(data){
    const dialogRef = this.dialog.open(ModalSampleComponent,{
      disableClose: true,
      data
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }



}
