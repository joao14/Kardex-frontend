import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { user } from './../../../../models/user';
import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';
import { ApisService } from 'src/services/apis.service';
import { Router } from '@angular/router';
import { UtilService } from 'src/services/util.service';
import { MessageService } from 'primeng';
import { roles } from 'src/models/roles';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-miperfil',
    templateUrl: './miperfil.component.html',
    styleUrls: ['./miperfil.component.css'],
    providers: [TranslateService, MessageService],
})
export class MiperfilComponent implements OnInit {

    user: user;
    public imagePath;
    imgURL: any;
    public message: string;
    enabled: boolean = true;
    profileForm: FormGroup;
    email_: string;
    texto: string;
    looking: boolean;
    icon: string;
    urlphoto: string;

    constructor(private fb: FormBuilder, private api: ApisService, private router: Router, private utilService: UtilService,
        private messageService: MessageService) {
        this.profileForm = this.fb.group({
            identification: ['', [Validators.required, Validators.minLength(10)]],
            name: ['', Validators.required],
            lastname: ['', Validators.required],
            email: ['', [Validators.required,
            Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]]
        });
    }
    ngOnInit() {
        this.urlphoto = "";
        this.icon = "pi pi-eye";
        this.looking = false;
        this.user = JSON.parse(localStorage.getItem('user'));
        console.log(this.user);
        console.log('************');
        this.user.clave = atob(this.user.clave);
        console.log('USUARIO FINAL');
        console.log(this.user);
        this.profileForm.get('identification').setValue(this.user.dni);
        this.profileForm.get('name').setValue(this.user.name);
        this.profileForm.get('lastname').setValue(this.user.lastname);
        this.profileForm.get('email').setValue(this.user.email);
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

    get identification() {
        return this.profileForm.get('identification');
    }

    get name() {
        return this.profileForm.get('name');
    }

    get lastname() {
        return this.profileForm.get('lastname');
    }

    get email() {
        return this.profileForm.get('email');
    }



    preview(files) {
        if (files.length === 0)
            return;
        var mimeType = files[0].type;

        if (mimeType.match(/image\/*/) == null) {
            this.message = "Only images are supported.";
            return;
        }
        var reader = new FileReader();
        reader.readAsDataURL(files[0]);
        this.urlphoto = files[0].name;
        reader.onload = (_event) => {
            this.user.photo = reader.result.toString();
        }
    }

    modify() {
        console.log('Listo para poder modificar el perfil');
        this.enabled = false;
    }

    cancel() {
        console.log('Cancelar los cambios');
        this.enabled = true;
    }

    async sendData() {
        console.log('Se va a enviar toda la información del usuario');
        let user = {
            apellidos: this.user.lastname,
            nombres: this.user.name,
            dni: this.user.dni,
            nickname: this.user.nickname,
            email: this.user.email,
            clave: btoa(this.user.clave),
            entiId: this.user.empresa['entiid'],
            estado: this.user.state,
            photo: this.urlphoto == '' ? null : this.urlphoto + ';' + this.user.photo,
            usuaId: this.user.usuaid,
            fechregi: new Date().toISOString()
        }
        console.log(user);
        this.utilService.isLoading.next(true);
        await this.api.updateUser(user, localStorage.getItem('token')).then(async (data) => {
            console.log('USUARIO');
            console.log(data);
            if (data.headerApp.code == 200) {
                console.log('Se ha modificado correctamente');
                await localStorage.removeItem('user');
                var roles_: roles[] = [];
                data.data.roles.forEach(element => {
                    let rol = {
                        id: element.id,
                        rol: element.rol,
                        shorcut: element.shorcut
                    }
                    roles_.push(rol);
                });
                let empresa = {
                    dni: data.data.usuario.empresa.dni,
                    entiid: data.data.usuario.empresa.entiid,
                    nombcome: data.data.usuario.empresa.nombcome,
                    razosoci: data.data.usuario.empresa.razosoci,
                }
                let user: user = {
                    usuaid: data.data.usuario.usuaid,
                    dni: data.data.usuario.dni,
                    email: data.data.usuario.email,
                    state: data.data.usuario.estado,
                    name: data.data.usuario.nombres,
                    lastname: data.data.usuario.apellidos,
                    roles: roles_,
                    photo: environment.url + data.data.usuario.photo,
                    empresa: empresa,
                    clave: atob(data.data.usuario.clave),
                    nickname: data.data.usuario.nickname
                }
                this.user = user;
                await localStorage.setItem("user", JSON.stringify(this.user));
                this.messageService.add({ severity: 'success', summary: 'Rosa Mística', detail: 'Se a actualizado los datos del usuario' });
                this.enabled=true;
                this.looking=false;
                this.utilService.user.next(JSON.stringify(this.user));
            }else{
                this.messageService.add({ severity: 'error', summary: 'Rosa Mística', detail: data.headerApp.message });
            }

        }).catch(err => {
            console.log('Error');
            console.log(err);
            if (err.error.code == 401) {
                localStorage.clear();
                this.router.navigate(['/login']);
            }

        });
        this.utilService.isLoading.next(false);

    }

}
