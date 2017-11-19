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
                console.dir(_this.userStatus);
                // this._sendNotification();
                // console.dir(this.userStatus);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBR2xELCtDQUE2QztBQUM3QyxtRUFBbUU7QUFDbkUsOEJBQW1DO0FBRW5DLHFFQUF1RTtBQU92RTtJQUtJLDZJQUE2STtJQUM3SSxpSEFBaUg7SUFDakgsd0JBQW9CLFdBQXdCLEVBQVUsT0FBMEI7UUFBNUQsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFtQjtRQUhoRixZQUFPLEdBQUksS0FBSyxDQUFDO0lBR21FLENBQUM7SUFFckYsaUNBQVEsR0FBUjtRQUFBLGlCQXVCQztRQXRCRyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDekMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsUUFBUTtZQUMvQyxLQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztRQUMxQixDQUFDLEVBQUUsVUFBQSxLQUFLO1lBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQTtRQUNGLGVBQVUsQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBRSxVQUFBLENBQUM7WUFDdEMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsY0FBYztnQkFDckQsS0FBSSxDQUFDLFVBQVUsR0FBRyxjQUFjLENBQUM7Z0JBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUM3Qiw0QkFBNEI7Z0JBQzVCLGdDQUFnQztnQkFDaEMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsT0FBTyxJQUFJLEtBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksS0FBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDO29CQUMxRixLQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztvQkFDekIsS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7Z0JBQ3hCLENBQUM7WUFDTCxDQUFDLEVBQUUsVUFBQSxLQUFLO2dCQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdkIsQ0FBQyxDQUFDLENBQUE7UUFDTixDQUFDLENBQUMsQ0FBQTtJQUdOLENBQUM7SUFFTywwQ0FBaUIsR0FBekI7UUFDSSxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDekIsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsS0FBSyxFQUFFLDBCQUEwQjtnQkFDakMsSUFBSSxFQUFFLDJDQUEyQztnQkFDakQsS0FBSyxFQUFFLENBQUM7Z0JBQ1IsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsU0FBUyxFQUFFLGFBQWE7Z0JBQ3hCLEtBQUssRUFBRSxxQkFBcUI7YUFDN0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUNKO1lBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsRUFDRCxVQUFTLEtBQUs7WUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixHQUFHLEtBQUssQ0FBQyxDQUFDO1FBQzVDLENBQUMsQ0FDSixDQUFBO0lBRVAsQ0FBQztJQXBEUSxjQUFjO1FBTDFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtTQUN4QyxDQUFDO3lDQVFtQywwQkFBVyxFQUFrQixzQ0FBa0I7T0FQdkUsY0FBYyxDQXFEMUI7SUFBRCxxQkFBQztDQUFBLEFBckRELElBcURDO0FBckRZLHdDQUFjO0FBc0QzQjtJQUFBO0lBR0EsQ0FBQztJQUFELG9CQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7QUFIWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmltcG9ydCB7IEl0ZW0gfSBmcm9tIFwiLi9pdGVtXCI7XHJcbmltcG9ydCB7IEl0ZW1TZXJ2aWNlIH0gZnJvbSBcIi4vaXRlbS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IENTR09IdHRwR2V0U2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9jc2dvLWh0dHAtc2VydmljZVwiO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvUngnO1xyXG5pbXBvcnQgKiBhcyBEaWFsb2dzIGZyb20gXCJ1aS9kaWFsb2dzXCI7XHJcbmltcG9ydCAqIGFzIExvY2FsTm90aWZpY2F0aW9ucyBmcm9tIFwibmF0aXZlc2NyaXB0LWxvY2FsLW5vdGlmaWNhdGlvbnNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwibnMtaXRlbXNcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2l0ZW1zLmNvbXBvbmVudC5odG1sXCIsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJdGVtc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBpdGVtczogSXRlbVtdO1xyXG4gICAgZGF0b3M6c3RhdGlzdGljVXNlcjtcclxuICAgIHVzZXJTdGF0dXM7XHJcbiAgICBhdmlzYWRvID0gIGZhbHNlO1xyXG4gICAgLy8gVGhpcyBwYXR0ZXJuIG1ha2VzIHVzZSBvZiBBbmd1bGFy4oCZcyBkZXBlbmRlbmN5IGluamVjdGlvbiBpbXBsZW1lbnRhdGlvbiB0byBpbmplY3QgYW4gaW5zdGFuY2Ugb2YgdGhlIEl0ZW1TZXJ2aWNlIHNlcnZpY2UgaW50byB0aGlzIGNsYXNzLiBcclxuICAgIC8vIEFuZ3VsYXIga25vd3MgYWJvdXQgdGhpcyBzZXJ2aWNlIGJlY2F1c2UgaXQgaXMgaW5jbHVkZWQgaW4geW91ciBhcHDigJlzIG1haW4gTmdNb2R1bGUsIGRlZmluZWQgaW4gYXBwLm1vZHVsZS50cy5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaXRlbVNlcnZpY2U6IEl0ZW1TZXJ2aWNlLCBwcml2YXRlIGNzZ29TcnY6Q1NHT0h0dHBHZXRTZXJ2aWNlKSB7IH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLml0ZW1zID0gdGhpcy5pdGVtU2VydmljZS5nZXRJdGVtcygpO1xyXG4gICAgICAgIHRoaXMuY3Nnb1Nydi5nZXREYXRhQnlVc2VyKCdpZCcpLnN1YnNjcmliZShkYXRhVXNlciA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0b3MgPSBkYXRhVXNlcjtcclxuICAgICAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIE9ic2VydmFibGUuaW50ZXJ2YWwoNTAwICogNjApLnN1YnNjcmliZSggeCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY3Nnb1Nydi5nZXRVc2VyU3RhdHVzKCdpZCcpLnN1YnNjcmliZShkYXRhVXNlclN0YXR1cyA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJTdGF0dXMgPSBkYXRhVXNlclN0YXR1cztcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZGlyKHRoaXMudXNlclN0YXR1cyk7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLl9zZW5kTm90aWZpY2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmRpcih0aGlzLnVzZXJTdGF0dXMpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmF2aXNhZG8gJiYgdGhpcy51c2VyU3RhdHVzWzBdWydnYW1laWQnXSAmJiB0aGlzLnVzZXJTdGF0dXNbMF1bJ2dhbWVpZCddID09PSAnNzMwJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NlbmROb3RpZmljYXRpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmF2aXNhZG8gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3NlbmROb3RpZmljYXRpb24oKSB7XHJcbiAgICAgICAgTG9jYWxOb3RpZmljYXRpb25zLnNjaGVkdWxlKFt7XHJcbiAgICAgICAgICAgIGlkOiAxLFxyXG4gICAgICAgICAgICB0aXRsZTogJ1VzdWFyaW8gY29uZWN0YWRvIGEgQ1NHTycsXHJcbiAgICAgICAgICAgIGJvZHk6ICdFbCB1c3VhcmlvIGFjYWJhIGRlIGluY2lhciBzZXNpw7NuIGVuIENTR08nLFxyXG4gICAgICAgICAgICBiYWRnZTogMSxcclxuICAgICAgICAgICAgb25nb2luZzogdHJ1ZSwgLy8gbWFrZXMgdGhlIG5vdGlmaWNhdGlvbiBvbmdvaW5nIChBbmRyb2lkIG9ubHkpXHJcbiAgICAgICAgICAgIHNtYWxsSWNvbjogJ3JlczovL2hlYXJ0JyxcclxuICAgICAgICAgICAgc291bmQ6IFwiY3VzdG9tc291bmQtaW9zLndhdlwiLCAvLyBmYWxscyBiYWNrIHRvIHRoZSBkZWZhdWx0IHNvdW5kIG9uIEFuZHJvaWRcclxuICAgICAgICAgIH1dKS50aGVuKFxyXG4gICAgICAgICAgICAgIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJOb3RpZmljYXRpb24gc2NoZWR1bGVkXCIpO1xyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgZnVuY3Rpb24oZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2NoZWR1bGluZyBlcnJvcjogXCIgKyBlcnJvcik7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgKVxyXG5cclxuICAgIH1cclxufVxyXG5leHBvcnQgY2xhc3Mgc3RhdGlzdGljVXNlciB7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICB2YWx1ZTogc3RyaW5nO1xyXG59Il19