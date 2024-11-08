import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatTableModule, MatTable } from '@angular/material/table';
import { EXAMPLE_DATA, TableExampleDataSource, TableExampleItem } from './table-example-datasource';
import { Observable, of, Subscription } from 'rxjs';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

@Component({
  selector: 'pltr-table-example',
  templateUrl: './table-example.component.html',
  styleUrl: './table-example.component.scss',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, MatSortModule],
})
export class TableExampleComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() data: Observable<TableExampleItem[]> = of(EXAMPLE_DATA);
  @Input() chapters: Observable<string[]> = of(['id', 'name']);

  @ViewChild(MatTable) table!: MatTable<TableExampleItem>;

  dataSource: TableExampleDataSource = new TableExampleDataSource();
  displayedColumns: string[] = [];

  private subs: Subscription = new Subscription();

  ngOnInit(): void {
    const chaptersSub = this.chapters.subscribe((chapters: string[]) => {
      this.displayedColumns = this.setDisplayedColumns(chapters);
    });
    this.subs.add(chaptersSub);
  }

  ngAfterViewInit(): void {
    this.dataSource.data = this.data;
    this.table.dataSource = this.dataSource;
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  private setDisplayedColumns(chapters: string[]): string[] {
    return chapters;
  }
}
