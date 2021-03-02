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
        this.estado = "indeterminate";
        
        this.api.login(this.checkoutForm.get("username").value, this.checkoutForm.get("password").value).then(data => {
            
            if (data.code === "200") {
                let user: user = {
                    id: data.user.id,
                    name: data.user.name,
                    lastname: data.user.lastname,
                    username: data.user.username,
                    password: data.user.password,
                    perfil: data.user.perfil,
                    status: data.user.status,
                    token: data.user.token
                }
                localStorage.setItem("user", JSON.stringify(user));
                localStorage.setItem("token", data.user.token);
                this.router.navigate(['/dashboard']); 

            } else {
                this.estado = "determinate";
                console.log('No se puede loguear');
                this.messageService.add({
                    severity: 'error',
                    summary: 'Kardex',
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
