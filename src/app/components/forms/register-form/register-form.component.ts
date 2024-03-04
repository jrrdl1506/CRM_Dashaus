import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { RegisterServiceService } from 'src/app/services/register-service.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit{
  RegisterForm !: FormGroup;

  tiposusuario: string[] = [
    'Tesoreria',
    'Ventas',
    'administración'
  ];

  constructor(private fb: FormBuilder, private registerService:RegisterServiceService, private router: Router) {
    
   }

  ngOnInit(): void {
    this.RegisterForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      type: ['', Validators.required]
    });
  }

  async onSubmit() {
    console.log(this.RegisterForm.value);
    
    if(await this.registerUser()){
      alert("Usuario registrado")
      this.RegisterForm.reset();
    }
    else{
      alert("No se encontro el usuario");
    }
  }


  // Funcion para registrar usuario
  async registerUser():Promise<boolean>{

    return this.registerService.registerUser(
      this.RegisterForm?.value.username,
      this.RegisterForm?.value.password,
      this.RegisterForm?.value.type
    );
  }
}
