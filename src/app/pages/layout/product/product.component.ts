import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { database } from 'faker';
import { MessageService } from 'primeng';
import { Product } from 'src/models/product';
import { UtilService } from 'src/services/util.service';
import { ApisService } from './../../../../services/apis.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [TranslateService, MessageService],
})
export class ProductComponent implements OnInit {

  products: Array<Product> = [];

  constructor(private api: ApisService, private router: Router, private messageService: MessageService, private utilservice: UtilService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    console.log('...Consultando los productos...');
    this.api.products(localStorage.getItem("token")).then((data) => {
      console.log(data);
      if (data.code == '200') {
        this.products = data.data;
      }
    }).catch((err) => {
      console.log(err);
    })
  }

  addProduct() {
    this.router.navigate(['/editproduct']);
  }

  edit(product: Product) {
    console.log('Editando');
    console.log(product);
    this.router.navigate(['/editproduct', { state: { product: JSON.stringify(product) } }]);
  }

  async remove(product: Product) {
    console.log('ELIMINANDO EL PRODUCT');
    await this.api.deleteproduct(product.id, localStorage.getItem('token')).then(async (data) => {
      console.log(data);
      if (data.code == '200') {
        await this.getProducts();
        this.messageService.add({ severity: 'success', summary: 'Kardex', detail: 'Producto eliminado correctamente' });
      } else {
        this.messageService.add({ severity: 'error', summary: 'Kardex', detail: 'Surgio un error intentelo más tarde' });
      }
    }).catch(err => {
      console.log(err);
      console.log('ERROR');
    })
  }

}
