import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrealertaRoutingModule } from './prealerta-routing.module';
import { PrealertaComponent } from './prealerta.component';
import { InputTextModule, PanelModule, AccordionModule, InputTextareaModule, RadioButtonModule, ButtonModule, AutoCompleteModule, DropdownModule, TableModule, ToolbarModule, CardModule, SplitButtonModule, SelectButtonModule, ToastModule, ConfirmDialogModule, KeyFilterModule, CalendarModule, FieldsetModule, CheckboxModule, DialogModule, TooltipModule } from 'primeng';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from "ngx-spinner";
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from 'src/app/shared.module';



@NgModule({
  declarations: [PrealertaComponent],
  imports: [
    CommonModule,
    PrealertaRoutingModule,
    SharedModule,
    InputTextModule,
    TranslateModule,
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
    SplitButtonModule,
    SelectButtonModule,
    ToastModule,
    ConfirmDialogModule,
    ReactiveFormsModule,
    KeyFilterModule,
    CalendarModule,
    FieldsetModule,
    CheckboxModule,
    NgxSpinnerModule,
    DialogModule,
    TranslateModule,
    TooltipModule
  ]
})
export class PrealertaModule { }
 