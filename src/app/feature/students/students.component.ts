
import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit, signal, TemplateRef, ViewChild } from '@angular/core';
import { TableComponent } from 'src/app/shared/components/ui';
import { LinkButtonComponent } from 'src/app/shared/components/ui/link-button/link-button.component';
@Component({
  selector: 'app-students',
  standalone: true,
  imports: [CommonModule, TableComponent,LinkButtonComponent],
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss'
})
export class StudentsComponent implements AfterViewInit,OnInit {
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

  edit(element: any) {
    console.log('Edit:', element);
  }

  delete(element: any) {
    console.log('Delete:', element);
  }
}
