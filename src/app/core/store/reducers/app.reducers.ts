import { moveItemInArray } from '@angular/cdk/drag-drop';
import { ActionReducerMap, createReducer, on } from '@ngrx/store';

import { Chapter } from '@models/chapter';
import { Plotline } from '@models/plotline';
import { ChaptersActions, PlotlinesActions } from '@store/actions/app.actions';

export interface State {
  plotlines: Plotline[];
  chapters: Chapter[];
}

// PLOTLINES REDUCER
const plotlinesReducer = createReducer(
  [],
  on(PlotlinesActions.loadPlotlinesSuccess, (state, { plotlines }) => plotlines),

  on(PlotlinesActions.addPlotline, state => {
    const index = state.length;
    const name = `Plotline ${index}`;
    const id = uuidv4();
    return [...state, { id, name }];
  }),

  on(PlotlinesActions.updatePlotlineName, (state, { plotlineId, plotlineName }) => {
    return state.map(plotline => (plotline.id === plotlineId ? { ...plotline, name: plotlineName } : plotline));
  }),

  on(PlotlinesActions.addScene, (state, { plotlineId, chapterId, index }) => {
    const plotline = state.find(plotline => plotline.id === plotlineId);
    if (!plotline || !plotline.scenes[chapterId]) return state;

    const newPlotline = { ...plotline };
    const chapterScenes = [...newPlotline.scenes[chapterId]];
    newPlotline.scenes[chapterId] = chapterScenes
      .slice(0, index)
      .concat([{ id: uuidv4(), description: '' }])
      .concat(chapterScenes.slice(index));

    return state.map(p => (p.id === plotlineId ? newPlotline : p));
  }),

  on(PlotlinesActions.updateSceneDescription, (state, { plotlineId, chapterId, sceneId, description }) => {
    const plotline = state.find(plotline => plotline.id === plotlineId);
    if (!plotline || !plotline.scenes[chapterId]) return state;

    const scene = plotline.scenes[chapterId].find(scene => scene.id === sceneId);
    if (!scene) return state;

    scene.description = description;
    const newPlotline = { ...plotline };
    newPlotline.scenes[chapterId] = plotline.scenes[chapterId].map(s => (s.id === sceneId ? scene : s));
    return state.map(p => (p.id === plotlineId ? newPlotline : p));
  })
);

// CHAPTERS REDUCER
const chaptersReducer = createReducer(
  [],
  on(ChaptersActions.loadChaptersSuccess, (state, { chapters }) => chapters),

  on(ChaptersActions.addChapter, state => {
    const index = state.length;
    const chapterName = `Chapter ${index}`;
    const newChapter = { id: uuidv4(), name: chapterName };
    return [...state, newChapter];
  }),

  on(ChaptersActions.moveChapter, (state, { oldIndex, newIndex }) => {
    const chapters = [...state];
    moveItemInArray(chapters, oldIndex, newIndex);
    return chapters;
  }),

  on(ChaptersActions.updateChapterName, (state, { chapterId, chapterName }) => {
    return state.map(chapter => (chapter.id === chapterId ? { ...chapter, name: chapterName } : chapter));
  })
);

export const reducers: ActionReducerMap<State> = {
  plotlines: plotlinesReducer,
  chapters: chaptersReducer,
};

const uuidv4 = () => {
  return '10000000-1000-4000-8000-100000000000'.replace(/[018]/g, c =>
    (+c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (+c / 4)))).toString(16)
  );
};
