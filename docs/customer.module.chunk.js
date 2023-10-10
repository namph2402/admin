webpackJsonp(["customer.module"],{

/***/ "./src/app/modules/customer/customer-create/customer-create.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/customer/customer-create/customer-create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header bg-primary\">\r\n  <h4 class=\"modal-title pull-left\">Thêm mới khách hàng</h4>\r\n  <button (click)=\"dismiss()\" aria-label=\"Close\" class=\"close pull-right\" type=\"button\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n      <form [formGroup]=\"formGroup\" novalidate>\r\n        <div *ngFor=\"let f of fields\" [ngClass]=\"{'has-error':!formGroup.controls[f.formControl].valid}\"\r\n             class=\"form-group\">\r\n          <ng-template [ngIf]=\"f.type=='input'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{f.label}} <span\r\n              *ngIf=\"f.typeof == 'number'\" style=\"font-weight: normal\">\r\n              ( {{formGroup.controls[f.formControl].value|number:'1.0-0'}} )\r\n            </span>\r\n            </label>\r\n            <input [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\" [placeholder]=\"f.placeHolder\"\r\n                   [type]=\"f.typeof\" class=\"form-control\">\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type=='textarea'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{f.label}}\r\n            </label>\r\n            <textarea [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\" [placeholder]=\"f.placeHolder\"\r\n                      [rows]=\"5\" class=\"form-control\">\r\n          </textarea>\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type=='file'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{f.label}}\r\n            </label>\r\n            <input (change)=\"f.config['onFileChange'](formGroup,f.formControl,$event)\" [id]=\"f.formControl\" [name]=\"f.formControl\"\r\n                   [placeholder]=\"f.placeHolder\" accept=\"{{f.config['accept']}}\"\r\n                   class=\"form-control\"\r\n                   type=\"file\">\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type=='checkbox'\">\r\n            <div class=\"checkbox\">\r\n              <label>\r\n                <input [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\" type=\"checkbox\">\r\n                {{f.label}}\r\n              </label>\r\n            </div>\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type=='select'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{f.label}}\r\n            </label>\r\n            <select [formControlName]=\"f.formControl\" [id]=\"f.formControl\" class=\"form-control\">\r\n              <option *ngFor=\"let option of f.data\" [value]=\"option['id']\">{{option['name']}}</option>\r\n            </select>\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type=='select2'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{f.label}}\r\n            </label>\r\n            <angular2-multiselect [data]=\"f.data\" [formControlName]=\"f.formControl\"\r\n                                  [id]=\"f.formControl\" [settings]=\"f.config\">\r\n            </angular2-multiselect>\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type=='html'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{f.label}}\r\n            </label>\r\n            <ckeditor [formControlName]=\"f.formControl\" [id]=\"f.formControl\"\r\n                      debounce=\"500\">\r\n            </ckeditor>\r\n          </ng-template>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <button (click)=\"create()\" [disabled]=\"!formGroup.valid\" class=\"btn btn-primary\" type=\"button\">Thêm mới</button>\r\n  <button (click)=\"dismiss()\" class=\"btn btn-default\" type=\"button\">Hủy bỏ</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/customer/customer-create/customer-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_crud__ = __webpack_require__("./src/app/core/crud/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__customer_service__ = __webpack_require__("./src/app/modules/customer/customer.service.ts");
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






var CustomerCreateComponent = /** @class */ (function (_super) {
    __extends(CustomerCreateComponent, _super);
    function CustomerCreateComponent(service, modal, builder) {
        return _super.call(this, service, modal, builder) || this;
    }
    CustomerCreateComponent.prototype.onInit = function () {
    };
    CustomerCreateComponent.prototype.onDestroy = function () {
    };
    CustomerCreateComponent.prototype.buildForm = function () {
        return this.formBuilder.group({
            name: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(255), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern('[^ ].*$')]),
            value: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(255), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern('[^ ].*$')]),
        });
    };
    CustomerCreateComponent.prototype.initFieldForm = function () {
        return [
            __WEBPACK_IMPORTED_MODULE_5__core_common__["b" /* FieldForm */].createTextInput('Tên', 'name', 'Nhập tên'),
            __WEBPACK_IMPORTED_MODULE_5__core_common__["b" /* FieldForm */].createTextInput('Giá trị', 'value', 'Nhập giá trị'),
        ];
    };
    CustomerCreateComponent.prototype.loaded = function () {
    };
    CustomerCreateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-customer-create',
            template: __webpack_require__("./src/app/modules/customer/customer-create/customer-create.component.html"),
            styles: [__webpack_require__("./src/app/modules/customer/customer-create/customer-create.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_4__customer_service__["a" /* CustomerService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__customer_service__["a" /* CustomerService */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__["a" /* BsModalRef */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]])
    ], CustomerCreateComponent);
    return CustomerCreateComponent;
}(__WEBPACK_IMPORTED_MODULE_1__core_crud__["d" /* AbstractModalComponent */]));



/***/ }),

/***/ "./src/app/modules/customer/customer-edit/customer-edit.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/customer/customer-edit/customer-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header bg-primary\">\r\n  <h4 class=\"modal-title pull-left\">Chỉnh sửa khách hàng</h4>\r\n  <button (click)=\"dismiss()\" aria-label=\"Close\" class=\"close pull-right\" type=\"button\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n      <form [formGroup]=\"formGroup\" novalidate>\r\n        <div *ngFor=\"let f of fields\" [ngClass]=\"{'has-error':!formGroup.controls[f.formControl].valid}\"\r\n             class=\"form-group\">\r\n          <ng-template [ngIf]=\"f.type=='input'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{f.label}} <span\r\n              *ngIf=\"f.typeof == 'number'\" style=\"font-weight: normal\">\r\n              ( {{formGroup.controls[f.formControl].value|number:'1.0-0'}} )\r\n            </span>\r\n            </label>\r\n            <input [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\" [placeholder]=\"f.placeHolder\"\r\n                   [type]=\"f.typeof\" class=\"form-control\">\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type=='textarea'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{f.label}}\r\n            </label>\r\n            <textarea [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\" [placeholder]=\"f.placeHolder\"\r\n                      [rows]=\"5\" class=\"form-control\">\r\n          </textarea>\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type=='file'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{f.label}}\r\n            </label>\r\n            <input (change)=\"f.config['onFileChange'](formGroup,f.formControl,$event)\" [id]=\"f.formControl\" [name]=\"f.formControl\"\r\n                   [placeholder]=\"f.placeHolder\" accept=\"{{f.config['accept']}}\"\r\n                   class=\"form-control\"\r\n                   type=\"file\">\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type=='checkbox'\">\r\n            <div class=\"checkbox\">\r\n              <label>\r\n                <input [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\" type=\"checkbox\">\r\n                {{f.label}}\r\n              </label>\r\n            </div>\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type=='select'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{f.label}}\r\n            </label>\r\n            <select [formControlName]=\"f.formControl\" [id]=\"f.formControl\" class=\"form-control\">\r\n              <option *ngFor=\"let option of f.data\" [value]=\"option['id']\">{{option['name']}}</option>\r\n            </select>\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type=='select2'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{f.label}}\r\n            </label>\r\n            <angular2-multiselect [data]=\"f.data\" [formControlName]=\"f.formControl\"\r\n                                  [id]=\"f.formControl\" [settings]=\"f.config\">\r\n            </angular2-multiselect>\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type=='html'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{f.label}}\r\n            </label>\r\n            <ckeditor [formControlName]=\"f.formControl\" [id]=\"f.formControl\"\r\n                      debounce=\"500\">\r\n            </ckeditor>\r\n          </ng-template>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <button (click)=\"edit()\" [disabled]=\"!formGroup.valid\" class=\"btn btn-primary\" type=\"button\">Sửa</button>\r\n  <button (click)=\"dismiss()\" class=\"btn btn-default\" type=\"button\">Hủy bỏ</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/customer/customer-edit/customer-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_crud__ = __webpack_require__("./src/app/core/crud/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__customer_service__ = __webpack_require__("./src/app/modules/customer/customer.service.ts");
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






var CustomerEditComponent = /** @class */ (function (_super) {
    __extends(CustomerEditComponent, _super);
    function CustomerEditComponent(service, modal, builder) {
        return _super.call(this, service, modal, builder) || this;
    }
    CustomerEditComponent.prototype.onInit = function () {
    };
    CustomerEditComponent.prototype.onDestroy = function () {
    };
    CustomerEditComponent.prototype.buildForm = function () {
        return this.formBuilder.group({
            name: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(255), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern('[^ ].*$')]),
            value: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(255), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern('[^ ].*$')]),
        });
    };
    CustomerEditComponent.prototype.initFieldForm = function () {
        return [
            __WEBPACK_IMPORTED_MODULE_5__core_common__["b" /* FieldForm */].createTextInput('Tên', 'name', 'Nhập tên'),
            __WEBPACK_IMPORTED_MODULE_5__core_common__["b" /* FieldForm */].createTextInput('Giá trị', 'value', 'Nhập giá trị'),
        ];
    };
    CustomerEditComponent.prototype.loaded = function () {
    };
    CustomerEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-customer-edit',
            template: __webpack_require__("./src/app/modules/customer/customer-edit/customer-edit.component.html"),
            styles: [__webpack_require__("./src/app/modules/customer/customer-edit/customer-edit.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_4__customer_service__["a" /* CustomerService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__customer_service__["a" /* CustomerService */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__["a" /* BsModalRef */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]])
    ], CustomerEditComponent);
    return CustomerEditComponent;
}(__WEBPACK_IMPORTED_MODULE_1__core_crud__["d" /* AbstractModalComponent */]));



/***/ }),

/***/ "./src/app/modules/customer/customer-list/customer-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/customer/customer-list/customer-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n  <div class=\"panel-heading\">\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12\">\r\n        <form (ngSubmit)=\"load()\" [formGroup]=\"searchForm\">\r\n          <div *ngFor=\"let f of searchControls\" class=\"form-group col-md-6\">\r\n            <ng-template [ngIf]=\"f.type == 'input'\">\r\n              <label [for]=\"f.formControl\">\r\n                {{ f.label }}\r\n              </label>\r\n              <input [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\"\r\n                [placeholder]=\"f.placeHolder\" [type]=\"f.typeof\" class=\"form-control\" />\r\n            </ng-template>\r\n            <ng-template [ngIf]=\"f.type == 'textarea'\">\r\n              <label [for]=\"f.formControl\">\r\n                {{ f.label }}\r\n              </label>\r\n              <textarea [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\"\r\n                [placeholder]=\"f.placeHolder\" class=\"form-control\">\r\n              </textarea>\r\n            </ng-template>\r\n            <ng-template [ngIf]=\"f.type == 'checkbox'\">\r\n              <div class=\"checkbox\">\r\n                <label>\r\n                  <input [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\"\r\n                    type=\"checkbox\" />\r\n                  {{ f.label }}\r\n                </label>\r\n              </div>\r\n            </ng-template>\r\n            <ng-template [ngIf]=\"f.type == 'select'\">\r\n              <label [for]=\"f.formControl\">\r\n                {{ f.label }}\r\n              </label>\r\n              <select [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\"\r\n                class=\"form-control\">\r\n                <option *ngFor=\"let option of f.data\" [value]=\"option['value']\">\r\n                  {{ option[\"name\"] }}\r\n                </option>\r\n              </select>\r\n            </ng-template>\r\n            <ng-template [ngIf]=\"f.type == 'select2'\">\r\n              <label [for]=\"f.formControl\">\r\n                {{ f.label }}\r\n              </label>\r\n              <angular2-multiselect [data]=\"f.data\" [formControlName]=\"f.formControl\" [id]=\"f.formControl\"\r\n                [settings]=\"f.config\">\r\n              </angular2-multiselect>\r\n            </ng-template>\r\n          </div>\r\n          <div class=\"col-md-12\">\r\n            <button class=\"btn btn-default\" type=\"submit\">Tìm kiếm</button>\r\n            <button (click)=\"removeFilter()\" class=\"btn btn-default\" type=\"button\">Xóa lọc</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <table class=\"table table-bordered table-hover\">\r\n    <thead>\r\n      <tr>\r\n        <th style=\"width: 10%;\">#</th>\r\n        <th style=\"width: 10%;\">Ảnh đại diện</th>\r\n        <th style=\"width: 15%;\">Tên đăng nhập</th>\r\n        <th style=\"width: 15%;\">Họ tên</th>\r\n        <th style=\"width: 10%;\">Số điện thoại</th>\r\n        <th style=\"width: 10%;\">Giới tính</th>\r\n        <th style=\"width: 10%;\">Ngày sinh</th>\r\n        <th style=\"width: 10%;\">Trạng thái</th>\r\n        <th style=\"width: 10%;\">Thao tác</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let item of list;let i = index\" class=\"odd\">\r\n        <td class=\"text-center\">{{i + 1}}</td>\r\n        <td class=\"text-center\">\r\n          <img [alt]=\"item.fullname\" [src]=\"item.avatar\" class=\"img-thumb\" width=\"100px\" />\r\n        </td>\r\n        <td>{{item.account.username}}</td>\r\n        <td>{{item.fullname}}</td>\r\n        <td class=\"text-center\">{{item.phone}}</td>\r\n        <td class=\"text-center\">\r\n          <span *ngIf=\"item.gender == 1\">Nam</span>\r\n          <span *ngIf=\"item.gender == 0\">Nữ</span>\r\n        </td>\r\n        <td class=\"text-center\">{{item.dob}}</td>\r\n        <td class=\"text-center\">\r\n          <ui-switch (change)=\"onStatusChange(item,i,$event)\" *ngIf=\"item.account.status == 0\"></ui-switch>\r\n          <ui-switch (change)=\"onStatusChange(item,i,$event)\" *ngIf=\"item.account.status == 1\"\r\n            [checked]=\"item.account.status\"></ui-switch>\r\n        </td>\r\n        <td class=\"text-center\">\r\n          <button (confirm)=\"remove(item, i)\" cancelText=\"No <i class='fa fa-remove'></i>\" class=\"btn btn-danger btn-sm\"\r\n            confirmText=\"Yes <i class='fa fa-check'></i>\" mwlConfirmationPopover placement=\"top\"\r\n            popoverMessage=\"Bạn thực sự muốn xóa?\" popoverTitle=\"Xóa\" style=\"width: 30px; height: 30px; padding: 0;\" type=\"button\">\r\n            <i aria-hidden=\"true\" class=\"fa fa-remove\"></i>\r\n          </button>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  <div *ngIf=\"list.length > 0\" class=\"panel-footer\">\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-6\">\r\n        <pagination (numPages)=\"pagination.numPages = $event\" (pageChanged)=\"pageChanged($event)\"\r\n          [(ngModel)]=\"pagination.currentPage\" [boundaryLinks]=\"true\" [itemsPerPage]=\"pagination.itemsPerPage\"\r\n          [maxSize]=\"pagination.maxSize\" [totalItems]=\"pagination.totalItems\" class=\"pagination-sm\"></pagination>\r\n      </div>\r\n      <div class=\"col-xs-6\">\r\n        <div class=\"box-go-to\">\r\n          <input [(ngModel)]=\"nextPage\" class=\"col-xs-2\" type=\"number\">\r\n          <span class=\"col-xs-1\">/</span>\r\n          <input [(ngModel)]=\"pagination.numPages\" class=\"col-xs-2\" disabled type=\"text\">\r\n          <div class=\"col-xs-4\">\r\n            <button (click)=\"goToPageNumber()\">Đến</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/customer/customer-list/customer-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_crud__ = __webpack_require__("./src/app/core/crud/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__customer_meta__ = __webpack_require__("./src/app/modules/customer/customer.meta.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__customer_service__ = __webpack_require__("./src/app/modules/customer/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__customer_create_customer_create_component__ = __webpack_require__("./src/app/modules/customer/customer-create/customer-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__customer_edit_customer_edit_component__ = __webpack_require__("./src/app/modules/customer/customer-edit/customer-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__core__ = __webpack_require__("./src/app/core/index.ts");
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









var CustomerListComponent = /** @class */ (function (_super) {
    __extends(CustomerListComponent, _super);
    function CustomerListComponent(service, modal, builder) {
        return _super.call(this, service, modal, builder) || this;
    }
    CustomerListComponent.prototype.onInit = function () {
        this.load();
    };
    CustomerListComponent.prototype.onDestroy = function () {
    };
    CustomerListComponent.prototype.getTitle = function () {
        return 'Quản lý khách hàng';
    };
    CustomerListComponent.prototype.getCreateModalComponent = function () {
        return __WEBPACK_IMPORTED_MODULE_6__customer_create_customer_create_component__["a" /* CustomerCreateComponent */];
    };
    CustomerListComponent.prototype.getEditModalComponent = function () {
        return __WEBPACK_IMPORTED_MODULE_7__customer_edit_customer_edit_component__["a" /* CustomerEditComponent */];
    };
    CustomerListComponent.prototype.getCreateModalComponentOptions = function () {
        return null;
    };
    CustomerListComponent.prototype.getEditModalComponentOptions = function () {
        return null;
    };
    CustomerListComponent.prototype.buildSearchForm = function () {
        return this.formBuilder.group({
            search: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](null),
            status: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](null),
        });
    };
    CustomerListComponent.prototype.initSearchForm = function () {
        return [
            __WEBPACK_IMPORTED_MODULE_8__core__["h" /* FieldForm */].createTextInput('Tìm kiếm theo tên', 'search', 'Nhập từ khóa'),
            __WEBPACK_IMPORTED_MODULE_8__core__["h" /* FieldForm */].createSelect('Tìm kiếm trạng thái', 'status', 'Chọn một', [
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
    CustomerListComponent.prototype.initNewModel = function () {
        return new __WEBPACK_IMPORTED_MODULE_4__customer_meta__["a" /* CustomerMeta */]();
    };
    CustomerListComponent.prototype.onStatusChange = function (item, index, enable) {
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
    CustomerListComponent.prototype.createCustomer = function () {
        var _this = this;
        var modalOptions = Object.assign(this.defaultModalOptions(), this.getCreateModalComponentOptions());
        var config = __WEBPACK_IMPORTED_MODULE_8__core__["j" /* ObjectUtil */].combineValue({ ignoreBackdropClick: true }, modalOptions);
        var modalRef = this.modalService.show(this.getCreateModalComponent(), config);
        var modal = modalRef.content;
        modal.setModel(this.initNewModel());
        modal.onHidden.subscribe(function (result) {
            if (result.success) {
                _this.load();
            }
        });
    };
    CustomerListComponent.prototype.editCustomer = function (item) {
        var _this = this;
        var modalOptions = Object.assign(this.defaultModalOptions(), this.getEditModalComponentOptions());
        var config = __WEBPACK_IMPORTED_MODULE_8__core__["j" /* ObjectUtil */].combineValue({ ignoreBackdropClick: true }, modalOptions);
        var modalRef = this.modalService.show(this.getEditModalComponent(), config);
        var modal = modalRef.content;
        modal.setModel(item);
        modal.onHidden.subscribe(function (result) {
            if (result.success) {
                _this.load();
            }
        });
    };
    CustomerListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-customer',
            template: __webpack_require__("./src/app/modules/customer/customer-list/customer-list.component.html"),
            styles: [__webpack_require__("./src/app/modules/customer/customer-list/customer-list.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_5__customer_service__["a" /* CustomerService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__customer_service__["a" /* CustomerService */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__["b" /* BsModalService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"]])
    ], CustomerListComponent);
    return CustomerListComponent;
}(__WEBPACK_IMPORTED_MODULE_1__core_crud__["a" /* AbstractCRUDComponent */]));



/***/ }),

/***/ "./src/app/modules/customer/customer.meta.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerMeta; });
var CustomerMeta = /** @class */ (function () {
    function CustomerMeta() {
    }
    return CustomerMeta;
}());



/***/ }),

/***/ "./src/app/modules/customer/customer.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerModule", function() { return CustomerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__customer_list_customer_list_component__ = __webpack_require__("./src/app/modules/customer/customer-list/customer-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__customer_create_customer_create_component__ = __webpack_require__("./src/app/modules/customer/customer-create/customer-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__customer_edit_customer_edit_component__ = __webpack_require__("./src/app/modules/customer/customer-edit/customer-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular_confirmation_popover__ = __webpack_require__("./node_modules/angular-confirmation-popover/fesm5/angular-confirmation-popover.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ng_select_ng_select__ = __webpack_require__("./node_modules/@ng-select/ng-select/esm5/ng-select.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_ckeditor__ = __webpack_require__("./node_modules/ng2-ckeditor/lib/ng2-ckeditor.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_ckeditor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ng2_ckeditor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_multiselect_dropdown__ = __webpack_require__("./node_modules/angular2-multiselect-dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ngx_toggle_switch__ = __webpack_require__("./node_modules/ngx-toggle-switch/ui-switch.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routing = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__customer_list_customer_list_component__["a" /* CustomerListComponent */]
    }
];
var CustomerModule = /** @class */ (function () {
    function CustomerModule() {
    }
    CustomerModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap__["e" /* PaginationModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap__["f" /* PopoverModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7_angular_confirmation_popover__["a" /* ConfirmationPopoverModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_8__angular_router__["c" /* RouterModule */].forChild(routing),
                __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap__["d" /* ModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_9__ng_select_ng_select__["a" /* NgSelectModule */],
                __WEBPACK_IMPORTED_MODULE_10_ng2_ckeditor__["CKEditorModule"],
                __WEBPACK_IMPORTED_MODULE_12_ngx_toggle_switch__["a" /* UiSwitchModule */],
                __WEBPACK_IMPORTED_MODULE_11_angular2_multiselect_dropdown__["a" /* AngularMultiSelectModule */],
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__customer_list_customer_list_component__["a" /* CustomerListComponent */], __WEBPACK_IMPORTED_MODULE_3__customer_create_customer_create_component__["a" /* CustomerCreateComponent */], __WEBPACK_IMPORTED_MODULE_4__customer_edit_customer_edit_component__["a" /* CustomerEditComponent */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_3__customer_create_customer_create_component__["a" /* CustomerCreateComponent */], __WEBPACK_IMPORTED_MODULE_4__customer_edit_customer_edit_component__["a" /* CustomerEditComponent */]]
        })
    ], CustomerModule);
    return CustomerModule;
}());



/***/ })

});
//# sourceMappingURL=customer.module.chunk.js.map