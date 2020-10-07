import { MediaActions, MediaActionTypes } from '../actions/media.actions';

export const initialState = {
    medias: [],
    likedMedias: []
};

export function MediaReducer(state = initialState, action: MediaActions) {
    switch (action.type) {
        case MediaActionTypes.LoadSuccess:
            return {
                ...state,
                medias: action.payload
            };
        case MediaActionTypes.GetMedia:
            return {
                ...state,
                selectedMedia: action.payload
            };
        default:
            return state;
    }
}
