"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var item_service_1 = require("./item.service");
var csgo_http_service_1 = require("../services/csgo-http-service");
var Rx_1 = require("rxjs/Rx");
var ItemsComponent = (function () {
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    function ItemsComponent(itemService, csgoSrv) {
        this.itemService = itemService;
        this.csgoSrv = csgoSrv;
    }
    ItemsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.items = this.itemService.getItems();
        this.csgoSrv.getDataByUser('id').subscribe(function (dataUser) {
            _this.datos = dataUser.playerstats.stats;
        }, function (error) {
            console.log(error);
        });
        Rx_1.Observable.interval(500 * 60).subscribe(function (x) {
            _this.csgoSrv.getUserStatus('id').subscribe(function (dataUserStatus) {
                _this.userSatus = dataUserStatus;
                console.dir(_this.userSatus);
            }, function (error) {
                console.log(error);
            });
        });
        // dialogs.alert({
        //     title: "Your title",
        //     message: "Your message",
        //     okButtonText: "Your button text"
        // }).then(() => {
        //     console.log("Dialog closed!");
        // });
    };
    ItemsComponent = __decorate([
        core_1.Component({
            selector: "ns-items",
            moduleId: module.id,
            templateUrl: "./items.component.html",
        }),
        __metadata("design:paramtypes", [item_service_1.ItemService, csgo_http_service_1.CSGOHttpGetService])
    ], ItemsComponent);
    return ItemsComponent;
}());
exports.ItemsComponent = ItemsComponent;
var statisticUser = (function () {
    function statisticUser() {
    }
    return statisticUser;
}());
exports.statisticUser = statisticUser;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBR2xELCtDQUE2QztBQUM3QyxtRUFBbUU7QUFDbkUsOEJBQW1DO0FBUW5DO0lBSUksNklBQTZJO0lBQzdJLGlIQUFpSDtJQUNqSCx3QkFBb0IsV0FBd0IsRUFBVSxPQUEwQjtRQUE1RCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQW1CO0lBQUksQ0FBQztJQUVyRixpQ0FBUSxHQUFSO1FBQUEsaUJBdUJDO1FBdEJHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN6QyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxRQUFRO1lBQy9DLEtBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7UUFDNUMsQ0FBQyxFQUFFLFVBQUEsS0FBSztZQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUE7UUFDRixlQUFVLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUUsVUFBQSxDQUFDO1lBQ3RDLEtBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLGNBQWM7Z0JBQ3JELEtBQUksQ0FBQyxTQUFTLEdBQUcsY0FBYyxDQUFDO2dCQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNoQyxDQUFDLEVBQUUsVUFBQSxLQUFLO2dCQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdkIsQ0FBQyxDQUFDLENBQUE7UUFDTixDQUFDLENBQUMsQ0FBQTtRQUVGLGtCQUFrQjtRQUNsQiwyQkFBMkI7UUFDM0IsK0JBQStCO1FBQy9CLHVDQUF1QztRQUN2QyxrQkFBa0I7UUFDbEIscUNBQXFDO1FBQ3JDLE1BQU07SUFDVixDQUFDO0lBL0JRLGNBQWM7UUFMMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsd0JBQXdCO1NBQ3hDLENBQUM7eUNBT21DLDBCQUFXLEVBQWtCLHNDQUFrQjtPQU52RSxjQUFjLENBZ0MxQjtJQUFELHFCQUFDO0NBQUEsQUFoQ0QsSUFnQ0M7QUFoQ1ksd0NBQWM7QUFpQzNCO0lBQUE7SUFHQSxDQUFDO0lBQUQsb0JBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQztBQUhZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBJdGVtIH0gZnJvbSBcIi4vaXRlbVwiO1xuaW1wb3J0IHsgSXRlbVNlcnZpY2UgfSBmcm9tIFwiLi9pdGVtLnNlcnZpY2VcIjtcbmltcG9ydCB7IENTR09IdHRwR2V0U2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9jc2dvLWh0dHAtc2VydmljZVwiO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL1J4JztcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInVpL2RpYWxvZ3NcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtaXRlbXNcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaXRlbXMuY29tcG9uZW50Lmh0bWxcIixcbn0pXG5leHBvcnQgY2xhc3MgSXRlbXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGl0ZW1zOiBJdGVtW107XG4gICAgZGF0b3M6c3RhdGlzdGljVXNlcjtcbiAgICB1c2VyU2F0dXM7XG4gICAgLy8gVGhpcyBwYXR0ZXJuIG1ha2VzIHVzZSBvZiBBbmd1bGFy4oCZcyBkZXBlbmRlbmN5IGluamVjdGlvbiBpbXBsZW1lbnRhdGlvbiB0byBpbmplY3QgYW4gaW5zdGFuY2Ugb2YgdGhlIEl0ZW1TZXJ2aWNlIHNlcnZpY2UgaW50byB0aGlzIGNsYXNzLiBcbiAgICAvLyBBbmd1bGFyIGtub3dzIGFib3V0IHRoaXMgc2VydmljZSBiZWNhdXNlIGl0IGlzIGluY2x1ZGVkIGluIHlvdXIgYXBw4oCZcyBtYWluIE5nTW9kdWxlLCBkZWZpbmVkIGluIGFwcC5tb2R1bGUudHMuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBpdGVtU2VydmljZTogSXRlbVNlcnZpY2UsIHByaXZhdGUgY3Nnb1NydjpDU0dPSHR0cEdldFNlcnZpY2UpIHsgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaXRlbXMgPSB0aGlzLml0ZW1TZXJ2aWNlLmdldEl0ZW1zKCk7XG4gICAgICAgIHRoaXMuY3Nnb1Nydi5nZXREYXRhQnlVc2VyKCdpZCcpLnN1YnNjcmliZShkYXRhVXNlciA9PiB7XG4gICAgICAgICAgICB0aGlzLmRhdG9zID0gZGF0YVVzZXIucGxheWVyc3RhdHMuc3RhdHM7XG4gICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfSlcbiAgICAgICAgT2JzZXJ2YWJsZS5pbnRlcnZhbCg1MDAgKiA2MCkuc3Vic2NyaWJlKCB4ID0+IHtcbiAgICAgICAgICAgIHRoaXMuY3Nnb1Nydi5nZXRVc2VyU3RhdHVzKCdpZCcpLnN1YnNjcmliZShkYXRhVXNlclN0YXR1cyA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy51c2VyU2F0dXMgPSBkYXRhVXNlclN0YXR1cztcbiAgICAgICAgICAgICAgICBjb25zb2xlLmRpcih0aGlzLnVzZXJTYXR1cyk7XG4gICAgICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgICAgIC8vIGRpYWxvZ3MuYWxlcnQoe1xuICAgICAgICAvLyAgICAgdGl0bGU6IFwiWW91ciB0aXRsZVwiLFxuICAgICAgICAvLyAgICAgbWVzc2FnZTogXCJZb3VyIG1lc3NhZ2VcIixcbiAgICAgICAgLy8gICAgIG9rQnV0dG9uVGV4dDogXCJZb3VyIGJ1dHRvbiB0ZXh0XCJcbiAgICAgICAgLy8gfSkudGhlbigoKSA9PiB7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcIkRpYWxvZyBjbG9zZWQhXCIpO1xuICAgICAgICAvLyB9KTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3Mgc3RhdGlzdGljVXNlciB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIHZhbHVlOiBzdHJpbmc7XG59Il19