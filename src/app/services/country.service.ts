import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import * as Https from 'nativescript-https';

@Injectable(
        // Instead of providers array you can use provideIn
    // Learn more https://angular.io/guide/providers
     {
         providedIn: "root"
    }
)
export class CountryService {
//    private apiUrl = "https://10.0.2.2:8443/api/v1";
    private apiUrl = "http://10.0.2.2:8085/api/v1";

    constructor(private http: HttpClient) {}

    getCountries() {
        let headers = this.createRequestHeaders();
        return this.http.get(this.apiUrl + "/streaming/countries", { headers: headers }); /*
        return Https.request({url: this.apiUrl + "/streaming/countries", method: 'GET'}).then(function(response) {
            console.log("RESPONSE");
            console.log(response);
        }).catch(function(error) {
            console.error("ERROR");
            console.log(error);
        }) */
    }

    private createRequestHeaders() {
        let headers = new HttpHeaders({
            //"AuthKey":"mykey",
        });

        return headers;
    }
}
