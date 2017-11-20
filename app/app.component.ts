import { CSGOHttpGetService } from './services/csgo-http-service';
import { Component, OnInit } from "@angular/core";
import {Observable} from 'rxjs/Rx';
import * as LocalNotifications from "nativescript-local-notifications";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})

export class AppComponent implements OnInit {
    userStatus;
    avisado = false;
    constructor(private csgoSrv:CSGOHttpGetService) {}
    ngOnInit() {
        Observable.interval(500 * 60).subscribe( x => {
            this.csgoSrv.getUserStatus('76561198224522144').subscribe(dataUserStatus => {
                this.userStatus = dataUserStatus;
                console.log('Barrido');
                // this._sendNotification();
                // console.dir(this.userStatus);
                if (!this.avisado && this.userStatus[0]['gameid'] && this.userStatus[0]['gameid'] === '730') {
                    console.log('notifica');
                    this._sendNotification('Usuario conectado a CSGO');
                    this.avisado = true;
                }else {
                    if(this.avisado && (!this.userStatus[0]['gameid'] || (this.userStatus[0]['gameid'] && this.userStatus[0]['gameid'] !== '730' ))) {
                        console.log('NO NOTIFICA');
                        this.avisado = false;
                        this._sendNotification('Usuario desconectado de CSGO');
                    }
                   
                }
            }, error => {
                console.log(error);
            })
        })
    }
    private _sendNotification(mensaje: string) {
        LocalNotifications.schedule([{
            id: 1,
            title: 'CSGO Emergya',
            body: mensaje,
            badge: 1,
            smallIcon: 'res://heart',
            sound: "customsound-ios.wav", // falls back to the default sound on Android
          }]).then(
              function() {
                console.log("Notification scheduled");
              },
              function(error) {
                console.log("scheduling error: " + error);
              }
          )

    }
 }
