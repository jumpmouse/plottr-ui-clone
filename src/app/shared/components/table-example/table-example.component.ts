import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatTableModule, MatTable } from '@angular/material/table';
import { MatIcon } from '@angular/material/icon';
import { Observable, Subscription } from 'rxjs';

import { TableExampleDataSource } from './table-example-datasource';
import {
  AddSceneParams,
  MoveChapterParams,
  UpdateChapterNameParams,
  UpdatePlotlineNameParams,
  UpdateSceneDescriptionParams,
} from '../../../core/types/app.type';
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
export class TableExampleComponent implements OnInit, OnDestroy {
  @Input() data$!: Observable<Plotline[]>;
  @Input() chapters$!: Observable<Chapter[]>;

  @Output() addChapterEvent = new EventEmitter<undefined>();
  @Output() moveChapterEvent = new EventEmitter<MoveChapterParams>();
  @Output() updateChapterNameEvent = new EventEmitter<UpdateChapterNameParams>();
  @Output() addPlotlineEvent = new EventEmitter<undefined>();
  @Output() updatePlotlineNameEvent = new EventEmitter<UpdatePlotlineNameParams>();
  @Output() addSceneEvent = new EventEmitter<AddSceneParams>();
  @Output() updateSceneDescriptionEvent = new EventEmitter<UpdateSceneDescriptionParams>();

  @ViewChild(MatTable) table!: MatTable<Plotline>;

  dataSource: TableExampleDataSource = new TableExampleDataSource();
  chapters: Chapter[] = [];
  displayedColumns: string[] = [];

  private subs: Subscription = new Subscription();

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    const chaptersSub = this.chapters$.subscribe((chapters: Chapter[]) => {
      this.chapters = chapters;
      this.displayedColumns = this.setDisplayedColumns(chapters);
      this.cd.markForCheck();
    });
    this.subs.add(chaptersSub);
    this.dataSource.connectExternalDataSource(this.data$);
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  addChapter() {
    this.addChapterEvent.emit();
  }

  moveChapter(id: string, oldIndex: number, newIndex: number) {
    this.moveChapterEvent.emit({ id, oldIndex, newIndex });
  }

  updateChapterName(id: string, name: string) {
    this.updateChapterNameEvent.emit({ id, name });
  }

  addPlotline() {
    this.addPlotlineEvent.emit();
  }

  updatePlotlineName(id: string, name: string) {
    this.updatePlotlineNameEvent.emit({ id, name });
  }

  addScene(plotlineId: string, chapterId: string, index: number) {
    this.addSceneEvent.emit({ plotlineId, chapterId, index });
  }

  updateSceneDescription(plotlineId: string, chapterId: string, sceneId: string, description: string) {
    this.updateSceneDescriptionEvent.emit({ plotlineId, chapterId, sceneId, description });
  }

  private setDisplayedColumns(chapters: Chapter[]): string[] {
    const displayedColumns: string[] = ['plotline-name'];
    chapters.forEach((chapter: Chapter) => displayedColumns.push(chapter.id));
    displayedColumns.push('add-chapter');
    return displayedColumns;
  }
}
