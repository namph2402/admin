webpackJsonp(["login.module"],{

/***/ "./src/app/pages/login/login.component.css":
/***/ (function(module, exports) {

module.exports = "#btnLoginGoogle iframe {\r\n  display: -webkit-box !important;\r\n  display: -ms-flexbox !important;\r\n  display: flex !important;\r\n}\r\n\r\n.login-logo {\r\n  margin-bottom: 0;\r\n  height: 165px;\r\n}\r\n\r\n.img-circle {\r\n  width: 200px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/pages/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login-box\">\r\n  <div class=\"login-logo\">\r\n    <img alt=\"User Image\" class=\"img-circle\" src=\"assets/img/logo.png\">\r\n  </div>\r\n  <div class=\"login-box-body\">\r\n    <p class=\"login-box-msg\">Điền thông tin để đăng nhập</p>\r\n    <form (ngSubmit)=\"login()\" [formGroup]=\"formGroup\" novalidate>\r\n      <div class=\"form-group has-feedback\">\r\n        <input class=\"form-control\" formControlName=\"username\" placeholder=\"Tài khoản\" type=\"text\">\r\n        <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\r\n      </div>\r\n      <div class=\"form-group has-feedback\">\r\n        <input class=\"form-control\" formControlName=\"password\" placeholder=\"Mật khẩu\" type=\"password\">\r\n        <span class=\"glyphicon glyphicon-lock form-control-feedback\"></span>\r\n      </div>\r\n      <div class=\"row\" style=\"display: flex; justify-content: center;\">\r\n        <div class=\"col-xs-4\">\r\n          <button class=\"btn btn-primary btn-block btn-flat\" type=\"submit\">Đăng nhập</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_toaster__ = __webpack_require__("./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_utils__ = __webpack_require__("./src/app/core/utils/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_auth__ = __webpack_require__("./src/app/modules/auth/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(route, router, authService, formBuilder, toast) {
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.toast = toast;
        this.bodyClasses = ['login-page'];
        this.body = document.getElementsByTagName('body')[0];
        this.formGroup = formBuilder.group({
            username: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required),
            password: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required),
        });
        this.check_login();
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bodyClasses.forEach(function (value) { return _this.body.classList.add(value); });
        $.getScript('assets/js/login.js');
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        var _this = this;
        this.bodyClasses.forEach(function (value) { return _this.body.classList.remove(value); });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        var user = this.formGroup.value;
        this.authService.store(user).subscribe(function (res) {
            __WEBPACK_IMPORTED_MODULE_4__core_utils__["d" /* StorageUtil */].set('name', res.name);
            __WEBPACK_IMPORTED_MODULE_4__core_utils__["d" /* StorageUtil */].set('username', res.username);
            __WEBPACK_IMPORTED_MODULE_4__core_utils__["d" /* StorageUtil */].set('avatar', res.avatar);
            __WEBPACK_IMPORTED_MODULE_4__core_utils__["d" /* StorageUtil */].set('token', res.token);
            _this.router.navigateByUrl('');
            _this.toast.pop('success', 'Đăng nhập', 'Thành công');
        }, function () { return _this.toast.pop('error', 'Đăng nhập', 'Thất bại'); });
    };
    LoginComponent.prototype.check_login = function () {
        var token = __WEBPACK_IMPORTED_MODULE_4__core_utils__["d" /* StorageUtil */].get('token');
        if (!!token) {
            this.router.navigateByUrl('');
        }
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/pages/login/login.component.html"),
            styles: [__webpack_require__("./src/app/pages/login/login.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_5__modules_auth__["a" /* AuthService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__modules_auth__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_1_angular2_toaster__["b" /* ToasterService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/login.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_component__ = __webpack_require__("./src/app/pages/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__login_component__["a" /* LoginComponent */],
    }
];
var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forChild(routes)
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login_component__["a" /* LoginComponent */]
            ]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ })

});
//# sourceMappingURL=login.module.chunk.js.map