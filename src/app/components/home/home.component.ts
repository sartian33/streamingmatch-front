import { Component, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { GetMedias } from '../../store/actions/media.actions';
import { Media } from "../../model/media.model";


@Component({
    moduleId: module.id,
    templateUrl: "./home.component.html",
    providers: [/*MediaService, UserService*/]
})
export class HomeComponent implements OnInit {
    constructor(private store: Store<{ media: any; liked: []}>) {
        store/*.pipe(select('media'))*/.subscribe(data => {
            console.log(data.media.medias.content);
            console.log("subscribe");
            this.medias = data.media.medias.content;
            console.log(this.medias);
        });
    }

    medias: Media[] = [];

    ngOnInit() {
        this.store.dispatch(new GetMedias());
    }
}
