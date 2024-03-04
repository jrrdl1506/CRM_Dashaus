import { Component ,OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  loginForm!:FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private logingService:LoginServiceService,
    private router:Router
      ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  async onSubmit() {
    if(await this.checkCredentials()){
      this.router.navigate(['/dashboard']);
    }
    else{
      alert("No se encontro el usuario");
    }
   
  }


  // Funcion que checa en la bd si existe o no mediante el servicio
  async checkCredentials():Promise<boolean>{

    return this.logingService.saveCredentials(
      this.loginForm?.value.username,
      this.loginForm?.value.password,
      this.loginForm?.value.username
    );
  }


}
