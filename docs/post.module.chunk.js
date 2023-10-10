webpackJsonp(["post.module"],{

/***/ "./src/app/modules/post-related/post-related-create/post-related-create.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/post-related/post-related-create/post-related-create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header bg-primary\">\r\n  <h4 class=\"modal-title pull-left\">Thêm bài đăng liên quan</h4>\r\n  <button (click)=\"dismiss()\" aria-label=\"Close\" class=\"close pull-right\" type=\"button\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12 margin-bottom\">\r\n      <form (ngSubmit)=\"load()\" [formGroup]=\"formGroup\" novalidate>\r\n        <div *ngFor=\"let f of fields\" class=\"form-group col-md-6\">\r\n          <ng-template [ngIf]=\"f.type=='input'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{f.label}} <span *ngIf=\"f.typeof == 'number'\" style=\"font-weight: normal\">\r\n                ( {{formGroup.controls[f.formControl].value|number:'1.0-0'}} )\r\n              </span>\r\n            </label>\r\n            <input [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\"\r\n              [placeholder]=\"f.placeHolder\" [type]=\"f.typeof\" class=\"form-control\">\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type=='select'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{f.label}}\r\n            </label>\r\n            <select [formControlName]=\"f.formControl\" [id]=\"f.formControl\" class=\"form-control\">\r\n              <option *ngFor=\"let option of f.data\" [value]=\"option['id']\">{{option['name']}}</option>\r\n            </select>\r\n          </ng-template>\r\n        </div>\r\n        <div class=\"col-xs-12\">\r\n          <button [disabled]=\"!formGroup.valid\" class=\"btn btn-default\" type=\"submit\">Tìm kiếm</button>\r\n          <button (click)=\"removeFilter()\" class=\"btn btn-default\">Xóa lọc</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <table class=\"table table-bordered table-hover\">\r\n      <thead>\r\n        <tr>\r\n          <th style=\"width: 10%;\">#</th>\r\n          <th style=\"width: 20%;\">Ảnh</th>\r\n          <th style=\"width: 30%;\">Tiêu đề</th>\r\n          <th style=\"width: 20%;\">Danh mục</th>\r\n          <th style=\"width: 20%;\">Thao tác</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let item of list;let i = index\" class=\"odd\">\r\n          <td class=\"text-center\">{{i + 1}}</td>\r\n          <td class=\"text-center\">\r\n            <img [src]=\"item.image\" height=\"70px\">\r\n          </td>\r\n          <td>\r\n            {{item.name}}\r\n          </td>\r\n          <td>\r\n            {{item.category.name}}\r\n          </td>\r\n          <td class=\"text-center\">\r\n            <button (click)=\"addRelated(item)\" class=\"btn btn-success\" type=\"button\">Thêm</button>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <button (click)=\"dismiss()\" class=\"btn btn-default\" type=\"button\">Hủy bỏ</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/post-related/post-related-create/post-related-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostRelatedCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_crud__ = __webpack_require__("./src/app/core/crud/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_common__ = __webpack_require__("./src/app/core/common/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__post_related_service__ = __webpack_require__("./src/app/modules/post-related/post-related.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core__ = __webpack_require__("./src/app/core/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__post_category_post_category_service__ = __webpack_require__("./src/app/modules/post-category/post-category.service.ts");
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








var PostRelatedCreateComponent = /** @class */ (function (_super) {
    __extends(PostRelatedCreateComponent, _super);
    function PostRelatedCreateComponent(service, modal, builder, categoryService) {
        var _this = _super.call(this, service, modal, builder) || this;
        _this.categoryService = categoryService;
        _this.list = [];
        _this.formSearchPost = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            search: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(255)),
            category_id: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null),
        });
        _this.loadAllCategory();
        return _this;
    }
    PostRelatedCreateComponent.prototype.onInit = function () {
    };
    PostRelatedCreateComponent.prototype.onDestroy = function () {
    };
    PostRelatedCreateComponent.prototype.buildForm = function () {
        return this.formBuilder.group({
            search: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null),
            category_id: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null),
            post_id: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null),
            related_id: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null),
        });
    };
    PostRelatedCreateComponent.prototype.initFieldForm = function () {
        return [
            __WEBPACK_IMPORTED_MODULE_4__core_common__["b" /* FieldForm */].createTextInput('Tìm kiếm theo tên', 'search', ''),
            __WEBPACK_IMPORTED_MODULE_4__core_common__["b" /* FieldForm */].createSelect('Tìm kiếm danh mục', 'category_id', 'Chọn một', []),
        ];
    };
    PostRelatedCreateComponent.prototype.loadAllCategory = function () {
        var _this = this;
        return this.categoryService.loadAll().subscribe(function (value) {
            _this.fields[1].data = value;
        });
    };
    PostRelatedCreateComponent.prototype.loaded = function () {
        this.load();
    };
    PostRelatedCreateComponent.prototype.load = function () {
        var _this = this;
        this.formGroup.controls['post_id'].setValue(this.model.post_id);
        var param = __WEBPACK_IMPORTED_MODULE_6__core__["j" /* ObjectUtil */].combineValue({}, this.formGroup.value, true);
        this.service.loadPosts(param).subscribe(function (res) {
            _this.list = res;
        }, function () {
            _this.list = [];
        });
    };
    PostRelatedCreateComponent.prototype.addRelated = function (item) {
        var _this = this;
        var data = __WEBPACK_IMPORTED_MODULE_6__core__["j" /* ObjectUtil */].combineValue(this.model, this.formGroup.value);
        data['post_id'] = this.model.post_id;
        data['related_id'] = item.id;
        this.service.addRelated(data).subscribe(function (res) {
            _this.service.toastSuccessfully('Thêm sản phẩm');
            _this.load();
        }, function () { return _this.service.toastFailed('Thêm sản phẩm'); });
    };
    PostRelatedCreateComponent.prototype.removeFilter = function () {
        this.formGroup.reset();
        this.load();
    };
    PostRelatedCreateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-post-related-create',
            template: __webpack_require__("./src/app/modules/post-related/post-related-create/post-related-create.component.html"),
            styles: [__webpack_require__("./src/app/modules/post-related/post-related-create/post-related-create.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_5__post_related_service__["a" /* PostRelatedService */], __WEBPACK_IMPORTED_MODULE_7__post_category_post_category_service__["a" /* PostCategoryService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__post_related_service__["a" /* PostRelatedService */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__["a" /* BsModalRef */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_7__post_category_post_category_service__["a" /* PostCategoryService */]])
    ], PostRelatedCreateComponent);
    return PostRelatedCreateComponent;
}(__WEBPACK_IMPORTED_MODULE_1__core_crud__["d" /* AbstractModalComponent */]));



/***/ }),

/***/ "./src/app/modules/post-related/post-related-list/post-related-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/post-related/post-related-list/post-related-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header bg-primary\">\r\n  <h4 class=\"modal-title pull-left\">Bài đăng liên quan</h4>\r\n  <button (click)=\"dismiss()\" aria-label=\"Close\" class=\"close pull-right\" type=\"button\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n      <form (ngSubmit)=\"load()\" [formGroup]=\"searchForm\">\r\n        <div *ngFor=\"let f of searchControls\" class=\"form-group col-md-6\">\r\n          <ng-template [ngIf]=\"f.type == 'input'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{ f.label }}\r\n            </label>\r\n            <input [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\" [placeholder]=\"f.placeHolder\"\r\n                   [type]=\"f.typeof\" class=\"form-control\"/>\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type == 'select'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{ f.label }}\r\n            </label>\r\n            <select [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\"\r\n                    class=\"form-control\">\r\n              <option *ngFor=\"let option of f.data\" [value]=\"option['id']\">\r\n                {{ option[\"name\"] }}\r\n              </option>\r\n            </select>\r\n          </ng-template>\r\n        </div>\r\n        <div class=\"col-md-12\">\r\n          <button class=\"btn btn-default\" type=\"submit\">Tìm kiếm</button>\r\n          <button (click)=\"removeFilter()\" class=\"btn btn-default\" type=\"button\">Xóa lọc</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n    <div class=\"col-xs-12 margin-bottom\">\r\n      <button (click)=\"createRelated()\" class=\"btn btn-primary pull-right\" type=\"button\">\r\n        Thêm mới\r\n      </button>\r\n    </div>\r\n    <div class=\"col-xs-12\">\r\n      <table class=\"table table-bordered table-hover\">\r\n        <thead>\r\n        <tr>\r\n          <th style=\"width: 10%;\">#</th>\r\n          <th style=\"width: 20%;\">Ảnh</th>\r\n          <th style=\"width: 50%;\">Tiêu đề</th>\r\n          <th style=\"width: 20%;\">Thao tác</th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n        <tr *ngFor=\"let item of list;let i = index\" class=\"odd\">\r\n          <td class=\"text-center\">{{i + 1}}</td>\r\n          <td class=\"text-center\">\r\n            <img [src]=\"item.post.image\" height=\"70px\">\r\n          </td>\r\n          <td>\r\n            {{item.post.name}}\r\n          </td>\r\n          <td class=\"text-center\">\r\n            <button (confirm)=\"upOrder(item ,i)\" cancelText=\"No <i class='fa fa-remove'></i>\" class=\"btn btn-default btn-sm\" confirmText=\"Yes <i class='fa fa-check'></i>\"\r\n                    mwlConfirmationPopover placement=\"top\" popoverMessage=\"Bạn thực sự muốn tăng thứ tự?\"\r\n                    popoverTitle=\"Thay đổi thứ tự\" type=\"button\" style=\"width: 30px; height: 30px; padding: 0;\">\r\n              <i class=\"fa fa-arrow-up\"></i>\r\n            </button>\r\n            <button (confirm)=\"downOrder(item,i)\" cancelText=\"No <i class='fa fa-remove'></i>\" class=\"btn btn-default btn-sm\" confirmText=\"Yes <i class='fa fa-check'></i>\"\r\n                    mwlConfirmationPopover placement=\"top\" popoverMessage=\"Bạn thực sự muốn giảm thứ tự?\"\r\n                    popoverTitle=\"Thay đổi thứ tự\" type=\"button\" style=\"width: 30px; height: 30px; padding: 0;\">\r\n              <i class=\"fa fa-arrow-down\"></i>\r\n            </button>\r\n            <button (confirm)=\"remove(item,i)\" cancelText=\"No <i class='fa fa-remove'></i>\" style=\"width: 30px; height: 30px; padding: 0;margin-left: 5px\" confirmText=\"Yes <i class='fa fa-check'></i>\"\r\n                    mwlConfirmationPopover placement=\"top\" popoverMessage=\"Bạn thực sự muốn xóa?\"\r\n                    popoverTitle=\"Xóa\" type=\"button\">\r\n              <i class=\"fa fa-remove\"></i>\r\n            </button>\r\n          </td>\r\n        </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"panel-footer\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-6\">\r\n      <pagination (numPages)=\"pagination.numPages = $event\" (pageChanged)=\"pageChanged($event)\"\r\n                  [(ngModel)]=\"pagination.currentPage\" [boundaryLinks]=\"true\"\r\n                  [itemsPerPage]=\"pagination.itemsPerPage\" [maxSize]=\"pagination.maxSize\" [totalItems]=\"pagination.totalItems\"\r\n                  class=\"pagination-sm\"></pagination>\r\n    </div>\r\n    <div class=\"col-xs-6\">\r\n      <div class=\"box-go-to\">\r\n        <input [(ngModel)]=\"nextPage\" class=\"col-xs-2\" type=\"number\">\r\n        <span class=\"col-xs-1\">/</span>\r\n        <input [(ngModel)]=\"pagination.numPages\" class=\"col-xs-2\" disabled type=\"text\">\r\n        <div class=\"col-xs-4\">\r\n          <button (click)=\"goToPageNumber()\">Đến</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <button (click)=\"dismiss()\" class=\"btn btn-default\" type=\"button\">Đóng</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/post-related/post-related-list/post-related-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostRelatedListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_crud__ = __webpack_require__("./src/app/core/crud/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_common__ = __webpack_require__("./src/app/core/common/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__post_related_service__ = __webpack_require__("./src/app/modules/post-related/post-related.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__post_related_meta__ = __webpack_require__("./src/app/modules/post-related/post-related.meta.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__post_related_create_post_related_create_component__ = __webpack_require__("./src/app/modules/post-related/post-related-create/post-related-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__post_category_post_category_service__ = __webpack_require__("./src/app/modules/post-category/post-category.service.ts");
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










var PostRelatedListComponent = /** @class */ (function (_super) {
    __extends(PostRelatedListComponent, _super);
    function PostRelatedListComponent(service, modalRef, modal, builder, categoryService) {
        var _this = _super.call(this, service, modalRef, modal, builder) || this;
        _this.categoryService = categoryService;
        _this.loadAllCategory();
        return _this;
    }
    PostRelatedListComponent.prototype.onInit = function () {
    };
    PostRelatedListComponent.prototype.onDestroy = function () {
    };
    PostRelatedListComponent.prototype.getTitle = function () {
        return 'Quản lý sản phẩm liên quan';
    };
    PostRelatedListComponent.prototype.getCreateModalComponent = function () {
        return __WEBPACK_IMPORTED_MODULE_7__post_related_create_post_related_create_component__["a" /* PostRelatedCreateComponent */];
    };
    PostRelatedListComponent.prototype.getEditModalComponent = function () {
        return null;
    };
    PostRelatedListComponent.prototype.getCreateModalComponentOptions = function () {
        return { 'class': 'modal-lg', ignoreBackdropClick: true };
    };
    PostRelatedListComponent.prototype.getEditModalComponentOptions = function () {
        return null;
    };
    PostRelatedListComponent.prototype.buildSearchForm = function () {
        return this.formBuilder.group({
            search: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null),
            category_id: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null)
        });
    };
    PostRelatedListComponent.prototype.initSearchForm = function () {
        return [
            __WEBPACK_IMPORTED_MODULE_4__core_common__["b" /* FieldForm */].createTextInput('Tìm kiếm theo tên', 'search', ''),
            __WEBPACK_IMPORTED_MODULE_4__core_common__["b" /* FieldForm */].createSelect('Tìm kiếm danh mục', 'category_id', 'Chọn một', []),
        ];
    };
    PostRelatedListComponent.prototype.initNewModel = function () {
        var model = new __WEBPACK_IMPORTED_MODULE_6__post_related_meta__["a" /* PostRelatedMeta */]();
        model.post_id = this.relatedModel.id;
        return model;
    };
    PostRelatedListComponent.prototype.loadAllCategory = function () {
        var _this = this;
        return this.categoryService.loadAll().subscribe(function (value) {
            _this.searchControls[1].data = value;
        });
    };
    PostRelatedListComponent.prototype.loaded = function () {
    };
    PostRelatedListComponent.prototype.load = function () {
        var _this = this;
        var param = __WEBPACK_IMPORTED_MODULE_9__core__["j" /* ObjectUtil */].combineValue({}, this.searchForm.value, true);
        param['post_id'] = this.relatedModel.id,
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
    PostRelatedListComponent.prototype.upOrder = function (item) {
        var _this = this;
        this.service.up(item.id).subscribe(function (res) {
            _this.service.toastSuccessfully('Tăng thứ tự');
            _this.load();
        }, function () { return _this.service.toastFailed('Tăng thứ tự'); });
    };
    PostRelatedListComponent.prototype.downOrder = function (item) {
        var _this = this;
        this.service.down(item.id).subscribe(function (res) {
            _this.service.toastSuccessfully('Giảm thứ tự');
            _this.load();
        }, function () { return _this.service.toastFailed('Giảm thứ tự'); });
    };
    PostRelatedListComponent.prototype.createRelated = function () {
        var _this = this;
        var modalRef = this.modalService.show(this.getCreateModalComponent(), this.getCreateModalComponentOptions());
        var modal = modalRef.content;
        modal.setModel(this.initNewModel());
        var sub = modal.onHidden.subscribe(function (result) {
            _this.load();
            sub.unsubscribe();
        });
    };
    PostRelatedListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-post-related-list',
            template: __webpack_require__("./src/app/modules/post-related/post-related-list/post-related-list.component.html"),
            styles: [__webpack_require__("./src/app/modules/post-related/post-related-list/post-related-list.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_5__post_related_service__["a" /* PostRelatedService */], __WEBPACK_IMPORTED_MODULE_8__post_category_post_category_service__["a" /* PostCategoryService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__post_related_service__["a" /* PostRelatedService */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__["a" /* BsModalRef */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__["b" /* BsModalService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_8__post_category_post_category_service__["a" /* PostCategoryService */]])
    ], PostRelatedListComponent);
    return PostRelatedListComponent;
}(__WEBPACK_IMPORTED_MODULE_1__core_crud__["b" /* AbstractCRUDModalComponent */]));



/***/ }),

/***/ "./src/app/modules/post-related/post-related.meta.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostRelatedMeta; });
var PostRelatedMeta = /** @class */ (function () {
    function PostRelatedMeta() {
    }
    return PostRelatedMeta;
}());



/***/ }),

/***/ "./src/app/modules/post-related/post-related.modal.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostRelatedModalModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_confirmation_popover__ = __webpack_require__("./node_modules/angular-confirmation-popover/fesm5/angular-confirmation-popover.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_multiselect_dropdown__ = __webpack_require__("./node_modules/angular2-multiselect-dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_ckeditor__ = __webpack_require__("./node_modules/ng2-ckeditor/lib/ng2-ckeditor.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_ckeditor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_ckeditor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__post_related_create_post_related_create_component__ = __webpack_require__("./src/app/modules/post-related/post-related-create/post-related-create.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var PostRelatedModalModule = /** @class */ (function () {
    function PostRelatedModalModule() {
    }
    PostRelatedModalModule = __decorate([
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
                __WEBPACK_IMPORTED_MODULE_7__post_related_create_post_related_create_component__["a" /* PostRelatedCreateComponent */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__post_related_create_post_related_create_component__["a" /* PostRelatedCreateComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_7__post_related_create_post_related_create_component__["a" /* PostRelatedCreateComponent */]
            ]
        })
    ], PostRelatedModalModule);
    return PostRelatedModalModule;
}());



/***/ }),

/***/ "./src/app/modules/post-related/post-related.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostRelatedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_confirmation_popover__ = __webpack_require__("./node_modules/angular-confirmation-popover/fesm5/angular-confirmation-popover.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_toggle_switch__ = __webpack_require__("./node_modules/ngx-toggle-switch/ui-switch.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_multiselect_dropdown__ = __webpack_require__("./node_modules/angular2-multiselect-dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_ckeditor__ = __webpack_require__("./node_modules/ng2-ckeditor/lib/ng2-ckeditor.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_ckeditor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_ckeditor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__post_related_modal_module__ = __webpack_require__("./src/app/modules/post-related/post-related.modal.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__post_related_list_post_related_list_component__ = __webpack_require__("./src/app/modules/post-related/post-related-list/post-related-list.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var PostRelatedModule = /** @class */ (function () {
    function PostRelatedModule() {
    }
    PostRelatedModule = __decorate([
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
                __WEBPACK_IMPORTED_MODULE_8__post_related_modal_module__["a" /* PostRelatedModalModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_9__post_related_list_post_related_list_component__["a" /* PostRelatedListComponent */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_9__post_related_list_post_related_list_component__["a" /* PostRelatedListComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_9__post_related_list_post_related_list_component__["a" /* PostRelatedListComponent */]]
        })
    ], PostRelatedModule);
    return PostRelatedModule;
}());



/***/ }),

/***/ "./src/app/modules/post-related/post-related.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostRelatedService; });
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






var PostRelatedService = /** @class */ (function (_super) {
    __extends(PostRelatedService, _super);
    function PostRelatedService(http, toaster, title) {
        return _super.call(this, http, title, toaster, 'bài đăng liên quan', 'related_posts') || this;
    }
    PostRelatedService.prototype.addRelated = function (data) {
        return this.http.post("" + this.urlRestAPI, data)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["catchError"])(this.handleErrorRequest.bind(this)), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["map"])(function (res) { return res['data']; }));
    };
    PostRelatedService.prototype.loadPosts = function (params) {
        var parameters = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["HttpParams"]({
            fromObject: params
        });
        return this.toPipe(this.http.get(this.urlRestAPI + "/loadPost", { params: parameters }));
    };
    PostRelatedService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["HttpClient"], __WEBPACK_IMPORTED_MODULE_3_angular2_toaster__["b" /* ToasterService */], __WEBPACK_IMPORTED_MODULE_4__core_services__["d" /* TitleService */]])
    ], PostRelatedService);
    return PostRelatedService;
}(__WEBPACK_IMPORTED_MODULE_2__core_crud__["c" /* AbstractCRUDService */]));



/***/ }),

/***/ "./src/app/modules/post/post-create/post-create.component.css":
/***/ (function(module, exports) {

module.exports = ".row {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/modules/post/post-create/post-create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header bg-primary\">\r\n  <h4 class=\"modal-title pull-left\">Thêm mới bài đăng</h4>\r\n  <button (click)=\"dismiss()\" aria-label=\"Close\" class=\"close pull-right\" type=\"button\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n      <form [formGroup]=\"formGroup\" novalidate>\r\n        <div *ngFor=\"let f of fields\" [ngClass]=\"{ 'has-error': !formGroup.controls[f.formControl].valid }\"\r\n             class=\"form-group\">\r\n          <ng-template [ngIf]=\"f.type == 'input'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{ f.label }}\r\n              <span *ngIf=\"f.typeof == 'number'\" style=\"font-weight: normal\">\r\n                ({{formGroup.controls[f.formControl].value | number : \"1.0-0\"}})\r\n              </span>\r\n            </label>\r\n            <input [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\" [placeholder]=\"f.placeHolder\"\r\n                   [type]=\"f.typeof\" class=\"form-control\"/>\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type == 'textarea'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{ f.label }}\r\n            </label>\r\n            <textarea [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\" [placeholder]=\"f.placeHolder\"\r\n                      [rows]=\"5\" class=\"form-control\">\r\n            </textarea>\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type == 'file'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{ f.label }}\r\n            </label>\r\n            <input (change)=\"f.config['onFileChange'](formGroup, f.formControl, $event)\" [id]=\"f.formControl\" [name]=\"f.formControl\" [placeholder]=\"f.placeHolder\"\r\n                   accept=\"{{ f.config['accept'] }}\" class=\"form-control\"\r\n                   type=\"file\"/>\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type == 'checkbox'\">\r\n            <div class=\"checkbox\">\r\n              <label>\r\n                <input [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\" type=\"checkbox\"/>\r\n                {{ f.label }}\r\n              </label>\r\n            </div>\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type == 'select'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{ f.label }}\r\n            </label>\r\n            <select [formControlName]=\"f.formControl\" [id]=\"f.formControl\" class=\"form-control\">\r\n              <option *ngFor=\"let option of f.data\" [value]=\"option['id']\">\r\n                {{ option[\"name\"] }}\r\n              </option>\r\n            </select>\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type == 'select2'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{ f.label }}\r\n            </label>\r\n            <angular2-multiselect [data]=\"f.data\" [formControlName]=\"f.formControl\" [id]=\"f.formControl\"\r\n                                  [settings]=\"f.config\">\r\n            </angular2-multiselect>\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type == 'html'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{ f.label }}\r\n            </label>\r\n            <ckeditor [config]=\"f.config\" [formControlName]=\"f.formControl\" [id]=\"f.formControl\" debounce=\"500\">\r\n            </ckeditor>\r\n          </ng-template>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <button (click)=\"createWithImage()\" [disabled]=\"formGroup.invalid\" class=\"btn btn-primary\" type=\"button\">\r\n    Thêm mới\r\n  </button>\r\n  <button (click)=\"dismiss()\" class=\"btn btn-default\" type=\"button\">\r\n    Hủy bỏ\r\n  </button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/post/post-create/post-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__post_service__ = __webpack_require__("./src/app/modules/post/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__post_category_post_category_service__ = __webpack_require__("./src/app/modules/post-category/post-category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_crud__ = __webpack_require__("./src/app/core/crud/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_common__ = __webpack_require__("./src/app/core/common/index.ts");
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







var PostCreateComponent = /** @class */ (function (_super) {
    __extends(PostCreateComponent, _super);
    function PostCreateComponent(service, modal, builder, categoryService) {
        var _this = _super.call(this, service, modal, builder) || this;
        _this.categoryService = categoryService;
        return _this;
    }
    PostCreateComponent.prototype.onInit = function () {
    };
    PostCreateComponent.prototype.onDestroy = function () {
    };
    PostCreateComponent.prototype.loadAllCategories = function () {
        return this.categoryService.loadAll();
    };
    PostCreateComponent.prototype.buildForm = function () {
        return this.formBuilder.group({
            category: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            category_id: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null),
            category_slug: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null),
            summary: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null),
            name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(255), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern('[^ ].*$')]),
            image: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            content: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required)
        });
    };
    PostCreateComponent.prototype.initFieldForm = function () {
        return [
            __WEBPACK_IMPORTED_MODULE_6__core_common__["b" /* FieldForm */].createSingleSelect2('Danh mục', 'category', 'Chọn danh mục', 'loadAllCategories'),
            __WEBPACK_IMPORTED_MODULE_6__core_common__["b" /* FieldForm */].createTextInput('Tiêu đề bài đăng', 'name', 'Nhập tiêu đề'),
            __WEBPACK_IMPORTED_MODULE_6__core_common__["b" /* FieldForm */].createFileInput('Ảnh đại diện', 'image', 'Chọn ảnh', this.onFileUploadChange, 'image/*'),
            __WEBPACK_IMPORTED_MODULE_6__core_common__["b" /* FieldForm */].createHtmlInput('Tóm tắt ', 'summary', { height: '300px' }),
            __WEBPACK_IMPORTED_MODULE_6__core_common__["b" /* FieldForm */].createHtmlInput('Nội dung ', 'content', { height: '500px' }),
        ];
    };
    PostCreateComponent.prototype.loaded = function () {
    };
    PostCreateComponent.prototype.onFormChanged = function () {
        var _this = this;
        _super.prototype.onFormChanged.call(this);
        this.formGroup.controls['category'].valueChanges.subscribe(function (value) {
            if (value && value.length > 0) {
                _this.formGroup.controls['category_id'].setValue(value[0].id);
                _this.formGroup.controls['category_slug'].setValue(value[0].slug);
            }
        });
    };
    PostCreateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-post-create',
            template: __webpack_require__("./src/app/modules/post/post-create/post-create.component.html"),
            styles: [__webpack_require__("./src/app/modules/post/post-create/post-create.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__post_service__["a" /* PostService */], __WEBPACK_IMPORTED_MODULE_4__post_category_post_category_service__["a" /* PostCategoryService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__post_service__["a" /* PostService */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__["a" /* BsModalRef */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_4__post_category_post_category_service__["a" /* PostCategoryService */]])
    ], PostCreateComponent);
    return PostCreateComponent;
}(__WEBPACK_IMPORTED_MODULE_5__core_crud__["d" /* AbstractModalComponent */]));



/***/ }),

/***/ "./src/app/modules/post/post-edit/post-edit.component.css":
/***/ (function(module, exports) {

module.exports = ".row {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/modules/post/post-edit/post-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header bg-primary\">\r\n  <h4 class=\"modal-title pull-left\">Chỉnh sửa bài đăng</h4>\r\n  <button (click)=\"dismiss()\" aria-label=\"Close\" class=\"close pull-right\" type=\"button\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n      <form [formGroup]=\"formGroup\" novalidate>\r\n        <div *ngFor=\"let f of fields\" [ngClass]=\"{ 'has-error': !formGroup.controls[f.formControl].valid }\"\r\n             class=\"form-group\">\r\n          <ng-template [ngIf]=\"f.type == 'input'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{ f.label }}\r\n              <span *ngIf=\"f.typeof == 'number'\" style=\"font-weight: normal\">\r\n                ({{formGroup.controls[f.formControl].value | number : \"1.0-0\"}})\r\n              </span>\r\n            </label>\r\n            <input [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\" [placeholder]=\"f.placeHolder\"\r\n                   [type]=\"f.typeof\" class=\"form-control\"/>\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type == 'textarea'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{ f.label }}\r\n            </label>\r\n            <textarea [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\" [placeholder]=\"f.placeHolder\"\r\n                      [rows]=\"5\" class=\"form-control\">\r\n            </textarea>\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type == 'file'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{ f.label }}\r\n            </label>\r\n            <input (change)=\"f.config['onFileChange'](formGroup, f.formControl, $event)\" [id]=\"f.formControl\" [name]=\"f.formControl\" [placeholder]=\"f.placeHolder\"\r\n                   accept=\"{{ f.config['accept'] }}\" class=\"form-control\"\r\n                   type=\"file\"/>\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type == 'checkbox'\">\r\n            <div class=\"checkbox\">\r\n              <label>\r\n                <input [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\" type=\"checkbox\"/>\r\n                {{ f.label }}\r\n              </label>\r\n            </div>\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type == 'select'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{ f.label }}\r\n            </label>\r\n            <select [formControlName]=\"f.formControl\" [id]=\"f.formControl\" class=\"form-control\">\r\n              <option *ngFor=\"let option of f.data\" [value]=\"option['id']\">\r\n                {{ option[\"name\"] }}\r\n              </option>\r\n            </select>\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type == 'select2'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{ f.label }}\r\n            </label>\r\n            <angular2-multiselect [data]=\"f.data\" [formControlName]=\"f.formControl\" [id]=\"f.formControl\"\r\n                                  [settings]=\"f.config\">\r\n            </angular2-multiselect>\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type == 'html'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{ f.label }}\r\n            </label>\r\n            <ckeditor [config]=\"f.config\" [formControlName]=\"f.formControl\" [id]=\"f.formControl\" debounce=\"500\">\r\n            </ckeditor>\r\n          </ng-template>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <button (click)=\"editWithImage()\" [disabled]=\"formGroup.invalid\" class=\"btn btn-primary\" type=\"button\">Chỉnh sửa</button>\r\n  <button (click)=\"dismiss()\" class=\"btn btn-default\" type=\"button\">Hủy bỏ</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/post/post-edit/post-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__post_service__ = __webpack_require__("./src/app/modules/post/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__post_category_post_category_service__ = __webpack_require__("./src/app/modules/post-category/post-category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_crud__ = __webpack_require__("./src/app/core/crud/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_common__ = __webpack_require__("./src/app/core/common/index.ts");
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







var PostEditComponent = /** @class */ (function (_super) {
    __extends(PostEditComponent, _super);
    function PostEditComponent(service, modal, builder, categoryService) {
        var _this = _super.call(this, service, modal, builder) || this;
        _this.categoryService = categoryService;
        return _this;
    }
    PostEditComponent.prototype.onInit = function () {
    };
    PostEditComponent.prototype.onDestroy = function () {
    };
    PostEditComponent.prototype.loadAllCategories = function () {
        return this.categoryService.loadAll();
    };
    PostEditComponent.prototype.buildForm = function () {
        return this.formBuilder.group({
            category: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            category_id: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null),
            category_slug: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null),
            summary: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null),
            name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(255), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern('[^ ].*$')]),
            image: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            content: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required)
        });
    };
    PostEditComponent.prototype.initFieldForm = function () {
        return [
            __WEBPACK_IMPORTED_MODULE_6__core_common__["b" /* FieldForm */].createSingleSelect2('Danh mục', 'category', 'Chọn danh mục', 'loadAllCategories'),
            __WEBPACK_IMPORTED_MODULE_6__core_common__["b" /* FieldForm */].createTextInput('Tiêu đề bài đăng', 'name', 'Nhập tiêu đề'),
            __WEBPACK_IMPORTED_MODULE_6__core_common__["b" /* FieldForm */].createFileInput('Ảnh đại diện', 'image', 'Chọn ảnh', this.onFileUploadChange, 'image/*'),
            __WEBPACK_IMPORTED_MODULE_6__core_common__["b" /* FieldForm */].createHtmlInput('Tóm tắt ', 'summary', { height: '300px' }),
            __WEBPACK_IMPORTED_MODULE_6__core_common__["b" /* FieldForm */].createHtmlInput('Nội dung ', 'content', { height: '500px' }),
        ];
    };
    PostEditComponent.prototype.loaded = function () {
        this.formGroup.controls['content'].setValue(this.model.article.content);
    };
    PostEditComponent.prototype.onFormChanged = function () {
        var _this = this;
        _super.prototype.onFormChanged.call(this);
        this.formGroup.controls['category'].valueChanges.subscribe(function (value) {
            if (value && value.length > 0) {
                _this.formGroup.controls['category_id'].setValue(value[0].id);
                _this.formGroup.controls['category_slug'].setValue(value[0].slug);
            }
        });
    };
    PostEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-post-edit',
            template: __webpack_require__("./src/app/modules/post/post-edit/post-edit.component.html"),
            styles: [__webpack_require__("./src/app/modules/post/post-edit/post-edit.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__post_service__["a" /* PostService */], __WEBPACK_IMPORTED_MODULE_4__post_category_post_category_service__["a" /* PostCategoryService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__post_service__["a" /* PostService */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__["a" /* BsModalRef */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_4__post_category_post_category_service__["a" /* PostCategoryService */]])
    ], PostEditComponent);
    return PostEditComponent;
}(__WEBPACK_IMPORTED_MODULE_5__core_crud__["d" /* AbstractModalComponent */]));



/***/ }),

/***/ "./src/app/modules/post/post-list/Post-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/post/post-list/Post-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n  <div class=\"panel-heading\">\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12\">\r\n        <form (ngSubmit)=\"load()\" [formGroup]=\"searchForm\">\r\n          <div *ngFor=\"let f of searchControls\" class=\"form-group col-md-6\">\r\n            <ng-template [ngIf]=\"f.type == 'input'\">\r\n              <label [for]=\"f.formControl\">\r\n                {{ f.label }}\r\n              </label>\r\n              <input [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\" [placeholder]=\"f.placeHolder\"\r\n                     [type]=\"f.typeof\" class=\"form-control\"/>\r\n            </ng-template>\r\n            <ng-template [ngIf]=\"f.type == 'textarea'\">\r\n              <label [for]=\"f.formControl\">\r\n                {{ f.label }}\r\n              </label>\r\n              <textarea [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\"\r\n                        [placeholder]=\"f.placeHolder\" class=\"form-control\">\r\n              </textarea>\r\n            </ng-template>\r\n            <ng-template [ngIf]=\"f.type == 'checkbox'\">\r\n              <div class=\"checkbox\">\r\n                <label>\r\n                  <input [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\"\r\n                         type=\"checkbox\"/>\r\n                  {{ f.label }}\r\n                </label>\r\n              </div>\r\n            </ng-template>\r\n            <ng-template [ngIf]=\"f.type == 'select'\">\r\n              <label [for]=\"f.formControl\">\r\n                {{ f.label }}\r\n              </label>\r\n              <select [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\"\r\n                      class=\"form-control\">\r\n                <option *ngFor=\"let option of f.data\" [value]=\"option['id']\">\r\n                  {{ option[\"name\"] }}\r\n                </option>\r\n              </select>\r\n            </ng-template>\r\n            <ng-template [ngIf]=\"f.type == 'select2'\">\r\n              <label [for]=\"f.formControl\">\r\n                {{ f.label }}\r\n              </label>\r\n              <angular2-multiselect [data]=\"f.data\" [formControlName]=\"f.formControl\" [id]=\"f.formControl\"\r\n                                    [settings]=\"f.config\">\r\n              </angular2-multiselect>\r\n            </ng-template>\r\n          </div>\r\n          <div class=\"col-md-12\">\r\n            <button class=\"btn btn-default\" type=\"submit\">Tìm kiếm</button>\r\n            <button (click)=\"removeFilter()\" class=\"btn btn-default\" type=\"button\">Xóa lọc</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <div class=\"col-xs-6 col-xs-offset-6\">\r\n        <button (click)=\"createPost()\" class=\"btn btn-primary btn-sm pull-right\" type=\"button\">\r\n          <i class=\"fa fa-plus\"></i> Thêm mới\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"panel-body no-padding\">\r\n    <table class=\"table table-bordered table-hover\">\r\n      <thead>\r\n      <tr>\r\n        <th style=\"width: 10%;\">#</th>\r\n        <th style=\"width: 35%;\">Bài viết</th>\r\n        <th style=\"width: 15%;\">Ảnh</th>\r\n        <th style=\"width: 15%;\">Danh mục</th>\r\n        <th style=\"width: 10%;\">Trạng thái</th>\r\n        <th style=\"width: 15%;\">Thao tác</th>\r\n      </tr>\r\n      </thead>\r\n      <tbody>\r\n      <tr *ngFor=\"let item of list; let i = index\" class=\"odd\">\r\n        <td class=\"text-center\">{{i + 1}}</td>\r\n        <td>\r\n          <p style=\"font-size: 15px;\"> {{ item.name }}</p>\r\n          <p>{{item.created_at | date: 'yyyy-MM-dd HH:mm:ss'}}</p>\r\n          <a [href]=\"item.full_path\" target=\"_blank\" title=\"Xem bài viết\">\r\n            <button class=\"btn btn-default btn-xs\" type=\"button\">\r\n              <i class=\"fa fa-external-link\"></i>\r\n            </button>\r\n          </a>\r\n          <button class=\"btn btn-xs btn-default\" title=\"Bình luận\" (click)=\"showComment(item)\">\r\n            <i class=\"fa fa-comments-o\"></i>\r\n          </button>\r\n          <button class=\"btn btn-default btn-xs\" title=\"Tag\" (click)=\"showTags(item)\">\r\n            <i class=\"fa fa-tag\"></i>\r\n          </button>\r\n          <button class=\"btn btn-default btn-xs\" title=\"Bài viết liên quan\" (click)=\"showRelated(item)\">\r\n            <i aria-hidden=\"true\" class=\"fa fa-registered\"></i>\r\n          </button>\r\n        </td>\r\n        <td class=\"text-center\">\r\n          <img *ngIf=\"item.image\" [alt]=\"item.name\" [src]=\"item.image\" class=\"img-thumb\" width=\"100px\"/>\r\n        </td>\r\n        <td>\r\n          {{ item.category ? item.category.name : \"Không xác định\" }}\r\n        </td>\r\n        <td class=\"text-center\">\r\n          <ui-switch (change)=\"onStatusChange(item,i,$event)\" *ngIf=\"item.status == 0\"></ui-switch>\r\n          <ui-switch (change)=\"onStatusChange(item,i,$event)\" *ngIf=\"item.status == 1\"\r\n                     [checked]=\"item.status\"></ui-switch>\r\n        </td>\r\n        <td class=\"text-center\">\r\n          <button (confirm)=\"upOrder(item ,i)\" cancelText=\"No <i class='fa fa-remove'></i>\" class=\"btn btn-default btn-sm\" confirmText=\"Yes <i class='fa fa-check'></i>\"\r\n                  mwlConfirmationPopover placement=\"top\" popoverMessage=\"Bạn thực sự muốn tăng thứ tự?\"\r\n                  popoverTitle=\"Thay đổi thứ tự\" type=\"button\" style=\"width: 30px; height: 30px; padding: 0;\">\r\n            <i class=\"fa fa-arrow-up\"></i>\r\n          </button>\r\n          <button (confirm)=\"downOrder(item,i)\" cancelText=\"No <i class='fa fa-remove'></i>\" class=\"btn btn-default btn-sm\" confirmText=\"Yes <i class='fa fa-check'></i>\"\r\n                  mwlConfirmationPopover placement=\"top\" popoverMessage=\"Bạn thực sự muốn giảm thứ tự?\"\r\n                  popoverTitle=\"Thay đổi thứ tự\" type=\"button\" style=\"width: 30px; height: 30px; padding: 0;\">\r\n            <i class=\"fa fa-arrow-down\"></i>\r\n          </button>\r\n          <button (click)=\"editPost(item)\" class=\"btn btn-default btn-sm\" type=\"button\" style=\"width: 30px; height: 30px; padding: 0;\">\r\n            <i class=\"fa fa-pencil-square-o\"></i>\r\n          </button>\r\n          <button (confirm)=\"remove(item, i)\" cancelText=\"No <i class='fa fa-remove'></i>\" class=\"btn btn-danger btn-sm\" confirmText=\"Yes <i class='fa fa-check'></i>\"\r\n                  mwlConfirmationPopover placement=\"top\" popoverMessage=\"Bạn thực sự muốn xóa?\" popoverTitle=\"Xóa\"\r\n                  style=\"width: 30px; height: 30px; padding: 0;\" type=\"button\">\r\n            <i aria-hidden=\"true\" class=\"fa fa-remove\"></i>\r\n          </button>\r\n        </td>\r\n      </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n  <div class=\"panel-footer\">\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-6\">\r\n        <pagination (numPages)=\"pagination.numPages = $event\" (pageChanged)=\"pageChanged($event)\"\r\n                    [(ngModel)]=\"pagination.currentPage\" [boundaryLinks]=\"true\"\r\n                    [itemsPerPage]=\"pagination.itemsPerPage\"\r\n                    [maxSize]=\"pagination.maxSize\" [totalItems]=\"pagination.totalItems\" class=\"pagination-sm\"></pagination>\r\n      </div>\r\n      <div class=\"col-xs-6\">\r\n        <div class=\"box-go-to\">\r\n          <input [(ngModel)]=\"nextPage\" class=\"col-xs-2\" type=\"number\"/>\r\n          <span class=\"col-xs-1\">/</span>\r\n          <input [(ngModel)]=\"pagination.numPages\" class=\"col-xs-2\" disabled type=\"text\"/>\r\n          <div class=\"col-xs-4\">\r\n            <button (click)=\"goToPageNumber()\">Đến</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/post/post-list/post-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_crud__ = __webpack_require__("./src/app/core/crud/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__post_meta__ = __webpack_require__("./src/app/modules/post/post.meta.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__post_service__ = __webpack_require__("./src/app/modules/post/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__post_create_post_create_component__ = __webpack_require__("./src/app/modules/post/post-create/post-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__post_edit_post_edit_component__ = __webpack_require__("./src/app/modules/post/post-edit/post-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__core_common__ = __webpack_require__("./src/app/core/common/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__post_category_post_category_service__ = __webpack_require__("./src/app/modules/post-category/post-category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__post_tag_post_tag_service__ = __webpack_require__("./src/app/modules/post-tag/post-tag.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__core__ = __webpack_require__("./src/app/core/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__article_comment_article_comment_list_article_comment_list_component__ = __webpack_require__("./src/app/modules/article-comment/article-comment-list/article-comment-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__post_tag_assign_list_post_tag_assign_list_component__ = __webpack_require__("./src/app/modules/post/post-tag-assign-list/post-tag-assign-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__post_related_post_related_list_post_related_list_component__ = __webpack_require__("./src/app/modules/post-related/post-related-list/post-related-list.component.ts");
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















var PostListComponent = /** @class */ (function (_super) {
    __extends(PostListComponent, _super);
    function PostListComponent(service, modal, builder, categoryService, tagService) {
        var _this = _super.call(this, service, modal, builder) || this;
        _this.categoryService = categoryService;
        _this.tagService = tagService;
        return _this;
    }
    PostListComponent.prototype.onInit = function () {
        this.load();
    };
    PostListComponent.prototype.onDestroy = function () {
    };
    PostListComponent.prototype.getTitle = function () {
        return 'Quản lý bài đăng';
    };
    PostListComponent.prototype.getCreateModalComponent = function () {
        return __WEBPACK_IMPORTED_MODULE_6__post_create_post_create_component__["a" /* PostCreateComponent */];
    };
    PostListComponent.prototype.getEditModalComponent = function () {
        return __WEBPACK_IMPORTED_MODULE_7__post_edit_post_edit_component__["a" /* PostEditComponent */];
    };
    PostListComponent.prototype.getCreateModalComponentOptions = function () {
        return { 'class': 'modal-lg', ignoreBackdropClick: true };
    };
    PostListComponent.prototype.getEditModalComponentOptions = function () {
        return { 'class': 'modal-lg', ignoreBackdropClick: true };
    };
    PostListComponent.prototype.loadAllCategory = function () {
        return this.categoryService.loadAll();
    };
    PostListComponent.prototype.loadAllTag = function () {
        return this.tagService.loadAll();
    };
    PostListComponent.prototype.buildSearchForm = function () {
        return this.formBuilder.group({
            search: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](null),
            status: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](null),
            category_id: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](null),
            tag_id: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](null),
        });
    };
    PostListComponent.prototype.initSearchForm = function () {
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
    PostListComponent.prototype.initNewModel = function () {
        return new __WEBPACK_IMPORTED_MODULE_4__post_meta__["a" /* PostMeta */]();
    };
    PostListComponent.prototype.onStatusChange = function (item, index, enable) {
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
    PostListComponent.prototype.upOrder = function (item) {
        var _this = this;
        this.service.up(item.id).subscribe(function (res) {
            _this.service.toastSuccessfully('Tăng thứ tự');
            _this.load();
        }, function () { return _this.service.toastFailed('Tăng thứ tự'); });
    };
    PostListComponent.prototype.downOrder = function (item) {
        var _this = this;
        this.service.down(item.id).subscribe(function (res) {
            _this.service.toastSuccessfully('Giảm thứ tự');
            _this.load();
        }, function () { return _this.service.toastFailed('Giảm thứ tự'); });
    };
    PostListComponent.prototype.createPost = function () {
        var _this = this;
        var modalOptions = Object.assign(this.defaultModalOptions(), this.getCreateModalComponentOptions());
        var config = __WEBPACK_IMPORTED_MODULE_11__core__["j" /* ObjectUtil */].combineValue({ ignoreBackdropClick: true }, modalOptions);
        var modalRef = this.modalService.show(this.getCreateModalComponent(), config);
        var modal = modalRef.content;
        modal.setModel(this.initNewModel());
        modal.onHidden.subscribe(function (result) {
            if (result.success) {
                _this.load();
            }
        });
    };
    PostListComponent.prototype.editPost = function (item) {
        var _this = this;
        var modalOptions = Object.assign(this.defaultModalOptions(), this.getEditModalComponentOptions());
        var config = __WEBPACK_IMPORTED_MODULE_11__core__["j" /* ObjectUtil */].combineValue({ ignoreBackdropClick: true }, modalOptions);
        var modalRef = this.modalService.show(this.getEditModalComponent(), config);
        var modal = modalRef.content;
        modal.setModel(item);
        modal.onHidden.subscribe(function (result) {
            if (result.success) {
                _this.load();
            }
        });
    };
    PostListComponent.prototype.showComment = function (item) {
        var _this = this;
        var modalRef = this.modalService.show(__WEBPACK_IMPORTED_MODULE_12__article_comment_article_comment_list_article_comment_list_component__["a" /* ArticleCommentListComponent */], { ignoreBackdropClick: true, class: 'modal-lg' });
        var modal = modalRef.content;
        modal.setRelatedModel(item.article);
        var sub = modal.onHidden.subscribe(function (result) {
            if (result.success) {
                _this.load();
            }
            sub.unsubscribe();
        });
    };
    PostListComponent.prototype.showTags = function (item) {
        var _this = this;
        var modalRef = this.modalService.show(__WEBPACK_IMPORTED_MODULE_13__post_tag_assign_list_post_tag_assign_list_component__["a" /* PostTagAssignListComponent */], {
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
    PostListComponent.prototype.showRelated = function (item) {
        var _this = this;
        var modalRef = this.modalService.show(__WEBPACK_IMPORTED_MODULE_14__post_related_post_related_list_post_related_list_component__["a" /* PostRelatedListComponent */], { ignoreBackdropClick: true, class: 'modal-lg' });
        var modal = modalRef.content;
        modal.setRelatedModel(item);
        var sub = modal.onHidden.subscribe(function (result) {
            if (result.success) {
                _this.load();
            }
            sub.unsubscribe();
        });
    };
    PostListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-Post',
            template: __webpack_require__("./src/app/modules/post/post-list/Post-list.component.html"),
            styles: [__webpack_require__("./src/app/modules/post/post-list/Post-list.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_5__post_service__["a" /* PostService */], __WEBPACK_IMPORTED_MODULE_9__post_category_post_category_service__["a" /* PostCategoryService */], __WEBPACK_IMPORTED_MODULE_10__post_tag_post_tag_service__["a" /* PostTagService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__post_service__["a" /* PostService */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__["b" /* BsModalService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_9__post_category_post_category_service__["a" /* PostCategoryService */],
            __WEBPACK_IMPORTED_MODULE_10__post_tag_post_tag_service__["a" /* PostTagService */]])
    ], PostListComponent);
    return PostListComponent;
}(__WEBPACK_IMPORTED_MODULE_1__core_crud__["a" /* AbstractCRUDComponent */]));



/***/ }),

/***/ "./src/app/modules/post/post-tag-assign-create/post-tag-assign-create.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/post/post-tag-assign-create/post-tag-assign-create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header bg-primary\">\r\n  <h4 class=\"modal-title pull-left\">Thêm mới gán tag</h4>\r\n  <button (click)=\"dismiss()\" aria-label=\"Close\" class=\"close pull-right\" type=\"button\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n      <form [formGroup]=\"formGroup\" novalidate>\r\n        <div *ngFor=\"let f of fields\" class=\"form-group\">\r\n          <ng-template [ngIf]=\"f.type=='input'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{f.label}} <span\r\n              *ngIf=\"f.typeof == 'number'\" style=\"font-weight: normal\">\r\n              ( {{formGroup.controls[f.formControl].value|number:'1.0-0'}} )\r\n            </span>\r\n            </label>\r\n            <input [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\" [placeholder]=\"f.placeHolder\"\r\n                   [type]=\"f.typeof\" class=\"form-control\">\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type=='textarea'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{f.label}}\r\n            </label>\r\n            <textarea [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\" [placeholder]=\"f.placeHolder\"\r\n                      [rows]=\"5\" class=\"form-control\">\r\n          </textarea>\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type=='file'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{f.label}}\r\n            </label>\r\n            <input (change)=\"f.config['onFileChange'](formGroup,f.formControl,$event)\" [id]=\"f.formControl\" [name]=\"f.formControl\"\r\n                   [placeholder]=\"f.placeHolder\" accept=\"{{f.config['accept']}}\"\r\n                   class=\"form-control\"\r\n                   type=\"file\">\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type=='checkbox'\">\r\n            <div class=\"checkbox\">\r\n              <label>\r\n                <input [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\" type=\"checkbox\">\r\n                {{f.label}}\r\n              </label>\r\n            </div>\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type=='select'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{f.label}}\r\n            </label>\r\n            <select [formControlName]=\"f.formControl\" [id]=\"f.formControl\" class=\"form-control\">\r\n              <option *ngFor=\"let option of f.data\" [value]=\"option['id']\">{{option['name']}}</option>\r\n            </select>\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type == 'select2'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{ f.label }}\r\n            </label>\r\n            <angular2-multiselect [data]=\"f.data\" [formControlName]=\"f.formControl\" [id]=\"f.formControl\"\r\n                                  [settings]=\"f.config\">\r\n            </angular2-multiselect>\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type=='html'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{f.label}}\r\n            </label>\r\n            <ckeditor [config]=\"f.config\" [formControlName]=\"f.formControl\"\r\n                      [id]=\"f.formControl\" debounce=\"500\">\r\n            </ckeditor>\r\n          </ng-template>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <button (click)=\"assign()\" [disabled]=\"formGroup.invalid\" class=\"btn btn-primary\" type=\"button\">Thêm mới</button>\r\n  <button (click)=\"dismiss()\" class=\"btn btn-default\" type=\"button\">Hủy bỏ</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/post/post-tag-assign-create/post-tag-assign-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostTagAssignCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_crud__ = __webpack_require__("./src/app/core/crud/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_common__ = __webpack_require__("./src/app/core/common/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__post_post_service__ = __webpack_require__("./src/app/modules/post/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core__ = __webpack_require__("./src/app/core/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__post_tag_post_tag_service__ = __webpack_require__("./src/app/modules/post-tag/post-tag.service.ts");
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








var PostTagAssignCreateComponent = /** @class */ (function (_super) {
    __extends(PostTagAssignCreateComponent, _super);
    function PostTagAssignCreateComponent(service, modal, builder, tagService) {
        var _this = _super.call(this, service, modal, builder) || this;
        _this.tagService = tagService;
        return _this;
    }
    PostTagAssignCreateComponent.prototype.onInit = function () {
    };
    PostTagAssignCreateComponent.prototype.onDestroy = function () {
    };
    PostTagAssignCreateComponent.prototype.loadAllTags = function () {
        return this.tagService.loadByParams({ post_id_add: this.model.id });
    };
    PostTagAssignCreateComponent.prototype.buildForm = function () {
        return this.formBuilder.group({
            post_id: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null),
            ids: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            tags: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required)
        });
    };
    PostTagAssignCreateComponent.prototype.initFieldForm = function () {
        return [
            __WEBPACK_IMPORTED_MODULE_4__core_common__["b" /* FieldForm */].createMultiSelect2('Thẻ sản phẩm', 'tags', 'Chọn nhiều', 'loadAllTags')
        ];
    };
    PostTagAssignCreateComponent.prototype.loaded = function () {
        this.formGroup.controls['post_id'].setValue(this.model.id);
    };
    PostTagAssignCreateComponent.prototype.onFormChanged = function () {
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
    PostTagAssignCreateComponent.prototype.assign = function () {
        var _this = this;
        var ids = this.formGroup.controls['ids'].value;
        this.service.attachTags(this.model.id, ids).subscribe(function (res) {
            _this.service.toastSuccessfully('Thêm tag');
            _this.close(__WEBPACK_IMPORTED_MODULE_6__core__["j" /* ObjectUtil */].mergeValue(_this.model, res));
        }, function () { return _this.service.toastFailed('Thêm tag'); });
    };
    PostTagAssignCreateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-post-tag-assign-create',
            template: __webpack_require__("./src/app/modules/post/post-tag-assign-create/post-tag-assign-create.component.html"),
            styles: [__webpack_require__("./src/app/modules/post/post-tag-assign-create/post-tag-assign-create.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_5__post_post_service__["a" /* PostService */], __WEBPACK_IMPORTED_MODULE_7__post_tag_post_tag_service__["a" /* PostTagService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__post_post_service__["a" /* PostService */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__["a" /* BsModalRef */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_7__post_tag_post_tag_service__["a" /* PostTagService */]])
    ], PostTagAssignCreateComponent);
    return PostTagAssignCreateComponent;
}(__WEBPACK_IMPORTED_MODULE_1__core_crud__["d" /* AbstractModalComponent */]));



/***/ }),

/***/ "./src/app/modules/post/post-tag-assign-list/post-tag-assign-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/post/post-tag-assign-list/post-tag-assign-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header bg-primary\">\r\n  <h4 class=\"modal-title pull-left\">Danh sách gán tag</h4>\r\n  <button (click)=\"dismiss()\" aria-label=\"Close\" class=\"close pull-right\" type=\"button\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12 margin-bottom\">\r\n      <button (click)=\"createTag()\" class=\"btn btn-primary pull-right\" type=\"button\">Thêm tag</button>\r\n    </div>\r\n    <div class=\"col-xs-12\">\r\n      <table class=\"table table-bordered table-hover\">\r\n        <thead>\r\n        <tr>\r\n          <th style=\"width: 10%;\">#</th>\r\n          <th style=\"width: 70%;\">Tên tag</th>\r\n          <th style=\"width: 20%;\">Thao tác</th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n        <tr *ngFor=\"let item of list;let i = index\" class=\"odd\">\r\n          <td class=\"text-center\">{{i + 1}}</td>\r\n          <td>{{item.name}}</td>\r\n          <td class=\"text-center\">\r\n            <button (confirm)=\"detach(item.id)\" cancelText=\"No <i class='fa fa-remove'></i>\" class=\"btn btn-danger btn-sm\" confirmText=\"Yes <i class='fa fa-check'></i>\"\r\n                    mwlConfirmationPopover placement=\"top\" popoverMessage=\"Bạn thực sự muốn xóa?\"\r\n                    popoverTitle=\"Xóa\" type=\"button\" style=\"width: 30px; height: 30px; padding: 0;\">\r\n              <i class=\"fa fa-remove\"></i>\r\n            </button>\r\n          </td>\r\n        </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"panel-footer\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-6\">\r\n      <pagination (numPages)=\"pagination.numPages = $event\" (pageChanged)=\"pageChanged($event)\"\r\n                  [(ngModel)]=\"pagination.currentPage\" [boundaryLinks]=\"true\"\r\n                  [itemsPerPage]=\"pagination.itemsPerPage\" [maxSize]=\"pagination.maxSize\" [totalItems]=\"pagination.totalItems\"\r\n                  class=\"pagination-sm\"></pagination>\r\n    </div>\r\n    <div class=\"col-xs-6\">\r\n      <div class=\"box-go-to\">\r\n        <input [(ngModel)]=\"nextPage\" class=\"col-xs-2\" type=\"number\">\r\n        <span class=\"col-xs-1\">/</span>\r\n        <input [(ngModel)]=\"pagination.numPages\" class=\"col-xs-2\" disabled type=\"text\">\r\n        <div class=\"col-xs-4\">\r\n          <button (click)=\"goToPageNumber()\">Đến</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <button (click)=\"dismiss()\" class=\"btn btn-default\" type=\"button\">Hủy bỏ</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/post/post-tag-assign-list/post-tag-assign-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostTagAssignListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_crud__ = __webpack_require__("./src/app/core/crud/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__post_tag_post_tag_service__ = __webpack_require__("./src/app/modules/post-tag/post-tag.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__post_service__ = __webpack_require__("./src/app/modules/post/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_common__ = __webpack_require__("./src/app/core/common/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__post_tag_assign_create_post_tag_assign_create_component__ = __webpack_require__("./src/app/modules/post/post-tag-assign-create/post-tag-assign-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__post_meta__ = __webpack_require__("./src/app/modules/post/post.meta.ts");
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









var PostTagAssignListComponent = /** @class */ (function (_super) {
    __extends(PostTagAssignListComponent, _super);
    function PostTagAssignListComponent(service, modalRef, modal, builder, tagService) {
        var _this = _super.call(this, service, modalRef, modal, builder) || this;
        _this.tagService = tagService;
        return _this;
    }
    PostTagAssignListComponent.prototype.onInit = function () {
    };
    PostTagAssignListComponent.prototype.onDestroy = function () {
    };
    PostTagAssignListComponent.prototype.getTitle = function () {
        return 'Quản lý gán tag';
    };
    PostTagAssignListComponent.prototype.getCreateModalComponent = function () {
        return __WEBPACK_IMPORTED_MODULE_7__post_tag_assign_create_post_tag_assign_create_component__["a" /* PostTagAssignCreateComponent */];
    };
    PostTagAssignListComponent.prototype.getEditModalComponent = function () {
        return null;
    };
    PostTagAssignListComponent.prototype.getCreateModalComponentOptions = function () {
        return { 'class': 'modal-lg', ignoreBackdropClick: true };
    };
    PostTagAssignListComponent.prototype.getEditModalComponentOptions = function () {
        return null;
    };
    PostTagAssignListComponent.prototype.buildSearchForm = function () {
        return this.formBuilder.group({});
    };
    PostTagAssignListComponent.prototype.initSearchForm = function () {
        return [];
    };
    PostTagAssignListComponent.prototype.initNewModel = function () {
        var model = new __WEBPACK_IMPORTED_MODULE_8__post_meta__["a" /* PostMeta */]();
        model.id = this.relatedModel.id;
        return model;
    };
    PostTagAssignListComponent.prototype.loaded = function () {
    };
    PostTagAssignListComponent.prototype.load = function () {
        var _this = this;
        var param = {
            post_id: this.relatedModel.id,
            limit: this.pagination.itemsPerPage,
            page: this.pagination.currentPage,
        };
        this.tagService.loadByPage(param).subscribe(function (res) {
            _this.nextPage = _this.pagination.currentPage;
            _this.list = res.data;
            _this.pagination.set(res);
        }, function () {
            _this.list = [];
            _this.pagination = new __WEBPACK_IMPORTED_MODULE_6__core_common__["a" /* AppPagination */]();
            _this.nextPage = _this.pagination.currentPage;
        });
    };
    PostTagAssignListComponent.prototype.createTag = function () {
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
    PostTagAssignListComponent.prototype.detach = function (item) {
        var _this = this;
        this.service.detachTags(this.relatedModel.id, item).subscribe(function (res) {
            _this.service.toastSuccessfully('Xóa tag');
            _this.load();
        }, function () { return _this.service.toastFailed('Xóa tag'); });
    };
    PostTagAssignListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-post-tag-assign-list',
            template: __webpack_require__("./src/app/modules/post/post-tag-assign-list/post-tag-assign-list.component.html"),
            styles: [__webpack_require__("./src/app/modules/post/post-tag-assign-list/post-tag-assign-list.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_5__post_service__["a" /* PostService */], __WEBPACK_IMPORTED_MODULE_4__post_tag_post_tag_service__["a" /* PostTagService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__post_service__["a" /* PostService */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__["a" /* BsModalRef */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__["b" /* BsModalService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_4__post_tag_post_tag_service__["a" /* PostTagService */]])
    ], PostTagAssignListComponent);
    return PostTagAssignListComponent;
}(__WEBPACK_IMPORTED_MODULE_1__core_crud__["b" /* AbstractCRUDModalComponent */]));



/***/ }),

/***/ "./src/app/modules/post/post.meta.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostMeta; });
var PostMeta = /** @class */ (function () {
    function PostMeta() {
    }
    return PostMeta;
}());



/***/ }),

/***/ "./src/app/modules/post/post.modal.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostModalModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_confirmation_popover__ = __webpack_require__("./node_modules/angular-confirmation-popover/fesm5/angular-confirmation-popover.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_multiselect_dropdown__ = __webpack_require__("./node_modules/angular2-multiselect-dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_ckeditor__ = __webpack_require__("./node_modules/ng2-ckeditor/lib/ng2-ckeditor.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_ckeditor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_ckeditor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__post_create_post_create_component__ = __webpack_require__("./src/app/modules/post/post-create/post-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__post_edit_post_edit_component__ = __webpack_require__("./src/app/modules/post/post-edit/post-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ng_select_ng_select__ = __webpack_require__("./node_modules/@ng-select/ng-select/esm5/ng-select.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_toggle_switch__ = __webpack_require__("./node_modules/ngx-toggle-switch/ui-switch.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__article_comment_article_comment_module__ = __webpack_require__("./src/app/modules/article-comment/article-comment.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__post_related_post_related_module__ = __webpack_require__("./src/app/modules/post-related/post-related.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__post_tag_assign_list_post_tag_assign_list_component__ = __webpack_require__("./src/app/modules/post/post-tag-assign-list/post-tag-assign-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__post_tag_assign_create_post_tag_assign_create_component__ = __webpack_require__("./src/app/modules/post/post-tag-assign-create/post-tag-assign-create.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var PostModalModule = /** @class */ (function () {
    function PostModalModule() {
    }
    PostModalModule = __decorate([
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
                __WEBPACK_IMPORTED_MODULE_11__article_comment_article_comment_module__["a" /* ArticleCommentModule */],
                __WEBPACK_IMPORTED_MODULE_12__post_related_post_related_module__["a" /* PostRelatedModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__post_create_post_create_component__["a" /* PostCreateComponent */], __WEBPACK_IMPORTED_MODULE_8__post_edit_post_edit_component__["a" /* PostEditComponent */], __WEBPACK_IMPORTED_MODULE_13__post_tag_assign_list_post_tag_assign_list_component__["a" /* PostTagAssignListComponent */], __WEBPACK_IMPORTED_MODULE_14__post_tag_assign_create_post_tag_assign_create_component__["a" /* PostTagAssignCreateComponent */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__post_create_post_create_component__["a" /* PostCreateComponent */], __WEBPACK_IMPORTED_MODULE_8__post_edit_post_edit_component__["a" /* PostEditComponent */], __WEBPACK_IMPORTED_MODULE_13__post_tag_assign_list_post_tag_assign_list_component__["a" /* PostTagAssignListComponent */], __WEBPACK_IMPORTED_MODULE_14__post_tag_assign_create_post_tag_assign_create_component__["a" /* PostTagAssignCreateComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_7__post_create_post_create_component__["a" /* PostCreateComponent */], __WEBPACK_IMPORTED_MODULE_8__post_edit_post_edit_component__["a" /* PostEditComponent */], __WEBPACK_IMPORTED_MODULE_13__post_tag_assign_list_post_tag_assign_list_component__["a" /* PostTagAssignListComponent */], __WEBPACK_IMPORTED_MODULE_14__post_tag_assign_create_post_tag_assign_create_component__["a" /* PostTagAssignCreateComponent */]
            ]
        })
    ], PostModalModule);
    return PostModalModule;
}());



/***/ }),

/***/ "./src/app/modules/post/post.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostModule", function() { return PostModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__post_list_post_list_component__ = __webpack_require__("./src/app/modules/post/post-list/post-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_confirmation_popover__ = __webpack_require__("./node_modules/angular-confirmation-popover/fesm5/angular-confirmation-popover.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ng_select_ng_select__ = __webpack_require__("./node_modules/@ng-select/ng-select/esm5/ng-select.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_ckeditor__ = __webpack_require__("./node_modules/ng2-ckeditor/lib/ng2-ckeditor.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_ckeditor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_ckeditor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_toggle_switch__ = __webpack_require__("./node_modules/ngx-toggle-switch/ui-switch.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_multiselect_dropdown__ = __webpack_require__("./node_modules/angular2-multiselect-dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__post_modal_module__ = __webpack_require__("./src/app/modules/post/post.modal.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routing = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__post_list_post_list_component__["a" /* PostListComponent */]
    }
];
var PostModule = /** @class */ (function () {
    function PostModule() {
    }
    PostModule = __decorate([
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
                __WEBPACK_IMPORTED_MODULE_11__post_modal_module__["a" /* PostModalModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__post_list_post_list_component__["a" /* PostListComponent */]],
            entryComponents: [],
            exports: []
        })
    ], PostModule);
    return PostModule;
}());



/***/ })

});
//# sourceMappingURL=post.module.chunk.js.map