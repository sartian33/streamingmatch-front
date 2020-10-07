import { Action } from '@ngrx/store';
import { Media } from '../../model/media.model';

export enum MediaActionTypes {
    LoadMedias = '[Medias] Load medias',
    LoadSuccess = '[Medias] Load success',
    GetMedia = '[Medias] Get media'
}

export class LoadMedias implements Action {
    readonly type = MediaActionTypes.LoadSuccess;

    constructor(public payload: Media[]) {}
}

export class GetMedias implements Action {
    readonly type = MediaActionTypes.LoadMedias;
}

export class GetMedia implements Action {
    readonly type = MediaActionTypes.GetMedia;

    constructor(public payload: number) {}
}

export type MediaActions = GetMedias | GetMedia | LoadMedias;
