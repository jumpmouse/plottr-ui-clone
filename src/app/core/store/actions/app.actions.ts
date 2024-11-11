import { Chapter } from '@models/chapter';
import { Plotline } from '@models/plotline';
import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const AppActions = createActionGroup({
  source: 'Home',
  events: {
    'Load Data': emptyProps(),
  },
});

export const PlotlinesActions = createActionGroup({
  source: 'Home/Plotlines',
  events: {
    'Load Plotlines Success': props<{ plotlines: Plotline[] }>(),
    'Load Plotlines Error': props<{ error: unknown }>(),
    'Add Plotline': emptyProps(),
    'Update Plotline Name': props<{ plotlineId: string; plotlineName: string }>(),
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
  source: 'Home/Chapters',
  events: {
    'Load Chapters Success': props<{ chapters: Chapter[] }>(),
    'Load Chapters Error': props<{ error: unknown }>(),
    'Add Chapter': emptyProps(),
    'Move Chapter': props<{ oldIndex: number; newIndex: number }>(),
    'Update Chapter Name': props<{ chapterId: string; chapterName: string }>(),
  },
});
