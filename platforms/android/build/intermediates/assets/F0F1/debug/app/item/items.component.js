"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var item_service_1 = require("./item.service");
var csgo_http_service_1 = require("../services/csgo-http-service");
var Rx_1 = require("rxjs/Rx");
var LocalNotifications = require("nativescript-local-notifications");
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
                _this._sendNotification();
            }, function (error) {
                console.log(error);
            });
        });
    };
    ItemsComponent.prototype._sendNotification = function () {
        LocalNotifications.schedule([{
                id: 1,
                title: 'Usuario conectado a CSGO',
                body: 'El usuario acaba de inciar sesión en CSGO',
                badge: 1,
                ongoing: true,
                smallIcon: 'res://csgo_notification',
                sound: "customsound-ios.wav",
            }]).then(function () {
            console.log("Notification scheduled");
        }, function (error) {
            console.log("scheduling error: " + error);
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBR2xELCtDQUE2QztBQUM3QyxtRUFBbUU7QUFDbkUsOEJBQW1DO0FBRW5DLHFFQUF1RTtBQU92RTtJQUlJLDZJQUE2STtJQUM3SSxpSEFBaUg7SUFDakgsd0JBQW9CLFdBQXdCLEVBQVUsT0FBMEI7UUFBNUQsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFtQjtJQUFJLENBQUM7SUFFckYsaUNBQVEsR0FBUjtRQUFBLGlCQWlCQztRQWhCRyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDekMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsUUFBUTtZQUMvQyxLQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO1FBQzVDLENBQUMsRUFBRSxVQUFBLEtBQUs7WUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFBO1FBQ0YsZUFBVSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFFLFVBQUEsQ0FBQztZQUN0QyxLQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxjQUFjO2dCQUNyRCxLQUFJLENBQUMsU0FBUyxHQUFHLGNBQWMsQ0FBQztnQkFDaEMsS0FBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7WUFDN0IsQ0FBQyxFQUFFLFVBQUEsS0FBSztnQkFDSixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3ZCLENBQUMsQ0FBQyxDQUFBO1FBQ04sQ0FBQyxDQUFDLENBQUE7SUFHTixDQUFDO0lBRU8sMENBQWlCLEdBQXpCO1FBQ0ksa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3pCLEVBQUUsRUFBRSxDQUFDO2dCQUNMLEtBQUssRUFBRSwwQkFBMEI7Z0JBQ2pDLElBQUksRUFBRSwyQ0FBMkM7Z0JBQ2pELEtBQUssRUFBRSxDQUFDO2dCQUNSLE9BQU8sRUFBRSxJQUFJO2dCQUNiLFNBQVMsRUFBRSx5QkFBeUI7Z0JBQ3BDLEtBQUssRUFBRSxxQkFBcUI7YUFDN0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUNKO1lBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsRUFDRCxVQUFTLEtBQUs7WUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixHQUFHLEtBQUssQ0FBQyxDQUFDO1FBQzVDLENBQUMsQ0FDSixDQUFBO0lBRVAsQ0FBQztJQTdDUSxjQUFjO1FBTDFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtTQUN4QyxDQUFDO3lDQU9tQywwQkFBVyxFQUFrQixzQ0FBa0I7T0FOdkUsY0FBYyxDQThDMUI7SUFBRCxxQkFBQztDQUFBLEFBOUNELElBOENDO0FBOUNZLHdDQUFjO0FBK0MzQjtJQUFBO0lBR0EsQ0FBQztJQUFELG9CQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7QUFIWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgSXRlbSB9IGZyb20gXCIuL2l0ZW1cIjtcbmltcG9ydCB7IEl0ZW1TZXJ2aWNlIH0gZnJvbSBcIi4vaXRlbS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBDU0dPSHR0cEdldFNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvY3Nnby1odHRwLXNlcnZpY2VcIjtcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9SeCc7XG5pbXBvcnQgKiBhcyBEaWFsb2dzIGZyb20gXCJ1aS9kaWFsb2dzXCI7XG5pbXBvcnQgKiBhcyBMb2NhbE5vdGlmaWNhdGlvbnMgZnJvbSBcIm5hdGl2ZXNjcmlwdC1sb2NhbC1ub3RpZmljYXRpb25zXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWl0ZW1zXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2l0ZW1zLmNvbXBvbmVudC5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIEl0ZW1zQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBpdGVtczogSXRlbVtdO1xuICAgIGRhdG9zOnN0YXRpc3RpY1VzZXI7XG4gICAgdXNlclNhdHVzO1xuICAgIC8vIFRoaXMgcGF0dGVybiBtYWtlcyB1c2Ugb2YgQW5ndWxhcuKAmXMgZGVwZW5kZW5jeSBpbmplY3Rpb24gaW1wbGVtZW50YXRpb24gdG8gaW5qZWN0IGFuIGluc3RhbmNlIG9mIHRoZSBJdGVtU2VydmljZSBzZXJ2aWNlIGludG8gdGhpcyBjbGFzcy4gXG4gICAgLy8gQW5ndWxhciBrbm93cyBhYm91dCB0aGlzIHNlcnZpY2UgYmVjYXVzZSBpdCBpcyBpbmNsdWRlZCBpbiB5b3VyIGFwcOKAmXMgbWFpbiBOZ01vZHVsZSwgZGVmaW5lZCBpbiBhcHAubW9kdWxlLnRzLlxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaXRlbVNlcnZpY2U6IEl0ZW1TZXJ2aWNlLCBwcml2YXRlIGNzZ29TcnY6Q1NHT0h0dHBHZXRTZXJ2aWNlKSB7IH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLml0ZW1zID0gdGhpcy5pdGVtU2VydmljZS5nZXRJdGVtcygpO1xuICAgICAgICB0aGlzLmNzZ29TcnYuZ2V0RGF0YUJ5VXNlcignaWQnKS5zdWJzY3JpYmUoZGF0YVVzZXIgPT4ge1xuICAgICAgICAgICAgdGhpcy5kYXRvcyA9IGRhdGFVc2VyLnBsYXllcnN0YXRzLnN0YXRzO1xuICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH0pXG4gICAgICAgIE9ic2VydmFibGUuaW50ZXJ2YWwoNTAwICogNjApLnN1YnNjcmliZSggeCA9PiB7XG4gICAgICAgICAgICB0aGlzLmNzZ29TcnYuZ2V0VXNlclN0YXR1cygnaWQnKS5zdWJzY3JpYmUoZGF0YVVzZXJTdGF0dXMgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudXNlclNhdHVzID0gZGF0YVVzZXJTdGF0dXM7XG4gICAgICAgICAgICAgICAgdGhpcy5fc2VuZE5vdGlmaWNhdGlvbigpO1xuICAgICAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgXG4gICAgICAgIFxuICAgIH1cblxuICAgIHByaXZhdGUgX3NlbmROb3RpZmljYXRpb24oKSB7XG4gICAgICAgIExvY2FsTm90aWZpY2F0aW9ucy5zY2hlZHVsZShbe1xuICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICB0aXRsZTogJ1VzdWFyaW8gY29uZWN0YWRvIGEgQ1NHTycsXG4gICAgICAgICAgICBib2R5OiAnRWwgdXN1YXJpbyBhY2FiYSBkZSBpbmNpYXIgc2VzacOzbiBlbiBDU0dPJyxcbiAgICAgICAgICAgIGJhZGdlOiAxLFxuICAgICAgICAgICAgb25nb2luZzogdHJ1ZSwgLy8gbWFrZXMgdGhlIG5vdGlmaWNhdGlvbiBvbmdvaW5nIChBbmRyb2lkIG9ubHkpXG4gICAgICAgICAgICBzbWFsbEljb246ICdyZXM6Ly9jc2dvX25vdGlmaWNhdGlvbicsXG4gICAgICAgICAgICBzb3VuZDogXCJjdXN0b21zb3VuZC1pb3Mud2F2XCIsIC8vIGZhbGxzIGJhY2sgdG8gdGhlIGRlZmF1bHQgc291bmQgb24gQW5kcm9pZFxuICAgICAgICAgIH1dKS50aGVuKFxuICAgICAgICAgICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5vdGlmaWNhdGlvbiBzY2hlZHVsZWRcIik7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzY2hlZHVsaW5nIGVycm9yOiBcIiArIGVycm9yKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIClcblxuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBzdGF0aXN0aWNVc2VyIHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgdmFsdWU6IHN0cmluZztcbn0iXX0=