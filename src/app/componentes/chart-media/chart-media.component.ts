import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { ChartService } from 'src/app/service/chart.service';
import { StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-chart-media',
  templateUrl: './chart-media.component.html',
  styleUrls: ['./chart-media.component.css']
})
export class ChartMediaComponent implements OnInit {
  argsDataChart:any [] = [];
  argsDataChartFilter:any [] = [];
  dataFilter:number [] = [];
  labelFilter:Label [] = [];
  argsMounth:string [] = [];
  mounthFilter:string ="";

  public lineChartData: ChartDataSets[] = [
    { data: [], label: 'Media por empaque' },
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
      hoverBackgroundColor: 'rgba(0,0,0,1)',
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
  constructor(private chartService:ChartService, private storage: StorageService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.chartService.getMedia().subscribe( (response:any) => {
      if( response.length > 0 ){
        this.argsDataChart = response;
        this.initChart(response[0].currentMonth);
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

  async initChart(mounth){
    this.dataFilter = [];
    this.labelFilter = [];
    this.argsDataChartFilter = [];
    await this.argsDataChart.forEach( (peso:any) => {
      if(peso.mounth == mounth){
        this.dataFilter.push( peso.peso_promedio );
        let data = this.storage.getCredentials();
        if(data.rfc != peso.empaque_r_f_c_){
          this.labelFilter.push( "" );
        }else{
          this.labelFilter.push( peso.empaque___nombre_corto);
        }
        this.argsDataChartFilter.push(peso);
      }
      let mounthFind = this.argsMounth.some( (mounth) => mounth === peso.mounth);
      if(!mounthFind){
        this.argsMounth.push( peso.mounth );        
      }    
    });
    this.lineChartData[0].data = this.dataFilter;
    this.lineChartLabels = this.labelFilter;  
    this.mounthFilter = mounth;
    
  }


}
