"use strict";
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var forms_1 = require("nativescript-angular/forms");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var login_component_1 = require("./modules/auth/login.component");
var address_book_component_1 = require("./modules/address_book/address-book.component");
var database_service_1 = require("./services/database.service");
var add_contact_component_1 = require("./modules/address_book/add-contact.component");
var splash_screen_component_1 = require("./modules/splash_screen/splash-screen.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        bootstrap: [
            app_component_1.AppComponent
        ],
        imports: [
            nativescript_module_1.NativeScriptModule,
            forms_1.NativeScriptFormsModule,
            app_routing_1.AppRoutingModule
        ],
        declarations: [
            app_component_1.AppComponent,
            splash_screen_component_1.SplashScreenComponent,
            login_component_1.LoginComponent,
            address_book_component_1.AddressBookComponent,
            add_contact_component_1.AddContactComponent
        ],
        providers: [
            database_service_1.DatabaseService
        ],
        schemas: [
            core_1.NO_ERRORS_SCHEMA
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUEyRDtBQUMzRCxnRkFBOEU7QUFDOUUsb0RBQXFFO0FBQ3JFLDZDQUFpRDtBQUNqRCxpREFBK0M7QUFDL0Msa0VBQThEO0FBQzlELHdGQUFtRjtBQUNuRixnRUFBNEQ7QUFDNUQsc0ZBQWlGO0FBQ2pGLDJGQUFzRjtBQXlCdEYsSUFBYSxTQUFTO0lBQXRCO0lBQXlCLENBQUM7SUFBRCxnQkFBQztBQUFELENBQUMsQUFBMUIsSUFBMEI7QUFBYixTQUFTO0lBdkJyQixlQUFRLENBQUM7UUFDTixTQUFTLEVBQUU7WUFDUCw0QkFBWTtTQUNmO1FBQ0QsT0FBTyxFQUFFO1lBQ0wsd0NBQWtCO1lBQ2xCLCtCQUF1QjtZQUN2Qiw4QkFBZ0I7U0FDbkI7UUFDRCxZQUFZLEVBQUU7WUFDViw0QkFBWTtZQUNaLCtDQUFxQjtZQUNyQixnQ0FBYztZQUNkLDZDQUFvQjtZQUNwQiwyQ0FBbUI7U0FDdEI7UUFDRCxTQUFTLEVBQUU7WUFDUCxrQ0FBZTtTQUNsQjtRQUNELE9BQU8sRUFBRTtZQUNMLHVCQUFnQjtTQUNuQjtLQUNKLENBQUM7R0FDVyxTQUFTLENBQUk7QUFBYiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2FwcC5yb3V0aW5nXCI7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQge0xvZ2luQ29tcG9uZW50fSBmcm9tIFwiLi9tb2R1bGVzL2F1dGgvbG9naW4uY29tcG9uZW50XCI7XG5pbXBvcnQge0FkZHJlc3NCb29rQ29tcG9uZW50fSBmcm9tIFwiLi9tb2R1bGVzL2FkZHJlc3NfYm9vay9hZGRyZXNzLWJvb2suY29tcG9uZW50XCI7XG5pbXBvcnQge0RhdGFiYXNlU2VydmljZX0gZnJvbSBcIi4vc2VydmljZXMvZGF0YWJhc2Uuc2VydmljZVwiO1xuaW1wb3J0IHtBZGRDb250YWN0Q29tcG9uZW50fSBmcm9tIFwiLi9tb2R1bGVzL2FkZHJlc3NfYm9vay9hZGQtY29udGFjdC5jb21wb25lbnRcIjtcbmltcG9ydCB7U3BsYXNoU2NyZWVuQ29tcG9uZW50fSBmcm9tIFwiLi9tb2R1bGVzL3NwbGFzaF9zY3JlZW4vc3BsYXNoLXNjcmVlbi5jb21wb25lbnRcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBib290c3RyYXA6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgICAgIEFwcFJvdXRpbmdNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBcHBDb21wb25lbnQsXG4gICAgICAgIFNwbGFzaFNjcmVlbkNvbXBvbmVudCxcbiAgICAgICAgTG9naW5Db21wb25lbnQsXG4gICAgICAgIEFkZHJlc3NCb29rQ29tcG9uZW50LFxuICAgICAgICBBZGRDb250YWN0Q29tcG9uZW50XG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgRGF0YWJhc2VTZXJ2aWNlXG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiJdfQ==