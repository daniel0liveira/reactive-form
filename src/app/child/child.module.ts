import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormChildComponent } from './form-child/form-child.component';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FormChildComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[FormChildComponent]
})
export class ChildModule { }
