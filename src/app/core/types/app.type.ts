export interface MoveChapterParams {
  id: string;
  oldIndex: number;
  newIndex: number;
}

export interface UpdateChapterNameParams {
  id: string;
  name: string;
}

export type UpdatePlotlineNameParams = UpdateChapterNameParams;

export interface AddSceneParams {
  plotlineId: string;
  chapterId: string;
  index: number;
}

export interface UpdateSceneDescriptionParams {
  plotlineId: string;
  chapterId: string;
  sceneId: string;
  description: string;
}
