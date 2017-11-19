"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var item_service_1 = require("./item.service");
var csgo_http_service_1 = require("../services/csgo-http-service");
var Rx_1 = require("rxjs/Rx");
var LocalNotifications = require("nativescript-local-notifications");
var Xml2js = require("nativescript-xml2js");
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
        Xml2js.parseString('<root>Hellooo</root>', function (err, result) {
            console.dir(result);
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBR2xELCtDQUE2QztBQUM3QyxtRUFBbUU7QUFDbkUsOEJBQW1DO0FBRW5DLHFFQUF1RTtBQUN2RSw0Q0FBOEM7QUFPOUM7SUFLSSw2SUFBNkk7SUFDN0ksaUhBQWlIO0lBQ2pILHdCQUFvQixXQUF3QixFQUFVLE9BQTBCO1FBQTVELGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBbUI7UUFIaEYsWUFBTyxHQUFJLEtBQUssQ0FBQztJQUdtRSxDQUFDO0lBRXJGLGlDQUFRLEdBQVI7UUFBQSxpQkEwQkM7UUF6QkcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxzQkFBc0IsRUFBRSxVQUFDLEdBQUcsRUFBRSxNQUFNO1lBQ25ELE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDeEIsQ0FBQyxDQUFFLENBQUM7UUFDSixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDekMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsUUFBUTtZQUMvQyxLQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztRQUMxQixDQUFDLEVBQUUsVUFBQSxLQUFLO1lBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQTtRQUNGLGVBQVUsQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBRSxVQUFBLENBQUM7WUFDdEMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsY0FBYztnQkFDckQsS0FBSSxDQUFDLFVBQVUsR0FBRyxjQUFjLENBQUM7Z0JBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUM3Qiw0QkFBNEI7Z0JBQzVCLGdDQUFnQztnQkFDaEMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsT0FBTyxJQUFJLEtBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksS0FBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDO29CQUMxRixLQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztvQkFDekIsS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7Z0JBQ3hCLENBQUM7WUFDTCxDQUFDLEVBQUUsVUFBQSxLQUFLO2dCQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdkIsQ0FBQyxDQUFDLENBQUE7UUFDTixDQUFDLENBQUMsQ0FBQTtJQUdOLENBQUM7SUFFTywwQ0FBaUIsR0FBekI7UUFDSSxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDekIsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsS0FBSyxFQUFFLDBCQUEwQjtnQkFDakMsSUFBSSxFQUFFLDJDQUEyQztnQkFDakQsS0FBSyxFQUFFLENBQUM7Z0JBQ1IsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsU0FBUyxFQUFFLGFBQWE7Z0JBQ3hCLEtBQUssRUFBRSxxQkFBcUI7YUFDN0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUNKO1lBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsRUFDRCxVQUFTLEtBQUs7WUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixHQUFHLEtBQUssQ0FBQyxDQUFDO1FBQzVDLENBQUMsQ0FDSixDQUFBO0lBRVAsQ0FBQztJQXZEUSxjQUFjO1FBTDFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtTQUN4QyxDQUFDO3lDQVFtQywwQkFBVyxFQUFrQixzQ0FBa0I7T0FQdkUsY0FBYyxDQXdEMUI7SUFBRCxxQkFBQztDQUFBLEFBeERELElBd0RDO0FBeERZLHdDQUFjO0FBeUQzQjtJQUFBO0lBR0EsQ0FBQztJQUFELG9CQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7QUFIWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmltcG9ydCB7IEl0ZW0gfSBmcm9tIFwiLi9pdGVtXCI7XHJcbmltcG9ydCB7IEl0ZW1TZXJ2aWNlIH0gZnJvbSBcIi4vaXRlbS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IENTR09IdHRwR2V0U2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9jc2dvLWh0dHAtc2VydmljZVwiO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvUngnO1xyXG5pbXBvcnQgKiBhcyBEaWFsb2dzIGZyb20gXCJ1aS9kaWFsb2dzXCI7XHJcbmltcG9ydCAqIGFzIExvY2FsTm90aWZpY2F0aW9ucyBmcm9tIFwibmF0aXZlc2NyaXB0LWxvY2FsLW5vdGlmaWNhdGlvbnNcIjtcclxuaW1wb3J0ICogYXMgWG1sMmpzIGZyb20gJ25hdGl2ZXNjcmlwdC14bWwyanMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJucy1pdGVtc1wiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaXRlbXMuY29tcG9uZW50Lmh0bWxcIixcclxufSlcclxuZXhwb3J0IGNsYXNzIEl0ZW1zQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGl0ZW1zOiBJdGVtW107XHJcbiAgICBkYXRvczpzdGF0aXN0aWNVc2VyO1xyXG4gICAgdXNlclN0YXR1cztcclxuICAgIGF2aXNhZG8gPSAgZmFsc2U7XHJcbiAgICAvLyBUaGlzIHBhdHRlcm4gbWFrZXMgdXNlIG9mIEFuZ3VsYXLigJlzIGRlcGVuZGVuY3kgaW5qZWN0aW9uIGltcGxlbWVudGF0aW9uIHRvIGluamVjdCBhbiBpbnN0YW5jZSBvZiB0aGUgSXRlbVNlcnZpY2Ugc2VydmljZSBpbnRvIHRoaXMgY2xhc3MuIFxyXG4gICAgLy8gQW5ndWxhciBrbm93cyBhYm91dCB0aGlzIHNlcnZpY2UgYmVjYXVzZSBpdCBpcyBpbmNsdWRlZCBpbiB5b3VyIGFwcOKAmXMgbWFpbiBOZ01vZHVsZSwgZGVmaW5lZCBpbiBhcHAubW9kdWxlLnRzLlxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBpdGVtU2VydmljZTogSXRlbVNlcnZpY2UsIHByaXZhdGUgY3Nnb1NydjpDU0dPSHR0cEdldFNlcnZpY2UpIHsgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIFhtbDJqcy5wYXJzZVN0cmluZygnPHJvb3Q+SGVsbG9vbzwvcm9vdD4nLCAoZXJyLCByZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5kaXIocmVzdWx0KTtcclxuICAgICAgICB9ICk7XHJcbiAgICAgICAgdGhpcy5pdGVtcyA9IHRoaXMuaXRlbVNlcnZpY2UuZ2V0SXRlbXMoKTtcclxuICAgICAgICB0aGlzLmNzZ29TcnYuZ2V0RGF0YUJ5VXNlcignaWQnKS5zdWJzY3JpYmUoZGF0YVVzZXIgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmRhdG9zID0gZGF0YVVzZXI7XHJcbiAgICAgICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBPYnNlcnZhYmxlLmludGVydmFsKDUwMCAqIDYwKS5zdWJzY3JpYmUoIHggPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNzZ29TcnYuZ2V0VXNlclN0YXR1cygnaWQnKS5zdWJzY3JpYmUoZGF0YVVzZXJTdGF0dXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51c2VyU3RhdHVzID0gZGF0YVVzZXJTdGF0dXM7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmRpcih0aGlzLnVzZXJTdGF0dXMpO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5fc2VuZE5vdGlmaWNhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5kaXIodGhpcy51c2VyU3RhdHVzKTtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5hdmlzYWRvICYmIHRoaXMudXNlclN0YXR1c1swXVsnZ2FtZWlkJ10gJiYgdGhpcy51c2VyU3RhdHVzWzBdWydnYW1laWQnXSA9PT0gJzczMCcpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zZW5kTm90aWZpY2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hdmlzYWRvID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgICBcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9zZW5kTm90aWZpY2F0aW9uKCkge1xyXG4gICAgICAgIExvY2FsTm90aWZpY2F0aW9ucy5zY2hlZHVsZShbe1xyXG4gICAgICAgICAgICBpZDogMSxcclxuICAgICAgICAgICAgdGl0bGU6ICdVc3VhcmlvIGNvbmVjdGFkbyBhIENTR08nLFxyXG4gICAgICAgICAgICBib2R5OiAnRWwgdXN1YXJpbyBhY2FiYSBkZSBpbmNpYXIgc2VzacOzbiBlbiBDU0dPJyxcclxuICAgICAgICAgICAgYmFkZ2U6IDEsXHJcbiAgICAgICAgICAgIG9uZ29pbmc6IHRydWUsIC8vIG1ha2VzIHRoZSBub3RpZmljYXRpb24gb25nb2luZyAoQW5kcm9pZCBvbmx5KVxyXG4gICAgICAgICAgICBzbWFsbEljb246ICdyZXM6Ly9oZWFydCcsXHJcbiAgICAgICAgICAgIHNvdW5kOiBcImN1c3RvbXNvdW5kLWlvcy53YXZcIiwgLy8gZmFsbHMgYmFjayB0byB0aGUgZGVmYXVsdCBzb3VuZCBvbiBBbmRyb2lkXHJcbiAgICAgICAgICB9XSkudGhlbihcclxuICAgICAgICAgICAgICBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTm90aWZpY2F0aW9uIHNjaGVkdWxlZFwiKTtcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIGZ1bmN0aW9uKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInNjaGVkdWxpbmcgZXJyb3I6IFwiICsgZXJyb3IpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIClcclxuXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIHN0YXRpc3RpY1VzZXIge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgdmFsdWU6IHN0cmluZztcclxufSJdfQ==