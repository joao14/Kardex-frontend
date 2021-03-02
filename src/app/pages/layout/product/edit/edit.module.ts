import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditComponent } from './edit.component';
import { EditRoutingModule } from './edit-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BlockUIModule, ButtonModule, DropdownModule, FieldsetModule, InputSwitchModule, InputTextareaModule, InputTextModule, KeyFilterModule, PickListModule, SelectButtonModule, ToastModule, ToolbarModule, TooltipModule } from 'primeng';



@NgModule({
  declarations: [EditComponent],
  imports: [
    CommonModule,
    EditRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    InputSwitchModule,
    SelectButtonModule,
    DropdownModule,
    InputTextModule,
    InputTextareaModule,
    ButtonModule,
    ToolbarModule,
    ToastModule,
    BlockUIModule,
    FieldsetModule,
    PickListModule,
    KeyFilterModule,
    TooltipModule,
  ]
})
export class EditModule { }
