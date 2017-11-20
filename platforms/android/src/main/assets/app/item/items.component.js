"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var item_service_1 = require("./item.service");
var csgo_http_service_1 = require("../services/csgo-http-service");
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
        this.csgoSrv.getDataByUser('76561198224522144').subscribe(function (dataUser) {
            _this.datos = dataUser;
        }, function (error) {
            console.log(error);
        });
        /*
        Observable.interval(500 * 60).subscribe( x => {
            this.csgoSrv.getUserStatus('76561198224522144').subscribe(dataUserStatus => {
                this.userStatus = dataUserStatus;
                console.dir(this.userStatus);
                // this._sendNotification();
                // console.dir(this.userStatus);
                if (!this.avisado && this.userStatus[0]['gameid'] && this.userStatus[0]['gameid'] === '730') {
                    this._sendNotification();
                    this.avisado = true;
                }
            }, error => {
                console.log(error);
            })
        })*/
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBR2xELCtDQUE2QztBQUM3QyxtRUFBbUU7QUFHbkUscUVBQXVFO0FBUXZFO0lBS0ksNklBQTZJO0lBQzdJLGlIQUFpSDtJQUNqSCx3QkFBb0IsV0FBd0IsRUFBVSxPQUEwQjtRQUE1RCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQW1CO1FBSGhGLFlBQU8sR0FBSSxLQUFLLENBQUM7SUFHbUUsQ0FBQztJQUVyRixpQ0FBUSxHQUFSO1FBQUEsaUJBdUJDO1FBdEJHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsUUFBUTtZQUM5RCxLQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztRQUMxQixDQUFDLEVBQUUsVUFBQSxLQUFLO1lBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQTtRQUNGOzs7Ozs7Ozs7Ozs7OztZQWNJO0lBR1IsQ0FBQztJQUVPLDBDQUFpQixHQUF6QjtRQUNJLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN6QixFQUFFLEVBQUUsQ0FBQztnQkFDTCxLQUFLLEVBQUUsMEJBQTBCO2dCQUNqQyxJQUFJLEVBQUUsMkNBQTJDO2dCQUNqRCxLQUFLLEVBQUUsQ0FBQztnQkFDUixPQUFPLEVBQUUsSUFBSTtnQkFDYixTQUFTLEVBQUUsYUFBYTtnQkFDeEIsS0FBSyxFQUFFLHFCQUFxQjthQUM3QixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQ0o7WUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFDeEMsQ0FBQyxFQUNELFVBQVMsS0FBSztZQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDNUMsQ0FBQyxDQUNKLENBQUE7SUFFUCxDQUFDO0lBcERRLGNBQWM7UUFMMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsd0JBQXdCO1NBQ3hDLENBQUM7eUNBUW1DLDBCQUFXLEVBQWtCLHNDQUFrQjtPQVB2RSxjQUFjLENBcUQxQjtJQUFELHFCQUFDO0NBQUEsQUFyREQsSUFxREM7QUFyRFksd0NBQWM7QUFzRDNCO0lBQUE7SUFHQSxDQUFDO0lBQUQsb0JBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQztBQUhZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuaW1wb3J0IHsgSXRlbSB9IGZyb20gXCIuL2l0ZW1cIjtcclxuaW1wb3J0IHsgSXRlbVNlcnZpY2UgfSBmcm9tIFwiLi9pdGVtLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgQ1NHT0h0dHBHZXRTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2NzZ28taHR0cC1zZXJ2aWNlXCI7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9SeCc7XHJcbmltcG9ydCAqIGFzIERpYWxvZ3MgZnJvbSBcInVpL2RpYWxvZ3NcIjtcclxuaW1wb3J0ICogYXMgTG9jYWxOb3RpZmljYXRpb25zIGZyb20gXCJuYXRpdmVzY3JpcHQtbG9jYWwtbm90aWZpY2F0aW9uc1wiO1xyXG5pbXBvcnQgKiBhcyBYbWwyanMgZnJvbSAnbmF0aXZlc2NyaXB0LXhtbDJqcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm5zLWl0ZW1zXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9pdGVtcy5jb21wb25lbnQuaHRtbFwiLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSXRlbXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgaXRlbXM6IEl0ZW1bXTtcclxuICAgIGRhdG9zOnN0YXRpc3RpY1VzZXI7XHJcbiAgICB1c2VyU3RhdHVzO1xyXG4gICAgYXZpc2FkbyA9ICBmYWxzZTtcclxuICAgIC8vIFRoaXMgcGF0dGVybiBtYWtlcyB1c2Ugb2YgQW5ndWxhcuKAmXMgZGVwZW5kZW5jeSBpbmplY3Rpb24gaW1wbGVtZW50YXRpb24gdG8gaW5qZWN0IGFuIGluc3RhbmNlIG9mIHRoZSBJdGVtU2VydmljZSBzZXJ2aWNlIGludG8gdGhpcyBjbGFzcy4gXHJcbiAgICAvLyBBbmd1bGFyIGtub3dzIGFib3V0IHRoaXMgc2VydmljZSBiZWNhdXNlIGl0IGlzIGluY2x1ZGVkIGluIHlvdXIgYXBw4oCZcyBtYWluIE5nTW9kdWxlLCBkZWZpbmVkIGluIGFwcC5tb2R1bGUudHMuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGl0ZW1TZXJ2aWNlOiBJdGVtU2VydmljZSwgcHJpdmF0ZSBjc2dvU3J2OkNTR09IdHRwR2V0U2VydmljZSkgeyB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5jc2dvU3J2LmdldERhdGFCeVVzZXIoJzc2NTYxMTk4MjI0NTIyMTQ0Jykuc3Vic2NyaWJlKGRhdGFVc2VyID0+IHtcclxuICAgICAgICAgICAgdGhpcy5kYXRvcyA9IGRhdGFVc2VyO1xyXG4gICAgICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLypcclxuICAgICAgICBPYnNlcnZhYmxlLmludGVydmFsKDUwMCAqIDYwKS5zdWJzY3JpYmUoIHggPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNzZ29TcnYuZ2V0VXNlclN0YXR1cygnNzY1NjExOTgyMjQ1MjIxNDQnKS5zdWJzY3JpYmUoZGF0YVVzZXJTdGF0dXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51c2VyU3RhdHVzID0gZGF0YVVzZXJTdGF0dXM7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmRpcih0aGlzLnVzZXJTdGF0dXMpO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5fc2VuZE5vdGlmaWNhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5kaXIodGhpcy51c2VyU3RhdHVzKTtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5hdmlzYWRvICYmIHRoaXMudXNlclN0YXR1c1swXVsnZ2FtZWlkJ10gJiYgdGhpcy51c2VyU3RhdHVzWzBdWydnYW1laWQnXSA9PT0gJzczMCcpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zZW5kTm90aWZpY2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hdmlzYWRvID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pKi9cclxuICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3NlbmROb3RpZmljYXRpb24oKSB7XHJcbiAgICAgICAgTG9jYWxOb3RpZmljYXRpb25zLnNjaGVkdWxlKFt7XHJcbiAgICAgICAgICAgIGlkOiAxLFxyXG4gICAgICAgICAgICB0aXRsZTogJ1VzdWFyaW8gY29uZWN0YWRvIGEgQ1NHTycsXHJcbiAgICAgICAgICAgIGJvZHk6ICdFbCB1c3VhcmlvIGFjYWJhIGRlIGluY2lhciBzZXNpw7NuIGVuIENTR08nLFxyXG4gICAgICAgICAgICBiYWRnZTogMSxcclxuICAgICAgICAgICAgb25nb2luZzogdHJ1ZSwgLy8gbWFrZXMgdGhlIG5vdGlmaWNhdGlvbiBvbmdvaW5nIChBbmRyb2lkIG9ubHkpXHJcbiAgICAgICAgICAgIHNtYWxsSWNvbjogJ3JlczovL2hlYXJ0JyxcclxuICAgICAgICAgICAgc291bmQ6IFwiY3VzdG9tc291bmQtaW9zLndhdlwiLCAvLyBmYWxscyBiYWNrIHRvIHRoZSBkZWZhdWx0IHNvdW5kIG9uIEFuZHJvaWRcclxuICAgICAgICAgIH1dKS50aGVuKFxyXG4gICAgICAgICAgICAgIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJOb3RpZmljYXRpb24gc2NoZWR1bGVkXCIpO1xyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgZnVuY3Rpb24oZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2NoZWR1bGluZyBlcnJvcjogXCIgKyBlcnJvcik7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgKVxyXG5cclxuICAgIH1cclxufVxyXG5leHBvcnQgY2xhc3Mgc3RhdGlzdGljVXNlciB7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICB2YWx1ZTogc3RyaW5nO1xyXG59Il19