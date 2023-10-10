webpackJsonp(["product-tag.module"],{

/***/ "./src/app/modules/product-tag/product-tag-list/product-tag-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/product-tag/product-tag-list/product-tag-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n  <div class=\"panel-heading\">\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12\">\r\n        <form (ngSubmit)=\"load()\" [formGroup]=\"searchForm\">\r\n          <div *ngFor=\"let f of searchControls\" class=\"form-group col-md-6\">\r\n            <ng-template [ngIf]=\"f.type == 'input'\">\r\n              <label [for]=\"f.formControl\">\r\n                {{ f.label }}\r\n              </label>\r\n              <input [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\"\r\n                [placeholder]=\"f.placeHolder\" [type]=\"f.typeof\" class=\"form-control\" />\r\n            </ng-template>\r\n            <ng-template [ngIf]=\"f.type == 'textarea'\">\r\n              <label [for]=\"f.formControl\">\r\n                {{ f.label }}\r\n              </label>\r\n              <textarea [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\"\r\n                [placeholder]=\"f.placeHolder\" class=\"form-control\">\r\n              </textarea>\r\n            </ng-template>\r\n            <ng-template [ngIf]=\"f.type == 'checkbox'\">\r\n              <div class=\"checkbox\">\r\n                <label>\r\n                  <input [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\"\r\n                    type=\"checkbox\" />\r\n                  {{ f.label }}\r\n                </label>\r\n              </div>\r\n            </ng-template>\r\n            <ng-template [ngIf]=\"f.type == 'select'\">\r\n              <label [for]=\"f.formControl\">\r\n                {{ f.label }}\r\n              </label>\r\n              <select [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\"\r\n                class=\"form-control\">\r\n                <option *ngFor=\"let option of f.data\" [value]=\"option['id']\">\r\n                  {{ option[\"name\"] }}\r\n                </option>\r\n              </select>\r\n            </ng-template>\r\n            <ng-template [ngIf]=\"f.type == 'select2'\">\r\n              <label [for]=\"f.formControl\">\r\n                {{ f.label }}\r\n              </label>\r\n              <angular2-multiselect [data]=\"f.data\" [formControlName]=\"f.formControl\" [id]=\"f.formControl\"\r\n                [settings]=\"f.config\">\r\n              </angular2-multiselect>\r\n            </ng-template>\r\n          </div>\r\n          <div class=\"col-md-12\">\r\n            <button class=\"btn btn-default\" type=\"submit\">Tìm kiếm</button>\r\n            <button (click)=\"removeFilter()\" class=\"btn btn-default\" type=\"button\">Xóa lọc</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <div class=\"col-xs-6 col-xs-offset-6\">\r\n        <button (click)=\"createProductTag()\" class=\"btn btn-primary pull-right\" type=\"button\">\r\n          <i class=\"fa fa-plus\"></i> Thêm mới\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"panel-body no-padding\">\r\n    <table class=\"table table-bordered table-hover\">\r\n      <thead>\r\n        <tr>\r\n          <th style=\"width: 10%\">#</th>\r\n          <th style=\"width: 35%\">Tên tag</th>\r\n          <th style=\"width: 20%\">Sản phẩm</th>\r\n          <th style=\"width: 15%\">Trạng thái</th>\r\n          <th style=\"width: 20%\">Thao tác</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let item of list; let i = index\" class=\"odd\">\r\n          <td style=\"text-align: center\">{{i + 1}}</td>\r\n          <td>\r\n            <p>\r\n              <a [href]=\"item.full_path\" target=\"_blank\">{{ item.name }}</a>\r\n            </p>\r\n            <p>{{ item.created_at | date : \"yyyy-MM-dd HH:mm:ss\" }}</p>\r\n          </td>\r\n          <td  class=\"text-center\">\r\n            <button (click)=\"showProduct(item)\" class=\"btn btn-default btn-sm\" type=\"button\">Xem</button>\r\n          </td>\r\n          <td class=\"text-center\">\r\n            <ui-switch (change)=\"onStatusChange(item,i,$event)\" *ngIf=\"item.status == 0\"></ui-switch>\r\n            <ui-switch (change)=\"onStatusChange(item,i,$event)\" *ngIf=\"item.status == 1\"\r\n                       [checked]=\"item.status\"></ui-switch>\r\n          </td>\r\n          <td class=\"text-center\">\r\n            <button (confirm)=\"upOrder(item)\" cancelText=\"No <i class='fa fa-remove'></i>\"\r\n              class=\"btn btn-default btn-sm\" confirmText=\"Yes <i class='fa fa-check'></i>\" mwlConfirmationPopover\r\n              placement=\"top\" popoverMessage=\"Bạn thực sự muốn tăng thứ tự?\" popoverTitle=\"Thay đổi thứ tự\"\r\n              type=\"button\" style=\"width: 30px; height: 30px; padding: 0;\">\r\n              <i class=\"fa fa-arrow-up\"></i>\r\n            </button>\r\n            <button (confirm)=\"downOrder(item)\" cancelText=\"No <i class='fa fa-remove'></i>\"\r\n              class=\"btn btn-default btn-sm\" confirmText=\"Yes <i class='fa fa-check'></i>\" mwlConfirmationPopover\r\n              placement=\"top\" popoverMessage=\"Bạn thực sự muốn giảm thứ tự?\" popoverTitle=\"Thay đổi thứ tự\"\r\n              type=\"button\" style=\"width: 30px; height: 30px; padding: 0;\">\r\n              <i class=\"fa fa-arrow-down\"></i>\r\n            </button>\r\n            <button (click)=\"editProductTag(item)\" class=\"btn btn-default btn-sm\" type=\"button\" style=\"width: 30px; height: 30px; padding: 0;\">\r\n              <i class=\"fa fa-pencil-square-o\"></i>\r\n            </button>\r\n            <button (confirm)=\"remove(item, i)\" cancelText=\"No <i class='fa fa-remove'></i>\"\r\n              class=\"btn btn-danger btn-sm\" confirmText=\"Yes <i class='fa fa-check'></i>\" mwlConfirmationPopover\r\n              placement=\"top\" popoverMessage=\"Bạn thực sự muốn xóa?\" popoverTitle=\"Xóa\" style=\"width: 30px; height: 30px; padding: 0;\" type=\"button\">\r\n              <i aria-hidden=\"true\" class=\"fa fa-remove\"></i>\r\n            </button>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n  <div class=\"panel-footer\">\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-6\">\r\n        <pagination (numPages)=\"pagination.numPages = $event\" (pageChanged)=\"pageChanged($event)\"\r\n          [(ngModel)]=\"pagination.currentPage\" [boundaryLinks]=\"true\" [itemsPerPage]=\"pagination.itemsPerPage\"\r\n          [maxSize]=\"pagination.maxSize\" [totalItems]=\"pagination.totalItems\" class=\"pagination-sm\"></pagination>\r\n      </div>\r\n      <div class=\"col-xs-6\">\r\n        <div class=\"box-go-to\">\r\n          <input [(ngModel)]=\"nextPage\" class=\"col-xs-2\" type=\"number\" />\r\n          <span class=\"col-xs-1\">/</span>\r\n          <input [(ngModel)]=\"pagination.numPages\" class=\"col-xs-2\" disabled type=\"text\" />\r\n          <div class=\"col-xs-4\">\r\n            <button (click)=\"goToPageNumber()\">Đến</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/product-tag/product-tag-list/product-tag-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductTagListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_crud__ = __webpack_require__("./src/app/core/crud/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_utils__ = __webpack_require__("./src/app/core/utils/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_common__ = __webpack_require__("./src/app/core/common/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__product_tag_service__ = __webpack_require__("./src/app/modules/product-tag/product-tag.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__product_tag_meta__ = __webpack_require__("./src/app/modules/product-tag/product-tag.meta.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__product_tag_create_product_tag_create_component__ = __webpack_require__("./src/app/modules/product-tag/product-tag-create/product-tag-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__product_tag_edit_product_tag_edit_component__ = __webpack_require__("./src/app/modules/product-tag/product-tag-edit/product-tag-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__product_tag_item_list_product_tag_item_list_component__ = __webpack_require__("./src/app/modules/product-tag/product-tag-item-list/product-tag-item-list.component.ts");
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











var ProductTagListComponent = /** @class */ (function (_super) {
    __extends(ProductTagListComponent, _super);
    function ProductTagListComponent(service, modal, builder) {
        return _super.call(this, service, modal, builder) || this;
    }
    ProductTagListComponent.prototype.onInit = function () {
        this.load();
    };
    ProductTagListComponent.prototype.onDestroy = function () {
    };
    ProductTagListComponent.prototype.getTitle = function () {
        return 'Quản lý tag sản phẩm';
    };
    ProductTagListComponent.prototype.getCreateModalComponent = function () {
        return __WEBPACK_IMPORTED_MODULE_8__product_tag_create_product_tag_create_component__["a" /* ProductTagCreateComponent */];
    };
    ProductTagListComponent.prototype.getEditModalComponent = function () {
        return __WEBPACK_IMPORTED_MODULE_9__product_tag_edit_product_tag_edit_component__["a" /* ProductTagEditComponent */];
    };
    ProductTagListComponent.prototype.getCreateModalComponentOptions = function () {
        return { class: 'modal-lg', ignoreBackdropClick: true };
    };
    ProductTagListComponent.prototype.getEditModalComponentOptions = function () {
        return { class: 'modal-lg', ignoreBackdropClick: true };
    };
    ProductTagListComponent.prototype.buildSearchForm = function () {
        return this.formBuilder.group({
            search: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](null),
        });
    };
    ProductTagListComponent.prototype.initSearchForm = function () {
        return [
            __WEBPACK_IMPORTED_MODULE_5__core_common__["b" /* FieldForm */].createTextInput('Tìm kiếm theo tên', 'search', 'Nhập từ khóa'),
        ];
    };
    ProductTagListComponent.prototype.initNewModel = function () {
        return new __WEBPACK_IMPORTED_MODULE_7__product_tag_meta__["a" /* ProductTagMeta */]();
    };
    ProductTagListComponent.prototype.onStatusChange = function (item, index, enable) {
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
    ProductTagListComponent.prototype.createProductTag = function () {
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
    ProductTagListComponent.prototype.editProductTag = function (item) {
        var _this = this;
        var modalOptions = Object.assign(this.defaultModalOptions(), this.getEditModalComponentOptions());
        var config = __WEBPACK_IMPORTED_MODULE_4__core_utils__["c" /* ObjectUtil */].combineValue({ ignoreBackdropClick: true }, modalOptions);
        var modalRef = this.modalService.show(this.getEditModalComponent(), config);
        var modal = modalRef.content;
        modal.setModel(item);
        modal.onHidden.subscribe(function (result) {
            if (result.success) {
                _this.load();
            }
        });
    };
    ProductTagListComponent.prototype.showProduct = function (item) {
        var _this = this;
        var modalRef = this.modalService.show(__WEBPACK_IMPORTED_MODULE_10__product_tag_item_list_product_tag_item_list_component__["a" /* ProductTagItemListComponent */], { ignoreBackdropClick: true, class: 'modal-lg' });
        var modal = modalRef.content;
        modal.setRelatedModel(item);
        var sub = modal.onHidden.subscribe(function (result) {
            if (result.success) {
                _this.load();
            }
            sub.unsubscribe();
        });
    };
    ProductTagListComponent.prototype.upOrder = function (item) {
        var _this = this;
        this.service.up(item.id).subscribe(function (res) {
            _this.service.toastSuccessfully('Tăng thứ tự');
            _this.load();
        }, function () { return _this.service.toastFailed('Tăng thứ tự'); });
    };
    ProductTagListComponent.prototype.downOrder = function (item) {
        var _this = this;
        this.service.down(item.id).subscribe(function (res) {
            _this.service.toastSuccessfully('Giảm thứ tự');
            _this.load();
        }, function () { return _this.service.toastFailed('Giảm thứ tự'); });
    };
    ProductTagListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-product-tag',
            template: __webpack_require__("./src/app/modules/product-tag/product-tag-list/product-tag-list.component.html"),
            styles: [__webpack_require__("./src/app/modules/product-tag/product-tag-list/product-tag-list.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_6__product_tag_service__["a" /* ProductTagService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__product_tag_service__["a" /* ProductTagService */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__["b" /* BsModalService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"]])
    ], ProductTagListComponent);
    return ProductTagListComponent;
}(__WEBPACK_IMPORTED_MODULE_1__core_crud__["a" /* AbstractCRUDComponent */]));



/***/ }),

/***/ "./src/app/modules/product-tag/product-tag.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductTagModule", function() { return ProductTagModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_tag_list_product_tag_list_component__ = __webpack_require__("./src/app/modules/product-tag/product-tag-list/product-tag-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_confirmation_popover__ = __webpack_require__("./node_modules/angular-confirmation-popover/fesm5/angular-confirmation-popover.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ng_select_ng_select__ = __webpack_require__("./node_modules/@ng-select/ng-select/esm5/ng-select.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_toggle_switch__ = __webpack_require__("./node_modules/ngx-toggle-switch/ui-switch.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_ckeditor__ = __webpack_require__("./node_modules/ng2-ckeditor/lib/ng2-ckeditor.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_ckeditor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ng2_ckeditor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_multiselect_dropdown__ = __webpack_require__("./node_modules/angular2-multiselect-dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__product_tag_modal_module__ = __webpack_require__("./src/app/modules/product-tag/product-tag.modal.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routing = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__product_tag_list_product_tag_list_component__["a" /* ProductTagListComponent */]
    }
];
var ProductTagModule = /** @class */ (function () {
    function ProductTagModule() {
    }
    ProductTagModule = __decorate([
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
                __WEBPACK_IMPORTED_MODULE_11__product_tag_modal_module__["a" /* ProductTagModalModule */],
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__product_tag_list_product_tag_list_component__["a" /* ProductTagListComponent */]],
            entryComponents: []
        })
    ], ProductTagModule);
    return ProductTagModule;
}());



/***/ })

});
//# sourceMappingURL=product-tag.module.chunk.js.map