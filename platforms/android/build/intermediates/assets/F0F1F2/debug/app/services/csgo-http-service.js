"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
var CSGOHttpGetService = (function () {
    function CSGOHttpGetService(http) {
        this.http = http;
        this._apiKey = '6B7AF279CBF33E0D7AE254E9236FCF99';
        this._apiKey2 = '9B2266D26FF1EEA14F77DFA355BF8FFB';
        this._appid = '730';
        this._serverUrl = "http://api.steampowered.com";
    }
    // http://steamcommunity.com/groups/Valve/memberslistxml?xml=1
    CSGOHttpGetService.prototype.getDataByUser = function (idUser) {
        idUser = "76561198224522144";
        var endPoint = '/ISteamUserStats/GetUserStatsForGame/v0002';
        return this.http.get("" + this._serverUrl + endPoint + "/?appid=" + this._appid + "&key=" + this._apiKey + "&steamid=" + idUser).map(function (res) { return res.json().playerstats.stats; });
    };
    CSGOHttpGetService.prototype.getUserStatus = function (idUser) {
        // https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/?key=9B2266D26FF1EEA14F77DFA355BF8FFB&steamids=76561198224522144
        idUser = "76561198224522144";
        var endPoint = '/ISteamUser/GetPlayerSummaries/v2';
        //const url = "https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/?key=9B2266D26FF1EEA14F77DFA355BF8FFB&steamids=76561198224522144"
        return this.http.get("" + this._serverUrl + endPoint + "/?key=" + this._apiKey2 + "&steamids=" + idUser).map(function (res) { return res.json().response.players; });
    };
    CSGOHttpGetService.prototype.getMemberList = function (groupName) {
    };
    CSGOHttpGetService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], CSGOHttpGetService);
    return CSGOHttpGetService;
}());
exports.CSGOHttpGetService = CSGOHttpGetService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3Nnby1odHRwLXNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjc2dvLWh0dHAtc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyxzQ0FBd0Q7QUFHeEQsaUNBQStCO0FBQy9CLGdDQUE4QjtBQUc5QjtJQUtJLDRCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUp0QixZQUFPLEdBQUcsa0NBQWtDLENBQUM7UUFDN0MsYUFBUSxHQUFHLGtDQUFrQyxDQUFDO1FBQzlDLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFDZixlQUFVLEdBQUcsNkJBQTZCLENBQUM7SUFDakIsQ0FBQztJQUNuQyw4REFBOEQ7SUFDOUQsMENBQWEsR0FBYixVQUFjLE1BQWM7UUFDeEIsTUFBTSxHQUFHLG1CQUFtQixDQUFDO1FBQzdCLElBQU0sUUFBUSxHQUFHLDRDQUE0QyxDQUFDO1FBQzlELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsUUFBUSxnQkFBVyxJQUFJLENBQUMsTUFBTSxhQUFRLElBQUksQ0FBQyxPQUFPLGlCQUFZLE1BQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUE1QixDQUE0QixDQUFDLENBQUM7SUFDL0osQ0FBQztJQUNELDBDQUFhLEdBQWIsVUFBYyxNQUFjO1FBQ3hCLGlJQUFpSTtRQUNqSSxNQUFNLEdBQUcsbUJBQW1CLENBQUM7UUFDN0IsSUFBTSxRQUFRLEdBQUcsbUNBQW1DLENBQUM7UUFDckQsOElBQThJO1FBQzlJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsUUFBUSxjQUFTLElBQUksQ0FBQyxRQUFRLGtCQUFhLE1BQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUEzQixDQUEyQixDQUFDLENBQUM7SUFDM0ksQ0FBQztJQUVELDBDQUFhLEdBQWIsVUFBYyxTQUFpQjtJQUUvQixDQUFDO0lBdEJRLGtCQUFrQjtRQUQ5QixpQkFBVSxFQUFFO3lDQU1pQixXQUFJO09BTHJCLGtCQUFrQixDQXdCOUI7SUFBRCx5QkFBQztDQUFBLEFBeEJELElBd0JDO0FBeEJZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgYXMgUnhPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5cclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2RvXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBDU0dPSHR0cEdldFNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBfYXBpS2V5ID0gJzZCN0FGMjc5Q0JGMzNFMEQ3QUUyNTRFOTIzNkZDRjk5JztcclxuICAgIHByaXZhdGUgX2FwaUtleTIgPSAnOUIyMjY2RDI2RkYxRUVBMTRGNzdERkEzNTVCRjhGRkInO1xyXG4gICAgcHJpdmF0ZSBfYXBwaWQgPSAnNzMwJztcclxuICAgIHByaXZhdGUgX3NlcnZlclVybCA9IFwiaHR0cDovL2FwaS5zdGVhbXBvd2VyZWQuY29tXCI7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHsgfVxyXG4gICAgLy8gaHR0cDovL3N0ZWFtY29tbXVuaXR5LmNvbS9ncm91cHMvVmFsdmUvbWVtYmVyc2xpc3R4bWw/eG1sPTFcclxuICAgIGdldERhdGFCeVVzZXIoaWRVc2VyOiBzdHJpbmcpIHtcclxuICAgICAgICBpZFVzZXIgPSBcIjc2NTYxMTk4MjI0NTIyMTQ0XCI7XHJcbiAgICAgICAgY29uc3QgZW5kUG9pbnQgPSAnL0lTdGVhbVVzZXJTdGF0cy9HZXRVc2VyU3RhdHNGb3JHYW1lL3YwMDAyJztcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChgJHt0aGlzLl9zZXJ2ZXJVcmx9JHtlbmRQb2ludH0vP2FwcGlkPSR7dGhpcy5fYXBwaWR9JmtleT0ke3RoaXMuX2FwaUtleX0mc3RlYW1pZD0ke2lkVXNlcn1gKS5tYXAocmVzID0+IHJlcy5qc29uKCkucGxheWVyc3RhdHMuc3RhdHMpO1xyXG4gICAgfVxyXG4gICAgZ2V0VXNlclN0YXR1cyhpZFVzZXI6IHN0cmluZykge1xyXG4gICAgICAgIC8vIGh0dHBzOi8vYXBpLnN0ZWFtcG93ZXJlZC5jb20vSVN0ZWFtVXNlci9HZXRQbGF5ZXJTdW1tYXJpZXMvdjIvP2tleT05QjIyNjZEMjZGRjFFRUExNEY3N0RGQTM1NUJGOEZGQiZzdGVhbWlkcz03NjU2MTE5ODIyNDUyMjE0NFxyXG4gICAgICAgIGlkVXNlciA9IFwiNzY1NjExOTgyMjQ1MjIxNDRcIjtcclxuICAgICAgICBjb25zdCBlbmRQb2ludCA9ICcvSVN0ZWFtVXNlci9HZXRQbGF5ZXJTdW1tYXJpZXMvdjInO1xyXG4gICAgICAgIC8vY29uc3QgdXJsID0gXCJodHRwczovL2FwaS5zdGVhbXBvd2VyZWQuY29tL0lTdGVhbVVzZXIvR2V0UGxheWVyU3VtbWFyaWVzL3YyLz9rZXk9OUIyMjY2RDI2RkYxRUVBMTRGNzdERkEzNTVCRjhGRkImc3RlYW1pZHM9NzY1NjExOTgyMjQ1MjIxNDRcIlxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMuX3NlcnZlclVybH0ke2VuZFBvaW50fS8/a2V5PSR7dGhpcy5fYXBpS2V5Mn0mc3RlYW1pZHM9JHtpZFVzZXJ9YCkubWFwKHJlcyA9PiByZXMuanNvbigpLnJlc3BvbnNlLnBsYXllcnMpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE1lbWJlckxpc3QoZ3JvdXBOYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbn0iXX0=