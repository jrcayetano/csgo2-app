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
        // idUser = "76561198224522144";
        var endPoint = '/ISteamUserStats/GetUserStatsForGame/v0002';
        return this.http.get("" + this._serverUrl + endPoint + "/?appid=" + this._appid + "&key=" + this._apiKey + "&steamid=" + idUser).map(function (res) { return res.json().playerstats.stats; });
    };
    CSGOHttpGetService.prototype.getUserStatus = function (idUser) {
        // https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/?key=9B2266D26FF1EEA14F77DFA355BF8FFB&steamids=76561198224522144
        //idUser = "76561198224522144";
        var endPoint = '/ISteamUser/GetPlayerSummaries/v2';
        //const url = "https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/?key=9B2266D26FF1EEA14F77DFA355BF8FFB&steamids=76561198224522144"
        return this.http.get("" + this._serverUrl + endPoint + "/?key=" + this._apiKey2 + "&steamids=" + idUser).map(function (res) { return res.json().response.players; });
    };
    CSGOHttpGetService.prototype.getMemberList = function (groupName) {
        var headerDict = {
            'Content-Type': 'text/xml',
            'Accept': 'application/xml'
        };
        var headerObj = {
            headers: new http_1.Headers(headerDict),
        };
        // http://steamcommunity.com/groups/Valve/memberslistxml?xml=1
        groupName = "3E-Gaming";
        return this.http.get("http://steamcommunity.com/groups/" + groupName + "/memberslistxml?xml=1", headerObj);
    };
    CSGOHttpGetService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], CSGOHttpGetService);
    return CSGOHttpGetService;
}());
exports.CSGOHttpGetService = CSGOHttpGetService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3Nnby1odHRwLXNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjc2dvLWh0dHAtc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyxzQ0FBd0Q7QUFHeEQsaUNBQStCO0FBQy9CLGdDQUE4QjtBQUc5QjtJQUtJLDRCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUp0QixZQUFPLEdBQUcsa0NBQWtDLENBQUM7UUFDN0MsYUFBUSxHQUFHLGtDQUFrQyxDQUFDO1FBQzlDLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFDZixlQUFVLEdBQUcsNkJBQTZCLENBQUM7SUFDakIsQ0FBQztJQUNuQyw4REFBOEQ7SUFDOUQsMENBQWEsR0FBYixVQUFjLE1BQWM7UUFDekIsZ0NBQWdDO1FBQy9CLElBQU0sUUFBUSxHQUFHLDRDQUE0QyxDQUFDO1FBQzlELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsUUFBUSxnQkFBVyxJQUFJLENBQUMsTUFBTSxhQUFRLElBQUksQ0FBQyxPQUFPLGlCQUFZLE1BQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUE1QixDQUE0QixDQUFDLENBQUM7SUFDL0osQ0FBQztJQUNELDBDQUFhLEdBQWIsVUFBYyxNQUFjO1FBQ3hCLGlJQUFpSTtRQUNqSSwrQkFBK0I7UUFDL0IsSUFBTSxRQUFRLEdBQUcsbUNBQW1DLENBQUM7UUFDckQsOElBQThJO1FBQzlJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsUUFBUSxjQUFTLElBQUksQ0FBQyxRQUFRLGtCQUFhLE1BQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUEzQixDQUEyQixDQUFDLENBQUM7SUFDM0ksQ0FBQztJQUVELDBDQUFhLEdBQWIsVUFBYyxTQUFpQjtRQUMzQixJQUFNLFVBQVUsR0FBRztZQUNmLGNBQWMsRUFBRSxVQUFVO1lBQzFCLFFBQVEsRUFBRSxpQkFBaUI7U0FDNUIsQ0FBQTtRQUVELElBQU0sU0FBUyxHQUFHO1lBQ2hCLE9BQU8sRUFBRSxJQUFJLGNBQU8sQ0FBQyxVQUFVLENBQUM7U0FDakMsQ0FBQztRQUNKLDhEQUE4RDtRQUM5RCxTQUFTLEdBQUcsV0FBVyxDQUFBO1FBQ3ZCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxzQ0FBb0MsU0FBUywwQkFBdUIsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUMxRyxDQUFDO0lBaENRLGtCQUFrQjtRQUQ5QixpQkFBVSxFQUFFO3lDQU1pQixXQUFJO09BTHJCLGtCQUFrQixDQW1DOUI7SUFBRCx5QkFBQztDQUFBLEFBbkNELElBbUNDO0FBbkNZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgYXMgUnhPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5cclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2RvXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBDU0dPSHR0cEdldFNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBfYXBpS2V5ID0gJzZCN0FGMjc5Q0JGMzNFMEQ3QUUyNTRFOTIzNkZDRjk5JztcclxuICAgIHByaXZhdGUgX2FwaUtleTIgPSAnOUIyMjY2RDI2RkYxRUVBMTRGNzdERkEzNTVCRjhGRkInO1xyXG4gICAgcHJpdmF0ZSBfYXBwaWQgPSAnNzMwJztcclxuICAgIHByaXZhdGUgX3NlcnZlclVybCA9IFwiaHR0cDovL2FwaS5zdGVhbXBvd2VyZWQuY29tXCI7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHsgfVxyXG4gICAgLy8gaHR0cDovL3N0ZWFtY29tbXVuaXR5LmNvbS9ncm91cHMvVmFsdmUvbWVtYmVyc2xpc3R4bWw/eG1sPTFcclxuICAgIGdldERhdGFCeVVzZXIoaWRVc2VyOiBzdHJpbmcpIHtcclxuICAgICAgIC8vIGlkVXNlciA9IFwiNzY1NjExOTgyMjQ1MjIxNDRcIjtcclxuICAgICAgICBjb25zdCBlbmRQb2ludCA9ICcvSVN0ZWFtVXNlclN0YXRzL0dldFVzZXJTdGF0c0ZvckdhbWUvdjAwMDInO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMuX3NlcnZlclVybH0ke2VuZFBvaW50fS8/YXBwaWQ9JHt0aGlzLl9hcHBpZH0ma2V5PSR7dGhpcy5fYXBpS2V5fSZzdGVhbWlkPSR7aWRVc2VyfWApLm1hcChyZXMgPT4gcmVzLmpzb24oKS5wbGF5ZXJzdGF0cy5zdGF0cyk7XHJcbiAgICB9XHJcbiAgICBnZXRVc2VyU3RhdHVzKGlkVXNlcjogc3RyaW5nKSB7XHJcbiAgICAgICAgLy8gaHR0cHM6Ly9hcGkuc3RlYW1wb3dlcmVkLmNvbS9JU3RlYW1Vc2VyL0dldFBsYXllclN1bW1hcmllcy92Mi8/a2V5PTlCMjI2NkQyNkZGMUVFQTE0Rjc3REZBMzU1QkY4RkZCJnN0ZWFtaWRzPTc2NTYxMTk4MjI0NTIyMTQ0XHJcbiAgICAgICAgLy9pZFVzZXIgPSBcIjc2NTYxMTk4MjI0NTIyMTQ0XCI7XHJcbiAgICAgICAgY29uc3QgZW5kUG9pbnQgPSAnL0lTdGVhbVVzZXIvR2V0UGxheWVyU3VtbWFyaWVzL3YyJztcclxuICAgICAgICAvL2NvbnN0IHVybCA9IFwiaHR0cHM6Ly9hcGkuc3RlYW1wb3dlcmVkLmNvbS9JU3RlYW1Vc2VyL0dldFBsYXllclN1bW1hcmllcy92Mi8/a2V5PTlCMjI2NkQyNkZGMUVFQTE0Rjc3REZBMzU1QkY4RkZCJnN0ZWFtaWRzPTc2NTYxMTk4MjI0NTIyMTQ0XCJcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChgJHt0aGlzLl9zZXJ2ZXJVcmx9JHtlbmRQb2ludH0vP2tleT0ke3RoaXMuX2FwaUtleTJ9JnN0ZWFtaWRzPSR7aWRVc2VyfWApLm1hcChyZXMgPT4gcmVzLmpzb24oKS5yZXNwb25zZS5wbGF5ZXJzKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRNZW1iZXJMaXN0KGdyb3VwTmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc3QgaGVhZGVyRGljdCA9IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICd0ZXh0L3htbCcsXHJcbiAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24veG1sJ1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICBcclxuICAgICAgICAgIGNvbnN0IGhlYWRlck9iaiA9IHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBuZXcgSGVhZGVycyhoZWFkZXJEaWN0KSxcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgLy8gaHR0cDovL3N0ZWFtY29tbXVuaXR5LmNvbS9ncm91cHMvVmFsdmUvbWVtYmVyc2xpc3R4bWw/eG1sPTFcclxuICAgICAgICBncm91cE5hbWUgPSBcIjNFLUdhbWluZ1wiXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYGh0dHA6Ly9zdGVhbWNvbW11bml0eS5jb20vZ3JvdXBzLyR7Z3JvdXBOYW1lfS9tZW1iZXJzbGlzdHhtbD94bWw9MWAsIGhlYWRlck9iaik7XHJcbiAgICB9XHJcbiBcclxuXHJcbn0iXX0=