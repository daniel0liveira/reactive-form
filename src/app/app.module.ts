import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChildModule } from './child/child.module';
import { FormChildComponent } from './child/form-child/form-child.component';
import { ParentModule } from './parent/parent.module';


@NgModule({
  declarations: [
    AppComponent,    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    ParentModule,  
    ChildModule     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
