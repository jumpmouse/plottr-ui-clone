import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatButtonToggle, MatButtonToggleGroup } from '@angular/material/button-toggle';
import { MatButton } from '@angular/material/button';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { FlexExampleComponent } from '@sharedComponents/flex-example/flex-example.component';
import { TableExampleComponent } from '@sharedComponents/table-example/table-example.component';
import { Chapter } from '@models/chapter';
import { Plotline } from '@models/plotline';
import { AppActions, ChaptersActions, PlotlinesActions } from '@store/actions/app.actions';
import { selectAllChapters, selectAllPlotlines } from '@store/reducers/app.reducers';

@Component({
  selector: 'pltr-home',
  standalone: true,
  imports: [TableExampleComponent, FlexExampleComponent, MatButton, MatButtonToggle, MatButtonToggleGroup],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  exampleSelection: 'table' | 'flex' = 'table';
  plotlinesData$!: Observable<Plotline[]>;
  chaptersData$!: Observable<Chapter[]>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.plotlinesData$ = this.store.select(selectAllPlotlines);
    this.chaptersData$ = this.store.select(selectAllChapters);
    this.store.dispatch(AppActions.loadData());
  }

  addChapter(): void {
    this.store.dispatch(ChaptersActions.addChapter());
  }

  moveChapter(oldIndex: number, newIndex: number): void {
    this.store.dispatch(ChaptersActions.moveChapter({ oldIndex, newIndex }));
  }

  updateChapterName(chapterId: string, chapterName: string): void {
    this.store.dispatch(ChaptersActions.updateChapterName({ chapterId, chapterName }));
  }

  addPlotline(): void {
    this.store.dispatch(PlotlinesActions.addPlotline());
  }

  updatePlotlineName(plotlineId: string, plotlineName: string): void {
    this.store.dispatch(PlotlinesActions.updatePlotlineName({ plotlineId, plotlineName }));
  }

  addScene(plotlineId: string, chapterId: string, index: number): void {
    this.store.dispatch(PlotlinesActions.addScene({ plotlineId, chapterId, index }));
  }

  updateSceneDescription(plotlineId: string, chapterId: string, sceneId: string, description: string): void {
    this.store.dispatch(PlotlinesActions.updateSceneDescription({ plotlineId, chapterId, sceneId, description }));
  }
}
