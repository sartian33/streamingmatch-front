import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { MediaService } from '../../services/media.service';
import { LikeMediaSuccess, MediaActionTypes } from '../actions/media.actions';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

@Injectable()
export class MediaEffects {
    constructor(private actions$: Actions<any>, private mediaService: MediaService) {}

    @Effect()
    loadMedias$ = this.actions$.pipe(
        ofType(MediaActionTypes.LoadMedias),
        mergeMap(() =>
            this.mediaService.getMedias().pipe(map(medias => { return { type: MediaActionTypes.LoadSuccess, payload: medias};
        }),
        catchError(() => EMPTY)
        )
        )
    );

    @Effect()
    likeMedia$ = this.actions$.pipe(
        ofType(MediaActionTypes.LikeMedia),
        switchMap(action => { return this.mediaService.likeMedia(action.payload).pipe(map(payload => new LikeMediaSuccess(payload)))
        }), catchError((e) => { console.log("ERROR"); console.log(e); console.log("===================="); return EMPTY;}))

}
