import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { fadeAnimation } from 'src/app/shared/animations/route-animations';
import { BreadcrumbComponent, BreadcrumbItem } from 'src/app/shared/components/ui/breadcrumb/breadcrumb.component';
import { BreadcrumbService } from 'src/app/shared/services/breadcrumb.service';
import { MaterialModule } from '../../shared/modules/material.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet,MaterialModule,HeaderComponent,FooterComponent,SidebarComponent,BreadcrumbComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  animations:[fadeAnimation]
})
export class LayoutComponent implements OnInit {
  isSidebarOpen =true; //window.innerWidth > 768;
  sidebarMode: 'side' | 'over' = 'side'; // Default mode
  sidebar={mode:this.sidebarMode,fixed:true,disableClose:false}
   breadcrumbItems: BreadcrumbItem[] =[];
   
  // [ { label: 'Home', url: '/', icon: 'home' },
  //   { label: 'Products', url: '/products', icon: 'category' },
  //   { label: 'Product Details', icon: 'info' }, // Last item (no URL)
  // ];

  constructor(private breadcrumbService: BreadcrumbService){
    
  }
  ngOnInit(): void {
    
    this.breadcrumbService.getBreadcrumbItems().subscribe((items) => {
      this.breadcrumbItems = items.length==1?[]:items;

      // Add dynamic breadcrumb items based on route parameters
      // const categoryId = this.getCategoryIdFromRoute(); // Replace with your logic
      // if (categoryId) {
      //   this.breadcrumbItems.push({
      //     label: `Category ${categoryId}`,
      //     url: `/products/category/${categoryId}`,
      //   });
      // }
    });
  }
  toggleSidebar() {
    console.log(this.isSidebarOpen)
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  // @HostListener('window:resize', ['$event'])
  // onResize() {
  //   this.isSidebarOpen = window.innerWidth > 768;
  // }

}
