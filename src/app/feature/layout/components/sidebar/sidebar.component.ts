import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule, MatExpansionPanel } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MENU_ITEMS } from './sidebar.options';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule,RouterLink, MatSidenavModule,MatExpansionModule, MatListModule, MatToolbarModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit  {
  @Input() isOpen = false;
  menuItems=MENU_ITEMS;
  constructor(){}
  
  ngOnInit(): void {
    
  }
  closeSidebar() {
    this.isOpen = false;
  }
}


