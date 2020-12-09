import { LayoutComponent } from './../../layout.component';
import { Router } from '@angular/router';

import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { user } from 'src/models/user';
import { UtilService } from 'src/services/util.service';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, OnChanges {

    model: any[];
    selectItem: string = '';
    @Input() rol: string;
    @Input() typerol: string;
    nameRol: string;
    activeMenuItem: string;
    activeSubMenu: string;
    activeItem: string;
    user: user;

    constructor(public app: LayoutComponent, public router: Router) {
        this.app.utilservice.rolselected.subscribe(rol => {
            this.nameRol = rol;
            this.activeMenuItem = 'DASH';
            this.activeItem = "";
            this.activeSubMenu = "";
            this.app.utilservice.itemsSource.next([{ 'label': 'Dashboard' }]);
        })
    }

    ngOnInit() {
        this.nameRol = JSON.parse(localStorage.getItem('user')).roles[0].rol;
        this.typerol = JSON.parse(localStorage.getItem('user')).roles[0].shorcut;
        this.activeMenuItem = "DASH";
        this.activeSubMenu = "";
        this.activeItem = "";
    }


    ngOnChanges() {

        /* this.nameRol = this.rol;
         switch (this.rol.toUpperCase()) {
             case 'ADMINISTRADOR':
                 this.getAdministrador();
                 break;
             case 'CLIENTE':
                 this.getCliente();
                 break;
             default:
                 console.log('No se encuentra el perfil');
 
                 break;
         }*/

    }


    getAdministrador() {
        this.model = [
            { label: 'Dashboard', icon: 'fa fa-fw fa-tachometer', routerLink: '/' },
            {
                label: 'Seguridad', icon: 'fa fa-fw fa-cogs',
                items: [
                    //{ label: 'Roles', icon: 'fa fa-fw fa-users', routerLink: '/roles' },
                    { label: 'Usuario', icon: 'fa fa-fw fa-users', routerLink: '/usuario' }
                ]
            },
            {
                label: 'Catálogos', icon: 'fa fa-fw fa-table',
                items: [
                    { label: 'Flores', icon: 'fa fa-fw fa-cubes', routerLink: '/flores' },
                    { label: 'Fincas', icon: 'fa fa-fw fa-building-o', routerLink: '/fincas' },
                    { label: 'E. Carga', icon: 'fa fa-fw fa-truck', routerLink: '/delivery' }
                ]
            },
            {
                label: 'Ventas', icon: 'fa fa-money',
                items: [
                    { label: 'Clientes', icon: 'fa fa-fw fa-user-circle-o', routerLink: '/clientes' },
                    { label: 'Facturación', icon: 'fa fa-fw fa-pencil-square-o', routerLink: '/factura' },
                    { label: 'Registro asientos', icon: 'fa fa-fw fa-ticket', routerLink: '/pagoreclamo' },
                ]
            },
            { label: 'Generar Prealertas', icon: 'fa fa-fw fa-pencil-square-o', routerLink: '/prealerta' },
            {
                label: 'Reportes', icon: 'fa fa-fw fa-wpforms',
                items: [
                    { label: 'Venta diaria de flores', icon: 'fa fa-fw fa-file-text-o', routerLink: '/sales' },
                    { label: 'Documentos clientes', icon: 'fa fa-fw fa-file-text-o', routerLink: '/balance' },
                    { label: 'Reporte prealerta', icon: 'fa fa-fw fa-file-text-o', routerLink: '/documento' },
                ]
            },
            /*{
                label: 'Menu Colors', icon: 'fa fa-fw fa-paint-brush',
                items: [
                    { label: 'Light', icon: 'fa fa-fw fa-paint-brush', command: event => this.app.lightMenu = true },
                    { label: 'Dark', icon: 'fa fa-fw fa-paint-brush', command: event => this.app.lightMenu = false }
                ]
            },*/
            {
                label: 'Layouts', icon: 'fa fa-fw fa-cog',
                items: [
                    { label: 'Static', icon: 'fa fa-fw fa-bars', command: event => this.app.menuMode = 'static' },
                    { label: 'Overlay', icon: 'fa fa-fw fa-bars', command: event => this.app.menuMode = 'overlay' },
                    { label: 'Slim', icon: 'fa fa-fw fa-bars', command: event => this.app.menuMode = 'slim' },
                    { label: 'Horizontal', icon: 'fa fa-fw fa-bars', command: event => this.app.menuMode = 'horizontal' }
                ]
            },
            {
                label: 'Themes', icon: 'fa fa-fw fa-paint-brush', badge: 2,
                items: [
                    {
                        label: 'Pink', icon: 'fa fa-fw fa-paint-brush',
                        items: [
                            {
                                label: 'Light', icon: 'fa fa-fw fa-paint-brush',
                                command: (event) => this.changeTheme('pink', 'light')
                            },
                            {
                                label: 'Dark', icon: 'fa fa-fw fa-paint-brush',
                                command: (event) => this.changeTheme('pink', 'dark')
                            }
                        ]
                    },
                    {
                        label: 'Cyan', icon: 'fa fa-fw fa-paint-brush',
                        items: [
                            {
                                label: 'Light', icon: 'fa fa-fw fa-paint-brush',
                                command: (event) => this.changeTheme('cyan', 'light')
                            },
                            {
                                label: 'Dark', icon: 'fa fa-fw fa-paint-brush',
                                command: (event) => this.changeTheme('cyan', 'dark')
                            }
                        ]
                    }
                ]
            },

            /*{
                label: 'Components', icon: 'fa fa-fw fa-bars', routerLink: ['/components'],
                items: [
                    { label: 'Sample Page', icon: 'fa fa-fw fa-columns', routerLink: ['/components/sample'] },
                    { label: 'Forms', icon: 'fa fa-fw fa-code', routerLink: ['/components/forms'] },
                    { label: 'Data', icon: 'fa fa-fw fa-table', routerLink: ['/components/data'] },
                    { label: 'Panels', icon: 'fa fa-fw fa-list-alt', routerLink: ['/components/panels'] },
                    { label: 'Overlays', icon: 'fa fa-fw fa-square', routerLink: ['/components/overlays'] },
                    { label: 'Menus', icon: 'fa fa-fw fa-minus-square-o', routerLink: ['/components/menus'] },
                    { label: 'Messages', icon: 'fa fa-fw fa-circle-o-notch', routerLink: ['/components/messages'] },
                    { label: 'Charts', icon: 'fa fa-fw fa-area-chart', routerLink: ['/components/charts'] },
                    { label: 'File', icon: 'fa fa-fw fa-arrow-circle-o-up', routerLink: ['/components/file'] },
                    { label: 'Misc', icon: 'fa fa-fw fa-user-secret', routerLink: ['/components/misc'] }
                ]
            },
            { 
                label: 'Menu Colors', icon: 'fa fa-fw fa-paint-brush',
                items: [
                    { label: 'Light', icon: 'fa fa-fw fa-paint-brush', command: event => this.app.lightMenu = true },
                    { label: 'Dark', icon: 'fa fa-fw fa-paint-brush', command: event => this.app.lightMenu = false }
                ]
            },
            {
                label: 'Layouts', icon: 'fa fa-fw fa-cog',
                items: [
                    { label: 'Static', icon: 'fa fa-fw fa-bars', command: event => this.app.menuMode = 'static' },
                    { label: 'Overlay', icon: 'fa fa-fw fa-bars', command: event => this.app.menuMode = 'overlay' },
                    { label: 'Slim', icon: 'fa fa-fw fa-bars', command: event => this.app.menuMode = 'slim' },
                    { label: 'Horizontal', icon: 'fa fa-fw fa-bars', command: event => this.app.menuMode = 'horizontal' }
                ]
            },
            {
                label: 'Themes', icon: 'fa fa-fw fa-paint-brush', badge: 15,
                items: [
                    {
                        label: 'Pink', icon: 'fa fa-fw fa-paint-brush',
                        items: [
                            {
                                label: 'Light', icon: 'fa fa-fw fa-paint-brush',
                                command: (event) => this.changeTheme('pink', 'light')
                            },
                            {
                                label: 'Dark', icon: 'fa fa-fw fa-paint-brush',
                                command: (event) => this.changeTheme('pink', 'dark')
                            }
                        ]
                    },
                    {
                        label: 'Indigo', icon: 'fa fa-fw fa-paint-brush',
                        items: [
                            {
                                label: 'Light', icon: 'fa fa-fw fa-paint-brush',
                                command: (event) => this.changeTheme('indigo', 'light')
                            },
                            {
                                label: 'Dark', icon: 'fa fa-fw fa-paint-brush',
                                command: (event) => this.changeTheme('indigo', 'dark')
                            }
                        ]
                    },
                    {
                        label: 'Green', icon: 'fa fa-fw fa-paint-brush',
                        items: [
                            {
                                label: 'Light', icon: 'fa fa-fw fa-paint-brush',
                                command: (event) => this.changeTheme('green', 'light')
                            },
                            {
                                label: 'Dark', icon: 'fa fa-fw fa-paint-brush',
                                command: (event) => this.changeTheme('green', 'dark')
                            }
                        ]
                    },
                    {
                        label: 'Amber', icon: 'fa fa-fw fa-paint-brush',
                        items: [
                            {
                                label: 'Light', icon: 'fa fa-fw fa-paint-brush',
                                command: (event) => this.changeTheme('amber', 'light')
                            },
                            {
                                label: 'Dark', icon: 'fa fa-fw fa-paint-brush',
                                command: (event) => this.changeTheme('amber', 'dark')
                            }
                        ]
                    },
                    {
                        label: 'Deep Purple', icon: 'fa fa-fw fa-paint-brush',
                        items: [
                            {
                                label: 'Light', icon: 'fa fa-fw fa-paint-brush',
                                command: (event) => this.changeTheme('deeppurple', 'light')
                            },
                            {
                                label: 'Dark', icon: 'fa fa-fw fa-paint-brush',
                                command: (event) => this.changeTheme('deeppurple', 'dark')
                            }
                        ]
                    },
                    {
                        label: 'Blue', icon: 'fa fa-fw fa-paint-brush',
                        items: [
                            {
                                label: 'Light', icon: 'fa fa-fw fa-paint-brush',
                                command: (event) => this.changeTheme('blue', 'light')
                            },
                            {
                                label: 'Dark', icon: 'fa fa-fw fa-paint-brush',
                                command: (event) => this.changeTheme('blue', 'dark')
                            }
                        ]
                    },
                    {
                        label: 'Dark Blue Grey', icon: 'fa fa-fw fa-paint-brush',
                        items: [
                            {
                                label: 'Light', icon: 'fa fa-fw fa-paint-brush',
                                command: (event) => this.changeTheme('darkblue', 'light')
                            },
                            {
                                label: 'Dark', icon: 'fa fa-fw fa-paint-brush',
                                command: (event) => this.changeTheme('darkblue', 'dark')
                            }
                        ]
                    },
                    {
                        label: 'Cyan', icon: 'fa fa-fw fa-paint-brush',
                        items: [
                            {
                                label: 'Light', icon: 'fa fa-fw fa-paint-brush',
                                command: (event) => this.changeTheme('cyan', 'light')
                            },
                            {
                                label: 'Dark', icon: 'fa fa-fw fa-paint-brush',
                                command: (event) => this.changeTheme('cyan', 'dark')
                            }
                        ]
                    },
                    {
                        label: 'Purple', icon: 'fa fa-fw fa-paint-brush',
                        items: [
                            {
                                label: 'Light', icon: 'fa fa-fw fa-paint-brush',
                                command: (event) => this.changeTheme('purple', 'light')
                            },
                            {
                                label: 'Dark', icon: 'fa fa-fw fa-paint-brush',
                                command: (event) => this.changeTheme('purple', 'dark')
                            }
                        ]
                    },
                    {
                        label: 'Deep Orange', icon: 'fa fa-fw fa-paint-brush',
                        items: [
                            {
                                label: 'Light', icon: 'fa fa-fw fa-paint-brush',
                                command: (event) => this.changeTheme('deeporange', 'light')
                            },
                            {
                                label: 'Dark', icon: 'fa fa-fw fa-paint-brush',
                                command: (event) => this.changeTheme('deeporange', 'dark')
                            }
                        ]
                    },
                    {
                        label: 'Lime', icon: 'fa fa-fw fa-paint-brush',
                        items: [
                            {
                                label: 'Light', icon: 'fa fa-fw fa-paint-brush',
                                command: (event) => this.changeTheme('lime', 'light')
                            },
                            {
                                label: 'Dark', icon: 'fa fa-fw fa-paint-brush',
                                command: (event) => this.changeTheme('lime', 'dark')
                            }
                        ]
                    },
                    {
                        label: 'Yellow', icon: 'fa fa-fw fa-paint-brush',
                        items: [
                            {
                                label: 'Light', icon: 'fa fa-fw fa-paint-brush',
                                command: (event) => this.changeTheme('yellow', 'light')
                            },
                            {
                                label: 'Dark', icon: 'fa fa-fw fa-paint-brush',
                                command: (event) => this.changeTheme('yellow', 'dark')
                            }
                        ]
                    },
                    {
                        label: 'Blue Grey', icon: 'fa fa-fw fa-paint-brush',
                        items: [
                            {
                                label: 'Light', icon: 'fa fa-fw fa-paint-brush',
                                command: (event) => this.changeTheme('bluegrey', 'light')
                            },
                            {
                                label: 'Dark', icon: 'fa fa-fw fa-paint-brush',
                                command: (event) => this.changeTheme('bluegrey', 'dark')
                            }
                        ]
                    },
                    {
                        label: 'Mojito', icon: 'fa fa-fw fa-paint-brush',
                        items: [
                            {
                                label: 'Light', icon: 'fa fa-fw fa-paint-brush',
                                command: (event) => this.changeTheme('mojito', 'light')
                            },
                            {
                                label: 'Dark', icon: 'fa fa-fw fa-paint-brush',
                                command: (event) => this.changeTheme('mojito', 'dark')
                            }
                        ]
                    },
                    {
                        label: 'Grey', icon: 'fa fa-fw fa-paint-brush',
                        items: [
                            {
                                label: 'Light', icon: 'fa fa-fw fa-paint-brush',
                                command: (event) => this.changeTheme('grey', 'light')
                            },
                            {
                                label: 'Dark', icon: 'fa fa-fw fa-paint-brush',
                                command: (event) => this.changeTheme('grey', 'dark')
                            }
                        ]
                    }
                ]
            },
            , {
                label: 'Components', icon: 'fa fa-fw fa-bars', routerLink: ['/components'],
                items: [
                    { label: 'Sample Page', icon: 'fa fa-fw fa-columns', routerLink: ['/components/sample'] },
                    { label: 'Forms', icon: 'fa fa-fw fa-code', routerLink: ['/components/forms'] },
                    { label: 'Data', icon: 'fa fa-fw fa-table', routerLink: ['/components/data'] },
                    { label: 'Panels', icon: 'fa fa-fw fa-list-alt', routerLink: ['/components/panels'] },
                    { label: 'Overlays', icon: 'fa fa-fw fa-square', routerLink: ['/components/overlays'] },
                    { label: 'Menus', icon: 'fa fa-fw fa-minus-square-o', routerLink: ['/components/menus'] },
                    { label: 'Messages', icon: 'fa fa-fw fa-circle-o-notch', routerLink: ['/components/messages'] },
                    { label: 'Charts', icon: 'fa fa-fw fa-area-chart', routerLink: ['/components/charts'] },
                    { label: 'File', icon: 'fa fa-fw fa-arrow-circle-o-up', routerLink: ['/components/file'] },
                    { label: 'Misc', icon: 'fa fa-fw fa-user-secret', routerLink: ['/components/misc'] }
                ]
            },
            {
                label: 'Pages', icon: 'fa fa-fw fa-cube', routerLink: ['/pages'],
                items: [
                    { label: 'Empty Page', icon: 'fa fa-fw fa-square-o', routerLink: ['/pages/empty'] },
                    { label: 'Landing Page', icon: 'fa fa-fw fa-globe', url: 'assets/pages/landing.html', target: '_blank' },
                    { label: 'Login Page', icon: 'fa fa-fw fa-sign-in', url: 'assets/pages/login.html', target: '_blank' },
                    { label: 'Error Page', icon: 'fa fa-fw fa-exclamation-circle', url: 'assets/pages/error.html', target: '_blank' },
                    { label: '404 Page', icon: 'fa fa-fw fa-times', url: 'assets/pages/404.html', target: '_blank' },
                    {
                        label: 'Access Denied', icon: 'fa fa-fw fa-exclamation-triangle',
                        url: 'assets/pages/access.html', target: '_blank'
                    }
                ]
            },
            /*{
                label: 'Hierarchy', icon: 'fa fa-fw fa-sitemap',
                items: [
                    {
                        label: 'Submenu 1', icon: 'fa fa-fw fa-sign-in',
                        items: [
                            {
                                label: 'Submenu 1.1', icon: 'fa fa-fw fa-sign-in',
                                items: [
                                    { label: 'Submenu 1.1.1', icon: 'fa fa-fw fa-sign-in' },
                                    { label: 'Submenu 1.1.2', icon: 'fa fa-fw fa-sign-in' },
                                    { label: 'Submenu 1.1.3', icon: 'fa fa-fw fa-sign-in' },
                                ]
                            },
                            {
                                label: 'Submenu 1.2', icon: 'fa fa-fw fa-sign-in',
                                items: [
                                    { label: 'Submenu 1.2.1', icon: 'fa fa-fw fa-sign-in' },
                                    { label: 'Submenu 1.2.2', icon: 'fa fa-fw fa-sign-in' }
                                ]
                            },
                        ]
                    },
                    {
                        label: 'Submenu 2', icon: 'fa fa-fw fa-sign-in',
                        items: [
                            {
                                label: 'Submenu 2.1', icon: 'fa fa-fw fa-sign-in',
                                items: [
                                    { label: 'Submenu 2.1.1', icon: 'fa fa-fw fa-sign-in' },
                                    { label: 'Submenu 2.1.2', icon: 'fa fa-fw fa-sign-in' },
                                    { label: 'Submenu 2.1.3', icon: 'fa fa-fw fa-sign-in' },
                                ]
                            },
                            {
                                label: 'Submenu 2.2', icon: 'fa fa-fw fa-sign-in',
                                items: [
                                    { label: 'Submenu 2.2.1', icon: 'fa fa-fw fa-sign-in' },
                                    { label: 'Submenu 2.2.2', icon: 'fa fa-fw fa-sign-in' }
                                ]
                            },
                        ]
                    }
                ]
            }*/

        ];
    }

    select(model: any) {
        console.log('MODEL');
        console.log(model);
        console.log('Selecciono lo siguiente');
        console.log(model.label);
        this.selectItem = model.label;
    }

    selectSubItem(model: any) {
        console.log('Seleccionar sub item');
        console.log(model);
        if (model.command != null) {
            this.app.lightMenu = model.command;
        }
        if (model.position != null) {
            this.app.menuMode = model.position;
        }

    }

    changeTheme(theme: string, scheme: string) {
        const layoutLink: HTMLLinkElement = document.getElementById('layout-css') as HTMLLinkElement;
        const layoutHref = 'assets/layout/css/layout-' + theme + '.css';

        this.replaceLink(layoutLink, layoutHref);

        const themeLink: HTMLLinkElement = document.getElementById('theme-css') as HTMLLinkElement;
        const themeHref = 'assets/theme/' + theme + '/theme-' + scheme + '.css';

        this.replaceLink(themeLink, themeHref);
    }

    isIE() {
        return /(MSIE|Trident\/|Edge\/)/i.test(window.navigator.userAgent);
    }

    replaceLink(linkElement, href) {
        if (this.isIE()) {
            linkElement.setAttribute('href', href);
        } else {
            const id = linkElement.getAttribute('id');
            const cloneLinkElement = linkElement.cloneNode(true);

            cloneLinkElement.setAttribute('href', href);
            cloneLinkElement.setAttribute('id', id + '-clone');

            linkElement.parentNode.insertBefore(cloneLinkElement, linkElement.nextSibling);

            cloneLinkElement.addEventListener('load', () => {
                linkElement.remove();
                cloneLinkElement.setAttribute('id', id);
            });
        }
    }

    onMenuClick(event) {
        this.app.onMenuClick(event);
    }

    change(url: string) {
        this.router.navigate([url]);
    }

    activeMenu(menu: string) {
        if (menu == 'DASH') {
            this.app.utilservice.itemsSource.next([{ 'label': 'Dashboard' }])
        } else if (menu == 'AUTOMATIC') {
            this.app.utilservice.itemsSource.next([{ 'label': 'Carga de archivo' }])
        }else if (menu == 'QUESTIONNAIRE') {
            this.app.utilservice.itemsSource.next([{ 'label': 'Cuestionarios' }])
        }

        if (this.activeMenuItem == menu) {
            this.activeMenuItem = "";
            this.activeSubMenu = "";
            this.activeItem = "";
        } else {
            this.activeMenuItem = menu;
            this.activeSubMenu = "";
            this.activeItem = "";
        }
    }

    itemClick(menu: string) {
        if (this.activeSubMenu == menu) {
            this.activeSubMenu = "";
            this.activeMenuItem = "";
        } else {
            this.activeSubMenu = menu;
            this.activeMenuItem = "";
        }
    }

    selectItemMenu(item: string) {
        if (item == 'EC') {
            this.app.utilservice.itemsSource.next([{ 'label': 'Seguridad' }, { 'label': 'Usuarios' }])
        } else
            if (item == 'FL') {
                this.app.utilservice.itemsSource.next([{ 'label': 'Cátalogos' }, { 'label': 'Flores' }])
            } else
                if (item == 'FI') {
                    this.app.utilservice.itemsSource.next([{ 'label': 'Cátalogos' }, { 'label': 'Fincas' }])
                } else
                    if (item == 'ECA') {
                        this.app.utilservice.itemsSource.next([{ 'label': 'Cátalogos' }, { 'label': 'Empresas de Cargas' }])
                    }
                    else
                        if (item == 'CL') {
                            this.app.utilservice.itemsSource.next([{ 'label': 'Ventas' }, { 'label': 'Clientes' }])
                        }
                        else
                            if (item == 'FAC') {
                                this.app.utilservice.itemsSource.next([{ 'label': 'Ventas' }, { 'label': 'Facturación' }])
                            } else
                                if (item == 'ASIE') {
                                    this.app.utilservice.itemsSource.next([{ 'label': 'Ventas' }, { 'label': 'Registro de asientos' }])
                                } else
                                    if (item == 'VD') {
                                        this.app.utilservice.itemsSource.next([{ 'label': 'Reportes' }, { 'label': 'Ventas Diarias' }])
                                    } else
                                        if (item == 'DC') {
                                            this.app.utilservice.itemsSource.next([{ 'label': 'Reportes' }, { 'label': 'Documentos de clientes' }])
                                        } else
                                            if (item == 'RPL') {
                                                this.app.utilservice.itemsSource.next([{ 'label': 'Reportes' }, { 'label': 'Prealertas' }])
                                            }

        if (this.activeItem == item) {
            this.activeItem = "";
        } else {
            this.activeItem = item;
        }

    }


}
