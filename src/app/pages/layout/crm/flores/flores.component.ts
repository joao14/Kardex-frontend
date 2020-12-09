import { Component, OnInit } from '@angular/core';
import { ApisService } from 'src/services/apis.service';
import { Router } from '@angular/router';
import { SelectItem, MessageService } from 'primeng';
import { TranslateService } from '@ngx-translate/core';
import { flower } from 'src/models/flower';
import { environment} from 'src/environments/environment';
import { UtilService } from 'src/services/util.service';

export interface Flower {
  id: number;
  name: string;
  state: string;
  images: any[]
}

@Component({
  selector: 'app-flores',
  templateUrl: './flores.component.html',
  styleUrls: ['./flores.component.css'],
  providers: [TranslateService, MessageService],
})
export class FloresComponent implements OnInit {

  flowers: Flower[] = [];
  selecteFlowers: Flower[] = [];
  options: SelectItem[];
  selectoptions: any;
  selectFlor: Flower;
  dialogVisible: boolean;
  sortField: string;
  sortOrder: string;
  typerol: string;
  

  constructor(private apis: ApisService, private router: Router, private utilservice: UtilService) {
  }

  ngOnInit(): void {
    console.log('INICIALIZATE FLORES ');
    this.typerol = localStorage.getItem("rolactive");
    console.log(this.typerol);
    console.log('********');
    this.sortField = "";
    this.sortOrder = "";
    this.inicializate();
  }

  async inicializate() {
    this.options = [{ label: 'Todos', value: null }, { label: 'Activo', value: 'A' }, { label: 'Inactivo', value: 'I' }];
    this.dialogVisible = false;
    this.utilservice.isLoading.next(true);
    await this.apis.getflowers(localStorage.getItem("token")).then(data => {
      if (data.headerApp.code == 200) {
        let temp: Array<flower> = [];
        data.data.flowers.forEach(element => {
          let images_: any[] = [];
          element.recursos.forEach(recurso => {
            let images = {
              atributo: environment.url + recurso.atributo,
              descripcion: recurso.descripcion,
              reflId: recurso.reflId
            }
            images_.push(images);
          });

          let flower = {
            id: element.flor.florId,
            name: element.flor.nombre,
            state: element.flor.estado == 'A' ? 'Activo' : 'Inactivo',
            images: images_
          }
          temp.push(flower);
        });
        this.flowers = temp;
      }
      console.log('Finalizando los documentos');
      console.log('FLORES');
      console.log(this.flowers);

    }).catch(err => {
      console.log(err);
      if (err.error.code == 401) {
        localStorage.clear();
        this.router.navigate(['/login']);
      }

    })

    this.utilservice.isLoading.next(false);
    
  }

  onRepresentativeChange(event) {
    console.log('Se selecciono otro evento');
    console.log(event);
  }

  addFlor() {
    console.log('Editando el cliente');
    this.router.navigate(['/editFlower']);
  }

  edit(flower: Flower) {
    console.log('Editando...');
    this.router.navigate(['/editFlower'], { state: { flower: JSON.stringify(flower) } });

  }

  viewFlor(flower: Flower) {
    console.log('Esta es la flor');
    console.log(flower);
    this.selectFlor = flower;
    this.dialogVisible = true;
  }

}
