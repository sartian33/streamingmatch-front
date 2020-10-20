import { MediaActions, MediaActionTypes } from '../actions/media.actions';
import { initialState } from '../state/media.state';
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
        case MediaActionTypes.LikeMediaSuccess:
            return {
                ...state,
                pl: action.payload
            };
        case MediaActionTypes.RemoveFromMedias:
            return {
                ...state,
                medias: action.payload
            };
        default:
            return state;
    }
}
