"use strict";
var core_1 = require("@angular/core");
var Sqlite = require("nativescript-sqlite");
var DatabaseService = (function () {
    function DatabaseService() {
    }
    DatabaseService.prototype.createDB = function () {
        return new Promise(function (resolve, reject) {
            return (new Sqlite("addressbook.db")).then(function (db) {
                db.execSQL("CREATE TABLE IF NOT EXISTS address (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, number TEXT)").then(function (id) {
                    resolve(db);
                }, function (error) {
                    console.log("CREATE TABLE ERROR", error);
                    reject(error);
                });
            }, function (error) {
                reject(error);
            });
        });
    };
    DatabaseService.prototype.insert = function (address) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.createDB().then(function (res) {
                res.execSQL("INSERT INTO address (username, number) VALUES (?, ?)", [address.username, address.number]).then(function (id) {
                    console.log("INSERT RESULT", id);
                    resolve(true);
                }, function (error) {
                    console.log("INSERT ERROR", error);
                    reject(false);
                });
            });
        });
    };
    DatabaseService.prototype.fetch = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.createDB().then(function (res) {
                return res.all("SELECT * FROM address").then(function (rows) {
                    var result = [];
                    console.log("Rows: ", JSON.stringify(rows));
                    for (var row in rows) {
                        result.push({
                            "username": rows[row][1],
                            "number": rows[row][2]
                        });
                    }
                    console.log("Risultati della select: ", JSON.stringify(result));
                    resolve(result);
                }, function (error) {
                    console.log("SELECT ERROR", error);
                    reject(error);
                });
            });
        });
    };
    return DatabaseService;
}());
DatabaseService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], DatabaseService);
exports.DatabaseService = DatabaseService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YWJhc2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhdGFiYXNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUF5QztBQUV6QyxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQztBQUc1QyxJQUFhLGVBQWU7SUFFeEI7SUFFQSxDQUFDO0lBRU8sa0NBQVEsR0FBaEI7UUFDSSxNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUMvQixNQUFNLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsRUFBRTtnQkFDekMsRUFBRSxDQUFDLE9BQU8sQ0FBQyx1R0FBdUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLEVBQUU7b0JBQ3ZILE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDaEIsQ0FBQyxFQUFFLFVBQUEsS0FBSztvQkFDSixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFFLEtBQUssQ0FBQyxDQUFDO29CQUN6QyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2xCLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxFQUFFLFVBQUEsS0FBSztnQkFDSixNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbEIsQ0FBQyxDQUFDLENBQUE7UUFDTixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFTSxnQ0FBTSxHQUFiLFVBQWMsT0FBZ0I7UUFBOUIsaUJBWUM7UUFYRyxNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUMvQixLQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBTztnQkFDekIsR0FBRyxDQUFDLE9BQU8sQ0FBQyxzREFBc0QsRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsRUFBRTtvQkFDM0csT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsRUFBRSxDQUFDLENBQUM7b0JBQ2pDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDbEIsQ0FBQyxFQUFFLFVBQUEsS0FBSztvQkFDSixPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxLQUFLLENBQUMsQ0FBQztvQkFDbkMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNsQixDQUFDLENBQUMsQ0FBQztZQUNQLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sK0JBQUssR0FBWjtRQUFBLGlCQW9CQztRQW5CRyxNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUMvQixLQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBTztnQkFDckIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxJQUFJO29CQUM3QyxJQUFJLE1BQU0sR0FBYyxFQUFFLENBQUM7b0JBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztvQkFDNUMsR0FBRyxDQUFBLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQzt3QkFDbEIsTUFBTSxDQUFDLElBQUksQ0FBQzs0QkFDUixVQUFVLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDeEIsUUFBUSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7eUJBQ3pCLENBQUMsQ0FBQztvQkFDUCxDQUFDO29CQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO29CQUNoRSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3BCLENBQUMsRUFBRSxVQUFBLEtBQUs7b0JBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFDLENBQUM7b0JBQ25DLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDbEIsQ0FBQyxDQUFDLENBQUM7WUFDWCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUlMLHNCQUFDO0FBQUQsQ0FBQyxBQTNERCxJQTJEQztBQTNEWSxlQUFlO0lBRDNCLGlCQUFVLEVBQUU7O0dBQ0EsZUFBZSxDQTJEM0I7QUEzRFksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge0FkZHJlc3N9IGZyb20gXCIuLi9tb2RlbC9hZGRyZXNzLm1vZGVsXCI7XG52YXIgU3FsaXRlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1zcWxpdGVcIik7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEYXRhYmFzZVNlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZURCKCl7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKG5ldyBTcWxpdGUoXCJhZGRyZXNzYm9vay5kYlwiKSkudGhlbihkYiA9PiB7XG4gICAgICAgICAgICAgICAgZGIuZXhlY1NRTChcIkNSRUFURSBUQUJMRSBJRiBOT1QgRVhJU1RTIGFkZHJlc3MgKGlkIElOVEVHRVIgUFJJTUFSWSBLRVkgQVVUT0lOQ1JFTUVOVCwgdXNlcm5hbWUgVEVYVCwgbnVtYmVyIFRFWFQpXCIpLnRoZW4oaWQgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGRiKTtcbiAgICAgICAgICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ1JFQVRFIFRBQkxFIEVSUk9SXCIsIGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwdWJsaWMgaW5zZXJ0KGFkZHJlc3M6IEFkZHJlc3MpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlREIoKS50aGVuKChyZXM6YW55KSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzLmV4ZWNTUUwoXCJJTlNFUlQgSU5UTyBhZGRyZXNzICh1c2VybmFtZSwgbnVtYmVyKSBWQUxVRVMgKD8sID8pXCIsIFthZGRyZXNzLnVzZXJuYW1lLCBhZGRyZXNzLm51bWJlcl0pLnRoZW4oaWQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIklOU0VSVCBSRVNVTFRcIiwgaWQpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJJTlNFUlQgRVJST1JcIiwgZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZmFsc2UpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBmZXRjaCgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlREIoKS50aGVuKChyZXM6YW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuYWxsKFwiU0VMRUNUICogRlJPTSBhZGRyZXNzXCIpLnRoZW4ocm93cyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzdWx0OiBBZGRyZXNzW10gPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUm93czogXCIsIEpTT04uc3RyaW5naWZ5KHJvd3MpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcih2YXIgcm93IGluIHJvd3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidXNlcm5hbWVcIjogcm93c1tyb3ddWzFdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm51bWJlclwiOiByb3dzW3Jvd11bMl1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmlzdWx0YXRpIGRlbGxhIHNlbGVjdDogXCIsIEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNFTEVDVCBFUlJPUlwiLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cblxuXG59Il19