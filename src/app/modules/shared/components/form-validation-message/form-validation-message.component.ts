import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-validation-message',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-validation-message.component.html',
  styleUrl: './form-validation-message.component.scss'
})
export class FormValidationMessageComponent {

  @Input() control!: ( AbstractControl | null ); 
}
