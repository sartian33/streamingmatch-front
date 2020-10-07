import { Component, Input, OnInit } from '@angular/core';
import { registerElement } from '@nativescript/angular';
import { Store } from '@ngrx/store';
import { CardView } from '@nstudio/nativescript-cardview';
import { Media } from '../../model/media.model';

registerElement('CardView', () => CardView)

@Component({
    selector: 'app-media',
    moduleId: module.id,
    templateUrl: "./media.component.html",
    providers: []
})
export class MediaComponent implements OnInit {
    constructor(private store: Store<{ medias: [] }>) {}

    @Input() media: Media;

    ngOnInit() {}
}
