import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './components/forms/login-form/login-form.component';
import { RegisterFormComponent } from './components/forms/register-form/register-form.component';
import { HeaderComponent } from './components/header/header.component';

import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RegisterLeadComponent } from './components/forms/register-lead/register-lead.component';
import { VerLeadsComponent } from './components/leads/ver-leads/ver-leads.component';
import { InventarioFormComponent } from './components/forms/inventario-form/inventario-form.component';
import { LeadsAcomuladosComponent } from './components/graficas/leads-acomulados/leads-acomulados.component';
import { LeadsPorCanalComponent } from './components/graficas/leads-por-canal/leads-por-canal.component';
import { InventarioDisponibleComponent } from './components/graficas/inventario-disponible/inventario-disponible.component';
import { ListaUsuariosComponent } from './components/usuarios/lista-usuarios/lista-usuarios.component';
import { PerfilUsuarioComponent } from './components/usuarios/perfil-usuario/perfil-usuario.component';
import { ApartadoPorPrototipoComponent } from './components/graficas/apartado-por-prototipo/apartado-por-prototipo.component';
import { ApartadoPorCanalComponent } from './components/graficas/apartado-por-canal/apartado-por-canal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    RegisterFormComponent,
  
    HeaderComponent,
       DashboardComponent,
       SidebarComponent,
       RegisterLeadComponent,
       VerLeadsComponent,
       InventarioFormComponent,
       LeadsAcomuladosComponent,
       LeadsPorCanalComponent,
       InventarioDisponibleComponent,
       ListaUsuariosComponent,
       PerfilUsuarioComponent,
       ApartadoPorPrototipoComponent,
       ApartadoPorCanalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxChartsModule,
    HttpClientModule,
    BrowserAnimationsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
