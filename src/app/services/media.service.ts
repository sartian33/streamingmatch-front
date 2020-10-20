import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Media } from "../model/media.model";
import * as AppSettings from '@nativescript/core/application-settings';

    // https://www.telerik.com/blogs/building-an-online-store-using-ngrx-store-and-angular //
@Injectable(
    // Instead of providers array you can use provideIn
// Learn more https://angular.io/guide/providers
 {
     providedIn: "root"
}
)
export class MediaService {

    private apiUrl = "http://10.0.2.2:8085/api/v1";

    constructor(private http: HttpClient) {}

    private medias = new Array<Media>();

    /*
    loadMedias() {
        console.log("loadMEDIAS");
        let headers = this.createRequestHeaders();
//        return this.http.get(this.apiUrl + "/media/paginate", {headers: headers});
        this.http.get(this.apiUrl + "/media/paginate", { headers: headers}).subscribe((res: any) => {
            console.log(res.content);
            this.medias = res.content;
        });
        console.log(this.medias);
    } */

    getMedias(): Observable<any> {
        console.log("loadMEDIAS");
        let headers = this.createRequestHeaders();
        return this.http.get<Media[]>(this.apiUrl + "/media/paginate", {headers: headers});
    }

    private createRequestHeaders() {
        let headers = new HttpHeaders({
            //"AuthKey":"mykey",
        });
        return headers;
    }

    getMedia(id: number): Media {
        return this.medias.filter((media) => media.id === id)[0];
    }

    likeMedia(id: string) {
        let headers = this.createRequestHeaders();
        let userId = AppSettings.getString("userId");
        let dto = ({
            userId: userId,
            mediaId: id
        });
        return this.http.post(this.apiUrl + "/user/like", dto, {headers: headers});
    }

}
