import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable as RxObservable } from "rxjs/Observable";

import "rxjs/add/operator/map";
import "rxjs/add/operator/do";

@Injectable()
export class CSGOHttpGetService {
    private _apiKey = '6B7AF279CBF33E0D7AE254E9236FCF99';
    private _apiKey2 = '9B2266D26FF1EEA14F77DFA355BF8FFB';
    private _appid = '730';
    private _serverUrl = "http://api.steampowered.com";
    constructor(private http: Http) { }

    getDataByUser(idUser) {
        idUser = "76561198224522144";
        const endPoint = '/ISteamUserStats/GetUserStatsForGame/v0002';
        return this.http.get(`${this._serverUrl}${endPoint}/?appid=${this._appid}&key=${this._apiKey}&steamid=${idUser}`).map(res => res.json());
    }
    getUserStatus(idUser) {
        // https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/?key=9B2266D26FF1EEA14F77DFA355BF8FFB&steamids=76561198224522144
        idUser = "76561198224522144";
        const endPoint = '/ISteamUser/GetPlayerSummaries/v2';
        //const url = "https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/?key=9B2266D26FF1EEA14F77DFA355BF8FFB&steamids=76561198224522144"
        return this.http.get(`${this._serverUrl}${endPoint}/?key=${this._apiKey2}&steamids=${idUser}`).map(res => res.json());
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