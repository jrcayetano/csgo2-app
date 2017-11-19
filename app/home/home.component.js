"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var csgo_http_service_1 = require("../services/csgo-http-service");
var Xml2js = require("nativescript-xml2js");
require("rxjs/add/observable/forkJoin");
var Observable_1 = require("rxjs/Observable");
var HomeComponent = (function () {
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    function HomeComponent(csgoSrv) {
        this.csgoSrv = csgoSrv;
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
                    console.dir(_this.usersList);
                });
            }
        });
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "ns-home",
            moduleId: module.id,
            templateUrl: "./home.component.html",
            styleUrls: ['./home.component.css']
        }),
        __metadata("design:paramtypes", [csgo_http_service_1.CSGOHttpGetService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHNDQUFrRDtBQUNsRCxtRUFBbUU7QUFDbkUsNENBQThDO0FBQzlDLHdDQUFxQztBQUNyQyw4Q0FBNkM7QUFTN0M7SUFNSSw2SUFBNkk7SUFDN0ksaUhBQWlIO0lBQ2pILHVCQUFvQixPQUEwQjtRQUExQixZQUFPLEdBQVAsT0FBTyxDQUFtQjtRQUw5QyxnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNqQixpQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUNsQixjQUFTLEdBQUcsRUFBRSxDQUFDO0lBR21DLENBQUM7SUFFbkQsZ0NBQVEsR0FBUjtRQUFBLGlCQXNCQztRQXJCRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUUsVUFBQSxVQUFVO1lBQ2hELE1BQU0sQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxFQUFFLFVBQUMsR0FBRyxFQUFFLE1BQU07Z0JBQzlDLHNDQUFzQztnQkFDdEMsS0FBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztnQkFDeEcsaUNBQWlDO1lBQ3JDLENBQUMsQ0FBQyxDQUFDO1lBRUgsRUFBRSxDQUFBLENBQUMsS0FBSSxDQUFDLFdBQVcsSUFBSSxLQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQzdDLEtBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLFVBQUEsUUFBUTtvQkFDekIsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQTtnQkFDaEUsQ0FBQyxDQUFDLENBQUE7Z0JBQ0YsdUJBQVUsQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSyxNQUFNLENBQUMsR0FBRyxDQUFBLENBQUEsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsSUFBSTtvQkFDMUUsS0FBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUEsT0FBTzt3QkFDN0IsTUFBTSxDQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDdkIsQ0FBQyxDQUFDLENBQUM7b0JBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ2hDLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFBO0lBR04sQ0FBQztJQWhDUSxhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsU0FBUztZQUNuQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztTQUN0QyxDQUFDO3lDQVM4QixzQ0FBa0I7T0FSckMsYUFBYSxDQWlDekI7SUFBRCxvQkFBQztDQUFBLEFBakNELElBaUNDO0FBakNZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQ1NHT0h0dHBHZXRTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2NzZ28taHR0cC1zZXJ2aWNlXCI7XHJcbmltcG9ydCAqIGFzIFhtbDJqcyBmcm9tICduYXRpdmVzY3JpcHQteG1sMmpzJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL2ZvcmtKb2luJ1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBMaXN0Vmlld0xpbmVhckxheW91dCwgTGlzdFZpZXdFdmVudERhdGEsIFJhZExpc3RWaWV3LCBMaXN0Vmlld0xvYWRPbkRlbWFuZE1vZGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9saXN0dmlld1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJucy1ob21lXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9ob21lLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBzdGF0aXN0aWNzO1xyXG4gICAgZGF0b3M7XHJcbiAgICBpZFVzZXJzTGlzdCA9IFtdO1xyXG4gICAgcGV0aXRpb25MaXN0ID0gW107XHJcbiAgICB1c2Vyc0xpc3QgPSBbXTtcclxuICAgIC8vIFRoaXMgcGF0dGVybiBtYWtlcyB1c2Ugb2YgQW5ndWxhcuKAmXMgZGVwZW5kZW5jeSBpbmplY3Rpb24gaW1wbGVtZW50YXRpb24gdG8gaW5qZWN0IGFuIGluc3RhbmNlIG9mIHRoZSBJdGVtU2VydmljZSBzZXJ2aWNlIGludG8gdGhpcyBjbGFzcy4gXHJcbiAgICAvLyBBbmd1bGFyIGtub3dzIGFib3V0IHRoaXMgc2VydmljZSBiZWNhdXNlIGl0IGlzIGluY2x1ZGVkIGluIHlvdXIgYXBw4oCZcyBtYWluIE5nTW9kdWxlLCBkZWZpbmVkIGluIGFwcC5tb2R1bGUudHMuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNzZ29TcnY6Q1NHT0h0dHBHZXRTZXJ2aWNlKSB7IH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmNzZ29TcnYuZ2V0TWVtYmVyTGlzdCgnJykuc3Vic2NyaWJlKCBtZW1iZXJMaXN0ID0+IHtcclxuICAgICAgICAgICAgWG1sMmpzLnBhcnNlU3RyaW5nKG1lbWJlckxpc3QudGV4dCgpLCAoZXJyLCByZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUuZGlyKHJlc3VsdC5tZW1iZXJzLnN0ZWFtaWQpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmlkVXNlcnNMaXN0ID0gcmVzdWx0Lm1lbWJlckxpc3QubWVtYmVyc1swXS5zdGVhbUlENjQgPyByZXN1bHQubWVtYmVyTGlzdC5tZW1iZXJzWzBdLnN0ZWFtSUQ2NCA6IFtdO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5pZFVzZXJzTGlzdCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZih0aGlzLmlkVXNlcnNMaXN0ICYmIHRoaXMuaWRVc2Vyc0xpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlkVXNlcnNMaXN0Lm1hcChtZW1iZXJJRCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wZXRpdGlvbkxpc3QucHVzaCh0aGlzLmNzZ29TcnYuZ2V0VXNlclN0YXR1cyhtZW1iZXJJRCkpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgT2JzZXJ2YWJsZS5mb3JrSm9pbih0aGlzLnBldGl0aW9uTGlzdCkubWFwKHJlcyA9PiB7cmV0dXJuIHJlc30pLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXJzTGlzdCA9IGRhdGEubWFwKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gIGVsZW1lbnRbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5kaXIodGhpcy51c2Vyc0xpc3QpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gXHJcbiAgICAgICBcclxuICAgIH1cclxufSJdfQ==