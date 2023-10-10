webpackJsonp(["shipping-fee.module"],{

/***/ "./src/app/modules/district/district.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DistrictService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__ = __webpack_require__("./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core__ = __webpack_require__("./src/app/core/index.ts");
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




var DistrictService = /** @class */ (function (_super) {
    __extends(DistrictService, _super);
    function DistrictService(http, toaster, title) {
        return _super.call(this, http, title, toaster, 'Quận/Huyện', 'districts') || this;
    }
    DistrictService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["HttpClient"], __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__["b" /* ToasterService */], __WEBPACK_IMPORTED_MODULE_3__core__["l" /* TitleService */]])
    ], DistrictService);
    return DistrictService;
}(__WEBPACK_IMPORTED_MODULE_3__core__["c" /* AbstractCRUDService */]));



/***/ }),

/***/ "./src/app/modules/shipping-fee/shipping-fee-create/shipping-fee-create.component.css":
/***/ (function(module, exports) {

module.exports = ".row {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n}\r\n"

/***/ }),

/***/ "./src/app/modules/shipping-fee/shipping-fee-create/shipping-fee-create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header bg-primary\">\r\n  <h4 class=\"modal-title pull-left\">Thêm mới phí ship</h4>\r\n  <button (click)=\"dismiss()\" aria-label=\"Close\" class=\"close pull-right\" type=\"button\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n      <form [formGroup]=\"formGroup\" novalidate>\r\n        <div *ngFor=\"let f of fields\" [ngClass]=\"{ 'has-error': !formGroup.controls[f.formControl].valid }\"\r\n             class=\"form-group\">\r\n          <ng-template [ngIf]=\"f.type == 'input'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{ f.label }}\r\n              <span *ngIf=\"f.typeof == 'number'\" style=\"font-weight: normal\">\r\n                ( {{ formGroup.controls[f.formControl].value | number : \"1.0-0\" }} )\r\n              </span>\r\n            </label>\r\n            <input [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\" [placeholder]=\"f.placeHolder\"\r\n                   [type]=\"f.typeof\" class=\"form-control\"/>\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type == 'textarea'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{ f.label }}\r\n            </label>\r\n            <textarea [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\" [placeholder]=\"f.placeHolder\"\r\n                      [rows]=\"5\" class=\"form-control\">\r\n            </textarea>\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type == 'file'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{ f.label }}\r\n            </label>\r\n            <input (change)=\"\r\n                f.config['onFileChange'](formGroup, f.formControl, $event)\r\n              \" [id]=\"f.formControl\" [name]=\"f.formControl\" [placeholder]=\"f.placeHolder\"\r\n                   accept=\"{{ f.config['accept'] }}\" class=\"form-control\" type=\"file\"/>\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type == 'checkbox'\">\r\n            <div class=\"checkbox\">\r\n              <label>\r\n                <input [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\" type=\"checkbox\"/>\r\n                {{ f.label }}\r\n              </label>\r\n            </div>\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type == 'select'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{ f.label }}\r\n            </label>\r\n            <select [formControlName]=\"f.formControl\" [id]=\"f.formControl\" class=\"form-control\">\r\n              <option *ngFor=\"let option of f.data\" [value]=\"option['id']\">\r\n                {{ option[\"name\"] }}\r\n              </option>\r\n            </select>\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type == 'select2'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{ f.label }}\r\n            </label>\r\n            <div class=\"form-group\">\r\n              <div class=\"row\">\r\n                <div class=\"col-xs-12\">\r\n                  <angular2-multiselect [data]=\"f.data\" [formControlName]=\"f.formControl\" [id]=\"f.formControl\"\r\n                                        [settings]=\"f.config\">\r\n                  </angular2-multiselect>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type == 'html'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{ f.label }}\r\n            </label>\r\n            <ckeditor [config]=\"f.config\" [formControlName]=\"f.formControl\" [id]=\"f.formControl\" debounce=\"500\">\r\n            </ckeditor>\r\n          </ng-template>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <button (click)=\"create()\" [disabled]=\"formGroup.invalid\" class=\"btn btn-primary\" type=\"button\">Thêm mới</button>\r\n  <button (click)=\"dismiss()\" class=\"btn btn-default\" type=\"button\">Hủy bỏ</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/shipping-fee/shipping-fee-create/shipping-fee-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShippingFeeCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shipping_fee_service__ = __webpack_require__("./src/app/modules/shipping-fee/shipping-fee.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_crud__ = __webpack_require__("./src/app/core/crud/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_common__ = __webpack_require__("./src/app/core/common/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__province_province_service__ = __webpack_require__("./src/app/modules/province/province.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__district_district_service__ = __webpack_require__("./src/app/modules/district/district.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ward_ward_service__ = __webpack_require__("./src/app/modules/ward/ward.service.ts");
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









var ShippingFeeCreateComponent = /** @class */ (function (_super) {
    __extends(ShippingFeeCreateComponent, _super);
    function ShippingFeeCreateComponent(service, modal, builder, provinceService, districtService, wardService) {
        var _this = _super.call(this, service, modal, builder) || this;
        _this.provinceService = provinceService;
        _this.districtService = districtService;
        _this.wardService = wardService;
        return _this;
    }
    ShippingFeeCreateComponent.prototype.onInit = function () {
    };
    ShippingFeeCreateComponent.prototype.onDestroy = function () {
    };
    ShippingFeeCreateComponent.prototype.loadAllProvinces = function () {
        return this.provinceService.loadAll();
    };
    ShippingFeeCreateComponent.prototype.loadDistricts = function (params) {
        var _this = this;
        this.districtService.loadByParams(params).subscribe(function (value) {
            _this.fields[1].data = value;
        });
    };
    ShippingFeeCreateComponent.prototype.loadWards = function (params) {
        var _this = this;
        this.wardService.loadByParams(params).subscribe(function (value) {
            _this.fields[2].data = value;
        });
    };
    ShippingFeeCreateComponent.prototype.loaded = function () {
    };
    ShippingFeeCreateComponent.prototype.buildForm = function () {
        return this.formBuilder.group({
            province_id: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            district_id: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            ward_id: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            fee: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].min(0)]),
        });
    };
    ShippingFeeCreateComponent.prototype.initFieldForm = function () {
        return [
            __WEBPACK_IMPORTED_MODULE_5__core_common__["b" /* FieldForm */].createSelect('Tỉnh/Thành phố', 'province_id', 'Chọn một', 'loadAllProvinces'),
            __WEBPACK_IMPORTED_MODULE_5__core_common__["b" /* FieldForm */].createSelect('Quận/Huyện', 'district_id', 'Chọn một', []),
            __WEBPACK_IMPORTED_MODULE_5__core_common__["b" /* FieldForm */].createSelect('Xã/Phường', 'ward_id', 'Chọn một', []),
            __WEBPACK_IMPORTED_MODULE_5__core_common__["b" /* FieldForm */].createNumberInput('Tiền ship', 'fee', 'Nhập tiền ship'),
        ];
    };
    ShippingFeeCreateComponent.prototype.onFormChanged = function () {
        var _this = this;
        _super.prototype.onFormChanged.call(this);
        this.formGroup.controls['province_id'].valueChanges.subscribe(function (value) {
            if (value && value.length > 0) {
                _this.formGroup.controls['district_id'].setValue(null);
                _this.loadDistricts({ province_id: value });
            }
        });
        this.formGroup.controls['district_id'].valueChanges.subscribe(function (value) {
            if (value && value.length > 0) {
                _this.formGroup.controls['ward_id'].setValue(null);
                _this.loadWards({ district_id: value });
            }
        });
    };
    ShippingFeeCreateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-shipping-fee-create',
            template: __webpack_require__("./src/app/modules/shipping-fee/shipping-fee-create/shipping-fee-create.component.html"),
            styles: [__webpack_require__("./src/app/modules/shipping-fee/shipping-fee-create/shipping-fee-create.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__shipping_fee_service__["a" /* ShippingFeeService */], __WEBPACK_IMPORTED_MODULE_6__province_province_service__["a" /* ProvinceService */], __WEBPACK_IMPORTED_MODULE_7__district_district_service__["a" /* DistrictService */], __WEBPACK_IMPORTED_MODULE_8__ward_ward_service__["a" /* WardService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__shipping_fee_service__["a" /* ShippingFeeService */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__["a" /* BsModalRef */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_6__province_province_service__["a" /* ProvinceService */],
            __WEBPACK_IMPORTED_MODULE_7__district_district_service__["a" /* DistrictService */],
            __WEBPACK_IMPORTED_MODULE_8__ward_ward_service__["a" /* WardService */]])
    ], ShippingFeeCreateComponent);
    return ShippingFeeCreateComponent;
}(__WEBPACK_IMPORTED_MODULE_4__core_crud__["d" /* AbstractModalComponent */]));



/***/ }),

/***/ "./src/app/modules/shipping-fee/shipping-fee-edit/shipping-fee-edit.component.css":
/***/ (function(module, exports) {

module.exports = ".row {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n}\r\n"

/***/ }),

/***/ "./src/app/modules/shipping-fee/shipping-fee-edit/shipping-fee-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header bg-primary\">\r\n  <h4 class=\"modal-title pull-left\">Chỉnh sửa phí ship</h4>\r\n  <button (click)=\"dismiss()\" aria-label=\"Close\" class=\"close pull-right\" type=\"button\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n      <form [formGroup]=\"formGroup\" novalidate>\r\n        <div *ngFor=\"let f of fields\" [ngClass]=\"{'has-error':!formGroup.controls[f.formControl].valid}\"\r\n             class=\"form-group\">\r\n          <ng-template [ngIf]=\"f.type=='input'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{f.label}} <span\r\n              *ngIf=\"f.typeof == 'number'\" style=\"font-weight: normal\">\r\n              ( {{formGroup.controls[f.formControl].value|number:'1.0-0'}} )\r\n            </span>\r\n            </label>\r\n            <input [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\" [placeholder]=\"f.placeHolder\"\r\n                   [type]=\"f.typeof\" class=\"form-control\">\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type=='textarea'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{f.label}}\r\n            </label>\r\n            <textarea [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\" [placeholder]=\"f.placeHolder\"\r\n                      [rows]=\"5\" class=\"form-control\">\r\n          </textarea>\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type=='file'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{f.label}}\r\n            </label>\r\n            <input (change)=\"f.config['onFileChange'](formGroup,f.formControl,$event)\" [id]=\"f.formControl\" [name]=\"f.formControl\"\r\n                   [placeholder]=\"f.placeHolder\" accept=\"{{f.config['accept']}}\"\r\n                   class=\"form-control\"\r\n                   type=\"file\">\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type=='checkbox'\">\r\n            <div class=\"checkbox\">\r\n              <label>\r\n                <input [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\" type=\"checkbox\">\r\n                {{f.label}}\r\n              </label>\r\n            </div>\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type=='select'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{f.label}}\r\n            </label>\r\n            <select [formControlName]=\"f.formControl\" [id]=\"f.formControl\" class=\"form-control\">\r\n              <option *ngFor=\"let option of f.data\" [value]=\"option['id']\">{{option['name']}}</option>\r\n            </select>\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type=='select2'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{f.label}}\r\n            </label>\r\n            <angular2-multiselect [data]=\"f.data\" [formControlName]=\"f.formControl\"\r\n                                  [id]=\"f.formControl\" [settings]=\"f.config\">\r\n            </angular2-multiselect>\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type=='html'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{f.label}}\r\n            </label>\r\n            <ckeditor [config]=\"f.config\" [formControlName]=\"f.formControl\"\r\n                      [id]=\"f.formControl\" debounce=\"500\">\r\n            </ckeditor>\r\n          </ng-template>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <button (click)=\"edit()\" [disabled]=\"formGroup.invalid\" class=\"btn btn-primary\" type=\"button\">Chỉnh sửa</button>\r\n  <button (click)=\"dismiss()\" class=\"btn btn-default\" type=\"button\">Hủy bỏ</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/shipping-fee/shipping-fee-edit/shipping-fee-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShippingFeeEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shipping_fee_service__ = __webpack_require__("./src/app/modules/shipping-fee/shipping-fee.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_crud__ = __webpack_require__("./src/app/core/crud/index.ts");
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






var ShippingFeeEditComponent = /** @class */ (function (_super) {
    __extends(ShippingFeeEditComponent, _super);
    function ShippingFeeEditComponent(service, modal, builder) {
        return _super.call(this, service, modal, builder) || this;
    }
    ShippingFeeEditComponent.prototype.onInit = function () {
    };
    ShippingFeeEditComponent.prototype.onDestroy = function () {
    };
    ShippingFeeEditComponent.prototype.loaded = function () {
    };
    ShippingFeeEditComponent.prototype.buildForm = function () {
        return this.formBuilder.group({
            fee: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].min(0)]),
        });
    };
    ShippingFeeEditComponent.prototype.initFieldForm = function () {
        return [
            __WEBPACK_IMPORTED_MODULE_5__core_common__["b" /* FieldForm */].createNumberInput('Tiền ship', 'fee', 'Nhập tiền ship'),
        ];
    };
    ShippingFeeEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-shipping-fee-edit',
            template: __webpack_require__("./src/app/modules/shipping-fee/shipping-fee-edit/shipping-fee-edit.component.html"),
            styles: [__webpack_require__("./src/app/modules/shipping-fee/shipping-fee-edit/shipping-fee-edit.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__shipping_fee_service__["a" /* ShippingFeeService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__shipping_fee_service__["a" /* ShippingFeeService */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__["a" /* BsModalRef */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]])
    ], ShippingFeeEditComponent);
    return ShippingFeeEditComponent;
}(__WEBPACK_IMPORTED_MODULE_4__core_crud__["d" /* AbstractModalComponent */]));



/***/ }),

/***/ "./src/app/modules/shipping-fee/shipping-fee-list/shipping-fee-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/shipping-fee/shipping-fee-list/shipping-fee-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n  <div class=\"panel-heading\">\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12\">\r\n        <form (ngSubmit)=\"load()\" [formGroup]=\"searchForm\">\r\n          <div *ngFor=\"let f of searchControls\" class=\"form-group col-md-4\">\r\n            <ng-template [ngIf]=\"f.type == 'input'\">\r\n              <label [for]=\"f.formControl\">\r\n                {{ f.label }}\r\n              </label>\r\n              <input [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\" [placeholder]=\"f.placeHolder\"\r\n                     [type]=\"f.typeof\" class=\"form-control\"/>\r\n            </ng-template>\r\n            <ng-template [ngIf]=\"f.type == 'textarea'\">\r\n              <label [for]=\"f.formControl\">\r\n                {{ f.label }}\r\n              </label>\r\n              <textarea [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\"\r\n                        [placeholder]=\"f.placeHolder\" class=\"form-control\">\r\n              </textarea>\r\n            </ng-template>\r\n            <ng-template [ngIf]=\"f.type == 'checkbox'\">\r\n              <div class=\"checkbox\">\r\n                <label>\r\n                  <input [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\"\r\n                         type=\"checkbox\"/>\r\n                  {{ f.label }}\r\n                </label>\r\n              </div>\r\n            </ng-template>\r\n            <ng-template [ngIf]=\"f.type == 'select'\">\r\n              <label [for]=\"f.formControl\">\r\n                {{ f.label }}\r\n              </label>\r\n              <select [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\"\r\n                      class=\"form-control\">\r\n                <option *ngFor=\"let option of f.data\" [value]=\"option['id']\">\r\n                  {{ option[\"name\"] }}\r\n                </option>\r\n              </select>\r\n            </ng-template>\r\n            <ng-template [ngIf]=\"f.type == 'select2'\">\r\n              <label [for]=\"f.formControl\">\r\n                {{ f.label }}\r\n              </label>\r\n              <angular2-multiselect [data]=\"f.data\" [formControlName]=\"f.formControl\" [id]=\"f.formControl\"\r\n                                    [settings]=\"f.config\">\r\n              </angular2-multiselect>\r\n            </ng-template>\r\n          </div>\r\n          <div class=\"col-md-12\">\r\n            <button class=\"btn btn-default\" type=\"submit\">Tìm kiếm</button>\r\n            <button (click)=\"removeFilter()\" class=\"btn btn-default\" type=\"button\">Xóa lọc</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <div class=\"col-xs-6 col-xs-offset-6\">\r\n        <button (click)=\"createShippingFee()\" class=\"btn btn-primary pull-right\" type=\"button\">\r\n          <i class=\"fa fa-plus\"></i> Thêm mới\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <table class=\"table table-bordered table-hover\">\r\n    <thead>\r\n    <tr>\r\n      <th style=\"width: 10%\">#</th>\r\n      <th style=\"width: 22%\">Tỉnh/Thành phố</th>\r\n      <th style=\"width: 22%\">Quận/Huyện</th>\r\n      <th style=\"width: 22%\">Xã/Phường</th>\r\n      <th style=\"width: 14%\">Phí ship</th>\r\n      <th style=\"width: 10%\">Thao tác</th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n    <tr *ngFor=\"let item of list; let i = index\" class=\"odd\">\r\n      <td class=\"text-center\">{{i + 1}}</td>\r\n      <td>{{ item.province.name }}</td>\r\n      <td>{{ item.district.name }}</td>\r\n      <td>{{ item.ward.name }}</td>\r\n      <td>\r\n        <p style=\"float: right\">{{ item.fee | number : \"1.0-2\" }}</p>\r\n      </td>\r\n      <td class=\"text-center\">\r\n        <button (click)=\"edit(item, i)\" class=\"btn btn-default btn-sm\" type=\"button\" style=\"width: 30px; height: 30px; padding: 0;\">\r\n          <i class=\"fa fa-pencil-square-o\"></i>\r\n        </button>\r\n      </td>\r\n    </tr>\r\n    </tbody>\r\n  </table>\r\n  <div class=\"panel-footer\">\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-6\">\r\n        <pagination (numPages)=\"pagination.numPages = $event\" (pageChanged)=\"pageChanged($event)\"\r\n                    [(ngModel)]=\"pagination.currentPage\" [boundaryLinks]=\"true\"\r\n                    [itemsPerPage]=\"pagination.itemsPerPage\"\r\n                    [maxSize]=\"pagination.maxSize\" [totalItems]=\"pagination.totalItems\" class=\"pagination-sm\"></pagination>\r\n      </div>\r\n      <div class=\"col-xs-6\">\r\n        <div class=\"box-go-to\">\r\n          <input [(ngModel)]=\"nextPage\" class=\"col-xs-2\" type=\"number\"/>\r\n          <span class=\"col-xs-1\">/</span>\r\n          <input [(ngModel)]=\"pagination.numPages\" class=\"col-xs-2\" disabled type=\"text\"/>\r\n          <div class=\"col-xs-4\">\r\n            <button (click)=\"goToPageNumber()\">Đến</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/shipping-fee/shipping-fee-list/shipping-fee-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShippingFeeListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_crud__ = __webpack_require__("./src/app/core/crud/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shipping_fee_meta__ = __webpack_require__("./src/app/modules/shipping-fee/shipping-fee.meta.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shipping_fee_service__ = __webpack_require__("./src/app/modules/shipping-fee/shipping-fee.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shipping_fee_create_shipping_fee_create_component__ = __webpack_require__("./src/app/modules/shipping-fee/shipping-fee-create/shipping-fee-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shipping_fee_edit_shipping_fee_edit_component__ = __webpack_require__("./src/app/modules/shipping-fee/shipping-fee-edit/shipping-fee-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__core_common__ = __webpack_require__("./src/app/core/common/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__province_province_service__ = __webpack_require__("./src/app/modules/province/province.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__district_district_service__ = __webpack_require__("./src/app/modules/district/district.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ward_ward_service__ = __webpack_require__("./src/app/modules/ward/ward.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__core__ = __webpack_require__("./src/app/core/index.ts");
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













var ShippingFeeListComponent = /** @class */ (function (_super) {
    __extends(ShippingFeeListComponent, _super);
    function ShippingFeeListComponent(service, modal, builder, provinceService, districtService, wardService) {
        var _this = _super.call(this, service, modal, builder) || this;
        _this.provinceService = provinceService;
        _this.districtService = districtService;
        _this.wardService = wardService;
        return _this;
    }
    ShippingFeeListComponent.prototype.onInit = function () {
        this.load();
    };
    ShippingFeeListComponent.prototype.onDestroy = function () {
    };
    ShippingFeeListComponent.prototype.getTitle = function () {
        return 'QUản lý phí ship';
    };
    ShippingFeeListComponent.prototype.getCreateModalComponent = function () {
        return __WEBPACK_IMPORTED_MODULE_6__shipping_fee_create_shipping_fee_create_component__["a" /* ShippingFeeCreateComponent */];
    };
    ShippingFeeListComponent.prototype.getEditModalComponent = function () {
        return __WEBPACK_IMPORTED_MODULE_7__shipping_fee_edit_shipping_fee_edit_component__["a" /* ShippingFeeEditComponent */];
    };
    ShippingFeeListComponent.prototype.getCreateModalComponentOptions = function () {
        return { 'class': 'modal-lg', ignoreBackdropClick: true };
    };
    ShippingFeeListComponent.prototype.getEditModalComponentOptions = function () {
        return { 'class': 'modal-lg', ignoreBackdropClick: true };
    };
    ShippingFeeListComponent.prototype.loadAllProvinces = function () {
        return this.provinceService.loadAll();
    };
    ShippingFeeListComponent.prototype.loadDistricts = function (params) {
        var _this = this;
        this.districtService.loadByParams(params).subscribe(function (value) {
            _this.searchControls[1].data = value;
        });
    };
    ShippingFeeListComponent.prototype.loadWards = function (params) {
        var _this = this;
        this.wardService.loadByParams(params).subscribe(function (value) {
            _this.searchControls[2].data = value;
        });
    };
    ShippingFeeListComponent.prototype.buildSearchForm = function () {
        return this.formBuilder.group({
            province_id: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](null),
            district_id: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](null),
            ward_id: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](null),
        });
    };
    ShippingFeeListComponent.prototype.initSearchForm = function () {
        return [
            __WEBPACK_IMPORTED_MODULE_8__core_common__["b" /* FieldForm */].createSelect('Tìm kiếm theo tỉnh', 'province_id', 'Chọn một', 'loadAllProvinces'),
            __WEBPACK_IMPORTED_MODULE_8__core_common__["b" /* FieldForm */].createSelect('Tìm kiếm theo huyện', 'district_id', 'Chọn một', []),
            __WEBPACK_IMPORTED_MODULE_8__core_common__["b" /* FieldForm */].createSelect('Tìm kiếm theo xã', 'ward_id', 'Chọn một', []),
        ];
    };
    ShippingFeeListComponent.prototype.initNewModel = function () {
        return new __WEBPACK_IMPORTED_MODULE_4__shipping_fee_meta__["a" /* ShippingFeeMeta */]();
    };
    ShippingFeeListComponent.prototype.onFormChanged = function () {
        var _this = this;
        _super.prototype.onFormChanged.call(this);
        this.searchForm.controls['province_id'].valueChanges.subscribe(function (value) {
            if (value && value.length > 0) {
                _this.searchForm.controls['district_id'].setValue(null);
                _this.loadDistricts({ province_id: value });
            }
        });
        this.searchForm.controls['district_id'].valueChanges.subscribe(function (value) {
            if (value && value.length > 0) {
                _this.searchForm.controls['ward_id'].setValue(null);
                _this.loadWards({ district_id: value });
            }
        });
    };
    ShippingFeeListComponent.prototype.createShippingFee = function () {
        var _this = this;
        var modalOptions = Object.assign(this.defaultModalOptions(), this.getCreateModalComponentOptions());
        var config = __WEBPACK_IMPORTED_MODULE_12__core__["j" /* ObjectUtil */].combineValue({ ignoreBackdropClick: true }, modalOptions);
        var modalRef = this.modalService.show(this.getCreateModalComponent(), config);
        var modal = modalRef.content;
        modal.setModel(this.initNewModel());
        modal.onHidden.subscribe(function (result) {
            if (result.success) {
                _this.load();
            }
        });
    };
    ShippingFeeListComponent.prototype.editShippingFee = function (item) {
        var _this = this;
        var modalOptions = Object.assign(this.defaultModalOptions(), this.getEditModalComponentOptions());
        var config = __WEBPACK_IMPORTED_MODULE_12__core__["j" /* ObjectUtil */].combineValue({ ignoreBackdropClick: true }, modalOptions);
        var modalRef = this.modalService.show(this.getEditModalComponent(), config);
        var modal = modalRef.content;
        modal.setModel(item);
        modal.onHidden.subscribe(function (result) {
            if (result.success) {
                _this.load();
            }
        });
    };
    ShippingFeeListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-shipping-fee',
            template: __webpack_require__("./src/app/modules/shipping-fee/shipping-fee-list/shipping-fee-list.component.html"),
            styles: [__webpack_require__("./src/app/modules/shipping-fee/shipping-fee-list/shipping-fee-list.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_5__shipping_fee_service__["a" /* ShippingFeeService */], __WEBPACK_IMPORTED_MODULE_9__province_province_service__["a" /* ProvinceService */], __WEBPACK_IMPORTED_MODULE_10__district_district_service__["a" /* DistrictService */], __WEBPACK_IMPORTED_MODULE_11__ward_ward_service__["a" /* WardService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__shipping_fee_service__["a" /* ShippingFeeService */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__["b" /* BsModalService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_9__province_province_service__["a" /* ProvinceService */],
            __WEBPACK_IMPORTED_MODULE_10__district_district_service__["a" /* DistrictService */],
            __WEBPACK_IMPORTED_MODULE_11__ward_ward_service__["a" /* WardService */]])
    ], ShippingFeeListComponent);
    return ShippingFeeListComponent;
}(__WEBPACK_IMPORTED_MODULE_1__core_crud__["a" /* AbstractCRUDComponent */]));



/***/ }),

/***/ "./src/app/modules/shipping-fee/shipping-fee.meta.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShippingFeeMeta; });
var ShippingFeeMeta = /** @class */ (function () {
    function ShippingFeeMeta() {
    }
    return ShippingFeeMeta;
}());



/***/ }),

/***/ "./src/app/modules/shipping-fee/shipping-fee.modal.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShippingFeeModalModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_confirmation_popover__ = __webpack_require__("./node_modules/angular-confirmation-popover/fesm5/angular-confirmation-popover.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_multiselect_dropdown__ = __webpack_require__("./node_modules/angular2-multiselect-dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_ckeditor__ = __webpack_require__("./node_modules/ng2-ckeditor/lib/ng2-ckeditor.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_ckeditor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_ckeditor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shipping_fee_create_shipping_fee_create_component__ = __webpack_require__("./src/app/modules/shipping-fee/shipping-fee-create/shipping-fee-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shipping_fee_edit_shipping_fee_edit_component__ = __webpack_require__("./src/app/modules/shipping-fee/shipping-fee-edit/shipping-fee-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_toggle_switch__ = __webpack_require__("./node_modules/ngx-toggle-switch/ui-switch.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var ShippingFeeModalModule = /** @class */ (function () {
    function ShippingFeeModalModule() {
    }
    ShippingFeeModalModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__["e" /* PaginationModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__["f" /* PopoverModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4_angular_confirmation_popover__["a" /* ConfirmationPopoverModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__["d" /* ModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6_ng2_ckeditor__["CKEditorModule"],
                __WEBPACK_IMPORTED_MODULE_9_ngx_toggle_switch__["a" /* UiSwitchModule */],
                __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__["g" /* TabsModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5_angular2_multiselect_dropdown__["a" /* AngularMultiSelectModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__shipping_fee_create_shipping_fee_create_component__["a" /* ShippingFeeCreateComponent */], __WEBPACK_IMPORTED_MODULE_8__shipping_fee_edit_shipping_fee_edit_component__["a" /* ShippingFeeEditComponent */],
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__shipping_fee_create_shipping_fee_create_component__["a" /* ShippingFeeCreateComponent */], __WEBPACK_IMPORTED_MODULE_8__shipping_fee_edit_shipping_fee_edit_component__["a" /* ShippingFeeEditComponent */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_7__shipping_fee_create_shipping_fee_create_component__["a" /* ShippingFeeCreateComponent */], __WEBPACK_IMPORTED_MODULE_8__shipping_fee_edit_shipping_fee_edit_component__["a" /* ShippingFeeEditComponent */],
            ]
        })
    ], ShippingFeeModalModule);
    return ShippingFeeModalModule;
}());



/***/ }),

/***/ "./src/app/modules/shipping-fee/shipping-fee.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShippingFeeModule", function() { return ShippingFeeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shipping_fee_list_shipping_fee_list_component__ = __webpack_require__("./src/app/modules/shipping-fee/shipping-fee-list/shipping-fee-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_confirmation_popover__ = __webpack_require__("./node_modules/angular-confirmation-popover/fesm5/angular-confirmation-popover.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ng_select_ng_select__ = __webpack_require__("./node_modules/@ng-select/ng-select/esm5/ng-select.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_ckeditor__ = __webpack_require__("./node_modules/ng2-ckeditor/lib/ng2-ckeditor.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_ckeditor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_ckeditor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_toggle_switch__ = __webpack_require__("./node_modules/ngx-toggle-switch/ui-switch.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_multiselect_dropdown__ = __webpack_require__("./node_modules/angular2-multiselect-dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shipping_fee_modal_module__ = __webpack_require__("./src/app/modules/shipping-fee/shipping-fee.modal.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routing = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__shipping_fee_list_shipping_fee_list_component__["a" /* ShippingFeeListComponent */]
    }
];
var ShippingFeeModule = /** @class */ (function () {
    function ShippingFeeModule() {
    }
    ShippingFeeModule = __decorate([
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
                __WEBPACK_IMPORTED_MODULE_8_ng2_ckeditor__["CKEditorModule"],
                __WEBPACK_IMPORTED_MODULE_9_ngx_toggle_switch__["a" /* UiSwitchModule */],
                __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap__["g" /* TabsModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_10_angular2_multiselect_dropdown__["a" /* AngularMultiSelectModule */],
                __WEBPACK_IMPORTED_MODULE_11__shipping_fee_modal_module__["a" /* ShippingFeeModalModule */],
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__shipping_fee_list_shipping_fee_list_component__["a" /* ShippingFeeListComponent */]],
            entryComponents: [],
            exports: []
        })
    ], ShippingFeeModule);
    return ShippingFeeModule;
}());



/***/ })

});
//# sourceMappingURL=shipping-fee.module.chunk.js.map