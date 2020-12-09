import { Component, OnInit, ViewChild } from '@angular/core';
import { MessageService, ConfirmationService } from 'primeng';
import * as moment from 'moment';
import { UtilService } from 'src/services/util.service';
import { ApisService } from 'src/services/apis.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';

export interface user {
  dni: string;
  nombres: string;
  apellidos: string;
  fechregi: string;
  celular: string;
  photo: string;
  email: string; 
  nick: string;
  estado: string;
}
@Component({
  selector: 'app-automatic',
  templateUrl: './automatic.component.html',
  styleUrls: ['./automatic.component.css'],
  providers: [MessageService, ConfirmationService]
})
export class AutomaticComponent implements OnInit {

  users: Array<user> = [];
  files: any = [];
  @ViewChild('csvReader') csvReader: any;
  public records: any[] = [];

  constructor(private utilService: UtilService, private api: ApisService,
    private router: Router, private confirmationService: ConfirmationService, private spinner: NgxSpinnerService) { }

  ngOnInit() {

  }



  uploadListener($event: any): void {

    let text = [];
    let files = $event.srcElement.files;

    if (this.isValidCSVFile(files[0])) {
      this.files.push(files[0]);
      let input = $event.target;
      let reader = new FileReader();
      reader.readAsText(input.files[0]);
      this.utilService.isLoading.next(true);
      reader.onload = async () => {
        let csvData = reader.result;
        let csvRecordsArray = (<string>csvData).split(/\r\n|\n/);
        let headersRow = await this.getHeaderArray(csvRecordsArray);
        this.records = await this.getDataRecordsArrayFromCSVFile(csvRecordsArray, headersRow.length);
      };
      this.utilService.isLoading.next(false);
      reader.onerror = function () {
        console.log('error is occured while reading file!');
      };

    } else {
      alert("Please import valid .csv file.");
      this.fileReset();
    }
  }

  getDataRecordsArrayFromCSVFile(csvRecordsArray: any, headerLength: any) {
    let csvArr = [];
    for (let i = 1; i < csvRecordsArray.length; i++) {
      console.log(csvRecordsArray[i]);
      let data: any[] = (<string>csvRecordsArray[i]).split(';');
      let user = {
        dni: data[0],
        nombres: data[1],
        apellidos: data[2],
        fechregi: this.getFormatDate(new Date()),
        celular: data[3],
        photo: null,
        email: data[4],        
        nick: data[5],
        estado: "-"
      }

      this.users.push(user);
    }

    console.log('LISTA D EUSUARIOS');
    console.log(this.users);
    return csvArr;
  }

  isValidCSVFile(file: any) {
    return file.name.endsWith(".csv");
  }

  getHeaderArray(csvRecordsArr: any) {
    let headers = (<string>csvRecordsArr[0]).split(',');
    let headerArray = [];
    for (let j = 0; j < headers.length; j++) {
      console.log('DATA');
      console.log(headers[j]);

      headerArray.push(headers[j]);
    }
    return headerArray;
  }

  fileReset() {
    this.csvReader.nativeElement.value = "";
    this.records = [];
  }

  uploadfile() {
    console.log('Subiendo los archivos');
    console.log(this.users); 
    this.confirmationService.confirm({
      message: "Está seguro de enviar la información?",
      accept: async () => {
        this.spinner.show();
        this.api.registerusers(this.users, localStorage.getItem("token")).then(data => {
          console.log(data);
        }).catch(err => {
          console.log('ERROR');
          console.log(err);
          if (err.error.code == 401) {
            localStorage.clear();
            this.router.navigate(['/login']);
          }
        })
      },
    });

  }

  deleteAttachment(index) {
    this.files.splice(index, 1);
    this.users = [];
  }

  getFormatDate(date: Date): string {
    return (moment(date)).format('YYYY-MM-DD HH:mm:ss.SSS');
  }

}
