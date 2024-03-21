import { Component } from '@angular/core';

@Component({
  selector: 'app-cotizador',
  templateUrl: './cotizador.component.html',
  styleUrls: ['./cotizador.component.scss']
})
export class CotizadorComponent {

    M2:number=0;
    precio_M2:number=0;
    precioSinEnganche:number=0;

    hayEnganche:string="No";
    enganche:number=0;
    precioConEnganche:number=0;

    plazos:number=0;

    arrMensualidades:any[]=[];
    
    pagoEnganche:number=0;
    restantePagoEnganche:number=0;
    auxRestantePagoEnganche:number=0;

    calcularPrecioSinEnganche(){
      if(this.M2 > 0 && this.precio_M2 > 0){
        this.precioSinEnganche = this.M2 * this.precio_M2;
      }

    }

    checkEnganche(option: string) {
      this.limpiaTds();
      this.hayEnganche = option;
      if(this.hayEnganche === "Si"){
       this.activarEnganche();
      }
      else{
        this.desactivarEnganche();
      }
    }

    desactivarEnganche(){
      var input = document.getElementById("inputEnganche") as HTMLInputElement;
      var tablaEnganche = document.getElementById("tablaEnganche") as HTMLElement;
      input.style.display="none";
      tablaEnganche.style.display="none";
    }

    activarEnganche(){
      var input = document.getElementById("inputEnganche") as HTMLInputElement;
      var tablaEnganche = document.getElementById("tablaEnganche") as HTMLDivElement;

      input.style.display="block";
      tablaEnganche.style.display="block";
    }

    calcularPrecioConEnganche(){
      this.precioConEnganche = this.precioSinEnganche - this.enganche;
      this.auxRestantePagoEnganche= this.enganche;
      this.restantePagoEnganche=this.enganche;
    }


    asignarPlazos(){
        if(this.plazos > 0 && (this.precioConEnganche > 0 || this.precioSinEnganche > 0) ){
          if(this.precioConEnganche > 0){
            this.generarMensualidades(this.plazos,new Date(),this.precioConEnganche);
          }
          else{
            this.generarMensualidades(this.plazos,new Date(),this.precioSinEnganche);
          }
          this.generarTablaMensualidades();
          
        }
        else if(this.plazos == 0){
          // alert("Elija una cantiad valida");
        }
        else{
          // alert("Campos incompletos");
          this.plazos=0;
        }
    }

    
  generarMensualidades(numeroMensualidades: number, fechaInicio: Date,precio:number)  {
    var AuxPrecio = precio;
    this.arrMensualidades = [];
    const mensualidades: Date[] = [];
    let fechaActual: Date = new Date(fechaInicio);
    // Hacer una para precio con enganche y otro para precio sin enganche
    
    console.log(precio + " " + this.plazos,"precio y plazo");
    for (let i = 0; i < numeroMensualidades; i++) {
        mensualidades.push(new Date(fechaActual));
        fechaActual.setMonth(fechaActual.getMonth() + 1);
        AuxPrecio=AuxPrecio-(precio/this.plazos);
        var mensualidad = {
          periodo:i,
          pago:precio/this.plazos,
          fechaPago:fechaActual.toISOString().slice(0, 10),
          saldo:AuxPrecio,


        }
        this.arrMensualidades.push(mensualidad);
    }

    
  }




  generarTablaMensualidades(){
    var tbody = document.getElementById('trBody');
    const periodoTd = document.getElementById('c_periodo');
    const pagoTd = document.getElementById('c_pago');
    const fechaTd = document.getElementById('c_fecha');
    const interesTd = document.getElementById('c_interes');
    const capitalTd = document.getElementById('c_capital');
    const saldoTd = document.getElementById('c_saldo');


   
    
   this.limpiaTds();
    
    if( tbody){
     


      
      for (var i = 0; i < this.plazos; i++) {
        console.log(this.arrMensualidades[i]);
        var newRow = document.createElement('tr'); // Crear una nueva fila
      
        var newTd1 = document.createElement('td'); // Crear un nuevo elemento td
        newTd1.textContent = this.arrMensualidades[i].periodo; // Asignar un contenido al td
        newRow.appendChild(newTd1); // Agregar el nuevo td a la fila
  
        var newTd2 = document.createElement('td'); // Crear un nuevo elemento td
        newTd2.textContent = this.arrMensualidades[i].pago; // Asignar un contenido al td
        newRow.appendChild(newTd2); // Agregar el nuevo td a la fila
  
        var newTd3 = document.createElement('td'); // Crear un nuevo elemento td
        newTd3.textContent = this.arrMensualidades[i].fechaPago; // Asignar un contenido al td
        newRow.appendChild(newTd3); // Agregar el nuevo td a la fila
  
        var newTd4 = document.createElement('td'); // Crear un nuevo elemento td
        newTd4.textContent = 'Texto para interés'; // Asignar un contenido al td
        newRow.appendChild(newTd4); // Agregar el nuevo td a la fila
  
        var newTd5 = document.createElement('td'); // Crear un nuevo elemento td
        newTd5.textContent = 'Texto para capital'; // Asignar un contenido al td
        newRow.appendChild(newTd5); // Agregar el nuevo td a la fila
  
        var newTd6 = document.createElement('td');
        newTd6.textContent = this.arrMensualidades[i].saldo.toFixed(2); 
     
        newRow.appendChild(newTd6); 
        tbody.appendChild(newRow); // Agregar la nueva fila al tbody



      }
    }

  }





limpiaTds(){
  var tbody = document.getElementById('trBody');
  if(tbody){
  
    while (tbody.firstChild) {
      tbody.removeChild(tbody.firstChild);
    }
  }
}



cambiarPagoEnganche(){
  //Reasignar el pago de enganche cada vez
  this.restantePagoEnganche= this.auxRestantePagoEnganche
  this.restantePagoEnganche = this.restantePagoEnganche - this.pagoEnganche;
  
}


abonarEnganche(){
  var input_fecha = document.getElementById("fechaAbono") as HTMLInputElement;
  var fecha = input_fecha.value;

  var abono = {
     periodo:0,
     pago:this.pagoEnganche,
     fecha_pago:fecha,
     saldo:this.restantePagoEnganche
  }

  console.log(abono,"abono");

    this.generarFila(abono);
}


generarFila(obj:any){
  var table = document.getElementById("tabla") as HTMLTableElement;
  
  if(table){
    table.getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);
    var cell1 = newRow.insertCell();
    var cell2 = newRow.insertCell();
    var cell3 = newRow.insertCell();
    var cell4 = newRow.insertCell();
    var cell5 = newRow.insertCell();
    var cell6 = newRow.insertCell();
    cell1.innerHTML = "";
    cell2.innerHTML = obj.pago;
    cell3.innerHTML = obj.fecha_pago;
    cell4.innerHTML = "";
    cell5.innerHTML = "";
    cell6.innerHTML = obj.saldo;

  }
  this.auxRestantePagoEnganche=this.auxRestantePagoEnganche -this.pagoEnganche;


}






  





}
