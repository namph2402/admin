webpackJsonp(["staff.module"],{

/***/ "./src/app/modules/staff/staff-create/staff-create.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/staff/staff-create/staff-create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header bg-primary\">\r\n  <h4 class=\"modal-title pull-left\">Thêm mới nhân viên</h4>\r\n  <button (click)=\"dismiss()\" aria-label=\"Close\" class=\"close pull-right\" type=\"button\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n      <form [formGroup]=\"formGroup\" novalidate>\r\n        <div *ngFor=\"let f of fields\" [ngClass]=\"{'has-error':!formGroup.controls[f.formControl].valid}\"\r\n             class=\"form-group\">\r\n          <ng-template [ngIf]=\"f.type=='input'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{f.label}} <span\r\n              *ngIf=\"f.typeof == 'number' && f.formControl == 'wage'\" style=\"font-weight: normal\">\r\n              ( {{formGroup.controls[f.formControl].value|number:'1.0-0'}} )\r\n            </span>\r\n            </label>\r\n            <input [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\" [placeholder]=\"f.placeHolder\"\r\n                   [type]=\"f.typeof\" class=\"form-control\">\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type=='textarea'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{f.label}}\r\n            </label>\r\n            <textarea [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\" [placeholder]=\"f.placeHolder\"\r\n                      [rows]=\"5\" class=\"form-control\">\r\n          </textarea>\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type=='file'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{f.label}}\r\n            </label>\r\n            <input (change)=\"f.config['onFileChange'](formGroup,f.formControl,$event)\" [id]=\"f.formControl\" [name]=\"f.formControl\"\r\n                   [placeholder]=\"f.placeHolder\" accept=\"{{f.config['accept']}}\"\r\n                   class=\"form-control\"\r\n                   type=\"file\">\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type=='checkbox'\">\r\n            <div class=\"checkbox\">\r\n              <label>\r\n                <input [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\" type=\"checkbox\">\r\n                {{f.label}}\r\n              </label>\r\n            </div>\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type=='select'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{f.label}}\r\n            </label>\r\n            <select [formControlName]=\"f.formControl\" [id]=\"f.formControl\" class=\"form-control\">\r\n              <option *ngFor=\"let option of f.data\" [value]=\"option['value']\">{{option['name']}}</option>\r\n            </select>\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type=='select2'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{f.label}}\r\n            </label>\r\n            <angular2-multiselect [data]=\"f.data\" [formControlName]=\"f.formControl\"\r\n                                  [id]=\"f.formControl\" [settings]=\"f.config\">\r\n            </angular2-multiselect>\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type=='html'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{f.label}}\r\n            </label>\r\n            <ckeditor [formControlName]=\"f.formControl\" [id]=\"f.formControl\"\r\n                      debounce=\"500\">\r\n            </ckeditor>\r\n          </ng-template>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <button (click)=\"create()\" [disabled]=\"!formGroup.valid\" class=\"btn btn-primary\" type=\"button\">Thêm mới</button>\r\n  <button (click)=\"dismiss()\" class=\"btn btn-default\" type=\"button\">Hủy bỏ</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/staff/staff-create/staff-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StaffCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_crud__ = __webpack_require__("./src/app/core/crud/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__staff_service__ = __webpack_require__("./src/app/modules/staff/staff.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_common__ = __webpack_require__("./src/app/core/common/index.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var StaffCreateComponent = /** @class */ (function (_super) {
    __extends(StaffCreateComponent, _super);
    function StaffCreateComponent(service, modal, builder) {
        return _super.call(this, service, modal, builder) || this;
    }
    StaffCreateComponent.prototype.onInit = function () {
    };
    StaffCreateComponent.prototype.onDestroy = function () {
    };
    StaffCreateComponent.prototype.buildForm = function () {
        return this.formBuilder.group({
            username: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(255), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern('^(?=.*[a-z]+)[a-z0-9]*$')]),
            fullname: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(255), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern('[^ ].*$')]),
            phone: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(255), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern('^(0)[0-9]{9}$')]),
            dob: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(255), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern('[^ ].*$')]),
            gender: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(255)]),
            address: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(255), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern('[^ ].*$')]),
            wage: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].min(0)]),
            position: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(255)]),
            bank_name: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(255), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern('[^ ].*$')]),
            bank_number: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(255)]),
        });
    };
    StaffCreateComponent.prototype.initFieldForm = function () {
        return [
            __WEBPACK_IMPORTED_MODULE_5__core_common__["b" /* FieldForm */].createTextInput('Tên đăng nhập', 'username', 'Nhập tên đăng nhập'),
            __WEBPACK_IMPORTED_MODULE_5__core_common__["b" /* FieldForm */].createTextInput('Tên nhân viên', 'fullname', 'Nhập tên nhân viên'),
            __WEBPACK_IMPORTED_MODULE_5__core_common__["b" /* FieldForm */].createNumberInput('Số điện thoại', 'phone', 'Nhập số điện thoại'),
            __WEBPACK_IMPORTED_MODULE_5__core_common__["b" /* FieldForm */].createDateInput('Ngày sinh', 'dob', 'Chọn ngày'),
            __WEBPACK_IMPORTED_MODULE_5__core_common__["b" /* FieldForm */].createSelect('Giới tính', 'gender', 'Chọn một', [
                {
                    name: 'Nam',
                    value: '0'
                },
                {
                    name: 'Nữ',
                    value: '1'
                }
            ]),
            __WEBPACK_IMPORTED_MODULE_5__core_common__["b" /* FieldForm */].createTextInput('Địa chỉ', 'address', 'Nhập địa chỉ'),
            __WEBPACK_IMPORTED_MODULE_5__core_common__["b" /* FieldForm */].createNumberInput('Lương', 'wage', 'Nhập số lương'),
            __WEBPACK_IMPORTED_MODULE_5__core_common__["b" /* FieldForm */].createSelect('Chức vụ', 'position', 'Chọn một', [
                {
                    name: 'Quản lý',
                    value: 'Quản lý'
                },
                {
                    name: 'Nhân viên',
                    value: 'Nhân viên'
                },
                {
                    name: 'Nhân viên thời vụ',
                    value: 'Nhân viên thời vụ'
                }
            ]),
            __WEBPACK_IMPORTED_MODULE_5__core_common__["b" /* FieldForm */].createTextInput('Tên ngân hàng', 'bank_name', 'Nhập tên ngân hàng'),
            __WEBPACK_IMPORTED_MODULE_5__core_common__["b" /* FieldForm */].createTextInput('Số tài khoản', 'bank_number', 'Nhập số tài khoản')
        ];
    };
    StaffCreateComponent.prototype.loaded = function () {
    };
    StaffCreateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-staff-create',
            template: __webpack_require__("./src/app/modules/staff/staff-create/staff-create.component.html"),
            styles: [__webpack_require__("./src/app/modules/staff/staff-create/staff-create.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_4__staff_service__["a" /* StaffService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__staff_service__["a" /* StaffService */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__["a" /* BsModalRef */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]])
    ], StaffCreateComponent);
    return StaffCreateComponent;
}(__WEBPACK_IMPORTED_MODULE_1__core_crud__["d" /* AbstractModalComponent */]));



/***/ }),

/***/ "./src/app/modules/staff/staff-edit/staff-edit.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/staff/staff-edit/staff-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header bg-primary\">\r\n  <h4 class=\"modal-title pull-left\">Chỉnh sửa nhân viên</h4>\r\n  <button (click)=\"dismiss()\" aria-label=\"Close\" class=\"close pull-right\" type=\"button\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n      <form [formGroup]=\"formGroup\" novalidate>\r\n        <div *ngFor=\"let f of fields\" [ngClass]=\"{'has-error':!formGroup.controls[f.formControl].valid && !formGroup.controls[f.formControl].disabled}\"\r\n             class=\"form-group\">\r\n          <ng-template [ngIf]=\"f.type=='input'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{f.label}} <span\r\n              *ngIf=\"f.typeof == 'number' && f.formControl == 'wage'\" style=\"font-weight: normal\">\r\n              ( {{formGroup.controls[f.formControl].value|number:'1.0-0'}} )\r\n            </span>\r\n            </label>\r\n            <input [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\" [placeholder]=\"f.placeHolder\"\r\n                   [type]=\"f.typeof\" class=\"form-control\">\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type=='textarea'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{f.label}}\r\n            </label>\r\n            <textarea [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\" [placeholder]=\"f.placeHolder\"\r\n                      [rows]=\"5\" class=\"form-control\">\r\n          </textarea>\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type=='file'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{f.label}}\r\n            </label>\r\n            <input (change)=\"f.config['onFileChange'](formGroup,f.formControl,$event)\" [id]=\"f.formControl\" [name]=\"f.formControl\"\r\n                   [placeholder]=\"f.placeHolder\" accept=\"{{f.config['accept']}}\"\r\n                   class=\"form-control\"\r\n                   type=\"file\">\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type=='checkbox'\">\r\n            <div class=\"checkbox\">\r\n              <label>\r\n                <input [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\" type=\"checkbox\">\r\n                {{f.label}}\r\n              </label>\r\n            </div>\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type=='select'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{f.label}}\r\n            </label>\r\n            <select [formControlName]=\"f.formControl\" [id]=\"f.formControl\" class=\"form-control\">\r\n              <option *ngFor=\"let option of f.data\" [value]=\"option['value']\">{{option['name']}}</option>\r\n            </select>\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type=='select2'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{f.label}}\r\n            </label>\r\n            <angular2-multiselect [data]=\"f.data\" [formControlName]=\"f.formControl\"\r\n                                  [id]=\"f.formControl\" [settings]=\"f.config\">\r\n            </angular2-multiselect>\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type=='html'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{f.label}}\r\n            </label>\r\n            <ckeditor [formControlName]=\"f.formControl\" [id]=\"f.formControl\"\r\n                      debounce=\"500\">\r\n            </ckeditor>\r\n          </ng-template>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <button (click)=\"edit()\" [disabled]=\"!formGroup.valid\" class=\"btn btn-primary\" type=\"button\">Chỉnh sửa</button>\r\n  <button (click)=\"dismiss()\" class=\"btn btn-default\" type=\"button\">Hủy bỏ</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/staff/staff-edit/staff-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StaffEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_crud__ = __webpack_require__("./src/app/core/crud/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_common__ = __webpack_require__("./src/app/core/common/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__staff_service__ = __webpack_require__("./src/app/modules/staff/staff.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var StaffEditComponent = /** @class */ (function (_super) {
    __extends(StaffEditComponent, _super);
    function StaffEditComponent(service, modal, builder) {
        return _super.call(this, service, modal, builder) || this;
    }
    StaffEditComponent.prototype.onInit = function () {
    };
    StaffEditComponent.prototype.onDestroy = function () {
    };
    StaffEditComponent.prototype.buildForm = function () {
        return this.formBuilder.group({
            username: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]({ value: null, disabled: true }, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(255), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern('^(?=.*[a-z]+)[a-z0-9]*$')]),
            fullname: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(255), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern('[^ ].*$')]),
            phone: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(255), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern('^(0)[0-9]{9}$')]),
            dob: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(255), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern('[^ ].*$')]),
            gender: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(255)]),
            address: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(255), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern('[^ ].*$')]),
            wage: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].min(0)]),
            position: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(255)]),
            bank_name: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(255), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern('[^ ].*$')]),
            bank_number: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(255)]),
        });
    };
    StaffEditComponent.prototype.initFieldForm = function () {
        return [
            __WEBPACK_IMPORTED_MODULE_4__core_common__["b" /* FieldForm */].createTextInput('Tên đăng nhập', 'username', 'Nhập tên đăng nhập'),
            __WEBPACK_IMPORTED_MODULE_4__core_common__["b" /* FieldForm */].createTextInput('Tên nhân viên', 'fullname', 'Nhập tên nhân viên'),
            __WEBPACK_IMPORTED_MODULE_4__core_common__["b" /* FieldForm */].createNumberInput('Số điện thoại', 'phone', 'Nhập số điện thoại'),
            __WEBPACK_IMPORTED_MODULE_4__core_common__["b" /* FieldForm */].createDateInput('Ngày sinh', 'dob', 'Chọn ngày'),
            __WEBPACK_IMPORTED_MODULE_4__core_common__["b" /* FieldForm */].createSelect('Giới tính', 'gender', 'Chọn một', [
                {
                    name: 'Nam',
                    value: '0'
                },
                {
                    name: 'Nữ',
                    value: '1'
                }
            ]),
            __WEBPACK_IMPORTED_MODULE_4__core_common__["b" /* FieldForm */].createTextInput('Địa chỉ', 'address', 'Nhập địa chỉ'),
            __WEBPACK_IMPORTED_MODULE_4__core_common__["b" /* FieldForm */].createNumberInput('Lương', 'wage', 'Nhập số lương'),
            __WEBPACK_IMPORTED_MODULE_4__core_common__["b" /* FieldForm */].createSelect('Chức vụ', 'position', 'Chọn một', [
                {
                    name: 'Quản lý',
                    value: 'Quản lý'
                },
                {
                    name: 'Nhân viên',
                    value: 'Nhân viên'
                },
                {
                    name: 'Nhân viên thời vụ',
                    value: 'Nhân viên thời vụ'
                }
            ]),
            __WEBPACK_IMPORTED_MODULE_4__core_common__["b" /* FieldForm */].createTextInput('Tên ngân hàng', 'bank_name', 'Nhập tên ngân hàng'),
            __WEBPACK_IMPORTED_MODULE_4__core_common__["b" /* FieldForm */].createTextInput('Số tài khoản', 'bank_number', 'Nhập số tài khoản')
        ];
    };
    StaffEditComponent.prototype.loadAllCategories = function () {
        return this.service.loadAll();
    };
    StaffEditComponent.prototype.loaded = function () {
    };
    StaffEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-staff-edit',
            template: __webpack_require__("./src/app/modules/staff/staff-edit/staff-edit.component.html"),
            styles: [__webpack_require__("./src/app/modules/staff/staff-edit/staff-edit.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_5__staff_service__["a" /* StaffService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__staff_service__["a" /* StaffService */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__["a" /* BsModalRef */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]])
    ], StaffEditComponent);
    return StaffEditComponent;
}(__WEBPACK_IMPORTED_MODULE_1__core_crud__["d" /* AbstractModalComponent */]));



/***/ }),

/***/ "./src/app/modules/staff/staff-list/staff-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/staff/staff-list/staff-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n  <div class=\"panel-heading\">\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12\">\r\n        <form (ngSubmit)=\"load()\" [formGroup]=\"searchForm\">\r\n          <div *ngFor=\"let f of searchControls\" class=\"form-group col-md-4\">\r\n            <ng-template [ngIf]=\"f.type == 'input'\">\r\n              <label [for]=\"f.formControl\">\r\n                {{ f.label }}\r\n              </label>\r\n              <input [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\"\r\n                [placeholder]=\"f.placeHolder\" [type]=\"f.typeof\" class=\"form-control\" />\r\n            </ng-template>\r\n            <ng-template [ngIf]=\"f.type == 'textarea'\">\r\n              <label [for]=\"f.formControl\">\r\n                {{ f.label }}\r\n              </label>\r\n              <textarea [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\"\r\n                [placeholder]=\"f.placeHolder\" class=\"form-control\">\r\n              </textarea>\r\n            </ng-template>\r\n            <ng-template [ngIf]=\"f.type == 'checkbox'\">\r\n              <div class=\"checkbox\">\r\n                <label>\r\n                  <input [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\"\r\n                    type=\"checkbox\" />\r\n                  {{ f.label }}\r\n                </label>\r\n              </div>\r\n            </ng-template>\r\n            <ng-template [ngIf]=\"f.type == 'select'\">\r\n              <label [for]=\"f.formControl\">\r\n                {{ f.label }}\r\n              </label>\r\n              <select [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\"\r\n                class=\"form-control\">\r\n                <option *ngFor=\"let option of f.data\" [value]=\"option['value']\">\r\n                  {{ option[\"name\"] }}\r\n                </option>\r\n              </select>\r\n            </ng-template>\r\n            <ng-template [ngIf]=\"f.type == 'select2'\">\r\n              <label [for]=\"f.formControl\">\r\n                {{ f.label }}\r\n              </label>\r\n              <angular2-multiselect [data]=\"f.data\" [formControlName]=\"f.formControl\" [id]=\"f.formControl\"\r\n                [settings]=\"f.config\">\r\n              </angular2-multiselect>\r\n            </ng-template>\r\n          </div>\r\n          <div class=\"col-md-12\">\r\n            <button class=\"btn btn-default\" type=\"submit\">Tìm kiếm</button>\r\n            <button (click)=\"removeFilter()\" class=\"btn btn-default\" type=\"button\">Xóa lọc</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <div class=\"col-xs-6 col-xs-offset-6\">\r\n        <button (click)=\"createStaff()\" class=\"btn btn-primary pull-right\" type=\"button\">\r\n          <i class=\"fa fa-plus\"></i> Thêm mới\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <table class=\"panel-body table table-bordered table-hover\">\r\n    <thead>\r\n      <tr>\r\n        <th style=\"width: 10%;\">#</th>\r\n        <th style=\"width: 15%;\">Tên đăng nhập</th>\r\n        <th style=\"width: 15%;\">Tên nhân viên</th>\r\n        <th style=\"width: 15%;\">Số điện thoại</th>\r\n        <th style=\"width: 8%;\">Giới tính</th>\r\n        <th style=\"width: 12%;\">Chức vụ</th>\r\n        <th style=\"width: 10%;\">Trạng thái</th>\r\n        <th style=\"width: 15%;\">Thao tác</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let item of list;let i = index\" class=\"odd\">\r\n        <td class=\"text-center\">{{i + 1}}</td>\r\n        <td><label>{{item.username}}</label></td>\r\n        <td>{{item.fullname}}</td>\r\n        <td>{{item.phone}}</td>\r\n        <ng-container *ngIf=\"item.gender == 0; else elseTemplate\">\r\n          <td>Nam</td>\r\n        </ng-container>\r\n        <ng-template #elseTemplate>\r\n          <td>Nữ</td>\r\n        </ng-template>\r\n        <td>{{item.position}}</td>\r\n        <td class=\"text-center\">\r\n          <ui-switch (change)=\"onStatusChange(item,i,$event)\" *ngIf=\"item.status == 0\"></ui-switch>\r\n          <ui-switch (change)=\"onStatusChange(item,i,$event)\" *ngIf=\"item.status == 1\"\r\n            [checked]=\"item.status\"></ui-switch>\r\n        </td>\r\n        <td class=\"text-center\">\r\n          <button (confirm)=\"repassword(item)\" cancelText=\"No <i class='fa fa-refresh'></i>\" class=\"btn btn-info btn-sm\"\r\n            confirmText=\"Yes <i class='fa fa-check'></i>\" mwlConfirmationPopover placement=\"top\"\r\n            popoverMessage=\"Bạn thực sự muốn cập nhật mật khẩu?\" popoverTitle=\"Cập nhật\"\r\n            style=\"width: 30px; height: 30px; padding: 0;\" type=\"button\">\r\n            <i aria-hidden=\"true\" class=\"fa fa-refresh\"></i>\r\n          </button>\r\n          <button (click)=\"editStaff(item)\" class=\"btn btn-default btn-sm\" type=\"button\"\r\n            style=\"width: 30px; height: 30px; padding: 0;\">\r\n            <i class=\"fa fa-pencil-square-o\"></i>\r\n          </button>\r\n          <button (confirm)=\"remove(item, i)\" cancelText=\"No <i class='fa fa-remove'></i>\" class=\"btn btn-danger btn-sm\"\r\n            confirmText=\"Yes <i class='fa fa-check'></i>\" mwlConfirmationPopover placement=\"top\"\r\n            popoverMessage=\"Bạn thực sự muốn xóa?\" popoverTitle=\"Xóa\" style=\"width: 30px; height: 30px; padding: 0;\"\r\n            type=\"button\">\r\n            <i aria-hidden=\"true\" class=\"fa fa-remove\"></i>\r\n          </button>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  <div class=\"panel-footer\">\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-6\">\r\n        <pagination (numPages)=\"pagination.numPages = $event\" (pageChanged)=\"pageChanged($event)\"\r\n          [(ngModel)]=\"pagination.currentPage\" [boundaryLinks]=\"true\" [itemsPerPage]=\"pagination.itemsPerPage\"\r\n          [maxSize]=\"pagination.maxSize\" [totalItems]=\"pagination.totalItems\" class=\"pagination-sm\"></pagination>\r\n      </div>\r\n      <div class=\"col-xs-6\">\r\n        <div class=\"box-go-to\">\r\n          <input [(ngModel)]=\"nextPage\" class=\"col-xs-2\" type=\"number\">\r\n          <span class=\"col-xs-1\">/</span>\r\n          <input [(ngModel)]=\"pagination.numPages\" class=\"col-xs-2\" disabled type=\"text\">\r\n          <div class=\"col-xs-4\">\r\n            <button (click)=\"goToPageNumber()\">Đến</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/staff/staff-list/staff-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StaffListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_crud__ = __webpack_require__("./src/app/core/crud/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__staff_meta__ = __webpack_require__("./src/app/modules/staff/staff.meta.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__staff_service__ = __webpack_require__("./src/app/modules/staff/staff.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__staff_create_staff_create_component__ = __webpack_require__("./src/app/modules/staff/staff-create/staff-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__staff_edit_staff_edit_component__ = __webpack_require__("./src/app/modules/staff/staff-edit/staff-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__core_utils__ = __webpack_require__("./src/app/core/utils/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__core_common__ = __webpack_require__("./src/app/core/common/index.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var StaffListComponent = /** @class */ (function (_super) {
    __extends(StaffListComponent, _super);
    function StaffListComponent(service, modal, builder) {
        return _super.call(this, service, modal, builder) || this;
    }
    StaffListComponent.prototype.onInit = function () {
        this.load();
    };
    StaffListComponent.prototype.onDestroy = function () {
    };
    StaffListComponent.prototype.getTitle = function () {
        return 'Quản lý nhân viên';
    };
    StaffListComponent.prototype.getCreateModalComponent = function () {
        return __WEBPACK_IMPORTED_MODULE_6__staff_create_staff_create_component__["a" /* StaffCreateComponent */];
    };
    StaffListComponent.prototype.getEditModalComponent = function () {
        return __WEBPACK_IMPORTED_MODULE_7__staff_edit_staff_edit_component__["a" /* StaffEditComponent */];
    };
    StaffListComponent.prototype.getCreateModalComponentOptions = function () {
        return { class: 'modal-lg', ignoreBackdropClick: true };
    };
    StaffListComponent.prototype.getEditModalComponentOptions = function () {
        return { class: 'modal-lg', ignoreBackdropClick: true };
    };
    StaffListComponent.prototype.buildSearchForm = function () {
        return this.formBuilder.group({
            search: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](null),
            position: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](null),
            status: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](null),
        });
    };
    StaffListComponent.prototype.initSearchForm = function () {
        return [
            __WEBPACK_IMPORTED_MODULE_9__core_common__["b" /* FieldForm */].createTextInput('Tìm kiếm theo tên', 'search', 'Nhập từ khóa'),
            __WEBPACK_IMPORTED_MODULE_9__core_common__["b" /* FieldForm */].createSelect('Tìm kiếm chức vụ', 'position', 'Chọn một', [
                {
                    name: 'Quản lý',
                    value: 'Quản lý'
                },
                {
                    name: 'Nhân viên',
                    value: 'Nhân viên'
                },
                {
                    name: 'Nhân viên thời vụ',
                    value: 'Nhân viên thời vụ'
                },
            ]),
            __WEBPACK_IMPORTED_MODULE_9__core_common__["b" /* FieldForm */].createSelect('Tìm kiếm trạng thái', 'status', 'Chọn một', [
                {
                    name: 'Hoạt động',
                    value: '1'
                },
                {
                    name: 'Không hoạt động',
                    value: '0'
                },
            ]),
        ];
    };
    StaffListComponent.prototype.initNewModel = function () {
        return new __WEBPACK_IMPORTED_MODULE_4__staff_meta__["a" /* StaffMeta */]();
    };
    StaffListComponent.prototype.onStatusChange = function (item, index, enable) {
        var _this = this;
        var methodAsync = null;
        var titleMsg = 'Mở kích hoạt';
        if (enable) {
            methodAsync = this.service.enable(item.id);
        }
        else {
            methodAsync = this.service.disable(item.id);
            titleMsg = 'Khóa kích hoạt';
        }
        methodAsync.subscribe(function (res) {
            _this.service.toastSuccessfully(titleMsg);
        }, function () { return _this.service.toastFailed(titleMsg); });
        this.load();
    };
    StaffListComponent.prototype.createStaff = function () {
        var _this = this;
        var modalOptions = Object.assign(this.defaultModalOptions(), this.getCreateModalComponentOptions());
        var config = __WEBPACK_IMPORTED_MODULE_8__core_utils__["c" /* ObjectUtil */].combineValue({ ignoreBackdropClick: true }, modalOptions);
        var modalRef = this.modalService.show(this.getCreateModalComponent(), config);
        var modal = modalRef.content;
        modal.setModel(this.initNewModel());
        modal.onHidden.subscribe(function (result) {
            if (result.success) {
                _this.load();
            }
        });
    };
    StaffListComponent.prototype.editStaff = function (item) {
        var _this = this;
        var modalOptions = Object.assign(this.defaultModalOptions(), this.getEditModalComponentOptions());
        var config = __WEBPACK_IMPORTED_MODULE_8__core_utils__["c" /* ObjectUtil */].combineValue({ ignoreBackdropClick: true }, modalOptions);
        var modalRef = this.modalService.show(this.getEditModalComponent(), config);
        var modal = modalRef.content;
        modal.setModel(item);
        modal.onHidden.subscribe(function (result) {
            if (result.success) {
                _this.load();
            }
        });
    };
    StaffListComponent.prototype.repassword = function (item) {
        var _this = this;
        this.service.repassword(item.id).subscribe(function (res) {
            _this.service.toastSuccessfully('Cập nhật mật khẩu');
            _this.load();
        }, function () { return _this.service.toastFailedEdited(); });
    };
    StaffListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-staff',
            template: __webpack_require__("./src/app/modules/staff/staff-list/staff-list.component.html"),
            styles: [__webpack_require__("./src/app/modules/staff/staff-list/staff-list.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_5__staff_service__["a" /* StaffService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__staff_service__["a" /* StaffService */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__["b" /* BsModalService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"]])
    ], StaffListComponent);
    return StaffListComponent;
}(__WEBPACK_IMPORTED_MODULE_1__core_crud__["a" /* AbstractCRUDComponent */]));



/***/ }),

/***/ "./src/app/modules/staff/staff.meta.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StaffMeta; });
var StaffMeta = /** @class */ (function () {
    function StaffMeta() {
    }
    return StaffMeta;
}());



/***/ }),

/***/ "./src/app/modules/staff/staff.modal.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StaffModalModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__staff_create_staff_create_component__ = __webpack_require__("./src/app/modules/staff/staff-create/staff-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__staff_edit_staff_edit_component__ = __webpack_require__("./src/app/modules/staff/staff-edit/staff-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_confirmation_popover__ = __webpack_require__("./node_modules/angular-confirmation-popover/fesm5/angular-confirmation-popover.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ng_select_ng_select__ = __webpack_require__("./node_modules/@ng-select/ng-select/esm5/ng-select.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_toggle_switch__ = __webpack_require__("./node_modules/ngx-toggle-switch/ui-switch.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_ckeditor__ = __webpack_require__("./node_modules/ng2-ckeditor/lib/ng2-ckeditor.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_ckeditor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ng2_ckeditor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_multiselect_dropdown__ = __webpack_require__("./node_modules/angular2-multiselect-dropdown/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var StaffModalModule = /** @class */ (function () {
    function StaffModalModule() {
    }
    StaffModalModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__["e" /* PaginationModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__["f" /* PopoverModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6_angular_confirmation_popover__["a" /* ConfirmationPopoverModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__["d" /* ModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7__ng_select_ng_select__["a" /* NgSelectModule */],
                __WEBPACK_IMPORTED_MODULE_9_ng2_ckeditor__["CKEditorModule"],
                __WEBPACK_IMPORTED_MODULE_8_ngx_toggle_switch__["a" /* UiSwitchModule */],
                __WEBPACK_IMPORTED_MODULE_10_angular2_multiselect_dropdown__["a" /* AngularMultiSelectModule */],
                __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__["g" /* TabsModule */].forRoot(),
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__staff_create_staff_create_component__["a" /* StaffCreateComponent */], __WEBPACK_IMPORTED_MODULE_3__staff_edit_staff_edit_component__["a" /* StaffEditComponent */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_3__staff_edit_staff_edit_component__["a" /* StaffEditComponent */], __WEBPACK_IMPORTED_MODULE_2__staff_create_staff_create_component__["a" /* StaffCreateComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_3__staff_edit_staff_edit_component__["a" /* StaffEditComponent */], __WEBPACK_IMPORTED_MODULE_2__staff_create_staff_create_component__["a" /* StaffCreateComponent */]],
        })
    ], StaffModalModule);
    return StaffModalModule;
}());



/***/ }),

/***/ "./src/app/modules/staff/staff.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffModule", function() { return StaffModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__staff_list_staff_list_component__ = __webpack_require__("./src/app/modules/staff/staff-list/staff-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_confirmation_popover__ = __webpack_require__("./node_modules/angular-confirmation-popover/fesm5/angular-confirmation-popover.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ng_select_ng_select__ = __webpack_require__("./node_modules/@ng-select/ng-select/esm5/ng-select.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_toggle_switch__ = __webpack_require__("./node_modules/ngx-toggle-switch/ui-switch.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_ckeditor__ = __webpack_require__("./node_modules/ng2-ckeditor/lib/ng2-ckeditor.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_ckeditor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ng2_ckeditor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_multiselect_dropdown__ = __webpack_require__("./node_modules/angular2-multiselect-dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__staff_modal_module__ = __webpack_require__("./src/app/modules/staff/staff.modal.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routing = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__staff_list_staff_list_component__["a" /* StaffListComponent */]
    }
];
var StaffModule = /** @class */ (function () {
    function StaffModule() {
    }
    StaffModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap__["e" /* PaginationModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap__["f" /* PopoverModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5_angular_confirmation_popover__["a" /* ConfirmationPopoverModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* RouterModule */].forChild(routing),
                __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap__["d" /* ModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7__ng_select_ng_select__["a" /* NgSelectModule */],
                __WEBPACK_IMPORTED_MODULE_9_ng2_ckeditor__["CKEditorModule"],
                __WEBPACK_IMPORTED_MODULE_8_ngx_toggle_switch__["a" /* UiSwitchModule */],
                __WEBPACK_IMPORTED_MODULE_10_angular2_multiselect_dropdown__["a" /* AngularMultiSelectModule */],
                __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap__["g" /* TabsModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_11__staff_modal_module__["a" /* StaffModalModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__staff_list_staff_list_component__["a" /* StaffListComponent */]],
            entryComponents: [],
        })
    ], StaffModule);
    return StaffModule;
}());



/***/ }),

/***/ "./src/app/modules/staff/staff.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StaffService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_crud__ = __webpack_require__("./src/app/core/crud/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__ = __webpack_require__("./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_services__ = __webpack_require__("./src/app/core/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var StaffService = /** @class */ (function (_super) {
    __extends(StaffService, _super);
    function StaffService(http, toaster, title) {
        return _super.call(this, http, title, toaster, 'nhân viên', 'staffs') || this;
    }
    StaffService.prototype.repassword = function (id) {
        return this.http.post(this.urlRestAPI + "/" + id + "/repassword", { params: {} })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["catchError"])(this.handleErrorRequest.bind(this)), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["map"])(function (res) { return res['data']; }));
    };
    StaffService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["HttpClient"], __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__["b" /* ToasterService */], __WEBPACK_IMPORTED_MODULE_4__core_services__["d" /* TitleService */]])
    ], StaffService);
    return StaffService;
}(__WEBPACK_IMPORTED_MODULE_2__core_crud__["c" /* AbstractCRUDService */]));



/***/ })

});
//# sourceMappingURL=staff.module.chunk.js.map