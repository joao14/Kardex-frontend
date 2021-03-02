import { Component, OnInit } from '@angular/core';
import { MessageService, ConfirmationService, DialogService } from 'primeng';
import { TranslateService } from '@ngx-translate/core';
import { ApisService } from 'src/services/apis.service';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { client } from 'src/models/client';
import { NgxSpinnerService } from 'ngx-spinner';
import { UtilService } from 'src/services/util.service';
import { stringify } from 'querystring';
import { environment } from 'src/environments/environment';


export interface Head {
  fecha: string;
  pdf: string;
  pralCerrado: string;
  pralId: number;
}

export interface Information {
  clieId: number;
  email: string;
  nombres: string;
  pdf: string;
}

export interface Item {
  cargname: string;
  cm: string;
  farm: string;
  fincapropia: string;
  flower: string;
  hbqb: number;
  mark: string;
  pcomp: string;
  pvp: string;
  shippingdate: string;
  status: string;
  tallos: number;
  totaltallos: number;
}
export interface Client {
  info: Information;
  items: Array<Item>;
}

export interface Report {
  clients: Array<Client>;
  head: Head;
}


@Component({
  selector: 'app-documento',
  templateUrl: './documento.component.html',
  styleUrls: ['./documento.component.css'],
  providers: [MessageService, ConfirmationService, DialogService, TranslateService],
})
export class DocumentoComponent implements OnInit {

  documentos: Array<Document> = [];
  clientes: Array<client> = [];
  selectDocument: Document;
  numDocument: string;
  date: Date;
  filterMobile: Date;
  dialogVisible: boolean;
  selectClient: client;
  prealerts: Array<Report> = [];
  url: string;
  titledialog: string;
  row: number;
  dialogEmail: boolean;
  emailuser: string;
  newemailuser: string;
  status: boolean;
  selectclientprealert: Information;
  rol: string;

  constructor(private api: ApisService, private router: Router, public dialogService: DialogService,
    private messageService: MessageService, private spinner: NgxSpinnerService, private utilService: UtilService) { }

  ngOnInit(): void {
    this.status = false;
    this.rol = localStorage.getItem('rolactive');
    this.emailuser = "";
    this.date = new Date();
    this.numDocument = "";
    this.dialogEmail = false;
    this.filterMobile = new Date();
    this.getData();
  }

  async getData() {
    console.log('DATA...');
    this.utilService.isLoading.next(true);
    /*await this.api.getPrealertActive(localStorage.getItem("token")).then(data => {
      console.log(data);
      if (data.headerApp.code == 200) {
        this.prealerts = data.data.prealerts;
        console.log('Ejecutando...');
        console.log(this.prealerts);
      }
    }).catch(err => {
      if (err.error.code == 401) {
        localStorage.clear();
        this.router.navigate(['/login']);
      }
    })*/
    this.utilService.isLoading.next(false);

  }

  selectItem(information: Information) {
    this.url = 'https://addsoft-tech.com:8443/rmi/' + information.pdf;
    this.dialogVisible = true;
    this.titledialog = information.nombres;
  }

  sendEmail(information: Information) {
    this.emailuser = information.email;
    this.selectclientprealert = information;
    if (this.rol == 'ADM') {
      this.dialogEmail = true;
    } else {
      this.dialogEmail = false;
      this.ok();
    }

  }

  sendGeneral(head: Head, type: string) {
    /*this.emailuser=environment.email;
    this.selectclientprealert = {
      clieId: 1,
      email: environment.email,
      nombres: "Rosa Mística",
      pdf: head.pdf
    }
    if (type == 'ADM') {
      this.dialogEmail = true;
    } else {
      this.dialogEmail = false;
      this.ok();
    }*/

  }

  downlaodTotal(head: Head) {
    this.url = 'https://addsoft-tech.com:8443/rmi/' + head.pdf;
    this.dialogVisible = true;
    this.titledialog = 'Prealerta ID [' + head.pralId + ']'
  }


  view(document: Document) {
    console.log('Esta es la interface');
    console.log(document);
    this.selectDocument = document;
    this.dialogVisible = true;
  }

  selectRow(info: Information) {
    if (this.row == info.clieId) {
      this.row = null;
    } else {
      this.row = info.clieId
    }

  }


  async ok() {
    console.log('Confirmación del email');
    if (this.rol == 'ADM' && this.status && (this.newemailuser == '' || this.newemailuser == undefined)) {
      this.messageService.add({ severity: 'error', summary: 'Rosa Mística', detail: 'Debe agregar el nuevo email' });
      return;
    }

    let contentEmail = {
      tipoDocu: "PAL",
      clieId: this.selectclientprealert.clieId,
      nombres: this.selectclientprealert.nombres,
      email: this.status ? this.newemailuser : this.emailuser,
      secuencia: this.prealerts[0]?.head.pralId,
      docu: this.selectclientprealert.pdf,
      fechaDocu: this.getFormatDate(new Date())
    }
    console.log('Enviando los objetos');
    console.log(contentEmail);
    this.utilService.isLoading.next(true);
    /*await this.api.sendEmail(contentEmail, localStorage.getItem("token")).then(data => {
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
    })*/
    this.utilService.isLoading.next(false);
  }

  getFormatDate(date: Date): string {
    return (moment(date)).format('yyyy-MM-DD HH:mm:ss.SSS');
  }


}
