import { InputTextModule } from 'primeng/inputtext';
import { TranslateModule } from '@ngx-translate/core';
import { BreadcrumbService } from './../../../services/breadcrumb.service';
import { FullCalendarModule } from 'primeng/fullcalendar';
import { CheckboxModule } from 'primeng/checkbox';
import { PanelModule } from 'primeng/panel';
import { ToolbarModule } from 'primeng/toolbar';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { InputSwitchModule } from 'primeng/inputswitch';
import { TableModule } from 'primeng/table';
import { TopbarComponent } from './component/topbar/topbar.component';
import { PanelComponent } from './component/panel/panel.component';
import { MenuComponent } from './component/menu/menu.component';
import { FooterComponent } from './component/footer/footer.component';
import { AppMenuitemComponent } from './component/menu/app.menuitem.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccordionModule } from 'primeng/accordion';
import { DropdownModule } from 'primeng/dropdown';
import { MenuService } from './../../../services/app.menu.service';


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { MessageModule, AutoCompleteModule, CardModule, SplitButtonModule, SelectButtonModule, ConfirmDialogModule, CalendarModule, DynamicDialogModule, DialogModule, VirtualScrollerModule, CarouselModule, DataViewModule, FieldsetModule, ProgressBarModule, ChartModule, BreadcrumbModule } from 'primeng';
import { DragdropDirective } from 'src/app/directive/dragdrop.directive';

// in app.module.ts   
import { NgxDropzoneModule } from 'ngx-dropzone';
import { BreadComponent } from './component/bread/bread.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { AutomaticComponent } from './report/automatic/automatic.component';
import { QuestionnaireComponent } from './report/questionnaire/questionnaire.component';

@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        DropdownModule,
        AccordionModule,   
        FormsModule,
        RouterModule,
        TableModule,
        InputSwitchModule,
        ToastModule,
        MessagesModule,
        MessageModule,
        ToolbarModule,
        PanelModule,
        CheckboxModule,
        FullCalendarModule,
        CalendarModule,
        TranslateModule,
        InputTextModule,
        ReactiveFormsModule,
        AutoCompleteModule,
        CardModule,
        SplitButtonModule,
        SelectButtonModule,
        ConfirmDialogModule,
        DynamicDialogModule,
        DialogModule,
        VirtualScrollerModule,
        CarouselModule,
        DataViewModule,
        NgxDropzoneModule,
        FieldsetModule,
        ProgressBarModule,
        ChartModule,
        BreadcrumbModule,
        NgxSkeletonLoaderModule
        
    ],   
    declarations: [
        LayoutComponent,
        AppMenuitemComponent,
        FooterComponent,
        BreadComponent,
        MenuComponent,
        TopbarComponent,
        PanelComponent,
        DragdropDirective,
        
    ], providers: [
        MenuService,
        BreadcrumbService
    ]
})
export class LayoutModule { }
