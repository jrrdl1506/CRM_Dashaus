import { Component } from '@angular/core';
import { LoginServiceService } from 'src/app/services/login-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  // Tipos de usuario
  // 0 - No se ha logueadod
  // 1 - Administrador
  // 2 - Tesorero
  // 3 - Tecnico
  // 4 - Vendedor
  userType:number = 0;
  constructor(private loginService:LoginServiceService){}


  ngOnInit(){
    this.loginService.credenciales$.subscribe(credenciales =>{
      this.userType = credenciales.type;
    })
    
  }




  

}
