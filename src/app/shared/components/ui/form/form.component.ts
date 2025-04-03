import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from '../input/input.component';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { buildForm } from './form-builder.util';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink, InputComponent, MatButtonModule, CommonModule],
  templateUrl: "./form.component.html",
})
export class FormComponent implements OnInit {
  form!: FormGroup;
  @Input() config:any;
  form_attributes:any=[];
  @Output() formSubmit = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {

    
  }
  ngOnInit(){
    this.form = this.fb.group(buildForm(this.config));
    this.form_attributes=Object.keys(this.config);
  }

  onSubmit() {
    if (this.form.valid) {
      this.formSubmit.emit(this.form.value);
    }
  }
}