import { Component, OnDestroy, OnInit } from "@angular/core";
import { registerElement } from "@nativescript/angular";
import { Label, SwipeGestureEventData } from "@nativescript/core";
import { CardView } from "@nstudio/nativescript-cardview";
import { UserService } from "../../services/user.service";
import { Media } from "../../model/media.model";
import { MediaService } from "../../services/media.service";


registerElement('CardView', () => CardView)

@Component({
    moduleId: module.id,
    templateUrl: "./home.component.html",
    providers: [MediaService, UserService]
})
export class HomeComponent implements OnInit, OnDestroy { 
    medias: Array<Media>;
    likedMedias: Array<string>;
    // This pattern makes use of Angular’s dependency injection implementation to
    // inject an instance of the ItemService service into this class.
    // Angular knows about this service because it is included in your app’s main NgModule,
    // defined in app.module.ts.
    constructor(private mediaService: MediaService, private userService: UserService) { }

    ngOnInit(): void {
        /*
        this.mediaService.getMedias().subscribe((res: any) => {
            console.log(res.content);
            this.medias = res.content;
        });
        console.log(this.medias); */
        this.mediaService.loadMedias();
        this.medias = this.mediaService.getMedias();
        console.log(this.medias);
        this.likedMedias = new Array<string>();
    }

    ngOnDestroy(): void {
        console.log("NGONDESTROY");
        this.userService.updateLikes(this.likedMedias);
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
        console.log(this.medias);
    }
    
}
