"use strict";
var core_1 = require("@angular/core");
var database_service_1 = require("../../services/database.service");
var router_1 = require("nativescript-angular/router");
var AddressBookComponent = (function () {
    function AddressBookComponent(databaseService, nav) {
        var _this = this;
        this.databaseService = databaseService;
        this.nav = nav;
        this.databaseService.fetch().then(function (res) {
            _this.listAddressBook = res;
        });
    }
    AddressBookComponent.prototype.ngOnInit = function () {
    };
    AddressBookComponent.prototype.addContact = function () {
        this.nav.navigate(["/new-contact"]);
    };
    return AddressBookComponent;
}());
AddressBookComponent = __decorate([
    core_1.Component({
        selector: "ns-address-book",
        moduleId: module.id,
        templateUrl: "address-book.component.html",
    }),
    __metadata("design:paramtypes", [database_service_1.DatabaseService,
        router_1.RouterExtensions])
], AddressBookComponent);
exports.AddressBookComponent = AddressBookComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy1ib29rLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFkZHJlc3MtYm9vay5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUFrRDtBQUVsRCxvRUFBZ0U7QUFDaEUsc0RBQTZEO0FBTzdELElBQWEsb0JBQW9CO0lBSTdCLDhCQUFvQixlQUFnQyxFQUNoQyxHQUFxQjtRQUR6QyxpQkFLQztRQUxtQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsUUFBRyxHQUFILEdBQUcsQ0FBa0I7UUFDckMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFRO1lBQ3ZDLEtBQUksQ0FBQyxlQUFlLEdBQUcsR0FBRyxDQUFDO1FBQy9CLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHVDQUFRLEdBQVI7SUFFQSxDQUFDO0lBRU0seUNBQVUsR0FBakI7UUFDSSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUNMLDJCQUFDO0FBQUQsQ0FBQyxBQWxCRCxJQWtCQztBQWxCWSxvQkFBb0I7SUFMaEMsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxpQkFBaUI7UUFDM0IsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSw2QkFBNkI7S0FDN0MsQ0FBQztxQ0FLdUMsa0NBQWU7UUFDM0IseUJBQWdCO0dBTGhDLG9CQUFvQixDQWtCaEM7QUFsQlksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtBZGRyZXNzfSBmcm9tIFwiLi4vLi4vbW9kZWwvYWRkcmVzcy5tb2RlbFwiO1xuaW1wb3J0IHtEYXRhYmFzZVNlcnZpY2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9kYXRhYmFzZS5zZXJ2aWNlXCI7XG5pbXBvcnQge1JvdXRlckV4dGVuc2lvbnN9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtYWRkcmVzcy1ib29rXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCJhZGRyZXNzLWJvb2suY29tcG9uZW50Lmh0bWxcIixcbn0pXG5leHBvcnQgY2xhc3MgQWRkcmVzc0Jvb2tDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgcHVibGljIGxpc3RBZGRyZXNzQm9vazogQWRkcmVzc1tdO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkYXRhYmFzZVNlcnZpY2U6IERhdGFiYXNlU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIG5hdjogUm91dGVyRXh0ZW5zaW9ucykge1xuICAgICAgICB0aGlzLmRhdGFiYXNlU2VydmljZS5mZXRjaCgpLnRoZW4oKHJlczogYW55KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxpc3RBZGRyZXNzQm9vayA9IHJlcztcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkQ29udGFjdCgpIHtcbiAgICAgICAgdGhpcy5uYXYubmF2aWdhdGUoW1wiL25ldy1jb250YWN0XCJdKTtcbiAgICB9XG59XG4iXX0=