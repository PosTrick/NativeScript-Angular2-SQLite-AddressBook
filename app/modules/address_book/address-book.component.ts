import { Component, OnInit } from "@angular/core";
import {Address} from "../../model/address.model";
import {DatabaseService} from "../../services/database.service";
import {RouterExtensions} from "nativescript-angular/router";

@Component({
    selector: "ns-address-book",
    moduleId: module.id,
    templateUrl: "address-book.component.html",
})
export class AddressBookComponent implements OnInit {

    public listAddressBook: Address[];

    constructor(private databaseService: DatabaseService,
                private nav: RouterExtensions) {
        this.databaseService.fetch().then((res: any) => {
            this.listAddressBook = res;
        });
    }

    ngOnInit(): void {

    }

    public addContact() {
        this.nav.navigate(["/new-contact"]);
    }
}
