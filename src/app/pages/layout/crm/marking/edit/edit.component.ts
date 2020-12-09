import { Component, OnInit } from '@angular/core';
import { MessageService, SelectItem } from 'primeng';
import { mark } from 'src/models/mark';
import { ApisService } from 'src/services/apis.service';
import { Router } from '@angular/router';
import { client } from '../../clientes/edit/edit.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [MessageService]
})
export class EditComponent implements OnInit {


  edit: boolean;
  mark: mark;
  markTemp: mark;
  options: SelectItem[];
  nameClient: string;
  clients: Array<client> = [];

  constructor(private api: ApisService, private router: Router, private messageService: MessageService) {
    if (this.router.getCurrentNavigation().extras.state != null) {
      this.markTemp = JSON.parse(this.router.getCurrentNavigation().extras.state.mark);
      console.log(this.markTemp);
      this.edit = true;
    } else {
      this.edit = false;
    }
    this.inicializateValores();
  }

  ngOnInit(): void {
  }

  inicializateValores() {
    console.log('Inicializando los valores');
    /*this.mark = {
      marcId: this.markTemp != null ? this.markTemp['marcId'] : null,
      nombre: this.markTemp != null ? this.markTemp['nombre'] : "",
      entiId: this.markTemp != null ? this.markTemp['entiId'] : null,
      estado: this.markTemp != null ? this.markTemp['estado'] : "A"
    };*/
    console.log(this.mark);

    this.options = [{ label: 'Activo', value: 'A' }, { label: 'Inactivo', value: 'I' }];

    this.getClients();
  }

  save() {
    console.log('[Guardando una marca]');
    console.log(this.mark);
    this.api.addmark(this.mark, localStorage.getItem("token")).then(data => {
      console.log(data);
      if (data.headerApp.code === 200) {
        this.router.navigate(['marcas']);
        this.inicializateValores();
      }
    }).catch(err => {
      console.log(err);
      if (err.error.code == 401) {
        localStorage.clear();
        this.router.navigate(['/login']);
      }
    })

  }

  cancelar() {
    this.router.navigate(['marcas']);
  }

  modificar() {
    console.log('[Modificando una mark]');
    let mark = {
      marcId: this.mark.marcId,
      nombre: this.mark.nombre,
      estado: this.mark.estado
    }
    console.log(mark);
    this.api.updatemark(mark, localStorage.getItem("token")).then(data => {
      console.log(data);
      if (data.headerApp.code === 200) {
        this.router.navigate(['marcas']);
        this.inicializateValores();
      }
    }).catch(err => {
      console.log(err);
      if (err.error.code == 401) {
        localStorage.clear();
        this.router.navigate(['/login']);
      }
    })
  }

  getClients() {
    console.log('Consultando los clientes a editar..');
    this.nameClient = "";
    this.api.getclients(localStorage.getItem("token")).then(client => {
      console.log(client);
      if (client.headerApp.code === 200) {

        if (this.markTemp != null) {
          client.data.clientes.forEach(element => {
            if (this.markTemp.entiId == element.entiId) {
              this.nameClient = element.nombres + ' ' + element.apellidos;
            }
          });
        } else {
          this.clients = client.data.clientes;
        }

      }
    }).catch(err => {
      console.log(err);
      if (err.error.code == 401) {
        localStorage.clear();
        this.router.navigate(['/login']);
      }
    })
  }


}
