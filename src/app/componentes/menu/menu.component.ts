import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EncryptService } from 'src/app/service/encrypt.service';
import { LoginService } from 'src/app/service/login.service';
import { StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

botones: any  = [
  {texto: 'Consulta Facturas',
    ruta: 'facturas'},
    {texto: 'Consulta Pagos',
    ruta: 'complementos'},
    // {texto: 'Peso neto',ruta: 'neto'},
    // {texto: 'Media por empaque',ruta: 'media'},
    // {texto: 'Peso sin muestreos',ruta: 'sinmuestreos'}
];

tiles: any[] = [
  {id: 1, text: 'One', cols: 3, rows: 6, color: ''},
  {id: 2, text: 'Two', cols: 1, rows: 6, color: ''}
];

  constructor(private router: Router,private storage:StorageService,private ls:LoginService) { 
    let storageAux =  storage.getCredentials();
    if(!storageAux.id){
      ls.logOut();
    }

    console.log(storageAux);
    
    
  }

  ngOnInit() {
  }

  navegar(ruta: string) {
    this.router.navigateByUrl(ruta);
  }
}
