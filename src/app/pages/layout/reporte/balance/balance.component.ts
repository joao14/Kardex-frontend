import { Component, OnInit, ViewChild } from '@angular/core';
import { client } from 'src/models/client';
import { ApisService } from 'src/services/apis.service';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService, DialogService, DynamicDialogRef, Table } from 'primeng';
import * as moment from 'moment';
import { TranslateService } from '@ngx-translate/core';
import { UtilService } from 'src/services/util.service';
import { user } from 'src/models/user';
import { environment } from 'src/environments/environment';

export interface Invoice {
  tranId: string;
  fecha: string;
  tipo: string;
  monto: number;
  balance: number;
  numedocu: string;
  tipotran: string;
  documento: string;
}

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css'],
  providers: [MessageService, ConfirmationService, DialogService, TranslateService],
})
export class BalanceComponent implements OnInit {

  selectClient: client;
  clientes: Array<client> = [];
  dialogVisible: boolean;
  dateIni: Date = new Date();
  dateFin: Date = new Date();
  invoices: Array<Invoice> = [];
  url: string;
  numedocu: string;
  user: user;
  typerol: string;

  constructor(private api: ApisService, private router: Router, public dialogService: DialogService,
    private messageService: MessageService,
    private utilService: UtilService) {

  }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.typerol = localStorage.getItem("rolactive");
    if (this.typerol != 'ADM') {
      this.getClientbyName(JSON.parse(localStorage.getItem('user')).empresa.nombcome);
    } else {
      this.getClient();
    }
    this.dialogVisible = false;
    this.selectClient = null;

  }

  async getClientbyName(name: string): Promise<any> {
    let cliente: client = null;
    /*await this.api.getObjectbyName('C', name.toUpperCase(), localStorage.getItem("token")).then(data => {
      if (data.headerApp.code == 200) {
        this.selectClient = data.data.cliente;
      }
    }).catch(err => {
      if (err.error.code == 401) {
        localStorage.clear();
        this.router.navigate(['/login']);
      }
    })*/
    return cliente;
  }

  async getClient() {
    this.utilService.isLoading.next(true);
    this.clientes = [];
    /*await this.api.getclients(localStorage.getItem("token")).then(cliente => {     
      let temp: client[] = [];
      if (cliente.headerApp.code === 200) {
        cliente.data.clientes.forEach(element => {
          if (element.cliente.estado == 'A') {
            temp.push(element.cliente);
          }
        });
      }
      this.clientes = temp;

    }).catch(err => {
      console.log(err);
      if (err.error.code == 401) {
        localStorage.clear();
        this.router.navigate(['/login']);
      }
    })*/
    this.utilService.isLoading.next(false);
  }

  async consultar() {      
    if (this.selectClient == null) {
      this.messageService.add({ severity: 'error', summary: 'Rosa Mística', detail: 'Debe seleccionar el cliente' });
      return true;
    }

    this.utilService.isLoading.next(true);
    this.invoices = [];    
    /*await this.api.getInvoicesbyClient(this.selectClient.entiId, this.getFormatDate(this.dateIni).replace(/-/g, '') + " 00:00:00", this.getFormatDate(this.dateFin).replace(/-/g, '')+ " 23:59:59", localStorage.getItem("token") ).then(data => {
      if (data.headerApp.code == 200) {
        this.invoices = data.data.transacciones;
      }
    }).catch(err => {
      console.log(err);
      if (err.error.code == 401) {
        localStorage.clear();
        this.router.navigate(['/login']);
      }

    })*/
    this.utilService.isLoading.next(false);
  }

  view(invoice: Invoice) {    
    /*this.url = environment.url + invoice.documento;    */
    this.numedocu = invoice.numedocu;
    this.dialogVisible = true;
  }

  getFormatDate(date: Date): string {
    return (moment(date)).format('YYYY-MM-DD');
  }

}
