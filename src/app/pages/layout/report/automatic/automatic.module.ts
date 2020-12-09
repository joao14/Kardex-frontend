import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutomaticRoutingModule } from './automatic-routing.module';
import { AutomaticComponent } from './automatic.component';
import { ToastModule, TableModule, ButtonModule, DialogModule, ConfirmDialogModule } from 'primeng';
import { SharedModule } from 'src/app/shared.module';
import { NgxSpinnerModule } from 'ngx-spinner';



@NgModule({
  declarations: [AutomaticComponent],
  imports: [
    CommonModule,
    AutomaticRoutingModule,
    ToastModule,
    SharedModule,
    NgxSpinnerModule,   
    TableModule,
    ButtonModule,
    DialogModule,
    ConfirmDialogModule
  ]
})  
export class AutomaticModule { }
