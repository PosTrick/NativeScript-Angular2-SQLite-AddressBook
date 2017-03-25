import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import {LoginComponent} from "./modules/auth/login.component";
import {AddressBookComponent} from "./modules/address_book/address-book.component";
import {AddContactComponent} from "./modules/address_book/add-contact.component";

const routes: Routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "login", component: LoginComponent },
    { path: "addressbook", component: AddressBookComponent},
    { path: "new-contact", component: AddContactComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }