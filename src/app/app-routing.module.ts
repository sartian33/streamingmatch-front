import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { MediaListComponent } from "./components/medialist/medialist.component";
import { HomeComponent } from "./components/home/home.component";
import { MediaComponent } from "./components/media/media.component";

const routes: Routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "login", component: LoginComponent },
    { path: "register", component: RegisterComponent},
    { path: "items", component: MediaListComponent },
    { path: "media/:id", component: MediaComponent },
    { path: "home", component: HomeComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule],
    schemas: []
})
export class AppRoutingModule { }
