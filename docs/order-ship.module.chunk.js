webpackJsonp(["order-ship.module"],{

/***/ "./src/app/modules/order-ship/order-ship-create-result/order-ship-create-result.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/order-ship/order-ship-create-result/order-ship-create-result.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header bg-primary\">\r\n  <h4 class=\"modal-title pull-left\">Vận đơn mới</h4>\r\n  <button (click)=\"dismiss()\" aria-label=\"Close\" class=\"close pull-right\" type=\"button\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12 margin-bottom\">\r\n      <button (click)=\"printShipBill()\" class=\"btn btn-default margin-r-5\">\r\n        <i class=\"fa fa-file-powerpoint-o\"></i> In phiếu giao\r\n      </button>\r\n    </div>\r\n    <div class=\"col-xs-12 table-responsive\">\r\n      <table class=\"table table-bordered\">\r\n        <thead>\r\n          <tr>\r\n            <th><input (change)=\"selectAll()\" [checked]=\"statusSelectAll\" class=\"checkbox\" type=\"checkbox\"></th>\r\n            <th>Sản phẩm</th>\r\n            <th>ID</th>\r\n            <th>ĐVVC</th>\r\n            <th>Mã VC</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let item of list;let i=index\">\r\n            <td><input (change)=\"selectItem(item,i)\" [checked]=\"selectors[i]\" class=\"checkbox\" type=\"checkbox\"></td>\r\n            <td>\r\n              <table class=\"table table-bordered\" style=\"margin: 0;\">\r\n                <tbody>\r\n                  <tr *ngFor=\"let p of item.details\">\r\n                    <td>{{p.product_name}}</td>\r\n                    <td>{{p.size}}, {{p.color}}</td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </td>\r\n            <td>{{item.code}}</td>\r\n            <td>{{item.shipping?.unit?.name}}</td>\r\n            <td>\r\n              <span *ngIf=\"item.shipping.id\">\r\n                {{item.shipping.code}}\r\n              </span>\r\n              <label *ngIf=\"!item.shipping.id\" class=\"label label-danger\">\r\n                {{item.shipping.note}}\r\n              </label>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <button (click)=\"dismiss()\" class=\"btn btn-default\" type=\"button\">Đóng</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/order-ship/order-ship-create-result/order-ship-create-result.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderShipCreateResultComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__order_order_service__ = __webpack_require__("./src/app/modules/order/order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core__ = __webpack_require__("./src/app/core/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__order_ship_service__ = __webpack_require__("./src/app/modules/order-ship/order-ship.service.ts");
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






var OrderShipCreateResultComponent = /** @class */ (function (_super) {
    __extends(OrderShipCreateResultComponent, _super);
    function OrderShipCreateResultComponent(service, modal, modalService, builder, shipService) {
        var _this = _super.call(this, service, modal, modalService, builder) || this;
        _this.shipService = shipService;
        _this.statusSelectAll = false;
        return _this;
    }
    OrderShipCreateResultComponent.prototype.onInit = function () {
    };
    OrderShipCreateResultComponent.prototype.onDestroy = function () {
    };
    OrderShipCreateResultComponent.prototype.getTitle = function () {
    };
    OrderShipCreateResultComponent.prototype.getCreateModalComponent = function () {
    };
    OrderShipCreateResultComponent.prototype.getCreateModalComponentOptions = function () {
        return undefined;
    };
    OrderShipCreateResultComponent.prototype.getEditModalComponent = function () {
    };
    OrderShipCreateResultComponent.prototype.getEditModalComponentOptions = function () {
        return undefined;
    };
    OrderShipCreateResultComponent.prototype.buildSearchForm = function () {
        return undefined;
    };
    OrderShipCreateResultComponent.prototype.initNewModel = function () {
        return undefined;
    };
    OrderShipCreateResultComponent.prototype.loaded = function () {
    };
    OrderShipCreateResultComponent.prototype.load = function () {
        this.list = this.relatedModel;
        this.selectors = this.list.map(function (val) { return false; });
    };
    OrderShipCreateResultComponent.prototype.selectAll = function () {
        var _this = this;
        this.statusSelectAll = !this.statusSelectAll;
        this.selectors = this.selectors.map(function (val) { return _this.statusSelectAll; });
    };
    OrderShipCreateResultComponent.prototype.selectItem = function (event, index) {
        this.selectors[index] = !this.selectors[index];
        var status = true;
        this.selectors.forEach(function (val) {
            if (!val) {
                status = false;
            }
        });
        this.statusSelectAll = status;
    };
    OrderShipCreateResultComponent.prototype.printShipBill = function () {
        var _this = this;
        var ids = this.list.filter(function (val, index) { return _this.selectors[index]; }).map(function (val) { return val.id; });
        this.shipService.printBills(ids).subscribe(function (res) {
            _this.service.toastSuccessfully('In vận đơn');
            if (res['link']) {
                window.open(res['link']);
            }
            if (res['src']) {
                var win = window.open('', 'In đơn hàng', 'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=780,height=200,top=' + (screen.height - 400) + ',left=' + (screen.width - 840));
                win.document.body.innerHTML = res['src'];
            }
            _this.load();
        }, function () { return _this.service.toastFailed('In vận đơn'); });
    };
    OrderShipCreateResultComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-order-ship-create-result',
            template: __webpack_require__("./src/app/modules/order-ship/order-ship-create-result/order-ship-create-result.component.html"),
            styles: [__webpack_require__("./src/app/modules/order-ship/order-ship-create-result/order-ship-create-result.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__order_order_service__["a" /* OrderService */], __WEBPACK_IMPORTED_MODULE_5__order_ship_service__["a" /* OrderShipService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__order_order_service__["a" /* OrderService */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__["a" /* BsModalRef */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__["b" /* BsModalService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_5__order_ship_service__["a" /* OrderShipService */]])
    ], OrderShipCreateResultComponent);
    return OrderShipCreateResultComponent;
}(__WEBPACK_IMPORTED_MODULE_4__core__["b" /* AbstractCRUDModalComponent */]));



/***/ }),

/***/ "./src/app/modules/order-ship/order-ship-create/order-ship-create.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/order-ship/order-ship-create/order-ship-create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header bg-primary\">\r\n  <h4 class=\"modal-title pull-left\">Tạo vận đơn mới</h4>\r\n  <button (click)=\"dismiss()\" aria-label=\"Close\" class=\"close pull-right\" type=\"button\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n      <form [formGroup]=\"formGroup\" novalidate>\r\n        <div *ngFor=\"let f of fields\" [ngClass]=\"{ 'has-error': !formGroup.controls[f.formControl].valid }\"\r\n             class=\"form-group\">\r\n          <ng-template [ngIf]=\"f.type == 'input'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{ f.label }}\r\n            </label>\r\n            <input [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\" [placeholder]=\"f.placeHolder\"\r\n                   [type]=\"f.typeof\" class=\"form-control\"/>\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type == 'select'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{ f.label }}\r\n            </label>\r\n            <select [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\" class=\"form-control\">\r\n              <option *ngFor=\"let option of f.data\" [value]=\"option[f.config['primaryKey']]\">\r\n                {{ option[f.config[\"labelKey\"]] }}\r\n              </option>\r\n            </select>\r\n          </ng-template>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <button (click)=\"create()\" [disabled]=\"!formGroup.valid\" class=\"btn btn-primary\" type=\"button\">\r\n    Giao hàng\r\n  </button>\r\n  <button (click)=\"dismiss()\" class=\"btn btn-default\" type=\"button\">\r\n    Hủy bỏ\r\n  </button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/order-ship/order-ship-create/order-ship-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderShipCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__order_ship_service__ = __webpack_require__("./src/app/modules/order-ship/order-ship.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core__ = __webpack_require__("./src/app/core/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shipping_unit_shipping_unit_service__ = __webpack_require__("./src/app/modules/shipping-unit/shipping-unit.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shipping_service_shipping_service_service__ = __webpack_require__("./src/app/modules/shipping-service/shipping-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shipping_store_shipping_store_service__ = __webpack_require__("./src/app/modules/shipping-store/shipping-store.service.ts");
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








var OrderShipCreateComponent = /** @class */ (function (_super) {
    __extends(OrderShipCreateComponent, _super);
    function OrderShipCreateComponent(service, modal, builder, unitService, serviceService, storeService) {
        var _this = _super.call(this, service, modal, builder) || this;
        _this.unitService = unitService;
        _this.serviceService = serviceService;
        _this.storeService = storeService;
        _this.formGroup.get('unit_id').valueChanges.subscribe(function (value) {
            if (value) {
                _this.loadShippingStoreByUnit(value);
                _this.loadShippingServiceByUnit(value);
            }
        });
        return _this;
    }
    OrderShipCreateComponent.prototype.onInit = function () {
    };
    OrderShipCreateComponent.prototype.onDestroy = function () {
    };
    OrderShipCreateComponent.prototype.loadAllShippingUnit = function () {
        return this.unitService.loadAll();
    };
    OrderShipCreateComponent.prototype.buildForm = function () {
        return this.formBuilder.group({
            order_ids: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            unit_id: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]),
            store_id: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]),
            service_id: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required])
        });
    };
    OrderShipCreateComponent.prototype.initFieldForm = function () {
        return [
            __WEBPACK_IMPORTED_MODULE_4__core__["h" /* FieldForm */].createSelect('Chọn bên giao hàng', 'unit_id', 'Chọn một', 'loadAllShippingUnit', ['id', 'name']),
            __WEBPACK_IMPORTED_MODULE_4__core__["h" /* FieldForm */].createSelect('Chọn kho giao', 'store_id', 'Chọn một', [], ['id', 'name']),
            __WEBPACK_IMPORTED_MODULE_4__core__["h" /* FieldForm */].createSelect('Chọn dịch vụ giao', 'service_id', 'Chọn một', [], ['id', 'name']),
        ];
    };
    OrderShipCreateComponent.prototype.loaded = function () {
    };
    OrderShipCreateComponent.prototype.loadShippingStoreByUnit = function (value) {
        var _this = this;
        this.storeService.loadByPage({ unit_id: value }).subscribe(function (val) {
            _this.fields[1].data = val;
            _this.formGroup.get('store_id').setValue(val[0].id);
        });
    };
    OrderShipCreateComponent.prototype.loadShippingServiceByUnit = function (value) {
        var _this = this;
        this.serviceService.loadByPage({ unit_id: value }).subscribe(function (val) {
            _this.fields[2].data = val;
            _this.formGroup.get('service_id').setValue(val[0].id);
        });
    };
    OrderShipCreateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-order-ship-create',
            template: __webpack_require__("./src/app/modules/order-ship/order-ship-create/order-ship-create.component.html"),
            styles: [__webpack_require__("./src/app/modules/order-ship/order-ship-create/order-ship-create.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__order_ship_service__["a" /* OrderShipService */], __WEBPACK_IMPORTED_MODULE_5__shipping_unit_shipping_unit_service__["a" /* ShippingUnitService */], __WEBPACK_IMPORTED_MODULE_6__shipping_service_shipping_service_service__["a" /* ShippingServiceService */], __WEBPACK_IMPORTED_MODULE_7__shipping_store_shipping_store_service__["a" /* ShippingStoreService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__order_ship_service__["a" /* OrderShipService */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__["a" /* BsModalRef */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_5__shipping_unit_shipping_unit_service__["a" /* ShippingUnitService */],
            __WEBPACK_IMPORTED_MODULE_6__shipping_service_shipping_service_service__["a" /* ShippingServiceService */],
            __WEBPACK_IMPORTED_MODULE_7__shipping_store_shipping_store_service__["a" /* ShippingStoreService */]])
    ], OrderShipCreateComponent);
    return OrderShipCreateComponent;
}(__WEBPACK_IMPORTED_MODULE_4__core__["d" /* AbstractModalComponent */]));



/***/ }),

/***/ "./src/app/modules/order-ship/order-ship-info/order-ship-info.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/order-ship/order-ship-info/order-ship-info.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header bg-primary\">\r\n  <h4 class=\"modal-title pull-left\">Thông tin vận đơn {{model?.code}}</h4>\r\n  <button (click)=\"dismiss()\" aria-label=\"Close\" class=\"close pull-right\" type=\"button\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n      <pre>{{info}}</pre>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <button (click)=\"dismiss()\" class=\"btn btn-default\" type=\"button\">Hủy bỏ</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/order-ship/order-ship-info/order-ship-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderShipInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core__ = __webpack_require__("./src/app/core/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__order_ship_service__ = __webpack_require__("./src/app/modules/order-ship/order-ship.service.ts");
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





var OrderShipInfoComponent = /** @class */ (function (_super) {
    __extends(OrderShipInfoComponent, _super);
    function OrderShipInfoComponent(service, modal, builder) {
        return _super.call(this, service, modal, builder) || this;
    }
    OrderShipInfoComponent.prototype.onInit = function () {
    };
    OrderShipInfoComponent.prototype.onDestroy = function () {
    };
    OrderShipInfoComponent.prototype.buildForm = function () {
        return this.formBuilder.group({});
    };
    OrderShipInfoComponent.prototype.loaded = function () {
        var _this = this;
        this.service.loadByID(this.model.id).subscribe(function (value) { return _this.info = JSON.stringify(value, null, 2); }, function () { return _this.info = 'Không tìm thấy'; });
    };
    OrderShipInfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-order-ship-info',
            template: __webpack_require__("./src/app/modules/order-ship/order-ship-info/order-ship-info.component.html"),
            styles: [__webpack_require__("./src/app/modules/order-ship/order-ship-info/order-ship-info.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_4__order_ship_service__["a" /* OrderShipService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__order_ship_service__["a" /* OrderShipService */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__["a" /* BsModalRef */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]])
    ], OrderShipInfoComponent);
    return OrderShipInfoComponent;
}(__WEBPACK_IMPORTED_MODULE_3__core__["d" /* AbstractModalComponent */]));



/***/ }),

/***/ "./src/app/modules/order-ship/order-ship-item/order-ship-item.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/order-ship/order-ship-item/order-ship-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n  <div class=\"modal-header bg-primary\">\r\n    <h4 class=\"modal-title pull-left\">Danh sách đơn mới</h4>\r\n    <button (click)=\"dismiss()\" aria-label=\"Close\" class=\"close pull-right\" type=\"button\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"panel-heading\">\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12\">\r\n        <form (ngSubmit)=\"load()\" [formGroup]=\"searchForm\">\r\n          <div *ngFor=\"let f of searchControls\" class=\"form-group col-md-4\">\r\n            <ng-template [ngIf]=\"f.type == 'input'\">\r\n              <label [for]=\"f.formControl\">\r\n                {{ f.label }}\r\n              </label>\r\n              <input [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\"\r\n                [placeholder]=\"f.placeHolder\" [type]=\"f.typeof\" class=\"form-control\" />\r\n            </ng-template>\r\n            <ng-template [ngIf]=\"f.type == 'textarea'\">\r\n              <label [for]=\"f.formControl\">\r\n                {{ f.label }}\r\n              </label>\r\n              <textarea [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\"\r\n                [placeholder]=\"f.placeHolder\" class=\"form-control\">\r\n              </textarea>\r\n            </ng-template>\r\n            <ng-template [ngIf]=\"f.type == 'checkbox'\">\r\n              <div class=\"checkbox\">\r\n                <label>\r\n                  <input [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\"\r\n                    type=\"checkbox\" />\r\n                  {{ f.label }}\r\n                </label>\r\n              </div>\r\n            </ng-template>\r\n            <ng-template [ngIf]=\"f.type == 'select'\">\r\n              <label [for]=\"f.formControl\">\r\n                {{ f.label }}\r\n              </label>\r\n              <select [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\"\r\n                class=\"form-control\">\r\n                <option *ngFor=\"let option of f.data\" [value]=\"option['id']\">\r\n                  {{ option[\"name\"] }}\r\n                </option>\r\n              </select>\r\n            </ng-template>\r\n            <ng-template [ngIf]=\"f.type == 'select2'\">\r\n              <label [for]=\"f.formControl\">\r\n                {{ f.label }}\r\n              </label>\r\n              <angular2-multiselect [data]=\"f.data\" [formControlName]=\"f.formControl\" [id]=\"f.formControl\"\r\n                [settings]=\"f.config\">\r\n              </angular2-multiselect>\r\n            </ng-template>\r\n          </div>\r\n          <div class=\"col-md-12\">\r\n            <button class=\"btn btn-default\" type=\"submit\">Tìm kiếm</button>\r\n            <button (click)=\"removeFilter()\" class=\"btn btn-default\" type=\"button\">Xóa lọc</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <div class=\"col-xs-6 col-xs-offset-6\">\r\n        <button (click)=\"ship()\" class=\"btn btn-primary pull-right\" type=\"button\">\r\n          <i class=\"fa fa-plus\"></i> Lên đơn vận\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"panel-body no-padding\">\r\n    <table class=\"table-responsive table table-bordered table-hover\">\r\n      <thead>\r\n        <tr>\r\n          <th style=\"width: 10%\">\r\n            <input (change)=\"selectAll()\" [checked]=\"statusSelectAll\" class=\"checkbox\" style=\"margin: auto; width: 15px; height: 15px;\"\r\n            type=\"checkbox\">\r\n          </th>\r\n          <th style=\"width: 15%\">Mã đơn hàng</th>\r\n          <th style=\"width: 30%\">Khách hàng</th>\r\n          <th style=\"width: 45%\">Thông tin</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let item of list; let i = index\" class=\"odd\">\r\n          <td><input (change)=\"selectItem(item, i)\" [checked]=\"selectors[i]\" class=\"checkbox\"\r\n              style=\"margin: 10px auto; width: 15px; height: 15px\" type=\"checkbox\" /></td>\r\n          <td class=\"text-center\">\r\n            <label style=\"display: block\">{{ item.code }}</label>\r\n            <label class=\"label label-warning\" style=\"padding: 5px 10px\">{{ item.order_status }}</label>\r\n            <p style=\"margin: 10px 0 0\">\r\n              {{ item.created_at | date : \"yyyy-MM-dd\" }}\r\n            </p>\r\n            <p>{{ item.created_at | date : \"HH:mm:ss\" }}</p>\r\n          </td>\r\n          <td>\r\n            <p>{{ item.customer_name }}</p>\r\n            <p>{{ item.customer_phone }}</p>\r\n            <p>{{ item.customer_text }}</p>\r\n            <textarea *ngIf=\"item.customer_request\" [cols]=\"30\" [rows]=\"5\" [value]=\"item.customer_request\" readonly\r\n              style=\"min-width: 237px; max-width: 237px\"></textarea>\r\n            <label>\r\n              <textarea *ngIf=\"item.note\" [cols]=\"30\" [rows]=\"4\" value=\"Ghi chú: {{item.note}}\" readonly\r\n                style=\"min-width: 237px; max-width: 237px\">\r\n              </textarea>\r\n            </label>\r\n          </td>\r\n          <td>\r\n            <table class=\"table-responsive table table-bordered\">\r\n              <thead>\r\n                <tr>\r\n                  <th style=\"width: 50%\">Sản phẩm</th>\r\n                  <th style=\"width: 20%\">Loại</th>\r\n                  <th style=\"width: 10%\">S/L</th>\r\n                  <th style=\"width: 20%\">Giá tiền</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let d of item.details\">\r\n                  <td>\r\n                    <p>{{ d.product.name }}</p>\r\n                  </td>\r\n                  <td>\r\n                    <span style=\"display: block\">{{ d.size }} - {{ d.color }}</span>\r\n                  </td>\r\n                  <td class=\"text-right\">\r\n                    {{ d.quantity | number : \"1.0-0\" }}\r\n                  </td>\r\n                  <td class=\"text-right\">\r\n                    {{ d.quantity * d.unit_price | number : \"1.0-0\" }}\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <th class=\"text-right\" colspan=\"3\">Thành tiền</th>\r\n                  <td class=\"text-right\">\r\n                    {{ item.amount | number : \"1.0-0\" }}\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <th class=\"text-right\" colspan=\"3\">Phí ship</th>\r\n                  <td class=\"text-right\">\r\n                    {{ item.shipping_fee | number : \"1.0-0\" }}\r\n                  </td>\r\n                </tr>\r\n                <tr *ngIf=\"item.discount > 0\">\r\n                  <th class=\"text-right\" colspan=\"3\">Giảm giá</th>\r\n                  <td class=\"text-right\">\r\n                    {{ item.discount | number : \"1.0-0\" }}\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <th class=\"text-right\" colspan=\"3\">Tổng tiền</th>\r\n                  <th class=\"text-right\">\r\n                    {{ item.total_amount | number : \"1.0-0\" }}\r\n                  </th>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n  <div class=\"panel-footer\">\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-6\">\r\n        <pagination (numPages)=\"pagination.numPages = $event\" (pageChanged)=\"pageChanged($event)\"\r\n          [(ngModel)]=\"pagination.currentPage\" [boundaryLinks]=\"true\" [itemsPerPage]=\"pagination.itemsPerPage\"\r\n          [maxSize]=\"pagination.maxSize\" [totalItems]=\"pagination.totalItems\" class=\"pagination-sm\"></pagination>\r\n      </div>\r\n      <div class=\"col-xs-6\">\r\n        <div class=\"box-go-to\">\r\n          <input [(ngModel)]=\"nextPage\" class=\"col-xs-2\" type=\"number\" />\r\n          <span class=\"col-xs-1\">/</span>\r\n          <input [(ngModel)]=\"pagination.numPages\" class=\"col-xs-2\" disabled type=\"text\" />\r\n          <div class=\"col-xs-4\">\r\n            <button (click)=\"goToPageNumber()\">Đến</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button (click)=\"dismiss()\" class=\"btn btn-default\" type=\"button\">Đóng</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/order-ship/order-ship-item/order-ship-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderShipItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__order_ship_meta__ = __webpack_require__("./src/app/modules/order-ship/order-ship.meta.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__order_ship_create_order_ship_create_component__ = __webpack_require__("./src/app/modules/order-ship/order-ship-create/order-ship-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__order_ship_service__ = __webpack_require__("./src/app/modules/order-ship/order-ship.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__order_ship_create_result_order_ship_create_result_component__ = __webpack_require__("./src/app/modules/order-ship/order-ship-create-result/order-ship-create-result.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core__ = __webpack_require__("./src/app/core/index.ts");
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








var OrderShipItemComponent = /** @class */ (function (_super) {
    __extends(OrderShipItemComponent, _super);
    function OrderShipItemComponent(service, modalRef, modal, builder) {
        var _this = _super.call(this, service, modalRef, modal, builder) || this;
        _this.statusSelectAll = false;
        return _this;
    }
    OrderShipItemComponent.prototype.onInit = function () {
    };
    OrderShipItemComponent.prototype.onDestroy = function () {
    };
    OrderShipItemComponent.prototype.getTitle = function () {
        return 'Danh sách đơn giao';
    };
    OrderShipItemComponent.prototype.getCreateModalComponent = function () {
        return null;
    };
    OrderShipItemComponent.prototype.getEditModalComponent = function () {
        return null;
    };
    OrderShipItemComponent.prototype.getCreateModalComponentOptions = function () {
        return { class: 'modal-lg', ignoreBackdropClick: true, backdrop: 'static', keyboard: false };
    };
    OrderShipItemComponent.prototype.getEditModalComponentOptions = function () {
        return { class: 'modal-lg' };
    };
    OrderShipItemComponent.prototype.buildSearchForm = function () {
        return this.formBuilder.group({
            code: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null),
            search: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null),
            created_date: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null),
        });
    };
    OrderShipItemComponent.prototype.initSearchForm = function () {
        return [
            __WEBPACK_IMPORTED_MODULE_7__core__["h" /* FieldForm */].createTextInput('Tìm kiếm theo mã đơn hàng', 'code', 'Nhập từ khóa'),
            __WEBPACK_IMPORTED_MODULE_7__core__["h" /* FieldForm */].createTextInput('Tìm kiếm theo tên khách hàng', 'search', 'Nhập từ khóa'),
            __WEBPACK_IMPORTED_MODULE_7__core__["h" /* FieldForm */].createDateInput('Ngày tạo', 'created_date', 'Chọn ngày'),
        ];
    };
    OrderShipItemComponent.prototype.initNewModel = function () {
        return new __WEBPACK_IMPORTED_MODULE_3__order_ship_meta__["a" /* OrderShipMeta */]();
    };
    OrderShipItemComponent.prototype.loaded = function () {
    };
    OrderShipItemComponent.prototype.load = function () {
        var _this = this;
        this.statusSelectAll = false;
        var params = __WEBPACK_IMPORTED_MODULE_7__core__["j" /* ObjectUtil */].combineValue({
            limit: this.pagination.itemsPerPage,
            page: this.pagination.currentPage,
            order_status: "Chuẩn bị hàng"
        }, this.searchForm.value, true);
        this.service.loadByPage(params).subscribe(function (res) {
            _this.list = res.data;
            _this.pagination.set(res);
            _this.selectors = _this.list.map(function (value) { return false; });
        }, function () {
            _this.list = [];
            _this.pagination = new __WEBPACK_IMPORTED_MODULE_7__core__["e" /* AppPagination */]();
            _this.nextPage = _this.pagination.currentPage;
        });
    };
    OrderShipItemComponent.prototype.ship = function () {
        var _this = this;
        var ids = this.list.filter(function (val, index) { return _this.selectors[index]; }).map(function (val) { return val.id; });
        var config = this.getCreateModalComponentOptions();
        var modalRef = this.modalService.show(__WEBPACK_IMPORTED_MODULE_4__order_ship_create_order_ship_create_component__["a" /* OrderShipCreateComponent */], config);
        var modal = modalRef.content;
        modal.setModel({ order_ids: ids.join(',') });
        var sub = modal.onHidden.subscribe(function (result) {
            if (result.success) {
                var modalRef2 = _this.modalService.show(__WEBPACK_IMPORTED_MODULE_6__order_ship_create_result_order_ship_create_result_component__["a" /* OrderShipCreateResultComponent */], {
                    ignoreBackdropClick: true,
                    'class': 'modal-lg'
                });
                var modal2 = modalRef2.content;
                modal2.setRelatedModel(result.data);
                var sub2_1 = modal2.onHidden.subscribe(function (result) {
                    sub2_1.unsubscribe();
                });
            }
            _this.load();
            sub.unsubscribe();
        });
    };
    OrderShipItemComponent.prototype.selectAll = function () {
        var _this = this;
        this.statusSelectAll = !this.statusSelectAll;
        this.selectors = this.selectors.map(function (val) { return _this.statusSelectAll; });
    };
    OrderShipItemComponent.prototype.selectItem = function (event, index) {
        this.selectors[index] = !this.selectors[index];
        var status = true;
        this.selectors.forEach(function (val) {
            if (!val) {
                status = false;
            }
        });
        this.statusSelectAll = status;
    };
    OrderShipItemComponent.prototype.dismiss = function () {
        this.modal.hide();
        this.onHidden.emit(new __WEBPACK_IMPORTED_MODULE_7__core__["i" /* ModalResult */]('success'));
    };
    OrderShipItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-order-ship-item',
            template: __webpack_require__("./src/app/modules/order-ship/order-ship-item/order-ship-item.component.html"),
            styles: [__webpack_require__("./src/app/modules/order-ship/order-ship-item/order-ship-item.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_5__order_ship_service__["a" /* OrderShipService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__order_ship_service__["a" /* OrderShipService */],
            __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__["a" /* BsModalRef */],
            __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__["b" /* BsModalService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]])
    ], OrderShipItemComponent);
    return OrderShipItemComponent;
}(__WEBPACK_IMPORTED_MODULE_7__core__["b" /* AbstractCRUDModalComponent */]));



/***/ }),

/***/ "./src/app/modules/order-ship/order-ship-list/order-ship-list.component.css":
/***/ (function(module, exports) {

module.exports = ".order-code {\r\n  width: 130px;\r\n  overflow: hidden;\r\n}\r\n\r\n.label-status {\r\n  font-size: 12px;\r\n}\r\n\r\n.label-1 {\r\n  background: rgb(0, 145, 65);\r\n}\r\n\r\n.label-2 {\r\n  background: rgb(0, 130, 139);\r\n}\r\n\r\n.label-3 {\r\n  background: rgb(141, 135, 48);\r\n}\r\n\r\n.label-4 {\r\n  background: rgb(136, 93, 30);\r\n}\r\n\r\n.label-5 {\r\n  background: rgb(177, 115, 0);\r\n}\r\n\r\n.label-6 {\r\n  background: rgb(16, 192, 0);\r\n}\r\n\r\n.label-7 {\r\n  background: rgb(228, 0, 0);\r\n}\r\n\r\n.label-8 {\r\n  background: rgb(210, 0, 230);\r\n}\r\n\r\n.label-9 {\r\n  background: rgb(238, 75, 0);\r\n}\r\n\r\n.label-10 {\r\n  background: rgb(199, 113, 0);\r\n}\r\n"

/***/ }),

/***/ "./src/app/modules/order-ship/order-ship-list/order-ship-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n  <div class=\"panel-heading\">\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12\">\r\n        <form (ngSubmit)=\"load()\" [formGroup]=\"searchForm\">\r\n          <div *ngFor=\"let f of searchControls\" class=\"form-group col-md-6\">\r\n            <ng-template [ngIf]=\"f.type == 'input'\">\r\n              <label [for]=\"f.formControl\">\r\n                {{ f.label }}\r\n              </label>\r\n              <input [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\"\r\n                [placeholder]=\"f.placeHolder\" [type]=\"f.typeof\" class=\"form-control\" />\r\n            </ng-template>\r\n            <ng-template [ngIf]=\"f.type == 'textarea'\">\r\n              <label [for]=\"f.formControl\">\r\n                {{ f.label }}\r\n              </label>\r\n              <textarea [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\"\r\n                [placeholder]=\"f.placeHolder\" class=\"form-control\">\r\n              </textarea>\r\n            </ng-template>\r\n            <ng-template [ngIf]=\"f.type == 'checkbox'\">\r\n              <div class=\"checkbox\">\r\n                <label>\r\n                  <input [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\"\r\n                    type=\"checkbox\" />\r\n                  {{ f.label }}\r\n                </label>\r\n              </div>\r\n            </ng-template>\r\n            <ng-template [ngIf]=\"f.type == 'select'\">\r\n              <label [for]=\"f.formControl\">\r\n                {{ f.label }}\r\n              </label>\r\n              <select [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\"\r\n                class=\"form-control\">\r\n                <option *ngFor=\"let option of f.data\" [value]=\"option['value']\">\r\n                  {{ option[\"name\"] }}\r\n                </option>\r\n              </select>\r\n            </ng-template>\r\n            <ng-template [ngIf]=\"f.type == 'select2'\">\r\n              <label [for]=\"f.formControl\">\r\n                {{ f.label }}\r\n              </label>\r\n              <angular2-multiselect [data]=\"f.data\" [formControlName]=\"f.formControl\" [id]=\"f.formControl\"\r\n                [settings]=\"f.config\">\r\n              </angular2-multiselect>\r\n            </ng-template>\r\n          </div>\r\n          <div class=\"col-md-12\">\r\n            <button class=\"btn btn-default\" type=\"submit\">Tìm kiếm</button>\r\n            <button (click)=\"removeFilter()\" class=\"btn btn-default\" type=\"button\">Xóa lọc</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <div class=\"col-xs-6 col-xs-offset-6\">\r\n        <button (click)=\"showShip()\" class=\"btn btn-primary pull-right\" type=\"button\">\r\n          Danh sách đơn mới\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"panel-body no-padding\">\r\n    <table class=\"table-responsive table table-bordered table-hover\">\r\n      <thead>\r\n        <tr>\r\n          <th style=\"width: 10%\">Mã đơn hàng</th>\r\n          <th style=\"width: 15%\">Mã đơn vận</th>\r\n          <th style=\"width: 20%\">Khách hàng</th>\r\n          <th style=\"width: 45%\">Thông tin</th>\r\n          <th style=\"width: 10%\">Thao tác</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let item of list; let i = index\" class=\"odd\">\r\n          <td class=\"text-center\">\r\n            <label style=\"display: block\">{{ item.code }}</label>\r\n              <label class=\"label label-status\" style=\"padding: 5px 10px\"\r\n              [ngClass]=\"{\r\n                'label-3':item.order_status == 'Chuẩn bị hàng',\r\n                'label-4':item.order_status == 'Đã chuẩn bị hàng',\r\n                'label-5':item.order_status == 'Đang giao',\r\n                'label-6':item.order_status == 'Hoàn thành',\r\n                'label-7':item.order_status == 'Hủy đơn',\r\n                'label-8':item.order_status == 'Hoàn hàng',\r\n                'label-9':item.order_status == 'Đã hoàn hàng',\r\n                'label-10':item.order_status == 'Đã hoàn tiền'\r\n              }\">{{ item.order_status }}</label>\r\n            <p style=\"margin: 10px 0 0\">\r\n              {{ item.created_at | date : \"yyyy-MM-dd\" }}\r\n            </p>\r\n            <p>{{ item.created_at | date : \"HH:mm:ss\" }}</p>\r\n          </td>\r\n          <td class=\"text-center\">\r\n            <div *ngIf=\"item.shipping\">\r\n              <p class=\"order-code\">\r\n                <label class=\"label\" style=\"padding: 5px 10px\">\r\n                  <a href=\"javascript:void(0)\" style=\"font-size: 14px;\" (click)=\"infoShip(item.shipping,i)\">Mã\r\n                    {{item.shipping.code}}</a>\r\n                </label>\r\n              </p>\r\n              <p>\r\n                <label class=\"label label-default\" style=\"padding: 5px 10px\">{{item.shipping.unit ? item.shipping.unit.name : ''}}</label>\r\n              </p>\r\n              <p>\r\n                <label class=\"label\" style=\"padding: 5px 10px\"\r\n                [ngClass]=\"{\r\n                  'label-primary':item.shipping.status == 'Điều phối giao hàng',\r\n                  'label-confirm':item.shipping.status == 'Đã tiếp nhận',\r\n                  'label-info':item.shipping.status == 'Đang giao',\r\n                  'label-warning':item.shipping.status == 'Giao lại',\r\n                  'label-success':item.shipping.status == 'Hoàn thành',\r\n                  'label-danger':item.shipping.status == 'Hủy đơn'\r\n                }\">{{item.shipping.status}}</label>\r\n              </p>\r\n              <div style=\"margin-top: 10px;\">\r\n                <button *ngIf=\"item.shipping.status == 'Điều phối giao hàng' || item.shipping.status == 'Giao lại'\" type=\"button\" class=\"btn btn-success margin-r-5\" style=\"width: 30px; height: 30px; padding: 0;\"\r\n                  (click)=\"shipping(item.shipping)\">\r\n                  <i class=\"fa fa-truck\"></i>\r\n                </button>\r\n                <ng-template [ngIf]=\"item.shipping.status == 'Đang giao'\">\r\n                    <button type=\"button\" class=\"btn btn-success margin-r-5\" style=\"width: 30px; height: 30px; padding: 0;\"\r\n                      (click)=\"complete(item.shipping)\">\r\n                      <i class=\"fa fa-check\"></i>\r\n                    </button>\r\n                    <button type=\"button\" class=\"btn btn-warning margin-r-5\" style=\"width: 30px; height: 30px; padding: 0;\"\r\n                      (click)=\"note(item.shipping)\">\r\n                      <i class=\"fa fa-refresh\"></i>\r\n                    </button>\r\n                  </ng-template>\r\n                  <textarea *ngIf=\"item.shipping.note\" [cols]=\"9\" [rows]=\"3\" [value]=\"item.shipping.note\" readonly style=\"min-width: 146px; max-width: 146px; min-height: 107px; margin-top: 10px;\"></textarea>\r\n              </div>\r\n            </div>\r\n          </td>\r\n          <td>\r\n            <p>{{ item.customer_name }}</p>\r\n            <p>{{ item.customer_phone }}</p>\r\n            <p>{{ item.customer_text }}</p>\r\n            <textarea *ngIf=\"item.customer_request\" [cols]=\"30\" [rows]=\"5\" [value]=\"item.customer_request\" readonly\r\n              style=\"min-width: 237px; max-width: 237px\"></textarea>\r\n            <label>\r\n              <textarea *ngIf=\"item.note\" [cols]=\"30\" [rows]=\"4\" value=\"Ghi chú: {{item.note}}\" readonly\r\n                style=\"min-width: 237px; max-width: 237px\">\r\n              </textarea>\r\n            </label>\r\n          </td>\r\n          <td>\r\n            <table class=\"table-responsive table table-bordered\">\r\n              <thead>\r\n                <tr>\r\n                  <th style=\"width: 50%\">Sản phẩm</th>\r\n                  <th style=\"width: 20%\">Loại</th>\r\n                  <th style=\"width: 10%\">S/L</th>\r\n                  <th style=\"width: 20%\">Giá tiền</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let d of item.details\">\r\n                  <td>\r\n                    <p><label>{{ d.product_code }}</label> - {{ d.product.name }}</p>\r\n                  </td>\r\n                  <td>\r\n                    <span style=\"display: block\">{{ d.size }} - {{ d.color }}</span>\r\n                  </td>\r\n                  <td class=\"text-right\">\r\n                    {{ d.quantity | number : \"1.0-0\" }}\r\n                  </td>\r\n                  <td class=\"text-right\">\r\n                    {{ d.quantity * d.unit_price | number : \"1.0-0\" }}\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <th class=\"text-right\" colspan=\"3\">Thành tiền</th>\r\n                  <td class=\"text-right\">\r\n                    {{ item.amount | number : \"1.0-0\" }}\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <th class=\"text-right\" colspan=\"3\">Phí ship</th>\r\n                  <td class=\"text-right\">\r\n                    {{ item.shipping_fee | number : \"1.0-0\" }}\r\n                  </td>\r\n                </tr>\r\n                <tr *ngIf=\"item.discount > 0\">\r\n                  <th class=\"text-right\" colspan=\"3\">Giảm giá</th>\r\n                  <td class=\"text-right\">\r\n                    {{ item.discount | number : \"1.0-0\" }}\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <th class=\"text-right\" colspan=\"3\">Tổng tiền</th>\r\n                  <th class=\"text-right\">\r\n                    {{ item.total_amount | number : \"1.0-0\" }}\r\n                  </th>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </td>\r\n          <td class=\"text-center\">\r\n            <div style=\"margin-top: 20px;\" *ngIf=\"item.shipping\">\r\n              <button type=\"button\" class=\"btn btn-sm margin-r-5\" style=\"width: 30px; height: 30px; padding: 0;\"\r\n                [ngClass]=\"{'btn-success':!item.shipping.is_printed,'btn-danger':item.shipping.is_printed}\"\r\n                (click)=\"printShippingBill(item)\">\r\n                <i class=\"fa fa-print\"></i>\r\n              </button>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n  <div class=\"panel-footer\">\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-6\">\r\n        <pagination (numPages)=\"pagination.numPages = $event\" (pageChanged)=\"pageChanged($event)\"\r\n          [(ngModel)]=\"pagination.currentPage\" [boundaryLinks]=\"true\" [itemsPerPage]=\"pagination.itemsPerPage\"\r\n          [maxSize]=\"pagination.maxSize\" [totalItems]=\"pagination.totalItems\" class=\"pagination-sm\"></pagination>\r\n      </div>\r\n      <div class=\"col-xs-6\">\r\n        <div class=\"box-go-to\">\r\n          <input [(ngModel)]=\"nextPage\" class=\"col-xs-2\" type=\"number\" />\r\n          <span class=\"col-xs-1\">/</span>\r\n          <input [(ngModel)]=\"pagination.numPages\" class=\"col-xs-2\" disabled type=\"text\" />\r\n          <div class=\"col-xs-4\">\r\n            <button (click)=\"goToPageNumber()\">Đến</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/order-ship/order-ship-list/order-ship-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderShipListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__order_ship_meta__ = __webpack_require__("./src/app/modules/order-ship/order-ship.meta.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__order_ship_service__ = __webpack_require__("./src/app/modules/order-ship/order-ship.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core__ = __webpack_require__("./src/app/core/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__order_ship_item_order_ship_item_component__ = __webpack_require__("./src/app/modules/order-ship/order-ship-item/order-ship-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__order_ship_info_order_ship_info_component__ = __webpack_require__("./src/app/modules/order-ship/order-ship-info/order-ship-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__order_ship_note_order_ship_note_component__ = __webpack_require__("./src/app/modules/order-ship/order-ship-note/order-ship-note.component.ts");
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









var OrderShipListComponent = /** @class */ (function (_super) {
    __extends(OrderShipListComponent, _super);
    function OrderShipListComponent(service, modal, builder) {
        return _super.call(this, service, modal, builder) || this;
    }
    OrderShipListComponent.prototype.onInit = function () {
        this.load();
    };
    OrderShipListComponent.prototype.onDestroy = function () {
    };
    OrderShipListComponent.prototype.getTitle = function () {
        return 'Danh sách đơn giao';
    };
    OrderShipListComponent.prototype.getCreateModalComponent = function () {
        return null;
    };
    OrderShipListComponent.prototype.getEditModalComponent = function () {
        return null;
    };
    OrderShipListComponent.prototype.getCreateModalComponentOptions = function () {
        return { class: 'modal-lg' };
    };
    OrderShipListComponent.prototype.getEditModalComponentOptions = function () {
        return { class: 'modal-lg' };
    };
    OrderShipListComponent.prototype.buildSearchForm = function () {
        return this.formBuilder.group({
            code: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null),
            search: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null),
            ship_status: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null),
            created_date: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null),
        });
    };
    OrderShipListComponent.prototype.initSearchForm = function () {
        return [
            __WEBPACK_IMPORTED_MODULE_5__core__["h" /* FieldForm */].createTextInput('Tìm kiếm theo mã đơn hàng', 'code', 'Nhập từ khóa'),
            __WEBPACK_IMPORTED_MODULE_5__core__["h" /* FieldForm */].createTextInput('Tìm kiếm theo khách hàng', 'search', 'Nhập từ khóa'),
            __WEBPACK_IMPORTED_MODULE_5__core__["h" /* FieldForm */].createSelect('Trạng thái đơn vận', 'ship_status', 'Chọn một', [
                {
                    name: "Điều phối giao hàng",
                    value: "Điều phối giao hàng"
                },
                {
                    name: "Đã tiếp nhận",
                    value: "Đã tiếp nhận"
                },
                {
                    name: "Đang giao",
                    value: "Đang giao"
                },
                {
                    name: "Giao lại",
                    value: "Giao lại"
                },
                {
                    name: "Hoàn thành",
                    value: "Hoàn thành"
                },
                {
                    name: "Hủy đơn",
                    value: "Hủy đơn"
                }
            ]),
            __WEBPACK_IMPORTED_MODULE_5__core__["h" /* FieldForm */].createDateInput('Ngày tạo', 'created_date', 'Chọn ngày'),
        ];
    };
    OrderShipListComponent.prototype.initNewModel = function () {
        return new __WEBPACK_IMPORTED_MODULE_3__order_ship_meta__["a" /* OrderShipMeta */]();
    };
    OrderShipListComponent.prototype.showShip = function () {
        var _this = this;
        var modalRef = this.modalService.show(__WEBPACK_IMPORTED_MODULE_6__order_ship_item_order_ship_item_component__["a" /* OrderShipItemComponent */], { ignoreBackdropClick: true, class: 'modal-lg' });
        var modal = modalRef.content;
        modal.setRelatedModel(this.initNewModel());
        var sub = modal.onHidden.subscribe(function (result) {
            if (result.success) {
                _this.load();
            }
            sub.unsubscribe();
        });
    };
    OrderShipListComponent.prototype.infoShip = function (ship, i) {
        var _this = this;
        var config = this.getCreateModalComponentOptions();
        var modalRef = this.modalService.show(__WEBPACK_IMPORTED_MODULE_7__order_ship_info_order_ship_info_component__["a" /* OrderShipInfoComponent */], config);
        var modal = modalRef.content;
        modal.setModel(ship);
        var sub = modal.onHidden.subscribe(function (result) {
            if (result.success) {
                _this.list[i] = null;
                _this.list[i].status = 'Chuẩn bị hàng';
            }
            sub.unsubscribe();
        });
    };
    OrderShipListComponent.prototype.printShippingBill = function (item) {
        var _this = this;
        this.service.printBill(item.shipping.id).subscribe(function (res) {
            _this.service.toastSuccessfully('In vận đơn');
            if (res['link']) {
                window.open(res['link']);
            }
            if (res['src']) {
                var win = window.open('', 'In đơn hàng', 'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=780,height=200,top=' + (screen.height - 400) + ',left=' + (screen.width - 840));
                win.document.body.innerHTML = res['src'];
            }
            _this.load();
        }, function () { return _this.service.toastFailed('In vận đơn'); });
    };
    OrderShipListComponent.prototype.shipping = function (item) {
        var _this = this;
        this.service.shipping(item.id).subscribe(function (res) {
            _this.service.toastSuccessfully('Giao hàng');
            _this.load();
        }, function () { return _this.service.toastFailedEdited(); });
    };
    OrderShipListComponent.prototype.complete = function (item) {
        var _this = this;
        this.service.complete(item.id).subscribe(function (res) {
            _this.service.toastSuccessfully('Giao hàng');
            _this.load();
        }, function () { return _this.service.toastFailedEdited(); });
    };
    OrderShipListComponent.prototype.note = function (item) {
        var _this = this;
        var modalRef = this.modalService.show(__WEBPACK_IMPORTED_MODULE_8__order_ship_note_order_ship_note_component__["a" /* OrderShipNoteComponent */], { ignoreBackdropClick: true, 'class': 'modal-lg' });
        var modal = modalRef.content;
        modal.setModel(item);
        var sub = modal.onHidden.subscribe(function (result) {
            if (result.success) {
                _this.load();
            }
            sub.unsubscribe();
        });
    };
    OrderShipListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-order-ship-list',
            template: __webpack_require__("./src/app/modules/order-ship/order-ship-list/order-ship-list.component.html"),
            styles: [__webpack_require__("./src/app/modules/order-ship/order-ship-list/order-ship-list.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_4__order_ship_service__["a" /* OrderShipService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__order_ship_service__["a" /* OrderShipService */],
            __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__["b" /* BsModalService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]])
    ], OrderShipListComponent);
    return OrderShipListComponent;
}(__WEBPACK_IMPORTED_MODULE_5__core__["a" /* AbstractCRUDComponent */]));



/***/ }),

/***/ "./src/app/modules/order-ship/order-ship-note/order-ship-note.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/order-ship/order-ship-note/order-ship-note.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header bg-primary\">\r\n  <h4 class=\"modal-title pull-left\">Ghi chú đơn</h4>\r\n  <button (click)=\"dismiss()\" aria-label=\"Close\" class=\"close pull-right\" type=\"button\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n      <form [formGroup]=\"formGroup\" novalidate>\r\n        <div *ngFor=\"let f of fields\" [ngClass]=\"{ 'has-error': !formGroup.controls[f.formControl].valid }\"\r\n             class=\"form-group\">\r\n          <ng-template [ngIf]=\"f.type == 'input'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{ f.label }}\r\n            </label>\r\n            <input [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\" [placeholder]=\"f.placeHolder\"\r\n                   [type]=\"f.typeof\" class=\"form-control\"/>\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type=='textarea'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{f.label}}\r\n            </label>\r\n            <textarea [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\" [placeholder]=\"f.placeHolder\"\r\n                      [rows]=\"5\" class=\"form-control\">\r\n          </textarea>\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type == 'select'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{ f.label }}\r\n            </label>\r\n            <select [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\" class=\"form-control\">\r\n              <option *ngFor=\"let option of f.data\" [value]=\"option[f.config['primaryKey']]\">\r\n                {{ option[f.config[\"labelKey\"]] }}\r\n              </option>\r\n            </select>\r\n          </ng-template>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <button (click)=\"note()\" [disabled]=\"!formGroup.valid\" class=\"btn btn-primary\" type=\"button\">Xác nhận</button>\r\n  <button (click)=\"dismiss()\" class=\"btn btn-default\" type=\"button\">\r\n    Hủy bỏ\r\n  </button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/order-ship/order-ship-note/order-ship-note.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderShipNoteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__order_ship_service__ = __webpack_require__("./src/app/modules/order-ship/order-ship.service.ts");
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





var OrderShipNoteComponent = /** @class */ (function (_super) {
    __extends(OrderShipNoteComponent, _super);
    function OrderShipNoteComponent(service, modal, builder) {
        return _super.call(this, service, modal, builder) || this;
    }
    OrderShipNoteComponent.prototype.onInit = function () {
    };
    OrderShipNoteComponent.prototype.onDestroy = function () {
    };
    OrderShipNoteComponent.prototype.buildForm = function () {
        return this.formBuilder.group({
            note: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null),
        });
    };
    OrderShipNoteComponent.prototype.initFieldForm = function () {
        return [
            __WEBPACK_IMPORTED_MODULE_4__core__["h" /* FieldForm */].createTextArea('Ghi chú', 'note', 'Nhập kí tự'),
        ];
    };
    OrderShipNoteComponent.prototype.loaded = function () {
    };
    OrderShipNoteComponent.prototype.note = function () {
        var _this = this;
        var item = __WEBPACK_IMPORTED_MODULE_4__core__["j" /* ObjectUtil */].combineValue(this.model, this.formGroup.value);
        this.service.note(item).subscribe(function (res) {
            _this.service.toastSuccessfully('Ghi chú');
            _this.close(res);
        }, function () { return _this.service.toastFailed('Ghi chú'); });
    };
    OrderShipNoteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-order-ship-note',
            template: __webpack_require__("./src/app/modules/order-ship/order-ship-note/order-ship-note.component.html"),
            styles: [__webpack_require__("./src/app/modules/order-ship/order-ship-note/order-ship-note.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__order_ship_service__["a" /* OrderShipService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__order_ship_service__["a" /* OrderShipService */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__["a" /* BsModalRef */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]])
    ], OrderShipNoteComponent);
    return OrderShipNoteComponent;
}(__WEBPACK_IMPORTED_MODULE_4__core__["d" /* AbstractModalComponent */]));



/***/ }),

/***/ "./src/app/modules/order-ship/order-ship.meta.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderShipMeta; });
var OrderShipMeta = /** @class */ (function () {
    function OrderShipMeta() {
    }
    return OrderShipMeta;
}());



/***/ }),

/***/ "./src/app/modules/order-ship/order-ship.modal.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderShipModalModule; });
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__order_ship_create_order_ship_create_component__ = __webpack_require__("./src/app/modules/order-ship/order-ship-create/order-ship-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__order_ship_create_result_order_ship_create_result_component__ = __webpack_require__("./src/app/modules/order-ship/order-ship-create-result/order-ship-create-result.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__order_ship_item_order_ship_item_component__ = __webpack_require__("./src/app/modules/order-ship/order-ship-item/order-ship-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__order_ship_info_order_ship_info_component__ = __webpack_require__("./src/app/modules/order-ship/order-ship-info/order-ship-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__order_ship_note_order_ship_note_component__ = __webpack_require__("./src/app/modules/order-ship/order-ship-note/order-ship-note.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var OrderShipModalModule = /** @class */ (function () {
    function OrderShipModalModule() {
    }
    OrderShipModalModule = __decorate([
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
                __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__["g" /* TabsModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5_angular2_multiselect_dropdown__["a" /* AngularMultiSelectModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__order_ship_create_order_ship_create_component__["a" /* OrderShipCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_10__order_ship_create_result_order_ship_create_result_component__["a" /* OrderShipCreateResultComponent */],
                __WEBPACK_IMPORTED_MODULE_11__order_ship_item_order_ship_item_component__["a" /* OrderShipItemComponent */],
                __WEBPACK_IMPORTED_MODULE_12__order_ship_info_order_ship_info_component__["a" /* OrderShipInfoComponent */],
                __WEBPACK_IMPORTED_MODULE_13__order_ship_note_order_ship_note_component__["a" /* OrderShipNoteComponent */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_9__order_ship_create_order_ship_create_component__["a" /* OrderShipCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_10__order_ship_create_result_order_ship_create_result_component__["a" /* OrderShipCreateResultComponent */],
                __WEBPACK_IMPORTED_MODULE_11__order_ship_item_order_ship_item_component__["a" /* OrderShipItemComponent */],
                __WEBPACK_IMPORTED_MODULE_12__order_ship_info_order_ship_info_component__["a" /* OrderShipInfoComponent */],
                __WEBPACK_IMPORTED_MODULE_13__order_ship_note_order_ship_note_component__["a" /* OrderShipNoteComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_9__order_ship_create_order_ship_create_component__["a" /* OrderShipCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_10__order_ship_create_result_order_ship_create_result_component__["a" /* OrderShipCreateResultComponent */],
                __WEBPACK_IMPORTED_MODULE_11__order_ship_item_order_ship_item_component__["a" /* OrderShipItemComponent */],
                __WEBPACK_IMPORTED_MODULE_12__order_ship_info_order_ship_info_component__["a" /* OrderShipInfoComponent */],
                __WEBPACK_IMPORTED_MODULE_13__order_ship_note_order_ship_note_component__["a" /* OrderShipNoteComponent */]
            ]
        })
    ], OrderShipModalModule);
    return OrderShipModalModule;
}());



/***/ }),

/***/ "./src/app/modules/order-ship/order-ship.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderShipModule", function() { return OrderShipModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_confirmation_popover__ = __webpack_require__("./node_modules/angular-confirmation-popover/fesm5/angular-confirmation-popover.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_multiselect_dropdown__ = __webpack_require__("./node_modules/angular2-multiselect-dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ng_select_ng_select__ = __webpack_require__("./node_modules/@ng-select/ng-select/esm5/ng-select.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_ckeditor__ = __webpack_require__("./node_modules/ng2-ckeditor/lib/ng2-ckeditor.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_ckeditor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_ckeditor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_toggle_switch__ = __webpack_require__("./node_modules/ngx-toggle-switch/ui-switch.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__order_ship_modal_module__ = __webpack_require__("./src/app/modules/order-ship/order-ship.modal.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__order_ship_list_order_ship_list_component__ = __webpack_require__("./src/app/modules/order-ship/order-ship-list/order-ship-list.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routing = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_11__order_ship_list_order_ship_list_component__["a" /* OrderShipListComponent */]
    }
];
var OrderShipModule = /** @class */ (function () {
    function OrderShipModule() {
    }
    OrderShipModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__["e" /* PaginationModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__["f" /* PopoverModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4_angular_confirmation_popover__["a" /* ConfirmationPopoverModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* RouterModule */].forChild(routing),
                __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__["d" /* ModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7__ng_select_ng_select__["a" /* NgSelectModule */],
                __WEBPACK_IMPORTED_MODULE_8_ng2_ckeditor__["CKEditorModule"],
                __WEBPACK_IMPORTED_MODULE_9_ngx_toggle_switch__["a" /* UiSwitchModule */],
                __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__["g" /* TabsModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5_angular2_multiselect_dropdown__["a" /* AngularMultiSelectModule */],
                __WEBPACK_IMPORTED_MODULE_10__order_ship_modal_module__["a" /* OrderShipModalModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__order_ship_list_order_ship_list_component__["a" /* OrderShipListComponent */],
            ],
            entryComponents: [],
            exports: []
        })
    ], OrderShipModule);
    return OrderShipModule;
}());



/***/ }),

/***/ "./src/app/modules/order-ship/order-ship.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderShipService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__ = __webpack_require__("./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
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





var OrderShipService = /** @class */ (function (_super) {
    __extends(OrderShipService, _super);
    function OrderShipService(http, toaster, title) {
        return _super.call(this, http, title, toaster, 'vận đơn', 'order_ships') || this;
    }
    OrderShipService.prototype.printBills = function (ids) {
        return this.http.get(this.urlRestAPI + "/printBills", { params: { order_ids: ids.join(',') } })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleErrorRequest.bind(this)), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (res) { return res['data']; }));
    };
    OrderShipService.prototype.printBill = function (id) {
        return this.http.get(this.urlRestAPI + "/" + id + "/printBill", { params: {} })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleErrorRequest.bind(this)), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (res) { return res['data']; }));
    };
    OrderShipService.prototype.shipping = function (id) {
        return this.http.get(this.urlRestAPI + "/" + id + "/shipping", { params: {} })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleErrorRequest.bind(this)), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (res) { return res['data']; }));
    };
    OrderShipService.prototype.note = function (item) {
        return this.http.post(this.urlRestAPI + "/" + item['id'] + "/note", item)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleErrorRequest.bind(this)), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (res) { return res['data']; }));
    };
    OrderShipService.prototype.complete = function (id) {
        return this.http.get(this.urlRestAPI + "/" + id + "/complete", { params: {} })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleErrorRequest.bind(this)), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (res) { return res['data']; }));
    };
    OrderShipService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["HttpClient"], __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__["b" /* ToasterService */], __WEBPACK_IMPORTED_MODULE_4__core__["l" /* TitleService */]])
    ], OrderShipService);
    return OrderShipService;
}(__WEBPACK_IMPORTED_MODULE_4__core__["c" /* AbstractCRUDService */]));



/***/ })

});
//# sourceMappingURL=order-ship.module.chunk.js.map