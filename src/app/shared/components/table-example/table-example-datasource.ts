import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';

// TODO: Replace this with your own data model type
export interface TableExampleItem {
  name: string;
  id: number;
}

// TODO: replace this with real data from your application
export const EXAMPLE_DATA: TableExampleItem[] = [
  { id: 1, name: 'Hydrogen' },
  { id: 2, name: 'Helium' },
  { id: 3, name: 'Lithium' },
  { id: 4, name: 'Beryllium' },
  { id: 5, name: 'Boron' },
  { id: 6, name: 'Carbon' },
  { id: 7, name: 'Nitrogen' },
  { id: 8, name: 'Oxygen' },
  { id: 9, name: 'Fluorine' },
  { id: 10, name: 'Neon' },
  { id: 11, name: 'Sodium' },
  { id: 12, name: 'Magnesium' },
  { id: 13, name: 'Aluminum' },
  { id: 14, name: 'Silicon' },
  { id: 15, name: 'Phosphorus' },
  { id: 16, name: 'Sulfur' },
  { id: 17, name: 'Chlorine' },
  { id: 18, name: 'Argon' },
  { id: 19, name: 'Potassium' },
  { id: 20, name: 'Calcium' },
];

/**
 * Data source for the TableExample view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class TableExampleDataSource extends DataSource<TableExampleItem> {
  data!: Observable<TableExampleItem[]>;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<TableExampleItem[]> {
    return this.data;
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  disconnect(): void {}
}
