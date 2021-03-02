import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ApisService } from 'src/services/apis.service';
import { Router } from '@angular/router';
import { flower } from 'src/models/flower';
import { UtilService } from 'src/services/util.service';
import { user } from 'src/models/user';
import * as moment from 'moment';


@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
    providers: [TranslateService]
})
export class DashboardComponent implements OnInit {

    products: number;
    users: number;
    user: user;
    state: boolean;

    constructor(private api: ApisService, private router: Router, private utilservice: UtilService) {
        this.utilservice.isLoading.subscribe(state => {
            this.state = state;
        })
    }

    ngAfterViewInit() {
        this.getServices();
    }

    async ngOnInit() {
        this.user = JSON.parse(localStorage.getItem('user'));
        this.products = 0;
        this.users = 0;

    }

    async getServices() {
        this.utilservice.isLoading.next(true);
        await this.api.products(localStorage.getItem("token")).then((data) => {
            if (data.code === "200") {
                data.data.forEach((data) => {
                    if (data.status == "A") {
                        this.products += 1;
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
        await this.api.users(localStorage.getItem("token")).then((data) => {
            if (data.code === "200") {
                data.data.forEach((data) => {
                    if (data.status == "1") {
                        this.users += 1;
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
        this.utilservice.isLoading.next(false);
    }

}
