webpackJsonp(["province.module"],{

/***/ "./src/app/modules/province/province-import/province-import.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/province/province-import/province-import.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header bg-primary\">\r\n  <h4 class=\"modal-title pull-left\">Nhập file</h4>\r\n  <button (click)=\"dismiss()\" aria-label=\"Close\" class=\"close pull-right\" type=\"button\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n      <form [formGroup]=\"formGroup\" novalidate>\r\n        <div class=\"custom-file margin-bottom form-group\" [ngClass]=\"{ 'has-error': !formGroup.controls['file'].valid }\">\r\n          <label class=\"custom-file-label\" for=\"inputGroupFile01\">Chọn file</label>\r\n          <input (change)=\"onFileUploadChange($event)\" accept=\"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet\" aria-describedby=\"inputGroupFileAddon01\"\r\n          class=\"custom-file-input\" id=\"inputGroupFile01\" type=\"file\">\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <button (click)=\"import()\" [disabled]=\"formGroup.invalid\" class=\"btn btn-primary\" type=\"button\">Nhập liệu</button>\r\n  <button (click)=\"dismiss()\" class=\"btn btn-default\" type=\"button\">Hủy bỏ</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/province/province-import/province-import.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProvinceImportComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__province_service__ = __webpack_require__("./src/app/modules/province/province.service.ts");
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





var ProvinceImportComponent = /** @class */ (function (_super) {
    __extends(ProvinceImportComponent, _super);
    function ProvinceImportComponent(service, modal, builder) {
        return _super.call(this, service, modal, builder) || this;
    }
    ProvinceImportComponent.prototype.onInit = function () {
    };
    ProvinceImportComponent.prototype.onDestroy = function () {
    };
    ProvinceImportComponent.prototype.buildForm = function () {
        return this.formBuilder.group({
            name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null),
            file: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            note: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null)
        });
    };
    ProvinceImportComponent.prototype.onFileUploadChange = function (event) {
        var input = event.target;
        if (input.files && input.files[0]) {
            this.formGroup.controls['file'].setValue(input.files[0]);
        }
    };
    ProvinceImportComponent.prototype.initFieldForm = function () {
        return [];
    };
    ProvinceImportComponent.prototype.loaded = function () {
    };
    ProvinceImportComponent.prototype.import = function () {
        var _this = this;
        this.service.import(this.formGroup.get('file').value, this.formGroup.value).subscribe(function (res) {
            _this.service.toastSuccessfully('Nhập file', 'Thành công');
            _this.close({});
        }, function () { return _this.service.toastFailedCreated(); });
        ;
    };
    ProvinceImportComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-province-import',
            template: __webpack_require__("./src/app/modules/province/province-import/province-import.component.html"),
            styles: [__webpack_require__("./src/app/modules/province/province-import/province-import.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__province_service__["a" /* ProvinceService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__province_service__["a" /* ProvinceService */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__["a" /* BsModalRef */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]])
    ], ProvinceImportComponent);
    return ProvinceImportComponent;
}(__WEBPACK_IMPORTED_MODULE_4__core__["d" /* AbstractModalComponent */]));



/***/ }),

/***/ "./src/app/modules/province/province-list/province-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/province/province-list/province-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n  <div class=\"panel-heading\">\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12\">\r\n        <form (ngSubmit)=\"load()\" [formGroup]=\"searchForm\">\r\n          <div *ngFor=\"let f of searchControls\" class=\"form-group col-md-6\">\r\n            <ng-template [ngIf]=\"f.type == 'input'\">\r\n              <label [for]=\"f.formControl\">\r\n                {{ f.label }}\r\n              </label>\r\n              <input [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\"\r\n                [placeholder]=\"f.placeHolder\" [type]=\"f.typeof\" class=\"form-control\" />\r\n            </ng-template>\r\n            <ng-template [ngIf]=\"f.type == 'textarea'\">\r\n              <label [for]=\"f.formControl\">\r\n                {{ f.label }}\r\n              </label>\r\n              <textarea [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\"\r\n                [placeholder]=\"f.placeHolder\" class=\"form-control\">\r\n              </textarea>\r\n            </ng-template>\r\n            <ng-template [ngIf]=\"f.type == 'checkbox'\">\r\n              <div class=\"checkbox\">\r\n                <label>\r\n                  <input [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\"\r\n                    type=\"checkbox\" />\r\n                  {{ f.label }}\r\n                </label>\r\n              </div>\r\n            </ng-template>\r\n            <ng-template [ngIf]=\"f.type == 'select'\">\r\n              <label [for]=\"f.formControl\">\r\n                {{ f.label }}\r\n              </label>\r\n              <select [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\"\r\n                class=\"form-control\">\r\n                <option *ngFor=\"let option of f.data\" [value]=\"option['value']\">\r\n                  {{ option[\"name\"] }}\r\n                </option>\r\n              </select>\r\n            </ng-template>\r\n            <ng-template [ngIf]=\"f.type == 'select2'\">\r\n              <label [for]=\"f.formControl\">\r\n                {{ f.label }}\r\n              </label>\r\n              <angular2-multiselect [data]=\"f.data\" [formControlName]=\"f.formControl\" [id]=\"f.formControl\"\r\n                [settings]=\"f.config\">\r\n              </angular2-multiselect>\r\n            </ng-template>\r\n          </div>\r\n          <div class=\"col-md-12\">\r\n            <button class=\"btn btn-default\" type=\"submit\">Tìm kiếm</button>\r\n            <button (click)=\"removeFilter()\" class=\"btn btn-default\" type=\"button\">Xóa lọc</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <div class=\"col-xs-6 col-xs-offset-6 text-right\">\r\n        <button (click)=\"import()\" class=\"btn btn-info\" type=\"button\">\r\n          <i class=\"fa fa-upload\" style=\"margin-right: 5px;\"></i>Nhập file excel\r\n        </button>\r\n        <button (confirm)=\"truncate()\" cancelText=\"No <i class='fa fa-remove'></i>\" class=\"btn btn-danger\" confirmText=\"Yes <i class='fa fa-check'></i>\"\r\n          mwlConfirmationPopover placement=\"top\" popoverMessage=\"Bạn thực sự muốn xóa toàn bộ?\" popoverTitle=\"Xóa toàn bộ\" type=\"button\">\r\n          <i class=\"fa fa-remove\" style=\"margin-right: 5px;\"></i>Xóa toàn bộ\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <table class=\"table table-bordered table-hover\">\r\n    <thead>\r\n      <tr>\r\n        <th style=\"width: 10%;\">#</th>\r\n        <th style=\"width: 30%;\">Tỉnh/Thành phố</th>\r\n        <th style=\"width: 30%;\">Quận/Huyện</th>\r\n        <th style=\"width: 30%;\">Xã/Phường</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let item of list;let i = index\" class=\"odd\">\r\n        <td class=\"text-center\">{{i + 1}}</td>\r\n        <td>{{item.province.name}}</td>\r\n        <td>{{item.district.name}}</td>\r\n        <td>{{item.name}}</td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  <div class=\"panel-footer\">\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-6\">\r\n        <pagination (numPages)=\"pagination.numPages = $event\" (pageChanged)=\"pageChanged($event)\"\r\n          [(ngModel)]=\"pagination.currentPage\" [boundaryLinks]=\"true\" [itemsPerPage]=\"pagination.itemsPerPage\"\r\n          [maxSize]=\"pagination.maxSize\" [totalItems]=\"pagination.totalItems\" class=\"pagination-sm\"></pagination>\r\n      </div>\r\n      <div class=\"col-xs-6\">\r\n        <div class=\"box-go-to\">\r\n          <input [(ngModel)]=\"nextPage\" class=\"col-xs-2\" type=\"number\">\r\n          <span class=\"col-xs-1\">/</span>\r\n          <input [(ngModel)]=\"pagination.numPages\" class=\"col-xs-2\" disabled type=\"text\">\r\n          <div class=\"col-xs-4\">\r\n            <button (click)=\"goToPageNumber()\">Đến</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/province/province-list/province-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProvinceListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_crud__ = __webpack_require__("./src/app/core/crud/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__province_meta__ = __webpack_require__("./src/app/modules/province/province.meta.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__province_service__ = __webpack_require__("./src/app/modules/province/province.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_common__ = __webpack_require__("./src/app/core/common/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__province_import_province_import_component__ = __webpack_require__("./src/app/modules/province/province-import/province-import.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ward_ward_service__ = __webpack_require__("./src/app/modules/ward/ward.service.ts");
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










var ProvinceListComponent = /** @class */ (function (_super) {
    __extends(ProvinceListComponent, _super);
    function ProvinceListComponent(service, modal, builder, wardService) {
        return _super.call(this, service, modal, builder) || this;
    }
    ProvinceListComponent.prototype.onInit = function () {
        this.load();
    };
    ProvinceListComponent.prototype.onDestroy = function () {
    };
    ProvinceListComponent.prototype.getTitle = function () {
        return 'Quản lý địa chỉ';
    };
    ProvinceListComponent.prototype.getCreateModalComponent = function () {
        return null;
    };
    ProvinceListComponent.prototype.getEditModalComponent = function () {
        return null;
    };
    ProvinceListComponent.prototype.getCreateModalComponentOptions = function () {
        return { class: 'modal-lg', ignoreBackdropClick: true };
    };
    ProvinceListComponent.prototype.getEditModalComponentOptions = function () {
        return { class: 'modal-lg', ignoreBackdropClick: true };
    };
    ProvinceListComponent.prototype.buildSearchForm = function () {
        return this.formBuilder.group({
            search: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](null),
            status: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](null),
        });
    };
    ProvinceListComponent.prototype.initSearchForm = function () {
        return [
            __WEBPACK_IMPORTED_MODULE_6__core_common__["b" /* FieldForm */].createTextInput('Tìm kiếm theo tên', 'search', 'Nhập từ khóa'),
        ];
    };
    ProvinceListComponent.prototype.initNewModel = function () {
        return new __WEBPACK_IMPORTED_MODULE_4__province_meta__["a" /* ProvinceMeta */]();
    };
    ProvinceListComponent.prototype.load = function () {
        var _this = this;
        var params = __WEBPACK_IMPORTED_MODULE_9__core__["j" /* ObjectUtil */].combineValue({
            type: 'ward',
            limit: this.pagination.itemsPerPage,
            page: this.pagination.currentPage,
        }, this.searchForm.value, true);
        this.service.loadByPage(params).subscribe(function (res) {
            _this.list = res.data;
            _this.pagination.set(res);
        }, function () {
            console.log(123);
            _this.list = [];
            _this.pagination = new __WEBPACK_IMPORTED_MODULE_6__core_common__["a" /* AppPagination */]();
            _this.nextPage = _this.pagination.currentPage;
        });
    };
    ProvinceListComponent.prototype.import = function () {
        var _this = this;
        var config = { ignoreBackdropClick: true };
        var modalRef = this.modalService.show(__WEBPACK_IMPORTED_MODULE_7__province_import_province_import_component__["a" /* ProvinceImportComponent */], config);
        var modal = modalRef.content;
        var sub = modal.onHidden.subscribe(function (result) {
            if (result.success) {
                _this.load();
            }
            sub.unsubscribe();
        });
    };
    ProvinceListComponent.prototype.truncate = function () {
        var _this = this;
        this.service.truncate().subscribe(function (res) {
            _this.service.toastSuccessfully('Xóa bỏ');
            _this.load();
        }, function () { return _this.service.toastFailedEdited(); });
    };
    ProvinceListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-province',
            template: __webpack_require__("./src/app/modules/province/province-list/province-list.component.html"),
            styles: [__webpack_require__("./src/app/modules/province/province-list/province-list.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_5__province_service__["a" /* ProvinceService */], __WEBPACK_IMPORTED_MODULE_8__ward_ward_service__["a" /* WardService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__province_service__["a" /* ProvinceService */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__["b" /* BsModalService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_8__ward_ward_service__["a" /* WardService */]])
    ], ProvinceListComponent);
    return ProvinceListComponent;
}(__WEBPACK_IMPORTED_MODULE_1__core_crud__["a" /* AbstractCRUDComponent */]));



/***/ }),

/***/ "./src/app/modules/province/province.meta.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProvinceMeta; });
var ProvinceMeta = /** @class */ (function () {
    function ProvinceMeta() {
    }
    return ProvinceMeta;
}());



/***/ }),

/***/ "./src/app/modules/province/province.modal.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProvinceModalModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_confirmation_popover__ = __webpack_require__("./node_modules/angular-confirmation-popover/fesm5/angular-confirmation-popover.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_select_ng_select__ = __webpack_require__("./node_modules/@ng-select/ng-select/esm5/ng-select.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_toggle_switch__ = __webpack_require__("./node_modules/ngx-toggle-switch/ui-switch.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_ckeditor__ = __webpack_require__("./node_modules/ng2-ckeditor/lib/ng2-ckeditor.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_ckeditor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_ckeditor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_multiselect_dropdown__ = __webpack_require__("./node_modules/angular2-multiselect-dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__province_import_province_import_component__ = __webpack_require__("./src/app/modules/province/province-import/province-import.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var ProvinceModalModule = /** @class */ (function () {
    function ProvinceModalModule() {
    }
    ProvinceModalModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__["e" /* PaginationModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__["f" /* PopoverModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4_angular_confirmation_popover__["a" /* ConfirmationPopoverModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__["d" /* ModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5__ng_select_ng_select__["a" /* NgSelectModule */],
                __WEBPACK_IMPORTED_MODULE_7_ng2_ckeditor__["CKEditorModule"],
                __WEBPACK_IMPORTED_MODULE_6_ngx_toggle_switch__["a" /* UiSwitchModule */],
                __WEBPACK_IMPORTED_MODULE_8_angular2_multiselect_dropdown__["a" /* AngularMultiSelectModule */],
                __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__["g" /* TabsModule */].forRoot(),
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_9__province_import_province_import_component__["a" /* ProvinceImportComponent */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_9__province_import_province_import_component__["a" /* ProvinceImportComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_9__province_import_province_import_component__["a" /* ProvinceImportComponent */]],
        })
    ], ProvinceModalModule);
    return ProvinceModalModule;
}());



/***/ }),

/***/ "./src/app/modules/province/province.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProvinceModule", function() { return ProvinceModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__province_list_province_list_component__ = __webpack_require__("./src/app/modules/province/province-list/province-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_confirmation_popover__ = __webpack_require__("./node_modules/angular-confirmation-popover/fesm5/angular-confirmation-popover.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ng_select_ng_select__ = __webpack_require__("./node_modules/@ng-select/ng-select/esm5/ng-select.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_toggle_switch__ = __webpack_require__("./node_modules/ngx-toggle-switch/ui-switch.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_ckeditor__ = __webpack_require__("./node_modules/ng2-ckeditor/lib/ng2-ckeditor.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_ckeditor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ng2_ckeditor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_multiselect_dropdown__ = __webpack_require__("./node_modules/angular2-multiselect-dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__province_modal_module__ = __webpack_require__("./src/app/modules/province/province.modal.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routing = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__province_list_province_list_component__["a" /* ProvinceListComponent */]
    }
];
var ProvinceModule = /** @class */ (function () {
    function ProvinceModule() {
    }
    ProvinceModule = __decorate([
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
                __WEBPACK_IMPORTED_MODULE_11__province_modal_module__["a" /* ProvinceModalModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__province_list_province_list_component__["a" /* ProvinceListComponent */]],
            entryComponents: [],
        })
    ], ProvinceModule);
    return ProvinceModule;
}());



/***/ })

});
//# sourceMappingURL=province.module.chunk.js.map