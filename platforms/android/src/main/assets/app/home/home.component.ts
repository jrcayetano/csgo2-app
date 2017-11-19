
import { Component, OnInit } from "@angular/core";
import { CSGOHttpGetService } from "../services/csgo-http-service";

@Component({
    selector: "ns-home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
})
export class HomeComponent implements OnInit {
    statistics;
    datos;
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(private csgoSrv:CSGOHttpGetService) { }

    ngOnInit(): void {
        this.csgoSrv.getDataByUser('id').subscribe(dataUser => {
            this.datos = dataUser;
           // console.dir(this.datos);
        }, error => {
            console.log(error);
        })
        this.statistics = [
            { type:"Poison", count: 59 }, { type:"Grass", count: 84 }, { type: "Fire",count: 56 },
            { type: "Flying", count: 90 }, { type:"Water", count: 118 },{ type: "Bug", count: 66 },
            { type: "Normal", count: 97 }, { type: "Electric", count: 42 }, { type: "Ground", count: 60 },
            { type: "Fairy", count: 35 }, { type:"Fighting", count: 44 }, { type: "Psychic", count: 74 },
            { type: "Rock", count: 55 }, { type:"Steel", count: 41 }, { type: "Ice", count: 33 },
            { type: "Ghost", count: 35 }, { type: "Dragon", count: 38}, { type:"Dark", count: 44 }
        ]
    }
}