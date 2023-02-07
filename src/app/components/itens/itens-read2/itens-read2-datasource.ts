import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { Itens } from '../itens.model';


const EXAMPLE_DATA: Itens[] = [
  {id: 1, name: 'Hydrogen', quantidade: 10},
  {id: 2, name: 'Helium', quantidade: 10},
  {id: 3, name: 'Lithium', quantidade: 10},
  {id: 4, name: 'Beryllium', quantidade: 10},
  {id: 5, name: 'Boron', quantidade: 10},
  {id: 6, name: 'Carbon', quantidade: 10},
  {id: 7, name: 'Nitrogen', quantidade: 10},
  {id: 8, name: 'Oxygen', quantidade: 10},
  {id: 9, name: 'Fluorine', quantidade: 10},
  {id: 10, name: 'Neon', quantidade: 10},
  {id: 11, name: 'Sodium', quantidade: 10},
  {id: 12, name: 'Magnesium', quantidade: 10},
  {id: 13, name: 'Aluminum', quantidade: 10},
  {id: 14, name: 'Silicon', quantidade: 10},
  {id: 15, name: 'Phosphorus', quantidade: 10},
  {id: 16, name: 'Sulfur', quantidade: 10},
  {id: 17, name: 'Chlorine', quantidade: 10},
  {id: 18, name: 'Argon', quantidade: 10},
  {id: 19, name: 'Potassium', quantidade: 10},
  {id: 20, name: 'Calcium', quantidade: 10},
];

/**
 * Data source for the ItensRead2 view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class ItensRead2DataSource extends DataSource<Itens> {
  data: Itens[] = EXAMPLE_DATA;
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<Itens[]> {
    if (this.paginator && this.sort) {
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      return merge(observableOf(this.data), this.paginator.page, this.sort.sortChange)
        .pipe(map(() => {
          return this.getPagedData(this.getSortedData([...this.data ]));
        }));
    } else {
      throw Error('Please set the paginator and sort on the data source before connecting.');
    }
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: Itens[]): Itens[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: Itens[]): Itens[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'id': return compare(+a.id!, +b.id!, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
