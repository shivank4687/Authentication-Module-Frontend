import { Component,Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule, NgClass } from '@angular/common';

export interface BreadcrumbItem {
  label: string; // Display text for the breadcrumb
  url?: string; // Optional URL for navigation
  icon?: string; // Optional icon (e.g., Material icon name)
}

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss',
  // animations: [
  //   trigger('fadeInOut', [
  //     transition(':enter', [
  //       style({ opacity: 0, transform: 'translateY(-10px)' }),
  //       animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
  //     ]),
  //     transition(':leave', [
  //       animate('300ms ease-in', style({ opacity: 0, transform: 'translateY(-10px)' })),
  //     ]),
  //   ]),
  // ],
})
export class BreadcrumbComponent {
  @Input() breadcrumbItems: BreadcrumbItem[] = []; // Input for breadcrumb items

  constructor(private router: Router) {}

  navigateTo(url: string | undefined) {
    if (url) {
      this.router.navigateByUrl(url); // Navigate to the specified URL
    }
  }

}
