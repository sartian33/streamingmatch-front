import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { MediaService } from '../../services/media.service';
import { MediaActionTypes } from '../actions/media.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

@Injectable()
export class MediaEffects {
    constructor(private actions$: Actions, private mediaService: MediaService) {}

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
}
