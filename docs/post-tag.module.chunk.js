webpackJsonp(["post-tag.module"],{

/***/ "./src/app/modules/post-tag/post-tag-create/post-tag-create.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/post-tag/post-tag-create/post-tag-create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header bg-primary\">\r\n  <h4 class=\"modal-title pull-left\">Thêm mới tag</h4>\r\n  <button (click)=\"dismiss()\" aria-label=\"Close\" class=\"close pull-right\" type=\"button\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n      <form [formGroup]=\"formGroup\" novalidate>\r\n        <div *ngFor=\"let f of fields\" [ngClass]=\"{'has-error':!formGroup.controls[f.formControl].valid}\"\r\n             class=\"form-group\">\r\n          <ng-template [ngIf]=\"f.type=='input'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{f.label}} <span\r\n              *ngIf=\"f.typeof == 'number'\" style=\"font-weight: normal\">\r\n              ( {{formGroup.controls[f.formControl].value|number:'1.0-0'}} )\r\n            </span>\r\n            </label>\r\n            <input [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\" [placeholder]=\"f.placeHolder\"\r\n                   [type]=\"f.typeof\" class=\"form-control\">\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type=='textarea'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{f.label}}\r\n            </label>\r\n            <textarea [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\" [placeholder]=\"f.placeHolder\"\r\n                      [rows]=\"5\" class=\"form-control\">\r\n          </textarea>\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type=='file'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{f.label}}\r\n            </label>\r\n            <input (change)=\"f.config['onFileChange'](formGroup,f.formControl,$event)\" [id]=\"f.formControl\" [name]=\"f.formControl\"\r\n                   [placeholder]=\"f.placeHolder\" accept=\"{{f.config['accept']}}\"\r\n                   class=\"form-control\"\r\n                   type=\"file\">\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type=='checkbox'\">\r\n            <div class=\"checkbox\">\r\n              <label>\r\n                <input [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\" type=\"checkbox\">\r\n                {{f.label}}\r\n              </label>\r\n            </div>\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type=='select'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{f.label}}\r\n            </label>\r\n            <select [formControlName]=\"f.formControl\" [id]=\"f.formControl\" class=\"form-control\">\r\n              <option *ngFor=\"let option of f.data\" [value]=\"option['id']\">{{option['name']}}</option>\r\n            </select>\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type=='select2'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{f.label}}\r\n            </label>\r\n            <div class=\"form-group\">\r\n              <angular2-multiselect [data]=\"f.data\" [formControlName]=\"f.formControl\"\r\n                                    [id]=\"f.formControl\" [settings]=\"f.config\">\r\n              </angular2-multiselect>\r\n            </div>\r\n\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type=='html'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{f.label}}\r\n            </label>\r\n            <ckeditor [config]=\"f.config\" [formControlName]=\"f.formControl\"\r\n                      [id]=\"f.formControl\" debounce=\"500\">\r\n            </ckeditor>\r\n          </ng-template>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <button (click)=\"create()\" [disabled]=\"formGroup.invalid\" class=\"btn btn-primary\" type=\"button\">Thêm mới</button>\r\n  <button (click)=\"dismiss()\" class=\"btn btn-default\" type=\"button\">Hủy bỏ</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/post-tag/post-tag-create/post-tag-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostTagCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_crud__ = __webpack_require__("./src/app/core/crud/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__post_tag_service__ = __webpack_require__("./src/app/modules/post-tag/post-tag.service.ts");
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






var PostTagCreateComponent = /** @class */ (function (_super) {
    __extends(PostTagCreateComponent, _super);
    function PostTagCreateComponent(service, modal, builder) {
        return _super.call(this, service, modal, builder) || this;
    }
    PostTagCreateComponent.prototype.onInit = function () {
    };
    PostTagCreateComponent.prototype.onDestroy = function () {
    };
    PostTagCreateComponent.prototype.buildForm = function () {
        return this.formBuilder.group({
            name: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(255), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern('[^ ].*$')]),
        });
    };
    PostTagCreateComponent.prototype.initFieldForm = function () {
        return [
            __WEBPACK_IMPORTED_MODULE_5__core_common__["b" /* FieldForm */].createTextInput('Tên tag', 'name', 'Nhập kí tự'),
        ];
    };
    PostTagCreateComponent.prototype.loaded = function () {
    };
    PostTagCreateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-post-tag-create',
            template: __webpack_require__("./src/app/modules/post-tag/post-tag-create/post-tag-create.component.html"),
            styles: [__webpack_require__("./src/app/modules/post-tag/post-tag-create/post-tag-create.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_4__post_tag_service__["a" /* PostTagService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__post_tag_service__["a" /* PostTagService */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__["a" /* BsModalRef */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]])
    ], PostTagCreateComponent);
    return PostTagCreateComponent;
}(__WEBPACK_IMPORTED_MODULE_1__core_crud__["d" /* AbstractModalComponent */]));



/***/ }),

/***/ "./src/app/modules/post-tag/post-tag-edit/post-tag-edit.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/post-tag/post-tag-edit/post-tag-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header bg-primary\">\r\n  <h4 class=\"modal-title pull-left\">Chỉnh sửa tag</h4>\r\n  <button (click)=\"dismiss()\" aria-label=\"Close\" class=\"close pull-right\" type=\"button\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n      <form [formGroup]=\"formGroup\" novalidate>\r\n        <div *ngFor=\"let f of fields\" [ngClass]=\"{'has-error':!formGroup.controls[f.formControl].valid}\"\r\n             class=\"form-group\">\r\n          <ng-template [ngIf]=\"f.type=='input'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{f.label}} <span\r\n              *ngIf=\"f.typeof == 'number'\" style=\"font-weight: normal\">\r\n              ( {{formGroup.controls[f.formControl].value|number:'1.0-0'}} )\r\n            </span>\r\n            </label>\r\n            <input [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\" [placeholder]=\"f.placeHolder\"\r\n                   [type]=\"f.typeof\" class=\"form-control\">\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type=='textarea'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{f.label}}\r\n            </label>\r\n            <textarea [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\" [placeholder]=\"f.placeHolder\"\r\n                      [rows]=\"5\" class=\"form-control\">\r\n          </textarea>\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type=='file'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{f.label}}\r\n            </label>\r\n            <input (change)=\"f.config['onFileChange'](formGroup,f.formControl,$event)\" [id]=\"f.formControl\" [name]=\"f.formControl\"\r\n                   [placeholder]=\"f.placeHolder\" accept=\"{{f.config['accept']}}\"\r\n                   class=\"form-control\"\r\n                   type=\"file\">\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type=='checkbox'\">\r\n            <div class=\"checkbox\">\r\n              <label>\r\n                <input [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\" type=\"checkbox\">\r\n                {{f.label}}\r\n              </label>\r\n            </div>\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type=='select'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{f.label}}\r\n            </label>\r\n            <select [formControlName]=\"f.formControl\" [id]=\"f.formControl\" class=\"form-control\">\r\n              <option *ngFor=\"let option of f.data\" [value]=\"option['id']\">{{option['name']}}</option>\r\n            </select>\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type=='select2'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{f.label}}\r\n            </label>\r\n            <div class=\"form-group\">\r\n              <angular2-multiselect [data]=\"f.data\" [formControlName]=\"f.formControl\"\r\n                                    [id]=\"f.formControl\" [settings]=\"f.config\">\r\n              </angular2-multiselect>\r\n            </div>\r\n\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type=='html'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{f.label}}\r\n            </label>\r\n            <ckeditor [config]=\"f.config\" [formControlName]=\"f.formControl\"\r\n                      [id]=\"f.formControl\" debounce=\"500\">\r\n            </ckeditor>\r\n          </ng-template>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <button (click)=\"edit()\" [disabled]=\"formGroup.invalid\" class=\"btn btn-primary\" type=\"button\">Chỉnh sửa</button>\r\n  <button (click)=\"dismiss()\" class=\"btn btn-default\" type=\"button\">Hủy bỏ</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/post-tag/post-tag-edit/post-tag-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostTagEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_crud__ = __webpack_require__("./src/app/core/crud/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__post_tag_service__ = __webpack_require__("./src/app/modules/post-tag/post-tag.service.ts");
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






var PostTagEditComponent = /** @class */ (function (_super) {
    __extends(PostTagEditComponent, _super);
    function PostTagEditComponent(service, modal, builder) {
        return _super.call(this, service, modal, builder) || this;
    }
    PostTagEditComponent.prototype.onInit = function () {
    };
    PostTagEditComponent.prototype.onDestroy = function () {
    };
    PostTagEditComponent.prototype.buildForm = function () {
        return this.formBuilder.group({
            name: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(255), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern('[^ ].*$')]),
        });
    };
    PostTagEditComponent.prototype.initFieldForm = function () {
        return [
            __WEBPACK_IMPORTED_MODULE_5__core_common__["b" /* FieldForm */].createTextInput('Tên tag', 'name', 'Nhập tên'),
        ];
    };
    PostTagEditComponent.prototype.loaded = function () {
    };
    PostTagEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-post-category-edit',
            template: __webpack_require__("./src/app/modules/post-tag/post-tag-edit/post-tag-edit.component.html"),
            styles: [__webpack_require__("./src/app/modules/post-tag/post-tag-edit/post-tag-edit.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_4__post_tag_service__["a" /* PostTagService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__post_tag_service__["a" /* PostTagService */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__["a" /* BsModalRef */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]])
    ], PostTagEditComponent);
    return PostTagEditComponent;
}(__WEBPACK_IMPORTED_MODULE_1__core_crud__["d" /* AbstractModalComponent */]));



/***/ }),

/***/ "./src/app/modules/post-tag/post-tag-item-create/post-tag-item-create.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/post-tag/post-tag-item-create/post-tag-item-create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header bg-primary\">\r\n  <h4 class=\"modal-title pull-left\">Thêm mới gán tag</h4>\r\n  <button (click)=\"dismiss()\" aria-label=\"Close\" class=\"close pull-right\" type=\"button\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <div class=\"row margin-bottom\">\r\n    <div class=\"col-xs-12\">\r\n      <form (ngSubmit)=\"loaded()\" [formGroup]=\"formGroup\">\r\n        <div *ngFor=\"let f of fields\" class=\"form-group col-md-6\">\r\n          <ng-template [ngIf]=\"f.type == 'input'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{ f.label }}\r\n            </label>\r\n            <input [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\"\r\n              [placeholder]=\"f.placeHolder\" [type]=\"f.typeof\" class=\"form-control\" />\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type == 'textarea'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{ f.label }}\r\n            </label>\r\n            <textarea [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\"\r\n              [placeholder]=\"f.placeHolder\" class=\"form-control\">\r\n            </textarea>\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type == 'checkbox'\">\r\n            <div class=\"checkbox\">\r\n              <label>\r\n                <input [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\"\r\n                  type=\"checkbox\" />\r\n                {{ f.label }}\r\n              </label>\r\n            </div>\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type == 'select'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{ f.label }}\r\n            </label>\r\n            <select [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\"\r\n              class=\"form-control\">\r\n              <option *ngFor=\"let option of f.data\" [value]=\"option['id']\">\r\n                {{ option[\"name\"] }}\r\n              </option>\r\n            </select>\r\n          </ng-template>\r\n        </div>\r\n        <div class=\"col-md-12\">\r\n          <button class=\"btn btn-default\" type=\"submit\">Tìm kiếm</button>\r\n          <button (click)=\"removeFilter()\" class=\"btn btn-default\" type=\"button\">Xóa lọc</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n    <div class=\"col-xs-6 col-xs-offset-6\">\r\n      <button (click)=\"assignAll()\" class=\"btn btn-primary pull-right\" [disabled]=\"list == []\" type=\"button\">Gán tất cả</button>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n      <table class=\"table table-bordered table-hover\">\r\n        <thead>\r\n          <tr>\r\n            <th style=\"width: 10%;\">#</th>\r\n            <th style=\"width: 70%;\">Tên bài đăng</th>\r\n            <th style=\"width: 20%;\">Thao tác</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n        <tr *ngFor=\"let item of list;let i = index\" class=\"odd\">\r\n          <td class=\"text-center\">{{i + 1}}</td>\r\n          <td>{{item.name}}</td>\r\n          <td class=\"text-center\">\r\n            <button (click)=\"assign(item)\" class=\"btn btn-primary btn-sm\" type=\"button\">\r\n              <i aria-hidden=\"true\" class=\"fa fa-plus\"> Thêm</i>\r\n            </button>\r\n          </td>\r\n        </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <button (click)=\"dismiss()\" class=\"btn btn-default\" type=\"button\">Hủy bỏ</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/post-tag/post-tag-item-create/post-tag-item-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostTagItemCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_crud__ = __webpack_require__("./src/app/core/crud/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_common__ = __webpack_require__("./src/app/core/common/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__post_post_service__ = __webpack_require__("./src/app/modules/post/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core__ = __webpack_require__("./src/app/core/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__post_tag_post_tag_service__ = __webpack_require__("./src/app/modules/post-tag/post-tag.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__post_category_post_category_service__ = __webpack_require__("./src/app/modules/post-category/post-category.service.ts");
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









var PostTagItemCreateComponent = /** @class */ (function (_super) {
    __extends(PostTagItemCreateComponent, _super);
    function PostTagItemCreateComponent(service, modal, builder, postService, categoryService) {
        var _this = _super.call(this, service, modal, builder) || this;
        _this.postService = postService;
        _this.categoryService = categoryService;
        _this.list = [];
        _this.loadAllCategory();
        return _this;
    }
    PostTagItemCreateComponent.prototype.onInit = function () {
    };
    PostTagItemCreateComponent.prototype.onDestroy = function () {
    };
    PostTagItemCreateComponent.prototype.buildForm = function () {
        return this.formBuilder.group({
            search: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null),
            tag_id_add: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            category_id: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null),
        });
    };
    PostTagItemCreateComponent.prototype.initFieldForm = function () {
        return [
            __WEBPACK_IMPORTED_MODULE_4__core_common__["b" /* FieldForm */].createTextInput('Tìm kiếm theo tên', 'search', 'Nhập từ khóa'),
            __WEBPACK_IMPORTED_MODULE_4__core_common__["b" /* FieldForm */].createSelect('Tìm kiếm danh mục', 'category_id', 'Chọn một', []),
        ];
    };
    PostTagItemCreateComponent.prototype.loaded = function () {
        var _this = this;
        this.formGroup.controls['tag_id_add'].setValue(this.model.id);
        var param = __WEBPACK_IMPORTED_MODULE_6__core__["j" /* ObjectUtil */].combineValue({}, this.formGroup.value, true);
        this.postService.loadTag(param).subscribe(function (res) {
            _this.list = res;
        }, function () {
            _this.list = [];
        });
    };
    PostTagItemCreateComponent.prototype.loadAllCategory = function () {
        var _this = this;
        return this.categoryService.loadAll().subscribe(function (value) {
            _this.fields[1].data = value;
        });
    };
    PostTagItemCreateComponent.prototype.assignAll = function () {
        var _this = this;
        var ids = this.list.map(function (v) { return v.id; });
        this.service.attachTags(this.model.id, ids).subscribe(function (res) {
            _this.service.toastSuccessfully('Thêm tag');
            _this.close(__WEBPACK_IMPORTED_MODULE_6__core__["j" /* ObjectUtil */].mergeValue(_this.model, res));
        }, function () { return _this.service.toastFailed('Thêm tag'); });
    };
    PostTagItemCreateComponent.prototype.assign = function (item) {
        var _this = this;
        this.service.attachTags(this.model.id, [item.id]).subscribe(function (res) {
            _this.service.toastSuccessfully('Thêm tag');
            _this.loaded();
        }, function () { return _this.service.toastFailed('Thêm tag'); });
    };
    PostTagItemCreateComponent.prototype.dismiss = function () {
        this.modal.hide();
        this.onHidden.emit(new __WEBPACK_IMPORTED_MODULE_4__core_common__["c" /* ModalResult */]('success'));
    };
    PostTagItemCreateComponent.prototype.removeFilter = function () {
        this.formGroup.reset();
        this.loaded();
    };
    PostTagItemCreateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-post-tag-item-create',
            template: __webpack_require__("./src/app/modules/post-tag/post-tag-item-create/post-tag-item-create.component.html"),
            styles: [__webpack_require__("./src/app/modules/post-tag/post-tag-item-create/post-tag-item-create.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_7__post_tag_post_tag_service__["a" /* PostTagService */], __WEBPACK_IMPORTED_MODULE_5__post_post_service__["a" /* PostService */], __WEBPACK_IMPORTED_MODULE_8__post_category_post_category_service__["a" /* PostCategoryService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__post_tag_post_tag_service__["a" /* PostTagService */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__["a" /* BsModalRef */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_5__post_post_service__["a" /* PostService */],
            __WEBPACK_IMPORTED_MODULE_8__post_category_post_category_service__["a" /* PostCategoryService */]])
    ], PostTagItemCreateComponent);
    return PostTagItemCreateComponent;
}(__WEBPACK_IMPORTED_MODULE_1__core_crud__["d" /* AbstractModalComponent */]));



/***/ }),

/***/ "./src/app/modules/post-tag/post-tag-item-list/post-tag-item-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/post-tag/post-tag-item-list/post-tag-item-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header bg-primary\">\r\n  <h4 class=\"modal-title pull-left\">Danh sách gán tag</h4>\r\n  <button (click)=\"dismiss()\" aria-label=\"Close\" class=\"close pull-right\" type=\"button\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <div class=\"row margin-bottom\">\r\n    <div class=\"col-xs-12\">\r\n      <form (ngSubmit)=\"load()\" [formGroup]=\"searchForm\">\r\n        <div *ngFor=\"let f of searchControls\" class=\"form-group col-md-6\">\r\n          <ng-template [ngIf]=\"f.type == 'input'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{ f.label }}\r\n            </label>\r\n            <input [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\"\r\n              [placeholder]=\"f.placeHolder\" [type]=\"f.typeof\" class=\"form-control\" />\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type == 'textarea'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{ f.label }}\r\n            </label>\r\n            <textarea [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\"\r\n              [placeholder]=\"f.placeHolder\" class=\"form-control\">\r\n            </textarea>\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type == 'checkbox'\">\r\n            <div class=\"checkbox\">\r\n              <label>\r\n                <input [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\"\r\n                  type=\"checkbox\" />\r\n                {{ f.label }}\r\n              </label>\r\n            </div>\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type == 'select'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{ f.label }}\r\n            </label>\r\n            <select [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\"\r\n              class=\"form-control\">\r\n              <option *ngFor=\"let option of f.data\" [value]=\"option['id']\">\r\n                {{ option[\"name\"] }}\r\n              </option>\r\n            </select>\r\n          </ng-template>\r\n        </div>\r\n        <div class=\"col-md-12\">\r\n          <button class=\"btn btn-default\" type=\"submit\">Tìm kiếm</button>\r\n          <button (click)=\"removeFilter()\" class=\"btn btn-default\" type=\"button\">Xóa lọc</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n    <div class=\"col-xs-6 col-xs-offset-6\">\r\n      <button (click)=\"createTag()\" class=\"btn btn-primary pull-right\" type=\"button\">Thêm tag</button>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n      <table class=\"table table-bordered table-hover\">\r\n        <thead>\r\n        <tr>\r\n          <th style=\"width: 10%;\">#</th>\r\n          <th style=\"width: 70%;\">Tên bài đăng</th>\r\n          <th style=\"width: 20%;\">Thao tác</th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n        <tr *ngFor=\"let item of list;let i = index\" class=\"odd\">\r\n          <td class=\"text-center\">{{i + 1}}</td>\r\n          <td>{{item.name}}</td>\r\n          <td class=\"text-center\">\r\n            <button (confirm)=\"detach(item.id)\" cancelText=\"No <i class='fa fa-remove'></i>\" class=\"btn btn-danger btn-sm\" confirmText=\"Yes <i class='fa fa-check'></i>\"\r\n                    mwlConfirmationPopover placement=\"top\" popoverMessage=\"Bạn thực sự muốn xóa?\"\r\n                    popoverTitle=\"Xóa\" type=\"button\" style=\"width: 30px; height: 30px; padding: 0;\">\r\n              <i class=\"fa fa-remove\"></i>\r\n            </button>\r\n          </td>\r\n        </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"panel-footer\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-6\">\r\n      <pagination (numPages)=\"pagination.numPages = $event\" (pageChanged)=\"pageChanged($event)\"\r\n                  [(ngModel)]=\"pagination.currentPage\" [boundaryLinks]=\"true\"\r\n                  [itemsPerPage]=\"pagination.itemsPerPage\" [maxSize]=\"pagination.maxSize\" [totalItems]=\"pagination.totalItems\"\r\n                  class=\"pagination-sm\"></pagination>\r\n    </div>\r\n    <div class=\"col-xs-6\">\r\n      <div class=\"box-go-to\">\r\n        <input [(ngModel)]=\"nextPage\" class=\"col-xs-2\" type=\"number\">\r\n        <span class=\"col-xs-1\">/</span>\r\n        <input [(ngModel)]=\"pagination.numPages\" class=\"col-xs-2\" disabled type=\"text\">\r\n        <div class=\"col-xs-4\">\r\n          <button (click)=\"goToPageNumber()\">Đến</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <button (click)=\"dismiss()\" class=\"btn btn-default\" type=\"button\">Hủy bỏ</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/post-tag/post-tag-item-list/post-tag-item-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostTagItemListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_crud__ = __webpack_require__("./src/app/core/crud/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__post_tag_service__ = __webpack_require__("./src/app/modules/post-tag/post-tag.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_common__ = __webpack_require__("./src/app/core/common/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__post_tag_item_create_post_tag_item_create_component__ = __webpack_require__("./src/app/modules/post-tag/post-tag-item-create/post-tag-item-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__post_tag_meta__ = __webpack_require__("./src/app/modules/post-tag/post-tag.meta.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__post_post_service__ = __webpack_require__("./src/app/modules/post/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__core__ = __webpack_require__("./src/app/core/index.ts");
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










var PostTagItemListComponent = /** @class */ (function (_super) {
    __extends(PostTagItemListComponent, _super);
    function PostTagItemListComponent(service, modalRef, modal, builder, postService) {
        var _this = _super.call(this, service, modalRef, modal, builder) || this;
        _this.postService = postService;
        return _this;
    }
    PostTagItemListComponent.prototype.onInit = function () {
    };
    PostTagItemListComponent.prototype.onDestroy = function () {
    };
    PostTagItemListComponent.prototype.getTitle = function () {
        return 'Quản lý gán tag';
    };
    PostTagItemListComponent.prototype.getCreateModalComponent = function () {
        return __WEBPACK_IMPORTED_MODULE_6__post_tag_item_create_post_tag_item_create_component__["a" /* PostTagItemCreateComponent */];
    };
    PostTagItemListComponent.prototype.getEditModalComponent = function () {
        return null;
    };
    PostTagItemListComponent.prototype.getCreateModalComponentOptions = function () {
        return { 'class': 'modal-lg', ignoreBackdropClick: true };
    };
    PostTagItemListComponent.prototype.getEditModalComponentOptions = function () {
        return null;
    };
    PostTagItemListComponent.prototype.buildSearchForm = function () {
        return this.formBuilder.group({
            search: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null),
        });
    };
    PostTagItemListComponent.prototype.initSearchForm = function () {
        return [
            __WEBPACK_IMPORTED_MODULE_5__core_common__["b" /* FieldForm */].createTextInput('Tìm kiếm theo tên', 'search', 'Nhập từ khóa'),
        ];
    };
    PostTagItemListComponent.prototype.initNewModel = function () {
        var model = new __WEBPACK_IMPORTED_MODULE_7__post_tag_meta__["a" /* PostTagMeta */]();
        model.id = this.relatedModel.id;
        return model;
    };
    PostTagItemListComponent.prototype.loaded = function () {
    };
    PostTagItemListComponent.prototype.load = function () {
        var _this = this;
        var param = __WEBPACK_IMPORTED_MODULE_9__core__["j" /* ObjectUtil */].combineValue({
            tag_id: this.relatedModel.id,
            limit: this.pagination.itemsPerPage,
            page: this.pagination.currentPage,
        }, this.searchForm.value, true);
        this.postService.loadTag(param).subscribe(function (res) {
            _this.nextPage = _this.pagination.currentPage;
            _this.list = res.data;
            _this.pagination.set(res);
        }, function () {
            _this.list = [];
            _this.pagination = new __WEBPACK_IMPORTED_MODULE_5__core_common__["a" /* AppPagination */]();
            _this.nextPage = _this.pagination.currentPage;
        });
    };
    PostTagItemListComponent.prototype.createTag = function () {
        var _this = this;
        var modalRef = this.modalService.show(this.getCreateModalComponent(), this.getCreateModalComponentOptions());
        var modal = modalRef.content;
        modal.setModel(this.initNewModel());
        var sub = modal.onHidden.subscribe(function (result) {
            if (result.success) {
                _this.load();
            }
            sub.unsubscribe();
        });
    };
    PostTagItemListComponent.prototype.detach = function (item) {
        var _this = this;
        this.service.detachTags(this.relatedModel.id, item).subscribe(function (res) {
            _this.service.toastSuccessfully('Xóa');
            _this.load();
        }, function () { return _this.service.toastFailed('Xóa'); });
    };
    PostTagItemListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-post-tag-item-list',
            template: __webpack_require__("./src/app/modules/post-tag/post-tag-item-list/post-tag-item-list.component.html"),
            styles: [__webpack_require__("./src/app/modules/post-tag/post-tag-item-list/post-tag-item-list.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_4__post_tag_service__["a" /* PostTagService */], __WEBPACK_IMPORTED_MODULE_8__post_post_service__["a" /* PostService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__post_tag_service__["a" /* PostTagService */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__["a" /* BsModalRef */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__["b" /* BsModalService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_8__post_post_service__["a" /* PostService */]])
    ], PostTagItemListComponent);
    return PostTagItemListComponent;
}(__WEBPACK_IMPORTED_MODULE_1__core_crud__["b" /* AbstractCRUDModalComponent */]));



/***/ }),

/***/ "./src/app/modules/post-tag/post-tag-list/post-tag-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/post-tag/post-tag-list/post-tag-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n  <div class=\"panel-heading\">\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12\">\r\n        <form (ngSubmit)=\"load()\" [formGroup]=\"searchForm\">\r\n          <div *ngFor=\"let f of searchControls\" class=\"form-group col-md-6\">\r\n            <ng-template [ngIf]=\"f.type == 'input'\">\r\n              <label [for]=\"f.formControl\">\r\n                {{ f.label }}\r\n              </label>\r\n              <input [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\"\r\n                [placeholder]=\"f.placeHolder\" [type]=\"f.typeof\" class=\"form-control\" />\r\n            </ng-template>\r\n            <ng-template [ngIf]=\"f.type == 'textarea'\">\r\n              <label [for]=\"f.formControl\">\r\n                {{ f.label }}\r\n              </label>\r\n              <textarea [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\"\r\n                [placeholder]=\"f.placeHolder\" class=\"form-control\">\r\n              </textarea>\r\n            </ng-template>\r\n            <ng-template [ngIf]=\"f.type == 'checkbox'\">\r\n              <div class=\"checkbox\">\r\n                <label>\r\n                  <input [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\"\r\n                    type=\"checkbox\" />\r\n                  {{ f.label }}\r\n                </label>\r\n              </div>\r\n            </ng-template>\r\n            <ng-template [ngIf]=\"f.type == 'select'\">\r\n              <label [for]=\"f.formControl\">\r\n                {{ f.label }}\r\n              </label>\r\n              <select [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\"\r\n                class=\"form-control\">\r\n                <option *ngFor=\"let option of f.data\" [value]=\"option['id']\">\r\n                  {{ option[\"name\"] }}\r\n                </option>\r\n              </select>\r\n            </ng-template>\r\n          </div>\r\n          <div class=\"col-md-12\">\r\n            <button class=\"btn btn-default\" type=\"submit\">Tìm kiếm</button>\r\n            <button (click)=\"removeFilter()\" class=\"btn btn-default\" type=\"button\">Xóa lọc</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <div class=\"col-xs-6 col-xs-offset-6\">\r\n        <button (click)=\"createPostTag()\" class=\"btn btn-primary pull-right\" type=\"button\">\r\n          <i class=\"fa fa-plus\"></i> Thêm mới\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"panel-body no-padding\">\r\n    <table class=\"table table-bordered table-hover\">\r\n      <thead>\r\n        <tr>\r\n          <th style=\"width: 10%\">#</th>\r\n          <th style=\"width: 35%\">Tên tag</th>\r\n          <th style=\"width: 20%\">Bài viết</th>\r\n          <th style=\"width: 15%\">Trạng thái</th>\r\n          <th style=\"width: 20%\">Thao tác</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let item of list; let i = index\" class=\"odd\">\r\n          <td class=\"text-center\">{{i + 1}}</td>\r\n          <td>\r\n            <p>\r\n              <a [href]=\"item.full_path\" target=\"_blank\">{{ item.name }}</a>\r\n            </p>\r\n            <p>{{ item.created_at | date : \"yyyy-MM-dd HH:mm:ss\" }}</p>\r\n          </td>\r\n          <td style=\"text-align: center;\">\r\n            <button (click)=\"showPost(item)\" class=\"btn btn-default btn-sm\" type=\"button\">Xem</button>\r\n          </td>\r\n          <td class=\"text-center\">\r\n            <ui-switch (change)=\"onStatusChange(item,i,$event)\" *ngIf=\"item.status == 0\"></ui-switch>\r\n            <ui-switch (change)=\"onStatusChange(item,i,$event)\" *ngIf=\"item.status == 1\"\r\n                       [checked]=\"item.status\"></ui-switch>\r\n          </td>\r\n          <td class=\"text-center\">\r\n            <button (confirm)=\"upOrder(item)\" cancelText=\"No <i class='fa fa-remove'></i>\"\r\n              class=\"btn btn-default btn-sm\" confirmText=\"Yes <i class='fa fa-check'></i>\" mwlConfirmationPopover\r\n              placement=\"top\" popoverMessage=\"Bạn thực sự muốn tăng thứ tự?\" popoverTitle=\"Thay đổi thứ tự\"\r\n              type=\"button\" style=\"width: 30px; height: 30px; padding: 0;\">\r\n              <i class=\"fa fa-arrow-up\"></i>\r\n            </button>\r\n            <button (confirm)=\"downOrder(item)\" cancelText=\"No <i class='fa fa-remove'></i>\"\r\n              class=\"btn btn-default btn-sm\" confirmText=\"Yes <i class='fa fa-check'></i>\" mwlConfirmationPopover\r\n              placement=\"top\" popoverMessage=\"Bạn thực sự muốn giảm thứ tự?\" popoverTitle=\"Thay đổi thứ tự\"\r\n              type=\"button\" style=\"width: 30px; height: 30px; padding: 0;\">\r\n              <i class=\"fa fa-arrow-down\"></i>\r\n            </button>\r\n            <button (click)=\"editPostTag(item)\" class=\"btn btn-default btn-sm\" type=\"button\" style=\"width: 30px; height: 30px; padding: 0;\">\r\n              <i class=\"fa fa-pencil-square-o\"></i>\r\n            </button>\r\n            <button (confirm)=\"remove(item, i)\" cancelText=\"No <i class='fa fa-remove'></i>\"\r\n              class=\"btn btn-danger btn-sm\" confirmText=\"Yes <i class='fa fa-check'></i>\" mwlConfirmationPopover\r\n              placement=\"top\" popoverMessage=\"Bạn thực sự muốn xóa?\" popoverTitle=\"Xóa\" style=\"width: 30px; height: 30px; padding: 0;\"\r\n              type=\"button\">\r\n              <i aria-hidden=\"true\" class=\"fa fa-remove\"></i>\r\n            </button>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n  <div class=\"panel-footer\">\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-6\">\r\n        <pagination (numPages)=\"pagination.numPages = $event\" (pageChanged)=\"pageChanged($event)\"\r\n          [(ngModel)]=\"pagination.currentPage\" [boundaryLinks]=\"true\" [itemsPerPage]=\"pagination.itemsPerPage\"\r\n          [maxSize]=\"pagination.maxSize\" [totalItems]=\"pagination.totalItems\" class=\"pagination-sm\"></pagination>\r\n      </div>\r\n      <div class=\"col-xs-6\">\r\n        <div class=\"box-go-to\">\r\n          <input [(ngModel)]=\"nextPage\" class=\"col-xs-2\" type=\"number\" />\r\n          <span class=\"col-xs-1\">/</span>\r\n          <input [(ngModel)]=\"pagination.numPages\" class=\"col-xs-2\" disabled type=\"text\" />\r\n          <div class=\"col-xs-4\">\r\n            <button (click)=\"goToPageNumber()\">Đến</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/post-tag/post-tag-list/post-tag-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostTagListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_crud__ = __webpack_require__("./src/app/core/crud/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__post_tag_meta__ = __webpack_require__("./src/app/modules/post-tag/post-tag.meta.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__post_tag_service__ = __webpack_require__("./src/app/modules/post-tag/post-tag.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__post_tag_create_post_tag_create_component__ = __webpack_require__("./src/app/modules/post-tag/post-tag-create/post-tag-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__post_tag_edit_post_tag_edit_component__ = __webpack_require__("./src/app/modules/post-tag/post-tag-edit/post-tag-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__core_common__ = __webpack_require__("./src/app/core/common/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__core__ = __webpack_require__("./src/app/core/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__post_tag_item_list_post_tag_item_list_component__ = __webpack_require__("./src/app/modules/post-tag/post-tag-item-list/post-tag-item-list.component.ts");
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











var PostTagListComponent = /** @class */ (function (_super) {
    __extends(PostTagListComponent, _super);
    function PostTagListComponent(service, modal, builder) {
        return _super.call(this, service, modal, builder) || this;
    }
    PostTagListComponent.prototype.onInit = function () {
        this.load();
    };
    PostTagListComponent.prototype.onDestroy = function () {
    };
    PostTagListComponent.prototype.getTitle = function () {
        return 'Quản lý tag bài đăng';
    };
    PostTagListComponent.prototype.getCreateModalComponent = function () {
        return __WEBPACK_IMPORTED_MODULE_6__post_tag_create_post_tag_create_component__["a" /* PostTagCreateComponent */];
    };
    PostTagListComponent.prototype.getEditModalComponent = function () {
        return __WEBPACK_IMPORTED_MODULE_7__post_tag_edit_post_tag_edit_component__["a" /* PostTagEditComponent */];
    };
    PostTagListComponent.prototype.getCreateModalComponentOptions = function () {
        return { class: 'modal-lg', ignoreBackdropClick: true };
    };
    PostTagListComponent.prototype.getEditModalComponentOptions = function () {
        return { class: 'modal-lg', ignoreBackdropClick: true };
    };
    PostTagListComponent.prototype.buildSearchForm = function () {
        return this.formBuilder.group({
            search: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](null),
        });
    };
    PostTagListComponent.prototype.initSearchForm = function () {
        return [
            __WEBPACK_IMPORTED_MODULE_8__core_common__["b" /* FieldForm */].createTextInput('Tìm kiếm theo tên', 'search', 'Nhập từ khóa'),
        ];
    };
    PostTagListComponent.prototype.initNewModel = function () {
        return new __WEBPACK_IMPORTED_MODULE_4__post_tag_meta__["a" /* PostTagMeta */]();
    };
    PostTagListComponent.prototype.onStatusChange = function (item, index, enable) {
        var _this = this;
        var methodAsync = null;
        var titleMsg = 'Phát hành';
        if (enable) {
            methodAsync = this.service.enable(item.id);
        }
        else {
            methodAsync = this.service.disable(item.id);
            titleMsg = 'Lưu kho';
        }
        methodAsync.subscribe(function (res) {
            _this.service.toastSuccessfully(titleMsg);
        }, function () { return _this.service.toastFailed(titleMsg); });
        this.load();
    };
    PostTagListComponent.prototype.createPostTag = function () {
        var _this = this;
        var modalOptions = Object.assign(this.defaultModalOptions(), this.getCreateModalComponentOptions());
        var config = __WEBPACK_IMPORTED_MODULE_9__core__["j" /* ObjectUtil */].combineValue({ ignoreBackdropClick: true }, modalOptions);
        var modalRef = this.modalService.show(this.getCreateModalComponent(), config);
        var modal = modalRef.content;
        modal.setModel(this.initNewModel());
        modal.onHidden.subscribe(function (result) {
            if (result.success) {
                _this.load();
            }
        });
    };
    PostTagListComponent.prototype.editPostTag = function (item) {
        var _this = this;
        var modalOptions = Object.assign(this.defaultModalOptions(), this.getEditModalComponentOptions());
        var config = __WEBPACK_IMPORTED_MODULE_9__core__["j" /* ObjectUtil */].combineValue({ ignoreBackdropClick: true }, modalOptions);
        var modalRef = this.modalService.show(this.getEditModalComponent(), config);
        var modal = modalRef.content;
        modal.setModel(item);
        modal.onHidden.subscribe(function (result) {
            if (result.success) {
                _this.load();
            }
        });
    };
    PostTagListComponent.prototype.showPost = function (item) {
        var _this = this;
        var modalRef = this.modalService.show(__WEBPACK_IMPORTED_MODULE_10__post_tag_item_list_post_tag_item_list_component__["a" /* PostTagItemListComponent */], { ignoreBackdropClick: true, class: 'modal-lg' });
        var modal = modalRef.content;
        modal.setRelatedModel(item);
        var sub = modal.onHidden.subscribe(function (result) {
            if (result.success) {
                _this.load();
            }
            sub.unsubscribe();
        });
    };
    PostTagListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-post-tag',
            template: __webpack_require__("./src/app/modules/post-tag/post-tag-list/post-tag-list.component.html"),
            styles: [__webpack_require__("./src/app/modules/post-tag/post-tag-list/post-tag-list.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_5__post_tag_service__["a" /* PostTagService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__post_tag_service__["a" /* PostTagService */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__["b" /* BsModalService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"]])
    ], PostTagListComponent);
    return PostTagListComponent;
}(__WEBPACK_IMPORTED_MODULE_1__core_crud__["a" /* AbstractCRUDComponent */]));



/***/ }),

/***/ "./src/app/modules/post-tag/post-tag.meta.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostTagMeta; });
var PostTagMeta = /** @class */ (function () {
    function PostTagMeta() {
    }
    return PostTagMeta;
}());



/***/ }),

/***/ "./src/app/modules/post-tag/post-tag.modal.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostTagModalModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__post_tag_create_post_tag_create_component__ = __webpack_require__("./src/app/modules/post-tag/post-tag-create/post-tag-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__post_tag_edit_post_tag_edit_component__ = __webpack_require__("./src/app/modules/post-tag/post-tag-edit/post-tag-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_confirmation_popover__ = __webpack_require__("./node_modules/angular-confirmation-popover/fesm5/angular-confirmation-popover.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ng_select_ng_select__ = __webpack_require__("./node_modules/@ng-select/ng-select/esm5/ng-select.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_multiselect_dropdown__ = __webpack_require__("./node_modules/angular2-multiselect-dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_ckeditor__ = __webpack_require__("./node_modules/ng2-ckeditor/lib/ng2-ckeditor.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_ckeditor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ng2_ckeditor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_toggle_switch__ = __webpack_require__("./node_modules/ngx-toggle-switch/ui-switch.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__post_tag_item_create_post_tag_item_create_component__ = __webpack_require__("./src/app/modules/post-tag/post-tag-item-create/post-tag-item-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__post_tag_item_list_post_tag_item_list_component__ = __webpack_require__("./src/app/modules/post-tag/post-tag-item-list/post-tag-item-list.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var PostTagModalModule = /** @class */ (function () {
    function PostTagModalModule() {
    }
    PostTagModalModule = __decorate([
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
                __WEBPACK_IMPORTED_MODULE_10_ngx_toggle_switch__["a" /* UiSwitchModule */],
                __WEBPACK_IMPORTED_MODULE_8_angular2_multiselect_dropdown__["a" /* AngularMultiSelectModule */],
                __WEBPACK_IMPORTED_MODULE_9_ng2_ckeditor__["CKEditorModule"],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__post_tag_create_post_tag_create_component__["a" /* PostTagCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_3__post_tag_edit_post_tag_edit_component__["a" /* PostTagEditComponent */],
                __WEBPACK_IMPORTED_MODULE_12__post_tag_item_list_post_tag_item_list_component__["a" /* PostTagItemListComponent */],
                __WEBPACK_IMPORTED_MODULE_11__post_tag_item_create_post_tag_item_create_component__["a" /* PostTagItemCreateComponent */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__post_tag_create_post_tag_create_component__["a" /* PostTagCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_3__post_tag_edit_post_tag_edit_component__["a" /* PostTagEditComponent */],
                __WEBPACK_IMPORTED_MODULE_12__post_tag_item_list_post_tag_item_list_component__["a" /* PostTagItemListComponent */],
                __WEBPACK_IMPORTED_MODULE_11__post_tag_item_create_post_tag_item_create_component__["a" /* PostTagItemCreateComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__post_tag_create_post_tag_create_component__["a" /* PostTagCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_3__post_tag_edit_post_tag_edit_component__["a" /* PostTagEditComponent */],
                __WEBPACK_IMPORTED_MODULE_12__post_tag_item_list_post_tag_item_list_component__["a" /* PostTagItemListComponent */],
                __WEBPACK_IMPORTED_MODULE_11__post_tag_item_create_post_tag_item_create_component__["a" /* PostTagItemCreateComponent */]
            ]
        })
    ], PostTagModalModule);
    return PostTagModalModule;
}());



/***/ }),

/***/ "./src/app/modules/post-tag/post-tag.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostTagModule", function() { return PostTagModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__post_tag_list_post_tag_list_component__ = __webpack_require__("./src/app/modules/post-tag/post-tag-list/post-tag-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_confirmation_popover__ = __webpack_require__("./node_modules/angular-confirmation-popover/fesm5/angular-confirmation-popover.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ng_select_ng_select__ = __webpack_require__("./node_modules/@ng-select/ng-select/esm5/ng-select.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__post_tag_modal_module__ = __webpack_require__("./src/app/modules/post-tag/post-tag.modal.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_toggle_switch__ = __webpack_require__("./node_modules/ngx-toggle-switch/ui-switch.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routing = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__post_tag_list_post_tag_list_component__["a" /* PostTagListComponent */]
    }
];
var PostTagModule = /** @class */ (function () {
    function PostTagModule() {
    }
    PostTagModule = __decorate([
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
                __WEBPACK_IMPORTED_MODULE_9_ngx_toggle_switch__["a" /* UiSwitchModule */],
                __WEBPACK_IMPORTED_MODULE_8__post_tag_modal_module__["a" /* PostTagModalModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__post_tag_list_post_tag_list_component__["a" /* PostTagListComponent */],
            ],
            entryComponents: []
        })
    ], PostTagModule);
    return PostTagModule;
}());



/***/ })

});
//# sourceMappingURL=post-tag.module.chunk.js.map