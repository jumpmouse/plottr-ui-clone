import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatButtonToggle, MatButtonToggleGroup } from '@angular/material/button-toggle';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { FlexExampleComponent } from '@sharedComponents/flex-example/flex-example.component';
import { TableExampleComponent } from '@sharedComponents/table-example/table-example.component';
import { Chapter } from '@models/chapter';
import { Plotline } from '@models/plotline';
import { AppActions } from '@store/actions/app.actions';
import { selectAllChapters, selectAllPlotlines } from '@store/reducers/app.reducers';

@Component({
  selector: 'pltr-home',
  standalone: true,
  imports: [TableExampleComponent, FlexExampleComponent, MatButtonToggle, MatButtonToggleGroup],
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
}
