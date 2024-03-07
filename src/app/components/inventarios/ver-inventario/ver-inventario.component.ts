import { Component } from '@angular/core';
import { InventarioApiService } from 'src/app/services/inventario-api.service';

@Component({
  selector: 'app-ver-inventario',
  templateUrl: './ver-inventario.component.html',
  styleUrls: ['./ver-inventario.component.scss']
})
export class VerInventarioComponent {

  arrInventarios:any[]=[];

  constructor(private inventarioApi:InventarioApiService){

  }

  ngOnInit(){
    this.inventarioApi.getInventory().subscribe(data=>{
        this.arrInventarios = data;
        console.log(this.arrInventarios,"INV");
    });
  }



}
