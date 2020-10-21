import { Component, OnInit } from '@angular/core';
import { delivery } from 'src/models/delivery';
import { ApisService } from 'src/services/apis.service';
import { MessageService } from 'primeng';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css'],
  providers: [TranslateService, MessageService],  
})
export class DeliveryComponent implements OnInit {

  deliveries: Array<delivery> = [];
  name: string;
  loading: boolean;

  constructor(private api: ApisService, private router: Router) { }

  ngOnInit(): void {
    this.getDelivery();
  }

  getDelivery(){
    this.loading=true;
    this.api.getdeliveries(localStorage.getItem("token")).then(data => {
      console.log(data);
      if (data.headerApp.code == 200) {
        this.deliveries = data.data.cargocompanies;
        this.loading=false;
      }
    }).catch(err => {
      console.log(err);
      this.loading=false;
      if (err.error.code == 401) {
        localStorage.clear();
        this.router.navigate(['/login']);
      }
    })
  }

  addDelivery() {
    console.log('Agregar la finca');
    this.router.navigate(['/editDelivery']);
  }

  edit(delivery: delivery){
    console.log('Editando delivery...');
    console.log(delivery);
    this.router.navigate(['/editDelivery'], { state: { delivery: JSON.stringify(delivery) } });
    
  }

  consultarMobile(){
    if (this.name == undefined || this.name == '') {
      this.deliveries = [];
      this.getDelivery();
      return;
    }

    this.deliveries.filter(delivery => {
      if (delivery.nombres.toLowerCase().indexOf(this.name.toLowerCase()) > -1) {
        this.deliveries = [];
        this.deliveries.push(delivery)
      } 
    });
    console.log('Deliveries finales');
    console.log(this.deliveries);
  }

}