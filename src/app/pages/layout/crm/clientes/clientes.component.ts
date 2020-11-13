import { SelectItem } from 'primeng/primeng';
import { Router } from '@angular/router';
import { ApisService } from './../../../../../services/apis.service';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';
import { UtilService } from 'src/services/util.service';

export interface User {
    id: string;
    identification: string;
    name: string;
    lastname: string;
    phone: string;
    direction: string;
    city: string;
    email: string;
    status: string;
    razosoci: string;
    tipo: string;
}

export interface Test {
    identification: string;
    name: string;
}

@Component({
    selector: 'app-clientes',
    templateUrl: './clientes.component.html',
    styleUrls: ['./clientes.component.css'],
    providers: [TranslateService, MessageService],
})
export class ClientesComponent implements OnInit {

    users: Array<User> = [];
    userstemp: Array<User> = [];
    selectedUsers: Array<User> = [];
    flag: boolean = true;
    loading: boolean;
    options: SelectItem[];
    selectoptions: any;
    identificacion: string;
    tests: Array<Test> = [];

    constructor(private api: ApisService, private router: Router, private messageService: MessageService, private utilservice: UtilService) { }

    ngOnInit(): void {
        this.options = [{ label: 'Todos', value: null }, { label: 'Activo', value: 'A' }, { label: 'Inactivo', value: 'I' }];
        this.getClients();
    }

    async getClients() {
        this.utilservice.isLoading.next(true);
        await this.api.getclients(localStorage.getItem('token')).then(clientes => {
            console.log(clientes);
            
            if (clientes.headerApp.code === 200) {
                let temp: User[] = [];
                clientes.data.clientes.forEach(element => {
                    let userTemp = {
                        id: element.cliente.entiId,
                        identification: element.cliente.entiDni,
                        name: element.cliente.nombres,
                        lastname: element.cliente.apellidos,
                        phone: element.cliente.phone,
                        direction: element.cliente.direccion,
                        city: element.cliente.ciudad,
                        email: element.cliente.email,
                        status: element.cliente.estado === 'A' ? 'Activo' : 'Inactivo',
                        razosoci: element.cliente.razosoci,
                        tipo: element.cliente.tipo
                    }
                    temp.push(userTemp);
                });
                this.users = temp;
            }
        }).catch(error => {
            console.log(error.error);
            this.loading = false;
            if (error.error.code == 401) {
                localStorage.clear();
                this.router.navigate(['/login']);
            }
        })

        this.utilservice.isLoading.next(false);

    }

    addClient() {
        console.log('Editando el cliente');
        this.router.navigate(['/edit']);
    }

    desactivate(user: User) {
        console.log('Se esta desactivando ek usuario');
        console.log(user);
        this.router.navigate(['/edit'], { state: { user: JSON.stringify(user) } });
    }

    consultarMobile() {
        console.log('Consultar los datos');
        console.log(this.identificacion);

        if (this.identificacion == undefined || this.identificacion == '') {
            this.users = [];
            console.log('Consultar');
            this.getClients();
            return;
        }

        this.users.filter(user => {
            console.log('Este es el usuario');
            console.log(user);
            console.log(this.identificacion);
            if (user.identification == this.identificacion) {
                this.users = [];
                console.log('Son iguales');
                this.users.push(user)
            }
        });
        console.log('Usuarios finales');
        console.log(this.users);
    }


}
