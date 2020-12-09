import { BreadcrumbService } from '../../../../../services/breadcrumb.service';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BreadcrumbModule} from 'primeng/breadcrumb/breadcrumb'
import { BreadComponent } from './bread.component';


@NgModule({
    declarations: [BreadComponent],
    imports: [
        CommonModule,
        BreadcrumbModule
        
    ],
    providers: [BreadcrumbService]
})
export class BreadModule { }
