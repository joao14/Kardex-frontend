import { Component, OnInit } from '@angular/core';
import { MessageService, ConfirmationService, DialogService } from 'primeng';
import { TranslateService } from '@ngx-translate/core';
import { ApisService } from 'src/services/apis.service';
import { UtilService } from 'src/services/util.service';
import { client } from 'src/models/client';
import { Router } from '@angular/router';
import * as moment from 'moment';

export interface Cliente {
  apellidos: string;
  entiId: number;
  razosoci: string;
  entiDni: string;
  nombres: string;
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

  constructor(private api: ApisService, private utilService: UtilService, private router: Router) {

  }

  ngOnInit(): void {
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

  onDateSelect(event) {
    console.log('Seleccionar');
    console.log(event);
    //Debe volver a consultar
    console.log(this.invoices);
    console.log('TEST');
    this.invoices = this.invoices.filter(documento => this.getFormatDate(new Date(documento.fecha)) == this.getFormatDate(event));
    console.log('RESULTADO FINAL');
    console.log(this.invoices);
  }

  close() {
    this.consultar();
  }

  async consultar() {
    this.utilService.isLoading.next(true);
    await this.api.getsales(this.getFormatDate(this.dateIni).replace(/-/g, ""), this.getFormatDate(this.dateFin).replace(/-/g, ""), localStorage.getItem("token")).then(data => {
      console.log(data);
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

  view(documento: Documentos) {
    this.dialogVisible = true;
    this.url = 'https://addsoft-tech.com:8443/rmi/invoices/' + documento.pdf;
    this.claveacceso = documento.claveacceso;
  }

  getFormatDate(date: Date): string {
    return (moment(date)).format('YYYY-MM-DD');
  }


}
