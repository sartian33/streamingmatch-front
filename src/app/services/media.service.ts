import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Media } from "../model/media.model";

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

    loadMedias() {
        console.log("getMEDIAS");
        let headers = this.createRequestHeaders();
//        return this.http.get(this.apiUrl + "/media/paginate", {headers: headers});
        this.http.get(this.apiUrl + "/media/paginate", { headers: headers}).subscribe((res: any) => {
            console.log(res.content);
            this.medias = res.content;
        });
        console.log(this.medias);
    }

    getMedias() {
        return this.medias;
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
}