import { Component, OnDestroy, OnInit, Input } from "@angular/core";
import { registerElement } from "@nativescript/angular";
import { Label, SwipeGestureEventData } from "@nativescript/core";
import { CardView } from "@nstudio/nativescript-cardview";
import { UserService } from "../../services/user.service";
import { Media } from "../../model/media.model";
import { MediaService } from "../../services/media.service";
import { Store } from "@ngrx/store";


registerElement('CardView', () => CardView)

@Component({
    selector: 'app-media-list',
    moduleId: module.id,
    templateUrl: "./medialist.component.html",
    providers: [MediaService, UserService]
})
export class MediaListComponent implements OnInit, OnDestroy {
    @Input()
    medias: Media[] = [];
//    likedMedias: Array<string>;

    constructor() { }

    ngOnInit(): void {
        console.log("listOnInit");
        console.log(this.medias);
        /*
        this.mediaService.getMedias().subscribe((res: any) => {
            console.log(res.content);
            this.medias = res.content;
        });
        console.log(this.medias); */
 //       this.mediaService.loadMedias();
 //       this.medias = this.mediaService.getMedias();
 //       console.log(this.medias);
   //     this.mediaService.getMedias();
   //     this.likedMedias = new Array<string>();
    }

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
       console.log("Swipe Direction: " + args.direction);
       let id = args.object.get("id");
       console.log(args.object);
       console.log(id);
       if (args.direction === 1) {
            this.medias.splice(this.medias.findIndex(media => media.id === id), 1);
            this.likedMedias.push(id);
            console.log("Swipe Right");
        }
        else {
            this.medias.splice(this.medias.findIndex(media => media.id === id), 1);
            console.log("Swipe Left");
        }
        console.log(this.medias); */
    }

}
