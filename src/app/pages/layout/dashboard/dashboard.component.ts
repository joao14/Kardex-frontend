import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ApisService } from 'src/services/apis.service';
import { Router } from '@angular/router';
import { flower } from 'src/models/flower';
import { UtilService } from 'src/services/util.service';
import { user } from 'src/models/user';
import * as moment from 'moment';

export interface Languajes {
    name: string;
    code: string;
}

export interface Sales {
    datasets: Array<{
        backgroundColor: string;
        borderColor: string;
        label: string;
        data: number[]
    }>,
    labels: Array<String>
}

export class Graphics {
    //anual_month_sales: Sales;
    anual_sales: Sales;
    count_ent: {
        C: number;
        E: number;
        F: number;
        Z: number;
        FL: number;
    };
    count_inv: {
        FACTS_SUM_T: number;
        FACTS_T: number;
        DEBITO: number;
        CREDITO: number;
        PORC_DEBITO: number;
        POR_CREDITO: number;
    };
    count_pal: number;
    count_trx: {
        TRX_CNT_CL: number;
        TRX_CNT_DB: number;
        TRX_CNT_IN: number;
        TRX_CNT_PA: number;
        TRX_SUM_CL: number;
        TRX_SUM_DB: number;
        TRX_SUM_IN: number;
        TRX_SUM_PA: number;
    };
    day_week_month_sales: {
        labels: string[],
        datasets: Array<{ label: string; backgroundColor: string; borderColor: string; data: string }>
    }
    week_month_sales: {
        labels: string[],
        datasets: Array<{ label: string; backgroundColor: string; borderColor: string; data: string }>
    }
    number_transactions: {
        labels: string[];
        datasets: [
            {
                data: number[],
                backgroundColor: string[],
                hoverBackgroundColor: string[]
            }]
    };
    ammount_transactions: {
        labels: string[];
        datasets: [
            {
                data: number[],
                backgroundColor: string[],
                hoverBackgroundColor: string[]
            }]
    };
    anual_month_sales: {
        labels: string[];
        datasets: Array<
            {
                label: string;
                data: number[];
                fill: boolean;
                borderColor: string;
            }>
    };
    salesbyclient: Array<{
        name: string;
        values: number;
        porcentaje: number;
        estado: boolean;
    }>;

    sales_anual_year: {
        labels: string[],
        datasets: Array<{ label: string; backgroundColor: string; borderColor: string; data: string }>
    }
}

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
    providers: [TranslateService]
})
export class DashboardComponent implements OnInit {

    clientes: number;
    fincas: number;
    flores: number;
    deliveries: number;
    listaflores: Array<flower> = [];
    user: user;
    graphics: Graphics;
    state: boolean;
    actuallydate: Date;
    percentage: number;
    nameMonth: string;

    constructor(private api: ApisService, private router: Router, private utilservice: UtilService) {
        this.utilservice.isLoading.subscribe(state => {
            this.state = state;
        })
    }

    async ngOnInit() {        
        this.user = JSON.parse(localStorage.getItem('user'));        
    }

    async getInfo() {
        this.actuallydate = new Date();
        this.graphics = null;
    }

}
