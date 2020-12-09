import { FullCalendarModule } from 'primeng/fullcalendar';
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';
import { PanelModule } from 'primeng/panel';
import { DropdownModule } from 'primeng/dropdown';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { TranslateModule } from '@ngx-translate/core';
import { CarouselModule, ButtonModule, InputTextModule, ChartModule } from 'primeng';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';


@NgModule({
    imports: [
        CommonModule,
        DashboardRoutingModule,
        DropdownModule,
        TranslateModule,
        PanelModule,
        CheckboxModule,
        TableModule,
        FullCalendarModule,
        CarouselModule,
        ButtonModule,
        InputTextModule,
        ChartModule,
        NgxSkeletonLoaderModule
    ],
    declarations: [
        DashboardComponent
    ]
})
export class DashboardModule { }
