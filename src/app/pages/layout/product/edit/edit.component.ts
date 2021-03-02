import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  options: any[]=[];

  constructor(private api: ApisService, private router: Router, private messageService: MessageService, private util: UtilService) {
    console.log('Iniciando???');
    console.log(this.router.getCurrentNavigation().extras.state);
    
    if (this.router.getCurrentNavigation().extras.state != null) {
      this.product_ = JSON.parse(this.router.getCurrentNavigation().extras.state.product);
      console.log('PRODUCTO');
      console.log(this.product_);      
      this.edit = true;
    } else {
      this.edit = false;
    }

    this.inicializateValores();
  }

  ngOnInit() {
    
  }

  inicializateValores() {
    this.product = {
        id: this.product != null ? this.product['id'] : "",
        name: this.product_ != null ? this.product_['name'] : "",
        stock: this.product_ != null ? this.product_['stock']: "",
        price: this.product_ != null ? this.product_['price'] : "",
        status: this.product_ != null ? this.product_['status'] == 'Activo' ? "1" : "0" : "1",
    };

    this.options = [{ label: 'Activo', value: 'A' }, { label: 'Inactivo', value: 'I' }];
}


  saveproduct() {
    let product={
      name: this.product.name,
      stock: this.product.stock,
      price: this.product.price,  
      status: this.product.status,
    }
    console.log('DATA ADD PRODUCT');
    this.api.addproduct(product, localStorage.getItem('token')).then(data=>{
      console.log(data); 
      if(data.code=='200'){
        this.router.navigate(['/product']);
        this.messageService.add({ severity: 'error', summary: 'Kardex', detail: 'Producto agregado correctamente' });
      }        
    }).catch(err=>{
      console.log(err);
      console.log('ERROR');
    })
  }

  modificarproduct() {

  }

  cancelar() {
    this.router.navigate(['/product']);
  }

}
