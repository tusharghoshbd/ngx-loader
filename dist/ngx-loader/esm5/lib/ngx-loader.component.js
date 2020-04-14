/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var NgxLoaderComponent = /** @class */ (function () {
    function NgxLoaderComponent() {
        this.show = false;
        this.fullScreen = true;
    }
    /**
     * @return {?}
     */
    NgxLoaderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    NgxLoaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ngx-loader',
                    template: "\r\n<div  class=\"overlay\" [style.position]=\"fullScreen ? 'fixed' : 'absolute'\" [hidden]=\"!show\">\r\n    <div *ngIf=\"!template\" id=\"loader\"></div>\r\n    <div *ngIf=\"template\" [innerHTML]=\"template\">\r\n    </div>\r\n    <div class=\"loading-text\" >\r\n        <ng-content></ng-content>    \r\n    </div>\r\n</div>\r\n",
                    styles: [".overlay{position:absolute;background-color:gray;z-index:9;opacity:.9;top:0;left:0;width:100%;height:100%}.overlay>div:not(.loading-text){top:50%;left:50%;margin:0;position:absolute;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.loading-text{color:#fff;position:absolute;top:60%;left:50%;-webkit-transform:translate(-50%,-60%);transform:translate(-50%,-60%)}#loader{position:absolute;left:50%;top:50%;z-index:1;margin:-40px 0 0 -40px;border:16px solid #f3f3f3;border-radius:50%;border-top:16px solid #3498db;border-bottom:16px solid #3498db;width:80px;height:80px;-webkit-animation:2s linear infinite spin;animation:2s linear infinite spin}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0)}100%{-webkit-transform:rotate(360deg)}}@keyframes spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.animate-bottom{position:relative;-webkit-animation-name:animatebottom;-webkit-animation-duration:1s;animation-name:animatebottom;animation-duration:1s}@-webkit-keyframes animatebottom{from{bottom:-100px;opacity:0}to{bottom:0;opacity:1}}@keyframes animatebottom{from{bottom:-100px;opacity:0}to{bottom:0;opacity:1}}"]
                }] }
    ];
    /** @nocollapse */
    NgxLoaderComponent.ctorParameters = function () { return []; };
    NgxLoaderComponent.propDecorators = {
        show: [{ type: Input }],
        fullScreen: [{ type: Input }],
        template: [{ type: Input }]
    };
    return NgxLoaderComponent;
}());
export { NgxLoaderComponent };
if (false) {
    /** @type {?} */
    NgxLoaderComponent.prototype.show;
    /** @type {?} */
    NgxLoaderComponent.prototype.fullScreen;
    /** @type {?} */
    NgxLoaderComponent.prototype.template;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWxvYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdHVzaGFyZ2hvc2hiZC9uZ3gtbG9hZGVyLyIsInNvdXJjZXMiOlsibGliL25neC1sb2FkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFTLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV4RDtJQVVJO1FBSFMsU0FBSSxHQUFHLEtBQUssQ0FBQztRQUNiLGVBQVUsR0FBRyxJQUFJLENBQUM7SUFFWCxDQUFDOzs7O0lBRWpCLHFDQUFROzs7SUFBUjtJQUVBLENBQUM7O2dCQWRKLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsd1ZBQXlDOztpQkFFMUM7Ozs7O3VCQUdJLEtBQUs7NkJBQ0wsS0FBSzsyQkFDTCxLQUFLOztJQU9WLHlCQUFDO0NBQUEsQUFoQkQsSUFnQkM7U0FYWSxrQkFBa0I7OztJQUUzQixrQ0FBc0I7O0lBQ3RCLHdDQUEyQjs7SUFDM0Isc0NBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LWxvYWRlcicsXG4gIHRlbXBsYXRlVXJsOicuL25neC1sb2FkZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9uZ3gtbG9hZGVyLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hMb2FkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgQElucHV0KCkgc2hvdyA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIGZ1bGxTY3JlZW4gPSB0cnVlO1xuICAgIEBJbnB1dCgpIHRlbXBsYXRlOmFueSAgO1xuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgXG4gICAgfVxuXG59Il19