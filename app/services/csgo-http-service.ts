import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable as RxObservable } from "rxjs/Observable";

import "rxjs/add/operator/map";
import "rxjs/add/operator/do";

@Injectable()
export class CSGOHttpGetService {
    private serverUrl = "http://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002/?appid=730&key=6B7AF279CBF33E0D7AE254E9236FCF99";
    // http://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002/?appid=730&key=6B7AF279CBF33E0D7AE254E9236FCF99&steamid=76561198224522144
    constructor(private http: Http) { }

    getDataByUser(idUser) {
        idUser = "76561198224522144";
        console.log('>>>>>>');
        return this.http.get(`${this.serverUrl}&steamid=${idUser}`).map(res => res.json());
    }
    /*
    getData() {
        let headers = this.createRequestHeader();
        return this.http.get(this.serverUrl, { headers: headers })
            .map(res => res.json());
    }

    getResponseInfo() {
        let headers = this.createRequestHeader();
        return this.http.get(this.serverUrl, { headers: headers })
            .do(res => res);
    }

    private createRequestHeader() {
        let headers = new Headers();
        // set headers here e.g.
        headers.append("AuthKey", "my-key");
        headers.append("AuthToken", "my-token");
        headers.append("Content-Type", "application/json");

        return headers;
    }*/
}