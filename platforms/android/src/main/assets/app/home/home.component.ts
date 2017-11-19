
import { Component, OnInit } from "@angular/core";
import { CSGOHttpGetService } from "../services/csgo-http-service";
import * as Xml2js from 'nativescript-xml2js';
import 'rxjs/add/observable/forkJoin'
import { Observable } from "rxjs/Observable";
import { ListViewLinearLayout, ListViewEventData, RadListView, ListViewLoadOnDemandMode } from "nativescript-pro-ui/listview";

@Component({
    selector: "ns-home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    statistics;
    datos;
    idUsersList = [];
    petitionList = [];
    usersList = [];
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(private csgoSrv:CSGOHttpGetService) { }

    ngOnInit(): void {
        this.csgoSrv.getMemberList('').subscribe( memberList => {
            Xml2js.parseString(memberList.text(), (err, result) => {
                // console.dir(result.members.steamid)
                this.idUsersList = result.memberList.members[0].steamID64 ? result.memberList.members[0].steamID64 : [];
                // console.log(this.idUsersList);
            });
           
            if(this.idUsersList && this.idUsersList.length) {
                this.idUsersList.map(memberID => {
                    this.petitionList.push(this.csgoSrv.getUserStatus(memberID))
                })
                Observable.forkJoin(this.petitionList).map(res => {return res}).subscribe(data => {
                    this.usersList = data.map(element => {
                        return  element[0];
                    });
                    console.dir(this.usersList);
                });
            }
        })
 
       
    }
}