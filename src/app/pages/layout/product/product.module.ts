import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { AccordionModule, BlockUIModule, ButtonModule, DropdownModule, InputSwitchModule, InputTextareaModule, InputTextModule, KeyFilterModule, MessageModule, MessagesModule, SelectButtonModule, TableModule, ToastModule, ToolbarModule } from 'primeng';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    TableModule,
    InputSwitchModule,
    TranslateModule,
    ToastModule,
    MessagesModule,
    MessageModule,
    ToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    SelectButtonModule,
    InputTextModule,
    InputTextareaModule,
    ButtonModule,
    DropdownModule,
    BlockUIModule,
    AccordionModule,   
    KeyFilterModule   
  ]
})
export class ProductModule { }
