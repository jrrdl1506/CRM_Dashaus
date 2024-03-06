import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InventarioApiService } from 'src/app/services/inventario-api.service';

@Component({
  selector: 'app-inventario-form',
  templateUrl: './inventario-form.component.html',
  styleUrls: ['./inventario-form.component.scss']
})
export class InventarioFormComponent implements OnInit{
  inventarioForm : FormGroup;

  constructor(private fb: FormBuilder,private inventarioApiService:InventarioApiService) {
    this.inventarioForm = this.fb.group({
      lote: ['', Validators.required],
      modeloCasa: ['', Validators.required],
      precioVenta: ['', Validators.required],
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

    var obj = {
      lote:this.inventarioForm.get(['lote'])?.value,
      modeloCasa:this.inventarioForm.get(['modeloCasa'])?.value,
      precioVenta:this.inventarioForm.get(['precioVenta'])?.value,
      medidas:this.inventarioForm.get(['medidas'])?.value,
      colindancia:this.inventarioForm.get(['colindancia'])?.value,
      estado:'DISPONIBLE'
    }

    this.inventarioApiService.addInventory(obj).subscribe(data=>{
      alert("Se subio");
    });
    console.log(this.inventarioForm.value);
  }
}
