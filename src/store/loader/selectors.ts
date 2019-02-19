import {AppState} from '..';

export const getIsLoaderShown = (state: AppState): boolean => state.loader.isShown;
