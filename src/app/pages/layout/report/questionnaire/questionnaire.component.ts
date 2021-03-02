import { Component, OnInit } from '@angular/core';
import { ApisService } from 'src/services/apis.service';
import { UtilService } from 'src/services/util.service';
import { MessageService } from 'primeng';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

export interface questionnarie {
  id: string;
  nombre: string;
  fecha: string;
}

export interface user {
  dni: string;
  nombres: string;
  apellidos: string;
  celular: string;
  email: string;
  calificacion: string;
  estado: string;
}

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css'],
  providers: [MessageService]
})
export class QuestionnaireComponent implements OnInit {

  questionnaries: Array<questionnarie> = [];
  selectquestionnarie: questionnarie;
  users: Array<user> = [];

  constructor(private api: ApisService, private util: UtilService, private router: Router, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.selectquestionnarie = null;
    this.getQuestionnaires();
  }

  async getQuestionnaires() {
    this.util.isLoading.next(true);
    /*await this.api.getQuestionnariesActive(localStorage.getItem("token")).then(data => {
      console.log(data);
      if (data.headerApp.code == 200) {
        let questionnaries: questionnarie[] = [];
        data.data.tests.forEach(element => {
          questionnaries.push({
            id: element.testId,
            nombre: element.nombre,
            fecha: element.fechregi
          })
        });
        console.log(questionnaries);
        this.questionnaries = questionnaries;
      }
    }).catch(err => {
      console.log(err);
      if (err.error.code == 401) {
        localStorage.clear();
        this.router.navigate(['/login']);
      }
    })*/
    this.util.isLoading.next(false);
  }

  onOptionsSelected() {    
    this.users = [];
    this.spinner.show();
    /*this.api.getQUsersByQuestionnaries(this.selectquestionnarie.id, localStorage.getItem("token")).then(data => {
      console.log(data);
      if (data.headerApp.code == 200) {
        let temp: user[] = [];
        data.data.inscritos.forEach(element => {
          temp.push({
            dni: element.person.dni,
            nombres: element.person.nombres,
            apellidos: element.person.apellidos,
            celular: element.person.celular,
            email: element.person.email,
            calificacion: element.calificacion,
            estado: element.estado
          })
        });
        this.users = temp;
      }
    }).catch(err => {
      if (err.error.code == 401) {
        localStorage.clear();
        this.router.navigate(['/login']);
      }
    })*/
    this.spinner.hide();
  }

}
