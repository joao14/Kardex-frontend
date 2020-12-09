import { BreadcrumbService } from '../../../../../services/breadcrumb.service';
import { Subscription } from 'rxjs';
import { MenuItem } from 'primeng/primeng';
import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/services/util.service';

@Component({
    selector: 'app-bread',
    templateUrl: './bread.component.html',
    styleUrls: ['./bread.component.css']
})
export class BreadComponent implements OnInit {




    subscription: Subscription;

    items: MenuItem[];

    constructor(public utilService: UtilService) {

        this.utilService.itemsSource.subscribe(response => {
            this.items = response;
        })
    }

    ngOnInit(): void {
    }

    ngOnDestroy() {

    }

}
