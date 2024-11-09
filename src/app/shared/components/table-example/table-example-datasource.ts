import { DataSource } from '@angular/cdk/collections';
import { Plotline } from '@models/plotline';
import { Observable, ReplaySubject } from 'rxjs';

/**
 * Data source for the TableExample view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class TableExampleDataSource extends DataSource<Plotline> {
  data: ReplaySubject<Plotline[]> = new ReplaySubject<Plotline[]>(1);

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<Plotline[]> {
    return this.data.asObservable();
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  disconnect(): void {}

  updateData(updatedData: Plotline[]): void {
    this.data.next(updatedData);
  }
}
