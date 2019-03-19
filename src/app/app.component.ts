import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private fb: FormBuilder){

  }

  profileForm = this.fb.group({
    firstName: ['',Validators.required],
    lastName: ['',Validators.required],
    address: this.fb.group({
      street: ['',Validators.required],
      city: [''],
      state: [''],
      zip: ['']
    }),
  });

}
