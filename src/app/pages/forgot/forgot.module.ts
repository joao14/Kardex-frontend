import { ForgotComponent } from './forgot.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ForgotRoutingModule } from './forgot-routing.module';
import { ButtonModule, ProgressSpinnerModule, ToolbarModule, InputTextModule, ProgressBarModule, KeyFilterModule } from 'primeng';


@NgModule({
  declarations: [ForgotComponent],
  imports: [
    CommonModule,
    ToastModule,
    MessagesModule,
    MessageModule,
    ReactiveFormsModule,
    ForgotRoutingModule,
    ReactiveFormsModule,
    ToastModule,
    MessagesModule,
    MessageModule,
    ProgressSpinnerModule,
    ToolbarModule,
    InputTextModule,
    ButtonModule,
    ProgressBarModule,
    KeyFilterModule
  ]
})
export class ForgotModule { }
