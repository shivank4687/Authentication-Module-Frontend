import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-link-button',
  standalone: true,
  imports: [MatButtonModule, RouterModule, CommonModule,MatIcon],
  template: `
    <a
      mat-raised-button
      [color]="color"
      [routerLink]="routerLink"
      [disabled]="disabled"
      [target]="target"
      [class]="[position]"
    >
    <mat-icon *ngIf="icon">{{ icon }}</mat-icon>
      <ng-content></ng-content>
    </a>
  `,
  styles: [
    `
      a {
        text-decoration: none; /* Remove underline */
        margin: 4px;
      }
      a.right{
        float:right
      }
    `,
  ],
})
export class LinkButtonComponent {
  @Input() color: 'primary' | 'accent' | 'warn' = 'primary'; // Button color
  @Input() routerLink: string | any[] = ''; // Route to navigate to
  @Input() disabled: boolean = false; // Disable the button
  @Input() target: string = '_self'; // Link target (e.g., '_blank' for new tab)
  @Input() icon?: string; // add icon
  @Input() position?:'left'|'right';

}