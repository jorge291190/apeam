import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-botonera',
  templateUrl: './botonera.component.html',
  styleUrls: ['./botonera.component.css']
})
export class BotoneraComponent implements OnInit {

  constructor(public router: Router,private ls:LoginService) { }

  ngOnInit(): void {
  }

  regresar() {
    window.history.back();
  }

  cerrar(){
    this.ls.logOut();
  }

}
