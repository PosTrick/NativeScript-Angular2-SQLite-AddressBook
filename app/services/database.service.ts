import {Injectable} from "@angular/core";
import {Address} from "../model/address.model";
var Sqlite = require("nativescript-sqlite");

@Injectable()
export class DatabaseService {

    constructor() {

    }

    private createDB(){
        return new Promise((resolve, reject) => {
            return (new Sqlite("addressbook.db")).then(db => {
                db.execSQL("CREATE TABLE IF NOT EXISTS address (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, number TEXT)").then(id => {
                    resolve(db);
                }, error => {
                    console.log("CREATE TABLE ERROR", error);
                    reject(error);
                });
            }, error => {
                reject(error);
            })
        })
    }

    public insert(address: Address) {
        return new Promise((resolve, reject) => {
            this.createDB().then((res:any) => {
                res.execSQL("INSERT INTO address (username, number) VALUES (?, ?)", [address.username, address.number]).then(id => {
                    console.log("INSERT RESULT", id);
                    resolve(true);
                }, error => {
                    console.log("INSERT ERROR", error);
                    reject(false);
                });
            });
        });
    }

    public fetch() {
        return new Promise((resolve, reject) => {
            this.createDB().then((res:any) => {
                    return res.all("SELECT * FROM address").then(rows => {
                        let result: Address[] = [];
                        console.log("Rows: ", JSON.stringify(rows));
                        for(var row in rows) {
                            result.push({
                                "username": rows[row][1],
                                "number": rows[row][2]
                            });
                        }
                        resolve(result);
                    }, error => {
                        console.log("SELECT ERROR", error);
                        reject(error);
                    });
            });
        });
    }



}