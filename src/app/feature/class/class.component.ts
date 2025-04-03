import { CommonModule } from '@angular/common';
import { AfterViewChecked, AfterViewInit, Component, OnInit, signal, TemplateRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TableComponent } from 'src/app/shared/components/ui';
import { LinkButtonComponent } from 'src/app/shared/components/ui/link-button/link-button.component';
// import {  TableComponent } from "../../shared/components/ui/table.component";

interface ColumnDefinition{

}
@Component({
  selector: 'app-class',
  standalone: true,
  imports: [CommonModule, TableComponent,LinkButtonComponent],
  templateUrl: './class.component.html',
  styleUrl: './class.component.scss'
})
export class ClassComponent implements OnInit,AfterViewInit,AfterViewChecked{
  @ViewChild('actionsTemplate', { static: true }) actionsTemplate!: TemplateRef<any>;
  classes = signal<any[]>([]);
  // columns: any[] = [
  //   { key: 'name', header: 'Name' },
  //   { key: 'age', header: 'Age', cell: (element) => `${element.age} years` },
  //   { key: 'actions', header: 'Actions', template: this.actionsTemplate },
  // ];
  data = [
    { name: 'John Doe', age: 30, email: 'john@example.com' },
    { name: 'Jane Smith', age: 25, email: 'jane@example.com' },
    { name: 'Sam Green', age: 35, email: 'sam@example.com' },
  ];

  columns:any = [];
  ngOnInit(){
    this.columns=[
      { key: 'name', header: 'Name' },
      { key: 'age', header: 'Age', cell: (element:any) => `${element.age} years` },
      { key: 'email', header: 'Email' },
      { key: 'actions', header: 'Actions', template: this.actionsTemplate },
    ];
  }

  ngAfterViewInit(){
    
  }
  ngAfterViewChecked(){
    
  }

  edit(element: any) {
    console.log('Edit:', element);
  }

  delete(element: any) {
    console.log('Delete:', element);
  }

}
