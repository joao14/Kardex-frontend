import { FacturaComponent } from './factura.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacturaRoutingModule } from './factura-routing.module';
import { InputTextModule, PanelModule, AccordionModule, InputTextareaModule, RadioButtonModule, ButtonModule, AutoCompleteModule, DropdownModule, TableModule, ToolbarModule, CardModule, SplitButtonModule, SelectButtonModule, ToastModule, ConfirmDialogModule, KeyFilter, KeyFilterModule, DialogModule, TooltipModule } from 'primeng';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    declarations: [FacturaComponent],
    imports: [
        CommonModule,
        FacturaRoutingModule,
        SharedModule,
        InputTextModule,
        PanelModule,
        AccordionModule,
        InputTextareaModule,
        RadioButtonModule,
        ButtonModule,
        FormsModule,
        AutoCompleteModule,
        DropdownModule,
        TableModule,
        ToolbarModule,
        CardModule,
        ReactiveFormsModule,
        SplitButtonModule,
        SelectButtonModule,
        ToastModule,
        ConfirmDialogModule,
        KeyFilterModule,
        DialogModule,
        NgxSpinnerModule,
        TranslateModule,
        TooltipModule
    ]   
}) 
export class FacturaModule { }
