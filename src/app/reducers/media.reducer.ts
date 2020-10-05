import { createReducer, on } from '@ngrx/store';
import { loadMedias } from '../actions/media.action';
import { Media } from '../model/media.model';

export const initialState = new Array<Media>();

const _mediaReducer = createReducer(
  initialState,
  on(loadMedias, (state) => state.push())/*,
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0)*/
);

export function mediaReducer(state, action) {
  return _mediaReducer(state, action);
}
// https://ngrx.io/guide/store
// https://levelup.gitconnected.com/angular-ngrx-a-clean-and-clear-introduction-4ed61c89c1fc