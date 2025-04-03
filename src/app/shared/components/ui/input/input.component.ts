
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  standalone: true,
  selector: 'app-input',
  templateUrl:'./input.component.html',
  imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule, CommonModule],
  styles: [
    `
      mat-form-field {
        width: 100%;
      }
    `,
  ],
})
export class InputComponent {
  @Input() label: string = '';
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() control: (FormControl| any) = new FormControl();

  getErrorMessage(): string {
    if (this.control.hasError('required')) {
      return 'This field is required';
    }
    if (this.control.hasError('email')) {
      return 'Invalid email format';
    }
    return '';
  }
}
