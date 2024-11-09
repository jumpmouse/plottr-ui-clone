import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';

import { MOCK_CHAPTERS, MOCK_DATA } from '@constants/data';
import { AppActions } from '@store/actions/app.actions';

@Injectable()
export class AppEffects {
  loadPlotlines$ = createEffect((actions$ = inject(Actions)) => {
    return actions$.pipe(
      ofType(AppActions.loadData),
      exhaustMap(() =>
        of(MOCK_DATA).pipe(
          map(plotlines => ({ type: '[Home/Plotlines] Load Plotlines Success', plotlines })),
          catchError(() => of({ type: '[Home/Plotlines] Load Plotlines Error' }))
        )
      )
    );
  });

  loadChapters$ = createEffect((actions$ = inject(Actions)) => {
    return actions$.pipe(
      ofType(AppActions.loadData),
      exhaustMap(() =>
        of(MOCK_CHAPTERS).pipe(
          map(chapters => ({ type: '[Home/Chapters] Load Chapters Success', chapters })),
          catchError(() => of({ type: '[Home/Chapters] Load Chapters Error' }))
        )
      )
    );
  });
}
