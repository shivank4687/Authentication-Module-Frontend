import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [MatButtonModule, NgClass], // Import Angular Material modules
  template: `
    <button
      mat-raised-button
      [ngClass]="buttonClass"
      [color]="color"
      [disabled]="disabled"
    >
      <ng-content></ng-content>
    </button>
  `,
  styles: [
    `
      button {
        margin: 4px;
      }
    `,
  ],
})
export class ButtonComponent {
  @Input() color: 'primary' | 'accent' | 'warn' = 'primary';
  @Input() disabled: boolean = false;
  @Input() buttonClass: string = '';
}