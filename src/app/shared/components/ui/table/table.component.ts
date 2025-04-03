import { Component, Input, TemplateRef, ViewChild, AfterViewInit, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

export interface ColumnDefinition {
  key: string; // Unique key for the column
  header: string; // Column header text
  cell?: (element: any) => string; // Function to format cell content
  template?: TemplateRef<any>; // Custom template for the cell
}

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements AfterViewInit,OnChanges {
  @Input() dataSource: any[] = []; // Table data
  @Input() columnDefinitions: ColumnDefinition[] = []; // Column definitions
  @Input() pageSizeOptions: number[] = [5, 10, 25]; // Pagination options
  @Input() pageSize: number = 5; // Default page size

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = []; // Columns to display
  dataSourceMatTable = new MatTableDataSource<any>([]); // Wrapped data source for sorting and pagination

  ngOnChanges() {
    
    this.displayedColumns = this.columnDefinitions.map((col) => col.key);
    this.dataSourceMatTable.data = this.dataSource; // Update table data
  }

  ngAfterViewInit() {
    this.dataSourceMatTable.paginator = this.paginator;
    this.dataSourceMatTable.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceMatTable.filter = filterValue.trim().toLowerCase();
  }
}