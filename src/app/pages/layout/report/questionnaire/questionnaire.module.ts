import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionnaireComponent } from './questionnaire.component';
import { QuestionnaireRoutingModule } from './questionaire-routing.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { DropdownModule, ToastModule, TableModule } from 'primeng';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared.module';



@NgModule({
  declarations: [QuestionnaireComponent],
  imports: [
    CommonModule,
    QuestionnaireRoutingModule,
    NgxSpinnerModule,
    SharedModule,
    DropdownModule,
    FormsModule,
    ToastModule,
    TableModule,    
    ReactiveFormsModule
  ]
})
export class QuestionnaireModule { }
