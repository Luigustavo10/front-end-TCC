import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Itens } from '../itens.model';
import { ItensRead2DataSource } from './itens-read2-datasource';

@Component({
  selector: 'app-itens-read2',
  templateUrl: './itens-read2.component.html',
  styleUrls: ['./itens-read2.component.css']
})
export class ItensRead2Component implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Itens>;
  dataSource: ItensRead2DataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'quantidade'];

  constructor() {
    this.dataSource = new ItensRead2DataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
