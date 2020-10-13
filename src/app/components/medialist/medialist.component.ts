import { Component, OnDestroy, OnInit, Input } from "@angular/core";
import { registerElement } from "@nativescript/angular";
import { Label, SwipeGestureEventData } from "@nativescript/core";
import { CardView } from "@nstudio/nativescript-cardview";
import { UserService } from "../../services/user.service";
import { Media } from "../../model/media.model";
import { MediaService } from "../../services/media.service";
import { State, Store } from "@ngrx/store";
import { GetMedias, LikeMedia } from "../../store/actions/media.actions";
import { take } from 'rxjs/operators';

registerElement('CardView', () => CardView)

@Component({
    selector: 'app-media-list',
    moduleId: module.id,
    templateUrl: "./medialist.component.html",
    providers: [MediaService, UserService]
})
export class MediaListComponent implements OnInit, OnDestroy {
 //   @Input()
    medias: Media[] = [];
//    likedMedias: Array<string>;

//    constructor() { }
    constructor(private store: Store<{ media: any; likedMedias: []}>) {
        store/*.pipe(select('media'))*/.subscribe(data => {
            this.medias = data.media.medias.content;
        });
    }

    ngOnInit() {
        this.store.dispatch(new GetMedias());
    }
/*
    ngOnInit(): void {
        console.log("listOnInit");
        console.log(this.medias);
    }
*/
    ngOnDestroy(): void {
    }

    onSwipe(args: SwipeGestureEventData) {
        /* 1 = right
           2 = left
           Add to a list of liked medias
           when 10  || onDestroy => send list to backend

       console.log("Swipe!");
       console.log("Object that triggered the event: " + args.object);
       console.log("View that triggered the event: " + args.view);
       console.log("Event name: " + args.eventName);
       console.log("Swipe Direction: " + args.direction); */
       let id = args.object.get("id");
 //      console.log(args.object);
 //      console.log(id);
       if (args.direction === 1) {
           console.log("SWIPE RIGHT");
           this.store.dispatch(new LikeMedia(id));
       //     this.medias.splice(this.medias.findIndex(media => media.id === id), 1);
       //     this.likedMedias.push(id);
       //     console.log("Swipe Right");
            console.log()
        }
        else {
     //       this.medias.splice(this.medias.findIndex(media => media.id === id), 1);
            console.log("Swipe Left");
        }
//        console.log(this.medias);
  //      let test$ = this.store.select('media').subscribe(x => { console.log("SUBS"); console.log(x); });
  //      console.log("TEST$");
  //      console.log(test$);
        let state: State<any>;
        this.store.select('media').pipe(take(1)).subscribe(s => state = s);
        console.log("STATE");
    //    console.log(state.);
    }

}
