import { Component, OnInit } from "@angular/core";

import { Item } from "./item";
import { ItemService } from "./item.service";
import { CSGOHttpGetService } from "../services/csgo-http-service";
import {Observable} from 'rxjs/Rx';
import * as Dialogs from "ui/dialogs";
import * as LocalNotifications from "nativescript-local-notifications";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit {
    items: Item[];
    datos:statisticUser;
    userSatus;
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(private itemService: ItemService, private csgoSrv:CSGOHttpGetService) { }

    ngOnInit(): void {
        this.items = this.itemService.getItems();
        this.csgoSrv.getDataByUser('id').subscribe(dataUser => {
            this.datos = dataUser.playerstats.stats;
        }, error => {
            console.log(error);
        })
        Observable.interval(500 * 60).subscribe( x => {
            this.csgoSrv.getUserStatus('id').subscribe(dataUserStatus => {
                this.userSatus = dataUserStatus;
                this._sendNotification();
            }, error => {
                console.log(error);
            })
        })
       
        
    }

    private _sendNotification() {
        LocalNotifications.schedule([{
            id: 1,
            title: 'Usuario conectado a CSGO',
            body: 'El usuario acaba de inciar sesión en CSGO',
            badge: 1,
            ongoing: true, // makes the notification ongoing (Android only)
            smallIcon: 'res://csgo_notification',
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
export class statisticUser {
    name: string;
    value: string;
}