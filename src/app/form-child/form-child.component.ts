import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-form-child',
  templateUrl: './form-child.component.html',
  styleUrls: ['./form-child.component.css']
})
export class FormChildComponent implements OnInit {

  @Input() formGroupPai : FormGroup;
  
  constructor() { }

  ngOnInit() {
   
    
  }

}
