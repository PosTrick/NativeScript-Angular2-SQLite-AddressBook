import { Component, OnInit } from "@angular/core";
import {Address} from "../../model/address.model";
import {DatabaseService} from "../../services/database.service";
import {RouterExtensions} from "nativescript-angular/router";

@Component({
    selector: "ns-add-contact",
    moduleId: module.id,
    templateUrl: "add-contact.component.html",
})
export class AddContactComponent implements OnInit {

    public address: Address;

    constructor(private databaseService: DatabaseService,
                private nav: RouterExtensions) {
        this.address = {
            username: '',
            number: ''
        }
    }

    ngOnInit(): void {
    }

    public saveContact() {
        if(this.address.username !== '' &&
            this.address.number !== '') {
            this.databaseService.insert(this.address).then(res => {
                this.nav.navigate(['/addressbook'], { clearHistory: true });
            });
        } else {
            alert("Fields are not valid");
        }
    };

    public cancel() {
        this.nav.navigate(['/addressbook'], { clearHistory: true });
    }
}
