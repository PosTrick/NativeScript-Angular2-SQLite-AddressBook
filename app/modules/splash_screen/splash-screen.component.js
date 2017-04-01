"use strict";
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var SplashScreenComponent = (function () {
    function SplashScreenComponent(nav) {
        this.nav = nav;
        this.loadingText = 'Loading';
        this.timeSplash = 0;
        this.count = 0;
    }
    SplashScreenComponent.prototype.ngOnInit = function () {
        var _this = this;
        setInterval(function () {
            if (_this.timeSplash < 8000) {
                _this.timeSplash += 400;
                if (_this.count === 3) {
                    _this.count = 0;
                    _this.loadingText = 'Loading';
                }
                else {
                    _this.loadingText += '.';
                    _this.count++;
                }
            }
            else {
                _this.nav.navigate(['/login'], { clearHistory: true });
            }
        }, 400);
    };
    return SplashScreenComponent;
}());
SplashScreenComponent = __decorate([
    core_1.Component({
        selector: "ns-splash-screen",
        moduleId: module.id,
        templateUrl: "splash-screen.component.html",
    }),
    __metadata("design:paramtypes", [router_1.RouterExtensions])
], SplashScreenComponent);
exports.SplashScreenComponent = SplashScreenComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BsYXNoLXNjcmVlbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzcGxhc2gtc2NyZWVuLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQXVFO0FBQ3ZFLHNEQUE2RDtBQU83RCxJQUFhLHFCQUFxQjtJQU05QiwrQkFBb0IsR0FBcUI7UUFBckIsUUFBRyxHQUFILEdBQUcsQ0FBa0I7UUFKbEMsZ0JBQVcsR0FBVyxTQUFTLENBQUM7UUFFL0IsZUFBVSxHQUFHLENBQUMsQ0FBQztRQUNmLFVBQUssR0FBRyxDQUFDLENBQUM7SUFDMEIsQ0FBQztJQUU3Qyx3Q0FBUSxHQUFSO1FBQUEsaUJBZ0JDO1FBZEcsV0FBVyxDQUFDO1lBQ1IsRUFBRSxDQUFBLENBQUMsS0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUN4QixLQUFJLENBQUMsVUFBVSxJQUFJLEdBQUcsQ0FBQztnQkFDdkIsRUFBRSxDQUFBLENBQUMsS0FBSSxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNsQixLQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztvQkFDZixLQUFJLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQztnQkFDakMsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDSixLQUFJLENBQUMsV0FBVyxJQUFJLEdBQUcsQ0FBQztvQkFDeEIsS0FBSSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUNqQixDQUFDO1lBQ0wsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNKLEtBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztZQUMxRCxDQUFDO1FBQ0wsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1osQ0FBQztJQUNMLDRCQUFDO0FBQUQsQ0FBQyxBQXpCRCxJQXlCQztBQXpCWSxxQkFBcUI7SUFMakMsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxrQkFBa0I7UUFDNUIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSw4QkFBOEI7S0FDOUMsQ0FBQztxQ0FPMkIseUJBQWdCO0dBTmhDLHFCQUFxQixDQXlCakM7QUF6Qlksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtSb3V0ZXJFeHRlbnNpb25zfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLXNwbGFzaC1zY3JlZW5cIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcInNwbGFzaC1zY3JlZW4uY29tcG9uZW50Lmh0bWxcIixcbn0pXG5leHBvcnQgY2xhc3MgU3BsYXNoU2NyZWVuQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIHB1YmxpYyBsb2FkaW5nVGV4dDogc3RyaW5nID0gJ0xvYWRpbmcnO1xuXG4gICAgcHJpdmF0ZSB0aW1lU3BsYXNoID0gMDtcbiAgICBwcml2YXRlIGNvdW50ID0gMDtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5hdjogUm91dGVyRXh0ZW5zaW9ucykge31cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuXG4gICAgICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIGlmKHRoaXMudGltZVNwbGFzaCA8IDgwMDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVTcGxhc2ggKz0gNDAwO1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuY291bnQgPT09IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb3VudCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZ1RleHQgPSAnTG9hZGluZyc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nVGV4dCArPSAnLic7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY291bnQrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMubmF2Lm5hdmlnYXRlKFsnL2xvZ2luJ10sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCA0MDApO1xuICAgIH1cbn1cbiJdfQ==