import {
    LoaderState,
    LoaderActionTypes,
    SHOW_LOADER,
    HIDE_LOADER
} from './types';

const initialState: LoaderState = {
    isShown: false
};

export function loaderReducer(
    state = initialState,
    action: LoaderActionTypes
): LoaderState {
    switch (action.type) {
        case SHOW_LOADER:
            return {
                ...state,
                isShown: true
            };
        case HIDE_LOADER:
            return {
                ...state,
                isShown: false
            };
        default:
        return state
    }
}
