import { Component, OnInit } from '@angular/core';
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

  constructor(private api: ApisService, private router: Router, private utilservice: UtilService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  async getProducts() {
    console.log('PRODUCTOS');
    await this.api.products(localStorage.getItem("token")).then((data) => {
      console.log(data);
      if (data.code === "200") {
        this.products = [];
        data.data.forEach((data) => {
          if (data.status == "A") {
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

}
