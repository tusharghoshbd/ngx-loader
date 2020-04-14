/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class NgxLoaderComponent {
    constructor() {
        this.show = false;
        this.fullScreen = true;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
NgxLoaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-loader',
                template: "\r\n<div  class=\"overlay\" [style.position]=\"fullScreen ? 'fixed' : 'absolute'\" [hidden]=\"!show\">\r\n    <div *ngIf=\"!template\" id=\"loader\"></div>\r\n    <div *ngIf=\"template\" [innerHTML]=\"template\">\r\n    </div>\r\n    <div class=\"loading-text\" >\r\n        <ng-content></ng-content>    \r\n    </div>\r\n</div>\r\n",
                styles: [".overlay{position:absolute;background-color:gray;z-index:9;opacity:.9;top:0;left:0;width:100%;height:100%}.overlay>div:not(.loading-text){top:50%;left:50%;margin:0;position:absolute;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.loading-text{color:#fff;position:absolute;top:60%;left:50%;-webkit-transform:translate(-50%,-60%);transform:translate(-50%,-60%)}#loader{position:absolute;left:50%;top:50%;z-index:1;margin:-40px 0 0 -40px;border:16px solid #f3f3f3;border-radius:50%;border-top:16px solid #3498db;border-bottom:16px solid #3498db;width:80px;height:80px;-webkit-animation:2s linear infinite spin;animation:2s linear infinite spin}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0)}100%{-webkit-transform:rotate(360deg)}}@keyframes spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.animate-bottom{position:relative;-webkit-animation-name:animatebottom;-webkit-animation-duration:1s;animation-name:animatebottom;animation-duration:1s}@-webkit-keyframes animatebottom{from{bottom:-100px;opacity:0}to{bottom:0;opacity:1}}@keyframes animatebottom{from{bottom:-100px;opacity:0}to{bottom:0;opacity:1}}"]
            }] }
];
/** @nocollapse */
NgxLoaderComponent.ctorParameters = () => [];
NgxLoaderComponent.propDecorators = {
    show: [{ type: Input }],
    fullScreen: [{ type: Input }],
    template: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NgxLoaderComponent.prototype.show;
    /** @type {?} */
    NgxLoaderComponent.prototype.fullScreen;
    /** @type {?} */
    NgxLoaderComponent.prototype.template;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWxvYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdHVzaGFyZ2hvc2hiZC9uZ3gtbG9hZGVyLyIsInNvdXJjZXMiOlsibGliL25neC1sb2FkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFTLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU94RCxNQUFNLE9BQU8sa0JBQWtCO0lBSzNCO1FBSFMsU0FBSSxHQUFHLEtBQUssQ0FBQztRQUNiLGVBQVUsR0FBRyxJQUFJLENBQUM7SUFFWCxDQUFDOzs7O0lBRWpCLFFBQVE7SUFFUixDQUFDOzs7WUFkSixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLHdWQUF5Qzs7YUFFMUM7Ozs7O21CQUdJLEtBQUs7eUJBQ0wsS0FBSzt1QkFDTCxLQUFLOzs7O0lBRk4sa0NBQXNCOztJQUN0Qix3Q0FBMkI7O0lBQzNCLHNDQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC1sb2FkZXInLFxuICB0ZW1wbGF0ZVVybDonLi9uZ3gtbG9hZGVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbmd4LWxvYWRlci5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTmd4TG9hZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIEBJbnB1dCgpIHNob3cgPSBmYWxzZTtcbiAgICBASW5wdXQoKSBmdWxsU2NyZWVuID0gdHJ1ZTtcbiAgICBASW5wdXQoKSB0ZW1wbGF0ZTphbnkgIDtcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIFxuICAgIH1cblxufSJdfQ==