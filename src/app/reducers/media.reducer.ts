import { createReducer, on } from '@ngrx/store';
import { loadMedias } from '../actions/media.action';

export const initialState = 0;

const _mediaReducer = createReducer(
  initialState,
  on(loadMedias, (state) => state + 1)/*,
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0)*/
);

export function mediaReducer(state, action) {
  return _mediaReducer(state, action);
}
// https://ngrx.io/guide/store