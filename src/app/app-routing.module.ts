import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './components/forms/login-form/login-form.component';
import { RegisterFormComponent } from './components/forms/register-form/register-form.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterLeadComponent } from './components/forms/register-lead/register-lead.component';
import { VerLeadsComponent } from './components/leads/ver-leads/ver-leads.component';
import { ListaUsuariosComponent } from './components/usuarios/lista-usuarios/lista-usuarios.component';
import { PerfilUsuarioComponent } from './components/usuarios/perfil-usuario/perfil-usuario.component';
import { InventarioFormComponent } from './components/forms/inventario-form/inventario-form.component';



const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'login',component:LoginFormComponent},
  {path:'dashboard',component:DashboardComponent,children: [
    { path: 'registerLead', component: RegisterLeadComponent },
    { path: 'verLeads',component:VerLeadsComponent},
    { path: 'registerForm',component:RegisterFormComponent},
    { path: 'listaUsuarios',component:ListaUsuariosComponent},
    { path: 'perfilUsuario',component:PerfilUsuarioComponent},
    { path: 'addInventory',component:InventarioFormComponent}
  ]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
