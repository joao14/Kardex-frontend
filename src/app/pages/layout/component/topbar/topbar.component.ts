import { LayoutComponent } from './../../layout.component';
import { user } from './../../../../../models/user';
import { TranslateService } from '@ngx-translate/core';

import { Component, OnInit, Input, OnChanges, SimpleChanges, AfterViewInit } from '@angular/core';

@Component({
    selector: 'app-topbar',
    templateUrl: './topbar.component.html',
    styleUrls: ['./topbar.component.css'],
    providers: [TranslateService],
})
export class TopbarComponent implements OnInit {
    user: user;
    name: string;
    estado: boolean;
    menu: string;
    activeMenuUser: boolean;
    selectlanguajes: string;
    languajes: any[] = [];
    typerol: string;

    constructor(public app: LayoutComponent, private translate: TranslateService) {

        this.app.utilservice.isLoading.subscribe(data => {
            this.estado = data;
        })

        this.app.utilservice.user.subscribe(data => {
            this.user = JSON.parse(data);
            this.name = this.user.nombres +' '+this.user.apellidos;   
        })
    }


    ngOnInit(): void {
        this.activeMenuUser = false;
        this.user = JSON.parse(localStorage.getItem('user'));
        console.log('usuario');
        console.log(this.user);
        
        this.name = this.user.nombres +' '+this.user.apellidos;
    }

    onOptionsSelected(lng: string) {
        console.log('Seleccionar' + lng);
    }

    onChange(event) {
        this.translate.use(event.target.value);
    }

    onselectlanguajes(languajes: string) {
        console.log('Esta cambiando el lenguaje');

    }

    activeMenu() {
        if (this.activeMenuUser) {
            this.activeMenuUser = false
        } else {
            this.activeMenuUser = true;
        }
    }

    selectSubItem(menu: string) {
        if (this.menu == menu) {
            this.menu = "";
        } else {
            this.menu = menu;
        }
    }


}
