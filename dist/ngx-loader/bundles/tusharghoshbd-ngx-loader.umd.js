(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@tusharghoshbd/ngx-loader', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = global || self, factory((global.tusharghoshbd = global.tusharghoshbd || {}, global.tusharghoshbd['ngx-loader'] = {}), global.ng.core, global.ng.common));
}(this, (function (exports, core, common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxLoaderService = /** @class */ (function () {
        function NgxLoaderService() {
        }
        NgxLoaderService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        NgxLoaderService.ctorParameters = function () { return []; };
        /** @nocollapse */ NgxLoaderService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function NgxLoaderService_Factory() { return new NgxLoaderService(); }, token: NgxLoaderService, providedIn: "root" });
        return NgxLoaderService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
            { type: core.Component, args: [{
                        selector: 'ngx-loader',
                        template: "\r\n<div  class=\"overlay\" [style.position]=\"fullScreen ? 'fixed' : 'absolute'\" [hidden]=\"!show\">\r\n    <div *ngIf=\"!template\" id=\"loader\"></div>\r\n    <div *ngIf=\"template\" [innerHTML]=\"template\">\r\n    </div>\r\n    <div class=\"loading-text\" >\r\n        <ng-content></ng-content>    \r\n    </div>\r\n</div>\r\n",
                        styles: [".overlay{position:absolute;background-color:gray;z-index:9;opacity:.9;top:0;left:0;width:100%;height:100%}.overlay>div:not(.loading-text){top:50%;left:50%;margin:0;position:absolute;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.loading-text{color:#fff;position:absolute;top:60%;left:50%;-webkit-transform:translate(-50%,-60%);transform:translate(-50%,-60%)}#loader{position:absolute;left:50%;top:50%;z-index:1;margin:-40px 0 0 -40px;border:16px solid #f3f3f3;border-radius:50%;border-top:16px solid #3498db;border-bottom:16px solid #3498db;width:80px;height:80px;-webkit-animation:2s linear infinite spin;animation:2s linear infinite spin}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0)}100%{-webkit-transform:rotate(360deg)}}@keyframes spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.animate-bottom{position:relative;-webkit-animation-name:animatebottom;-webkit-animation-duration:1s;animation-name:animatebottom;animation-duration:1s}@-webkit-keyframes animatebottom{from{bottom:-100px;opacity:0}to{bottom:0;opacity:1}}@keyframes animatebottom{from{bottom:-100px;opacity:0}to{bottom:0;opacity:1}}"]
                    }] }
        ];
        /** @nocollapse */
        NgxLoaderComponent.ctorParameters = function () { return []; };
        NgxLoaderComponent.propDecorators = {
            show: [{ type: core.Input }],
            fullScreen: [{ type: core.Input }],
            template: [{ type: core.Input }]
        };
        return NgxLoaderComponent;
    }());
    if (false) {
        /** @type {?} */
        NgxLoaderComponent.prototype.show;
        /** @type {?} */
        NgxLoaderComponent.prototype.fullScreen;
        /** @type {?} */
        NgxLoaderComponent.prototype.template;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxLoaderModule = /** @class */ (function () {
        function NgxLoaderModule() {
        }
        NgxLoaderModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [NgxLoaderComponent],
                        imports: [
                            common.CommonModule
                        ],
                        exports: [NgxLoaderComponent]
                    },] }
        ];
        return NgxLoaderModule;
    }());

    exports.NgxLoaderComponent = NgxLoaderComponent;
    exports.NgxLoaderModule = NgxLoaderModule;
    exports.NgxLoaderService = NgxLoaderService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=tusharghoshbd-ngx-loader.umd.js.map
