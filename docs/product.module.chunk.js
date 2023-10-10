webpackJsonp(["product.module"],{

/***/ "./src/app/modules/article/article-create/article-create.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/article/article-create/article-create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header bg-primary\">\r\n  <h4 class=\"modal-title pull-left\">Thêm mới bài viết</h4>\r\n  <button (click)=\"dismiss()\" aria-label=\"Close\" class=\"close pull-right\" type=\"button\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n      <form [formGroup]=\"formGroup\" novalidate>\r\n        <div *ngFor=\"let f of fields\" [ngClass]=\"{ 'has-error': !formGroup.controls[f.formControl].valid }\"\r\n             class=\"form-group\">\r\n          <ng-template [ngIf]=\"f.type == 'input'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{ f.label }}\r\n              <span *ngIf=\"f.typeof == 'number'\" style=\"font-weight: normal\">\r\n                ({{formGroup.controls[f.formControl].value | number : \"1.0-0\"}})\r\n              </span>\r\n            </label>\r\n            <input [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\" [placeholder]=\"f.placeHolder\"\r\n                   [type]=\"f.typeof\" class=\"form-control\"/>\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type == 'textarea'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{ f.label }}\r\n            </label>\r\n            <textarea [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\" [placeholder]=\"f.placeHolder\"\r\n                      [rows]=\"5\" class=\"form-control\">\r\n            </textarea>\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type == 'file'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{ f.label }}\r\n            </label>\r\n            <input (change)=\"\r\n                f.config['onFileChange'](formGroup, f.formControl, $event)\r\n              \" [id]=\"f.formControl\" [name]=\"f.formControl\" [placeholder]=\"f.placeHolder\"\r\n                   accept=\"{{ f.config['accept'] }}\" class=\"form-control\" type=\"file\"/>\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type == 'checkbox'\">\r\n            <div class=\"checkbox\">\r\n              <label>\r\n                <input [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\" type=\"checkbox\"/>\r\n                {{ f.label }}\r\n              </label>\r\n            </div>\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type == 'select'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{ f.label }}\r\n            </label>\r\n            <select [formControlName]=\"f.formControl\" [id]=\"f.formControl\" class=\"form-control\">\r\n              <option *ngFor=\"let option of f.data\" [value]=\"option['id']\">\r\n                {{ option[\"name\"] }}\r\n              </option>\r\n            </select>\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type == 'html'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{ f.label }}\r\n            </label>\r\n            <ckeditor [config]=\"f.config\" [formControlName]=\"f.formControl\" [id]=\"f.formControl\" debounce=\"500\">\r\n            </ckeditor>\r\n          </ng-template>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <button (click)=\"createWithImage()\" [disabled]=\"formGroup.invalid\" class=\"btn btn-primary\" type=\"button\">Thêm mới</button>\r\n  <button (click)=\"dismiss()\" class=\"btn btn-default\" type=\"button\">Hủy bỏ</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/article/article-create/article-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_crud__ = __webpack_require__("./src/app/core/crud/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__article_service__ = __webpack_require__("./src/app/modules/article/article.service.ts");
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






var ArticleCreateComponent = /** @class */ (function (_super) {
    __extends(ArticleCreateComponent, _super);
    function ArticleCreateComponent(service, modal, builder) {
        return _super.call(this, service, modal, builder) || this;
    }
    ArticleCreateComponent.prototype.onInit = function () {
    };
    ArticleCreateComponent.prototype.onDestroy = function () {
    };
    ArticleCreateComponent.prototype.buildForm = function () {
        return this.formBuilder.group({
            content: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            articleable_type: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            articleable_id: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
        });
    };
    ArticleCreateComponent.prototype.initFieldForm = function () {
        return [
            __WEBPACK_IMPORTED_MODULE_5__core_common__["b" /* FieldForm */].createHtmlInput('Nội dung', 'content', 'Nhập nội dung'),
        ];
    };
    ArticleCreateComponent.prototype.loaded = function () {
        this.formGroup.setValue({
            content: null,
            articleable_type: this.model.articleable_type,
            articleable_id: this.model.articleable_id,
        });
    };
    ArticleCreateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-article-create',
            template: __webpack_require__("./src/app/modules/article/article-create/article-create.component.html"),
            styles: [__webpack_require__("./src/app/modules/article/article-create/article-create.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_4__article_service__["a" /* ArticleService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__article_service__["a" /* ArticleService */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__["a" /* BsModalRef */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]])
    ], ArticleCreateComponent);
    return ArticleCreateComponent;
}(__WEBPACK_IMPORTED_MODULE_1__core_crud__["d" /* AbstractModalComponent */]));



/***/ }),

/***/ "./src/app/modules/article/article-edit/article-edit.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/article/article-edit/article-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header bg-primary\">\r\n  <h4 class=\"modal-title pull-left\">Chỉnh sửa bài viết</h4>\r\n  <button (click)=\"dismiss()\" aria-label=\"Close\" class=\"close pull-right\" type=\"button\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n      <form [formGroup]=\"formGroup\" novalidate>\r\n        <div *ngFor=\"let f of fields\" [ngClass]=\"{'has-error':!formGroup.controls[f.formControl].valid}\"\r\n          class=\"form-group\">\r\n          <ng-template [ngIf]=\"f.type=='input'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{f.label}} <span *ngIf=\"f.typeof == 'number'\" style=\"font-weight: normal\">\r\n                ( {{formGroup.controls[f.formControl].value|number:'1.0-0'}} )\r\n              </span>\r\n            </label>\r\n            <input [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\"\r\n              [placeholder]=\"f.placeHolder\" [type]=\"f.typeof\" class=\"form-control\">\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type=='textarea'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{f.label}}\r\n            </label>\r\n            <textarea [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\"\r\n              [placeholder]=\"f.placeHolder\" [rows]=\"5\" class=\"form-control\">\r\n          </textarea>\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type=='file'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{f.label}}\r\n            </label>\r\n            <input (change)=\"f.config['onFileChange'](formGroup,f.formControl,$event)\" [id]=\"f.formControl\"\r\n              [name]=\"f.formControl\" [placeholder]=\"f.placeHolder\" accept=\"{{f.config['accept']}}\" class=\"form-control\"\r\n              type=\"file\">\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type=='checkbox'\">\r\n            <div class=\"checkbox\">\r\n              <label>\r\n                <input [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\" type=\"checkbox\">\r\n                {{f.label}}\r\n              </label>\r\n            </div>\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type=='select'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{f.label}}\r\n            </label>\r\n            <select [formControlName]=\"f.formControl\" [id]=\"f.formControl\" class=\"form-control\">\r\n              <option *ngFor=\"let option of f.data\" [value]=\"option['id']\">{{option['name']}}</option>\r\n            </select>\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type=='html'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{f.label}}\r\n            </label>\r\n            <ckeditor [config]=\"f.config\" [formControlName]=\"f.formControl\" [id]=\"f.formControl\" debounce=\"500\">\r\n            </ckeditor>\r\n          </ng-template>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <button (click)=\"editWithImage()\" [disabled]=\"formGroup.invalid\" class=\"btn btn-primary\" type=\"button\">Chỉnh sửa</button>\r\n  <button (click)=\"dismiss()\" class=\"btn btn-default\" type=\"button\">Hủy bỏ</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/article/article-edit/article-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_crud__ = __webpack_require__("./src/app/core/crud/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__article_service__ = __webpack_require__("./src/app/modules/article/article.service.ts");
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






var ArticleEditComponent = /** @class */ (function (_super) {
    __extends(ArticleEditComponent, _super);
    function ArticleEditComponent(service, modal, builder) {
        return _super.call(this, service, modal, builder) || this;
    }
    ArticleEditComponent.prototype.onInit = function () {
    };
    ArticleEditComponent.prototype.onDestroy = function () {
    };
    ArticleEditComponent.prototype.buildForm = function () {
        return this.formBuilder.group({
            content: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            articleable_type: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            articleable_id: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
        });
    };
    ArticleEditComponent.prototype.initFieldForm = function () {
        return [
            __WEBPACK_IMPORTED_MODULE_5__core_common__["b" /* FieldForm */].createHtmlInput('Nội dung', 'content', 'Nhập ký tự'),
        ];
    };
    ArticleEditComponent.prototype.loaded = function () {
    };
    ArticleEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-article-edit',
            template: __webpack_require__("./src/app/modules/article/article-edit/article-edit.component.html"),
            styles: [__webpack_require__("./src/app/modules/article/article-edit/article-edit.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_4__article_service__["a" /* ArticleService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__article_service__["a" /* ArticleService */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__["a" /* BsModalRef */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]])
    ], ArticleEditComponent);
    return ArticleEditComponent;
}(__WEBPACK_IMPORTED_MODULE_1__core_crud__["d" /* AbstractModalComponent */]));



/***/ }),

/***/ "./src/app/modules/article/article.meta.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleMeta; });
var ArticleMeta = /** @class */ (function () {
    function ArticleMeta() {
    }
    return ArticleMeta;
}());



/***/ }),

/***/ "./src/app/modules/article/article.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__article_create_article_create_component__ = __webpack_require__("./src/app/modules/article/article-create/article-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__article_edit_article_edit_component__ = __webpack_require__("./src/app/modules/article/article-edit/article-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_ckeditor__ = __webpack_require__("./node_modules/ng2-ckeditor/lib/ng2-ckeditor.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_ckeditor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_ckeditor__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ArticleModule = /** @class */ (function () {
    function ArticleModule() {
    }
    ArticleModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__["d" /* ModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6_ng2_ckeditor__["CKEditorModule"],
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__article_create_article_create_component__["a" /* ArticleCreateComponent */], __WEBPACK_IMPORTED_MODULE_5__article_edit_article_edit_component__["a" /* ArticleEditComponent */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_4__article_create_article_create_component__["a" /* ArticleCreateComponent */], __WEBPACK_IMPORTED_MODULE_5__article_edit_article_edit_component__["a" /* ArticleEditComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_4__article_create_article_create_component__["a" /* ArticleCreateComponent */], __WEBPACK_IMPORTED_MODULE_5__article_edit_article_edit_component__["a" /* ArticleEditComponent */]]
        })
    ], ArticleModule);
    return ArticleModule;
}());



/***/ }),

/***/ "./src/app/modules/article/article.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleService; });
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





var ArticleService = /** @class */ (function (_super) {
    __extends(ArticleService, _super);
    function ArticleService(http, toaster, title) {
        return _super.call(this, http, title, toaster, 'bài viết', 'articles') || this;
    }
    ArticleService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["HttpClient"], __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__["b" /* ToasterService */], __WEBPACK_IMPORTED_MODULE_4__core_services__["d" /* TitleService */]])
    ], ArticleService);
    return ArticleService;
}(__WEBPACK_IMPORTED_MODULE_2__core_crud__["c" /* AbstractCRUDService */]));



/***/ }),

/***/ "./src/app/modules/product-image/product-image-create/product-image-create.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/product-image/product-image-create/product-image-create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header bg-primary\">\r\n  <h4 class=\"modal-title pull-left\">Thêm mới ảnh sản phẩm</h4>\r\n  <button (click)=\"dismiss()\" aria-label=\"Close\" class=\"close pull-right\" type=\"button\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n      <form [formGroup]=\"formGroup\" novalidate>\r\n        <div *ngFor=\"let f of fields\" [ngClass]=\"{'has-error':!formGroup.controls[f.formControl].valid}\"\r\n             class=\"form-group\">\r\n          <ng-template [ngIf]=\"f.type=='input'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{f.label}} <span\r\n              *ngIf=\"f.typeof == 'number'\" style=\"font-weight: normal\">\r\n              ( {{formGroup.controls[f.formControl].value|number:'1.0-0'}} )\r\n            </span>\r\n            </label>\r\n            <input [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\" [placeholder]=\"f.placeHolder\"\r\n                   [type]=\"f.typeof\" class=\"form-control\">\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type=='textarea'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{f.label}}\r\n            </label>\r\n            <textarea [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\" [placeholder]=\"f.placeHolder\"\r\n                      [rows]=\"5\" class=\"form-control\">\r\n          </textarea>\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type=='file'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{f.label}}\r\n            </label>\r\n            <input (change)=\"f.config['onFileChange'](formGroup,f.formControl,$event)\" [id]=\"f.formControl\" [name]=\"f.formControl\"\r\n                   [placeholder]=\"f.placeHolder\" accept=\"{{f.config['accept']}}\"\r\n                   class=\"form-control\"\r\n                   type=\"file\">\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type=='checkbox'\">\r\n            <div class=\"checkbox\">\r\n              <label>\r\n                <input [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\" type=\"checkbox\">\r\n                {{f.label}}\r\n              </label>\r\n            </div>\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type=='select'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{f.label}}\r\n            </label>\r\n            <select [formControlName]=\"f.formControl\" [id]=\"f.formControl\" class=\"form-control\">\r\n              <option *ngFor=\"let option of f.data\" [value]=\"option['id']\">{{option['name']}}</option>\r\n            </select>\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type=='html'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{f.label}}\r\n            </label>\r\n            <ckeditor [config]=\"f.config\" [formControlName]=\"f.formControl\"\r\n                      [id]=\"f.formControl\" debounce=\"500\">\r\n            </ckeditor>\r\n          </ng-template>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <button (click)=\"createWithImage()\" [disabled]=\"formGroup.invalid\" class=\"btn btn-primary\" type=\"button\">Thêm mới</button>\r\n  <button (click)=\"dismiss()\" class=\"btn btn-default\" type=\"button\">Hủy bỏ</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/product-image/product-image-create/product-image-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductImageCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_crud__ = __webpack_require__("./src/app/core/crud/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_common__ = __webpack_require__("./src/app/core/common/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__product_image_service__ = __webpack_require__("./src/app/modules/product-image/product-image.service.ts");
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






var ProductImageCreateComponent = /** @class */ (function (_super) {
    __extends(ProductImageCreateComponent, _super);
    function ProductImageCreateComponent(service, modal, builder) {
        return _super.call(this, service, modal, builder) || this;
    }
    ProductImageCreateComponent.prototype.onInit = function () {
    };
    ProductImageCreateComponent.prototype.onDestroy = function () {
    };
    ProductImageCreateComponent.prototype.buildForm = function () {
        return this.formBuilder.group({
            product_id: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null),
            image: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
        });
    };
    ProductImageCreateComponent.prototype.initFieldForm = function () {
        return [
            __WEBPACK_IMPORTED_MODULE_4__core_common__["b" /* FieldForm */].createFileInput('Ảnh', 'image', 'Chọn ảnh', this.onFileUploadChange, 'image/*'),
        ];
    };
    ProductImageCreateComponent.prototype.loaded = function () {
        this.formGroup.controls['product_id'].setValue(this.model.product_id);
    };
    ProductImageCreateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-product-image-create',
            template: __webpack_require__("./src/app/modules/product-image/product-image-create/product-image-create.component.html"),
            styles: [__webpack_require__("./src/app/modules/product-image/product-image-create/product-image-create.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_5__product_image_service__["a" /* ProductImageService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__product_image_service__["a" /* ProductImageService */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__["a" /* BsModalRef */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]])
    ], ProductImageCreateComponent);
    return ProductImageCreateComponent;
}(__WEBPACK_IMPORTED_MODULE_1__core_crud__["d" /* AbstractModalComponent */]));



/***/ }),

/***/ "./src/app/modules/product-image/product-image-list/product-image-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/product-image/product-image-list/product-image-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header bg-primary\">\r\n  <h4 class=\"modal-title pull-left\">Album ảnh sản phẩm</h4>\r\n  <button (click)=\"dismiss()\" aria-label=\"Close\" class=\"close pull-right\" type=\"button\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12 margin-bottom\">\r\n      <button (click)=\"createImage()\" class=\"btn btn-primary pull-right\" type=\"button\">Thêm ảnh</button>\r\n    </div>\r\n    <div class=\"col-xs-12\">\r\n      <table class=\"table table-bordered table-hover\">\r\n        <thead>\r\n        <tr>\r\n          <th style=\"width: 10%;\">#</th>\r\n          <th>Ảnh</th>\r\n          <th style=\"width: 20%;\">Trạng thái</th>\r\n          <th style=\"width: 20%;\">Thao tác</th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n        <tr *ngFor=\"let item of list;let i = index\" class=\"odd\">\r\n          <td class=\"text-center\">{{i + 1}}</td>\r\n          <td class=\"text-center\">\r\n            <img [src]=\"item.image\" height=\"150px\">\r\n          </td>\r\n          <td class=\"text-center\">\r\n            <ui-switch (change)=\"onStatusChange(item,i,$event)\" *ngIf=\"item.status == 0\"></ui-switch>\r\n            <ui-switch (change)=\"onStatusChange(item,i,$event)\" *ngIf=\"item.status == 1\"\r\n                       [checked]=\"item.status\"></ui-switch>\r\n          </td>\r\n          <td class=\"text-center\">\r\n            <button (confirm)=\"upOrder(item ,i)\" cancelText=\"No <i class='fa fa-remove'></i>\" class=\"btn btn-default btn-sm\" confirmText=\"Yes <i class='fa fa-check'></i>\"\r\n                    mwlConfirmationPopover placement=\"top\" popoverMessage=\"Bạn thực sự muốn tăng thứ tự?\"\r\n                    popoverTitle=\"Thay đổi thứ tự\" type=\"button\" style=\"width: 30px; height: 30px; padding: 0;\">\r\n              <i class=\"fa fa-arrow-up\"></i>\r\n            </button>\r\n            <button (confirm)=\"downOrder(item,i)\" cancelText=\"No <i class='fa fa-remove'></i>\" class=\"btn btn-default btn-sm\" confirmText=\"Yes <i class='fa fa-check'></i>\"\r\n                    mwlConfirmationPopover placement=\"top\" popoverMessage=\"Bạn thực sự muốn giảm thứ tự?\"\r\n                    popoverTitle=\"Thay đổi thứ tự\" type=\"button\" style=\"width: 30px; height: 30px; padding: 0;\">\r\n              <i class=\"fa fa-arrow-down\"></i>\r\n            </button>\r\n            <button (confirm)=\"remove(item,i)\" cancelText=\"No <i class='fa fa-remove'></i>\" class=\"btn btn-danger btn-sm\" confirmText=\"Yes <i class='fa fa-check'></i>\"\r\n                    mwlConfirmationPopover placement=\"top\" popoverMessage=\"Bạn thực sự muốn xóa?\"\r\n                    popoverTitle=\"Xóa\" type=\"button\" style=\"width: 30px; height: 30px; padding: 0;\">\r\n              <i class=\"fa fa-remove\"></i>\r\n            </button>\r\n          </td>\r\n        </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"panel-footer\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-6\">\r\n      <pagination (numPages)=\"pagination.numPages = $event\" (pageChanged)=\"pageChanged($event)\"\r\n                  [(ngModel)]=\"pagination.currentPage\" [boundaryLinks]=\"true\"\r\n                  [itemsPerPage]=\"pagination.itemsPerPage\" [maxSize]=\"pagination.maxSize\" [totalItems]=\"pagination.totalItems\"\r\n                  class=\"pagination-sm\"></pagination>\r\n    </div>\r\n    <div class=\"col-xs-6\">\r\n      <div class=\"box-go-to\">\r\n        <input [(ngModel)]=\"nextPage\" class=\"col-xs-2\" type=\"number\">\r\n        <span class=\"col-xs-1\">/</span>\r\n        <input [(ngModel)]=\"pagination.numPages\" class=\"col-xs-2\" disabled type=\"text\">\r\n        <div class=\"col-xs-4\">\r\n          <button (click)=\"goToPageNumber()\">Đến</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <button (click)=\"dismiss()\" class=\"btn btn-default\" type=\"button\">Đóng</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/product-image/product-image-list/product-image-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductImageListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_crud__ = __webpack_require__("./src/app/core/crud/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_common__ = __webpack_require__("./src/app/core/common/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__product_image_service__ = __webpack_require__("./src/app/modules/product-image/product-image.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__product_image_meta__ = __webpack_require__("./src/app/modules/product-image/product-image.meta.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__product_image_create_product_image_create_component__ = __webpack_require__("./src/app/modules/product-image/product-image-create/product-image-create.component.ts");
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








var ProductImageListComponent = /** @class */ (function (_super) {
    __extends(ProductImageListComponent, _super);
    function ProductImageListComponent(service, modalRef, modal, builder) {
        return _super.call(this, service, modalRef, modal, builder) || this;
    }
    ProductImageListComponent.prototype.onInit = function () {
    };
    ProductImageListComponent.prototype.onDestroy = function () {
    };
    ProductImageListComponent.prototype.getTitle = function () {
        return 'Quản lý ảnh sản phẩm';
    };
    ProductImageListComponent.prototype.getCreateModalComponent = function () {
        return __WEBPACK_IMPORTED_MODULE_7__product_image_create_product_image_create_component__["a" /* ProductImageCreateComponent */];
    };
    ProductImageListComponent.prototype.getEditModalComponent = function () {
        return null;
    };
    ProductImageListComponent.prototype.getCreateModalComponentOptions = function () {
        return { 'class': 'modal-lg', ignoreBackdropClick: true };
    };
    ProductImageListComponent.prototype.getEditModalComponentOptions = function () {
        return null;
    };
    ProductImageListComponent.prototype.buildSearchForm = function () {
        return this.formBuilder.group({});
    };
    ProductImageListComponent.prototype.initNewModel = function () {
        var model = new __WEBPACK_IMPORTED_MODULE_6__product_image_meta__["a" /* ProductImageMeta */]();
        model.product_id = this.relatedModel.id;
        return model;
    };
    ProductImageListComponent.prototype.loaded = function () {
    };
    ProductImageListComponent.prototype.load = function () {
        var _this = this;
        var param = {
            product_id: this.relatedModel.id,
            limit: this.pagination.itemsPerPage,
            page: this.pagination.currentPage,
        };
        this.service.loadByPage(param).subscribe(function (res) {
            _this.nextPage = _this.pagination.currentPage;
            _this.list = res.data;
            _this.pagination.set(res);
        }, function () {
            _this.list = [];
            _this.pagination = new __WEBPACK_IMPORTED_MODULE_4__core_common__["a" /* AppPagination */]();
            _this.nextPage = _this.pagination.currentPage;
        });
    };
    ProductImageListComponent.prototype.onStatusChange = function (item, index, enable) {
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
            _this.list[index].status = res.status;
            _this.service.toastSuccessfully(titleMsg);
        }, function () { return _this.service.toastFailed(titleMsg); });
        this.load();
    };
    ProductImageListComponent.prototype.upOrder = function (item) {
        var _this = this;
        this.service.up(item.id).subscribe(function (res) {
            _this.service.toastSuccessfully('Tăng thứ tự');
            _this.load();
        }, function () { return _this.service.toastFailed('Tăng thứ tự'); });
    };
    ProductImageListComponent.prototype.downOrder = function (item) {
        var _this = this;
        this.service.down(item.id).subscribe(function (res) {
            _this.service.toastSuccessfully('Giảm thứ tự');
            _this.load();
        }, function () { return _this.service.toastFailed('Giảm thứ tự'); });
    };
    ProductImageListComponent.prototype.createImage = function () {
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
    ProductImageListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-product-image-list',
            template: __webpack_require__("./src/app/modules/product-image/product-image-list/product-image-list.component.html"),
            styles: [__webpack_require__("./src/app/modules/product-image/product-image-list/product-image-list.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_5__product_image_service__["a" /* ProductImageService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__product_image_service__["a" /* ProductImageService */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__["a" /* BsModalRef */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__["b" /* BsModalService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]])
    ], ProductImageListComponent);
    return ProductImageListComponent;
}(__WEBPACK_IMPORTED_MODULE_1__core_crud__["b" /* AbstractCRUDModalComponent */]));



/***/ }),

/***/ "./src/app/modules/product-image/product-image.meta.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductImageMeta; });
var ProductImageMeta = /** @class */ (function () {
    function ProductImageMeta() {
    }
    return ProductImageMeta;
}());



/***/ }),

/***/ "./src/app/modules/product-image/product-image.modal.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductImageModalModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_confirmation_popover__ = __webpack_require__("./node_modules/angular-confirmation-popover/fesm5/angular-confirmation-popover.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_multiselect_dropdown__ = __webpack_require__("./node_modules/angular2-multiselect-dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_ckeditor__ = __webpack_require__("./node_modules/ng2-ckeditor/lib/ng2-ckeditor.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_ckeditor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_ckeditor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__product_image_create_product_image_create_component__ = __webpack_require__("./src/app/modules/product-image/product-image-create/product-image-create.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ProductImageModalModule = /** @class */ (function () {
    function ProductImageModalModule() {
    }
    ProductImageModalModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__["e" /* PaginationModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__["f" /* PopoverModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4_angular_confirmation_popover__["a" /* ConfirmationPopoverModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__["d" /* ModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5_angular2_multiselect_dropdown__["a" /* AngularMultiSelectModule */],
                __WEBPACK_IMPORTED_MODULE_6_ng2_ckeditor__["CKEditorModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__product_image_create_product_image_create_component__["a" /* ProductImageCreateComponent */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__product_image_create_product_image_create_component__["a" /* ProductImageCreateComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_7__product_image_create_product_image_create_component__["a" /* ProductImageCreateComponent */]
            ]
        })
    ], ProductImageModalModule);
    return ProductImageModalModule;
}());



/***/ }),

/***/ "./src/app/modules/product-image/product-image.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductImageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_confirmation_popover__ = __webpack_require__("./node_modules/angular-confirmation-popover/fesm5/angular-confirmation-popover.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_toggle_switch__ = __webpack_require__("./node_modules/ngx-toggle-switch/ui-switch.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_multiselect_dropdown__ = __webpack_require__("./node_modules/angular2-multiselect-dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_ckeditor__ = __webpack_require__("./node_modules/ng2-ckeditor/lib/ng2-ckeditor.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_ckeditor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_ckeditor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__product_image_modal_module__ = __webpack_require__("./src/app/modules/product-image/product-image.modal.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__product_image_list_product_image_list_component__ = __webpack_require__("./src/app/modules/product-image/product-image-list/product-image-list.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var ProductImageModule = /** @class */ (function () {
    function ProductImageModule() {
    }
    ProductImageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__["e" /* PaginationModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__["f" /* PopoverModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__["d" /* ModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4_angular_confirmation_popover__["a" /* ConfirmationPopoverModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5_ngx_toggle_switch__["a" /* UiSwitchModule */],
                __WEBPACK_IMPORTED_MODULE_6_angular2_multiselect_dropdown__["a" /* AngularMultiSelectModule */],
                __WEBPACK_IMPORTED_MODULE_7_ng2_ckeditor__["CKEditorModule"],
                __WEBPACK_IMPORTED_MODULE_8__product_image_modal_module__["a" /* ProductImageModalModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_9__product_image_list_product_image_list_component__["a" /* ProductImageListComponent */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_9__product_image_list_product_image_list_component__["a" /* ProductImageListComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_9__product_image_list_product_image_list_component__["a" /* ProductImageListComponent */]]
        })
    ], ProductImageModule);
    return ProductImageModule;
}());



/***/ }),

/***/ "./src/app/modules/product-image/product-image.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductImageService; });
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





var ProductImageService = /** @class */ (function (_super) {
    __extends(ProductImageService, _super);
    function ProductImageService(http, toaster, title) {
        return _super.call(this, http, title, toaster, 'ảnh sản phẩm', 'product_images') || this;
    }
    ProductImageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["HttpClient"], __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__["b" /* ToasterService */], __WEBPACK_IMPORTED_MODULE_4__core_services__["d" /* TitleService */]])
    ], ProductImageService);
    return ProductImageService;
}(__WEBPACK_IMPORTED_MODULE_2__core_crud__["c" /* AbstractCRUDService */]));



/***/ }),

/***/ "./src/app/modules/product-related/product-related-create/product-related-create.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/product-related/product-related-create/product-related-create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header bg-primary\">\r\n  <h4 class=\"modal-title pull-left\">Thêm mới sản phẩm liên quan</h4>\r\n  <button (click)=\"dismiss()\" aria-label=\"Close\" class=\"close pull-right\" type=\"button\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12 margin-bottom\">\r\n      <form (ngSubmit)=\"load()\" [formGroup]=\"formGroup\" novalidate>\r\n        <div *ngFor=\"let f of fields\" class=\"form-group col-md-6\">\r\n          <ng-template [ngIf]=\"f.type=='input'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{f.label}} <span *ngIf=\"f.typeof == 'number'\" style=\"font-weight: normal\">\r\n                ( {{formGroup.controls[f.formControl].value|number:'1.0-0'}} )\r\n              </span>\r\n            </label>\r\n            <input [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\"\r\n              [placeholder]=\"f.placeHolder\" [type]=\"f.typeof\" class=\"form-control\">\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type=='select'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{f.label}}\r\n            </label>\r\n            <select [formControlName]=\"f.formControl\" [id]=\"f.formControl\" class=\"form-control\">\r\n              <option *ngFor=\"let option of f.data\" [value]=\"option['id']\">{{option['name']}}</option>\r\n            </select>\r\n          </ng-template>\r\n        </div>\r\n        <div class=\"col-xs-12\">\r\n          <button [disabled]=\"!formGroup.valid\" class=\"btn btn-default\" type=\"submit\">Tìm kiếm</button>\r\n          <button (click)=\"removeFilter()\" class=\"btn btn-default\">Xóa lọc</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <table class=\"table table-bordered table-hover\">\r\n      <thead>\r\n        <tr>\r\n          <th style=\"width: 10%;\">#</th>\r\n          <th style=\"width: 20%;\">Ảnh</th>\r\n          <th style=\"width: 30%;\">Tên sản phẩm</th>\r\n          <th style=\"width: 20%;\">Danh mục</th>\r\n          <th style=\"width: 20%;\">Thao tác</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let item of list;let i = index\" class=\"odd\">\r\n          <td class=\"text-center\">{{i + 1}}</td>\r\n          <td class=\"text-center\">\r\n            <img [src]=\"item.image\" height=\"70px\">\r\n          </td>\r\n          <td>\r\n            {{item.name}}\r\n          </td>\r\n          <td>\r\n            {{item.category.name}}\r\n          </td>\r\n          <td class=\"text-center\">\r\n            <button (click)=\"addRelated(item)\" class=\"btn btn-success\" type=\"button\">Thêm</button>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <button (click)=\"dismiss()\" class=\"btn btn-default\" type=\"button\">Hủy bỏ</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/product-related/product-related-create/product-related-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductRelatedCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_crud__ = __webpack_require__("./src/app/core/crud/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_common__ = __webpack_require__("./src/app/core/common/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__product_related_service__ = __webpack_require__("./src/app/modules/product-related/product-related.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core__ = __webpack_require__("./src/app/core/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__product_category_product_category_service__ = __webpack_require__("./src/app/modules/product-category/product-category.service.ts");
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








var ProductRelatedCreateComponent = /** @class */ (function (_super) {
    __extends(ProductRelatedCreateComponent, _super);
    function ProductRelatedCreateComponent(service, modal, builder, categoryService) {
        var _this = _super.call(this, service, modal, builder) || this;
        _this.categoryService = categoryService;
        _this.list = [];
        _this.formSearchProduct = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            search: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null),
            category_id: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null),
        });
        _this.loadAllCategory();
        return _this;
    }
    ProductRelatedCreateComponent.prototype.onInit = function () {
    };
    ProductRelatedCreateComponent.prototype.onDestroy = function () {
    };
    ProductRelatedCreateComponent.prototype.buildForm = function () {
        return this.formBuilder.group({
            search: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(255)),
            category_id: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null),
            product_id: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null),
            related_id: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null),
        });
    };
    ProductRelatedCreateComponent.prototype.initFieldForm = function () {
        return [
            __WEBPACK_IMPORTED_MODULE_4__core_common__["b" /* FieldForm */].createTextInput('Tìm kiếm theo tên', 'search', ''),
            __WEBPACK_IMPORTED_MODULE_4__core_common__["b" /* FieldForm */].createSelect('Tìm kiếm danh mục', 'category_id', 'Chọn một', []),
        ];
    };
    ProductRelatedCreateComponent.prototype.loadAllCategory = function () {
        var _this = this;
        return this.categoryService.loadAll().subscribe(function (value) {
            _this.fields[1].data = value;
        });
    };
    ProductRelatedCreateComponent.prototype.loaded = function () {
        this.load();
    };
    ProductRelatedCreateComponent.prototype.load = function () {
        var _this = this;
        this.formGroup.controls['product_id'].setValue(this.model.product_id);
        var param = __WEBPACK_IMPORTED_MODULE_6__core__["j" /* ObjectUtil */].combineValue({}, this.formGroup.value, true);
        this.service.loadProducts(param).subscribe(function (res) {
            _this.list = res;
        }, function () {
            _this.list = [];
        });
    };
    ProductRelatedCreateComponent.prototype.addRelated = function (item) {
        var _this = this;
        var data = __WEBPACK_IMPORTED_MODULE_6__core__["j" /* ObjectUtil */].combineValue(this.model, this.formGroup.value);
        data['product_id'] = this.model.product_id;
        data['related_id'] = item.id;
        this.service.addRelated(data).subscribe(function (res) {
            _this.service.toastSuccessfully('Thêm sản phẩm');
            _this.load();
        }, function () { return _this.service.toastFailed('Thêm sản phẩm'); });
    };
    ProductRelatedCreateComponent.prototype.removeFilter = function () {
        this.formGroup.reset();
        this.load();
    };
    ProductRelatedCreateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-product-related-create',
            template: __webpack_require__("./src/app/modules/product-related/product-related-create/product-related-create.component.html"),
            styles: [__webpack_require__("./src/app/modules/product-related/product-related-create/product-related-create.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_5__product_related_service__["a" /* ProductRelatedService */], __WEBPACK_IMPORTED_MODULE_7__product_category_product_category_service__["a" /* ProductCategoryService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__product_related_service__["a" /* ProductRelatedService */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__["a" /* BsModalRef */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_7__product_category_product_category_service__["a" /* ProductCategoryService */]])
    ], ProductRelatedCreateComponent);
    return ProductRelatedCreateComponent;
}(__WEBPACK_IMPORTED_MODULE_1__core_crud__["d" /* AbstractModalComponent */]));



/***/ }),

/***/ "./src/app/modules/product-related/product-related-list/product-related-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/product-related/product-related-list/product-related-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header bg-primary\">\r\n  <h4 class=\"modal-title pull-left\">Sản phẩm liên quan</h4>\r\n  <button (click)=\"dismiss()\" aria-label=\"Close\" class=\"close pull-right\" type=\"button\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n      <form (ngSubmit)=\"load()\" [formGroup]=\"searchForm\">\r\n        <div *ngFor=\"let f of searchControls\" class=\"form-group col-md-6\">\r\n          <ng-template [ngIf]=\"f.type == 'input'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{ f.label }}\r\n            </label>\r\n            <input [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\" [placeholder]=\"f.placeHolder\"\r\n                   [type]=\"f.typeof\" class=\"form-control\"/>\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type == 'select'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{ f.label }}\r\n            </label>\r\n            <select [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\"\r\n                    class=\"form-control\">\r\n              <option *ngFor=\"let option of f.data\" [value]=\"option['id']\">\r\n                {{ option[\"name\"] }}\r\n              </option>\r\n            </select>\r\n          </ng-template>\r\n        </div>\r\n        <div class=\"col-md-12\">\r\n          <button class=\"btn btn-default\" type=\"submit\">Tìm kiếm</button>\r\n          <button (click)=\"removeFilter()\" class=\"btn btn-default\" type=\"button\">Xóa lọc</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n    <div class=\"col-xs-12 margin-bottom\">\r\n      <button (click)=\"createRelated()\" class=\"btn btn-primary pull-right\" type=\"button\">\r\n        Thêm mới\r\n      </button>\r\n    </div>\r\n    <div class=\"col-xs-12\">\r\n      <table class=\"table table-bordered table-hover\">\r\n        <thead>\r\n        <tr>\r\n          <th style=\"width: 10%;\">#</th>\r\n          <th style=\"width: 20%;\">Ảnh</th>\r\n          <th style=\"width: 50%;\">Tên sản phẩm</th>\r\n          <th style=\"width: 20%;\">Thao tác</th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n        <tr *ngFor=\"let item of list;let i = index\" class=\"odd\">\r\n          <td class=\"text-center\">{{i + 1}}</td>\r\n          <td class=\"text-center\">\r\n            <img [src]=\"item.product.image\" height=\"70px\">\r\n          </td>\r\n          <td>\r\n            {{item.product.name}}\r\n          </td>\r\n          <td class=\"text-center\">\r\n            <button (confirm)=\"upOrder(item ,i)\" cancelText=\"No <i class='fa fa-remove'></i>\" class=\"btn btn-default btn-sm\" confirmText=\"Yes <i class='fa fa-check'></i>\"\r\n                    mwlConfirmationPopover placement=\"top\" popoverMessage=\"Bạn thực sự muốn tăng thứ tự?\"\r\n                    popoverTitle=\"Thay đổi thứ tự\" type=\"button\" style=\"width: 30px; height: 30px; padding: 0;\">\r\n              <i class=\"fa fa-arrow-up\"></i>\r\n            </button>\r\n            <button (confirm)=\"downOrder(item,i)\" cancelText=\"No <i class='fa fa-remove'></i>\" class=\"btn btn-default btn-sm\" confirmText=\"Yes <i class='fa fa-check'></i>\"\r\n                    mwlConfirmationPopover placement=\"top\" popoverMessage=\"Bạn thực sự muốn giảm thứ tự?\"\r\n                    popoverTitle=\"Thay đổi thứ tự\" type=\"button\" style=\"width: 30px; height: 30px; padding: 0;\">\r\n              <i class=\"fa fa-arrow-down\"></i>\r\n            </button>\r\n            <button (confirm)=\"remove(item,i)\" cancelText=\"No <i class='fa fa-remove'></i>\" class=\"btn btn-danger btn-sm\" confirmText=\"Yes <i class='fa fa-check'></i>\"\r\n                    mwlConfirmationPopover placement=\"top\" popoverMessage=\"Bạn thực sự muốn xóa?\"\r\n                    popoverTitle=\"Xóa\" type=\"button\" style=\"width: 30px; height: 30px; padding: 0;\">\r\n              <i class=\"fa fa-remove\"></i>\r\n            </button>\r\n          </td>\r\n        </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"panel-footer\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-6\">\r\n      <pagination (numPages)=\"pagination.numPages = $event\" (pageChanged)=\"pageChanged($event)\"\r\n                  [(ngModel)]=\"pagination.currentPage\" [boundaryLinks]=\"true\"\r\n                  [itemsPerPage]=\"pagination.itemsPerPage\" [maxSize]=\"pagination.maxSize\" [totalItems]=\"pagination.totalItems\"\r\n                  class=\"pagination-sm\"></pagination>\r\n    </div>\r\n    <div class=\"col-xs-6\">\r\n      <div class=\"box-go-to\">\r\n        <input [(ngModel)]=\"nextPage\" class=\"col-xs-2\" type=\"number\">\r\n        <span class=\"col-xs-1\">/</span>\r\n        <input [(ngModel)]=\"pagination.numPages\" class=\"col-xs-2\" disabled type=\"text\">\r\n        <div class=\"col-xs-4\">\r\n          <button (click)=\"goToPageNumber()\">Đến</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <button (click)=\"dismiss()\" class=\"btn btn-default\" type=\"button\">Đóng</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/product-related/product-related-list/product-related-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductRelatedListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_crud__ = __webpack_require__("./src/app/core/crud/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_common__ = __webpack_require__("./src/app/core/common/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__product_related_service__ = __webpack_require__("./src/app/modules/product-related/product-related.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__product_related_meta__ = __webpack_require__("./src/app/modules/product-related/product-related.meta.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__product_related_create_product_related_create_component__ = __webpack_require__("./src/app/modules/product-related/product-related-create/product-related-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__product_category_product_category_service__ = __webpack_require__("./src/app/modules/product-category/product-category.service.ts");
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










var ProductRelatedListComponent = /** @class */ (function (_super) {
    __extends(ProductRelatedListComponent, _super);
    function ProductRelatedListComponent(service, modalRef, modal, builder, categoryService) {
        var _this = _super.call(this, service, modalRef, modal, builder) || this;
        _this.categoryService = categoryService;
        _this.loadAllCategory();
        return _this;
    }
    ProductRelatedListComponent.prototype.onInit = function () {
    };
    ProductRelatedListComponent.prototype.onDestroy = function () {
    };
    ProductRelatedListComponent.prototype.getTitle = function () {
        return 'Quản lý sản phẩm liên quan';
    };
    ProductRelatedListComponent.prototype.getCreateModalComponent = function () {
        return __WEBPACK_IMPORTED_MODULE_7__product_related_create_product_related_create_component__["a" /* ProductRelatedCreateComponent */];
    };
    ProductRelatedListComponent.prototype.getEditModalComponent = function () {
        return null;
    };
    ProductRelatedListComponent.prototype.getCreateModalComponentOptions = function () {
        return { 'class': 'modal-lg', ignoreBackdropClick: true };
    };
    ProductRelatedListComponent.prototype.getEditModalComponentOptions = function () {
        return null;
    };
    ProductRelatedListComponent.prototype.buildSearchForm = function () {
        return this.formBuilder.group({
            search: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null),
            category_id: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null)
        });
    };
    ProductRelatedListComponent.prototype.initSearchForm = function () {
        return [
            __WEBPACK_IMPORTED_MODULE_4__core_common__["b" /* FieldForm */].createTextInput('Tìm kiếm theo tên', 'search', ''),
            __WEBPACK_IMPORTED_MODULE_4__core_common__["b" /* FieldForm */].createSelect('Tìm kiếm danh mục', 'category_id', 'Chọn một', []),
        ];
    };
    ProductRelatedListComponent.prototype.initNewModel = function () {
        var model = new __WEBPACK_IMPORTED_MODULE_6__product_related_meta__["a" /* ProductRelatedMeta */]();
        model.product_id = this.relatedModel.id;
        return model;
    };
    ProductRelatedListComponent.prototype.loadAllCategory = function () {
        var _this = this;
        return this.categoryService.loadAll().subscribe(function (value) {
            _this.searchControls[1].data = value;
        });
    };
    ProductRelatedListComponent.prototype.loaded = function () {
    };
    ProductRelatedListComponent.prototype.load = function () {
        var _this = this;
        var param = __WEBPACK_IMPORTED_MODULE_9__core__["j" /* ObjectUtil */].combineValue({}, this.searchForm.value, true);
        param['product_id'] = this.relatedModel.id,
            param['limit'] = this.pagination.itemsPerPage,
            param['page'] = this.pagination.currentPage,
            this.service.loadByPage(param).subscribe(function (res) {
                _this.nextPage = _this.pagination.currentPage;
                _this.list = res.data;
                _this.pagination.set(res);
            }, function () {
                _this.list = [];
                _this.pagination = new __WEBPACK_IMPORTED_MODULE_4__core_common__["a" /* AppPagination */]();
                _this.nextPage = _this.pagination.currentPage;
            });
    };
    ProductRelatedListComponent.prototype.upOrder = function (item) {
        var _this = this;
        this.service.up(item.id).subscribe(function (res) {
            _this.service.toastSuccessfully('Tăng thứ tự');
            _this.load();
        }, function () { return _this.service.toastFailed('Tăng thứ tự'); });
    };
    ProductRelatedListComponent.prototype.downOrder = function (item) {
        var _this = this;
        this.service.down(item.id).subscribe(function (res) {
            _this.service.toastSuccessfully('Giảm thứ tự');
            _this.load();
        }, function () { return _this.service.toastFailed('Giảm thứ tự'); });
    };
    ProductRelatedListComponent.prototype.createRelated = function () {
        var _this = this;
        var modalRef = this.modalService.show(this.getCreateModalComponent(), this.getCreateModalComponentOptions());
        var modal = modalRef.content;
        modal.setModel(this.initNewModel());
        var sub = modal.onHidden.subscribe(function (result) {
            _this.load();
            sub.unsubscribe();
        });
    };
    ProductRelatedListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-product-related-list',
            template: __webpack_require__("./src/app/modules/product-related/product-related-list/product-related-list.component.html"),
            styles: [__webpack_require__("./src/app/modules/product-related/product-related-list/product-related-list.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_5__product_related_service__["a" /* ProductRelatedService */], __WEBPACK_IMPORTED_MODULE_8__product_category_product_category_service__["a" /* ProductCategoryService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__product_related_service__["a" /* ProductRelatedService */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__["a" /* BsModalRef */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__["b" /* BsModalService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_8__product_category_product_category_service__["a" /* ProductCategoryService */]])
    ], ProductRelatedListComponent);
    return ProductRelatedListComponent;
}(__WEBPACK_IMPORTED_MODULE_1__core_crud__["b" /* AbstractCRUDModalComponent */]));



/***/ }),

/***/ "./src/app/modules/product-related/product-related.meta.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductRelatedMeta; });
var ProductRelatedMeta = /** @class */ (function () {
    function ProductRelatedMeta() {
    }
    return ProductRelatedMeta;
}());



/***/ }),

/***/ "./src/app/modules/product-related/product-related.modal.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductRelatedModalModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_confirmation_popover__ = __webpack_require__("./node_modules/angular-confirmation-popover/fesm5/angular-confirmation-popover.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_multiselect_dropdown__ = __webpack_require__("./node_modules/angular2-multiselect-dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_ckeditor__ = __webpack_require__("./node_modules/ng2-ckeditor/lib/ng2-ckeditor.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_ckeditor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_ckeditor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__product_related_create_product_related_create_component__ = __webpack_require__("./src/app/modules/product-related/product-related-create/product-related-create.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ProductRelatedModalModule = /** @class */ (function () {
    function ProductRelatedModalModule() {
    }
    ProductRelatedModalModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__["e" /* PaginationModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__["f" /* PopoverModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4_angular_confirmation_popover__["a" /* ConfirmationPopoverModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__["d" /* ModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5_angular2_multiselect_dropdown__["a" /* AngularMultiSelectModule */],
                __WEBPACK_IMPORTED_MODULE_6_ng2_ckeditor__["CKEditorModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__product_related_create_product_related_create_component__["a" /* ProductRelatedCreateComponent */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__product_related_create_product_related_create_component__["a" /* ProductRelatedCreateComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_7__product_related_create_product_related_create_component__["a" /* ProductRelatedCreateComponent */]
            ]
        })
    ], ProductRelatedModalModule);
    return ProductRelatedModalModule;
}());



/***/ }),

/***/ "./src/app/modules/product-related/product-related.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductRelatedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_confirmation_popover__ = __webpack_require__("./node_modules/angular-confirmation-popover/fesm5/angular-confirmation-popover.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_toggle_switch__ = __webpack_require__("./node_modules/ngx-toggle-switch/ui-switch.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_multiselect_dropdown__ = __webpack_require__("./node_modules/angular2-multiselect-dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_ckeditor__ = __webpack_require__("./node_modules/ng2-ckeditor/lib/ng2-ckeditor.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_ckeditor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_ckeditor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__product_related_modal_module__ = __webpack_require__("./src/app/modules/product-related/product-related.modal.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__product_related_list_product_related_list_component__ = __webpack_require__("./src/app/modules/product-related/product-related-list/product-related-list.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var ProductRelatedModule = /** @class */ (function () {
    function ProductRelatedModule() {
    }
    ProductRelatedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__["e" /* PaginationModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__["f" /* PopoverModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__["d" /* ModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4_angular_confirmation_popover__["a" /* ConfirmationPopoverModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5_ngx_toggle_switch__["a" /* UiSwitchModule */],
                __WEBPACK_IMPORTED_MODULE_6_angular2_multiselect_dropdown__["a" /* AngularMultiSelectModule */],
                __WEBPACK_IMPORTED_MODULE_7_ng2_ckeditor__["CKEditorModule"],
                __WEBPACK_IMPORTED_MODULE_8__product_related_modal_module__["a" /* ProductRelatedModalModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_9__product_related_list_product_related_list_component__["a" /* ProductRelatedListComponent */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_9__product_related_list_product_related_list_component__["a" /* ProductRelatedListComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_9__product_related_list_product_related_list_component__["a" /* ProductRelatedListComponent */]]
        })
    ], ProductRelatedModule);
    return ProductRelatedModule;
}());



/***/ }),

/***/ "./src/app/modules/product-related/product-related.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductRelatedService; });
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






var ProductRelatedService = /** @class */ (function (_super) {
    __extends(ProductRelatedService, _super);
    function ProductRelatedService(http, toaster, title) {
        return _super.call(this, http, title, toaster, 'sản phẩm liên quan', 'related_products') || this;
    }
    ProductRelatedService.prototype.addRelated = function (data) {
        return this.http.post("" + this.urlRestAPI, data)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["catchError"])(this.handleErrorRequest.bind(this)), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["map"])(function (res) { return res['data']; }));
    };
    ProductRelatedService.prototype.loadProducts = function (params) {
        var parameters = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["HttpParams"]({
            fromObject: params
        });
        return this.toPipe(this.http.get(this.urlRestAPI + "/loadProduct", { params: parameters }));
    };
    ProductRelatedService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["HttpClient"], __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__["b" /* ToasterService */], __WEBPACK_IMPORTED_MODULE_4__core_services__["d" /* TitleService */]])
    ], ProductRelatedService);
    return ProductRelatedService;
}(__WEBPACK_IMPORTED_MODULE_2__core_crud__["c" /* AbstractCRUDService */]));



/***/ }),

/***/ "./src/app/modules/product-warehouse/product-warehouse-create/product-warehouse-create.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/product-warehouse/product-warehouse-create/product-warehouse-create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header bg-primary\">\r\n  <h4 class=\"modal-title pull-left\">Thêm mới kho hàng</h4>\r\n  <button (click)=\"dismiss()\" aria-label=\"Close\" class=\"close pull-right\" type=\"button\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n      <form [formGroup]=\"formGroup\" novalidate>\r\n        <div *ngFor=\"let f of fields\" [ngClass]=\"{'has-error':!formGroup.controls[f.formControl].valid}\"\r\n             class=\"form-group\">\r\n          <ng-template [ngIf]=\"f.type=='input'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{f.label}} <span\r\n              *ngIf=\"f.typeof == 'number'\" style=\"font-weight: normal\">\r\n              ( {{formGroup.controls[f.formControl].value|number:'1.0-0'}} )\r\n            </span>\r\n            </label>\r\n            <input [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\" [placeholder]=\"f.placeHolder\"\r\n                   [type]=\"f.typeof\" class=\"form-control\">\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type=='textarea'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{f.label}}\r\n            </label>\r\n            <textarea [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\" [placeholder]=\"f.placeHolder\"\r\n                      [rows]=\"5\" class=\"form-control\">\r\n          </textarea>\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type=='file'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{f.label}}\r\n            </label>\r\n            <input (change)=\"f.config['onFileChange'](formGroup,f.formControl,$event)\" [id]=\"f.formControl\" [name]=\"f.formControl\"\r\n                   [placeholder]=\"f.placeHolder\" accept=\"{{f.config['accept']}}\"\r\n                   class=\"form-control\"\r\n                   type=\"file\">\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type=='checkbox'\">\r\n            <div class=\"checkbox\">\r\n              <label>\r\n                <input [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\" type=\"checkbox\">\r\n                {{f.label}}\r\n              </label>\r\n            </div>\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type=='select'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{f.label}}\r\n            </label>\r\n            <select [formControlName]=\"f.formControl\" [id]=\"f.formControl\" class=\"form-control\">\r\n              <option *ngFor=\"let option of f.data\" [value]=\"option['id']\">{{option['name']}}</option>\r\n            </select>\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type=='select2'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{f.label}}\r\n            </label>\r\n            <div class=\"form-group\">\r\n              <angular2-multiselect [data]=\"f.data\" [formControlName]=\"f.formControl\"\r\n                                    [id]=\"f.formControl\" [settings]=\"f.config\" style=\"height: auto !important;\">\r\n              </angular2-multiselect>\r\n            </div>\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type=='html'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{f.label}}\r\n            </label>\r\n            <ckeditor [config]=\"f.config\" [formControlName]=\"f.formControl\"\r\n                      [id]=\"f.formControl\" debounce=\"500\">\r\n            </ckeditor>\r\n          </ng-template>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <button (click)=\"create()\" [disabled]=\"formGroup.invalid\" class=\"btn btn-primary\" type=\"button\">Thêm mới</button>\r\n  <button (click)=\"dismiss()\" class=\"btn btn-default\" type=\"button\">Hủy bỏ</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/product-warehouse/product-warehouse-create/product-warehouse-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductWarehouseCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_crud__ = __webpack_require__("./src/app/core/crud/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_common__ = __webpack_require__("./src/app/core/common/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__product_warehouse_service__ = __webpack_require__("./src/app/modules/product-warehouse/product-warehouse.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__product_size_product_size_service__ = __webpack_require__("./src/app/modules/product-size/product-size.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__product_color_product_color_service__ = __webpack_require__("./src/app/modules/product-color/product-color.service.ts");
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








var ProductWarehouseCreateComponent = /** @class */ (function (_super) {
    __extends(ProductWarehouseCreateComponent, _super);
    function ProductWarehouseCreateComponent(service, modal, builder, sizeService, colorService) {
        var _this = _super.call(this, service, modal, builder) || this;
        _this.sizeService = sizeService;
        _this.colorService = colorService;
        return _this;
    }
    ProductWarehouseCreateComponent.prototype.onInit = function () {
    };
    ProductWarehouseCreateComponent.prototype.onDestroy = function () {
    };
    ProductWarehouseCreateComponent.prototype.loadAllSizes = function () {
        return this.sizeService.loadByParams({ parent: 0 });
    };
    ProductWarehouseCreateComponent.prototype.loadAllColors = function () {
        return this.colorService.loadByParams({ parent: 0 });
    };
    ProductWarehouseCreateComponent.prototype.buildForm = function () {
        return this.formBuilder.group({
            product_id: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null),
            sizes: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(255), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern('[^ ].*$')]),
            colors: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(255), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern('[^ ].*$')]),
            sizeArr: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            colorArr: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
        });
    };
    ProductWarehouseCreateComponent.prototype.initFieldForm = function () {
        return [
            __WEBPACK_IMPORTED_MODULE_4__core_common__["b" /* FieldForm */].createMultiSelect2('Size', 'sizes', 'Chọn một', 'loadAllSizes'),
            __WEBPACK_IMPORTED_MODULE_4__core_common__["b" /* FieldForm */].createMultiSelect2('Color', 'colors', 'Chọn một', 'loadAllColors'),
        ];
    };
    ProductWarehouseCreateComponent.prototype.loaded = function () {
        this.formGroup.controls['product_id'].setValue(this.model.product_id);
    };
    ProductWarehouseCreateComponent.prototype.onFormChanged = function () {
        var _this = this;
        _super.prototype.onFormChanged.call(this);
        this.formGroup.controls['sizes'].valueChanges.subscribe(function (value) {
            if (value && value.length > 0) {
                _this.formGroup.controls['sizeArr'].setValue(value.map(function (v) { return v.id; }));
            }
            else {
                _this.formGroup.controls['sizeArr'].setValue(null);
            }
        });
        this.formGroup.controls['colors'].valueChanges.subscribe(function (value) {
            if (value && value.length > 0) {
                _this.formGroup.controls['colorArr'].setValue(value.map(function (v) { return v.id; }));
            }
            else {
                _this.formGroup.controls['colorArr'].setValue(null);
            }
        });
    };
    ProductWarehouseCreateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-product-warehouse-create',
            template: __webpack_require__("./src/app/modules/product-warehouse/product-warehouse-create/product-warehouse-create.component.html"),
            styles: [__webpack_require__("./src/app/modules/product-warehouse/product-warehouse-create/product-warehouse-create.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_5__product_warehouse_service__["a" /* ProductWarehouseService */], __WEBPACK_IMPORTED_MODULE_6__product_size_product_size_service__["a" /* ProductSizeService */], __WEBPACK_IMPORTED_MODULE_7__product_color_product_color_service__["a" /* ProductColorService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__product_warehouse_service__["a" /* ProductWarehouseService */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__["a" /* BsModalRef */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_6__product_size_product_size_service__["a" /* ProductSizeService */],
            __WEBPACK_IMPORTED_MODULE_7__product_color_product_color_service__["a" /* ProductColorService */]])
    ], ProductWarehouseCreateComponent);
    return ProductWarehouseCreateComponent;
}(__WEBPACK_IMPORTED_MODULE_1__core_crud__["d" /* AbstractModalComponent */]));



/***/ }),

/***/ "./src/app/modules/product-warehouse/product-warehouse-edit/product-warehouse-edit.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/product-warehouse/product-warehouse-edit/product-warehouse-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header bg-primary\">\r\n  <h4 class=\"modal-title pull-left\">Chỉnh sửa biến thể</h4>\r\n  <button (click)=\"dismiss()\" aria-label=\"Close\" class=\"close pull-right\" type=\"button\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n      <form [formGroup]=\"formGroup\" novalidate>\r\n        <div *ngFor=\"let f of fields\" [ngClass]=\"{'has-error':!formGroup.controls[f.formControl].valid}\"\r\n             class=\"form-group\">\r\n          <ng-template [ngIf]=\"f.type=='input'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{f.label}} <span\r\n              *ngIf=\"f.typeof == 'number'\" style=\"font-weight: normal\">\r\n              ( {{formGroup.controls[f.formControl].value|number:'1.0-0'}} )\r\n            </span>\r\n            </label>\r\n            <input [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\" [placeholder]=\"f.placeHolder\"\r\n                   [type]=\"f.typeof\" class=\"form-control\">\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type=='textarea'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{f.label}}\r\n            </label>\r\n            <textarea [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\" [placeholder]=\"f.placeHolder\"\r\n                      [rows]=\"5\" class=\"form-control\">\r\n          </textarea>\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type=='file'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{f.label}}\r\n            </label>\r\n            <input (change)=\"f.config['onFileChange'](formGroup,f.formControl,$event)\" [id]=\"f.formControl\" [name]=\"f.formControl\"\r\n                   [placeholder]=\"f.placeHolder\" accept=\"{{f.config['accept']}}\"\r\n                   class=\"form-control\"\r\n                   type=\"file\">\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type=='checkbox'\">\r\n            <div class=\"checkbox\">\r\n              <label>\r\n                <input [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\" type=\"checkbox\">\r\n                {{f.label}}\r\n              </label>\r\n            </div>\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type=='select'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{f.label}}\r\n            </label>\r\n            <select [formControlName]=\"f.formControl\" [id]=\"f.formControl\" class=\"form-control\">\r\n              <option *ngFor=\"let option of f.data\" [value]=\"option['id']\">{{option['name']}}</option>\r\n            </select>\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type=='select2'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{f.label}}\r\n            </label>\r\n            <div class=\"form-group\">\r\n              <div class=\"row \">\r\n                <angular2-multiselect [data]=\"f.data\" [formControlName]=\"f.formControl\"\r\n                                      [id]=\"f.formControl\" [settings]=\"f.config\">\r\n                </angular2-multiselect>\r\n              </div>\r\n            </div>\r\n\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type=='html'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{f.label}}\r\n            </label>\r\n            <ckeditor [config]=\"f.config\" [formControlName]=\"f.formControl\"\r\n                      [id]=\"f.formControl\" debounce=\"500\">\r\n            </ckeditor>\r\n          </ng-template>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <button (click)=\"edit()\" [disabled]=\"formGroup.invalid\" class=\"btn btn-primary\" type=\"button\">Chỉnh sửa</button>\r\n  <button (click)=\"dismiss()\" class=\"btn btn-default\" type=\"button\">Hủy bỏ</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/product-warehouse/product-warehouse-edit/product-warehouse-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductWarehouseEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_crud__ = __webpack_require__("./src/app/core/crud/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_common__ = __webpack_require__("./src/app/core/common/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__product_warehouse_service__ = __webpack_require__("./src/app/modules/product-warehouse/product-warehouse.service.ts");
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






var ProductWarehouseEditComponent = /** @class */ (function (_super) {
    __extends(ProductWarehouseEditComponent, _super);
    function ProductWarehouseEditComponent(service, modal, builder) {
        return _super.call(this, service, modal, builder) || this;
    }
    ProductWarehouseEditComponent.prototype.onInit = function () {
    };
    ProductWarehouseEditComponent.prototype.onDestroy = function () {
    };
    ProductWarehouseEditComponent.prototype.buildForm = function () {
        return this.formBuilder.group({
            weight: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].min(0)]),
            quantity: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].min(0), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(10), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern('^(?=.*[0-9]+)[0-9]*$')]),
        });
    };
    ProductWarehouseEditComponent.prototype.initFieldForm = function () {
        return [
            __WEBPACK_IMPORTED_MODULE_4__core_common__["b" /* FieldForm */].createTextInput('Khối lượng (kg)', 'weight', 'Nhập ký tự'),
            __WEBPACK_IMPORTED_MODULE_4__core_common__["b" /* FieldForm */].createTextInput('Số lượng', 'quantity', 'Nhập ký tự'),
        ];
    };
    ProductWarehouseEditComponent.prototype.loaded = function () {
    };
    ProductWarehouseEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-product-warehouse-edit',
            template: __webpack_require__("./src/app/modules/product-warehouse/product-warehouse-edit/product-warehouse-edit.component.html"),
            styles: [__webpack_require__("./src/app/modules/product-warehouse/product-warehouse-edit/product-warehouse-edit.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_5__product_warehouse_service__["a" /* ProductWarehouseService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__product_warehouse_service__["a" /* ProductWarehouseService */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__["a" /* BsModalRef */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]])
    ], ProductWarehouseEditComponent);
    return ProductWarehouseEditComponent;
}(__WEBPACK_IMPORTED_MODULE_1__core_crud__["d" /* AbstractModalComponent */]));



/***/ }),

/***/ "./src/app/modules/product-warehouse/product-warehouse-list/product-warehouse-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/product-warehouse/product-warehouse-list/product-warehouse-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header bg-primary\">\r\n  <h4 class=\"modal-title pull-left\">Danh sách kho hàng</h4>\r\n  <button (click)=\"dismiss()\" aria-label=\"Close\" class=\"close pull-right\" type=\"button\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12 margin-bottom\">\r\n      <button (click)=\"createWarehouse()\" class=\"btn btn-primary pull-right\" type=\"button\">Thêm mới</button>\r\n    </div>\r\n    <div class=\"col-xs-12\">\r\n      <table class=\"table table-bordered table-hover\">\r\n        <thead>\r\n          <tr>\r\n            <th style=\"width: 10%;\">#</th>\r\n            <th style=\"width: 20%;\">Mã</th>\r\n            <th style=\"width: 10%;\">Size</th>\r\n            <th style=\"width: 10%;\">Màu</th>\r\n            <th style=\"width: 10%;\">Cân nặng</th>\r\n            <th style=\"width: 10%;\">Số lượng</th>\r\n            <th style=\"width: 10%;\">Đã dùng</th>\r\n            <th style=\"width: 10%;\">Trạng thái</th>\r\n            <th style=\"width: 10%;\">Thao tác</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let item of list;let i = index\" class=\"odd\">\r\n            <td class=\"text-center\">{{i + 1}}</td>\r\n            <td>{{item.code}}</td>\r\n            <td>{{item.size.name}}</td>\r\n            <td>{{item.color.name}}</td>\r\n            <td class=\"text-center\">{{item.weight}}</td>\r\n            <td class=\"text-center\">{{item.quantity}}</td>\r\n            <td class=\"text-center\">{{item.use_quantity}}</td>\r\n            <td class=\"text-center\">\r\n              <ui-switch (change)=\"onStatusChange(item,i,$event)\" *ngIf=\"item.status == 0\"></ui-switch>\r\n              <ui-switch (change)=\"onStatusChange(item,i,$event)\" *ngIf=\"item.status == 1\"\r\n                [checked]=\"item.status\"></ui-switch>\r\n            </td>\r\n            <td class=\"text-center\">\r\n              <button (click)=\"editWarehouse(item)\" class=\"btn btn-default btn-sm\" type=\"button\"\r\n                style=\"width: 30px; height: 30px; padding: 0;\">\r\n                <i class=\"fa fa-pencil-square-o\"></i>\r\n              </button>\r\n              <button (confirm)=\"remove(item,i)\" cancelText=\"No <i class='fa fa-remove'></i>\"\r\n                class=\"btn btn-danger btn-sm\" confirmText=\"Yes <i class='fa fa-check'></i>\" mwlConfirmationPopover\r\n                placement=\"top\" popoverMessage=\"Bạn thực sự muốn xóa?\" popoverTitle=\"Xóa\" type=\"button\"\r\n                style=\"width: 30px; height: 30px; padding: 0;\">\r\n                <i class=\"fa fa-remove\"></i>\r\n              </button>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"panel-footer\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-6\">\r\n      <pagination (numPages)=\"pagination.numPages = $event\" (pageChanged)=\"pageChanged($event)\"\r\n        [(ngModel)]=\"pagination.currentPage\" [boundaryLinks]=\"true\" [itemsPerPage]=\"pagination.itemsPerPage\"\r\n        [maxSize]=\"pagination.maxSize\" [totalItems]=\"pagination.totalItems\" class=\"pagination-sm\"></pagination>\r\n    </div>\r\n    <div class=\"col-xs-6\">\r\n      <div class=\"box-go-to\">\r\n        <input [(ngModel)]=\"nextPage\" class=\"col-xs-2\" type=\"number\">\r\n        <span class=\"col-xs-1\">/</span>\r\n        <input [(ngModel)]=\"pagination.numPages\" class=\"col-xs-2\" disabled type=\"text\">\r\n        <div class=\"col-xs-4\">\r\n          <button (click)=\"goToPageNumber()\">Đến</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <button (click)=\"dismiss()\" class=\"btn btn-default\" type=\"button\">Đóng</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/product-warehouse/product-warehouse-list/product-warehouse-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductWarehouseListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_crud__ = __webpack_require__("./src/app/core/crud/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_common__ = __webpack_require__("./src/app/core/common/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__product_warehouse_meta__ = __webpack_require__("./src/app/modules/product-warehouse/product-warehouse.meta.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__product_warehouse_create_product_warehouse_create_component__ = __webpack_require__("./src/app/modules/product-warehouse/product-warehouse-create/product-warehouse-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_utils__ = __webpack_require__("./src/app/core/utils/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__product_warehouse_service__ = __webpack_require__("./src/app/modules/product-warehouse/product-warehouse.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__product_warehouse_edit_product_warehouse_edit_component__ = __webpack_require__("./src/app/modules/product-warehouse/product-warehouse-edit/product-warehouse-edit.component.ts");
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










var ProductWarehouseListComponent = /** @class */ (function (_super) {
    __extends(ProductWarehouseListComponent, _super);
    function ProductWarehouseListComponent(service, modalRef, modal, builder) {
        return _super.call(this, service, modalRef, modal, builder) || this;
    }
    ProductWarehouseListComponent.prototype.onInit = function () {
    };
    ProductWarehouseListComponent.prototype.onDestroy = function () {
    };
    ProductWarehouseListComponent.prototype.getTitle = function () {
        return 'Quản lý kho sản phẩm';
    };
    ProductWarehouseListComponent.prototype.getCreateModalComponent = function () {
        return __WEBPACK_IMPORTED_MODULE_6__product_warehouse_create_product_warehouse_create_component__["a" /* ProductWarehouseCreateComponent */];
    };
    ProductWarehouseListComponent.prototype.getEditModalComponent = function () {
        return __WEBPACK_IMPORTED_MODULE_9__product_warehouse_edit_product_warehouse_edit_component__["a" /* ProductWarehouseEditComponent */];
    };
    ProductWarehouseListComponent.prototype.getCreateModalComponentOptions = function () {
        return { 'class': 'modal-lg', ignoreBackdropClick: true };
    };
    ProductWarehouseListComponent.prototype.getEditModalComponentOptions = function () {
        return { 'class': 'modal-lg', ignoreBackdropClick: true };
    };
    ProductWarehouseListComponent.prototype.buildSearchForm = function () {
        return this.formBuilder.group({});
    };
    ProductWarehouseListComponent.prototype.initNewModel = function () {
        var model = new __WEBPACK_IMPORTED_MODULE_5__product_warehouse_meta__["a" /* ProductWarehouseMeta */]();
        model.product_id = this.relatedModel.id;
        return model;
    };
    ProductWarehouseListComponent.prototype.loaded = function () {
    };
    ProductWarehouseListComponent.prototype.load = function () {
        var _this = this;
        var param = {
            product_id: this.relatedModel.id,
            limit: this.pagination.itemsPerPage,
            page: this.pagination.currentPage,
        };
        this.service.loadByPage(param).subscribe(function (res) {
            _this.nextPage = _this.pagination.currentPage;
            _this.list = res.data;
            _this.pagination.set(res);
        }, function () {
            _this.list = [];
            _this.pagination = new __WEBPACK_IMPORTED_MODULE_4__core_common__["a" /* AppPagination */]();
            _this.nextPage = _this.pagination.currentPage;
        });
    };
    ProductWarehouseListComponent.prototype.onStatusChange = function (item, index, enable) {
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
    ProductWarehouseListComponent.prototype.createWarehouse = function () {
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
    ProductWarehouseListComponent.prototype.editWarehouse = function (item) {
        var _this = this;
        var modalOptions = Object.assign(this.defaultModalOptions(), this.getEditModalComponentOptions());
        var config = __WEBPACK_IMPORTED_MODULE_7__core_utils__["c" /* ObjectUtil */].combineValue({ ignoreBackdropClick: true }, modalOptions);
        var modalRef = this.modalService.show(this.getEditModalComponent(), config);
        var modal = modalRef.content;
        modal.setModel(item);
        modal.onHidden.subscribe(function (result) {
            if (result.success) {
                _this.load();
            }
        });
    };
    ProductWarehouseListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-product-warehouse-list',
            template: __webpack_require__("./src/app/modules/product-warehouse/product-warehouse-list/product-warehouse-list.component.html"),
            styles: [__webpack_require__("./src/app/modules/product-warehouse/product-warehouse-list/product-warehouse-list.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_8__product_warehouse_service__["a" /* ProductWarehouseService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__product_warehouse_service__["a" /* ProductWarehouseService */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__["a" /* BsModalRef */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__["b" /* BsModalService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]])
    ], ProductWarehouseListComponent);
    return ProductWarehouseListComponent;
}(__WEBPACK_IMPORTED_MODULE_1__core_crud__["b" /* AbstractCRUDModalComponent */]));



/***/ }),

/***/ "./src/app/modules/product-warehouse/product-warehouse.meta.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductWarehouseMeta; });
var ProductWarehouseMeta = /** @class */ (function () {
    function ProductWarehouseMeta() {
    }
    return ProductWarehouseMeta;
}());



/***/ }),

/***/ "./src/app/modules/product-warehouse/product-warehouse.modal.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductWarehouseModalModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_confirmation_popover__ = __webpack_require__("./node_modules/angular-confirmation-popover/fesm5/angular-confirmation-popover.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_multiselect_dropdown__ = __webpack_require__("./node_modules/angular2-multiselect-dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_ckeditor__ = __webpack_require__("./node_modules/ng2-ckeditor/lib/ng2-ckeditor.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_ckeditor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_ckeditor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__product_warehouse_create_product_warehouse_create_component__ = __webpack_require__("./src/app/modules/product-warehouse/product-warehouse-create/product-warehouse-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__product_warehouse_edit_product_warehouse_edit_component__ = __webpack_require__("./src/app/modules/product-warehouse/product-warehouse-edit/product-warehouse-edit.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var ProductWarehouseModalModule = /** @class */ (function () {
    function ProductWarehouseModalModule() {
    }
    ProductWarehouseModalModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__["e" /* PaginationModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__["f" /* PopoverModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4_angular_confirmation_popover__["a" /* ConfirmationPopoverModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__["d" /* ModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5_angular2_multiselect_dropdown__["a" /* AngularMultiSelectModule */],
                __WEBPACK_IMPORTED_MODULE_6_ng2_ckeditor__["CKEditorModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__product_warehouse_create_product_warehouse_create_component__["a" /* ProductWarehouseCreateComponent */], __WEBPACK_IMPORTED_MODULE_8__product_warehouse_edit_product_warehouse_edit_component__["a" /* ProductWarehouseEditComponent */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__product_warehouse_create_product_warehouse_create_component__["a" /* ProductWarehouseCreateComponent */], __WEBPACK_IMPORTED_MODULE_8__product_warehouse_edit_product_warehouse_edit_component__["a" /* ProductWarehouseEditComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_7__product_warehouse_create_product_warehouse_create_component__["a" /* ProductWarehouseCreateComponent */], __WEBPACK_IMPORTED_MODULE_8__product_warehouse_edit_product_warehouse_edit_component__["a" /* ProductWarehouseEditComponent */]
            ]
        })
    ], ProductWarehouseModalModule);
    return ProductWarehouseModalModule;
}());



/***/ }),

/***/ "./src/app/modules/product-warehouse/product-warehouse.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductWarehouseModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_confirmation_popover__ = __webpack_require__("./node_modules/angular-confirmation-popover/fesm5/angular-confirmation-popover.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_toggle_switch__ = __webpack_require__("./node_modules/ngx-toggle-switch/ui-switch.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_multiselect_dropdown__ = __webpack_require__("./node_modules/angular2-multiselect-dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_ckeditor__ = __webpack_require__("./node_modules/ng2-ckeditor/lib/ng2-ckeditor.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_ckeditor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_ckeditor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__product_warehouse_list_product_warehouse_list_component__ = __webpack_require__("./src/app/modules/product-warehouse/product-warehouse-list/product-warehouse-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__product_warehouse_modal_module__ = __webpack_require__("./src/app/modules/product-warehouse/product-warehouse.modal.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var ProductWarehouseModule = /** @class */ (function () {
    function ProductWarehouseModule() {
    }
    ProductWarehouseModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__["e" /* PaginationModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__["f" /* PopoverModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__["d" /* ModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4_angular_confirmation_popover__["a" /* ConfirmationPopoverModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5_ngx_toggle_switch__["a" /* UiSwitchModule */],
                __WEBPACK_IMPORTED_MODULE_6_angular2_multiselect_dropdown__["a" /* AngularMultiSelectModule */],
                __WEBPACK_IMPORTED_MODULE_7_ng2_ckeditor__["CKEditorModule"],
                __WEBPACK_IMPORTED_MODULE_9__product_warehouse_modal_module__["a" /* ProductWarehouseModalModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_8__product_warehouse_list_product_warehouse_list_component__["a" /* ProductWarehouseListComponent */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_8__product_warehouse_list_product_warehouse_list_component__["a" /* ProductWarehouseListComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_8__product_warehouse_list_product_warehouse_list_component__["a" /* ProductWarehouseListComponent */]]
        })
    ], ProductWarehouseModule);
    return ProductWarehouseModule;
}());



/***/ }),

/***/ "./src/app/modules/product-warehouse/product-warehouse.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductWarehouseService; });
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





var ProductWarehouseService = /** @class */ (function (_super) {
    __extends(ProductWarehouseService, _super);
    function ProductWarehouseService(http, toaster, title) {
        return _super.call(this, http, title, toaster, 'kho hàng', 'warehouses') || this;
    }
    ProductWarehouseService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["HttpClient"], __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__["b" /* ToasterService */], __WEBPACK_IMPORTED_MODULE_4__core_services__["d" /* TitleService */]])
    ], ProductWarehouseService);
    return ProductWarehouseService;
}(__WEBPACK_IMPORTED_MODULE_2__core_crud__["c" /* AbstractCRUDService */]));



/***/ }),

/***/ "./src/app/modules/product/product-create/product-create.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/product/product-create/product-create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header bg-primary\">\r\n  <h4 class=\"modal-title pull-left\">Thêm mới sản phẩm</h4>\r\n  <button (click)=\"dismiss()\" aria-label=\"Close\" class=\"close pull-right\" type=\"button\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n      <form [formGroup]=\"formGroup\" novalidate>\r\n        <div *ngFor=\"let f of fields\" [ngClass]=\"{ 'has-error': !formGroup.controls[f.formControl].valid }\"\r\n             class=\"form-group\">\r\n          <ng-template [ngIf]=\"f.type == 'input'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{ f.label }}\r\n              <span *ngIf=\"f.typeof == 'number'\" style=\"font-weight: normal\">\r\n                ({{formGroup.controls[f.formControl].value | number : \"1.0-0\"}})\r\n              </span>\r\n            </label>\r\n            <input [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\" [placeholder]=\"f.placeHolder\"\r\n                   [type]=\"f.typeof\" class=\"form-control\"/>\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type == 'textarea'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{ f.label }}\r\n            </label>\r\n            <textarea [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\" [placeholder]=\"f.placeHolder\"\r\n                      [rows]=\"5\" class=\"form-control\">\r\n            </textarea>\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type == 'file'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{ f.label }}\r\n            </label>\r\n            <input (change)=\"f.config['onFileChange'](formGroup, f.formControl, $event)\" [id]=\"f.formControl\" [name]=\"f.formControl\" [placeholder]=\"f.placeHolder\"\r\n                   accept=\"{{ f.config['accept'] }}\" class=\"form-control\"\r\n                   type=\"file\"/>\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type == 'checkbox'\">\r\n            <div class=\"checkbox\">\r\n              <label>\r\n                <input [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\" type=\"checkbox\"/>\r\n                {{ f.label }}\r\n              </label>\r\n            </div>\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type == 'select'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{ f.label }}\r\n            </label>\r\n            <select [formControlName]=\"f.formControl\" [id]=\"f.formControl\" class=\"form-control\">\r\n              <option *ngFor=\"let option of f.data\" [value]=\"option['id']\">\r\n                {{ option[\"name\"] }}\r\n              </option>\r\n            </select>\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type == 'select2'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{ f.label }}\r\n            </label>\r\n            <angular2-multiselect [data]=\"f.data\" [formControlName]=\"f.formControl\" [id]=\"f.formControl\"\r\n                                  [settings]=\"f.config\">\r\n            </angular2-multiselect>\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type == 'html'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{ f.label }}\r\n            </label>\r\n            <ckeditor [config]=\"f.config\" [formControlName]=\"f.formControl\" [id]=\"f.formControl\" debounce=\"500\">\r\n            </ckeditor>\r\n          </ng-template>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <button (click)=\"createWithImage()\" [disabled]=\"formGroup.invalid\" class=\"btn btn-primary\" type=\"button\">Thêm mới</button>\r\n  <button (click)=\"dismiss()\" class=\"btn btn-default\" type=\"button\">Hủy bỏ</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/product/product-create/product-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_service__ = __webpack_require__("./src/app/modules/product/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_crud__ = __webpack_require__("./src/app/core/crud/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_common__ = __webpack_require__("./src/app/core/common/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__product_category_product_category_service__ = __webpack_require__("./src/app/modules/product-category/product-category.service.ts");
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







var ProductCreateComponent = /** @class */ (function (_super) {
    __extends(ProductCreateComponent, _super);
    function ProductCreateComponent(service, modal, builder, categoryService) {
        var _this = _super.call(this, service, modal, builder) || this;
        _this.categoryService = categoryService;
        return _this;
    }
    ProductCreateComponent.prototype.onInit = function () {
    };
    ProductCreateComponent.prototype.onDestroy = function () {
    };
    ProductCreateComponent.prototype.loadAllCategories = function () {
        return this.categoryService.loadByParams({ child: 0 });
    };
    ProductCreateComponent.prototype.buildForm = function () {
        return this.formBuilder.group({
            category: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            category_id: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null),
            category_slug: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null),
            name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(255), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern('[^ ].*$')]),
            code: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(255), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern('[^ ].*$')]),
            summary: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null),
            image: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            price: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].min(0), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(20), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern('^(?=.*[0-9]+)[0-9]*$')]),
        });
    };
    ProductCreateComponent.prototype.initFieldForm = function () {
        return [
            __WEBPACK_IMPORTED_MODULE_5__core_common__["b" /* FieldForm */].createSingleSelect3('Danh mục', 'category', 'Chọn danh mục', 'loadAllCategories'),
            __WEBPACK_IMPORTED_MODULE_5__core_common__["b" /* FieldForm */].createTextInput('Tên sản phẩm', 'name', 'Nhập tên'),
            __WEBPACK_IMPORTED_MODULE_5__core_common__["b" /* FieldForm */].createTextInput('Code', 'code', 'Nhập mã'),
            __WEBPACK_IMPORTED_MODULE_5__core_common__["b" /* FieldForm */].createFileInput('Ảnh đại diện', 'image', 'Chọn ảnh', this.onFileUploadChange, 'image/*'),
            __WEBPACK_IMPORTED_MODULE_5__core_common__["b" /* FieldForm */].createNumberInput('Giá sản phẩm', 'price', 'Nhập giá'),
            __WEBPACK_IMPORTED_MODULE_5__core_common__["b" /* FieldForm */].createHtmlInput('Tóm tắt', 'summary', { height: '300px' }),
        ];
    };
    ProductCreateComponent.prototype.loaded = function () {
    };
    ProductCreateComponent.prototype.onFormChanged = function () {
        var _this = this;
        _super.prototype.onFormChanged.call(this);
        this.formGroup.controls['category'].valueChanges.subscribe(function (value) {
            if (value && value.length > 0) {
                _this.formGroup.controls['category_id'].setValue(value[0].id);
                _this.formGroup.controls['category_slug'].setValue(value[0].slug);
            }
        });
    };
    ProductCreateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-product-create',
            template: __webpack_require__("./src/app/modules/product/product-create/product-create.component.html"),
            styles: [__webpack_require__("./src/app/modules/product/product-create/product-create.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_6__product_category_product_category_service__["a" /* ProductCategoryService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__["a" /* BsModalRef */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_6__product_category_product_category_service__["a" /* ProductCategoryService */]])
    ], ProductCreateComponent);
    return ProductCreateComponent;
}(__WEBPACK_IMPORTED_MODULE_4__core_crud__["d" /* AbstractModalComponent */]));



/***/ }),

/***/ "./src/app/modules/product/product-edit/product-edit.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/product/product-edit/product-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header bg-primary\">\r\n  <h4 class=\"modal-title pull-left\">Chỉnh sửa sản phẩm</h4>\r\n  <button (click)=\"dismiss()\" aria-label=\"Close\" class=\"close pull-right\" type=\"button\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n      <form [formGroup]=\"formGroup\" novalidate>\r\n        <div *ngFor=\"let f of fields\" [ngClass]=\"{'has-error':!formGroup.controls[f.formControl].valid}\"\r\n             class=\"form-group\">\r\n          <ng-template [ngIf]=\"f.type=='input'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{f.label}} <span *ngIf=\"f.typeof == 'number'\" style=\"font-weight: normal\">\r\n                ( {{formGroup.controls[f.formControl].value|number:'1.0-0'}} )\r\n              </span>\r\n            </label>\r\n            <input [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\" [placeholder]=\"f.placeHolder\"\r\n                   [type]=\"f.typeof\" class=\"form-control\">\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type=='textarea'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{f.label}}\r\n            </label>\r\n            <textarea [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\" [placeholder]=\"f.placeHolder\"\r\n                      [rows]=\"5\" class=\"form-control\">\r\n          </textarea>\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type=='file'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{f.label}}\r\n            </label>\r\n            <input (change)=\"f.config['onFileChange'](formGroup,f.formControl,$event)\" [id]=\"f.formControl\" [name]=\"f.formControl\" [placeholder]=\"f.placeHolder\"\r\n                   accept=\"{{f.config['accept']}}\" class=\"form-control\"\r\n                   type=\"file\">\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type=='checkbox'\">\r\n            <div class=\"checkbox\">\r\n              <label>\r\n                <input [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\" type=\"checkbox\">\r\n                {{f.label}}\r\n              </label>\r\n            </div>\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type=='select'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{f.label}}\r\n            </label>\r\n            <select [formControlName]=\"f.formControl\" [id]=\"f.formControl\" class=\"form-control\">\r\n              <option *ngFor=\"let option of f.data\" [value]=\"option['id']\">{{option['name']}}</option>\r\n            </select>\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type == 'select2'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{ f.label }}\r\n            </label>\r\n            <angular2-multiselect [data]=\"f.data\" [formControlName]=\"f.formControl\" [id]=\"f.formControl\"\r\n                                  [settings]=\"f.config\">\r\n            </angular2-multiselect>\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type=='html'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{f.label}}\r\n            </label>\r\n            <ckeditor [config]=\"f.config\" [formControlName]=\"f.formControl\" [id]=\"f.formControl\" debounce=\"500\">\r\n            </ckeditor>\r\n          </ng-template>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <button (click)=\"editWithImage()\" [disabled]=\"formGroup.invalid\" class=\"btn btn-primary\" type=\"button\">Chỉnh sửa</button>\r\n  <button (click)=\"dismiss()\" class=\"btn btn-default\" type=\"button\">Hủy bỏ</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/product/product-edit/product-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_service__ = __webpack_require__("./src/app/modules/product/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_crud__ = __webpack_require__("./src/app/core/crud/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_common__ = __webpack_require__("./src/app/core/common/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__product_category_product_category_service__ = __webpack_require__("./src/app/modules/product-category/product-category.service.ts");
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







var ProductEditComponent = /** @class */ (function (_super) {
    __extends(ProductEditComponent, _super);
    function ProductEditComponent(service, modal, builder, categoryService) {
        var _this = _super.call(this, service, modal, builder) || this;
        _this.categoryService = categoryService;
        return _this;
    }
    ProductEditComponent.prototype.onInit = function () {
    };
    ProductEditComponent.prototype.onDestroy = function () {
    };
    ProductEditComponent.prototype.loadAllCategories = function () {
        return this.categoryService.loadByParams({ child: 0 });
    };
    ProductEditComponent.prototype.buildForm = function () {
        return this.formBuilder.group({
            category: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            category_id: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null),
            category_slug: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null),
            name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(255), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern('[^ ].*$')]),
            code: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(255), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern('[^ ].*$')]),
            summary: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null),
            image: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            price: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].min(0), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(20), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern('^(?=.*[0-9]+)[0-9]*$')]),
        });
    };
    ProductEditComponent.prototype.initFieldForm = function () {
        return [
            __WEBPACK_IMPORTED_MODULE_5__core_common__["b" /* FieldForm */].createSingleSelect3('Danh mục', 'category', 'Chọn danh mục', 'loadAllCategories'),
            __WEBPACK_IMPORTED_MODULE_5__core_common__["b" /* FieldForm */].createTextInput('Tên sản phẩm', 'name', 'Nhập tên'),
            __WEBPACK_IMPORTED_MODULE_5__core_common__["b" /* FieldForm */].createTextInput('Code', 'code', 'Nhập mã'),
            __WEBPACK_IMPORTED_MODULE_5__core_common__["b" /* FieldForm */].createFileInput('Ảnh đại diện', 'image', 'Chọn ảnh', this.onFileUploadChange, 'image/*'),
            __WEBPACK_IMPORTED_MODULE_5__core_common__["b" /* FieldForm */].createNumberInput('Giá sản phẩm', 'price', 'Nhập giá'),
            __WEBPACK_IMPORTED_MODULE_5__core_common__["b" /* FieldForm */].createHtmlInput('Tóm tắt', 'summary', { height: '300px' }),
        ];
    };
    ProductEditComponent.prototype.loaded = function () {
    };
    ProductEditComponent.prototype.onFormChanged = function () {
        var _this = this;
        _super.prototype.onFormChanged.call(this);
        this.formGroup.controls['category'].valueChanges.subscribe(function (value) {
            if (value && value.length > 0) {
                _this.formGroup.controls['category_id'].setValue(value[0].id);
                _this.formGroup.controls['category_slug'].setValue(value[0].slug);
            }
        });
    };
    ProductEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-product-edit',
            template: __webpack_require__("./src/app/modules/product/product-edit/product-edit.component.html"),
            styles: [__webpack_require__("./src/app/modules/product/product-edit/product-edit.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_6__product_category_product_category_service__["a" /* ProductCategoryService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__["a" /* BsModalRef */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_6__product_category_product_category_service__["a" /* ProductCategoryService */]])
    ], ProductEditComponent);
    return ProductEditComponent;
}(__WEBPACK_IMPORTED_MODULE_4__core_crud__["d" /* AbstractModalComponent */]));



/***/ }),

/***/ "./src/app/modules/product/product-import/product-import.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/product/product-import/product-import.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header bg-primary\">\r\n  <h4 class=\"modal-title pull-left\">Nhập file</h4>\r\n  <button (click)=\"dismiss()\" aria-label=\"Close\" class=\"close pull-right\" type=\"button\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n      <form [formGroup]=\"formGroup\" novalidate>\r\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': !formGroup.controls['name'].valid }\">\r\n          <label for=\"name\">Tên phiếu nhập</label>\r\n          <input formControlName=\"name\" id=\"name\" name=\"name\" placeholder=\"Nhập tên\" type=\"text\" class=\"form-control\"/>\r\n        </div>\r\n        <div class=\"custom-file margin-bottom form-group\" [ngClass]=\"{ 'has-error': !formGroup.controls['file'].valid }\">\r\n          <label class=\"custom-file-label\" for=\"inputGroupFile01\">Chọn file</label>\r\n          <input (change)=\"onFileUploadChange($event)\" accept=\"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet\" aria-describedby=\"inputGroupFileAddon01\"\r\n          class=\"custom-file-input\" id=\"inputGroupFile01\" type=\"file\">\r\n        </div>\r\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': !formGroup.controls['note'].valid }\">\r\n          <label for=\"note\">Ghi chú</label>\r\n          <textarea formControlName=\"note\" id=\"note\" name=\"note\" placeholder=\"Nhập chi chú\" rows=\"5\" class=\"form-control\"></textarea>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <button (click)=\"import()\" [disabled]=\"formGroup.invalid\" class=\"btn btn-primary\" type=\"button\">Nhập liệu</button>\r\n  <button (click)=\"dismiss()\" class=\"btn btn-default\" type=\"button\">Hủy bỏ</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/product/product-import/product-import.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductImportComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_service__ = __webpack_require__("./src/app/modules/product/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core__ = __webpack_require__("./src/app/core/index.ts");
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





var ProductImportComponent = /** @class */ (function (_super) {
    __extends(ProductImportComponent, _super);
    function ProductImportComponent(service, modal, builder) {
        return _super.call(this, service, modal, builder) || this;
    }
    ProductImportComponent.prototype.onInit = function () {
    };
    ProductImportComponent.prototype.onDestroy = function () {
    };
    ProductImportComponent.prototype.buildForm = function () {
        return this.formBuilder.group({
            name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(255)]),
            file: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            note: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required)
        });
    };
    ProductImportComponent.prototype.onFileUploadChange = function (event) {
        var input = event.target;
        if (input.files && input.files[0]) {
            this.formGroup.controls['file'].setValue(input.files[0]);
        }
    };
    ProductImportComponent.prototype.initFieldForm = function () {
        return [];
    };
    ProductImportComponent.prototype.loaded = function () {
    };
    ProductImportComponent.prototype.import = function () {
        var _this = this;
        this.service.import(this.formGroup.get('file').value, this.formGroup.value).subscribe(function (res) {
            _this.service.toastSuccessfully('Nhập file', 'Thành công');
            _this.close({});
        }, function () { return _this.service.toastFailedCreated(); });
        ;
    };
    ProductImportComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-product-import',
            template: __webpack_require__("./src/app/modules/product/product-import/product-import.component.html"),
            styles: [__webpack_require__("./src/app/modules/product/product-import/product-import.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__product_service__["a" /* ProductService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__["a" /* BsModalRef */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]])
    ], ProductImportComponent);
    return ProductImportComponent;
}(__WEBPACK_IMPORTED_MODULE_4__core__["d" /* AbstractModalComponent */]));



/***/ }),

/***/ "./src/app/modules/product/product-list/product-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/product/product-list/product-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n  <div class=\"panel-heading\">\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12\">\r\n        <form (ngSubmit)=\"load()\" [formGroup]=\"searchForm\">\r\n          <div *ngFor=\"let f of searchControls\" class=\"form-group col-md-6\">\r\n            <ng-template [ngIf]=\"f.type == 'input'\">\r\n              <label [for]=\"f.formControl\">\r\n                {{ f.label }}\r\n              </label>\r\n              <input [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\" [placeholder]=\"f.placeHolder\"\r\n                     [type]=\"f.typeof\" class=\"form-control\"/>\r\n            </ng-template>\r\n            <ng-template [ngIf]=\"f.type == 'textarea'\">\r\n              <label [for]=\"f.formControl\">\r\n                {{ f.label }}\r\n              </label>\r\n              <textarea [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\"\r\n                        [placeholder]=\"f.placeHolder\" class=\"form-control\">\r\n              </textarea>\r\n            </ng-template>\r\n            <ng-template [ngIf]=\"f.type == 'checkbox'\">\r\n              <div class=\"checkbox\">\r\n                <label>\r\n                  <input [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\"\r\n                         type=\"checkbox\"/>\r\n                  {{ f.label }}\r\n                </label>\r\n              </div>\r\n            </ng-template>\r\n            <ng-template [ngIf]=\"f.type == 'select'\">\r\n              <label [for]=\"f.formControl\">\r\n                {{ f.label }}\r\n              </label>\r\n              <select [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\"\r\n                      class=\"form-control\">\r\n                <option *ngFor=\"let option of f.data\" [value]=\"option['id']\">\r\n                  {{ option[\"name\"] }}\r\n                </option>\r\n              </select>\r\n            </ng-template>\r\n            <ng-template [ngIf]=\"f.type == 'select2'\">\r\n              <label [for]=\"f.formControl\">\r\n                {{ f.label }}\r\n              </label>\r\n              <angular2-multiselect [data]=\"f.data\" [formControlName]=\"f.formControl\" [id]=\"f.formControl\"\r\n                                    [settings]=\"f.config\">\r\n              </angular2-multiselect>\r\n            </ng-template>\r\n          </div>\r\n          <div class=\"col-md-12\">\r\n            <button class=\"btn btn-default\" type=\"submit\">Tìm kiếm</button>\r\n            <button (click)=\"removeFilter()\" class=\"btn btn-default\" type=\"button\">Xóa lọc</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <div class=\"col-xs-6 col-xs-offset-6 text-right\">\r\n        <button (click)=\"import()\" class=\"btn btn btn-info\" type=\"button\">\r\n          <i class=\"fa fa-upload\"></i> Nhập file excel\r\n        </button>\r\n        <button (click)=\"export('ton_kho')\" class=\"btn btn btn-info\" type=\"button\">\r\n          <i class=\"fa fa-download\" style=\"margin-right: 5px;\"></i>Xuất file excel\r\n        </button>\r\n        <button (click)=\"createProduct()\" class=\"btn btn-primary\" type=\"button\">\r\n          <i class=\"fa fa-plus\" style=\"margin-right: 5px;\"></i> Thêm mới\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"panel-body no-padding\">\r\n    <table class=\"table table-bordered table-hover\">\r\n      <thead>\r\n      <tr>\r\n        <th style=\"width: 5%;\">#</th>\r\n        <th style=\"width: 35%;\">Sản phẩm</th>\r\n        <th style=\"width: 13%;\">Bài viết</th>\r\n        <th style=\"width: 10%;\">Ảnh</th>\r\n        <th style=\"width: 12%;\">Danh mục</th>\r\n        <th style=\"width: 10%;\">Trạng thái</th>\r\n        <th style=\"width: 15%;\">Thao tác</th>\r\n      </tr>\r\n      </thead>\r\n      <tbody>\r\n      <tr *ngFor=\"let item of list; let i = index\" class=\"odd\">\r\n        <td class=\"text-center\">{{i + 1}}</td>\r\n        <td>\r\n          <p style=\"font-size: 15px;\"><label>{{item.code}}</label> - {{ item.name }}</p>\r\n          <p>{{item.created_at | date: 'yyyy-MM-dd HH:mm:ss'}}</p>\r\n          <a [href]=\"item.full_path\" target=\"_blank\" title=\"Xem sản phẩm\">\r\n            <button class=\"btn btn-default btn-xs\" type=\"button\">\r\n              <i class=\"fa fa-external-link\"></i>\r\n            </button>\r\n          </a>\r\n          <button (click)=\"showComment(item)\" class=\"btn btn-xs btn-default\" title=\"Đánh giá\">\r\n            <i class=\"fa fa-comments-o\"></i>\r\n          </button>\r\n          <button (click)=\"showTags(item)\" class=\"btn btn-default btn-xs\" title=\"Tag\">\r\n            <i class=\"fa fa-tag\"></i>\r\n          </button>\r\n          <button (click)=\"showImage(item)\" class=\"btn btn-default btn-xs\" title=\"Album Ảnh\">\r\n            <i class=\"fa fa-picture-o\"></i>\r\n          </button>\r\n          <button (click)=\"showWarehouse(item)\" class=\"btn btn-default btn-xs\" title=\"Kho hàng\">\r\n            <i aria-hidden=\"true\" class=\"fa fa-archive\"></i>\r\n          </button>\r\n          <button (click)=\"showRelated(item)\" class=\"btn btn-default btn-xs\" title=\"Sản phẩm liên quan\">\r\n            <i aria-hidden=\"true\" class=\"fa fa-registered\"></i>\r\n          </button>\r\n        </td>\r\n        <td class=\"text-center\">\r\n          <button (click)=\"createArticle(item)\" *ngIf=\"!item.article\" class=\"btn btn-default btn-sm\">\r\n            Thêm bài viết\r\n          </button>\r\n          <button (click)=\"editArticle(item)\" *ngIf=\"item.article\" class=\"btn btn-info btn-sm\">\r\n            Sửa bài viết\r\n          </button>\r\n        </td>\r\n        <td class=\"text-center\">\r\n          <img [alt]=\"item.name\" [src]=\"item.image\" style=\"width: 100px\"/>\r\n        </td>\r\n        <td>\r\n          {{ item.category ? item.category.name : \"Chưa có danh mục\" }}\r\n        </td>\r\n        <td class=\"text-center\">\r\n          <ui-switch (change)=\"onStatusChange(item,i,$event)\" *ngIf=\"item.status == 0\"></ui-switch>\r\n          <ui-switch (change)=\"onStatusChange(item,i,$event)\" *ngIf=\"item.status == 1\"\r\n                     [checked]=\"item.status\"></ui-switch>\r\n        </td>\r\n        <td class=\"text-center\">\r\n          <button (confirm)=\"upOrder(item ,i)\" cancelText=\"No <i class='fa fa-remove'></i>\" class=\"btn btn-default btn-sm\" confirmText=\"Yes <i class='fa fa-check'></i>\"\r\n                  mwlConfirmationPopover placement=\"top\" popoverMessage=\"Bạn thực sự muốn tăng thứ tự?\"\r\n                  popoverTitle=\"Thay đổi thứ tự\" type=\"button\" style=\"width: 30px; height: 30px; padding: 0;\">\r\n            <i class=\"fa fa-arrow-up\"></i>\r\n          </button>\r\n          <button (confirm)=\"downOrder(item,i)\" cancelText=\"No <i class='fa fa-remove'></i>\" class=\"btn btn-default btn-sm\" confirmText=\"Yes <i class='fa fa-check'></i>\"\r\n                  mwlConfirmationPopover placement=\"top\" popoverMessage=\"Bạn thực sự muốn giảm thứ tự?\"\r\n                  popoverTitle=\"Thay đổi thứ tự\" type=\"button\" style=\"width: 30px; height: 30px; padding: 0;\">\r\n            <i class=\"fa fa-arrow-down\"></i>\r\n          </button>\r\n          <button (click)=\"editProduct(item)\" class=\"btn btn-default btn-sm\" type=\"button\" style=\"width: 30px; height: 30px; padding: 0;\">\r\n            <i class=\"fa fa-pencil-square-o\"></i>\r\n          </button>\r\n          <button (confirm)=\"remove(item, i)\" cancelText=\"No <i class='fa fa-remove'></i>\" class=\"btn btn-danger btn-sm\" confirmText=\"Yes <i class='fa fa-check'></i>\"\r\n                  mwlConfirmationPopover placement=\"top\" popoverMessage=\"Bạn thực sự muốn xóa?\" popoverTitle=\"Xóa\"\r\n                  style=\"width: 30px; height: 30px; padding: 0;\" type=\"button\">\r\n            <i aria-hidden=\"true\" class=\"fa fa-remove\"></i>\r\n          </button>\r\n        </td>\r\n      </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n  <div class=\"panel-footer\">\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-6\">\r\n        <pagination (numPages)=\"pagination.numPages = $event\" (pageChanged)=\"pageChanged($event)\"\r\n                    [(ngModel)]=\"pagination.currentPage\" [boundaryLinks]=\"true\"\r\n                    [itemsPerPage]=\"pagination.itemsPerPage\"\r\n                    [maxSize]=\"pagination.maxSize\" [totalItems]=\"pagination.totalItems\" class=\"pagination-sm\"></pagination>\r\n      </div>\r\n      <div class=\"col-xs-6\">\r\n        <div class=\"box-go-to\">\r\n          <input [(ngModel)]=\"nextPage\" class=\"col-xs-2\" type=\"number\"/>\r\n          <span class=\"col-xs-1\">/</span>\r\n          <input [(ngModel)]=\"pagination.numPages\" class=\"col-xs-2\" disabled type=\"text\"/>\r\n          <div class=\"col-xs-4\">\r\n            <button (click)=\"goToPageNumber()\">Đến</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/product/product-list/product-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_crud__ = __webpack_require__("./src/app/core/crud/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__product_meta__ = __webpack_require__("./src/app/modules/product/product.meta.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__product_service__ = __webpack_require__("./src/app/modules/product/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__product_create_product_create_component__ = __webpack_require__("./src/app/modules/product/product-create/product-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__product_edit_product_edit_component__ = __webpack_require__("./src/app/modules/product/product-edit/product-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__core_common__ = __webpack_require__("./src/app/core/common/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__core_utils__ = __webpack_require__("./src/app/core/utils/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__article_article_create_article_create_component__ = __webpack_require__("./src/app/modules/article/article-create/article-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__article_article_meta__ = __webpack_require__("./src/app/modules/article/article.meta.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__article_article_edit_article_edit_component__ = __webpack_require__("./src/app/modules/article/article-edit/article-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__product_image_product_image_list_product_image_list_component__ = __webpack_require__("./src/app/modules/product-image/product-image-list/product-image-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__article_comment_article_comment_list_article_comment_list_component__ = __webpack_require__("./src/app/modules/article-comment/article-comment-list/article-comment-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__product_category_product_category_service__ = __webpack_require__("./src/app/modules/product-category/product-category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__product_tag_product_tag_service__ = __webpack_require__("./src/app/modules/product-tag/product-tag.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__product_warehouse_product_warehouse_list_product_warehouse_list_component__ = __webpack_require__("./src/app/modules/product-warehouse/product-warehouse-list/product-warehouse-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__product_import_product_import_component__ = __webpack_require__("./src/app/modules/product/product-import/product-import.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__product_related_product_related_list_product_related_list_component__ = __webpack_require__("./src/app/modules/product-related/product-related-list/product-related-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__product_tag_assign_list_product_tag_assign_list_component__ = __webpack_require__("./src/app/modules/product/product-tag-assign-list/product-tag-assign-list.component.ts");
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





















var ProductListComponent = /** @class */ (function (_super) {
    __extends(ProductListComponent, _super);
    function ProductListComponent(service, modal, builder, categoryService, tagService) {
        var _this = _super.call(this, service, modal, builder) || this;
        _this.categoryService = categoryService;
        _this.tagService = tagService;
        return _this;
    }
    ProductListComponent.prototype.onInit = function () {
        this.load();
    };
    ProductListComponent.prototype.onDestroy = function () {
    };
    ProductListComponent.prototype.getTitle = function () {
        return 'Quản lý sản phẩm';
    };
    ProductListComponent.prototype.getCreateModalComponent = function () {
        return __WEBPACK_IMPORTED_MODULE_6__product_create_product_create_component__["a" /* ProductCreateComponent */];
    };
    ProductListComponent.prototype.getEditModalComponent = function () {
        return __WEBPACK_IMPORTED_MODULE_7__product_edit_product_edit_component__["a" /* ProductEditComponent */];
    };
    ProductListComponent.prototype.getCreateModalComponentOptions = function () {
        return { 'class': 'modal-lg', ignoreBackdropClick: true };
    };
    ProductListComponent.prototype.getEditModalComponentOptions = function () {
        return { 'class': 'modal-lg', ignoreBackdropClick: true };
    };
    ProductListComponent.prototype.loadAllCategory = function () {
        return this.categoryService.loadAll();
    };
    ProductListComponent.prototype.loadAllTag = function () {
        return this.tagService.loadAll();
    };
    ProductListComponent.prototype.buildSearchForm = function () {
        return this.formBuilder.group({
            search: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](null),
            category_id: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](null),
            status: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](null),
            tag_id: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](null),
        });
    };
    ProductListComponent.prototype.initSearchForm = function () {
        return [
            __WEBPACK_IMPORTED_MODULE_8__core_common__["b" /* FieldForm */].createTextInput('Tìm kiếm theo tên', 'search', 'Nhập từ khóa'),
            __WEBPACK_IMPORTED_MODULE_8__core_common__["b" /* FieldForm */].createSelect('Tìm kiếm danh mục', 'category_id', 'Chọn một', 'loadAllCategory'),
            __WEBPACK_IMPORTED_MODULE_8__core_common__["b" /* FieldForm */].createSelect('Tìm kiếm trạng thái', 'status', 'Chọn một', [
                {
                    id: 1,
                    name: 'Hoạt động',
                    value: '1'
                },
                {
                    id: 0,
                    name: 'Không hoạt động',
                    value: '0'
                },
            ]),
            __WEBPACK_IMPORTED_MODULE_8__core_common__["b" /* FieldForm */].createSelect('Tìm kiếm thẻ', 'tag_id', 'Chọn một', 'loadAllTag'),
        ];
    };
    ProductListComponent.prototype.initNewModel = function () {
        return new __WEBPACK_IMPORTED_MODULE_4__product_meta__["a" /* ProductMeta */]();
    };
    ProductListComponent.prototype.onStatusChange = function (item, index, enable) {
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
    ProductListComponent.prototype.createProduct = function () {
        var _this = this;
        var modalOptions = Object.assign(this.defaultModalOptions(), this.getCreateModalComponentOptions());
        var config = __WEBPACK_IMPORTED_MODULE_9__core_utils__["c" /* ObjectUtil */].combineValue({ ignoreBackdropClick: true }, modalOptions);
        var modalRef = this.modalService.show(this.getCreateModalComponent(), config);
        var modal = modalRef.content;
        modal.setModel(this.initNewModel());
        modal.onHidden.subscribe(function (result) {
            if (result.success) {
                _this.load();
            }
        });
    };
    ProductListComponent.prototype.editProduct = function (item) {
        var _this = this;
        var modalOptions = Object.assign(this.defaultModalOptions(), this.getEditModalComponentOptions());
        var config = __WEBPACK_IMPORTED_MODULE_9__core_utils__["c" /* ObjectUtil */].combineValue({ ignoreBackdropClick: true }, modalOptions);
        var modalRef = this.modalService.show(this.getEditModalComponent(), config);
        var modal = modalRef.content;
        modal.setModel(item);
        modal.onHidden.subscribe(function (result) {
            if (result.success) {
                _this.load();
            }
        });
    };
    ProductListComponent.prototype.upOrder = function (item) {
        var _this = this;
        this.service.up(item.id).subscribe(function (res) {
            _this.service.toastSuccessfully('Tăng thứ tự');
            _this.load();
        }, function () { return _this.service.toastFailed('Tăng thứ tự'); });
    };
    ProductListComponent.prototype.downOrder = function (item) {
        var _this = this;
        this.service.down(item.id).subscribe(function (res) {
            _this.service.toastSuccessfully('Giảm thứ tự');
            _this.load();
        }, function () { return _this.service.toastFailed('Giảm thứ tự'); });
    };
    ProductListComponent.prototype.createArticle = function (item) {
        var _this = this;
        var modalRef = this.modalService.show(__WEBPACK_IMPORTED_MODULE_10__article_article_create_article_create_component__["a" /* ArticleCreateComponent */], { ignoreBackdropClick: true, 'class': 'modal-lg' });
        var modal = modalRef.content;
        var model = new __WEBPACK_IMPORTED_MODULE_11__article_article_meta__["a" /* ArticleMeta */]();
        model.articleable_type = 'products';
        model.articleable_id = item.id;
        modal.setModel(model);
        var sub = modal.onHidden.subscribe(function (result) {
            if (result.success) {
                _this.load();
            }
            sub.unsubscribe();
        });
    };
    ProductListComponent.prototype.editArticle = function (item) {
        var _this = this;
        var modalRef = this.modalService.show(__WEBPACK_IMPORTED_MODULE_12__article_article_edit_article_edit_component__["a" /* ArticleEditComponent */], { ignoreBackdropClick: true, 'class': 'modal-lg' });
        var modal = modalRef.content;
        modal.setModel(item.article);
        var sub = modal.onHidden.subscribe(function (result) {
            if (result.success) {
                _this.load();
            }
            sub.unsubscribe();
        });
    };
    ProductListComponent.prototype.showTags = function (item) {
        var _this = this;
        var modalRef = this.modalService.show(__WEBPACK_IMPORTED_MODULE_20__product_tag_assign_list_product_tag_assign_list_component__["a" /* ProductTagAssignListComponent */], {
            ignoreBackdropClick: true,
            'class': 'modal-lg'
        });
        var modal = modalRef.content;
        modal.setRelatedModel(item);
        (item);
        var sub = modal.onHidden.subscribe(function (result) {
            if (result.success) {
                _this.load();
            }
            sub.unsubscribe();
        });
    };
    ProductListComponent.prototype.showImage = function (item) {
        var _this = this;
        var modalRef = this.modalService.show(__WEBPACK_IMPORTED_MODULE_13__product_image_product_image_list_product_image_list_component__["a" /* ProductImageListComponent */], { ignoreBackdropClick: true, class: 'modal-lg' });
        var modal = modalRef.content;
        modal.setRelatedModel(item);
        var sub = modal.onHidden.subscribe(function (result) {
            if (result.success) {
                _this.load();
            }
            sub.unsubscribe();
        });
    };
    ProductListComponent.prototype.showComment = function (item) {
        var _this = this;
        var modalRef = this.modalService.show(__WEBPACK_IMPORTED_MODULE_14__article_comment_article_comment_list_article_comment_list_component__["a" /* ArticleCommentListComponent */], { ignoreBackdropClick: true, class: 'modal-lg' });
        var modal = modalRef.content;
        modal.setRelatedModel(item.article);
        var sub = modal.onHidden.subscribe(function (result) {
            if (result.success) {
                _this.load();
            }
            sub.unsubscribe();
        });
    };
    ProductListComponent.prototype.showWarehouse = function (item) {
        var _this = this;
        var modalRef = this.modalService.show(__WEBPACK_IMPORTED_MODULE_17__product_warehouse_product_warehouse_list_product_warehouse_list_component__["a" /* ProductWarehouseListComponent */], { ignoreBackdropClick: true, class: 'modal-lg' });
        var modal = modalRef.content;
        modal.setRelatedModel(item);
        var sub = modal.onHidden.subscribe(function (result) {
            if (result.success) {
                _this.load();
            }
            sub.unsubscribe();
        });
    };
    ProductListComponent.prototype.showRelated = function (item) {
        var _this = this;
        var modalRef = this.modalService.show(__WEBPACK_IMPORTED_MODULE_19__product_related_product_related_list_product_related_list_component__["a" /* ProductRelatedListComponent */], { ignoreBackdropClick: true, class: 'modal-lg' });
        var modal = modalRef.content;
        modal.setRelatedModel(item);
        var sub = modal.onHidden.subscribe(function (result) {
            if (result.success) {
                _this.load();
            }
            sub.unsubscribe();
        });
    };
    ProductListComponent.prototype.import = function () {
        var _this = this;
        var config = { ignoreBackdropClick: true };
        var modalRef = this.modalService.show(__WEBPACK_IMPORTED_MODULE_18__product_import_product_import_component__["a" /* ProductImportComponent */], config);
        var modal = modalRef.content;
        var sub = modal.onHidden.subscribe(function (result) {
            if (result.success) {
                _this.load();
            }
            sub.unsubscribe();
        });
    };
    ProductListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-product',
            template: __webpack_require__("./src/app/modules/product/product-list/product-list.component.html"),
            styles: [__webpack_require__("./src/app/modules/product/product-list/product-list.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_5__product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_15__product_category_product_category_service__["a" /* ProductCategoryService */], __WEBPACK_IMPORTED_MODULE_16__product_tag_product_tag_service__["a" /* ProductTagService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__["b" /* BsModalService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_15__product_category_product_category_service__["a" /* ProductCategoryService */],
            __WEBPACK_IMPORTED_MODULE_16__product_tag_product_tag_service__["a" /* ProductTagService */]])
    ], ProductListComponent);
    return ProductListComponent;
}(__WEBPACK_IMPORTED_MODULE_1__core_crud__["a" /* AbstractCRUDComponent */]));



/***/ }),

/***/ "./src/app/modules/product/product-tag-assign-create/product-tag-assign-create.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/product/product-tag-assign-create/product-tag-assign-create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header bg-primary\">\r\n  <h4 class=\"modal-title pull-left\">Thêm mới gán tag</h4>\r\n  <button (click)=\"dismiss()\" aria-label=\"Close\" class=\"close pull-right\" type=\"button\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n      <form [formGroup]=\"formGroup\" novalidate>\r\n        <div *ngFor=\"let f of fields\" class=\"form-group\">\r\n          <ng-template [ngIf]=\"f.type=='input'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{f.label}} <span\r\n              *ngIf=\"f.typeof == 'number'\" style=\"font-weight: normal\">\r\n              ( {{formGroup.controls[f.formControl].value|number:'1.0-0'}} )\r\n            </span>\r\n            </label>\r\n            <input [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\" [placeholder]=\"f.placeHolder\"\r\n                   [type]=\"f.typeof\" class=\"form-control\">\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type=='textarea'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{f.label}}\r\n            </label>\r\n            <textarea [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\" [placeholder]=\"f.placeHolder\"\r\n                      [rows]=\"5\" class=\"form-control\">\r\n          </textarea>\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type=='file'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{f.label}}\r\n            </label>\r\n            <input (change)=\"f.config['onFileChange'](formGroup,f.formControl,$event)\" [id]=\"f.formControl\" [name]=\"f.formControl\"\r\n                   [placeholder]=\"f.placeHolder\" accept=\"{{f.config['accept']}}\"\r\n                   class=\"form-control\"\r\n                   type=\"file\">\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type=='checkbox'\">\r\n            <div class=\"checkbox\">\r\n              <label>\r\n                <input [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\" type=\"checkbox\">\r\n                {{f.label}}\r\n              </label>\r\n            </div>\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type=='select'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{f.label}}\r\n            </label>\r\n            <select [formControlName]=\"f.formControl\" [id]=\"f.formControl\" class=\"form-control\">\r\n              <option *ngFor=\"let option of f.data\" [value]=\"option['id']\">{{option['name']}}</option>\r\n            </select>\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type == 'select2'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{ f.label }}\r\n            </label>\r\n            <angular2-multiselect [data]=\"f.data\" [formControlName]=\"f.formControl\" [id]=\"f.formControl\"\r\n                                  [settings]=\"f.config\">\r\n            </angular2-multiselect>\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type=='html'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{f.label}}\r\n            </label>\r\n            <ckeditor [config]=\"f.config\" [formControlName]=\"f.formControl\"\r\n                      [id]=\"f.formControl\" debounce=\"500\">\r\n            </ckeditor>\r\n          </ng-template>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <button (click)=\"assign()\" [disabled]=\"formGroup.invalid\" class=\"btn btn-primary\" type=\"button\">Thêm mới</button>\r\n  <button (click)=\"dismiss()\" class=\"btn btn-default\" type=\"button\">Hủy bỏ</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/product/product-tag-assign-create/product-tag-assign-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductTagAssignCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_crud__ = __webpack_require__("./src/app/core/crud/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_common__ = __webpack_require__("./src/app/core/common/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__product_product_service__ = __webpack_require__("./src/app/modules/product/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core__ = __webpack_require__("./src/app/core/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__product_tag_product_tag_service__ = __webpack_require__("./src/app/modules/product-tag/product-tag.service.ts");
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








var ProductTagAssignCreateComponent = /** @class */ (function (_super) {
    __extends(ProductTagAssignCreateComponent, _super);
    function ProductTagAssignCreateComponent(service, modal, builder, tagService) {
        var _this = _super.call(this, service, modal, builder) || this;
        _this.tagService = tagService;
        return _this;
    }
    ProductTagAssignCreateComponent.prototype.onInit = function () {
    };
    ProductTagAssignCreateComponent.prototype.onDestroy = function () {
    };
    ProductTagAssignCreateComponent.prototype.loadAllTags = function () {
        return this.tagService.loadByParams({ product_id_add: this.model.id });
    };
    ProductTagAssignCreateComponent.prototype.buildForm = function () {
        return this.formBuilder.group({
            product_id: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null),
            ids: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            tags: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required)
        });
    };
    ProductTagAssignCreateComponent.prototype.initFieldForm = function () {
        return [
            __WEBPACK_IMPORTED_MODULE_4__core_common__["b" /* FieldForm */].createMultiSelect2('Thẻ sản phẩm', 'tags', 'Chọn nhiều', 'loadAllTags')
        ];
    };
    ProductTagAssignCreateComponent.prototype.loaded = function () {
        this.formGroup.controls['product_id'].setValue(this.model.id);
    };
    ProductTagAssignCreateComponent.prototype.onFormChanged = function () {
        var _this = this;
        _super.prototype.onFormChanged.call(this);
        this.formGroup.controls['tags'].valueChanges.subscribe(function (value) {
            if (value && value.length > 0) {
                _this.formGroup.controls['ids'].setValue(value.map(function (v) { return v.id; }));
            }
            else {
                _this.formGroup.controls['ids'].setValue(null);
            }
        });
    };
    ProductTagAssignCreateComponent.prototype.assign = function () {
        var _this = this;
        var ids = this.formGroup.controls['ids'].value;
        this.service.attachTags(this.model.id, ids).subscribe(function (res) {
            _this.service.toastSuccessfully('Thêm tag');
            _this.close(__WEBPACK_IMPORTED_MODULE_6__core__["j" /* ObjectUtil */].mergeValue(_this.model, res));
        }, function () { return _this.service.toastFailed('Thêm tag'); });
    };
    ProductTagAssignCreateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-product-tag-assign-create',
            template: __webpack_require__("./src/app/modules/product/product-tag-assign-create/product-tag-assign-create.component.html"),
            styles: [__webpack_require__("./src/app/modules/product/product-tag-assign-create/product-tag-assign-create.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_5__product_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_7__product_tag_product_tag_service__["a" /* ProductTagService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__product_product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__["a" /* BsModalRef */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_7__product_tag_product_tag_service__["a" /* ProductTagService */]])
    ], ProductTagAssignCreateComponent);
    return ProductTagAssignCreateComponent;
}(__WEBPACK_IMPORTED_MODULE_1__core_crud__["d" /* AbstractModalComponent */]));



/***/ }),

/***/ "./src/app/modules/product/product-tag-assign-list/product-tag-assign-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/product/product-tag-assign-list/product-tag-assign-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header bg-primary\">\r\n  <h4 class=\"modal-title pull-left\">Danh sách gắn tag</h4>\r\n  <button (click)=\"dismiss()\" aria-label=\"Close\" class=\"close pull-right\" type=\"button\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12 margin-bottom\">\r\n      <button (click)=\"createTag()\" class=\"btn btn-primary pull-right\" type=\"button\">Thêm tag</button>\r\n    </div>\r\n    <div class=\"col-xs-12\">\r\n      <table class=\"table table-bordered table-hover\">\r\n        <thead>\r\n        <tr>\r\n          <th style=\"width: 10%;\">#</th>\r\n          <th style=\"width: 70%;\">Tên tag</th>\r\n          <th style=\"width: 20%;\">Thao tác</th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n        <tr *ngFor=\"let item of list;let i = index\" class=\"odd\">\r\n          <td class=\"text-center\">{{i + 1}}</td>\r\n          <td>{{item.name}}</td>\r\n          <td class=\"text-center\">\r\n            <button (confirm)=\"detach(item.id)\" cancelText=\"No <i class='fa fa-remove'></i>\" class=\"btn btn-danger btn-sm\" confirmText=\"Yes <i class='fa fa-check'></i>\"\r\n                    mwlConfirmationPopover placement=\"top\" popoverMessage=\"Bạn thực sự muốn xóa?\"\r\n                    popoverTitle=\"Xóa\" type=\"button\" style=\"width: 30px; height: 30px; padding: 0;\">\r\n              <i class=\"fa fa-remove\"></i>\r\n            </button>\r\n          </td>\r\n        </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"panel-footer\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-6\">\r\n      <pagination (numPages)=\"pagination.numPages = $event\" (pageChanged)=\"pageChanged($event)\"\r\n                  [(ngModel)]=\"pagination.currentPage\" [boundaryLinks]=\"true\"\r\n                  [itemsPerPage]=\"pagination.itemsPerPage\" [maxSize]=\"pagination.maxSize\" [totalItems]=\"pagination.totalItems\"\r\n                  class=\"pagination-sm\"></pagination>\r\n    </div>\r\n    <div class=\"col-xs-6\">\r\n      <div class=\"box-go-to\">\r\n        <input [(ngModel)]=\"nextPage\" class=\"col-xs-2\" type=\"number\">\r\n        <span class=\"col-xs-1\">/</span>\r\n        <input [(ngModel)]=\"pagination.numPages\" class=\"col-xs-2\" disabled type=\"text\">\r\n        <div class=\"col-xs-4\">\r\n          <button (click)=\"goToPageNumber()\">Đến</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <button (click)=\"dismiss()\" class=\"btn btn-default\" type=\"button\">Hủy bỏ</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/product/product-tag-assign-list/product-tag-assign-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductTagAssignListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_crud__ = __webpack_require__("./src/app/core/crud/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__product_product_service__ = __webpack_require__("./src/app/modules/product/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_common__ = __webpack_require__("./src/app/core/common/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__product_tag_assign_create_product_tag_assign_create_component__ = __webpack_require__("./src/app/modules/product/product-tag-assign-create/product-tag-assign-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__product_product_meta__ = __webpack_require__("./src/app/modules/product/product.meta.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__product_tag_product_tag_service__ = __webpack_require__("./src/app/modules/product-tag/product-tag.service.ts");
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









var ProductTagAssignListComponent = /** @class */ (function (_super) {
    __extends(ProductTagAssignListComponent, _super);
    function ProductTagAssignListComponent(service, modalRef, modal, builder, tagService) {
        var _this = _super.call(this, service, modalRef, modal, builder) || this;
        _this.tagService = tagService;
        return _this;
    }
    ProductTagAssignListComponent.prototype.onInit = function () {
    };
    ProductTagAssignListComponent.prototype.onDestroy = function () {
    };
    ProductTagAssignListComponent.prototype.getTitle = function () {
        return 'Quản lý gán tag';
    };
    ProductTagAssignListComponent.prototype.getCreateModalComponent = function () {
        return __WEBPACK_IMPORTED_MODULE_6__product_tag_assign_create_product_tag_assign_create_component__["a" /* ProductTagAssignCreateComponent */];
    };
    ProductTagAssignListComponent.prototype.getEditModalComponent = function () {
        return null;
    };
    ProductTagAssignListComponent.prototype.getCreateModalComponentOptions = function () {
        return { 'class': 'modal-lg', ignoreBackdropClick: true };
    };
    ProductTagAssignListComponent.prototype.getEditModalComponentOptions = function () {
        return null;
    };
    ProductTagAssignListComponent.prototype.buildSearchForm = function () {
        return this.formBuilder.group({});
    };
    ProductTagAssignListComponent.prototype.initSearchForm = function () {
        return [];
    };
    ProductTagAssignListComponent.prototype.initNewModel = function () {
        var model = new __WEBPACK_IMPORTED_MODULE_7__product_product_meta__["a" /* ProductMeta */]();
        model.id = this.relatedModel.id;
        return model;
    };
    ProductTagAssignListComponent.prototype.loaded = function () {
    };
    ProductTagAssignListComponent.prototype.load = function () {
        var _this = this;
        var param = {
            product_id: this.relatedModel.id,
            limit: this.pagination.itemsPerPage,
            page: this.pagination.currentPage,
        };
        this.tagService.loadByPage(param).subscribe(function (res) {
            _this.nextPage = _this.pagination.currentPage;
            _this.list = res.data;
            _this.pagination.set(res);
        }, function () {
            _this.list = [];
            _this.pagination = new __WEBPACK_IMPORTED_MODULE_5__core_common__["a" /* AppPagination */]();
            _this.nextPage = _this.pagination.currentPage;
        });
    };
    ProductTagAssignListComponent.prototype.createTag = function () {
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
    ProductTagAssignListComponent.prototype.detach = function (item) {
        var _this = this;
        this.service.detachTags(this.relatedModel.id, item).subscribe(function (res) {
            _this.service.toastSuccessfully('Xóa tag');
            _this.load();
        }, function () { return _this.service.toastFailed('Xóa tag'); });
    };
    ProductTagAssignListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-product-tag-assign-list',
            template: __webpack_require__("./src/app/modules/product/product-tag-assign-list/product-tag-assign-list.component.html"),
            styles: [__webpack_require__("./src/app/modules/product/product-tag-assign-list/product-tag-assign-list.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_4__product_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_8__product_tag_product_tag_service__["a" /* ProductTagService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__product_product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__["a" /* BsModalRef */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__["b" /* BsModalService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_8__product_tag_product_tag_service__["a" /* ProductTagService */]])
    ], ProductTagAssignListComponent);
    return ProductTagAssignListComponent;
}(__WEBPACK_IMPORTED_MODULE_1__core_crud__["b" /* AbstractCRUDModalComponent */]));



/***/ }),

/***/ "./src/app/modules/product/product.modal.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductModalModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_confirmation_popover__ = __webpack_require__("./node_modules/angular-confirmation-popover/fesm5/angular-confirmation-popover.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_multiselect_dropdown__ = __webpack_require__("./node_modules/angular2-multiselect-dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_ckeditor__ = __webpack_require__("./node_modules/ng2-ckeditor/lib/ng2-ckeditor.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_ckeditor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_ckeditor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__product_create_product_create_component__ = __webpack_require__("./src/app/modules/product/product-create/product-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__product_edit_product_edit_component__ = __webpack_require__("./src/app/modules/product/product-edit/product-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ng_select_ng_select__ = __webpack_require__("./node_modules/@ng-select/ng-select/esm5/ng-select.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_toggle_switch__ = __webpack_require__("./node_modules/ngx-toggle-switch/ui-switch.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__article_article_module__ = __webpack_require__("./src/app/modules/article/article.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__product_image_product_image_module__ = __webpack_require__("./src/app/modules/product-image/product-image.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__product_tag_product_tag_modal_module__ = __webpack_require__("./src/app/modules/product-tag/product-tag.modal.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__article_comment_article_comment_module__ = __webpack_require__("./src/app/modules/article-comment/article-comment.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__product_warehouse_product_warehouse_module__ = __webpack_require__("./src/app/modules/product-warehouse/product-warehouse.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__product_import_product_import_component__ = __webpack_require__("./src/app/modules/product/product-import/product-import.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__product_related_product_related_module__ = __webpack_require__("./src/app/modules/product-related/product-related.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__product_tag_assign_list_product_tag_assign_list_component__ = __webpack_require__("./src/app/modules/product/product-tag-assign-list/product-tag-assign-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__product_tag_assign_create_product_tag_assign_create_component__ = __webpack_require__("./src/app/modules/product/product-tag-assign-create/product-tag-assign-create.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var ProductModalModule = /** @class */ (function () {
    function ProductModalModule() {
    }
    ProductModalModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__["e" /* PaginationModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__["f" /* PopoverModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4_angular_confirmation_popover__["a" /* ConfirmationPopoverModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__["d" /* ModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_9__ng_select_ng_select__["a" /* NgSelectModule */],
                __WEBPACK_IMPORTED_MODULE_6_ng2_ckeditor__["CKEditorModule"],
                __WEBPACK_IMPORTED_MODULE_10_ngx_toggle_switch__["a" /* UiSwitchModule */],
                __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__["g" /* TabsModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5_angular2_multiselect_dropdown__["a" /* AngularMultiSelectModule */],
                __WEBPACK_IMPORTED_MODULE_11__article_article_module__["a" /* ArticleModule */],
                __WEBPACK_IMPORTED_MODULE_14__article_comment_article_comment_module__["a" /* ArticleCommentModule */],
                __WEBPACK_IMPORTED_MODULE_12__product_image_product_image_module__["a" /* ProductImageModule */],
                __WEBPACK_IMPORTED_MODULE_13__product_tag_product_tag_modal_module__["a" /* ProductTagModalModule */],
                __WEBPACK_IMPORTED_MODULE_15__product_warehouse_product_warehouse_module__["a" /* ProductWarehouseModule */],
                __WEBPACK_IMPORTED_MODULE_17__product_related_product_related_module__["a" /* ProductRelatedModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__product_create_product_create_component__["a" /* ProductCreateComponent */], __WEBPACK_IMPORTED_MODULE_8__product_edit_product_edit_component__["a" /* ProductEditComponent */], __WEBPACK_IMPORTED_MODULE_16__product_import_product_import_component__["a" /* ProductImportComponent */], __WEBPACK_IMPORTED_MODULE_18__product_tag_assign_list_product_tag_assign_list_component__["a" /* ProductTagAssignListComponent */], __WEBPACK_IMPORTED_MODULE_19__product_tag_assign_create_product_tag_assign_create_component__["a" /* ProductTagAssignCreateComponent */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__product_create_product_create_component__["a" /* ProductCreateComponent */], __WEBPACK_IMPORTED_MODULE_8__product_edit_product_edit_component__["a" /* ProductEditComponent */], __WEBPACK_IMPORTED_MODULE_16__product_import_product_import_component__["a" /* ProductImportComponent */], __WEBPACK_IMPORTED_MODULE_18__product_tag_assign_list_product_tag_assign_list_component__["a" /* ProductTagAssignListComponent */], __WEBPACK_IMPORTED_MODULE_19__product_tag_assign_create_product_tag_assign_create_component__["a" /* ProductTagAssignCreateComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_7__product_create_product_create_component__["a" /* ProductCreateComponent */], __WEBPACK_IMPORTED_MODULE_8__product_edit_product_edit_component__["a" /* ProductEditComponent */], __WEBPACK_IMPORTED_MODULE_16__product_import_product_import_component__["a" /* ProductImportComponent */], __WEBPACK_IMPORTED_MODULE_18__product_tag_assign_list_product_tag_assign_list_component__["a" /* ProductTagAssignListComponent */], __WEBPACK_IMPORTED_MODULE_19__product_tag_assign_create_product_tag_assign_create_component__["a" /* ProductTagAssignCreateComponent */]
            ]
        })
    ], ProductModalModule);
    return ProductModalModule;
}());



/***/ }),

/***/ "./src/app/modules/product/product.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductModule", function() { return ProductModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_list_product_list_component__ = __webpack_require__("./src/app/modules/product/product-list/product-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_confirmation_popover__ = __webpack_require__("./node_modules/angular-confirmation-popover/fesm5/angular-confirmation-popover.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ng_select_ng_select__ = __webpack_require__("./node_modules/@ng-select/ng-select/esm5/ng-select.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_ckeditor__ = __webpack_require__("./node_modules/ng2-ckeditor/lib/ng2-ckeditor.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_ckeditor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_ckeditor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_toggle_switch__ = __webpack_require__("./node_modules/ngx-toggle-switch/ui-switch.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_multiselect_dropdown__ = __webpack_require__("./node_modules/angular2-multiselect-dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__product_modal_module__ = __webpack_require__("./src/app/modules/product/product.modal.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routing = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__product_list_product_list_component__["a" /* ProductListComponent */]
    }
];
var ProductModule = /** @class */ (function () {
    function ProductModule() {
    }
    ProductModule = __decorate([
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
                __WEBPACK_IMPORTED_MODULE_11__product_modal_module__["a" /* ProductModalModule */],
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__product_list_product_list_component__["a" /* ProductListComponent */]],
            entryComponents: [],
            exports: []
        })
    ], ProductModule);
    return ProductModule;
}());



/***/ })

});
//# sourceMappingURL=product.module.chunk.js.map