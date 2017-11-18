import { Component, OnInit } from "@angular/core";

import { Item } from "./item";
import { ItemService } from "./item.service";
import { CSGOHttpGetService } from "../services/csgo-http-service";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit {
    items: Item[];
    datos;
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(private itemService: ItemService, private csgoSrv:CSGOHttpGetService) { }

    ngOnInit(): void {
        this.items = this.itemService.getItems();
        this.csgoSrv.getDataByUser('id').subscribe(dataUser => {
            this.datos = dataUser.playerstats.stats;
            console.log('petición');
            console.dir(this.datos);
        }, error => {
            console.log(error);
        })
    }
}
export class statisticUser {
    name: string;
    value: string;
}