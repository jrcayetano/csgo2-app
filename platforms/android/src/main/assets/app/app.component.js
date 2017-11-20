"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var csgo_http_service_1 = require("./services/csgo-http-service");
var core_1 = require("@angular/core");
var Rx_1 = require("rxjs/Rx");
var LocalNotifications = require("nativescript-local-notifications");
var AppComponent = (function () {
    function AppComponent(csgoSrv) {
        this.csgoSrv = csgoSrv;
        this.avisado = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        Rx_1.Observable.interval(500 * 60).subscribe(function (x) {
            _this.csgoSrv.getUserStatus('76561198224522144').subscribe(function (dataUserStatus) {
                _this.userStatus = dataUserStatus;
                console.log('Barrido');
                // this._sendNotification();
                // console.dir(this.userStatus);
                if (!_this.avisado && _this.userStatus[0]['gameid'] && _this.userStatus[0]['gameid'] === '730') {
                    console.log('notifica');
                    _this._sendNotification('Usuario conectado a CSGO');
                    _this.avisado = true;
                }
                else {
                    if (_this.avisado && (!_this.userStatus[0]['gameid'] || (_this.userStatus[0]['gameid'] && _this.userStatus[0]['gameid'] !== '730'))) {
                        console.log('NO NOTIFICA');
                        _this.avisado = false;
                        _this._sendNotification('Usuario desconectado de CSGO');
                    }
                }
            }, function (error) {
                console.log(error);
            });
        });
    };
    AppComponent.prototype._sendNotification = function (mensaje) {
        LocalNotifications.schedule([{
                id: 1,
                title: 'CSGO Emergya',
                body: mensaje,
                badge: 1,
                smallIcon: 'res://heart',
                sound: "customsound-ios.wav",
            }]).then(function () {
            console.log("Notification scheduled");
        }, function (error) {
            console.log("scheduling error: " + error);
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "ns-app",
            templateUrl: "app.component.html",
        }),
        __metadata("design:paramtypes", [csgo_http_service_1.CSGOHttpGetService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxrRUFBa0U7QUFDbEUsc0NBQWtEO0FBQ2xELDhCQUFtQztBQUNuQyxxRUFBdUU7QUFPdkU7SUFHSSxzQkFBb0IsT0FBMEI7UUFBMUIsWUFBTyxHQUFQLE9BQU8sQ0FBbUI7UUFEOUMsWUFBTyxHQUFHLEtBQUssQ0FBQztJQUNpQyxDQUFDO0lBQ2xELCtCQUFRLEdBQVI7UUFBQSxpQkF1QkM7UUF0QkcsZUFBVSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFFLFVBQUEsQ0FBQztZQUN0QyxLQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLGNBQWM7Z0JBQ3BFLEtBQUksQ0FBQyxVQUFVLEdBQUcsY0FBYyxDQUFDO2dCQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUN2Qiw0QkFBNEI7Z0JBQzVCLGdDQUFnQztnQkFDaEMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsT0FBTyxJQUFJLEtBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksS0FBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDO29CQUMxRixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO29CQUN4QixLQUFJLENBQUMsaUJBQWlCLENBQUMsMEJBQTBCLENBQUMsQ0FBQztvQkFDbkQsS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7Z0JBQ3hCLENBQUM7Z0JBQUEsSUFBSSxDQUFDLENBQUM7b0JBQ0gsRUFBRSxDQUFBLENBQUMsS0FBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksS0FBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxLQUFLLENBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDOUgsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQzt3QkFDM0IsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7d0JBQ3JCLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO29CQUMzRCxDQUFDO2dCQUVMLENBQUM7WUFDTCxDQUFDLEVBQUUsVUFBQSxLQUFLO2dCQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdkIsQ0FBQyxDQUFDLENBQUE7UUFDTixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFDTyx3Q0FBaUIsR0FBekIsVUFBMEIsT0FBZTtRQUNyQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDekIsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsS0FBSyxFQUFFLGNBQWM7Z0JBQ3JCLElBQUksRUFBRSxPQUFPO2dCQUNiLEtBQUssRUFBRSxDQUFDO2dCQUNSLFNBQVMsRUFBRSxhQUFhO2dCQUN4QixLQUFLLEVBQUUscUJBQXFCO2FBQzdCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FDSjtZQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUN4QyxDQUFDLEVBQ0QsVUFBUyxLQUFLO1lBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsR0FBRyxLQUFLLENBQUMsQ0FBQztRQUM1QyxDQUFDLENBQ0osQ0FBQTtJQUVQLENBQUM7SUE3Q1EsWUFBWTtRQUx4QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLG9CQUFvQjtTQUNwQyxDQUFDO3lDQUs4QixzQ0FBa0I7T0FIckMsWUFBWSxDQThDdkI7SUFBRCxtQkFBQztDQUFBLEFBOUNGLElBOENFO0FBOUNXLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ1NHT0h0dHBHZXRTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9jc2dvLWh0dHAtc2VydmljZSc7XG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvUngnO1xuaW1wb3J0ICogYXMgTG9jYWxOb3RpZmljYXRpb25zIGZyb20gXCJuYXRpdmVzY3JpcHQtbG9jYWwtbm90aWZpY2F0aW9uc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1hcHBcIixcbiAgICB0ZW1wbGF0ZVVybDogXCJhcHAuY29tcG9uZW50Lmh0bWxcIixcbn0pXG5cbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHVzZXJTdGF0dXM7XG4gICAgYXZpc2FkbyA9IGZhbHNlO1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY3Nnb1NydjpDU0dPSHR0cEdldFNlcnZpY2UpIHt9XG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIE9ic2VydmFibGUuaW50ZXJ2YWwoNTAwICogNjApLnN1YnNjcmliZSggeCA9PiB7XG4gICAgICAgICAgICB0aGlzLmNzZ29TcnYuZ2V0VXNlclN0YXR1cygnNzY1NjExOTgyMjQ1MjIxNDQnKS5zdWJzY3JpYmUoZGF0YVVzZXJTdGF0dXMgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudXNlclN0YXR1cyA9IGRhdGFVc2VyU3RhdHVzO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdCYXJyaWRvJyk7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5fc2VuZE5vdGlmaWNhdGlvbigpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUuZGlyKHRoaXMudXNlclN0YXR1cyk7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmF2aXNhZG8gJiYgdGhpcy51c2VyU3RhdHVzWzBdWydnYW1laWQnXSAmJiB0aGlzLnVzZXJTdGF0dXNbMF1bJ2dhbWVpZCddID09PSAnNzMwJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbm90aWZpY2EnKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2VuZE5vdGlmaWNhdGlvbignVXN1YXJpbyBjb25lY3RhZG8gYSBDU0dPJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXZpc2FkbyA9IHRydWU7XG4gICAgICAgICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmF2aXNhZG8gJiYgKCF0aGlzLnVzZXJTdGF0dXNbMF1bJ2dhbWVpZCddIHx8ICh0aGlzLnVzZXJTdGF0dXNbMF1bJ2dhbWVpZCddICYmIHRoaXMudXNlclN0YXR1c1swXVsnZ2FtZWlkJ10gIT09ICc3MzAnICkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTk8gTk9USUZJQ0EnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXZpc2FkbyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2VuZE5vdGlmaWNhdGlvbignVXN1YXJpbyBkZXNjb25lY3RhZG8gZGUgQ1NHTycpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxuICAgIHByaXZhdGUgX3NlbmROb3RpZmljYXRpb24obWVuc2FqZTogc3RyaW5nKSB7XG4gICAgICAgIExvY2FsTm90aWZpY2F0aW9ucy5zY2hlZHVsZShbe1xuICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICB0aXRsZTogJ0NTR08gRW1lcmd5YScsXG4gICAgICAgICAgICBib2R5OiBtZW5zYWplLFxuICAgICAgICAgICAgYmFkZ2U6IDEsXG4gICAgICAgICAgICBzbWFsbEljb246ICdyZXM6Ly9oZWFydCcsXG4gICAgICAgICAgICBzb3VuZDogXCJjdXN0b21zb3VuZC1pb3Mud2F2XCIsIC8vIGZhbGxzIGJhY2sgdG8gdGhlIGRlZmF1bHQgc291bmQgb24gQW5kcm9pZFxuICAgICAgICAgIH1dKS50aGVuKFxuICAgICAgICAgICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5vdGlmaWNhdGlvbiBzY2hlZHVsZWRcIik7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzY2hlZHVsaW5nIGVycm9yOiBcIiArIGVycm9yKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIClcblxuICAgIH1cbiB9XG4iXX0=