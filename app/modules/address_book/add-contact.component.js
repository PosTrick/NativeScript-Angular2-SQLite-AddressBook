"use strict";
var core_1 = require("@angular/core");
var database_service_1 = require("../../services/database.service");
var router_1 = require("nativescript-angular/router");
var AddContactComponent = (function () {
    function AddContactComponent(databaseService, nav) {
        this.databaseService = databaseService;
        this.nav = nav;
        this.address = {
            username: '',
            number: ''
        };
    }
    AddContactComponent.prototype.ngOnInit = function () {
    };
    AddContactComponent.prototype.saveContact = function () {
        var _this = this;
        if (this.address.username !== '' &&
            this.address.number !== '') {
            this.databaseService.insert({ username: this.address.username, number: this.address.number }).then(function (res) {
                _this.nav.navigate(['/addressbook'], { clearHistory: true });
            });
        }
        else {
            alert("Fields are not valid");
        }
    };
    ;
    AddContactComponent.prototype.cancel = function () {
        this.nav.navigate(['/addressbook'], { clearHistory: true });
    };
    return AddContactComponent;
}());
AddContactComponent = __decorate([
    core_1.Component({
        selector: "ns-add-contact",
        moduleId: module.id,
        templateUrl: "add-contact.component.html",
    }),
    __metadata("design:paramtypes", [database_service_1.DatabaseService,
        router_1.RouterExtensions])
], AddContactComponent);
exports.AddContactComponent = AddContactComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWNvbnRhY3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWRkLWNvbnRhY3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBa0Q7QUFHbEQsb0VBQWdFO0FBQ2hFLHNEQUE2RDtBQU83RCxJQUFhLG1CQUFtQjtJQUs1Qiw2QkFBb0IsZUFBZ0MsRUFDaEMsR0FBcUI7UUFEckIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLFFBQUcsR0FBSCxHQUFHLENBQWtCO1FBQ3JDLElBQUksQ0FBQyxPQUFPLEdBQUc7WUFDWCxRQUFRLEVBQUUsRUFBRTtZQUNaLE1BQU0sRUFBRSxFQUFFO1NBQ2IsQ0FBQTtJQUNMLENBQUM7SUFFRCxzQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUVNLHlDQUFXLEdBQWxCO1FBQUEsaUJBV0M7UUFWRyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsS0FBSyxFQUFFO1lBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDN0IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQ3ZCLEVBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBQyxDQUNqRSxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUc7Z0JBQ04sS0FBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxjQUFjLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQ2hFLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDbEMsQ0FBQztJQUNMLENBQUM7SUFBQSxDQUFDO0lBRUssb0NBQU0sR0FBYjtRQUNJLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsY0FBYyxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBQ0wsMEJBQUM7QUFBRCxDQUFDLEFBaENELElBZ0NDO0FBaENZLG1CQUFtQjtJQUwvQixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGdCQUFnQjtRQUMxQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsV0FBVyxFQUFFLDRCQUE0QjtLQUM1QyxDQUFDO3FDQU11QyxrQ0FBZTtRQUMzQix5QkFBZ0I7R0FOaEMsbUJBQW1CLENBZ0MvQjtBQWhDWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge0xvY2F0aW9ufSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQge0FkZHJlc3N9IGZyb20gXCIuLi8uLi9tb2RlbC9hZGRyZXNzLm1vZGVsXCI7XG5pbXBvcnQge0RhdGFiYXNlU2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2RhdGFiYXNlLnNlcnZpY2VcIjtcbmltcG9ydCB7Um91dGVyRXh0ZW5zaW9uc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1hZGQtY29udGFjdFwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiYWRkLWNvbnRhY3QuY29tcG9uZW50Lmh0bWxcIixcbn0pXG5leHBvcnQgY2xhc3MgQWRkQ29udGFjdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBwdWJsaWMgYWRkcmVzczogQWRkcmVzcztcbiAgICBsb2NhdGlvbjogTG9jYXRpb247XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhdGFiYXNlU2VydmljZTogRGF0YWJhc2VTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgbmF2OiBSb3V0ZXJFeHRlbnNpb25zKSB7XG4gICAgICAgIHRoaXMuYWRkcmVzcyA9IHtcbiAgICAgICAgICAgIHVzZXJuYW1lOiAnJyxcbiAgICAgICAgICAgIG51bWJlcjogJydcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIH1cblxuICAgIHB1YmxpYyBzYXZlQ29udGFjdCgpIHtcbiAgICAgICAgaWYodGhpcy5hZGRyZXNzLnVzZXJuYW1lICE9PSAnJyAmJlxuICAgICAgICAgICAgdGhpcy5hZGRyZXNzLm51bWJlciAhPT0gJycpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YWJhc2VTZXJ2aWNlLmluc2VydChcbiAgICAgICAgICAgICAgICB7dXNlcm5hbWU6IHRoaXMuYWRkcmVzcy51c2VybmFtZSwgbnVtYmVyOiB0aGlzLmFkZHJlc3MubnVtYmVyfVxuICAgICAgICAgICAgKS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXYubmF2aWdhdGUoWycvYWRkcmVzc2Jvb2snXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiRmllbGRzIGFyZSBub3QgdmFsaWRcIik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcHVibGljIGNhbmNlbCgpIHtcbiAgICAgICAgdGhpcy5uYXYubmF2aWdhdGUoWycvYWRkcmVzc2Jvb2snXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XG4gICAgfVxufVxuIl19