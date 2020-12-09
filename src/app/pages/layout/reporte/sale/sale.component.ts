import { Component, OnInit } from '@angular/core';
import { MessageService, ConfirmationService, DialogService } from 'primeng';
import { TranslateService } from '@ngx-translate/core';
import { ApisService } from 'src/services/apis.service';
import { UtilService } from 'src/services/util.service';
import { client } from 'src/models/client';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { environment } from 'src/environments/environment';

export interface Cliente {
  apellidos: string;
  entiId: number;
  razosoci: string;
  entiDni: string;
  nombres: string;
}

export interface Factura {
  clieId: number;
  email: string;
  nombres: string;
  pdf: string;
  secuencial: number;
}

export interface Documentos {
  fecha: string;
  contdocu: number;
  cliente: Cliente;
  total: string;
  pdf: string;
  claveacceso: string;
  numetallos: number;
  puntemis: string;
  codiesta: string;
  secuencial: number;
  estado: string;
}

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css'],
  providers: [MessageService, ConfirmationService, DialogService, TranslateService],
})
export class SaleComponent implements OnInit {

  numDocument: string;
  date: Date;
  filterMobile: Date;
  clientes: Array<client> = [];
  invoices: Array<Documentos> = [];
  dateIni: Date = new Date();
  dateFin: Date = new Date();
  dialogVisible: boolean;
  selectDocument: Documentos;
  url: string;
  claveacceso: string;
  emailuser: string;
  newemailuser: string;
  status: boolean;
  dialogEmail: boolean;
  selectfactura: Factura;


  constructor(private api: ApisService, private utilService: UtilService, private router: Router, private messageService: MessageService) {

  }

  ngOnInit(){
    this.emailuser = "";
    this.newemailuser = "";
    this.status = false;
    this.selectfactura = null;
    this.dialogEmail = false;
    this.date = new Date();
    this.numDocument = "";
    this.filterMobile = new Date();
    this.dialogVisible = false;
    this.selectDocument = null;
    this.getClient();
  }

  async getClient() {
    this.utilService.isLoading.next(true);
    await this.api.getclients(localStorage.getItem("token")).then(cliente => {
      console.log(cliente);
      if (cliente.headerApp.code === 200) {
        this.clientes = cliente.data.clientes;
      }
    }).catch(err => {
      console.log(err);
      if (err.error.code == 401) {
        localStorage.clear();
        this.router.navigate(['/login']);
      }
    })
    this.utilService.isLoading.next(false);
  }

  async consultar() {   
    this.utilService.isLoading.next(true);
    await this.api.getsales(this.getFormatDate(this.dateIni).replace(/-/g, "") + " 00:00:00",
      this.getFormatDate(this.dateFin).replace(/-/g, "") + " 23:59:59",
      localStorage.getItem("token")).then(data => {       
        if (data.headerApp.code === 200) {
          this.invoices = data.data.invoices;
        }
      }).catch(err => {
        console.log(err);
        if (err.error.code == 401) {
          localStorage.clear();
          this.router.navigate(['/login']);
        }
      })
    this.utilService.isLoading.next(false);
  }

  send(documento: Documentos) {   
    this.dialogEmail = true;
    this.emailuser = documento.cliente['email'];
    this.selectfactura = {
      clieId: documento.cliente.entiId,
      email: documento.cliente['email'],
      nombres: documento.cliente.nombres,
      pdf: documento.pdf,
      secuencial: documento.secuencial
    }    
  }

  view(documento: Documentos) {
    this.dialogVisible = true;
    this.url = environment.url + documento.pdf;
    this.claveacceso = documento.claveacceso;
  }

  async ok() {    
    if (this.status && (this.newemailuser == '' || this.newemailuser == undefined)) {
      this.messageService.add({ severity: 'error', summary: 'Rosa Mística', detail: 'Debe agregar el nuevo email' });
      return;
    }

    let contentEmail = {
      tipoDocu: "IN",
      clieId: this.selectfactura.clieId,
      nombres: this.selectfactura.nombres,
      email: this.status ? this.newemailuser : this.emailuser,
      secuencia: this.selectfactura.secuencial,
      docu: this.selectfactura.pdf,
      fechaDocu: this.getFormatDate(new Date())
    }   
    this.utilService.isLoading.next(true);
    await this.api.sendEmail(contentEmail, localStorage.getItem("token")).then(data => {
      console.log(data);
      if (data.headerApp.code == 200) {
        this.dialogEmail = false;
        this.emailuser = "";
        this.status = false;
        this.newemailuser = "";
        this.messageService.add({ severity: 'success', summary: 'Rosa Mística', detail: 'Email enviado correctamente' });
      }
    }).catch(err => {
      if (err.error.code == 401) {
        localStorage.clear();
        this.router.navigate(['/login']);
      }
    })
    this.utilService.isLoading.next(false);
  }

  getFormatDate(date: Date): string {
    return (moment(date)).format('yyyy-MM-DD');
  }


}
