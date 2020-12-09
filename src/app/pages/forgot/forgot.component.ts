import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { UtilService } from 'src/services/util.service';
import { ApisService } from 'src/services/apis.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-forgot',
    templateUrl: './forgot.component.html',
    styleUrls: ['./forgot.component.css'],
    providers: [MessageService],
})
export class ForgotComponent implements OnInit {

    checkoutForm: FormGroup;
    estado: string;

    constructor(private formBuilder: FormBuilder, private utilService: UtilService,
        private messageService: MessageService,
        private apiService: ApisService, private router: Router) {
        console.log('TODO VA BIEN HASTA EL MOMENTO');
        this.checkoutForm = this.formBuilder.group({
            email: [null, [Validators.required, Validators.email]],
        });
    }

    ngOnInit() {
        console.log('Validando el correo');
        this.estado = "determinate";

    }

    onSubmit() {
        console.log('Se está enviando el email');
        this.estado = "indeterminate";
        this.apiService.resetpassword(this.checkoutForm.get('email').value, localStorage.getItem('token')).then(data => {
            console.log('Se a enviado el correo con la contraseña');
            console.log(data);
            this.estado = "determinate";
            if (data.headerApp.code == 200) {
                this.messageService.add({
                    severity: 'success',
                    summary: 'Rosa Mística',
                    detail: "Se a enviiado la contraseña a su email"
                });
                this.router.navigate(['/login']);
            } else {
                this.messageService.add({
                    severity: 'error',
                    summary: 'Rosa Mística',
                    detail: data.headerApp.message
                });
            }
        }).catch(error => {
            if (error.error.code == 401) {
                localStorage.clear();
                this.router.navigate(['/login']);
            }
        })

    }

}
