import { AfterViewInit, ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatTableModule, MatTable } from '@angular/material/table';
import { MatIcon } from '@angular/material/icon';
import { Observable, of, Subscription } from 'rxjs';

import { TableExampleDataSource } from './table-example-datasource';
import { MOCK_CHAPTERS, MOCK_DATA } from '@constants/data';
import { Plotline } from '@models/plotline';
import { Chapter } from '@models/chapter';

@Component({
  selector: 'pltr-table-example',
  templateUrl: './table-example.component.html',
  styleUrl: './table-example.component.scss',
  standalone: true,
  imports: [MatTableModule, MatIcon],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableExampleComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() data$: Observable<Plotline[]> = of(MOCK_DATA);
  @Input() chapters$: Observable<Chapter[]> = of(MOCK_CHAPTERS);

  @ViewChild(MatTable) table!: MatTable<Plotline>;

  dataSource: TableExampleDataSource = new TableExampleDataSource();
  chapters: Chapter[] = [];
  displayedColumns: string[] = [];

  private subs: Subscription = new Subscription();

  ngOnInit(): void {
    const chaptersSub = this.chapters$.subscribe((chapters: Chapter[]) => {
      this.chapters = chapters;
      this.displayedColumns = this.setDisplayedColumns(chapters);
    });
    this.subs.add(chaptersSub);
  }

  ngAfterViewInit(): void {
    const dataSub = this.data$.subscribe((data: Plotline[]) => {
      this.dataSource.updateData(data);
    });
    this.subs.add(dataSub);
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  private setDisplayedColumns(chapters: Chapter[]): string[] {
    const displayedColumns: string[] = ['name'];
    chapters.forEach((chapter: Chapter) => displayedColumns.push(chapter.id));
    displayedColumns.push('add-chapter');
    return displayedColumns;
  }
}
