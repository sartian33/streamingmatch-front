import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule, NativeScriptHttpClientModule, NativeScriptFormsModule } from "@nativescript/angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { HomeComponent } from "./components/home/home.component";
import { StoreModule } from "@ngrx/store";
import { MediaReducer } from './store/reducers/media.reducers';
import { EffectsModule } from "@ngrx/effects";
import { MediaEffects } from './store/effects/media.effects';
import { MediaComponent } from './components/media/media.component';
import { MediaListComponent } from './components/medialist/medialist.component';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptHttpClientModule,
        NativeScriptFormsModule,
        StoreModule.forRoot({ media: MediaReducer }),
        EffectsModule.forRoot([MediaEffects])
    ],
    declarations: [
        AppComponent,
        ItemsComponent,
        ItemDetailComponent,
        LoginComponent,
        RegisterComponent,
        HomeComponent,
        MediaListComponent,
        MediaComponent
    ],
    providers: [/*MediaService*/],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
