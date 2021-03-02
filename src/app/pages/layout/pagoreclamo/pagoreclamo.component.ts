import { Component, OnInit } from '@angular/core';
import { ApisService } from 'src/services/apis.service';
import { client } from 'src/models/client';
import { Router } from '@angular/router';
import { MessageService, ConfirmationService } from 'primeng';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilService } from 'src/services/util.service';
import { TranslateService } from '@ngx-translate/core';
import { stringify } from 'querystring';
import * as moment from 'moment';
import { NgxSpinnerService } from 'ngx-spinner';

export interface Payment {
  tranId: string;
  entiId: number;
  fecha: string;
  numedocu: string;
  secuinvo: number;
  tipotran: string;
  monto: number;
  documento: string;
  descripcion: string;
}

export interface Factura {
  claveacceso: string;
  secuencial: string;
}

export interface Cliente {
  cliente: client,
  invoices: Array<Factura>
}

@Component({
  selector: 'app-pagoreclamo',
  templateUrl: './pagoreclamo.component.html',
  styleUrls: ['./pagoreclamo.component.css'],
  providers: [MessageService, ConfirmationService, TranslateService],
})
export class PagoreclamoComponent implements OnInit {

  clientes: Array<Cliente> = [];
  facturas: Array<Factura> = [];
  tipodocumentos: any[] = [];
  selectclient: client;
  selectfactura: Factura;
  client: Cliente;
  factura: Factura;
  files: File[] = [];
  formGroup: FormGroup;
  submit = false;
  documentBase64: string;

  constructor(private api: ApisService, private router: Router, private formBuilder: FormBuilder, private spinner: NgxSpinnerService,
    private messageService: MessageService, private utilservice: UtilService, private confirmationService: ConfirmationService) {
    this.formGroup = this.formBuilder.group({
      cliente: [null, Validators.required],
      tipodocumento: ['', Validators.required],
      numfactura: [null, Validators.required],
      valor: [null, [Validators.required]],
      fecha: [null, [Validators.required]],
      numdocumento: [null, Validators.required],
      descripcion: ['', Validators.required]
    });
  }



  ngOnInit(): void {
    this.selectclient = null;
    this.tipodocumentos = [
      { name: 'Claim', code: 'CL' },
      { name: 'Payment', code: 'PA' },
      { name: 'Debit', code: 'DB' },
    ]
    this.getClient();
  }

  onOptionsSelectedFactura() {
    this.selectfactura = this.formGroup.get('numfactura').value;
  }

  onOptionsSelected() {
    this.facturas = [];
    this.selectclient = this.formGroup.get('cliente').value.cliente;
    this.facturas = this.formGroup.get('cliente').value.invoices;
  }

  async getClient() {
    this.utilservice.isLoading.next(true);
    /*await this.api.getclients(localStorage.getItem("token")).then(cliente => {
      console.log(cliente);
      this.clientes = [];
      if (cliente.headerApp.code === 200) {
        cliente.data.clientes.forEach(cliente => {
          if (cliente.cliente.estado == 'A') {
            let clientTemp = {
              cliente: cliente.cliente,
              invoices: cliente.invoices
            }
            this.clientes.push(clientTemp);
          }
        });
      }

    }).catch(err => {
      console.log(err);
      if (err.error.code == 401) {
        localStorage.clear();
        this.router.navigate(['/login']);
      }
    })*/

    this.utilservice.isLoading.next(false);

  }

  onSelect(event) {
    this.files.push(...event.addedFiles);
    if (this.files.length > 1) {
      this.messageService.add({ severity: 'error', summary: 'Rosa Mística', detail: 'Solo puede subir un archivo.' });
      this.files = [];
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(this.files[0]);
    reader.onload = () => {
      this.documentBase64 = reader.result.toString();
    };
  }

  onRemove(event) {
    this.files.splice(this.files.indexOf(event), 1);
  }

  save() {
    console.log('Enviando');
    this.submit = true;
    if (this.formGroup.invalid) {
      this.messageService.add({ severity: 'error', summary: 'Rosa Mística', detail: 'Los campos son obligatorios' });
      return;
    }

    let payment: Payment = {
      tranId: "",
      entiId: this.selectclient.entiId,
      fecha: this.getFormatDate(new Date(this.formGroup.get('fecha').value)),
      numedocu: this.formGroup.get('numdocumento').value,
      secuinvo: this.formGroup.get('numfactura').value.secuencial,
      tipotran: this.formGroup.get('tipodocumento').value.code,
      monto: this.formGroup.get('valor').value,
      documento: this.files[0].name + ';' + this.documentBase64,
      descripcion: this.formGroup.get('descripcion').value
    }
    console.log(payment);

    this.confirmationService.confirm({
      message: "Are you sure to send the process?",
      accept: async () => {
        this.spinner.show();
        this.utilservice.isLoading.next(true);
        /*await this.api.registerPaymentClaim(payment, localStorage.getItem("token")).then(data => {
          console.log(data);
          this.spinner.hide();
          if (data.headerApp.code === 200) {
            this.submit = false;
            this.files = [];
            this.selectclient = null;
            this.selectfactura = null;  
            this.formGroup.reset();
            this.messageService.add({ severity: 'success', summary: 'Rosa Mística', detail: 'Proceso generado exisotsamente' });
          }

        }).catch(err => {
          console.log(err);
          if (err.error.code == 401) {
            localStorage.clear();
            this.router.navigate(['/login']);
          }
        })*/

        this.utilservice.isLoading.next(false);
      }
    });


  }

  getFormatDate(date: Date): string {
    return (moment(date)).format('yyyy-MM-DD HH:mm:ss.SSS');
  }


  get f() {
    return this.formGroup.controls;
  }

}
