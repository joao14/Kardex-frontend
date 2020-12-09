function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule, ɵ0, ɵ1, ɵ2, ɵ3, ɵ4 */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵ0", function () {
      return ɵ0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵ1", function () {
      return ɵ1;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵ2", function () {
      return ɵ2;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵ3", function () {
      return ɵ3;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵ4", function () {
      return ɵ4;
    });
    /* harmony import */


    var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./guard/auth.guard */
    "./src/app/guard/auth.guard.ts");

    var ɵ0 = function ɵ0() {
      return Promise.all(
      /*! import() | pages-layout-layout-module-ngfactory */
      [__webpack_require__.e("default~pages-forgot-forgot-module-ngfactory~pages-layout-layout-module-ngfactory~pages-login-login-~1d59073f"), __webpack_require__.e("pages-layout-layout-module-ngfactory")]).then(__webpack_require__.bind(null,
      /*! ./pages/layout/layout.module.ngfactory */
      "./src/app/pages/layout/layout.module.ngfactory.js")).then(function (m) {
        return m.LayoutModuleNgFactory;
      });
    },
        ɵ1 = function ɵ1() {
      return Promise.all(
      /*! import() | pages-login-login-module-ngfactory */
      [__webpack_require__.e("default~dashboard-dashboard-module-ngfactory~pages-forgot-forgot-module-ngfactory~pages-login-login-~ea352f7c"), __webpack_require__.e("default~pages-forgot-forgot-module-ngfactory~pages-login-login-module-ngfactory~report-automatic-aut~6b8a7ec3"), __webpack_require__.e("default~pages-forgot-forgot-module-ngfactory~pages-layout-layout-module-ngfactory~pages-login-login-~1d59073f"), __webpack_require__.e("common"), __webpack_require__.e("pages-login-login-module-ngfactory")]).then(__webpack_require__.bind(null,
      /*! ./pages/login/login.module.ngfactory */
      "./src/app/pages/login/login.module.ngfactory.js")).then(function (m) {
        return m.LoginModuleNgFactory;
      });
    },
        ɵ2 = function ɵ2() {
      return Promise.all(
      /*! import() | pages-forgot-forgot-module-ngfactory */
      [__webpack_require__.e("default~dashboard-dashboard-module-ngfactory~pages-forgot-forgot-module-ngfactory~pages-login-login-~ea352f7c"), __webpack_require__.e("default~pages-forgot-forgot-module-ngfactory~pages-login-login-module-ngfactory~report-automatic-aut~6b8a7ec3"), __webpack_require__.e("default~pages-forgot-forgot-module-ngfactory~pages-layout-layout-module-ngfactory~pages-login-login-~1d59073f"), __webpack_require__.e("common"), __webpack_require__.e("pages-forgot-forgot-module-ngfactory")]).then(__webpack_require__.bind(null,
      /*! ./pages/forgot/forgot.module.ngfactory */
      "./src/app/pages/forgot/forgot.module.ngfactory.js")).then(function (m) {
        return m.ForgotModuleNgFactory;
      });
    },
        ɵ3 = function ɵ3() {
      return __webpack_require__.e(
      /*! import() | pages-register-register-module-ngfactory */
      "pages-register-register-module-ngfactory").then(__webpack_require__.bind(null,
      /*! ./pages/register/register.module.ngfactory */
      "./src/app/pages/register/register.module.ngfactory.js")).then(function (m) {
        return m.RegisterModuleNgFactory;
      });
    },
        ɵ4 = function ɵ4() {
      return __webpack_require__.e(
      /*! import() | pages-not-found-not-found-module-ngfactory */
      "pages-not-found-not-found-module-ngfactory").then(__webpack_require__.bind(null,
      /*! ./pages/not-found/not-found.module.ngfactory */
      "./src/app/pages/not-found/not-found.module.ngfactory.js")).then(function (m) {
        return m.NotFoundModuleNgFactory;
      });
    };

    var routes = [{
      path: '',
      loadChildren: ɵ0,
      canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]]
    }, {
      path: 'login',
      loadChildren: ɵ1
    }, {
      path: 'forgot',
      loadChildren: ɵ2
    }, {
      path: 'signup',
      loadChildren: ɵ3
    }, {
      path: 'not-found',
      loadChildren: ɵ4
    }, {
      path: '**',
      redirectTo: 'not-found'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };
    /***/

  },

  /***/
  "./src/app/app.component.css.shim.ngstyle.js":
  /*!***************************************************!*\
    !*** ./src/app/app.component.css.shim.ngstyle.js ***!
    \***************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppAppComponentCssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"];
    /***/
  },

  /***/
  "./src/app/app.component.ngfactory.js":
  /*!********************************************!*\
    !*** ./src/app/app.component.ngfactory.js ***!
    \********************************************/

  /*! exports provided: RenderType_AppComponent, View_AppComponent_0, View_AppComponent_Host_0, AppComponentNgFactory */

  /***/
  function srcAppAppComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_AppComponent", function () {
      return RenderType_AppComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_AppComponent_0", function () {
      return View_AppComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_AppComponent_Host_0", function () {
      return View_AppComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponentNgFactory", function () {
      return AppComponentNgFactory;
    });
    /* harmony import */


    var _app_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./app.component.css.shim.ngstyle */
    "./src/app/app.component.css.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles_AppComponent = [_app_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_AppComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_AppComponent,
      data: {}
    });

    function View_AppComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    function View_AppComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-root", [], null, null, null, View_AppComponent_0, RenderType_AppComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]], null, null)], null, null);
    }

    var AppComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-root", _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], View_AppComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });

    var AppComponent = function AppComponent(translate) {
      _classCallCheck(this, AppComponent);

      this.translate = translate;
      this.translate.setDefaultLang('es');
      this.translate.onLangChange.subscribe(function (x) {
        console.log('Se ha cambiado de lenguaje', x);
      }, function (error) {
        console.log('onchanged failed', error);
      });
    };
    /***/

  },

  /***/
  "./src/app/app.module.ngfactory.js":
  /*!*****************************************!*\
    !*** ./src/app/app.module.ngfactory.js ***!
    \*****************************************/

  /*! exports provided: AppModuleNgFactory */

  /***/
  function srcAppAppModuleNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModuleNgFactory", function () {
      return AppModuleNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../node_modules/@angular/router/router.ngfactory */
    "./node_modules/@angular/router/router.ngfactory.js");
    /* harmony import */


    var _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component.ngfactory */
    "./src/app/app.component.ngfactory.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_animations_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/animations/browser */
    "./node_modules/@angular/animations/fesm2015/browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _custom_translate_loader__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./custom-translate-loader */
    "./src/app/custom-translate-loader.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./guard/auth.guard */
    "./src/app/guard/auth.guard.ts");
    /* harmony import */


    var primeng_api__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! primeng/api */
    "./node_modules/primeng/fesm2015/primeng-api.js");
    /* harmony import */


    var _pages_register_register_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./pages/register/register.module */
    "./src/app/pages/register/register.module.ts");
    /* harmony import */


    var ngx_dropzone__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ngx-dropzone */
    "./node_modules/ngx-dropzone/fesm2015/ngx-dropzone.js");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var AppModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], function (_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_router_router_lNgFactory"], _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["AppComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_r"], [[3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_x"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_t"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_g"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_p"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_q"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵDomSanitizerImpl"], [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Sanitizer"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["HAMMER_GESTURE_CONFIG"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["HammerGestureConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["EVENT_MANAGER_PLUGINS"], function (p0_0, p0_1, p0_2, p1_0, p2_0, p2_1, p2_2, p2_3) {
        return [new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵDomEventsPlugin"](p0_0, p0_1, p0_2), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵKeyEventsPlugin"](p1_0), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵHammerGesturesPlugin"](p2_0, p2_1, p2_2, p2_3)];
      }, [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["HAMMER_GESTURE_CONFIG"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["HAMMER_LOADER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["EventManager"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["EVENT_MANAGER_PLUGINS"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵDomSharedStylesHost"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵDomSharedStylesHost"], [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵDomRendererFactory2"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵDomRendererFactory2"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵDomSharedStylesHost"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_7__["AnimationDriver"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_platform_browser_animations_animations_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_7__["ɵAnimationStyleNormalizer"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_platform_browser_animations_animations_b"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_7__["ɵAnimationEngine"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ɵInjectableAnimationEngine"], [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_7__["AnimationDriver"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_7__["ɵAnimationStyleNormalizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_platform_browser_animations_animations_c"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵDomRendererFactory2"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_7__["ɵAnimationEngine"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵSharedStylesHost"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵDomSharedStylesHost"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_common_http_http_g"], [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_common_http_http_e"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_common_http_http_h"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_common_http_http_h"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_common_http_http_f"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"], function (p0_0) {
        return [p0_0];
      }, [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_common_http_http_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_common_http_http_d"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_common_http_http_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["XhrFactory"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_common_http_http_d"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpXhrBackend"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpXhrBackend"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__["XhrFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpBackend"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpXhrBackend"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpHandler"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["ɵHttpInterceptingHandler"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpBackend"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpHandler"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_router_router_g"], [_angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_11__["NoPreloading"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["NoPreloading"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_router__WEBPACK_IMPORTED_MODULE_11__["PreloadingStrategy"], null, [_angular_router__WEBPACK_IMPORTED_MODULE_11__["NoPreloading"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterPreloader"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterPreloader"], [_angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["PreloadingStrategy"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_11__["PreloadAllModules"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["PreloadAllModules"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_router_router_o"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_router_router_c"], [_angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["ViewportScroller"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_11__["ROUTER_INITIALIZER"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_router_router_j"], [_angular_router__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_router_router_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"], function (p0_0) {
        return [p0_0];
      }, [_angular_router__WEBPACK_IMPORTED_MODULE_11__["ROUTER_INITIALIZER"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations__WEBPACK_IMPORTED_MODULE_12__["AnimationBuilder"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ɵBrowserAnimationBuilder"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateLoader"], _custom_translate_loader__WEBPACK_IMPORTED_MODULE_14__["CustomTranslateLoader"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateCompiler"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateFakeCompiler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateParser"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateDefaultParser"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["MissingTranslationHandler"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["FakeMissingTranslationHandler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateStore"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateStore"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateService"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateStore"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateLoader"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateCompiler"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateParser"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["MissingTranslationHandler"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["USE_DEFAULT_LANG"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["USE_STORE"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["USE_EXTEND"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["DEFAULT_LANGUAGE"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_platform_browser_platform_browser_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"], function () {
        return [_angular_router__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_router_router_b"]()];
      }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_router_router_h"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_router_router_h"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"], function (p0_0, p1_0) {
        return [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_platform_browser_platform_browser_m"](p0_0), _angular_router__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_router_router_i"](p1_0)];
      }, [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"]], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_router_router_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](131584, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"], [[3, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientXsrfModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientXsrfModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_router_router_a"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_router_router_e"], [[3, _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_11__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["DefaultUrlSerializer"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_11__["ChildrenOutletContexts"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ChildrenOutletContexts"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_router__WEBPACK_IMPORTED_MODULE_11__["ROUTER_CONFIGURATION"], {
        useHash: true
      }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_router_router_d"], [_angular_common__WEBPACK_IMPORTED_MODULE_5__["PlatformLocation"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_5__["APP_BASE_HREF"]], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], [_angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["PlatformLocation"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoader"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], [2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoaderConfig"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_11__["ROUTES"], function () {
        return [[{
          path: "",
          loadChildren: _app_routing_module__WEBPACK_IMPORTED_MODULE_15__["ɵ0"],
          canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]]
        }, {
          path: "login",
          loadChildren: _app_routing_module__WEBPACK_IMPORTED_MODULE_15__["ɵ1"]
        }, {
          path: "forgot",
          loadChildren: _app_routing_module__WEBPACK_IMPORTED_MODULE_15__["ɵ2"]
        }, {
          path: "signup",
          loadChildren: _app_routing_module__WEBPACK_IMPORTED_MODULE_15__["ɵ3"]
        }, {
          path: "not-found",
          loadChildren: _app_routing_module__WEBPACK_IMPORTED_MODULE_15__["ɵ4"]
        }, {
          path: "**",
          redirectTo: "not-found"
        }]];
      }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_router_router_f"], [_angular_router__WEBPACK_IMPORTED_MODULE_11__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ChildrenOutletContexts"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ROUTES"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ROUTER_CONFIGURATION"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_11__["UrlHandlingStrategy"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouteReuseStrategy"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_routing_module__WEBPACK_IMPORTED_MODULE_15__["AppRoutingModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_15__["AppRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, primeng_api__WEBPACK_IMPORTED_MODULE_17__["SharedModule"], primeng_api__WEBPACK_IMPORTED_MODULE_17__["SharedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _pages_register_register_module__WEBPACK_IMPORTED_MODULE_18__["RegisterModule"], _pages_register_register_module__WEBPACK_IMPORTED_MODULE_18__["RegisterModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_dropzone__WEBPACK_IMPORTED_MODULE_19__["NgxDropzoneModule"], ngx_dropzone__WEBPACK_IMPORTED_MODULE_19__["NgxDropzoneModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_CURRENCY_CODE"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_u"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵINJECTOR_SCOPE"], "root", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_common_http_http_e"], "XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_common_http_http_f"], "X-XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"], "BrowserAnimations", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["USE_STORE"], undefined, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["USE_DEFAULT_LANG"], undefined, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["USE_EXTEND"], undefined, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["DEFAULT_LANGUAGE"], undefined, [])]);
    });
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };
    /***/

  },

  /***/
  "./src/app/custom-translate-loader.ts":
  /*!********************************************!*\
    !*** ./src/app/custom-translate-loader.ts ***!
    \********************************************/

  /*! exports provided: CustomTranslateLoader */

  /***/
  function srcAppCustomTranslateLoaderTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomTranslateLoader", function () {
      return CustomTranslateLoader;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _assets_languajes_en__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../assets/languajes/en */
    "./src/assets/languajes/en.ts");
    /* harmony import */


    var _assets_languajes_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../assets/languajes/es */
    "./src/assets/languajes/es.ts");
    /* harmony import */


    var _assets_languajes_ch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../assets/languajes/ch */
    "./src/assets/languajes/ch.ts");
    /* harmony import */


    var _assets_languajes_ru__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../assets/languajes/ru */
    "./src/assets/languajes/ru.ts");

    var CustomTranslateLoader =
    /*#__PURE__*/
    function () {
      function CustomTranslateLoader() {
        _classCallCheck(this, CustomTranslateLoader);
      }

      _createClass(CustomTranslateLoader, [{
        key: "getTranslation",
        value: function getTranslation(lang) {
          return rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].create(function (observer) {
            switch (lang) {
              case 'ch':
                observer.next(_assets_languajes_ch__WEBPACK_IMPORTED_MODULE_3__["ch"]);
                break;

              case 'en':
                observer.next(_assets_languajes_en__WEBPACK_IMPORTED_MODULE_1__["en"]);
                break;

              case 'es':
                observer.next(_assets_languajes_es__WEBPACK_IMPORTED_MODULE_2__["es"]);
                break;

              case 'ru':
                observer.next(_assets_languajes_ru__WEBPACK_IMPORTED_MODULE_4__["ru"]);
                break;

              /*default:
                  observer.next(es);
                  break;*/
            }

            observer.complete();
          });
        }
      }]);

      return CustomTranslateLoader;
    }();
    /***/

  },

  /***/
  "./src/app/guard/auth.guard.ts":
  /*!*************************************!*\
    !*** ./src/app/guard/auth.guard.ts ***!
    \*************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppGuardAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AuthGuard =
    /*#__PURE__*/
    function () {
      function AuthGuard(router) {
        _classCallCheck(this, AuthGuard);

        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate() {
          console.log('Consultando el token del sistema???');
          console.log(localStorage.getItem('token'));

          if (localStorage.getItem('token')) {
            console.log('NEXT');
            return true;
          }

          console.log('Comienzaaaa');
          this.router.navigate(['/', 'login']);
          return true;
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      factory: function AuthGuard_Factory() {
        return new AuthGuard(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      },
      token: AuthGuard,
      providedIn: "root"
    });
    /***/
  },

  /***/
  "./src/app/pages/register/register.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/register/register.module.ts ***!
    \***************************************************/

  /*! exports provided: RegisterModule */

  /***/
  function srcAppPagesRegisterRegisterModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterModule", function () {
      return RegisterModule;
    });

    var RegisterModule = function RegisterModule() {
      _classCallCheck(this, RegisterModule);
    };
    /***/

  },

  /***/
  "./src/assets/languajes/ch.ts":
  /*!************************************!*\
    !*** ./src/assets/languajes/ch.ts ***!
    \************************************/

  /*! exports provided: ch */

  /***/
  function srcAssetsLanguajesChTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ch", function () {
      return ch;
    });

    var ch = {
      "title": "china",
      "Perfil": "浸透する",
      "Salir": "唾液",
      "Lista de Usuarios": "ユーザーリスト",
      "Lista de Flores": "花清單",
      "Lista de Fincas": "農場清單",
      "Pagos y reclamos": "付款和索償",
      "Identificación": "識別",
      "Nombres": "名前",
      "Apellidos": "苗字",
      "Foto": "写真",
      "Email": "郵便物",
      "Estado": "状態",
      "Saldo del Cliente": "客戶餘額",
      "Cliente": "客戶",
      "Fecha": "日期",
      "Saldo inicial": "初始餘額",
      "Datos de la búsqueda": "搜索數據",
      "Seleccione": "選擇",
      "Número de documentos": "文件數量",
      "Número de registros": "記錄數",
      "Documento": "文件",
      "Razón Social": "商家名稱",
      "Tipo documento": "文件類型",
      "Débito": "借方",
      "Crédito": "信用",
      "Saldo": "平衡",
      "Buscar": "搜索",
      "Totales": "總數",
      "Total": "總",
      "Consultar": "請教",
      "N°. Factura": "沒有。 發票",
      "N. de documento": "文件編號",
      "T. de documento": "文件類型",
      "No hay información encontrada": "找不到信息",
      "Tablero": "桌子",
      "Usuarios": "使用者",
      "Seguridad": "使用者",
      "Catálogos": "產品目錄",
      "Flores": "花卉",
      "Fincas": "農場",
      "E.Carga": "貨運公司",
      "Ventas": "銷售量",
      "Clientes": "顧客",
      "Facturación": "開票",
      "Registro asientos": "註冊座位",
      "Generar prealertas": "生成預警",
      "Reportes": "報告書",
      "Venta diarias de flores": "日常花卉銷售s",
      "Documentos clientes": "客戶文件",
      "Reporte prealerta": "預警前報告",
      "Prealerta": "預警",
      "Datos de la prealerta": "預警前數據",
      "Descargar reporte": "下載報告",
      "Enviar email": "發送電子郵件",
      "Número de clientes para la prealerta": "預警前的客戶數量",
      "Fecha de envio": "發貨日期",
      "Flor": "花",
      "Finca": "農場",
      "E. de carga": "貨運公司",
      "HQ/BQ": "HQ/BQ",
      "Tamaño": "尺寸",
      "Tallos": "莖",
      "Total tallos": "總莖",
      "Precio venta": "銷售價格",
      "Precio compra": "購買價格",
      "Variedad": "品種",
      "Marca": "牌",
      "Empresa carga": "貨運公司",
      "Documentos generados": "產生的文件",
      "Balance": "平衡",
      "Fecha inicial": "初始日期",
      "Fecha final": "最後日期",
      "Monto": "量",
      "N° de documento": "文檔編號",
      "Tipo transacción": "交易類型",
      "Ventas Diarias": "每日銷量",
      "N°. de tallos": "莖數",
      "Secuencial": "順序的",
      "Fecha de transacción": "交易日期",
      "Finca propia": "自己的農場",
      "Fecha es requerido": "日期為必填項",
      "Cliente es requerido": "需要客戶",
      "Finca es requerido": "農場是必需的",
      "Rosa Mística": "神秘玫瑰",
      "Marca es requerido": "品牌為必填項",
      "HB/QB es requerido": "需要HB / QB",
      "Variedad es requerido": "需要多種",
      "Tallos es requerido": "需要莖",
      "Empresa de carga es requerido": "需要貨運公司",
      "Estado es requerido": "國家為必填項",
      "Subir archivo": "上傳文件",
      "Ingreso manual": "手動輸入",
      "Valores": "價值觀",
      "El archivo tiene errores validar con el administrador": "該文件有錯誤，需要向管理員驗證",
      "Items de la prealerta": "預警前項目",
      "Agregar": "加",
      "Listo": "準備",
      "Si": "是",
      "No": "沒有",
      "Enviar": "發送",
      "Falta agregar campos": "添加缺少的字段",
      "Tipo de documento": "文件類型",
      "N°. Documento": "沒有。 文件",
      "Valor": "值",
      "Descripción": "描述",
      "Teléfono": "電話",
      "Ciudad": "市",
      "Dirección": "地址",
      "Débitos": "借方",
      "Créditos": "學分",
      "Tipo de documento es requerido": "文件類型為必填項",
      "Número de factura es requerido": "發票號為必填項",
      "N° Documento es requerido": "必須提供文件編號",
      "Valor es requerido": "值是必需的",
      "Descripción es requerido": "說明為必填項",
      "Nombre del documento": "文件名",
      "Balance general": "資產負債表",
      "Datos del cliente": "客戶資料",
      "Mi zona de entrega personalizada de documentos": "我自定義的文檔拖放區",
      "Detalles del reclamo": "索賠詳細信息",
      "Facturación Cliente": "客戶賬單",
      "Manual": "手冊",
      "Carga de datos": "加載數據中",
      "N° mawba": "毛ma",
      "Mawba es requerido": "必須提供木波",
      "Caja": "框",
      "Nuevo": "新",
      "Piezas": "件",
      "N° tallos": "Кол-во стеблей",
      "Precio": "價錢",
      "Guardar": "救",
      "Cancelar": "取消",
      "Items de la factura": "發票項目",
      "Precio es requerido": "價格為必填項",
      "Tamaño es requerido": "大小為必填項",
      "N° tallos es requerido": "需要N°莖",
      "Empresa carga es requerida": "需要加載公司a",
      "Modificar": "修改",
      "Atrás": "背後",
      "Agregar nueva flor": "添加新花",
      "Editar flor": "編輯花",
      "Nombre": "名稱",
      "Mi zona de imagenes": "我的圖像",
      "Recursos agregados": "增加資源",
      "Ventas diarias por cliente": "每位客户的日销售额",
      "Número de transacciones": "交易数量",
      "Monto de transacciones": "交易金额",
      "Ventas por mes": "每月销售",
      "Ventas por año": "年销售额",
      "Ventas por día": "每天销量",
      "Ventas por semana": "每周销售",
      "Porcentaje": "百分比"
    };
    /***/
  },

  /***/
  "./src/assets/languajes/en.ts":
  /*!************************************!*\
    !*** ./src/assets/languajes/en.ts ***!
    \************************************/

  /*! exports provided: en */

  /***/
  function srcAssetsLanguajesEnTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "en", function () {
      return en;
    });

    var en = {
      "title": "inglés",
      "Perfil": "Profile",
      "Salir": "Go Out",
      "Lista de Usuarios": "List of Users",
      "Lista de Flores": "List of Flowers",
      "Lista de Fincas": "Lista of Farms",
      "Pagos y reclamos": "Payments and claims",
      "Identificación": "Identification",
      "Nombres": "Names",
      "Apellidos": "Lastname",
      "Foto": "Photo",
      "Email": "Email",
      "Estado": "Status",
      "Saldo del Cliente": "Customer balance",
      "Cliente": "Client",
      "Fecha": "Date",
      "Saldo inicial": "Initial balance",
      "Datos de la búsqueda": "Search data",
      "Seleccione": "Select",
      "Número de documentos": "Number of documents",
      "Número de registros": "number of records",
      "Documento": "Document",
      "Razón Social": "Business name",
      "Tipo documento": "Document type",
      "Débito": "Debit",
      "Crédito": "Credit",
      "Saldo": "Balance",
      "Buscar": "Search",
      "Totales": "Totals",
      "Total": "Total",
      "Consultar": "Consult",
      "N°. Factura": "No. invoice",
      "N. de documento": "N. of document",
      "T. de documento": "Document type",
      "No hay información encontrada": "No data found",
      "Tablero": "Dashboard",
      "Usuarios": "Users",
      "Seguridad": "Security",
      "Catálogos": "Catálogos",
      "Flores": "Flower",
      "Fincas": "Farms",
      "E.Carga": "Company charge",
      "Ventas": "Sales",
      "Clientes": "Clients",
      "Facturación": "Invoices",
      "Registro asientos": "Register seats",
      "Generar prealertas": "Generate pre-alerts",
      "Reportes": "Reports",
      "Venta diarias de flores": "Daily flower sales",
      "Documentos clientes": "Client documents",
      "Reporte prealerta": "Pre-alert report",
      "Prealerta": "Pre-alert",
      "Datos de la prealerta": "Pre-alert data",
      "Descargar reporte": "Download report",
      "Enviar email": "Send email",
      "Número de clientes para la prealerta": "Number of clients for the pre-alert",
      "Fecha de envio": "Shipping date",
      "Flor": "Flower",
      "Finca": "Farm",
      "E. de carga": "Freight company",
      "HQ/BQ": "HQ/BQ",
      "Tamaño": "Size",
      "Tallos": "Stems",
      "Total tallos": "Total stems",
      "Precio venta": "Sale price",
      "Precio compra": "Purchase price",
      "Variedad": "Variety",
      "Marca": "Brand",
      "Empresa carga": "Freight company",
      "Documentos generados": "Generated documents",
      "Balance": "Balance",
      "Fecha inicial": "Initial date",
      "Fecha final": "Final date",
      "Monto": "Amount",
      "N° de documento": "Document number",
      "Tipo transacción": "Transaction type",
      "Ventas Diarias": "Daily sales",
      "N°. de tallos": "Number of stems",
      "Secuencial": "Sequential",
      "Fecha de transacción": "Transaction date",
      "Finca propia": "Own farm",
      "Fecha es requerido": "Date is required",
      "Cliente es requerido": "Client is required",
      "Finca es requerido": "Farm is required",
      "Rosa Mística": "Mystic Rose",
      "Marca es requerido": "Brand is required",
      "HB/QB es requerido": "HB/QB is required",
      "Variedad es requerido": "Variety is required",
      "Tallos es requerido": "Stems is requiredo",
      "Empresa de carga es requerido": "Cargo company is required",
      "Estado es requerido": "State is required",
      "Subir archivo": "Upload file",
      "Ingreso manual": "Manual input",
      "Valores": "Values",
      "El archivo tiene errores validar con el administrador": "The file has errors validate with the administrator",
      "Items de la prealerta": "Pre-alert items",
      "Agregar": "Add",
      "Listo": "Ready",
      "Si": "Yes",
      "No": "Not",
      "Enviar": "Send",
      "Falta agregar campos": "Add fields missing",
      "Tipo de documento": "Document type",
      "N°. Documento": "No. Document",
      "Valor": "Value",
      "Descripción": "Description",
      "Teléfono": "Telephone",
      "Ciudad": "City",
      "Dirección": "Address",
      "Débitos": "Debits",
      "Créditos": "Credits",
      "Tipo de documento es requerido": "Type of document is required",
      "Número de factura es requerido": "Invoice number is required",
      "N° Documento es requerido": "Document number is required",
      "Valor es requerido": "Value is required",
      "Descripción es requerido": "Description is required",
      "Nombre del documento": "Document name",
      "Balance general": "Balance sheet",
      "Datos del cliente": "Client data",
      "Mi zona de entrega personalizada de documentos": "My custom dropzone of documents",
      "Detalles del reclamo": "Claim details",
      "Facturación Cliente": "Customer Billing",
      "Manual": "Handbook",
      "Operación": "Operations",
      "N° mawba": "No. mawba",
      "Mawba es requerido": "Mawba is required",
      "Caja": "Box",
      "Nuevo": "New",
      "Piezas": "Pieces",
      "N° tallos": "N ° stems",
      "Precio": "Price",
      "Guardar": "Save",
      "Cancelar": "Cancel",
      "Items de la factura": "Invoice items",
      "Precio es requerido": "Price is required",
      "Tamaño es requerido": "Size is required",
      "N° tallos es requerido": "N ° stems is required",
      "Empresa carga es requerida": "Freight company is required",
      "Modificar": "Modify",
      "Atrás": "Back",
      "Agregar nueva flor": "Add new flower",
      "Editar flor": "Edit flower",
      "Nombre": "Name",
      "Mi zona de imagenes": "Mi zona of images",
      "Recursos agregados": "Added resources",
      "Ventas diarias por cliente": "Daily sales per customer",
      "Número de transacciones": "Number of transactions",
      "Monto de transacciones": "Transaction amount",
      "Ventas por mes": "Sales per month",
      "Ventas por año": "Sales per year",
      "Ventas por día": "Sales per day",
      "Ventas por semana": "Sales per week",
      "Porcentaje": "Percentage"
    };
    /***/
  },

  /***/
  "./src/assets/languajes/es.ts":
  /*!************************************!*\
    !*** ./src/assets/languajes/es.ts ***!
    \************************************/

  /*! exports provided: es */

  /***/
  function srcAssetsLanguajesEsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "es", function () {
      return es;
    });

    var es = {
      "title": "español",
      "Perfil": "Perfil",
      "Salir": "Salir",
      "Lista de Usuarios": "Lista de Usuarios",
      "Lista de Flores": "Lista de Flores",
      "Lista de Fincas": "Lista de Fincas",
      "Pagos y reclamos": "Pagos y reclamos",
      "Identificación": "Identificación",
      "Nombres": "Nombres",
      "Apellidos": "Apellidos",
      "Foto": "Foto",
      "Email": "Email",
      "Estado": "Estado",
      "Saldo del Cliente": "Saldo del Cliente",
      "Cliente": "Cliente",
      "Fecha": "Fecha",
      "Saldo inicial": "Saldo inicial",
      "Datos de la búsqueda": "Datos de la búsqueda",
      "Seleccione": "Seleccione",
      "Número de documentos": "Número de documentos",
      "Número de registros": "Número de registros",
      "Documento": "Documento",
      "Razón Social": "Razón Social",
      "Tipo documento": "Tipo documento",
      "Débito": "Débito",
      "Crédito": "Crédito",
      "Saldo": "Saldo",
      "Buscar": "Buscar",
      "Totales": "Totales",
      "Total": "Total",
      "Consultar": "Consultar",
      "N°. Factura": "N°. Factura",
      "N. de documento": "N. de documento",
      "T. de documento": "T. de documento",
      "No hay información encontrada": "No hay información encontrada",
      "Tablero": "Tablero",
      "Usuarios": "Usuarios",
      "Seguridad": "Seguridad",
      "Catálogos": "Catálogos",
      "Flores": "Flores",
      "Fincas": "Fincas",
      "E.Carga": "E.Carga",
      "Ventas": "Ventas",
      "Clientes": "Clientes",
      "Facturación": "Facturación",
      "Registro asientos": "Registro asientos",
      "Generar prealertas": "Generar prealertas",
      "Reportes": "Reportes",
      "Venta diarias de flores": "Venta diarias de flores",
      "Documentos clientes": "Documentos clientes",
      "Reporte prealerta": "Reporte prealerta",
      "Prealerta": "Prealerta",
      "Datos de la prealerta": "Datos de la prealerta",
      "Descargar reporte": "Descargar reporte",
      "Enviar email": "Enviar email",
      "Número de clientes para la prealerta": "Número de clientes para la prealerta",
      "Fecha de envio": "Fecha de envio",
      "Flor": "Flor",
      "Finca": "Finca",
      "E. de carga": "E. de carga",
      "HQ/BQ": "HQ/BQ",
      "Tamaño": "Tamaño",
      "Tallos": "Tallos",
      "Total tallos": "Total tallos",
      "Precio venta": "Precio venta",
      "Precio compra": "Precio compra",
      "Variedad": "Variedad",
      "Marca": "Marca",
      "Empresa carga": "Empresa carga",
      "Documentos generados": "Documentos generados",
      "Balance": "Balance",
      "Fecha inicial": "Fecha inicial",
      "Fecha final": "Fecha final",
      "Monto": "Monto",
      "N° de documento": "N° de documento",
      "Tipo transacción": "Tipo transacción",
      "Ventas Diarias": "Ventas diarias",
      "N°. de tallos": "N°. de tallos",
      "Secuencial": "Secuencial",
      "Fecha de transacción": "Fecha de transacción",
      "Finca propia": "Finca propia",
      "Fecha es requerido": "Fecha es requerido",
      "Cliente es requerido": "Cliente es requerido",
      "Finca es requerido": "Finca es requerido",
      "Rosa Mística": "Rosa Mística",
      "Marca es requerido": "Marca es requerido",
      "HB/QB es requerido": "HB/QB es requerido",
      "Variedad es requerido": "Variedad es requerido",
      "Tallos es requerido": "Tallos es requerido",
      "Empresa de carga es requerido": "Empresa de carga es requerido",
      "Estado es requerido": "Estado es requerido",
      "Subir archivo": "Subir archivo",
      "Ingreso manual": "Ingreso manual",
      "Valores": "Valores",
      "El archivo tiene errores validar con el administrador": "El archivo tiene errores validar con el administrador",
      "Items de la prealerta": "Items de la prealerta",
      "Agregar": "Agregar",
      "Listo": "Listo",
      "Si": "Si",
      "No": "No",
      "Enviar": "Enviar",
      "Falta agregar campos": "Falta agregar campos",
      "Tipo de documento": "Tipo de documento",
      "N°. Documento": "N°. Documento",
      "Valor": "Valor",
      "Descripción": "Descripción",
      "Teléfono": "Teléfono",
      "Ciudad": "Ciudad",
      "Dirección": "Dirección",
      "Débitos": "Débitos",
      "Créditos": "Créditos",
      "Tipo de documento es requerido": "Tipo de documento es requerido",
      "Número de factura es requerido": "Número de factura es requerido",
      "N° Documento es requerido": "N° Documento es requerido",
      "Valor es requerido": "Valor es requerido",
      "Descripción es requerido": "Descripción es requerido",
      "Nombre del documento": "Nombre del documento",
      "Balance general": "Balance general",
      "Datos del cliente": "Datos del cliente",
      "Mi zona de entrega personalizada de documentos": "Mi zona de entrega personalizada de documentos",
      "Detalles del reclamo": "Detalles del reclamo",
      "Facturación Cliente": "Facturación Cliente",
      "Manual": "Manual",
      "Operación": "Operación",
      "N° mawba": "N° mawba",
      "Mawba es requerido": "Mawba es requerido",
      "Caja": "Caja",
      "Nuevo": "Nuevo",
      "Piezas": "Piezas",
      "N° tallos": "N° tallos",
      "Precio": "Precio",
      "Guardar": "Guardar",
      "Cancelar": "Cancelar",
      "Items de la factura": "Items de la factura",
      "Precio es requerido": "Precio es requerido",
      "Tamaño es requerido": "Tañano es requerido",
      "N° tallos es requerido": "N° tallos es requerido",
      "Empresa carga es requerida": "Empresa carga es requerida",
      "Modificar": "Modificar",
      "Atrás": "Atrás",
      "Agregar nueva flor": "Agregar nueva flor",
      "Editar flor": "Editar flor",
      "Nombre": "Nombre",
      "Mi zona de imagenes": "Mi zona de imagenes",
      "Recursos agregados": "Recursos agregados",
      "Ventas diarias por cliente": "Ventas diarias por cliente",
      "Número de transacciones": "Número de transacciones",
      "Monto de transacciones": "Monto de transacciones",
      "Ventas por mes": "Ventas por mes",
      "Ventas por año": "Ventas por año",
      "Ventas por día": "Ventas por día",
      "Ventas por semana": "Ventas por semana",
      "Porcentaje": "Porcentaje"
    };
    /***/
  },

  /***/
  "./src/assets/languajes/ru.ts":
  /*!************************************!*\
    !*** ./src/assets/languajes/ru.ts ***!
    \************************************/

  /*! exports provided: ru */

  /***/
  function srcAssetsLanguajesRuTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ru", function () {
      return ru;
    });

    var ru = {
      "title": "rusa",
      "Perfil": "профиль",
      "Salir": "уехать",
      "Lista de Usuarios": "Список пользователей",
      "Lista de Flores": "Список цветов",
      "Lista de Fincas": "список ферм",
      "Pagos y reclamos": "Платежи и претензии",
      "Identificación": "МНЕ БЫ",
      "Nombres": "Имена",
      "Apellidos": "Фамилии",
      "Foto": "Фото",
      "Email": "Эл. почта",
      "Estado": "состояние",
      "Saldo del Cliente": "Баланс клиента",
      "Cliente": "Клиент",
      "Fecha": "Дата",
      "Saldo inicial": "Первоначальный баланс",
      "Datos de la búsqueda": "Данные поиска",
      "Seleccione": "Пожалуйста выберите",
      "Número de documentos": "Количество документов",
      "Número de registros": "Количество записей",
      "Documento": "Документ",
      "Razón Social": "Наименование фирмы",
      "Tipo documento": "Тип документа",
      "Débito": "Дебет",
      "Crédito": "Кредит",
      "Saldo": "Остаток средств",
      "Buscar": "Ищи",
      "Totales": "Итоги",
      "Total": "Общее",
      "Consultar": "Проконсультируйтесь",
      "N°. Factura": "Нет. выставленный счет",
      "N. de documento": "Документ №.",
      "T. de documento": "Размер документа",
      "No hay información encontrada": "Информация не найдена",
      "Tablero": "доска",
      "Usuarios": "пользователи",
      "Seguridad": "безопасность",
      "Catálogos": "Catálogos",
      "Flores": "цветы",
      "Fincas": "Фермы",
      "E.Carga": "обвинение компании",
      "Ventas": "продажи",
      "Clientes": "клиенты",
      "Facturación": "Биллинг",
      "Registro asientos": "Зарегистрировать места",
      "Generar prealertas": "Создавать предварительные оповещения",
      "Reportes": "отчеты",
      "Venta diarias de flores": "Ежедневная распродажа цветов",
      "Documentos clientes": "Клиентские документы",
      "Reporte prealerta": "Предварительный отчет",
      "Prealerta": "Предварительное оповещение",
      "Datos de la prealerta": "Данные предварительного оповещения",
      "Descargar reporte": "Скачать отчет",
      "Enviar email": "Отправить электронное письмо",
      "Número de clientes para la prealerta": "Количество клиентов для предварительного оповещения",
      "Fecha de envio": "Дата отгрузки",
      "Flor": "Цветок",
      "Finca": "Ферма",
      "E. de carga": "Транспортная компания",
      "HQ/BQ": "HQ/BQ",
      "Tamaño": "Размер",
      "Tallos": "Стебли",
      "Total tallos": "Всего стеблей",
      "Precio venta": "Цена продажи",
      "Precio compra": "Цена",
      "Variedad": "разнообразие",
      "Marca": "марка",
      "Empresa carga": "Транспортная компания",
      "Documentos generados": "Сгенерированные документы",
      "Balance": "Остаток средств",
      "Fecha inicial": "Дата начала",
      "Fecha final": "Дата окончания",
      "Monto": "Количество",
      "N° de documento": "Номер документа",
      "Tipo transacción": "Тип операции",
      "Ventas Diarias": "Ежедневные продажи",
      "N°. de tallos": "Количество стеблей",
      "Secuencial": "Последовательный",
      "Fecha de transacción": "Дата совершения операции",
      "Finca propia": "Собственная ферма",
      "Fecha es requerido": "Укажите дату",
      "Cliente es requerido": "Требуется заказчик",
      "Finca es requerido": "Требуется ферма",
      "Rosa Mística": "Мистическая роза",
      "Marca es requerido": "Требуется бренд",
      "HB/QB es requerido": "HB / QB требуется",
      "Variedad es requerido": "Требуется разнообразие",
      "Tallos es requerido": "Стебли обязательны",
      "Empresa de carga es requerido": "Требуется грузовая компания",
      "Estado es requerido": "Требуется состояние",
      "Subir archivo": "Загрузить файл",
      "Ingreso manual": "Ручной ввод",
      "Valores": "Ruchnoy vvod",
      "El archivo tiene errores validar con el administrador": "В файле есть ошибки, уточните у администратора",
      "Items de la prealerta": "Предметы предварительного оповещения",
      "Agregar": "Добавить",
      "Listo": "готовы",
      "Si": "да",
      "No": "Нет",
      "Enviar": "послать",
      "Falta agregar campos": "Добавить отсутствующие поля",
      "Tipo de documento": "Тип документа",
      "N°. Documento": "Нет. Документ",
      "Valor": "Значение",
      "Descripción": "Описание",
      "Teléfono": "телефон",
      "Ciudad": "город",
      "Dirección": "Адрес",
      "Débitos": "Дебет",
      "Créditos": "Кредиты",
      "Tipo de documento es requerido": "Требуется тип документа",
      "Número de factura es requerido": "Требуется номер счета",
      "N° Documento es requerido": "N° Documento es requerido",
      "Valor es requerido": "Требуется значение",
      "Descripción es requerido": "Описание обязательно",
      "Nombre del documento": "Название документа",
      "Balance general": "Баланс",
      "Datos del cliente": "Данные клиента",
      "Mi zona de entrega personalizada de documentos": "Моя настраиваемая зона размещения документов",
      "Detalles del reclamo": "Детали претензии",
      "Facturación Cliente": "Биллинг клиента",
      "Manual": "Справочник",
      "Operación": "Операция",
      "N° mawba": "Нет mawba",
      "Mawba es requerido": "Требуется мауба",
      "Caja": "Коробка",
      "Nuevo": "Новый",
      "Piezas": "Шт",
      "N° tallos": "Кол-во стеблей",
      "Precio": "Цена",
      "Guardar": "спасти",
      "Cancelar": "Отмена",
      "Items de la factura": "Позиции счета",
      "Precio es requerido": "цена обязательна",
      "Tamaño es requerido": "Размер обязателен",
      "N° tallos es requerido": "Требуется количество стержней",
      "Empresa carga es requerida": "Требуется грузовая компания",
      "Modificar": "Изменить",
      "Atrás": "Позади",
      "Agregar nueva flor": "Добавить новый цветок",
      "Editar flor": "Добавить новый цветок",
      "Nombre": "название",
      "Mi zona de imagenes": "Область моего изображения",
      "Recursos agregados": "Добавленные ресурсы",
      "Ventas diarias por cliente": "Ежедневные продажи на одного покупателя",
      "Número de transacciones": "Количество транзакций",
      "Monto de transacciones": "Сумма транзакции",
      "Ventas por mes": "Продажи в месяц",
      "Ventas por año": "Продажи в год",
      "Ventas por día": "Продажи в день",
      "Ventas por semana": "Продажи в неделю",
      "Porcentaje": "Процент"
    };
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });

    var IP = "https://addsoft-tech.com:";
    var PUERTO = "8443";
    var URL = IP + PUERTO;
    var environment = {
      production: false,
      email: 'lukassant77@gmail.com',
      url: 'https://addsoft-tech.com:8443/rmi/',
      login: URL + '/giz/api/auth/login',
      getusers: URL + '/giz/api/person/all',
      register: URL + '/giz/api/persons/register/T0001',
      questionnaries: URL + '/giz/api/test/',
      usersbyquestionnaries: URL + '/giz/api/people/by/',
      client: URL + '/romi/apirm/crm/clients',
      addclient: URL + '/romi/apirm/crm/client/add',
      updateclient: URL + '/romi/apirm/crm/client/update',
      users: URL + '/romi/apirm/user/all',
      adduser: URL + '/giz/api/person/create',
      updateuser: URL + '/giz/api/user/update',
      resetpassword: URL + '/romi/apirm/user/reset/pass/',
      roles: URL + '/romi/apirm/user/roles/all',
      rolesbyuser: URL + '/romi/apirm/user/usro/add',
      removeroles: URL + '/romi/apirm/user/usro/remove',
      flowers: URL + '/romi/apirm/crm/flowers',
      addflowers: URL + '/romi/apirm/crm/flower/add',
      updateflowers: URL + '/romi/apirm/crm/flower/update',
      searchflower: URL + '/romi/apirm/crm/flower/',
      addresourcesflower: URL + '/romi/apirm/crm/flower/resource/add',
      removeresourcesflower: URL + '/romi/apirm/crm/flower/resource/remove/',
      finca: URL + '/romi/apirm/crm/farms',
      addfinca: URL + '/romi/apirm/crm/farm/add',
      updatefinca: URL + '/romi/apirm/crm/farm/update',
      empresaCargo: URL + '/romi/apirm/crm/cargocompanies',
      addempresaCargo: URL + '/romi/apirm/crm/cargocompany/add',
      updateempresaCargo: URL + '/romi/apirm/crm/cargocompany/update',
      marcaciones: URL + '/romi/apirm/crm/marks/',
      addmarcaciones: URL + '/romi/apirm/crm/mark/add',
      updatemarcaciones: URL + '/romi/apirm/crm/mark/update',
      registerinvoice: URL + '/romi/apirm/invoice/register',
      searchtype: URL + '/romi/apirm/crm/entity/',
      registerpaymentandclaim: URL + '/romi/apirm/trx/register',
      registerprealert: URL + '/romi/apirm/prealert/register',
      getsales: URL + '/romi/apirm/invoice/find/date/',
      getinvoicesbyclient: URL + '/romi/apirm/trx/find/cliedate/',
      getmarcsbyname: URL + '/romi/apirm/crm/mark/find/',
      getprealertactive: URL + '/romi/apirm/prealert/actives',
      sendEmail: URL + '/romi/apirm/crm/mail/send/trx',
      invoicesdrafts: URL + '/romi/apirm/invoice/drafts',
      prealertdrafts: URL + '/romi/apirm/prealert/drafts',
      charts: URL + '/romi/apirm/crm/data/charts'
    };
    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module.ngfactory */
    "./src/app/app.module.ngfactory.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModuleFactory(_app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_2__["AppModuleNgFactory"]).catch(function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/alex/Documentos/AddSofTech/Aplicaciones web/GIZ/giz-ng-9.0.0/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map