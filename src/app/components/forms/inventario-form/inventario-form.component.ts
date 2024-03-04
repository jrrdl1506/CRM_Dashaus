import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inventario-form',
  templateUrl: './inventario-form.component.html',
  styleUrls: ['./inventario-form.component.scss']
})
export class InventarioFormComponent implements OnInit{
  inventarioForm : FormGroup;

  constructor(private fb: FormBuilder) {
    this.inventarioForm = this.fb.group({
      Lote: ['', Validators.required],
      modeloCasa: ['', Validators.required],
      precioventa: ['', Validators.required],
      medidas: ['', Validators.required],
      colindancias: ['', Validators.required]
    });
   }
   
   modelos: string[] = [
    'MODELO 1',
    'MODELO 2'
  ];


  ngOnInit(): void {
    
  }

  onSubmit() {
    console.log(this.inventarioForm.value);
  }
}
