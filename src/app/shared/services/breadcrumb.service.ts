import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, map, startWith, tap } from 'rxjs/operators';
import { BreadcrumbItem } from '../components/ui/breadcrumb/breadcrumb.component';

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbService {
  breadcrumbItems: BreadcrumbItem[] = [];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  buildBreadcrumb(route: ActivatedRoute, url: string = '', breadcrumbItems: BreadcrumbItem[] = []): BreadcrumbItem[] {
    const children: ActivatedRoute[] = route.children;
    // console.log('route.children',route.children)

    if (children.length === 0) {
      return breadcrumbItems;
    }

    for (const child of children) {
      const routeURL: string = child.snapshot.url.map((segment) => segment.path).join('/');
      if (routeURL !== '') {
        url += `/${routeURL}`;
      }

      const label = child.snapshot.data['breadcrumb']||routeURL.toUpperCase(); // Get breadcrumb label from route data
      if (label) {
        breadcrumbItems.push({ label, url });
      }

      return this.buildBreadcrumb(child, url, breadcrumbItems);
    }

    return breadcrumbItems;
  }

  getBreadcrumbItems() {
    return this.router.events.pipe(
    // tap((e)=>{console.log(e)}),
      filter((event) => event instanceof NavigationEnd), // Listen to route changes
      startWith(null), // Trigger on initialization
    //   tap((e)=>{console.log(e)}),
      map(() => this.buildBreadcrumb(this.activatedRoute.root))) // Build breadcrumb
  }
}