"use strict";
var core_1 = require("@angular/core");
var user_mock_1 = require("../../mock/user.mock");
var router_1 = require("nativescript-angular/router");
var LoginComponent = (function () {
    function LoginComponent(nav) {
        this.nav = nav;
        this.credential = {
            username: '',
            password: ''
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.signIn = function () {
        if (this.credential.username === user_mock_1.USER.username &&
            this.credential.password === user_mock_1.USER.password) {
            this.nav.navigate(["/addressbook"], { clearHistory: true });
        }
        else {
            alert("Insert correct credentials");
        }
    };
    ;
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: "ns-login",
        moduleId: module.id,
        templateUrl: "login.component.html",
    }),
    __metadata("design:paramtypes", [router_1.RouterExtensions])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBa0Q7QUFHbEQsa0RBQTBDO0FBQzFDLHNEQUE2RDtBQU83RCxJQUFhLGNBQWM7SUFNdkIsd0JBQW9CLEdBQXFCO1FBQXJCLFFBQUcsR0FBSCxHQUFHLENBQWtCO1FBRXJDLElBQUksQ0FBQyxVQUFVLEdBQUc7WUFDZCxRQUFRLEVBQUUsRUFBRTtZQUNaLFFBQVEsRUFBRSxFQUFFO1NBQ2YsQ0FBQTtJQUNMLENBQUM7SUFFRCxpQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUVNLCtCQUFNLEdBQWI7UUFDSSxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsS0FBSyxnQkFBSSxDQUFDLFFBQVE7WUFDckMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEtBQUssZ0JBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ2pELElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsY0FBYyxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNoRSxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixLQUFLLENBQUMsNEJBQTRCLENBQUMsQ0FBQztRQUN4QyxDQUFDO0lBQ0wsQ0FBQztJQUFBLENBQUM7SUFDTixxQkFBQztBQUFELENBQUMsQUF6QkQsSUF5QkM7QUF6QlksY0FBYztJQUwxQixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFVBQVU7UUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSxzQkFBc0I7S0FDdEMsQ0FBQztxQ0FPMkIseUJBQWdCO0dBTmhDLGNBQWMsQ0F5QjFCO0FBekJZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtMb2NhdGlvbn0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHtVc2VyfSBmcm9tIFwiLi4vLi4vbW9kZWwvdXNlci5tb2RlbFwiO1xuaW1wb3J0IHtVU0VSfSBmcm9tIFwiLi4vLi4vbW9jay91c2VyLm1vY2tcIjtcbmltcG9ydCB7Um91dGVyRXh0ZW5zaW9uc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1sb2dpblwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwibG9naW4uY29tcG9uZW50Lmh0bWxcIixcbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgcHVibGljIGNyZWRlbnRpYWw6IFVzZXI7XG4gICAgbG9jYXRpb246IExvY2F0aW9uO1xuXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5hdjogUm91dGVyRXh0ZW5zaW9ucykge1xuXG4gICAgICAgIHRoaXMuY3JlZGVudGlhbCA9IHtcbiAgICAgICAgICAgIHVzZXJuYW1lOiAnJyxcbiAgICAgICAgICAgIHBhc3N3b3JkOiAnJ1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgfVxuXG4gICAgcHVibGljIHNpZ25JbigpIHtcbiAgICAgICAgaWYodGhpcy5jcmVkZW50aWFsLnVzZXJuYW1lID09PSBVU0VSLnVzZXJuYW1lICYmXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVkZW50aWFsLnBhc3N3b3JkID09PSBVU0VSLnBhc3N3b3JkKSB7XG4gICAgICAgICAgICB0aGlzLm5hdi5uYXZpZ2F0ZShbXCIvYWRkcmVzc2Jvb2tcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWxlcnQoXCJJbnNlcnQgY29ycmVjdCBjcmVkZW50aWFsc1wiKTtcbiAgICAgICAgfVxuICAgIH07XG59XG4iXX0=