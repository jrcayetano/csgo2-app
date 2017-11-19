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
    // http://steamcommunity.com/groups/Valve/memberslistxml?xml=1
    getDataByUser(idUser: string) {
        idUser = "76561198224522144";
        const endPoint = '/ISteamUserStats/GetUserStatsForGame/v0002';
        return this.http.get(`${this._serverUrl}${endPoint}/?appid=${this._appid}&key=${this._apiKey}&steamid=${idUser}`).map(res => res.json().playerstats.stats);
    }
    getUserStatus(idUser: string) {
        // https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/?key=9B2266D26FF1EEA14F77DFA355BF8FFB&steamids=76561198224522144
        //idUser = "76561198224522144";
        const endPoint = '/ISteamUser/GetPlayerSummaries/v2';
        //const url = "https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/?key=9B2266D26FF1EEA14F77DFA355BF8FFB&steamids=76561198224522144"
        return this.http.get(`${this._serverUrl}${endPoint}/?key=${this._apiKey2}&steamids=${idUser}`).map(res => res.json().response.players);
    }

    getMemberList(groupName: string) {
        const headerDict = {
            'Content-Type': 'text/xml',
            'Accept': 'application/xml'
          }
         
          const headerObj = {                                                                                                                                                                                
            headers: new Headers(headerDict),
          };
        // http://steamcommunity.com/groups/Valve/memberslistxml?xml=1
        groupName = "3E-Gaming"
        return this.http.get(`http://steamcommunity.com/groups/${groupName}/memberslistxml?xml=1`, headerObj);
    }
 

}