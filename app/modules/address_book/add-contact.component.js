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
            this.databaseService.insert(this.address).then(function (res) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWNvbnRhY3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWRkLWNvbnRhY3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBa0Q7QUFFbEQsb0VBQWdFO0FBQ2hFLHNEQUE2RDtBQU83RCxJQUFhLG1CQUFtQjtJQUk1Qiw2QkFBb0IsZUFBZ0MsRUFDaEMsR0FBcUI7UUFEckIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLFFBQUcsR0FBSCxHQUFHLENBQWtCO1FBQ3JDLElBQUksQ0FBQyxPQUFPLEdBQUc7WUFDWCxRQUFRLEVBQUUsRUFBRTtZQUNaLE1BQU0sRUFBRSxFQUFFO1NBQ2IsQ0FBQTtJQUNMLENBQUM7SUFFRCxzQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUVNLHlDQUFXLEdBQWxCO1FBQUEsaUJBU0M7UUFSRyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsS0FBSyxFQUFFO1lBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDN0IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUc7Z0JBQzlDLEtBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsY0FBYyxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztZQUNoRSxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQ2xDLENBQUM7SUFDTCxDQUFDO0lBQUEsQ0FBQztJQUVLLG9DQUFNLEdBQWI7UUFDSSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUNMLDBCQUFDO0FBQUQsQ0FBQyxBQTdCRCxJQTZCQztBQTdCWSxtQkFBbUI7SUFML0IsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxnQkFBZ0I7UUFDMUIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSw0QkFBNEI7S0FDNUMsQ0FBQztxQ0FLdUMsa0NBQWU7UUFDM0IseUJBQWdCO0dBTGhDLG1CQUFtQixDQTZCL0I7QUE3Qlksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtBZGRyZXNzfSBmcm9tIFwiLi4vLi4vbW9kZWwvYWRkcmVzcy5tb2RlbFwiO1xuaW1wb3J0IHtEYXRhYmFzZVNlcnZpY2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9kYXRhYmFzZS5zZXJ2aWNlXCI7XG5pbXBvcnQge1JvdXRlckV4dGVuc2lvbnN9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtYWRkLWNvbnRhY3RcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcImFkZC1jb250YWN0LmNvbXBvbmVudC5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIEFkZENvbnRhY3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgcHVibGljIGFkZHJlc3M6IEFkZHJlc3M7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhdGFiYXNlU2VydmljZTogRGF0YWJhc2VTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgbmF2OiBSb3V0ZXJFeHRlbnNpb25zKSB7XG4gICAgICAgIHRoaXMuYWRkcmVzcyA9IHtcbiAgICAgICAgICAgIHVzZXJuYW1lOiAnJyxcbiAgICAgICAgICAgIG51bWJlcjogJydcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIH1cblxuICAgIHB1YmxpYyBzYXZlQ29udGFjdCgpIHtcbiAgICAgICAgaWYodGhpcy5hZGRyZXNzLnVzZXJuYW1lICE9PSAnJyAmJlxuICAgICAgICAgICAgdGhpcy5hZGRyZXNzLm51bWJlciAhPT0gJycpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YWJhc2VTZXJ2aWNlLmluc2VydCh0aGlzLmFkZHJlc3MpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdi5uYXZpZ2F0ZShbJy9hZGRyZXNzYm9vayddLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWxlcnQoXCJGaWVsZHMgYXJlIG5vdCB2YWxpZFwiKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBwdWJsaWMgY2FuY2VsKCkge1xuICAgICAgICB0aGlzLm5hdi5uYXZpZ2F0ZShbJy9hZGRyZXNzYm9vayddLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICB9XG59XG4iXX0=