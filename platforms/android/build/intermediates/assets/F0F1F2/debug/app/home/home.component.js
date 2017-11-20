"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var csgo_http_service_1 = require("../services/csgo-http-service");
var Xml2js = require("nativescript-xml2js");
require("rxjs/add/observable/forkJoin");
var Observable_1 = require("rxjs/Observable");
var router_1 = require("@angular/router");
var HomeComponent = (function () {
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    function HomeComponent(csgoSrv, router) {
        this.csgoSrv = csgoSrv;
        this.router = router;
        this.idUsersList = [];
        this.petitionList = [];
        this.usersList = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.csgoSrv.getMemberList('').subscribe(function (memberList) {
            Xml2js.parseString(memberList.text(), function (err, result) {
                // console.dir(result.members.steamid)
                _this.idUsersList = result.memberList.members[0].steamID64 ? result.memberList.members[0].steamID64 : [];
                // console.log(this.idUsersList);
            });
            if (_this.idUsersList && _this.idUsersList.length) {
                _this.idUsersList.map(function (memberID) {
                    _this.petitionList.push(_this.csgoSrv.getUserStatus(memberID));
                });
                Observable_1.Observable.forkJoin(_this.petitionList).map(function (res) { return res; }).subscribe(function (data) {
                    _this.usersList = data.map(function (element) {
                        return element[0];
                    });
                    // console.dir(this.usersList);
                });
            }
        });
    };
    HomeComponent.prototype.goBack = function () {
        this.router.navigate['/items'];
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "ns-home",
            moduleId: module.id,
            templateUrl: "./home.component.html",
            styleUrls: ['./home.component.css']
        }),
        __metadata("design:paramtypes", [csgo_http_service_1.CSGOHttpGetService, router_1.Router])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHNDQUFrRDtBQUNsRCxtRUFBbUU7QUFDbkUsNENBQThDO0FBQzlDLHdDQUFxQztBQUNyQyw4Q0FBNkM7QUFFN0MsMENBQXlDO0FBUXpDO0lBTUksNklBQTZJO0lBQzdJLGlIQUFpSDtJQUNqSCx1QkFBb0IsT0FBMEIsRUFBVSxNQUFjO1FBQWxELFlBQU8sR0FBUCxPQUFPLENBQW1CO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUx0RSxnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNqQixpQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUNsQixjQUFTLEdBQUcsRUFBRSxDQUFDO0lBRzJELENBQUM7SUFFM0UsZ0NBQVEsR0FBUjtRQUFBLGlCQXNCQztRQXJCRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUUsVUFBQSxVQUFVO1lBQ2hELE1BQU0sQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxFQUFFLFVBQUMsR0FBRyxFQUFFLE1BQU07Z0JBQzlDLHNDQUFzQztnQkFDdEMsS0FBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztnQkFDeEcsaUNBQWlDO1lBQ3JDLENBQUMsQ0FBQyxDQUFDO1lBRUgsRUFBRSxDQUFBLENBQUMsS0FBSSxDQUFDLFdBQVcsSUFBSSxLQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQzdDLEtBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLFVBQUEsUUFBUTtvQkFDekIsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQTtnQkFDaEUsQ0FBQyxDQUFDLENBQUE7Z0JBQ0YsdUJBQVUsQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSyxNQUFNLENBQUMsR0FBRyxDQUFBLENBQUEsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsSUFBSTtvQkFDMUUsS0FBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUEsT0FBTzt3QkFDN0IsTUFBTSxDQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDdkIsQ0FBQyxDQUFDLENBQUM7b0JBQ0gsK0JBQStCO2dCQUNuQyxDQUFDLENBQUMsQ0FBQztZQUNQLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQTtJQUdOLENBQUM7SUFDRCw4QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQW5DUSxhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsU0FBUztZQUNuQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztTQUN0QyxDQUFDO3lDQVM4QixzQ0FBa0IsRUFBa0IsZUFBTTtPQVI3RCxhQUFhLENBb0N6QjtJQUFELG9CQUFDO0NBQUEsQUFwQ0QsSUFvQ0M7QUFwQ1ksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBDU0dPSHR0cEdldFNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvY3Nnby1odHRwLXNlcnZpY2VcIjtcclxuaW1wb3J0ICogYXMgWG1sMmpzIGZyb20gJ25hdGl2ZXNjcmlwdC14bWwyanMnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvZm9ya0pvaW4nXHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IExpc3RWaWV3TGluZWFyTGF5b3V0LCBMaXN0Vmlld0V2ZW50RGF0YSwgUmFkTGlzdFZpZXcsIExpc3RWaWV3TG9hZE9uRGVtYW5kTW9kZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL2xpc3R2aWV3XCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwibnMtaG9tZVwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vaG9tZS5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgc3RhdGlzdGljcztcclxuICAgIGRhdG9zO1xyXG4gICAgaWRVc2Vyc0xpc3QgPSBbXTtcclxuICAgIHBldGl0aW9uTGlzdCA9IFtdO1xyXG4gICAgdXNlcnNMaXN0ID0gW107XHJcbiAgICAvLyBUaGlzIHBhdHRlcm4gbWFrZXMgdXNlIG9mIEFuZ3VsYXLigJlzIGRlcGVuZGVuY3kgaW5qZWN0aW9uIGltcGxlbWVudGF0aW9uIHRvIGluamVjdCBhbiBpbnN0YW5jZSBvZiB0aGUgSXRlbVNlcnZpY2Ugc2VydmljZSBpbnRvIHRoaXMgY2xhc3MuIFxyXG4gICAgLy8gQW5ndWxhciBrbm93cyBhYm91dCB0aGlzIHNlcnZpY2UgYmVjYXVzZSBpdCBpcyBpbmNsdWRlZCBpbiB5b3VyIGFwcOKAmXMgbWFpbiBOZ01vZHVsZSwgZGVmaW5lZCBpbiBhcHAubW9kdWxlLnRzLlxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBjc2dvU3J2OkNTR09IdHRwR2V0U2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikgeyB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5jc2dvU3J2LmdldE1lbWJlckxpc3QoJycpLnN1YnNjcmliZSggbWVtYmVyTGlzdCA9PiB7XHJcbiAgICAgICAgICAgIFhtbDJqcy5wYXJzZVN0cmluZyhtZW1iZXJMaXN0LnRleHQoKSwgKGVyciwgcmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmRpcihyZXN1bHQubWVtYmVycy5zdGVhbWlkKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5pZFVzZXJzTGlzdCA9IHJlc3VsdC5tZW1iZXJMaXN0Lm1lbWJlcnNbMF0uc3RlYW1JRDY0ID8gcmVzdWx0Lm1lbWJlckxpc3QubWVtYmVyc1swXS5zdGVhbUlENjQgOiBbXTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuaWRVc2Vyc0xpc3QpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYodGhpcy5pZFVzZXJzTGlzdCAmJiB0aGlzLmlkVXNlcnNMaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pZFVzZXJzTGlzdC5tYXAobWVtYmVySUQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGV0aXRpb25MaXN0LnB1c2godGhpcy5jc2dvU3J2LmdldFVzZXJTdGF0dXMobWVtYmVySUQpKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIE9ic2VydmFibGUuZm9ya0pvaW4odGhpcy5wZXRpdGlvbkxpc3QpLm1hcChyZXMgPT4ge3JldHVybiByZXN9KS5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51c2Vyc0xpc3QgPSBkYXRhLm1hcChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICBlbGVtZW50WzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUuZGlyKHRoaXMudXNlcnNMaXN0KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuIFxyXG4gICAgICAgXHJcbiAgICB9XHJcbiAgICBnb0JhY2soKXtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZVsnL2l0ZW1zJ107XHJcbiAgICB9XHJcbn0iXX0=