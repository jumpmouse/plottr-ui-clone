import { moveItemInArray } from '@angular/cdk/drag-drop';
import { ActionReducerMap, createReducer, on } from '@ngrx/store';

import { Chapter } from '@models/chapter';
import { Plotline } from '@models/plotline';
import { ChaptersActions, PlotlinesActions } from '@store/actions/app.actions';

export interface AppState {
  plotlines: Plotline[];
  chapters: Chapter[];
}

// SELECTORS
export const selectAllPlotlines = (state: AppState) => state.plotlines;
export const selectAllChapters = (state: AppState) => state.chapters;

// PLOTLINES REDUCER
const plotlinesReducer = createReducer(
  [],
  on(PlotlinesActions.loadPlotlinesSuccess, (state, { plotlines }): Plotline[] => plotlines),

  on(PlotlinesActions.addPlotline, (state): Plotline[] => {
    const index = state.length;
    const name = `Plotline ${index + 1}`;
    const id = uuidv4();
    return [...state, { id, name, scenes: {} }];
  }),

  on(PlotlinesActions.updatePlotlineName, (state, { plotlineId, plotlineName }): Plotline[] => {
    return state.map(plotline => (plotline.id === plotlineId ? { ...plotline, name: plotlineName } : plotline));
  }),

  on(PlotlinesActions.addScene, (state, { plotlineId, chapterId, index }): Plotline[] => {
    const plotline = state.find(plotline => plotline.id === plotlineId);
    if (!plotline || !plotline.scenes[chapterId]) return state;

    const newPlotline = { ...plotline, scenes: { ...plotline.scenes } };
    const chapterScenes = [...newPlotline.scenes[chapterId]];
    newPlotline.scenes[chapterId] = chapterScenes
      .slice(0, index)
      .concat([{ id: uuidv4(), description: 'test' }])
      .concat(chapterScenes.slice(index));

    return state.map(p => (p.id === plotlineId ? newPlotline : p));
  }),

  on(PlotlinesActions.updateSceneDescription, (state, { plotlineId, chapterId, sceneId, description }): Plotline[] => {
    const plotline = state.find(plotline => plotline.id === plotlineId);
    if (!plotline || !plotline.scenes[chapterId]) return state;

    const scene = plotline.scenes[chapterId].find(scene => scene.id === sceneId);
    if (!scene) return state;

    const newScene = { ...scene, description };
    const newPlotline = { ...plotline, scenes: { ...plotline.scenes } };
    newPlotline.scenes[chapterId] = plotline.scenes[chapterId].map(s => (s.id === sceneId ? newScene : s));
    return state.map(p => (p.id === plotlineId ? newPlotline : p));
  })
);

// CHAPTERS REDUCER
const chaptersReducer = createReducer(
  [],
  on(ChaptersActions.loadChaptersSuccess, (state, { chapters }): Chapter[] => chapters),

  on(ChaptersActions.addChapter, (state): Chapter[] => {
    const index = state.length;
    const chapterName = `Chapter ${index + 1}`;
    const newChapter = { id: uuidv4(), name: chapterName };
    return [...state, newChapter];
  }),

  on(ChaptersActions.moveChapter, (state, { oldIndex, newIndex }): Chapter[] => {
    const chapters = [...state];
    moveItemInArray(chapters, oldIndex, newIndex);
    return chapters;
  }),

  on(ChaptersActions.updateChapterName, (state, { chapterId, chapterName }): Chapter[] => {
    return state.map(chapter => (chapter.id === chapterId ? { ...chapter, name: chapterName } : chapter));
  })
);

export const reducers: ActionReducerMap<AppState> = {
  plotlines: plotlinesReducer,
  chapters: chaptersReducer,
};

// UTIL
const uuidv4 = () => {
  return '10000000-1000-4000-8000-100000000000'.replace(/[018]/g, c =>
    (+c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (+c / 4)))).toString(16)
  );
};
