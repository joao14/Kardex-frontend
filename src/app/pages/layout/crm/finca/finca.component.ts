import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApisService } from 'src/services/apis.service';
import { finca } from 'src/models/finca';
import { TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng';
import { ShareReplayConfig } from 'rxjs/internal/operators/shareReplay';
import { UtilService } from 'src/services/util.service';

@Component({
  selector: 'app-finca',
  templateUrl: './finca.component.html',
  styleUrls: ['./finca.component.css'],
  providers: [TranslateService, MessageService],
})
export class FincaComponent implements OnInit {

  fincas: Array<finca> = [];
  name: string;

  constructor(private apis: ApisService, private router: Router, private utilservice: UtilService) { }

  ngOnInit(): void {
    this.name = "";
    this.inicializate();
  }

  inicializate() {
    this.getFinca();
  }

  getFinca() {
    this.utilservice.isLoading.next(true);
    this.apis.getfinca(localStorage.getItem("token")).then(data => {
      console.log(data);
      if (data.headerApp.code == 200) {
        let fincaTemp: finca[] = [];
        data.data.farms.forEach(element => {
          let finca = {
            apellidos: element.apellidos,
            auxcodi: element.auxcodi,
            ciudad: element.ciudad,
            contacto: element.contacto,
            direccion: element.direccion,
            email: element.email,
            entiDni: element.entiDni,
            entiId: element.entiId,
            estado: element.estado == 'A' ? 'Activo' : 'Inactivo',
            fechregi: element.fechregi,
            nombres: element.nombres,
            pais: element.pais,
            phone: element.phone,
            razosoci: element.razosoci,
            tipo: element.tipo,
            tipoenti: element.tipoenti
          }
          fincaTemp.push(finca);
        });
        this.fincas = fincaTemp;
        this.utilservice.isLoading.next(false);
        
        console.log('FINCAS..');
        console.log(this.fincas);


      }
    }).catch(err => {
      console.log(err);
      this.utilservice.isLoading.next(false);
      if (err.error.code == 401) {
        localStorage.clear();
        this.router.navigate(['/login']);
      }

    })
  }

  addFinca() {
    console.log('Agregar la finca');
    this.router.navigate(['/editFinca']);
  }

  edit(finca: finca) {
    console.log('Editando finca...');
    this.router.navigate(['/editFinca'], { state: { finca: JSON.stringify(finca) } });
  }

  consultarMobile() {
    if (this.name == undefined || this.name == '') {
      this.fincas = [];
      this.getFinca();
      return;
    }

    this.fincas.filter(finca => {
      if (finca.nombres.toLowerCase().indexOf(this.name.toLowerCase()) > -1) {
        this.fincas = [];
        this.fincas.push(finca)
      }
    });
    console.log('Fincas finales');
    console.log(this.fincas);
  }

}
