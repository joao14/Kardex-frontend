import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng';
import { Product } from 'src/models/product';
import { ApisService } from 'src/services/apis.service';
import { UtilService } from 'src/services/util.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [MessageService]
})
export class EditComponent implements OnInit {

  product: Product;
  product_: Product;
  edit: boolean;
  options: any[] = [];

  constructor(private api: ApisService, private router: Router, private route: ActivatedRoute, private messageService: MessageService, private util: UtilService) {
    this.route.queryParams.subscribe(params => {      
      if (params.product) {
        this.product_ = JSON.parse(params.product)       
        this.edit = true;
      } else {
        this.edit = false;
      }

    });
    this.inicializateValores();
  }

  ngOnInit() {

  }

  inicializateValores() {
    this.product = {
      id: this.product_ != null ? this.product_['id'] : "",
      name: this.product_ != null ? this.product_['name'] : "",
      stock: this.product_ != null ? this.product_['stock'] : "",
      price: this.product_ != null ? this.product_['price'] : "",
      status: this.product_ != null ? this.product_['status'] == 'A' ? "A" : "I" : "A",
    };
    
    this.options = [{ label: 'Activo', value: 'A' }, { label: 'Inactivo', value: 'I' }];
  }


  saveproduct() {
    let product = {
      name: this.product.name,
      stock: this.product.stock,
      price: this.product.price,
      status: this.product.status,
    }

    this.api.addproduct(product, localStorage.getItem('token')).then(data => {
      console.log(data);
      if (data.code == '200') {
        this.router.navigate(['/product']);
        this.messageService.add({ severity: 'success', summary: 'Kardex', detail: 'Producto agregado correctamente' });
      }
    }).catch(err => {
      console.log(err);
      if (err.status == 401) {
        localStorage.clear();
        this.router.navigate(['/login']);
      }
    })
  }

  modificarproduct() {
    let product = {
      id: this.product.id,
      name: this.product.name,
      stock: this.product.stock,
      price: this.product.price,
      status: this.product.status,
    }

    this.api.updateproduct(product, localStorage.getItem('token')).then(data => {
      console.log(data);
      if (data.code == '200') {
        this.router.navigate(['/product']);
        this.messageService.add({ severity: 'success', summary: 'Kardex', detail: 'Producto actualizado correctamente' });
      }
    }).catch(err => {
      console.log(err);
      if (err.status == 401) {
        localStorage.clear();
        this.router.navigate(['/login']);
      }
    })
  }

  cancelar() {
    this.router.navigate(['/product']);
  }

}
