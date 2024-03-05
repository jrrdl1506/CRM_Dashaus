import { Component } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.scss']
})
export class ListaUsuariosComponent {

  listaUsuarios:any[]=[];
  constructor( private userService:UserServiceService){

    this.userService.getUsers().subscribe((data:any)=>{
      this.listaUsuarios = data;
    },error => {
      console.log("No se encontraron los usuarios");
    })
  }



  deleteUser(id:string){
    console.log(id,"ID");-
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {

        this.userService.deleteUser(id).subscribe(data=>{
          
        },error=>{

        })

        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
        
      }
    });
  }




}

  




