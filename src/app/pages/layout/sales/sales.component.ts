import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng';
import { Product } from 'src/models/product';
import { ApisService } from 'src/services/apis.service';
import { UtilService } from 'src/services/util.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css'],
  providers: [TranslateService, MessageService],
})
export class SalesComponent implements OnInit {

  products: Array<Product> = [];
  saleForm: FormGroup;
  submittedSale: boolean;

  constructor(private messageService: MessageService, private api: ApisService, private router: Router,
    private utilservice: UtilService, private formBuilder: FormBuilder) {
    this.saleForm = this.formBuilder.group({
      product: [null, Validators.required],
      stock: [null, Validators.required],
      identification: ['', Validators.required],
      name: [null, Validators.required],
      mail: [null, Validators.required],
      phone: [null, Validators.required],
      total: [null]
    });
  }

  ngOnInit(): void {
    this.submittedSale = false;
    this.getProducts();
  }

  async getProducts() {
    await this.api.products(localStorage.getItem("token")).then((data) => {
      if (data.code === "200") {
        this.products = [];
        data.data.forEach((data) => {
          if (data.status == "A" && data.stock > 0) {
            this.products.push(data);
          }
        })
      }
    }).catch(e => {
      console.log(e);
      if (e.status == 401) {
        localStorage.clear();
        this.router.navigate(['/login']);
      }

    })
  }

  async save() {    
    this.submittedSale = true;
    if (this.saleForm.invalid) {
      this.messageService.add({ severity: 'error', summary: 'KARDEX', detail: 'Los campos para generar la venta son obligatorios.' });
      return;
    }

    let sale = {
      indetification: this.saleForm.get('identification').value,
      name: this.saleForm.get('name').value,
      mail: this.saleForm.get('mail').value,
      phone: this.saleForm.get('phone').value,
      id: this.saleForm.get('product').value.id,
      stock: this.saleForm.get('stock').value,
    }   
    this.utilservice.isLoading.next(true);
    await this.api.sales(sale, localStorage.getItem('token')).then(async (data) => {      
      if (data.code === "200") {
        this.submittedSale = false;
        this.saleForm.reset();
        await this.getProducts();
        this.messageService.add({ severity: 'success', summary: 'Kardex', detail: 'Venta realizada correctamente' });
      } else {
        this.submittedSale = false;
        this.messageService.add({ severity: 'error', summary: 'Kardex', detail: 'No se puede generar la venta ya que la cantidad del producto solicitado es mayor a la que se encuentra en tienda. ' });
      }
    }).catch(e => {
      console.log(e);
      if (e.status == 401) {
        localStorage.clear();
        this.router.navigate(['/login']);
      }
    })
    this.utilservice.isLoading.next(false);

  }

  calculate(){    
    this.saleForm.get('total').setValue(this.saleForm.get('product').value.price * this.saleForm.get('stock').value);
  }

  get f() {
    return this.saleForm.controls;
  }

}
