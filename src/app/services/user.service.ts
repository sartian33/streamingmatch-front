import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import * as Https from 'nativescript-https';
import { User } from "../model/user.model";

@Injectable()
export class UserService {
    private apiUrl = "http://10.0.2.2:8085/api/v1";

    constructor(private http: HttpClient) {}

    register(data: any) {
        let user = {
            email: data.email,
            password: data.password,
            defaultCountry: data.defaultCountry,
            name: data.name
        };
        let options = this.createRequestHeaders();
        return this.http.post(this.apiUrl + "/user/register", user, {headers: options}).subscribe(
            (response) => console.log(response),
            (error) => console.error(error));
    }

    public async login(user: User): Promise<any> {
        let options = this.createRequestHeaders();
        console.log("USER");
        console.log(user);
        await new Promise<any>((resolve, reject) => {
            console.log("InPROMISE");
            resolve(this.http.post(this.apiUrl + "/user/login", user, {headers: options}));
        });

        return true;

/*
        return this.http.post(this.apiUrl + "/user/login", data, {headers: options}).subscribe(
            (response) => console.log(response),
            (error) => console.error(error)
        ); */
    }


    private createRequestHeaders() {
        let headers = new HttpHeaders({
            "Content-Type": "application/json"
        });
        return headers;
    }
}
