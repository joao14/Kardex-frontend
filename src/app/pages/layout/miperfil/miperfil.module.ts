import { ToolbarModule } from 'primeng/toolbar';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MiperfilRoutingModule } from './miperfil-routing.module';
import { MiperfilComponent } from './miperfil.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordModule, ToastModule } from 'primeng';



@NgModule({
  declarations: [MiperfilComponent],
  imports: [
    CommonModule,
    MiperfilRoutingModule,
    InputTextModule,
    ButtonModule,
    ReactiveFormsModule,
    ToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    PasswordModule,
    ToastModule
  ]
})
export class MiperfilModule { }
