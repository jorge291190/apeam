import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './componentes/menu/menu.component';
import { LoginComponent } from './componentes/login/login.component';
import { FacturasComponent } from './componentes/facturas/facturas.component';
import { FacturaComponent } from './componentes/factura/factura.component';
import { ComplementosComponent } from './componentes/complementos/complementos.component';
import { ChartComponent } from './componentes/chart/chart.component';
import { ChartMediaComponent } from './componentes/chart-media/chart-media.component';
import { ListaSinMuestreosComponent } from './componentes/lista-sin-muestreos/lista-sin-muestreos.component';
import { AuthGuard } from './guard/auth.guard';


const routes: Routes = [
{path: 'menu', component: MenuComponent,canActivate: [ AuthGuard ]},
{path: 'facturas', component: FacturasComponent,canActivate: [ AuthGuard ]},
{path: 'complementos', component: ComplementosComponent,canActivate: [ AuthGuard ]},
{path: 'factura', component: FacturaComponent,canActivate: [ AuthGuard ]},
{path: 'login', component: LoginComponent},
{path: 'neto', component: ChartComponent,canActivate: [ AuthGuard ]},
{path: 'media', component: ChartMediaComponent,canActivate: [ AuthGuard ]},
{path: 'sinmuestreos', component: ListaSinMuestreosComponent,canActivate: [ AuthGuard ]},
{path: '**', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
