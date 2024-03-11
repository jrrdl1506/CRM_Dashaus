import { Component } from '@angular/core';

@Component({
  selector: 'app-apartados',
  templateUrl: './apartados.component.html',
  styleUrls: ['./apartados.component.scss']
})
export class ApartadosComponent {
  precio: number=0;
  m2: number=0;
  costo: number=0;
  enganche: number=0;
  plazo: number=0;

  constructor(){

  }

  onInputChange(newValue: number, propertyName: string) {
    
    // Aquí puedes acceder a los valores en tiempo real
    // console.log('Precio:', this.precio);
    // console.log('Metros cuadrados:', this.m2);
    // console.log('Costo:', this.costo);
    // console.log('Enganche:', this.enganche);
    // console.log('Plazo:', this.plazo);
    console.log(this.m2 + " " + this.costo +" = "+(this.m2*this.costo));
    this.asignarPrecio(this.multiplicarM2(this.m2,this.costo));
  }


  multiplicarM2(m2:number,num_m2:number):number{
    return m2 *num_m2;
  }

  asignarPrecio(m2xnum: number) {
    var precio = document.getElementById("a_precio") as HTMLInputElement;
    console.log(m2xnum,"Precio");
    if (precio) {
        this.precio = m2xnum; // Asegúrate de convertir el número a cadena antes de asignarlo al valor del input
    }
  }

  calcularPlazo(){
    var plazos = this.precio / this.plazo;
    console.log(plazos,"plazos");
  }

}
