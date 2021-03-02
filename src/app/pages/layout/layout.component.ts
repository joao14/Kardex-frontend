import { Router } from "@angular/router";
import { MenuService } from "./../../../services/app.menu.service";
import { Component, OnInit, Input, AfterViewInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { UtilService } from 'src/services/util.service';

@Component({
    selector: "app-layout",
    templateUrl: "./layout.component.html",
    styleUrls: ["./layout.component.css"],
    providers: [TranslateService],
})
export class LayoutComponent implements OnInit {
    menuMode = "static";

    topbarMenuActive: boolean;

    overlayMenuActive: boolean;

    staticMenuDesktopInactive: boolean;

    staticMenuMobileActive: boolean;

    lightMenu = true;

    menuClick: boolean;

    topbarItemClick: boolean;

    activeTopbarItem: any;

    menuHoverActive: boolean;

    rightPanelActive: boolean;

    rightPanelClick: boolean;

    loading: boolean = false;

    rolselected: string;

    type: string;

    typerol: string;

    constructor(
        private menuService: MenuService,
        private router: Router,
        private translate: TranslateService, public utilservice: UtilService
    ) {

        this.utilservice.rolselected.subscribe(data => {
            this.rolselected = data;
        })

        this.utilservice.typerolselected.subscribe(data => {
            this.type = data;
        })

    }
  
    ngOnInit() {
        this.typerol = JSON.parse(localStorage.getItem('user')).perfil;
        localStorage.setItem("rolactive", this.typerol);

        this.utilservice.itemsSource.next([
            { label: 'Dashboard' }]);
    }


    onLayoutClick() {
        if (!this.topbarItemClick) {
            this.activeTopbarItem = null;
            this.topbarMenuActive = false;
        }

        if (!this.rightPanelClick) {
            this.rightPanelActive = false;
        }

        if (!this.menuClick) {
            if (this.isHorizontal() || this.isSlim()) {
                this.menuService.reset();
            }

            if (this.overlayMenuActive || this.staticMenuMobileActive) {
                this.hideOverlayMenu();
            }

            this.menuHoverActive = false;
        }

        this.topbarItemClick = false;
        this.menuClick = false;
        this.rightPanelClick = false;
    }

    onMenuButtonClick(event) {
        this.menuClick = true;
        this.topbarMenuActive = false;

        if (this.isOverlay()) {
            this.overlayMenuActive = !this.overlayMenuActive;
        }
        if (this.isDesktop()) {
            this.staticMenuDesktopInactive = !this.staticMenuDesktopInactive;
        } else {
            this.staticMenuMobileActive = !this.staticMenuMobileActive;
        }

        event.preventDefault();
    }

    onMenuClick($event) {
        this.menuClick = true;
    }

    onTopbarMenuButtonClick(event) {
        this.topbarItemClick = true;
        this.topbarMenuActive = !this.topbarMenuActive;

        this.hideOverlayMenu();

        event.preventDefault();
    }

    onTopbarItemClickRoles(event, item) {
        this.topbarItemClick = true;
        if (this.activeTopbarItem === item) {
            this.activeTopbarItem = null;
        } else {
            this.activeTopbarItem = item;
        }
        event.preventDefault();
    }

    onTopbarSubItemClickRoles(event) {
       
        this.utilservice.rolselected.next(event.target.textContent);
        switch ((event.target.textContent).toUpperCase()) {
            case "ADMINISTRADOR":
                this.utilservice.typerolselected.next('ADM');
                localStorage.setItem("rolactive", 'ADM');
                this.router.navigate(['/']);
                break;
            case "CLIENTE":
                this.utilservice.typerolselected.next('CLI');
                localStorage.setItem("rolactive", 'CLI');
                this.router.navigate(['/']);
                break;
            case "COMPRAS":
                this.utilservice.typerolselected.next('COM');
                localStorage.setItem("rolactive", 'COM');
                this.router.navigate(['/']);
                break;
            case "FACTURACIÓN":
                this.utilservice.typerolselected.next('FAC');
                localStorage.setItem("rolactive", 'FAC');
                this.router.navigate(['/']);
                break;
            default:
                break;
        }
        event.preventDefault();
    }

    onTopbarItemClickLanguajes(event, item) {
        this.topbarItemClick = true;
        if (this.activeTopbarItem === item) {
            this.activeTopbarItem = null;
        } else {
            this.activeTopbarItem = item;
        }
        event.preventDefault();
    }

    onTopbarItemClick(event, item) {

        this.topbarItemClick = true;

        if (this.activeTopbarItem === item) {
            this.activeTopbarItem = null;
        } else {
            this.activeTopbarItem = item;
        }

        event.preventDefault();
        this.utilservice.itemsSource.next([{'label':' Perfil'}])
        this.router.navigate(["miperfil"]);
    }

    singout() {
        console.log('Saliendo...');        
        localStorage.clear();
        this.router.navigate(["/login"]);
    }

    onTopbarSubItemClick(event) {
        event.preventDefault();
    }

    onTopbarSubItemClickLanguajes(event) {
        console.log('Validar lenguaje..');
        console.log(event.target.text);
        let languajes = "";
        if (event.target.text == "Español") {
            languajes = "es";
        } else if (event.target.text == "English") {
            languajes = "en";
        } else {
            languajes = "ch";
        }

        this.translate.use(languajes);
        event.preventDefault();
    }

    onRightPanelButtonClick(event) {
        this.rightPanelClick = true;
        this.rightPanelActive = !this.rightPanelActive;
        event.preventDefault();
    }

    onRightPanelClick() {
        this.rightPanelClick = true;
    }

    isHorizontal() {
        return this.menuMode === "horizontal";
    }

    isSlim() {
        return this.menuMode === "slim";
    }

    isOverlay() {
        return this.menuMode === "overlay";
    }

    isStatic() {
        return this.menuMode === "static";
    }

    isMobile() {
        return window.innerWidth < 1025;
    }

    isDesktop() {
        return window.innerWidth > 1024;
    }

    isTablet() {
        const width = window.innerWidth;
        return width <= 1024 && width > 640;
    }

    hideOverlayMenu() {
        this.overlayMenuActive = false;
        this.staticMenuMobileActive = false;
    }
}
