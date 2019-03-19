import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent.component';
import { ReactiveFormsModule, FormsModule  } from '@angular/forms';
import { ChildModule } from '../child/child.module';

@NgModule({
  declarations: [ParentComponent],
  imports: [
    CommonModule,
    ChildModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[ParentComponent]
})
export class ParentModule { }
