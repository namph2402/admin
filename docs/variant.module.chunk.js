webpackJsonp(["variant.module"],{

/***/ "./src/app/modules/variant/variant-create/variant-create.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/variant/variant-create/variant-create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header bg-primary\">\r\n  <h4 class=\"modal-title pull-left\">Thêm mới biến thể</h4>\r\n  <button (click)=\"dismiss()\" aria-label=\"Close\" class=\"close pull-right\" type=\"button\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n      <form [formGroup]=\"formGroup\" novalidate>\r\n        <div *ngFor=\"let f of fields\" [ngClass]=\"{'has-error':!formGroup.controls[f.formControl].valid}\"\r\n             class=\"form-group\">\r\n          <ng-template [ngIf]=\"f.type=='input'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{f.label}} <span\r\n              *ngIf=\"f.typeof == 'number'\" style=\"font-weight: normal\">\r\n              ( {{formGroup.controls[f.formControl].value|number:'1.0-0'}} )\r\n            </span>\r\n            </label>\r\n            <input [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\" [placeholder]=\"f.placeHolder\"\r\n                   [type]=\"f.typeof\" class=\"form-control\">\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type=='textarea'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{f.label}}\r\n            </label>\r\n            <textarea [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\" [placeholder]=\"f.placeHolder\"\r\n                      [rows]=\"5\" class=\"form-control\">\r\n          </textarea>\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type=='file'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{f.label}}\r\n            </label>\r\n            <input (change)=\"f.config['onFileChange'](formGroup,f.formControl,$event)\" [id]=\"f.formControl\" [name]=\"f.formControl\"\r\n                   [placeholder]=\"f.placeHolder\" accept=\"{{f.config['accept']}}\"\r\n                   class=\"form-control\"\r\n                   type=\"file\">\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type=='checkbox'\">\r\n            <div class=\"checkbox\">\r\n              <label>\r\n                <input [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\" type=\"checkbox\">\r\n                {{f.label}}\r\n              </label>\r\n            </div>\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type=='select'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{f.label}}\r\n            </label>\r\n            <select [formControlName]=\"f.formControl\" [id]=\"f.formControl\" class=\"form-control\">\r\n              <option *ngFor=\"let option of f.data\" [value]=\"option['id']\">{{option['name']}}</option>\r\n            </select>\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type=='select2'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{f.label}}\r\n            </label>\r\n            <angular2-multiselect [data]=\"f.data\" [formControlName]=\"f.formControl\"\r\n                                  [id]=\"f.formControl\" [settings]=\"f.config\">\r\n            </angular2-multiselect>\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type=='html'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{f.label}}\r\n            </label>\r\n            <ckeditor [formControlName]=\"f.formControl\" [id]=\"f.formControl\"\r\n                      debounce=\"500\">\r\n            </ckeditor>\r\n          </ng-template>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <button (click)=\"create()\" [disabled]=\"!formGroup.valid\" class=\"btn btn-primary\" type=\"button\">Thêm mới</button>\r\n  <button (click)=\"dismiss()\" class=\"btn btn-default\" type=\"button\">Hủy bỏ</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/variant/variant-create/variant-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VariantCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_crud__ = __webpack_require__("./src/app/core/crud/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__variant_service__ = __webpack_require__("./src/app/modules/variant/variant.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_common__ = __webpack_require__("./src/app/core/common/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core__ = __webpack_require__("./src/app/core/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__product_size_product_size_service__ = __webpack_require__("./src/app/modules/product-size/product-size.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__product_color_product_color_service__ = __webpack_require__("./src/app/modules/product-color/product-color.service.ts");
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









var VariantCreateComponent = /** @class */ (function (_super) {
    __extends(VariantCreateComponent, _super);
    function VariantCreateComponent(service, modal, builder, sizeService, colorService) {
        var _this = _super.call(this, service, modal, builder) || this;
        _this.sizeService = sizeService;
        _this.colorService = colorService;
        return _this;
    }
    VariantCreateComponent.prototype.onInit = function () {
    };
    VariantCreateComponent.prototype.onDestroy = function () {
    };
    VariantCreateComponent.prototype.loadAllCategories = function () {
        return this.service.loadByParams({ parent: 0 });
    };
    VariantCreateComponent.prototype.buildForm = function () {
        return this.formBuilder.group({
            type: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            name: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(255), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern('[^ ].*$')]),
        });
    };
    VariantCreateComponent.prototype.initFieldForm = function () {
        return [
            __WEBPACK_IMPORTED_MODULE_5__core_common__["b" /* FieldForm */].createSelect('Loại', 'type', 'Chọn một', [
                {
                    id: 0,
                    name: 'Size',
                },
                {
                    id: 1,
                    name: 'Color',
                },
            ]),
            __WEBPACK_IMPORTED_MODULE_5__core_common__["b" /* FieldForm */].createTextInput('Tên', 'name', 'Nhập tên'),
        ];
    };
    VariantCreateComponent.prototype.loaded = function () {
    };
    VariantCreateComponent.prototype.create = function () {
        var _this = this;
        if (this.formGroup.value.type == 0) {
            var item = __WEBPACK_IMPORTED_MODULE_6__core__["j" /* ObjectUtil */].combineValue(this.model, this.formGroup.value);
            this.sizeService.store(item).subscribe(function (res) {
                _this.sizeService.toastSuccessfullyCreated();
                _this.close(res);
            }, function () { return _this.sizeService.toastFailedCreated(); });
        }
        else {
            var item = __WEBPACK_IMPORTED_MODULE_6__core__["j" /* ObjectUtil */].combineValue(this.model, this.formGroup.value);
            this.colorService.store(item).subscribe(function (res) {
                _this.sizeService.toastSuccessfullyCreated();
                _this.close(res);
            }, function () { return _this.sizeService.toastFailedCreated(); });
        }
    };
    VariantCreateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-variant-create',
            template: __webpack_require__("./src/app/modules/variant/variant-create/variant-create.component.html"),
            styles: [__webpack_require__("./src/app/modules/variant/variant-create/variant-create.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_4__variant_service__["a" /* VariantService */], __WEBPACK_IMPORTED_MODULE_7__product_size_product_size_service__["a" /* ProductSizeService */], __WEBPACK_IMPORTED_MODULE_8__product_color_product_color_service__["a" /* ProductColorService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__variant_service__["a" /* VariantService */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__["a" /* BsModalRef */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_7__product_size_product_size_service__["a" /* ProductSizeService */],
            __WEBPACK_IMPORTED_MODULE_8__product_color_product_color_service__["a" /* ProductColorService */]])
    ], VariantCreateComponent);
    return VariantCreateComponent;
}(__WEBPACK_IMPORTED_MODULE_1__core_crud__["d" /* AbstractModalComponent */]));



/***/ }),

/***/ "./src/app/modules/variant/variant-edit/variant-edit.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/variant/variant-edit/variant-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header bg-primary\">\r\n  <h4 class=\"modal-title pull-left\">Chỉnh sửa</h4>\r\n  <button (click)=\"dismiss()\" aria-label=\"Close\" class=\"close pull-right\" type=\"button\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n      <form [formGroup]=\"formGroup\" novalidate>\r\n        <div *ngFor=\"let f of fields\" [ngClass]=\"{ 'has-error': !formGroup.controls[f.formControl].valid }\"\r\n             class=\"form-group\">\r\n          <ng-template [ngIf]=\"f.type == 'input'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{ f.label }}\r\n              <span *ngIf=\"f.typeof == 'number'\" style=\"font-weight: normal\">\r\n                ({{formGroup.controls[f.formControl].value | number : \"1.0-0\"}})\r\n              </span>\r\n            </label>\r\n            <input [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\" [placeholder]=\"f.placeHolder\"\r\n                   [type]=\"f.typeof\" class=\"form-control\"/>\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type == 'textarea'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{ f.label }}\r\n            </label>\r\n            <textarea [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\" [placeholder]=\"f.placeHolder\"\r\n                      [rows]=\"5\" class=\"form-control\">\r\n            </textarea>\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type == 'file'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{ f.label }}\r\n            </label>\r\n            <input (change)=\"\r\n                f.config['onFileChange'](formGroup, f.formControl, $event)\r\n              \" [id]=\"f.formControl\" [name]=\"f.formControl\" [placeholder]=\"f.placeHolder\"\r\n                   accept=\"{{ f.config['accept'] }}\" class=\"form-control\" type=\"file\"/>\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type == 'checkbox'\">\r\n            <div class=\"checkbox\">\r\n              <label>\r\n                <input [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\" type=\"checkbox\"/>\r\n                {{ f.label }}\r\n              </label>\r\n            </div>\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type == 'select'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{ f.label }}\r\n            </label>\r\n            <select [formControlName]=\"f.formControl\" [id]=\"f.formControl\" class=\"form-control\">\r\n              <option *ngFor=\"let option of f.data\" [value]=\"option['id']\">\r\n                {{ option[\"name\"] }}\r\n              </option>\r\n            </select>\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type == 'select2'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{ f.label }}\r\n            </label>\r\n            <angular2-multiselect [data]=\"f.data\" [formControlName]=\"f.formControl\" [id]=\"f.formControl\"\r\n                                  [settings]=\"f.config\">\r\n            </angular2-multiselect>\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type == 'html'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{ f.label }}\r\n            </label>\r\n            <ckeditor [formControlName]=\"f.formControl\" [id]=\"f.formControl\" debounce=\"500\">\r\n            </ckeditor>\r\n          </ng-template>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <button (click)=\"edit()\" [disabled]=\"!formGroup.valid\" class=\"btn btn-primary\" type=\"button\">Chỉnh sửa</button>\r\n  <button (click)=\"dismiss()\" class=\"btn btn-default\" type=\"button\">Hủy bỏ</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/variant/variant-edit/variant-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VariantEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_crud__ = __webpack_require__("./src/app/core/crud/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_common__ = __webpack_require__("./src/app/core/common/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__variant_service__ = __webpack_require__("./src/app/modules/variant/variant.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core__ = __webpack_require__("./src/app/core/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__product_size_product_size_service__ = __webpack_require__("./src/app/modules/product-size/product-size.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__product_color_product_color_service__ = __webpack_require__("./src/app/modules/product-color/product-color.service.ts");
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









var VariantEditComponent = /** @class */ (function (_super) {
    __extends(VariantEditComponent, _super);
    function VariantEditComponent(service, modal, builder, sizeService, colorService) {
        var _this = _super.call(this, service, modal, builder) || this;
        _this.sizeService = sizeService;
        _this.colorService = colorService;
        return _this;
    }
    VariantEditComponent.prototype.onInit = function () {
    };
    VariantEditComponent.prototype.onDestroy = function () {
    };
    VariantEditComponent.prototype.buildForm = function () {
        return this.formBuilder.group({
            name: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(255), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern('[^ ].*$')]),
        });
    };
    VariantEditComponent.prototype.initFieldForm = function () {
        return [
            __WEBPACK_IMPORTED_MODULE_4__core_common__["b" /* FieldForm */].createTextInput('Tên', 'name', 'Nhập tên')
        ];
    };
    VariantEditComponent.prototype.loaded = function () {
    };
    VariantEditComponent.prototype.edit = function () {
        var _this = this;
        if (this.model.type == 0) {
            var item = __WEBPACK_IMPORTED_MODULE_6__core__["j" /* ObjectUtil */].combineValue(this.model, this.formGroup.value);
            this.sizeService.update(item).subscribe(function (res) {
                _this.sizeService.toastSuccessfullyEdited();
                _this.close(res);
            }, function () { return _this.sizeService.toastFailedEdited(); });
        }
        else {
            var item = __WEBPACK_IMPORTED_MODULE_6__core__["j" /* ObjectUtil */].combineValue(this.model, this.formGroup.value);
            this.colorService.update(item).subscribe(function (res) {
                _this.colorService.toastSuccessfullyEdited();
                _this.close(res);
            }, function () { return _this.colorService.toastFailedEdited(); });
        }
    };
    VariantEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-variant-edit',
            template: __webpack_require__("./src/app/modules/variant/variant-edit/variant-edit.component.html"),
            styles: [__webpack_require__("./src/app/modules/variant/variant-edit/variant-edit.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_5__variant_service__["a" /* VariantService */], __WEBPACK_IMPORTED_MODULE_7__product_size_product_size_service__["a" /* ProductSizeService */], __WEBPACK_IMPORTED_MODULE_8__product_color_product_color_service__["a" /* ProductColorService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__variant_service__["a" /* VariantService */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__["a" /* BsModalRef */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_7__product_size_product_size_service__["a" /* ProductSizeService */],
            __WEBPACK_IMPORTED_MODULE_8__product_color_product_color_service__["a" /* ProductColorService */]])
    ], VariantEditComponent);
    return VariantEditComponent;
}(__WEBPACK_IMPORTED_MODULE_1__core_crud__["d" /* AbstractModalComponent */]));



/***/ }),

/***/ "./src/app/modules/variant/variant-list/variant-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/variant/variant-list/variant-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n  <div class=\"panel-heading\">\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12\">\r\n        <form (ngSubmit)=\"load()\" [formGroup]=\"searchForm\">\r\n          <div *ngFor=\"let f of searchControls\" class=\"form-group col-md-6\">\r\n            <ng-template [ngIf]=\"f.type == 'input'\">\r\n              <label [for]=\"f.formControl\">\r\n                {{ f.label }}\r\n              </label>\r\n              <input [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\" [placeholder]=\"f.placeHolder\"\r\n                     [type]=\"f.typeof\" class=\"form-control\"/>\r\n            </ng-template>\r\n            <ng-template [ngIf]=\"f.type == 'textarea'\">\r\n              <label [for]=\"f.formControl\">\r\n                {{ f.label }}\r\n              </label>\r\n              <textarea [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\"\r\n                        [placeholder]=\"f.placeHolder\" class=\"form-control\">\r\n              </textarea>\r\n            </ng-template>\r\n            <ng-template [ngIf]=\"f.type == 'checkbox'\">\r\n              <div class=\"checkbox\">\r\n                <label>\r\n                  <input [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\"\r\n                         type=\"checkbox\"/>\r\n                  {{ f.label }}\r\n                </label>\r\n              </div>\r\n            </ng-template>\r\n            <ng-template [ngIf]=\"f.type == 'select'\">\r\n              <label [for]=\"f.formControl\">\r\n                {{ f.label }}\r\n              </label>\r\n              <select [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\"\r\n                      class=\"form-control\">\r\n                <option *ngFor=\"let option of f.data\" [value]=\"option['id']\">\r\n                  {{ option[\"name\"] }}\r\n                </option>\r\n              </select>\r\n            </ng-template>\r\n            <ng-template [ngIf]=\"f.type == 'select2'\">\r\n              <label [for]=\"f.formControl\">\r\n                {{ f.label }}\r\n              </label>\r\n              <angular2-multiselect [data]=\"f.data\" [formControlName]=\"f.formControl\" [id]=\"f.formControl\"\r\n                                    [settings]=\"f.config\">\r\n              </angular2-multiselect>\r\n            </ng-template>\r\n          </div>\r\n          <div class=\"col-md-12\">\r\n            <button class=\"btn btn-default\" type=\"submit\">Tìm kiếm</button>\r\n            <button (click)=\"removeFilter()\" class=\"btn btn-default\" type=\"button\">Xóa lọc</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <div class=\"col-xs-6 col-xs-offset-6\">\r\n        <button (click)=\"createVariant()\" class=\"btn btn-primary pull-right\" type=\"button\">\r\n          <i class=\"fa fa-plus\"></i> Thêm mới\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"panel-body no-padding\">\r\n    <div class=\"col-xs-6\">\r\n      <table class=\"table table-bordered table-hover\">\r\n        <thead>\r\n        <tr>\r\n          <th style=\"width: 20%\">#</th>\r\n          <th style=\"width: 60%\">Màu sắc</th>\r\n          <th style=\"width: 20%\">Thao tác</th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n        <tr *ngFor=\"let item of listColor; let i = index\" class=\"odd\">\r\n          <td class=\"text-center\">{{ i + 1 }}</td>\r\n          <td>{{ item.name }}</td>\r\n          <td class=\"text-center\">\r\n            <button (click)=\"editVariantColor(item)\" class=\"btn btn-default btn-sm\" type=\"button\" style=\"width: 30px; height: 30px; padding: 0;\">\r\n              <i class=\"fa fa-pencil-square-o\"></i>\r\n            </button>\r\n            <button (confirm)=\"removeVariantColor(item)\" cancelText=\"No <i class='fa fa-remove'></i>\" class=\"btn btn-danger btn-sm\" confirmText=\"Yes <i class='fa fa-check'></i>\"\r\n                    mwlConfirmationPopover placement=\"top\" popoverMessage=\"Bạn thực sự muốn xóa?\" popoverTitle=\"Xóa\"\r\n                    style=\"width: 30px; height: 30px; padding: 0;\" type=\"button\">\r\n              <i aria-hidden=\"true\" class=\"fa fa-remove\"></i>\r\n            </button>\r\n          </td>\r\n        </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n    <div class=\"col-xs-6\">\r\n      <table class=\"table table-bordered table-hover\">\r\n        <thead>\r\n        <tr>\r\n          <th style=\"width: 20%\">#</th>\r\n          <th style=\"width: 60%\">Size</th>\r\n          <th style=\"width: 20%\">Thao tác</th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n        <tr *ngFor=\"let item of listSize; let i = index\" class=\"odd\">\r\n          <td class=\"text-center\">{{ i + 1 }}</td>\r\n          <td>{{ item.name }}</td>\r\n          <td class=\"text-center\">\r\n            <button (click)=\"editVariantSize(item)\" class=\"btn btn-default btn-sm\" type=\"button\" style=\"width: 30px; height: 30px; padding: 0;\">\r\n              <i class=\"fa fa-pencil-square-o\"></i>\r\n            </button>\r\n            <button (confirm)=\"removeVariantSize(item, i)\" cancelText=\"No <i class='fa fa-remove'></i>\" class=\"btn btn-danger btn-sm\" confirmText=\"Yes <i class='fa fa-check'></i>\"\r\n                    mwlConfirmationPopover placement=\"top\" popoverMessage=\"Bạn thực sự muốn xóa?\" popoverTitle=\"Xóa\"\r\n                    style=\"width: 30px; height: 30px; padding: 0;\" type=\"button\" style=\"width: 30px; height: 30px; padding: 0;\">\r\n              <i aria-hidden=\"true\" class=\"fa fa-remove\"></i>\r\n            </button>\r\n          </td>\r\n        </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/variant/variant-list/variant-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VariantListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_crud__ = __webpack_require__("./src/app/core/crud/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_utils__ = __webpack_require__("./src/app/core/utils/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_common__ = __webpack_require__("./src/app/core/common/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__variant_service__ = __webpack_require__("./src/app/modules/variant/variant.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__variant_meta__ = __webpack_require__("./src/app/modules/variant/variant.meta.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__variant_create_variant_create_component__ = __webpack_require__("./src/app/modules/variant/variant-create/variant-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__variant_edit_variant_edit_component__ = __webpack_require__("./src/app/modules/variant/variant-edit/variant-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__product_size_product_size_service__ = __webpack_require__("./src/app/modules/product-size/product-size.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__product_color_product_color_service__ = __webpack_require__("./src/app/modules/product-color/product-color.service.ts");
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












var VariantListComponent = /** @class */ (function (_super) {
    __extends(VariantListComponent, _super);
    function VariantListComponent(service, modal, builder, sizeService, colorService) {
        var _this = _super.call(this, service, modal, builder) || this;
        _this.sizeService = sizeService;
        _this.colorService = colorService;
        return _this;
    }
    VariantListComponent.prototype.onInit = function () {
        this.load();
    };
    VariantListComponent.prototype.onDestroy = function () {
    };
    VariantListComponent.prototype.getTitle = function () {
        return 'Quản lý biến thể';
    };
    VariantListComponent.prototype.getCreateModalComponent = function () {
        return __WEBPACK_IMPORTED_MODULE_8__variant_create_variant_create_component__["a" /* VariantCreateComponent */];
    };
    VariantListComponent.prototype.getEditModalComponent = function () {
        return __WEBPACK_IMPORTED_MODULE_9__variant_edit_variant_edit_component__["a" /* VariantEditComponent */];
    };
    VariantListComponent.prototype.getCreateModalComponentOptions = function () {
        return { class: 'modal-lg', ignoreBackdropClick: true };
    };
    VariantListComponent.prototype.getEditModalComponentOptions = function () {
        return { class: 'modal-lg', ignoreBackdropClick: true };
    };
    VariantListComponent.prototype.buildSearchForm = function () {
        return this.formBuilder.group({
            search: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].pattern('[^ ].*$')),
        });
    };
    VariantListComponent.prototype.initSearchForm = function () {
        return [
            __WEBPACK_IMPORTED_MODULE_5__core_common__["b" /* FieldForm */].createTextInput('Tìm kiếm theo tên', 'search', 'Nhập từ khóa'),
        ];
    };
    VariantListComponent.prototype.initNewModel = function () {
        return new __WEBPACK_IMPORTED_MODULE_7__variant_meta__["a" /* VariantMeta */]();
    };
    VariantListComponent.prototype.load = function () {
        var _this = this;
        var params = __WEBPACK_IMPORTED_MODULE_4__core_utils__["c" /* ObjectUtil */].ignoreNullValue(this.searchForm.value);
        this.sizeService.loadByParams(params).subscribe(function (data) {
            _this.listSize = data;
        });
        this.colorService.loadByParams(params).subscribe(function (data) {
            _this.listColor = data;
        });
    };
    VariantListComponent.prototype.createVariant = function () {
        var _this = this;
        var modalOptions = Object.assign(this.defaultModalOptions(), this.getCreateModalComponentOptions());
        var config = __WEBPACK_IMPORTED_MODULE_4__core_utils__["c" /* ObjectUtil */].combineValue({ ignoreBackdropClick: true }, modalOptions);
        var modalRef = this.modalService.show(this.getCreateModalComponent(), config);
        var modal = modalRef.content;
        modal.setModel(this.initNewModel());
        modal.onHidden.subscribe(function (result) {
            if (result.success) {
                _this.load();
            }
        });
    };
    VariantListComponent.prototype.editVariantSize = function (item) {
        var _this = this;
        var modalOptions = Object.assign(this.defaultModalOptions(), this.getEditModalComponentOptions());
        var config = __WEBPACK_IMPORTED_MODULE_4__core_utils__["c" /* ObjectUtil */].combineValue({ ignoreBackdropClick: true }, modalOptions);
        var modalRef = this.modalService.show(this.getEditModalComponent(), config);
        var modal = modalRef.content;
        item.type = 0;
        modal.setModel(item);
        modal.onHidden.subscribe(function (result) {
            if (result.success) {
                _this.load();
            }
        });
    };
    VariantListComponent.prototype.editVariantColor = function (item) {
        var _this = this;
        var modalOptions = Object.assign(this.defaultModalOptions(), this.getEditModalComponentOptions());
        var config = __WEBPACK_IMPORTED_MODULE_4__core_utils__["c" /* ObjectUtil */].combineValue({ ignoreBackdropClick: true }, modalOptions);
        var modalRef = this.modalService.show(this.getEditModalComponent(), config);
        var modal = modalRef.content;
        item.type = 1;
        modal.setModel(item);
        modal.onHidden.subscribe(function (result) {
            if (result.success) {
                _this.load();
            }
        });
    };
    VariantListComponent.prototype.removeVariantColor = function (item) {
        var _this = this;
        this.colorService.destroy(item['id']).subscribe(function () {
            _this.service.toastSuccessfullyDeleted();
            _this.load();
        }, function () { return _this.service.toastFailedDeleted(); });
    };
    VariantListComponent.prototype.removeVariantSize = function (item) {
        var _this = this;
        this.sizeService.destroy(item['id']).subscribe(function () {
            _this.service.toastSuccessfullyDeleted();
            _this.load();
        }, function () { return _this.service.toastFailedDeleted(); });
    };
    VariantListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-variant',
            template: __webpack_require__("./src/app/modules/variant/variant-list/variant-list.component.html"),
            styles: [__webpack_require__("./src/app/modules/variant/variant-list/variant-list.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_6__variant_service__["a" /* VariantService */], __WEBPACK_IMPORTED_MODULE_10__product_size_product_size_service__["a" /* ProductSizeService */], __WEBPACK_IMPORTED_MODULE_11__product_color_product_color_service__["a" /* ProductColorService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__variant_service__["a" /* VariantService */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__["b" /* BsModalService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_10__product_size_product_size_service__["a" /* ProductSizeService */],
            __WEBPACK_IMPORTED_MODULE_11__product_color_product_color_service__["a" /* ProductColorService */]])
    ], VariantListComponent);
    return VariantListComponent;
}(__WEBPACK_IMPORTED_MODULE_1__core_crud__["a" /* AbstractCRUDComponent */]));



/***/ }),

/***/ "./src/app/modules/variant/variant.meta.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VariantMeta; });
var VariantMeta = /** @class */ (function () {
    function VariantMeta() {
    }
    return VariantMeta;
}());



/***/ }),

/***/ "./src/app/modules/variant/variant.modal.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VariantModalModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_confirmation_popover__ = __webpack_require__("./node_modules/angular-confirmation-popover/fesm5/angular-confirmation-popover.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_multiselect_dropdown__ = __webpack_require__("./node_modules/angular2-multiselect-dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_ckeditor__ = __webpack_require__("./node_modules/ng2-ckeditor/lib/ng2-ckeditor.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_ckeditor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_ckeditor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ng_select_ng_select__ = __webpack_require__("./node_modules/@ng-select/ng-select/esm5/ng-select.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_toggle_switch__ = __webpack_require__("./node_modules/ngx-toggle-switch/ui-switch.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__variant_create_variant_create_component__ = __webpack_require__("./src/app/modules/variant/variant-create/variant-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__variant_edit_variant_edit_component__ = __webpack_require__("./src/app/modules/variant/variant-edit/variant-edit.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var VariantModalModule = /** @class */ (function () {
    function VariantModalModule() {
    }
    VariantModalModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__["e" /* PaginationModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__["f" /* PopoverModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4_angular_confirmation_popover__["a" /* ConfirmationPopoverModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__["d" /* ModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7__ng_select_ng_select__["a" /* NgSelectModule */],
                __WEBPACK_IMPORTED_MODULE_6_ng2_ckeditor__["CKEditorModule"],
                __WEBPACK_IMPORTED_MODULE_8_ngx_toggle_switch__["a" /* UiSwitchModule */],
                __WEBPACK_IMPORTED_MODULE_5_angular2_multiselect_dropdown__["a" /* AngularMultiSelectModule */],
                __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__["g" /* TabsModule */].forRoot(),
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__variant_create_variant_create_component__["a" /* VariantCreateComponent */], __WEBPACK_IMPORTED_MODULE_10__variant_edit_variant_edit_component__["a" /* VariantEditComponent */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_9__variant_create_variant_create_component__["a" /* VariantCreateComponent */], __WEBPACK_IMPORTED_MODULE_10__variant_edit_variant_edit_component__["a" /* VariantEditComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_9__variant_create_variant_create_component__["a" /* VariantCreateComponent */], __WEBPACK_IMPORTED_MODULE_10__variant_edit_variant_edit_component__["a" /* VariantEditComponent */]
            ]
        })
    ], VariantModalModule);
    return VariantModalModule;
}());



/***/ }),

/***/ "./src/app/modules/variant/variant.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariantModule", function() { return VariantModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__variant_list_variant_list_component__ = __webpack_require__("./src/app/modules/variant/variant-list/variant-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_confirmation_popover__ = __webpack_require__("./node_modules/angular-confirmation-popover/fesm5/angular-confirmation-popover.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ng_select_ng_select__ = __webpack_require__("./node_modules/@ng-select/ng-select/esm5/ng-select.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_toggle_switch__ = __webpack_require__("./node_modules/ngx-toggle-switch/ui-switch.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_ckeditor__ = __webpack_require__("./node_modules/ng2-ckeditor/lib/ng2-ckeditor.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_ckeditor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ng2_ckeditor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_multiselect_dropdown__ = __webpack_require__("./node_modules/angular2-multiselect-dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__variant_modal_module__ = __webpack_require__("./src/app/modules/variant/variant.modal.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routing = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__variant_list_variant_list_component__["a" /* VariantListComponent */]
    }
];
var VariantModule = /** @class */ (function () {
    function VariantModule() {
    }
    VariantModule = __decorate([
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
                __WEBPACK_IMPORTED_MODULE_11__variant_modal_module__["a" /* VariantModalModule */],
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__variant_list_variant_list_component__["a" /* VariantListComponent */]],
            entryComponents: []
        })
    ], VariantModule);
    return VariantModule;
}());



/***/ }),

/***/ "./src/app/modules/variant/variant.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VariantService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_crud__ = __webpack_require__("./src/app/core/crud/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__ = __webpack_require__("./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_services__ = __webpack_require__("./src/app/core/services/index.ts");
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





var VariantService = /** @class */ (function (_super) {
    __extends(VariantService, _super);
    function VariantService(http, toaster, title) {
        return _super.call(this, http, title, toaster, 'biến thể', '') || this;
    }
    VariantService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["HttpClient"], __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__["b" /* ToasterService */], __WEBPACK_IMPORTED_MODULE_4__core_services__["d" /* TitleService */]])
    ], VariantService);
    return VariantService;
}(__WEBPACK_IMPORTED_MODULE_2__core_crud__["c" /* AbstractCRUDService */]));



/***/ })

});
//# sourceMappingURL=variant.module.chunk.js.map