import { Chapter } from '@models/chapter';
import { Plotline } from '@models/plotline';
import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const PlotlinesActions = createActionGroup({
  source: 'Plotlines',
  events: {
    'Load Plotlines': emptyProps(),
    'Load Plotlines Success': props<{ plotlines: Plotline[] }>(),
    'Add Plotline': emptyProps(),
    'Update Plotline Name': props<{ plotlineId: string; plotlineName: string }>(),
    'Delete Plotline': props<{ plotlineId: string }>(),
    'Add Scene': props<{ plotlineId: string; chapterId: string; index: number }>(),
    'Update Scene Description': props<{
      plotlineId: string;
      chapterId: string;
      sceneId: string;
      description: string;
    }>(),
  },
});

export const ChaptersActions = createActionGroup({
  source: 'Chapters',
  events: {
    'Load Chapters': emptyProps(),
    'Load Chapters Success': props<{ chapters: Chapter[] }>(),
    'Add Chapter': emptyProps(),
    'Move Chapter': props<{ chapterId: string; oldIndex: number; newIndex: number }>(),
    'Update Chapter Name': props<{ chapterId: string; chapterName: string }>(),
  },
});
