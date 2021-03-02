import { Component, OnInit } from '@angular/core';
import { ApisService } from 'src/services/apis.service';
import { Router } from '@angular/router';
import { MessageService, SelectItem } from 'primeng';
import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment';
import { UtilService } from 'src/services/util.service';

export interface User {
  nombres: string,
  apellidos: string,
  dni: string
  email: string,
  nick: string,
  clave: string,
  id: string,
  estado: string,
  celular: string
}

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [TranslateService, MessageService],
})
export class EditComponent implements OnInit {


  user: User;
  options: SelectItem[];
  types: any[] = [];
  user_: User;
  edit: boolean;
  blockedPanel: boolean = false;
  looking: boolean = false;
  icon: string = "pi pi-eye";

  constructor(private api: ApisService, private router: Router, private messageService: MessageService, private utilService: UtilService) {
    if (this.router.getCurrentNavigation().extras.state != null) {
      this.user_ = JSON.parse(this.router.getCurrentNavigation().extras.state.user);
      this.edit = true;
    } else {
      this.edit = false;
    }
    this.inicializateValores();
  }

  ngOnInit() {
  }

  inicializateValores() {
    console.log(this.user_);    
    this.user = {
      id: this.user_ != null ? this.user_['id'] : null,
      dni: this.user_ != null ? this.user_['dni'] : "",
      nombres: this.user_ != null ? this.user_['nombres'] : "",
      apellidos: this.user_ != null ? this.user_['apellidos'] : "",
      email: this.user_ != null ? this.user_['email'] : "",
      nick: this.user_ != null ? this.user_['nick'] : "",
      clave: this.user_ != null ? atob(this.user_['clave']) : "",
      estado: this.user_ != null ? this.user_['estado'] == 'Activo' ? "A" : "I" : "A",
      celular: this.user_ != null ? this.user_['celular'] : "",
    };
    console.log('ESTE USUARIO');
    console.log(this.user);
    this.options = [{ label: 'Activo', value: 'A' }, { label: 'Inactivo', value: 'I' }];
  }

  modificaruser() {
    let user = {
      apellidos: this.user.apellidos,
      nombres: this.user.nombres,
      dni: this.user.dni,
      nick: this.user.nick,
      email: this.user.email,
      clave: btoa(this.user.clave),
      id: this.user.id,
      estado: this.user.estado,
      fechregi: this.getFormatDate(new Date()),
      celular: this.user.celular,
    }
    console.log('USUARIO');
    console.log(user);
    
    this.utilService.isLoading.next(true);
    /*this.api.updateUser(user, localStorage.getItem("token")).then(data => {
      if (data.headerApp.code === 200) {
        this.router.navigate(['usuario']);
      }
    }).catch(err => {
      console.log(err);
      if (err.error.code == 401) {
        localStorage.clear();
        this.router.navigate(['/login']);
      }
    })*/
    this.utilService.isLoading.next(false);
  }

  saveuser() {

    if (this.user.apellidos == '' || this.user.nombres == '' || this.user.dni == '' || this.user.nick == ''
      || this.user.email == '' || this.user.clave == '') {
      console.log('algunos campos estan vacios');
      this.messageService.add({ severity: 'error', summary: 'Rosa Mística', detail: 'Los campos son obligatorios' });
      return
    }

    console.log('[Guardando el usuario]');
    let user = {
      apellidos: this.user.apellidos,
      nombres: this.user.nombres,
      dni: this.user.dni,
      fechregi: this.getFormatDate(new Date()),
      celular: this.user.celular,
      nick: this.user.nick,
      email: this.user.email,
      clave: btoa(this.user.clave),
      estado: this.user.estado
    }

    /*this.api.addUser(user, localStorage.getItem("token")).then(data => {
      if (data.headerApp.code === 200) {
        this.router.navigate(['usuario']);
      }
    }).catch(err => {
      console.log(err);
      if (err.error.code == 401) {
        localStorage.clear();
        this.router.navigate(['/login']);
      }
    })*/
  }

  cancelar() {
    this.router.navigate(['usuario']);
  }


  changelookpasswor() {
    if (this.looking) {
      this.looking = false;
      this.icon = "pi pi-eye";
    } else {
      this.looking = true;
      this.icon = "pi pi-eye-slash";
    }
  }

  getFormatDate(date: Date): string {
    return (moment(date)).format('YYYY-MM-DD HH:mm:ss.SSS');
  }

}
