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
        this.avisado = false;
    }
    ItemsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.items = this.itemService.getItems();
        this.csgoSrv.getDataByUser('id').subscribe(function (dataUser) {
            _this.datos = dataUser;
        }, function (error) {
            console.log(error);
        });
        Rx_1.Observable.interval(500 * 60).subscribe(function (x) {
            _this.csgoSrv.getUserStatus('id').subscribe(function (dataUserStatus) {
                _this.userStatus = dataUserStatus;
                // this._sendNotification();
                console.dir(_this.userStatus);
                if (!_this.avisado && _this.userStatus[0]['gameid'] && _this.userStatus[0]['gameid'] === '730') {
                    _this._sendNotification();
                    _this.avisado = true;
                }
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
                smallIcon: 'res://heart',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBR2xELCtDQUE2QztBQUM3QyxtRUFBbUU7QUFDbkUsOEJBQW1DO0FBRW5DLHFFQUF1RTtBQU92RTtJQUtJLDZJQUE2STtJQUM3SSxpSEFBaUg7SUFDakgsd0JBQW9CLFdBQXdCLEVBQVUsT0FBMEI7UUFBNUQsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFtQjtRQUhoRixZQUFPLEdBQUksS0FBSyxDQUFDO0lBR21FLENBQUM7SUFFckYsaUNBQVEsR0FBUjtRQUFBLGlCQXNCQztRQXJCRyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDekMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsUUFBUTtZQUMvQyxLQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztRQUMxQixDQUFDLEVBQUUsVUFBQSxLQUFLO1lBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQTtRQUNGLGVBQVUsQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBRSxVQUFBLENBQUM7WUFDdEMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsY0FBYztnQkFDckQsS0FBSSxDQUFDLFVBQVUsR0FBRyxjQUFjLENBQUM7Z0JBQ2pDLDRCQUE0QjtnQkFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQzdCLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLE9BQU8sSUFBSSxLQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEtBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQztvQkFDMUYsS0FBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7b0JBQ3pCLEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2dCQUN4QixDQUFDO1lBQ0wsQ0FBQyxFQUFFLFVBQUEsS0FBSztnQkFDSixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3ZCLENBQUMsQ0FBQyxDQUFBO1FBQ04sQ0FBQyxDQUFDLENBQUE7SUFHTixDQUFDO0lBRU8sMENBQWlCLEdBQXpCO1FBQ0ksa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3pCLEVBQUUsRUFBRSxDQUFDO2dCQUNMLEtBQUssRUFBRSwwQkFBMEI7Z0JBQ2pDLElBQUksRUFBRSwyQ0FBMkM7Z0JBQ2pELEtBQUssRUFBRSxDQUFDO2dCQUNSLE9BQU8sRUFBRSxJQUFJO2dCQUNiLFNBQVMsRUFBRSxhQUFhO2dCQUN4QixLQUFLLEVBQUUscUJBQXFCO2FBQzdCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FDSjtZQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUN4QyxDQUFDLEVBQ0QsVUFBUyxLQUFLO1lBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsR0FBRyxLQUFLLENBQUMsQ0FBQztRQUM1QyxDQUFDLENBQ0osQ0FBQTtJQUVQLENBQUM7SUFuRFEsY0FBYztRQUwxQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFVBQVU7WUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx3QkFBd0I7U0FDeEMsQ0FBQzt5Q0FRbUMsMEJBQVcsRUFBa0Isc0NBQWtCO09BUHZFLGNBQWMsQ0FvRDFCO0lBQUQscUJBQUM7Q0FBQSxBQXBERCxJQW9EQztBQXBEWSx3Q0FBYztBQXFEM0I7SUFBQTtJQUdBLENBQUM7SUFBRCxvQkFBQztBQUFELENBQUMsQUFIRCxJQUdDO0FBSFksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5pbXBvcnQgeyBJdGVtIH0gZnJvbSBcIi4vaXRlbVwiO1xyXG5pbXBvcnQgeyBJdGVtU2VydmljZSB9IGZyb20gXCIuL2l0ZW0uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBDU0dPSHR0cEdldFNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvY3Nnby1odHRwLXNlcnZpY2VcIjtcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL1J4JztcclxuaW1wb3J0ICogYXMgRGlhbG9ncyBmcm9tIFwidWkvZGlhbG9nc1wiO1xyXG5pbXBvcnQgKiBhcyBMb2NhbE5vdGlmaWNhdGlvbnMgZnJvbSBcIm5hdGl2ZXNjcmlwdC1sb2NhbC1ub3RpZmljYXRpb25zXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm5zLWl0ZW1zXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9pdGVtcy5jb21wb25lbnQuaHRtbFwiLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSXRlbXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgaXRlbXM6IEl0ZW1bXTtcclxuICAgIGRhdG9zOnN0YXRpc3RpY1VzZXI7XHJcbiAgICB1c2VyU3RhdHVzO1xyXG4gICAgYXZpc2FkbyA9ICBmYWxzZTtcclxuICAgIC8vIFRoaXMgcGF0dGVybiBtYWtlcyB1c2Ugb2YgQW5ndWxhcuKAmXMgZGVwZW5kZW5jeSBpbmplY3Rpb24gaW1wbGVtZW50YXRpb24gdG8gaW5qZWN0IGFuIGluc3RhbmNlIG9mIHRoZSBJdGVtU2VydmljZSBzZXJ2aWNlIGludG8gdGhpcyBjbGFzcy4gXHJcbiAgICAvLyBBbmd1bGFyIGtub3dzIGFib3V0IHRoaXMgc2VydmljZSBiZWNhdXNlIGl0IGlzIGluY2x1ZGVkIGluIHlvdXIgYXBw4oCZcyBtYWluIE5nTW9kdWxlLCBkZWZpbmVkIGluIGFwcC5tb2R1bGUudHMuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGl0ZW1TZXJ2aWNlOiBJdGVtU2VydmljZSwgcHJpdmF0ZSBjc2dvU3J2OkNTR09IdHRwR2V0U2VydmljZSkgeyB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pdGVtcyA9IHRoaXMuaXRlbVNlcnZpY2UuZ2V0SXRlbXMoKTtcclxuICAgICAgICB0aGlzLmNzZ29TcnYuZ2V0RGF0YUJ5VXNlcignaWQnKS5zdWJzY3JpYmUoZGF0YVVzZXIgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmRhdG9zID0gZGF0YVVzZXI7XHJcbiAgICAgICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBPYnNlcnZhYmxlLmludGVydmFsKDUwMCAqIDYwKS5zdWJzY3JpYmUoIHggPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNzZ29TcnYuZ2V0VXNlclN0YXR1cygnaWQnKS5zdWJzY3JpYmUoZGF0YVVzZXJTdGF0dXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51c2VyU3RhdHVzID0gZGF0YVVzZXJTdGF0dXM7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLl9zZW5kTm90aWZpY2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmRpcih0aGlzLnVzZXJTdGF0dXMpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmF2aXNhZG8gJiYgdGhpcy51c2VyU3RhdHVzWzBdWydnYW1laWQnXSAmJiB0aGlzLnVzZXJTdGF0dXNbMF1bJ2dhbWVpZCddID09PSAnNzMwJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NlbmROb3RpZmljYXRpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmF2aXNhZG8gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3NlbmROb3RpZmljYXRpb24oKSB7XHJcbiAgICAgICAgTG9jYWxOb3RpZmljYXRpb25zLnNjaGVkdWxlKFt7XHJcbiAgICAgICAgICAgIGlkOiAxLFxyXG4gICAgICAgICAgICB0aXRsZTogJ1VzdWFyaW8gY29uZWN0YWRvIGEgQ1NHTycsXHJcbiAgICAgICAgICAgIGJvZHk6ICdFbCB1c3VhcmlvIGFjYWJhIGRlIGluY2lhciBzZXNpw7NuIGVuIENTR08nLFxyXG4gICAgICAgICAgICBiYWRnZTogMSxcclxuICAgICAgICAgICAgb25nb2luZzogdHJ1ZSwgLy8gbWFrZXMgdGhlIG5vdGlmaWNhdGlvbiBvbmdvaW5nIChBbmRyb2lkIG9ubHkpXHJcbiAgICAgICAgICAgIHNtYWxsSWNvbjogJ3JlczovL2hlYXJ0JyxcclxuICAgICAgICAgICAgc291bmQ6IFwiY3VzdG9tc291bmQtaW9zLndhdlwiLCAvLyBmYWxscyBiYWNrIHRvIHRoZSBkZWZhdWx0IHNvdW5kIG9uIEFuZHJvaWRcclxuICAgICAgICAgIH1dKS50aGVuKFxyXG4gICAgICAgICAgICAgIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJOb3RpZmljYXRpb24gc2NoZWR1bGVkXCIpO1xyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgZnVuY3Rpb24oZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2NoZWR1bGluZyBlcnJvcjogXCIgKyBlcnJvcik7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgKVxyXG5cclxuICAgIH1cclxufVxyXG5leHBvcnQgY2xhc3Mgc3RhdGlzdGljVXNlciB7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICB2YWx1ZTogc3RyaW5nO1xyXG59Il19