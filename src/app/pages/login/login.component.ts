import { roles } from './../../../models/roles';
import { Router } from '@angular/router';
import { user } from './../../../models/user';
import { ApisService } from './../../../services/apis.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { UtilService } from 'src/services/util.service';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: [MessageService],
})
export class LoginComponent implements OnInit {

    checkoutForm: FormGroup;
    estado: string = "determinate";

    constructor(private formBuilder: FormBuilder, private messageService: MessageService,
        private api: ApisService, private router: Router, private utilService: UtilService) {
        this.checkoutForm = this.formBuilder.group({
            username: '',
            password: ''
        });
    }

    ngOnInit() { }

    onSubmit() {
        console.log('VALORES');
        this.estado = "indeterminate";
        console.log('Your order has been submitted 2.....');
        console.log(this.checkoutForm.get("username").value);

        this.api.login(this.checkoutForm.get("username").value, this.checkoutForm.get("password").value).then(data => {
            //this.api.login('test5', 'abc123').then(data => {
            console.log("Data response");
            console.log(data);
            if (data.headerApp.code === 200) {
                var roles_: roles[] = [];
                data.data.roles.forEach(element => {
                    let rol = {
                        id: element.id,
                        rol: element.rol,
                        shorcut: element.shorcut
                    }
                    roles_.push(rol);
                });
                let user: user = {
                    clave: data.data.usuario.clave,
                    email: data.data.usuario.persona.email,
                    estado: data.data.usuario.estado,
                    nombres: data.data.usuario.persona.nombres,
                    apellidos: data.data.usuario.persona.apellidos,
                    id: data.data.usuario.persona.id,
                    nick: data.data.usuario.nick,
                    token: data.data.usuario.token,
                    roles: roles_,
                    photo: data.data.usuario.photo,
                    tipo: data.data.usuario.tipo,
                    celular: data.data.usuario.persona.celular,
                    identificacion: data.data.usuario.persona.dni
                }

                localStorage.setItem("user", JSON.stringify(user));
                localStorage.setItem("token", data.data.usuario.token);
                this.estado = "determinate";
                this.router.navigate(['/dashboard']);


            } else {
                this.estado = "determinate";
                console.log('No se puede loguear');
                this.messageService.add({
                    severity: 'error',
                    summary: 'Rosa Mística',
                    detail: data.headerApp.message
                });
            }
        }).catch(err => {
            this.estado = "determinate";
            this.messageService.add({
                severity: 'error',
                summary: 'Rosa Mística',
                detail: 'Error en la aplicación intentelo más tarde'
            });

            console.log(err);
        })

    }



}
