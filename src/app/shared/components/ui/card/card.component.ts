/**
 * A reusable button component.
 * @Input color - The color of the button (primary, accent, warn).
 * @Input disabled - Whether the button is disabled.
 * @Input buttonClass - Additional CSS classes for the button.
 */


import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, NgClass],
  template: `
    <mat-card [ngClass]="cardClass">
      <mat-card-header>
        <div class=centered-title>
          <mat-card-title>{{ title }}</mat-card-title>
        </div>
      </mat-card-header>
      <mat-card-content>
        <ng-content></ng-content>
      </mat-card-content>
      <!-- <mat-card-actions>
        <ng-content select="[actions]"></ng-content>
      </mat-card-actions> -->
    </mat-card>
  `,
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() title: string = '';
  @Input() cardClass: string = '';
}