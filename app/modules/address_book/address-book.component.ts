import { Component } from "@angular/core";
import {Address} from "../../model/address.model";
import {DatabaseService} from "../../services/database.service";
import {RouterExtensions} from "nativescript-angular/router";

@Component({
    selector: "ns-address-book",
    moduleId: module.id,
    templateUrl: "address-book.component.html",
})
export class AddressBookComponent {

    public listAddressBook: Address[];

    constructor(private databaseService: DatabaseService,
                private nav: RouterExtensions) {
        this.databaseService.fetch().then((res: any) => {
            this.listAddressBook = res;
        });
    }

    public addContact() {
        this.nav.navigate(["/new-contact"]);
    }
}
