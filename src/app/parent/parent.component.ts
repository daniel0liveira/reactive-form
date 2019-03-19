import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

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

  ngOnInit() {
  }

}
