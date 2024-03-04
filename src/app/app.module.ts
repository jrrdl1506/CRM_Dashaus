import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './components/forms/login-form/login-form.component';
import { RegisterFormComponent } from './components/forms/register-form/register-form.component';
import { HeaderComponent } from './components/header/header.component';

import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RegisterLeadComponent } from './components/forms/register-lead/register-lead.component';
import { VerLeadsComponent } from './components/ver-leads/ver-leads.component';
import { InventarioFormComponent } from './components/forms/inventario-form/inventario-form.component';
import { LeadsAcomuladosComponent } from './components/graficas/leads-acomulados/leads-acomulados.component';
import { LeadsPorCanalComponent } from './components/graficas/leads-por-canal/leads-por-canal.component';
import { InventarioDisponibleComponent } from './components/graficas/inventario-disponible/inventario-disponible.component';

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
       InventarioDisponibleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
