import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";
import {LoginComponent} from "./modules/auth/login.component";
import {AddressBookComponent} from "./modules/address_book/address-book.component";
import {DatabaseService} from "./services/database.service";
import {AddContactComponent} from "./modules/address_book/add-contact.component";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        AddressBookComponent,
        AddContactComponent
    ],
    providers: [
        DatabaseService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
