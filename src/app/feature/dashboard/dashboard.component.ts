import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from 'src/app/shared/components/ui';
import { CardComponent } from 'src/app/shared/components/ui/card/card.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CardComponent,ButtonComponent,CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  cardItems:any=[
    {title:'Total Students',value:0},
    {title:'Total Employees',value:0},
    {title:'Total Revenue',value:0},
    {title:'Total Profit',value:0},
  ]

}
