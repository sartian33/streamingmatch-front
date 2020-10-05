import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Media } from "../model/media.model";
import { MediaService } from "../services/media.service";

@Component({
    selector: "ns-details",
    templateUrl: "./item-detail.component.html",
})
export class ItemDetailComponent implements OnInit {
    media: Media;

    constructor(
        private mediaService: MediaService,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        const id = +this.route.snapshot.params.id;
        this.media = this.mediaService.getMedia(id);
    }
}
