import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { LoginService } from 'src/app/service/login.service';
import { GraphicsService } from 'src/app/service/graphics.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  tiles: any[] = [
    {id: 1, text: 'One', cols: 3, rows: 5, color: ''},
    {id: 2, text: 'Two', cols: 1, rows: 5, color: ''}
  ];
  password = '';
  usuario = '';
  constructor(private router: Router,
              private ls: LoginService,private g: GraphicsService) { }

  ngOnInit() {
    if(this.ls.isAuth()){
      this.router.navigateByUrl('menu');
    }
  }


  navegar() {
    const credencial = {
      usuario: this.usuario,
      contrasena: this.password
    };

    this.ls.login(credencial) .subscribe(
      (data: any) => {
          if (data.estatus) {
            this.g.showToastSuccess("Inicio de Sesion Correcto");
            const credencial: any = {rfc: data.rfc};
            localStorage.setItem('credencial', JSON.stringify(credencial));
            this.router.navigateByUrl('menu');
          } else {
            this.g.showToastError("Error en credenciales");
          }
        });

  }

  valida() : boolean{
    return this.usuario !== '' && this.password !== '';
  }

}
