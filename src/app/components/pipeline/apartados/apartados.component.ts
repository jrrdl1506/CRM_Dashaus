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

  arrMensualidades:any[]=[];

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
    
    if(this.plazo == null || this.plazo == 0 || this.plazo < 0){
      
    }
    else{
      this.colocarLosPlazos();
    }
    // var precioCadaPlazo = this.precio / this.plazo;
    // console.log(precioCadaPlazo,"plazos");
    // alert(this.plazo);
    
    
  }

  colocarLosPlazos(){

    const fechaInicio = new Date(2024, 0, 1); // 1 de enero de 2024
   
    const mensualidades = this.generarMensualidades(this.plazo, fechaInicio);
    
    this.generarMensualidades(this.plazo,new Date());
    console.log(this.arrMensualidades);
    
  
    this.colocarTds();

    // var tbody = document.getElementById('trBody');
    // if (tbody) {
    //   tbody.innerHTML = ""; // Limpiar el contenido actual del tbody

    //   alert(this.plazo);

    //   for (var i = 0; i < this.plazo; i++) {
    //     var newRow = document.createElement('tr'); // Crear una nueva fila
        
    //     for (var j = 0; j < 6; j++) { // Crear cuatro celdas 'td' en cada fila
    //       var newTd = document.createElement('td'); // Crear un nuevo elemento td
    //       newTd.textContent = 'a'; // Asignar un contenido al td (en este caso, 'a')
    //       newRow.appendChild(newTd); // Agregar el nuevo td a la fila
    //     }
        
    //     tbody.appendChild(newRow); // Agregar la nueva fila al tbody
    //   }
    // }

  }

  generarMensualidades(numeroMensualidades: number, fechaInicio: Date): Date[] {
    this.arrMensualidades = [];
    const mensualidades: Date[] = [];
    let fechaActual: Date = new Date(fechaInicio);
    
    console.log(this.precio + " " + this.plazo,"precio y plazo");
    for (let i = 0; i < numeroMensualidades; i++) {
        mensualidades.push(new Date(fechaActual));
        fechaActual.setMonth(fechaActual.getMonth() + 1);
        var mensualidad = {
          periodo:i,
          pago:this.precio/this.plazo,
          fechaPago:fechaActual.setMonth(fechaActual.getMonth() + 1),
          saldo:100
        }
        this.arrMensualidades.push(mensualidad);
    }

    return mensualidades;
  }




 imprimirFechas(fechas: Date[]): void {
    fechas.forEach((fecha, index) => {
        console.log(`Mensualidad ${index + 1}: ${fecha.toLocaleDateString()}`);
    });
  }


  colocarTds(){
    var tbody = document.getElementById('trBody');
    const periodoTd = document.getElementById('c_periodo');
    const pagoTd = document.getElementById('c_pago');
    const fechaTd = document.getElementById('c_fecha');
    const interesTd = document.getElementById('c_interes');
    const capitalTd = document.getElementById('c_capital');
    const saldoTd = document.getElementById('c_saldo');

    
    if(tbody){
    
      while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
      }
    }
    

    if( tbody){
     

      // periodo:i,
      // pago:this.precio/this.plazo,
      // fechaPago:fechaActual.setMonth(fechaActual.getMonth() + 1),
      // saldo:100

      
      for (var i = 0; i < this.plazo; i++) {
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
  
        var newTd6 = document.createElement('td'); // Crear un nuevo elemento td
        newTd6.textContent = this.arrMensualidades[i].saldo; // Asignar un contenido al td
        newRow.appendChild(newTd6); // Agregar el nuevo td a la fila
  
        tbody.appendChild(newRow); // Agregar la nueva fila al tbody



      }
    }
    
  }













}
