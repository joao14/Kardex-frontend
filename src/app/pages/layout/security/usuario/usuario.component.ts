import { Component, OnInit } from '@angular/core';
import { ApisService } from 'src/services/apis.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng';
import { TranslateService } from '@ngx-translate/core';
import { UtilService } from 'src/services/util.service';


export interface User {
  clave: string;
  estado: string;
  nick: string;
  nombres: string;
  apellidos: string;
  celular: string;
  dni: string;
  email: string;
  id: string;
  photo: string;
  tipo: string;
}

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
  providers: [TranslateService, MessageService],
})
export class UsuarioComponent implements OnInit {

  users: Array<User> = [];
  identificacion: string = "";
  constructor(private api: ApisService, private router: Router, private messageService: MessageService, private utilService: UtilService) {

  }

  ngOnInit(): void {
    this.identificacion = "";
    this.getUsers();
  }

  getUsers() {
    console.log('USUARIOS');
    this.utilService.isLoading.next(true);
    /*this.api.getUsers(localStorage.getItem('token')).then(users => {
      console.log(users);
      if (users.headerApp.code === 200) {
        let temp: User[] = [];
        users.data.persons.forEach(element => {
          let user: User = {
            clave: element.usuario.clave,
            estado: element.usuario.estado,
            nick: element.usuario.nick,
            nombres: element.usuario.persona.nombres,
            apellidos: element.usuario.persona.apellidos,
            celular: element.usuario.persona.celular,
            dni: element.usuario.persona.dni,
            email: element.usuario.persona.email,
            id: element.usuario.persona.id,
            photo: element.usuario.persona.photo,
            tipo: element.usuario.persona.tipo
          }
          temp.push(user);
        });
        this.users = temp;
        console.log('Usuarios');
        console.log(this.users);
        this.utilService.isLoading.next(false);
      }
    }).catch(error => {
      this.utilService.isLoading.next(false);
      console.log(error);
      if (error.error.code == 401) {
        localStorage.clear();
        this.router.navigate(['/login']);
      }
    })*/
  }

  addUser() {
    console.log('Editando el cliente');
    this.router.navigate(['/edituser']);
  }

  desactivate(user: User) {
    console.log('Se esta desactivando el usuario');
    console.log(user);
    this.router.navigate(['/edituser'], { state: { user: JSON.stringify(user) } });
  }

  consultarMobile() {

  }


}
