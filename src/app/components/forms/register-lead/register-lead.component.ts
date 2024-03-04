import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-register-lead',
  templateUrl: './register-lead.component.html',
  styleUrls: ['./register-lead.component.scss']
})
export class RegisterLeadComponent implements OnInit{

  RegisterLeadForm : FormGroup;

  constructor(private fb: FormBuilder) {
    this.RegisterLeadForm = this.fb.group({
      nombreLead: ['', Validators.required],
      origenLead: ['', Validators.required],
      correoElectronico: ['', [Validators.required, Validators.email]],
      numero: ['', Validators.required],
      modeloCasa: ['', Validators.required],
      statusLead: ['', Validators.required]
    });
   }

   origenLeadOptions: string[] = [
    'RECOMENDACIÓN',
    'WATS APP y FACEBOOK',
    'REDES SOCIALES',
    'VISITA AL DESARROLLO',
    'ESPECTACULARES',
    'PRENSA Y REVISTAS',
    'RADIO',
    'FERIAS Y EXPOSICIONES',
    'VOLANTEO CREATIVO',
    'SINDICATOS',
    'VISITA A EMPRESAS',
    'FOLLETOS EN BANCOS',
    'CENTROS COMERCIALES',
    'OTROS'
  ];


  ngOnInit(): void {
    
  }

  onSubmit() {
    console.log(this.RegisterLeadForm.value);
  }

}
