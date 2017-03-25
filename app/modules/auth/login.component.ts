import { Component, OnInit } from "@angular/core";
import {Location} from "@angular/common";
import {User} from "../../model/user.model";
import {USER} from "../../mock/user.mock";
import {RouterExtensions} from "nativescript-angular/router";

@Component({
    selector: "ns-login",
    moduleId: module.id,
    templateUrl: "login.component.html",
})
export class LoginComponent implements OnInit {

    public credential: User;
    location: Location;


    constructor(private nav: RouterExtensions) {

        this.credential = {
            username: '',
            password: ''
        }
    }

    ngOnInit(): void {
    }

    public signIn() {
        if(this.credential.username === USER.username &&
                this.credential.password === USER.password) {
            this.nav.navigate(["/addressbook"], { clearHistory: true });
        } else {
            alert("Insert correct credentials");
        }
    };
}
