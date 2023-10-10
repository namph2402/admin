webpackJsonp(["order.module"],{

/***/ "./node_modules/ngx-moment/esm5/ngx-moment.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export AddPipe */
/* unused harmony export CalendarPipe */
/* unused harmony export DateFormatPipe */
/* unused harmony export DifferencePipe */
/* unused harmony export DurationPipe */
/* unused harmony export FromUnixPipe */
/* unused harmony export ParsePipe */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MomentModule; });
/* unused harmony export SubtractPipe */
/* unused harmony export TimeAgoPipe */
/* unused harmony export UtcPipe */
/* unused harmony export FromUtcPipe */
/* unused harmony export LocalTimePipe */
/* unused harmony export LocalePipe */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__("./node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);




var momentConstructor = __WEBPACK_IMPORTED_MODULE_1_moment__;
var AddPipe = /** @class */ (function () {
    function AddPipe() {
    }
    AddPipe.prototype.transform = function (value, amount, unit) {
        if (typeof amount === 'undefined' || (typeof amount === 'number' && typeof unit === 'undefined')) {
            throw new Error('AddPipe: missing required arguments');
        }
        return momentConstructor(value).add(amount, unit);
    };
    return AddPipe;
}());
AddPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{ name: 'amAdd' },] },
];
var momentConstructor$1 = __WEBPACK_IMPORTED_MODULE_1_moment__;
var CalendarPipe = /** @class */ (function () {
    function CalendarPipe(cdRef, ngZone) {
        var _this = this;
        this.cdRef = cdRef;
        this.ngZone = ngZone;
        CalendarPipe.initTimer(ngZone);
        CalendarPipe.refs++;
        this.midnightSub = CalendarPipe.midnight.subscribe(function () {
            _this.ngZone.run(function () { return _this.cdRef.markForCheck(); });
        });
    }
    CalendarPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var formats = null;
        var referenceTime = null;
        for (var i = 0, len = args.length; i < len; i++) {
            if (args[i] !== null) {
                if (typeof args[i] === 'object' && !Object(__WEBPACK_IMPORTED_MODULE_1_moment__["isMoment"])(args[i])) {
                    formats = args[i];
                }
                else {
                    referenceTime = momentConstructor$1(args[i]);
                }
            }
        }
        return momentConstructor$1(value).calendar(referenceTime, formats);
    };
    CalendarPipe.prototype.ngOnDestroy = function () {
        if (CalendarPipe.refs > 0) {
            CalendarPipe.refs--;
        }
        if (CalendarPipe.refs === 0) {
            CalendarPipe.removeTimer();
        }
        this.midnightSub.unsubscribe();
    };
    CalendarPipe.initTimer = function (ngZone) {
        if (!CalendarPipe.midnight) {
            CalendarPipe.midnight = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
            if (typeof window !== 'undefined') {
                var timeToUpdate_1 = CalendarPipe._getMillisecondsUntilUpdate();
                CalendarPipe.timer = ngZone.runOutsideAngular(function () {
                    return window.setTimeout(function () {
                        CalendarPipe.midnight.emit(new Date());
                        CalendarPipe.removeTimer();
                        CalendarPipe.initTimer(ngZone);
                    }, timeToUpdate_1);
                });
            }
        }
    };
    CalendarPipe.removeTimer = function () {
        if (CalendarPipe.timer) {
            window.clearTimeout(CalendarPipe.timer);
            CalendarPipe.timer = null;
            CalendarPipe.midnight = null;
        }
    };
    CalendarPipe._getMillisecondsUntilUpdate = function () {
        var now = momentConstructor$1();
        var tomorrow = momentConstructor$1().startOf('day').add(1, 'days');
        var timeToMidnight = tomorrow.valueOf() - now.valueOf();
        return timeToMidnight + 1000;
    };
    return CalendarPipe;
}());
CalendarPipe.refs = 0;
CalendarPipe.timer = null;
CalendarPipe.midnight = null;
CalendarPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{ name: 'amCalendar', pure: false },] },
];
CalendarPipe.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], },
]; };
var momentConstructor$2 = __WEBPACK_IMPORTED_MODULE_1_moment__;
var DateFormatPipe = /** @class */ (function () {
    function DateFormatPipe() {
    }
    DateFormatPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!value) {
            return '';
        }
        return momentConstructor$2(value).format(args[0]);
    };
    return DateFormatPipe;
}());
DateFormatPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{ name: 'amDateFormat' },] },
];
var momentConstructor$3 = __WEBPACK_IMPORTED_MODULE_1_moment__;
var DifferencePipe = /** @class */ (function () {
    function DifferencePipe() {
    }
    DifferencePipe.prototype.transform = function (value, otherValue, unit, precision) {
        var date = momentConstructor$3(value);
        var date2 = (otherValue !== null) ? momentConstructor$3(otherValue) : momentConstructor$3();
        return date.diff(date2, unit, precision);
    };
    return DifferencePipe;
}());
DifferencePipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{ name: 'amDifference' },] },
];
var DurationPipe = /** @class */ (function () {
    function DurationPipe() {
    }
    DurationPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (typeof args === 'undefined' || args.length !== 1) {
            throw new Error('DurationPipe: missing required time unit argument');
        }
        return Object(__WEBPACK_IMPORTED_MODULE_1_moment__["duration"])(value, (args[0])).humanize();
    };
    return DurationPipe;
}());
DurationPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{ name: 'amDuration' },] },
];
var FromUnixPipe = /** @class */ (function () {
    function FromUnixPipe() {
    }
    FromUnixPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (typeof value === 'string') {
            value = +value;
        }
        return Object(__WEBPACK_IMPORTED_MODULE_1_moment__["unix"])(value);
    };
    return FromUnixPipe;
}());
FromUnixPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{ name: 'amFromUnix' },] },
];
var momentConstructor$4 = __WEBPACK_IMPORTED_MODULE_1_moment__;
var ParsePipe = /** @class */ (function () {
    function ParsePipe() {
    }
    ParsePipe.prototype.transform = function (value, format) {
        return momentConstructor$4(value, format);
    };
    return ParsePipe;
}());
ParsePipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{ name: 'amParse' },] },
];
var momentConstructor$5 = __WEBPACK_IMPORTED_MODULE_1_moment__;
var SubtractPipe = /** @class */ (function () {
    function SubtractPipe() {
    }
    SubtractPipe.prototype.transform = function (value, amount, unit) {
        if (typeof amount === 'undefined' || (typeof amount === 'number' && typeof unit === 'undefined')) {
            throw new Error('SubtractPipe: missing required arguments');
        }
        return momentConstructor$5(value).subtract(amount, unit);
    };
    return SubtractPipe;
}());
SubtractPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{ name: 'amSubtract' },] },
];
var momentConstructor$6 = __WEBPACK_IMPORTED_MODULE_1_moment__;
var TimeAgoPipe = /** @class */ (function () {
    function TimeAgoPipe(cdRef, ngZone) {
        this.cdRef = cdRef;
        this.ngZone = ngZone;
    }
    TimeAgoPipe.prototype.transform = function (value, omitSuffix) {
        if (this.hasChanged(value, omitSuffix)) {
            this.lastTime = this.getTime(value);
            this.lastValue = value;
            this.lastOmitSuffix = omitSuffix;
            this.lastLocale = this.getLocale(value);
            this.removeTimer();
            this.createTimer();
            this.lastText = momentConstructor$6(value).from(momentConstructor$6(), omitSuffix);
        }
        else {
            this.createTimer();
        }
        return this.lastText;
    };
    TimeAgoPipe.prototype.ngOnDestroy = function () {
        this.removeTimer();
    };
    TimeAgoPipe.prototype.createTimer = function () {
        var _this = this;
        if (this.currentTimer) {
            return;
        }
        var momentInstance = momentConstructor$6(this.lastValue);
        var timeToUpdate = this.getSecondsUntilUpdate(momentInstance) * 1000;
        this.currentTimer = this.ngZone.runOutsideAngular(function () {
            if (typeof window !== 'undefined') {
                return window.setTimeout(function () {
                    _this.lastText = momentConstructor$6(_this.lastValue).from(momentConstructor$6(), _this.lastOmitSuffix);
                    _this.currentTimer = null;
                    _this.ngZone.run(function () { return _this.cdRef.markForCheck(); });
                }, timeToUpdate);
            }
        });
    };
    TimeAgoPipe.prototype.removeTimer = function () {
        if (this.currentTimer) {
            window.clearTimeout(this.currentTimer);
            this.currentTimer = null;
        }
    };
    TimeAgoPipe.prototype.getSecondsUntilUpdate = function (momentInstance) {
        var howOld = Math.abs(momentConstructor$6().diff(momentInstance, 'minute'));
        if (howOld < 1) {
            return 1;
        }
        else if (howOld < 60) {
            return 30;
        }
        else if (howOld < 180) {
            return 300;
        }
        else {
            return 3600;
        }
    };
    TimeAgoPipe.prototype.hasChanged = function (value, omitSuffix) {
        return this.getTime(value) !== this.lastTime
            || this.getLocale(value) !== this.lastLocale
            || omitSuffix !== this.lastOmitSuffix;
    };
    TimeAgoPipe.prototype.getTime = function (value) {
        if (Object(__WEBPACK_IMPORTED_MODULE_1_moment__["isDate"])(value)) {
            return value.getTime();
        }
        else if (Object(__WEBPACK_IMPORTED_MODULE_1_moment__["isMoment"])(value)) {
            return value.valueOf();
        }
        else {
            return momentConstructor$6(value).valueOf();
        }
    };
    TimeAgoPipe.prototype.getLocale = function (value) {
        return Object(__WEBPACK_IMPORTED_MODULE_1_moment__["isMoment"])(value) ? value.locale() : null;
    };
    return TimeAgoPipe;
}());
TimeAgoPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{ name: 'amTimeAgo', pure: false },] },
];
TimeAgoPipe.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], },
]; };
var momentConstructor$7 = __WEBPACK_IMPORTED_MODULE_1_moment__;
var UtcPipe = /** @class */ (function () {
    function UtcPipe() {
    }
    UtcPipe.prototype.transform = function (value) {
        return momentConstructor$7(value).utc();
    };
    return UtcPipe;
}());
UtcPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{ name: 'amUtc' },] },
];
var FromUtcPipe = /** @class */ (function () {
    function FromUtcPipe() {
    }
    FromUtcPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return Object(__WEBPACK_IMPORTED_MODULE_1_moment__["utc"])(value);
    };
    return FromUtcPipe;
}());
FromUtcPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{ name: 'amFromUtc' },] },
];
var momentConstructor$8 = __WEBPACK_IMPORTED_MODULE_1_moment__;
var LocalTimePipe = /** @class */ (function () {
    function LocalTimePipe() {
    }
    LocalTimePipe.prototype.transform = function (value) {
        return momentConstructor$8(value).local();
    };
    return LocalTimePipe;
}());
LocalTimePipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{ name: 'amLocal' },] },
];
var momentConstructor$9 = __WEBPACK_IMPORTED_MODULE_1_moment__;
var LocalePipe = /** @class */ (function () {
    function LocalePipe() {
    }
    LocalePipe.prototype.transform = function (value, locale) {
        return momentConstructor$9(value).locale(locale);
    };
    return LocalePipe;
}());
LocalePipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{ name: 'amLocale' },] },
];
var ANGULAR_MOMENT_PIPES = [
    AddPipe,
    CalendarPipe,
    DateFormatPipe,
    DifferencePipe,
    DurationPipe,
    FromUnixPipe,
    ParsePipe,
    SubtractPipe,
    TimeAgoPipe,
    UtcPipe,
    FromUtcPipe,
    LocalTimePipe,
    LocalePipe
];
var MomentModule = /** @class */ (function () {
    function MomentModule() {
    }
    return MomentModule;
}());
MomentModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                declarations: ANGULAR_MOMENT_PIPES,
                exports: ANGULAR_MOMENT_PIPES
            },] },
];


//# sourceMappingURL=ngx-moment.js.map


/***/ }),

/***/ "./src/app/modules/order/cart-item.meta.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartItemMeta; });
var CartItemMeta = /** @class */ (function () {
    function CartItemMeta() {
    }
    return CartItemMeta;
}());



/***/ }),

/***/ "./src/app/modules/order/order-cancel/order-cancel.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/order/order-cancel/order-cancel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header bg-primary\">\r\n  <h4 class=\"modal-title pull-left\">Hủy đơn hàng</h4>\r\n  <button (click)=\"dismiss()\" aria-label=\"Close\" class=\"close pull-right\" type=\"button\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n      <form [formGroup]=\"formGroup\" novalidate>\r\n        <div *ngFor=\"let f of fields\" [ngClass]=\"{ 'has-error': !formGroup.controls[f.formControl].valid }\"\r\n             class=\"form-group\">\r\n          <ng-template [ngIf]=\"f.type == 'input'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{ f.label }}\r\n            </label>\r\n            <input [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\" [placeholder]=\"f.placeHolder\"\r\n                   [type]=\"f.typeof\" class=\"form-control\"/>\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type=='textarea'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{f.label}}\r\n            </label>\r\n            <textarea [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\" [placeholder]=\"f.placeHolder\"\r\n                      [rows]=\"5\" class=\"form-control\">\r\n          </textarea>\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type == 'select'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{ f.label }}\r\n            </label>\r\n            <select [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\" class=\"form-control\">\r\n              <option *ngFor=\"let option of f.data\" [value]=\"option[f.config['primaryKey']]\">\r\n                {{ option[f.config[\"labelKey\"]] }}\r\n              </option>\r\n            </select>\r\n          </ng-template>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <button (click)=\"cancel()\" [disabled]=\"!formGroup.valid\" class=\"btn btn-primary\" type=\"button\">\r\n    Hủy đơn\r\n  </button>\r\n  <button (click)=\"dismiss()\" class=\"btn btn-default\" type=\"button\">\r\n    Hủy bỏ\r\n  </button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/order/order-cancel/order-cancel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderCancelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__order_service__ = __webpack_require__("./src/app/modules/order/order.service.ts");
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





var OrderCancelComponent = /** @class */ (function (_super) {
    __extends(OrderCancelComponent, _super);
    function OrderCancelComponent(service, modal, builder) {
        return _super.call(this, service, modal, builder) || this;
    }
    OrderCancelComponent.prototype.onInit = function () {
    };
    OrderCancelComponent.prototype.onDestroy = function () {
    };
    OrderCancelComponent.prototype.buildForm = function () {
        return this.formBuilder.group({
            note: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null),
        });
    };
    OrderCancelComponent.prototype.initFieldForm = function () {
        return [
            __WEBPACK_IMPORTED_MODULE_4__core__["h" /* FieldForm */].createTextArea('Lý do hủy đơn', 'note', 'Nhập kí tự'),
        ];
    };
    OrderCancelComponent.prototype.loaded = function () {
    };
    OrderCancelComponent.prototype.cancel = function () {
        var _this = this;
        var item = __WEBPACK_IMPORTED_MODULE_4__core__["j" /* ObjectUtil */].combineValue(this.model, this.formGroup.value);
        this.service.cancel(item).subscribe(function (res) {
            _this.service.toastSuccessfully('Hủy');
            _this.close(res);
        }, function () { return _this.service.toastFailed('Hủy'); });
    };
    OrderCancelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-order-cancel',
            template: __webpack_require__("./src/app/modules/order/order-cancel/order-cancel.component.html"),
            styles: [__webpack_require__("./src/app/modules/order/order-cancel/order-cancel.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__order_service__["a" /* OrderService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__order_service__["a" /* OrderService */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__["a" /* BsModalRef */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]])
    ], OrderCancelComponent);
    return OrderCancelComponent;
}(__WEBPACK_IMPORTED_MODULE_4__core__["d" /* AbstractModalComponent */]));



/***/ }),

/***/ "./src/app/modules/order/order-confirm/order-confirm.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/order/order-confirm/order-confirm.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header bg-primary\">\r\n  <h4 class=\"modal-title pull-left\">Xác nhận đơn hàng</h4>\r\n  <button (click)=\"dismiss()\" aria-label=\"Close\" class=\"close pull-right\" type=\"button\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n      <form [formGroup]=\"formGroup\" novalidate>\r\n        <div *ngFor=\"let f of fields\" [ngClass]=\"{ 'has-error': !formGroup.controls[f.formControl].valid }\"\r\n             class=\"form-group\">\r\n          <ng-template [ngIf]=\"f.type == 'input'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{ f.label }}\r\n            </label>\r\n            <input [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\" [placeholder]=\"f.placeHolder\"\r\n                   [type]=\"f.typeof\" class=\"form-control\"/>\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type=='textarea'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{f.label}}\r\n            </label>\r\n            <textarea [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\" [placeholder]=\"f.placeHolder\"\r\n                      [rows]=\"5\" class=\"form-control\">\r\n          </textarea>\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type == 'select'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{ f.label }}\r\n            </label>\r\n            <select [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\" class=\"form-control\">\r\n              <option *ngFor=\"let option of f.data\" [value]=\"option[f.config['primaryKey']]\">\r\n                {{ option[f.config[\"labelKey\"]] }}\r\n              </option>\r\n            </select>\r\n          </ng-template>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <button (click)=\"confirm()\" [disabled]=\"!formGroup.valid\" class=\"btn btn-primary\" type=\"button\">\r\n    Xác nhận\r\n  </button>\r\n  <button (click)=\"dismiss()\" class=\"btn btn-default\" type=\"button\">\r\n    Hủy bỏ\r\n  </button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/order/order-confirm/order-confirm.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderConfirmComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__order_service__ = __webpack_require__("./src/app/modules/order/order.service.ts");
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





var OrderConfirmComponent = /** @class */ (function (_super) {
    __extends(OrderConfirmComponent, _super);
    function OrderConfirmComponent(service, modal, builder) {
        return _super.call(this, service, modal, builder) || this;
    }
    OrderConfirmComponent.prototype.onInit = function () {
    };
    OrderConfirmComponent.prototype.onDestroy = function () {
    };
    OrderConfirmComponent.prototype.buildForm = function () {
        return this.formBuilder.group({
            note: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null),
        });
    };
    OrderConfirmComponent.prototype.initFieldForm = function () {
        return [
            __WEBPACK_IMPORTED_MODULE_4__core__["h" /* FieldForm */].createTextArea('Ghi chú xác nhận', 'note', 'Nhập kí tự'),
        ];
    };
    OrderConfirmComponent.prototype.loaded = function () {
    };
    OrderConfirmComponent.prototype.confirm = function () {
        var _this = this;
        var item = __WEBPACK_IMPORTED_MODULE_4__core__["j" /* ObjectUtil */].combineValue(this.model, this.formGroup.value);
        this.service.confirm(item).subscribe(function (res) {
            _this.service.toastSuccessfully('Hủy');
            _this.close(res);
        }, function () { return _this.service.toastFailed('Hủy'); });
    };
    OrderConfirmComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-order-confirm',
            template: __webpack_require__("./src/app/modules/order/order-confirm/order-confirm.component.html"),
            styles: [__webpack_require__("./src/app/modules/order/order-confirm/order-confirm.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__order_service__["a" /* OrderService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__order_service__["a" /* OrderService */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__["a" /* BsModalRef */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]])
    ], OrderConfirmComponent);
    return OrderConfirmComponent;
}(__WEBPACK_IMPORTED_MODULE_4__core__["d" /* AbstractModalComponent */]));



/***/ }),

/***/ "./src/app/modules/order/order-create/order-create.component.css":
/***/ (function(module, exports) {

module.exports = "input[type=number]::-webkit-inner-spin-button,\r\ninput[type=number]::-webkit-outer-spin-button {\r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n    appearance: none;\r\n    margin: 0;\r\n}\r\n\r\n.form-variant {\r\n  display: -webkit-box !important;\r\n  display: -ms-flexbox !important;\r\n  display: flex !important;\r\n  margin-top: 10px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/modules/order/order-create/order-create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header bg-primary\">\r\n  <h4 class=\"modal-title pull-left\">Thêm mới</h4>\r\n  <button (click)=\"dismiss()\" aria-label=\"Close\" class=\"close pull-right\" type=\"button\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <div class=\"row\">\r\n    <form [formGroup]=\"formGroup\" class=\"col-xs-12\" novalidate>\r\n      <!-- Khách hàng -->\r\n      <div class=\"col-md-4\" style=\"border-right: 1px solid rgb(228, 228, 228)\">\r\n        <h3>Thông tin khách hàng</h3>\r\n        <!-- Số điện thoại -->\r\n        <div [ngClass]=\"{'has-error': !formGroup.controls[fields[1].formControl].valid}\" class=\"form-group\">\r\n          <label [for]=\"fields[1].formControl\">\r\n            {{ fields[1].label }}\r\n          </label>\r\n          <input [formControlName]=\"fields[1].formControl\" [id]=\"fields[1].formControl\" [name]=\"fields[1].formControl\"\r\n            [placeholder]=\"fields[1].placeHolder\" [type]=\"fields[1].typeof\" class=\"form-control\" />\r\n        </div>\r\n        <!-- Tên -->\r\n        <div [ngClass]=\"{'has-error': !formGroup.controls[fields[0].formControl].valid}\" class=\"form-group\">\r\n          <label [for]=\"fields[0].formControl\">\r\n            {{ fields[0].label }}\r\n          </label>\r\n          <input [formControlName]=\"fields[0].formControl\" [id]=\"fields[0].formControl\" [name]=\"fields[0].formControl\"\r\n            [placeholder]=\"fields[0].placeHolder\" [type]=\"fields[0].typeof\" class=\"form-control\" />\r\n        </div>\r\n        <!-- Tỉnh/Thành phố -->\r\n        <div [ngClass]=\"{ 'has-error': !formGroup.controls[fields[3].formControl].valid}\" class=\"form-group\">\r\n          <label [for]=\"fields[3].formControl\">\r\n            {{ fields[3].label }}\r\n          </label>\r\n          <angular2-multiselect [data]=\"fields[3].data\" [formControlName]=\"fields[3].formControl\"\r\n            [id]=\"fields[3].formControl\" [settings]=\"fields[3].config\">\r\n          </angular2-multiselect>\r\n        </div>\r\n        <!-- Huyện/Quận -->\r\n        <div [ngClass]=\"{ 'has-error': !formGroup.controls[fields[4].formControl].valid}\" class=\"form-group\">\r\n          <label [for]=\"fields[4].formControl\">\r\n            {{ fields[4].label }}\r\n          </label>\r\n          <angular2-multiselect [data]=\"fields[4].data\" [formControlName]=\"fields[4].formControl\"\r\n            [id]=\"fields[4].formControl\" [settings]=\"fields[4].config\">\r\n          </angular2-multiselect>\r\n        </div>\r\n        <!-- Xã/Phường -->\r\n        <div [ngClass]=\"{'has-error': !formGroup.controls[fields[5].formControl].valid}\" class=\"form-group\">\r\n          <label [for]=\"fields[5].formControl\">\r\n            {{ fields[5].label }}\r\n          </label>\r\n          <angular2-multiselect [data]=\"fields[5].data\" [formControlName]=\"fields[5].formControl\"\r\n            [id]=\"fields[5].formControl\" [settings]=\"fields[5].config\">\r\n          </angular2-multiselect>\r\n        </div>\r\n        <!-- Địa chỉ -->\r\n        <div [ngClass]=\"{'has-error': !formGroup.controls[fields[2].formControl].valid}\" class=\"form-group\">\r\n          <label [for]=\"fields[2].formControl\">\r\n            {{ fields[2].label }}\r\n          </label>\r\n          <input [formControlName]=\"fields[2].formControl\" [id]=\"fields[2].formControl\" [name]=\"fields[2].formControl\"\r\n            [placeholder]=\"fields[2].placeHolder\" [type]=\"fields[2].typeof\" class=\"form-control\" />\r\n        </div>\r\n        <!-- Yêu cầu -->\r\n        <div [ngClass]=\"{'has-error': !formGroup.controls[fields[6].formControl].valid}\" class=\"form-group\">\r\n          <label [for]=\"fields[6].formControl\">\r\n            {{ fields[6].label }}\r\n          </label>\r\n          <textarea [formControlName]=\"fields[6].formControl\" [id]=\"fields[6].formControl\"\r\n            [name]=\"fields[6].formControl\" [placeholder]=\"fields[6].placeHolder\" [rows]=\"fields[6].config['rows']\"\r\n            class=\"form-control\" style=\"max-width: 1090px\">\r\n          </textarea>\r\n        </div>\r\n      </div>\r\n      <!-- Sản phẩm -->\r\n      <div class=\"col-md-8\">\r\n        <h3>Thông tin sản phẩm</h3>\r\n        <div class=\"form-group\" style=\"margin-bottom: 20px\">\r\n          <label>Chọn sản phẩm</label>\r\n          <angular2-multiselect [(ngModel)]=\"productList\" [id]=\"fields[7].formControl\"\r\n            [formControlName]=\"fields[7].formControl\" [data]=\"fields[7].data\" [settings]=\"fields[7].config\"\r\n            (ngModelChange)=\"addProduct(productList)\">\r\n          </angular2-multiselect>\r\n        </div>\r\n\r\n        <table class=\"table-responsive table table-bordered table-hover form-group\">\r\n          <thead>\r\n            <tr>\r\n              <th style=\"width: 8%\">#</th>\r\n              <th style=\"width: 32%\">Sản phẩm</th>\r\n              <th style=\"width: 18%\">Loại</th>\r\n              <th style=\"width: 13%\">Đơn giá</th>\r\n              <th style=\"width: 12%\">Số lượng</th>\r\n              <th style=\"width: 15%\">Thành tiền</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let item of arrProduct; let i = index\" class=\"odd\">\r\n              <td style=\"text-align: center; padding: 20px 0\">\r\n                <button (click)=\"deleteArr(item)\" class=\"btn btn-danger btn-sm\" type=\"button\">\r\n                  <i class=\"fa fa-remove\"></i>\r\n                </button>\r\n              </td>\r\n              <td>\r\n                <label>{{ item.product.code }}</label> - {{ item.product.name }}\r\n              </td>\r\n              <td>\r\n                <select [(ngModel)]=\"item.warehouse_id\" [ngModelOptions]=\"{ standalone: true }\" class=\"form-control\"\r\n                  (ngModelChange)=\"checkArr(item.warehouse_id, i)\">\r\n                  <option disabled hidden selected value=\"0\">Chọn loại</option>\r\n                  <option *ngFor=\"let w of item.product.warehouse_views\" [value]=\"w.id\">\r\n                    {{ w.size.name }} - {{ w.color.name }}\r\n                  </option>\r\n                </select>\r\n              </td>\r\n              <td class=\"text-right\">\r\n                {{ item.unit_price | number : \"1.0-0\" }}\r\n              </td>\r\n              <td>\r\n                <input [(ngModel)]=\"item.quantity\" [ngModelOptions]=\"{ standalone: true }\"\r\n                  oninput=\"this.value = Math.abs(this.value)\" type=\"number\" value=\"1\" (ngModelChange)=\"updateCart()\"\r\n                  style=\"width: 100%; text-align: center\" />\r\n              </td>\r\n              <td class=\"text-right\">\r\n                {{ item.unit_price * item.quantity | number : \"1.0-0\" }}\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <th colspan=\"4\" class=\"text-right\">Tổng tiền</th>\r\n              <td colspan=\"2\" class=\"text-right\">{{ amount | number : \"1.0-0\" }}</td>\r\n            </tr>\r\n            <tr>\r\n              <th colspan=\"4\" class=\"text-right\">Phí ship</th>\r\n              <td colspan=\"2\" class=\"text-right\">{{ shipFee | number : \"1.0-0\" }}</td>\r\n            </tr>\r\n            <tr>\r\n              <th colspan=\"4\" class=\"text-right\">Giảm giá</th>\r\n              <td colspan=\"2\" class=\"text-right\">{{ discount | number : \"1.0-0\" }}</td>\r\n            </tr>\r\n            <tr>\r\n              <th colspan=\"4\" class=\"text-right\">Tổng thanh toán</th>\r\n              <td colspan=\"2\" class=\"text-right\"><label>{{ totalAmount | number : \"1.0-0\" }}</label>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n\r\n        <div class=\"form-group\">\r\n          <label [for]=\"fields[8].formControl\">\r\n            {{fields[8].label}}\r\n          </label>\r\n          <angular2-multiselect [data]=\"fields[8].data\" [formControlName]=\"fields[8].formControl\"\r\n            [id]=\"fields[8].formControl\" [settings]=\"fields[8].config\">\r\n          </angular2-multiselect>\r\n        </div>\r\n\r\n        <div style=\"display: flex;\">\r\n          <div [ngClass]=\"{'has-error':!formGroup.controls[fields[9].formControl].valid}\" class=\"form-group col-md-6\"\r\n            style=\"padding-left: 0;\">\r\n            <label [for]=\"fields[9].formControl\">\r\n              {{fields[9].label}}\r\n            </label>\r\n            <select [formControlName]=\"fields[9].formControl\" [id]=\"fields[9].formControl\"\r\n              [name]=\"fields[9].formControl\" class=\"form-control\">\r\n              <option *ngFor=\"let option of fields[9].data\" [value]=\"option['name']\">{{option['name']}}</option>\r\n            </select>\r\n          </div>\r\n          <div [ngClass]=\"{'has-error':!formGroup.controls[fields[10].formControl].valid}\" class=\"form-group col-md-6\"\r\n            style=\"padding-right: 0;\">\r\n            <label [for]=\"fields[10].formControl\">\r\n              {{fields[10].label}}\r\n            </label>\r\n            <select [formControlName]=\"fields[10].formControl\" [id]=\"fields[10].formControl\"\r\n              [name]=\"fields[10].formControl\" class=\"form-control\">\r\n              <option *ngFor=\"let option of fields[10].data\" [value]=\"option['value']\">{{option['name']}}</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <button (click)=\"create()\" [disabled]=\"!formGroup.valid\" class=\"btn btn-primary\" type=\"button\">\r\n    Thêm\r\n  </button>\r\n  <button (click)=\"dismiss()\" class=\"btn btn-default\" type=\"button\">\r\n    Hủy bỏ\r\n  </button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/order/order-create/order-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__order_service__ = __webpack_require__("./src/app/modules/order/order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core__ = __webpack_require__("./src/app/core/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__voucher_voucher_service__ = __webpack_require__("./src/app/modules/voucher/voucher.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__product_product_service__ = __webpack_require__("./src/app/modules/product/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__province_province_service__ = __webpack_require__("./src/app/modules/province/province.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shipping_fee_shipping_fee_service__ = __webpack_require__("./src/app/modules/shipping-fee/shipping-fee.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__customer_customer_service__ = __webpack_require__("./src/app/modules/customer/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__payment_method_payment_method_service__ = __webpack_require__("./src/app/modules/payment-method/payment-method.service.ts");
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











var OrderCreateComponent = /** @class */ (function (_super) {
    __extends(OrderCreateComponent, _super);
    function OrderCreateComponent(service, modal, builder, productService, voucherService, provinceService, shipFeeService, customerService, paymentervice) {
        var _this = _super.call(this, service, modal, builder) || this;
        _this.productService = productService;
        _this.voucherService = voucherService;
        _this.provinceService = provinceService;
        _this.shipFeeService = shipFeeService;
        _this.customerService = customerService;
        _this.paymentervice = paymentervice;
        _this.amount = 0;
        _this.shipFee = 0;
        _this.shipFeeOld = 0;
        _this.discount = 0;
        _this.totalAmount = 0;
        _this.voucher = [];
        _this.arrProduct = [];
        return _this;
    }
    OrderCreateComponent.prototype.onInit = function () {
    };
    OrderCreateComponent.prototype.onDestroy = function () {
    };
    OrderCreateComponent.prototype.loadVouchers = function () {
        return this.voucherService.loadByParams({ status: 1 });
    };
    OrderCreateComponent.prototype.loadPayments = function () {
        return this.paymentervice.loadByParams({ status: 1 });
    };
    OrderCreateComponent.prototype.loadAllProvinces = function () {
        return this.provinceService.loadAll();
    };
    OrderCreateComponent.prototype.loadAllProducts = function () {
        return this.productService.loadByParams({ status: 1 });
    };
    OrderCreateComponent.prototype.buildForm = function () {
        return this.formBuilder.group({
            customer_name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(255), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern('^(?=.*[a-zA-Z\đàáảãạăằắẳẵặâầấẩẫậèéẻẽẹêềếểễệìíỉĩịòóỏõọôồốổỗộơờớởỡợùúủũụưừứửữựỳýỷỹỵĐÀÁẢÃẠĂẰẮẲẴẶÂẦẤẨẪẬÈÉẺẼẸÊỀẾỂỄỆÌÍỈĨỊÒÓỎÕỌÔỒỐỔỖỘƠỜỚỞỠỢÙÚỦŨỤƯỪỨỬỮỰỲÝỶỸỴ]+)[a-zA-Z\đàáảãạăằắẳẵặâầấẩẫậèéẻẽẹêềếểễệìíỉĩịòóỏõọôồốổỗộơờớởỡợùúủũụưừứửữựỳýỷỹỵĐÀÁẢÃẠĂẰẮẲẴẶÂẦẤẨẪẬÈÉẺẼẸÊỀẾỂỄỆÌÍỈĨỊÒÓỎÕỌÔỒỐỔỖỘƠỜỚỞỠỢÙÚỦŨỤƯỪỨỬỮỰỲÝỶỸỴ ]*$')]),
            customer_phone: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern('^(0)[0-9]{9}$')]),
            customer_address: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(255), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]),
            province: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            district: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            ward: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            customer_request: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(255)),
            product: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            shipping_fee: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].min(0)]),
            voucher_id: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null),
            voucher_list: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null),
            amount: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null),
            discount: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null),
            total_amount: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null),
            payment_type: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            payment_status: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
        });
    };
    OrderCreateComponent.prototype.initFieldForm = function () {
        return [
            __WEBPACK_IMPORTED_MODULE_4__core__["h" /* FieldForm */].createTextInput('Tên khách hàng', 'customer_name', 'Nhập kí tự'),
            __WEBPACK_IMPORTED_MODULE_4__core__["h" /* FieldForm */].createNumberInput('Số điện thoại khách hàng', 'customer_phone', 'Nhập số'),
            __WEBPACK_IMPORTED_MODULE_4__core__["h" /* FieldForm */].createTextInput('Địa chỉ khách hàng', 'customer_address', 'Nhập kí tự'),
            __WEBPACK_IMPORTED_MODULE_4__core__["h" /* FieldForm */].createSingleSelect2('Tỉnh/Thành phố', 'province', '', 'loadAllProvinces'),
            __WEBPACK_IMPORTED_MODULE_4__core__["h" /* FieldForm */].createSingleSelect2('Huyện/Quận', 'district', '', []),
            __WEBPACK_IMPORTED_MODULE_4__core__["h" /* FieldForm */].createSingleSelect2('Xã/Phường', 'ward', '', []),
            __WEBPACK_IMPORTED_MODULE_4__core__["h" /* FieldForm */].createTextArea('Yêu cầu của khách hàng', 'customer_request', 'Nhập kí tự', 5),
            __WEBPACK_IMPORTED_MODULE_4__core__["h" /* FieldForm */].createSingleSelect2('Sản phẩm', 'product', 'Chọn một', 'loadAllProducts'),
            __WEBPACK_IMPORTED_MODULE_4__core__["h" /* FieldForm */].createSingleSelect2('Mã giảm giá', 'voucher_list', 'Chọn một', 'loadVouchers'),
            __WEBPACK_IMPORTED_MODULE_4__core__["h" /* FieldForm */].createSelect('Hình thức thanh toán', 'payment_type', 'Chọn một', 'loadPayments'),
            __WEBPACK_IMPORTED_MODULE_4__core__["h" /* FieldForm */].createSelect('Trạng thái thanh toán', 'payment_status', '', [
                {
                    name: "Chưa thanh toán",
                    value: "0"
                },
                {
                    name: "Đã thanh toán",
                    value: "1"
                }
            ]),
        ];
    };
    OrderCreateComponent.prototype.loaded = function () {
    };
    OrderCreateComponent.prototype.onFormChanged = function () {
        var _this = this;
        _super.prototype.onFormChanged.call(this);
        this.formGroup.controls['customer_phone'].valueChanges.debounceTime(1000).subscribe(function (value) {
            if (value && value.length == 10) {
                _this.customerService.loadByParams({ phone: value }).subscribe(function (customers) {
                    if (customers.length > 0) {
                        var c_1 = customers[0];
                        var provinceObj = _this.fields[3].data.filter(function (v) { return v.name == c_1.province; });
                        var districtObj = void 0, wardObj = void 0;
                        if (provinceObj.length > 0) {
                            _this.fields[4].data = provinceObj[0]['districts'];
                            districtObj = _this.fields[4].data.filter(function (v) { return v.name == c_1.district; });
                            if (districtObj.length > 0) {
                                _this.fields[5].data = districtObj[0]['wards'];
                                wardObj = _this.fields[5].data.filter(function (v) { return v.name == c_1.ward; });
                            }
                        }
                        var dataForm_1 = {
                            customer_name: c_1.fullname,
                            customer_address: c_1.address,
                            province: provinceObj,
                            district: districtObj,
                            ward: wardObj
                        };
                        Object.keys(dataForm_1).forEach(function (v) { return _this.setFormValueByKey(v, dataForm_1[v], { emitEvent: false }); });
                        if (wardObj.length > 0) {
                            _this.shipFeeService.loadByParams({ ward_id: wardObj[0].id }).subscribe(function (shipFees) {
                                if (shipFees.length > 0) {
                                    var s = shipFees[0];
                                    _this.shipFee = _this.shipFeeOld = s.fee;
                                    _this.updateCart();
                                }
                            });
                        }
                    }
                });
            }
        });
        this.formGroup.controls['province'].valueChanges.subscribe(function (value) {
            if (value && value.length > 0) {
                _this.formGroup.controls['district'].setValue(null);
                _this.formGroup.controls['ward'].setValue(null);
                _this.fields[4].data = value[0].districts;
                _this.fields[5].data = [];
                _this.shipFee = 0;
            }
        });
        this.formGroup.controls['district'].valueChanges.subscribe(function (value) {
            if (value && value.length > 0) {
                _this.formGroup.controls['ward'].setValue(null);
                _this.fields[5].data = value[0].wards;
            }
        });
        this.formGroup.controls['ward'].valueChanges.subscribe(function (value) {
            if (value && value.length > 0) {
                _this.shipFeeService.loadByParams({ ward_id: value[0].id }).subscribe(function (shipFees) {
                    if (shipFees.length > 0) {
                        var s = shipFees[0];
                        _this.shipFee = _this.shipFeeOld = s.fee;
                        _this.updateCart();
                    }
                });
            }
        });
        this.formGroup.controls['voucher_list'].valueChanges.subscribe(function (value) {
            if (value && value.length > 0) {
                _this.voucher = value;
            }
            else {
                _this.voucher = [];
            }
            _this.updateCart();
        });
    };
    OrderCreateComponent.prototype.addProduct = function (productList) {
        if (productList && productList.length > 0) {
            this.arrProduct.push({
                product: productList[0],
                warehouse_id: 0,
                unit_price: productList[0].sale_price,
                quantity: 1,
            });
            this.updateCart();
        }
    };
    OrderCreateComponent.prototype.checkArr = function (warehouse, i) {
        var test = this.arrProduct.filter(function (p) { return p.warehouse_id == warehouse; });
        if (test.length >= 2) {
            test[0].quantity = test[0].quantity + test[1].quantity;
            this.arrProduct.splice(i, 1);
            this.updateCart();
        }
    };
    OrderCreateComponent.prototype.updateCart = function () {
        var _this = this;
        var quantity = 0;
        this.amount = 0;
        this.arrProduct.map(function (v) { return v.quantity; }).forEach(function (v) {
            quantity += v;
        });
        this.arrProduct.map(function (v) { return v.unit_price * v.quantity; }).forEach(function (v) {
            _this.amount = _this.amount + v;
        });
        this.checkVoucher();
    };
    OrderCreateComponent.prototype.checkVoucher = function () {
        this.discount = 0;
        this.shipFee = this.shipFeeOld;
        this.formGroup.controls['voucher_id'].setValue(null);
        if (this.voucher.length > 0) {
            var v = this.voucher[0];
            if (Date.parse(v.expired_date) > Date.now()) {
                if (this.amount < v.min_order_value) {
                    this.service.toastError('Không đủ điều kiện áp dụng');
                }
                else {
                    if (v.type == 2) {
                        this.shipFee = 0;
                    }
                    else {
                        if (this.amount <= v.discount_value) {
                            this.discount = this.amount;
                        }
                        else {
                            this.discount = (this.amount * v.discount_percent / 100) + v.discount_value;
                        }
                    }
                    this.formGroup.controls['voucher_id'].setValue(v.id);
                }
            }
        }
        this.checkout();
    };
    OrderCreateComponent.prototype.checkout = function () {
        var amountT = this.amount - this.discount;
        if (amountT < 0) {
            amountT = 0;
        }
        this.totalAmount = amountT + this.shipFee;
        this.formGroup.controls['amount'].setValue(this.amount);
        this.formGroup.controls['shipping_fee'].setValue(this.shipFee);
        this.formGroup.controls['discount'].setValue(this.discount);
        this.formGroup.controls['total_amount'].setValue(this.totalAmount);
    };
    OrderCreateComponent.prototype.deleteArr = function (i) {
        this.arrProduct.splice(i, 1);
        if (this.arrProduct.length == 0) {
            this.formGroup.controls['product'].setValue(null);
        }
        this.updateCart();
    };
    OrderCreateComponent.prototype.create = function () {
        var _this = this;
        var status = 0;
        var _loop_1 = function (i) {
            var list = i.product.warehouses;
            if (i.quantity == 0 || i.warehouse_id == 0) {
                this_1.service.toastError("Cần nhập đủ thông tin sản phẩm");
                status = 1;
                return "break";
            }
            else {
                var t = list.filter(function (w) { return w.id == i.warehouse_id; });
                if (t[0].quantity < i.quantity) {
                    this_1.service.toastError("Sản phẩm " + i.product.code + " không đủ hàng");
                    status = 1;
                    return "break";
                }
            }
        };
        var this_1 = this;
        for (var _i = 0, _a = this.arrProduct; _i < _a.length; _i++) {
            var i = _a[_i];
            var state_1 = _loop_1(i);
            if (state_1 === "break")
                break;
        }
        if (status == 0) {
            var item = __WEBPACK_IMPORTED_MODULE_4__core__["j" /* ObjectUtil */].combineValue(this.model, this.formGroup.value);
            item.province = this.getFormValue('province')[0].name;
            item.district = this.getFormValue('district')[0].name;
            item.ward = this.getFormValue('ward')[0].name;
            item.product = JSON.stringify(this.arrProduct);
            this.service.store(item).subscribe(function (res) {
                _this.service.toastSuccessfullyCreated();
                _this.close(res);
            }, function () { return _this.service.toastFailedCreated(); });
        }
    };
    OrderCreateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-order-create',
            template: __webpack_require__("./src/app/modules/order/order-create/order-create.component.html"),
            styles: [__webpack_require__("./src/app/modules/order/order-create/order-create.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_9__customer_customer_service__["a" /* CustomerService */], __WEBPACK_IMPORTED_MODULE_3__order_service__["a" /* OrderService */], __WEBPACK_IMPORTED_MODULE_5__voucher_voucher_service__["a" /* VoucherService */], __WEBPACK_IMPORTED_MODULE_6__product_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_7__province_province_service__["a" /* ProvinceService */], __WEBPACK_IMPORTED_MODULE_8__shipping_fee_shipping_fee_service__["a" /* ShippingFeeService */], __WEBPACK_IMPORTED_MODULE_10__payment_method_payment_method_service__["a" /* PaymentMethodService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__order_service__["a" /* OrderService */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__["a" /* BsModalRef */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_6__product_product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_5__voucher_voucher_service__["a" /* VoucherService */],
            __WEBPACK_IMPORTED_MODULE_7__province_province_service__["a" /* ProvinceService */],
            __WEBPACK_IMPORTED_MODULE_8__shipping_fee_shipping_fee_service__["a" /* ShippingFeeService */],
            __WEBPACK_IMPORTED_MODULE_9__customer_customer_service__["a" /* CustomerService */],
            __WEBPACK_IMPORTED_MODULE_10__payment_method_payment_method_service__["a" /* PaymentMethodService */]])
    ], OrderCreateComponent);
    return OrderCreateComponent;
}(__WEBPACK_IMPORTED_MODULE_4__core__["d" /* AbstractModalComponent */]));



/***/ }),

/***/ "./src/app/modules/order/order-edit/order-edit.component.css":
/***/ (function(module, exports) {

module.exports = "body {\r\n  margin: 5px;\r\n  background: #A6A6A6\r\n}\r\n\r\n/* Tab Navigation */\r\n\r\n.nav-tabs {\r\n  margin: 0;\r\n  padding: 0;\r\n  border: 0;\r\n}\r\n\r\n.nav-tabs > li > a {\r\n  background: #DADADA;\r\n  border-radius: 0;\r\n  -webkit-box-shadow: inset 0 -8px 7px -9px rgba(0, 0, 0, .4), -2px -2px 5px -2px rgba(0, 0, 0, .4);\r\n          box-shadow: inset 0 -8px 7px -9px rgba(0, 0, 0, .4), -2px -2px 5px -2px rgba(0, 0, 0, .4);\r\n}\r\n\r\n.nav-tabs > li.active > a,\r\n.nav-tabs > li.active > a:hover {\r\n  background: #F5F5F5;\r\n  -webkit-box-shadow: inset 0 0 0 0 rgba(0, 0, 0, .4), -2px -3px 5px -2px rgba(0, 0, 0, .4);\r\n          box-shadow: inset 0 0 0 0 rgba(0, 0, 0, .4), -2px -3px 5px -2px rgba(0, 0, 0, .4);\r\n}\r\n\r\n/* Tab Content */\r\n\r\n.tab-pane {\r\n  background: #F5F5F5;\r\n  -webkit-box-shadow: 0 0 4px rgba(0, 0, 0, .4);\r\n          box-shadow: 0 0 4px rgba(0, 0, 0, .4);\r\n  border-radius: 0;\r\n  text-align: left;\r\n  padding: 10px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/modules/order/order-edit/order-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header bg-primary\">\r\n  <h4 class=\"modal-title pull-left\">Chỉnh sửa</h4>\r\n  <button (click)=\"dismiss()\" aria-label=\"Close\" class=\"close pull-right\" type=\"button\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <div class=\"row\">\r\n    <form [formGroup]=\"formGroup\" class=\"col-xs-12\" novalidate>\r\n      <!-- Khách hàng -->\r\n      <div class=\"col-md-4\" style=\"border-right: 1px solid rgb(228, 228, 228)\">\r\n        <h3>Thông tin khách hàng</h3>\r\n        <!-- Tên -->\r\n        <div [ngClass]=\"{'has-error': !formGroup.controls[fields[0].formControl].valid}\" class=\"form-group\">\r\n          <label [for]=\"fields[0].formControl\">\r\n            {{ fields[0].label }}\r\n          </label>\r\n          <input [formControlName]=\"fields[0].formControl\" [id]=\"fields[0].formControl\" [name]=\"fields[0].formControl\"\r\n            [placeholder]=\"fields[0].placeHolder\" [type]=\"fields[0].typeof\" class=\"form-control\" />\r\n        </div>\r\n        <!-- Số điện thoại -->\r\n        <div [ngClass]=\"{'has-error': !formGroup.controls[fields[1].formControl].valid}\" class=\"form-group\">\r\n          <label [for]=\"fields[1].formControl\">\r\n            {{ fields[1].label }}\r\n          </label>\r\n          <input [formControlName]=\"fields[1].formControl\" [id]=\"fields[1].formControl\" [name]=\"fields[1].formControl\"\r\n            [placeholder]=\"fields[1].placeHolder\" [type]=\"fields[1].typeof\" class=\"form-control\" />\r\n        </div>\r\n        <!-- Tỉnh/Thành phố -->\r\n        <div [ngClass]=\"{'has-error': !formGroup.controls[fields[3].formControl].valid}\" class=\"form-group\">\r\n          <label [for]=\"fields[3].formControl\">\r\n            {{ fields[3].label }}\r\n          </label>\r\n          <angular2-multiselect [data]=\"fields[3].data\" [formControlName]=\"fields[3].formControl\"\r\n            [id]=\"fields[3].formControl\" [settings]=\"fields[3].config\">\r\n          </angular2-multiselect>\r\n        </div>\r\n        <!-- Huyện/Quận -->\r\n        <div [ngClass]=\"{'has-error': !formGroup.controls[fields[4].formControl].valid}\" class=\"form-group\">\r\n          <label [for]=\"fields[4].formControl\">\r\n            {{ fields[4].label }}\r\n          </label>\r\n          <angular2-multiselect [data]=\"fields[4].data\" [formControlName]=\"fields[4].formControl\"\r\n            [id]=\"fields[4].formControl\" [settings]=\"fields[4].config\">\r\n          </angular2-multiselect>\r\n        </div>\r\n        <!-- Xã/Phường -->\r\n        <div [ngClass]=\"{'has-error': !formGroup.controls[fields[5].formControl].valid}\" class=\"form-group\">\r\n          <label [for]=\"fields[5].formControl\">\r\n            {{ fields[5].label }}\r\n          </label>\r\n          <angular2-multiselect [data]=\"fields[5].data\" [formControlName]=\"fields[5].formControl\"\r\n            [id]=\"fields[5].formControl\" [settings]=\"fields[5].config\">\r\n          </angular2-multiselect>\r\n        </div>\r\n        <!-- Địa chỉ -->\r\n        <div [ngClass]=\"{'has-error': !formGroup.controls[fields[2].formControl].valid}\" class=\"form-group\">\r\n          <label [for]=\"fields[2].formControl\">\r\n            {{ fields[2].label }}\r\n          </label>\r\n          <input [formControlName]=\"fields[2].formControl\" [id]=\"fields[2].formControl\" [name]=\"fields[2].formControl\"\r\n            [placeholder]=\"fields[2].placeHolder\" [type]=\"fields[2].typeof\" class=\"form-control\" />\r\n        </div>\r\n        <!-- Yêu cầu -->\r\n        <div [ngClass]=\"{'has-error': !formGroup.controls[fields[6].formControl].valid}\" class=\"form-group\">\r\n          <label [for]=\"fields[6].formControl\">\r\n            {{ fields[6].label }}\r\n          </label>\r\n          <textarea [formControlName]=\"fields[6].formControl\" [id]=\"fields[6].formControl\"\r\n            [name]=\"fields[6].formControl\" [placeholder]=\"fields[6].placeHolder\" [rows]=\"fields[6].config['rows']\"\r\n            class=\"form-control\" style=\"max-width: 1090px\">\r\n          </textarea>\r\n        </div>\r\n      </div>\r\n      <!-- Sản phẩm -->\r\n      <div class=\"col-md-8\">\r\n        <h3>Thông tin sản phẩm</h3>\r\n        <div class=\"form-group\" style=\"margin-bottom: 20px\">\r\n          <label>Chọn sản phẩm</label>\r\n          <angular2-multiselect [(ngModel)]=\"productList\" [id]=\"fields[7].formControl\"\r\n            [formControlName]=\"fields[7].formControl\" [data]=\"fields[7].data\" [settings]=\"fields[7].config\"\r\n            (ngModelChange)=\"addProduct(productList)\">\r\n          </angular2-multiselect>\r\n        </div>\r\n\r\n        <table class=\"table-responsive table table-bordered table-hover form-group\">\r\n          <thead>\r\n            <tr>\r\n              <th style=\"width: 8%\">#</th>\r\n              <th style=\"width: 32%\">Sản phẩm</th>\r\n              <th style=\"width: 18%\">Loại</th>\r\n              <th style=\"width: 13%\">Đơn giá</th>\r\n              <th style=\"width: 12%\">Số lượng</th>\r\n              <th style=\"width: 15%\">Thành tiền</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let item of arrProduct; let i = index\" class=\"odd\">\r\n              <td style=\"text-align: center; padding: 20px 0\">\r\n                <button (click)=\"deleteArr(item)\" class=\"btn btn-danger btn-sm\" type=\"button\">\r\n                  <i class=\"fa fa-remove\"></i>\r\n                </button>\r\n              </td>\r\n              <td>\r\n                <label>{{ item.product.code }}</label> - {{ item.product.name }}\r\n              </td>\r\n              <td>\r\n                <select [(ngModel)]=\"item.warehouse_id\" [ngModelOptions]=\"{ standalone: true }\" class=\"form-control\"\r\n                   (ngModelChange)=\"checkArr(item.warehouse_id, i)\">\r\n                  <option disabled hidden selected value=\"0\">Chọn loại</option>\r\n                  <option *ngFor=\"let w of item.product.warehouse_views\" [value]=\"w.id\">\r\n                    {{ w.size.name }} - {{ w.color.name }}\r\n                  </option>\r\n                </select>\r\n              </td>\r\n              <td class=\"text-right\">\r\n                {{ item.unit_price | number : \"1.0-0\" }}\r\n              </td>\r\n              <td>\r\n                <input [(ngModel)]=\"item.quantity\" [ngModelOptions]=\"{ standalone: true }\"\r\n                  oninput=\"this.value = Math.abs(this.value)\" type=\"number\" value=\"1\" (ngModelChange)=\"updateCart()\"\r\n                  style=\"width: 100%; text-align: center\" />\r\n              </td>\r\n              <td class=\"text-right\">\r\n                {{ item.unit_price * item.quantity | number : \"1.0-0\" }}\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <th colspan=\"4\" class=\"text-right\">Tổng tiền</th>\r\n              <td colspan=\"2\" class=\"text-right\">{{ amount | number : \"1.0-0\" }}</td>\r\n            </tr>\r\n            <tr>\r\n              <th colspan=\"4\" class=\"text-right\">Phí ship</th>\r\n              <td colspan=\"2\" class=\"text-right\">{{ shipFee | number : \"1.0-0\" }}</td>\r\n            </tr>\r\n            <tr>\r\n              <th colspan=\"4\" class=\"text-right\">Giảm giá</th>\r\n              <td colspan=\"2\" class=\"text-right\">{{ discount | number : \"1.0-0\" }}</td>\r\n            </tr>\r\n            <tr>\r\n              <th colspan=\"4\" class=\"text-right\">Tổng thanh toán</th>\r\n              <td colspan=\"2\" class=\"text-right\"><label>{{ totalAmount | number : \"1.0-0\" }}</label>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n        <div class=\"form-group\">\r\n          <label [for]=\"fields[8].formControl\">\r\n            {{fields[8].label}}\r\n          </label>\r\n          <angular2-multiselect [data]=\"fields[8].data\" [formControlName]=\"fields[8].formControl\"\r\n            [id]=\"fields[8].formControl\" [settings]=\"fields[8].config\">\r\n          </angular2-multiselect>\r\n        </div>\r\n        <div style=\"display: flex;\">\r\n          <div [ngClass]=\"{'has-error':!formGroup.controls[fields[9].formControl].valid}\" class=\"form-group col-md-6\" style=\"padding-left: 0;\">\r\n            <label [for]=\"fields[9].formControl\">\r\n              {{fields[9].label}}\r\n            </label>\r\n            <select [formControlName]=\"fields[9].formControl\" [id]=\"fields[9].formControl\"\r\n              [name]=\"fields[9].formControl\" class=\"form-control\">\r\n              <option *ngFor=\"let option of fields[9].data\" [value]=\"option['name']\">{{option['name']}}</option>\r\n            </select>\r\n          </div>\r\n\r\n          <div [ngClass]=\"{'has-error':!formGroup.controls[fields[10].formControl].valid}\" class=\"form-group col-md-6\" style=\"padding-right: 0;\">\r\n            <label [for]=\"fields[10].formControl\">\r\n              {{fields[10].label}}\r\n            </label>\r\n            <select [formControlName]=\"fields[10].formControl\" [id]=\"fields[10].formControl\"\r\n              [name]=\"fields[10].formControl\" class=\"form-control\">\r\n              <option *ngFor=\"let option of fields[10].data\" [value]=\"option['value']\">{{option['name']}}</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <button (click)=\"edit()\" [disabled]=\"!formGroup.valid\" class=\"btn btn-primary\" type=\"button\">\r\n    Chỉnh sửa\r\n  </button>\r\n  <button (click)=\"dismiss()\" class=\"btn btn-default\" type=\"button\">\r\n    Hủy bỏ\r\n  </button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/order/order-edit/order-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__order_service__ = __webpack_require__("./src/app/modules/order/order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core__ = __webpack_require__("./src/app/core/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__voucher_voucher_service__ = __webpack_require__("./src/app/modules/voucher/voucher.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__product_product_service__ = __webpack_require__("./src/app/modules/product/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__cart_item_meta__ = __webpack_require__("./src/app/modules/order/cart-item.meta.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__province_province_service__ = __webpack_require__("./src/app/modules/province/province.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shipping_fee_shipping_fee_service__ = __webpack_require__("./src/app/modules/shipping-fee/shipping-fee.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__payment_method_payment_method_service__ = __webpack_require__("./src/app/modules/payment-method/payment-method.service.ts");
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











var OrderEditComponent = /** @class */ (function (_super) {
    __extends(OrderEditComponent, _super);
    function OrderEditComponent(service, modal, builder, productService, voucherService, provinceService, paymentervice, shipFeeService) {
        var _this = _super.call(this, service, modal, builder) || this;
        _this.productService = productService;
        _this.voucherService = voucherService;
        _this.provinceService = provinceService;
        _this.paymentervice = paymentervice;
        _this.shipFeeService = shipFeeService;
        _this.amount = 0;
        _this.shipFee = 0;
        _this.shipFeeOld = 0;
        _this.discount = 0;
        _this.totalAmount = 0;
        _this.statusMain = false;
        _this.voucherI = [];
        _this.arrProduct = [];
        return _this;
    }
    OrderEditComponent.prototype.onInit = function () {
    };
    OrderEditComponent.prototype.onDestroy = function () {
    };
    OrderEditComponent.prototype.loadVouchers = function () {
        return this.voucherService.loadByParams({ status: 1 });
    };
    OrderEditComponent.prototype.loadPayments = function () {
        return this.paymentervice.loadByParams({ status: 1 });
    };
    OrderEditComponent.prototype.loadAllProvinces = function () {
        return this.provinceService.loadAll();
    };
    OrderEditComponent.prototype.loadAllProducts = function () {
        return this.productService.loadByParams({ status: 1 });
    };
    OrderEditComponent.prototype.buildForm = function () {
        return this.formBuilder.group({
            customer_name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(255), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern('^(?=.*[a-zA-Z\đàáảãạăằắẳẵặâầấẩẫậèéẻẽẹêềếểễệìíỉĩịòóỏõọôồốổỗộơờớởỡợùúủũụưừứửữựỳýỷỹỵĐÀÁẢÃẠĂẰẮẲẴẶÂẦẤẨẪẬÈÉẺẼẸÊỀẾỂỄỆÌÍỈĨỊÒÓỎÕỌÔỒỐỔỖỘƠỜỚỞỠỢÙÚỦŨỤƯỪỨỬỮỰỲÝỶỸỴ]+)[a-zA-Z\đàáảãạăằắẳẵặâầấẩẫậèéẻẽẹêềếểễệìíỉĩịòóỏõọôồốổỗộơờớởỡợùúủũụưừứửữựỳýỷỹỵĐÀÁẢÃẠĂẰẮẲẴẶÂẦẤẨẪẬÈÉẺẼẸÊỀẾỂỄỆÌÍỈĨỊÒÓỎÕỌÔỒỐỔỖỘƠỜỚỞỠỢÙÚỦŨỤƯỪỨỬỮỰỲÝỶỸỴ ]*$')]),
            customer_phone: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern('^(0)[0-9]{9}$')]),
            customer_address: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(255), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]),
            province: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            district: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            ward: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            customer_request: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(255)),
            product: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            shipping_fee: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].min(0)]),
            voucher_id: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null),
            voucher_list: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null),
            amount: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null),
            discount: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null),
            total_amount: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null),
            payment_type: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            payment_status: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
        });
    };
    OrderEditComponent.prototype.initFieldForm = function () {
        return [
            __WEBPACK_IMPORTED_MODULE_4__core__["h" /* FieldForm */].createTextInput('Tên khách hàng', 'customer_name', 'Nhập kí tự'),
            __WEBPACK_IMPORTED_MODULE_4__core__["h" /* FieldForm */].createNumberInput('Số điện thoại khách hàng', 'customer_phone', 'Nhập số'),
            __WEBPACK_IMPORTED_MODULE_4__core__["h" /* FieldForm */].createTextInput('Địa chỉ khách hàng', 'customer_address', 'Nhập kí tự'),
            __WEBPACK_IMPORTED_MODULE_4__core__["h" /* FieldForm */].createSingleSelect2('Tỉnh/Thành phố', 'province', '', 'loadAllProvinces'),
            __WEBPACK_IMPORTED_MODULE_4__core__["h" /* FieldForm */].createSingleSelect2('Huyện/Quận', 'district', '', []),
            __WEBPACK_IMPORTED_MODULE_4__core__["h" /* FieldForm */].createSingleSelect2('Xã/Phường', 'ward', '', []),
            __WEBPACK_IMPORTED_MODULE_4__core__["h" /* FieldForm */].createTextArea('Yêu cầu của khách hàng', 'customer_request', 'Nhập kí tự', 5),
            __WEBPACK_IMPORTED_MODULE_4__core__["h" /* FieldForm */].createSingleSelect2('Sản phẩm', 'product', 'Chọn một', 'loadAllProducts'),
            __WEBPACK_IMPORTED_MODULE_4__core__["h" /* FieldForm */].createSingleSelect2('Mã giảm giá', 'voucher_list', 'Chọn một', 'loadVouchers'),
            __WEBPACK_IMPORTED_MODULE_4__core__["h" /* FieldForm */].createSelect('Hình thức thanh toán', 'payment_type', 'Chọn một', 'loadPayments'),
            __WEBPACK_IMPORTED_MODULE_4__core__["h" /* FieldForm */].createSelect('Trạng thái thanh toán', 'payment_status', '', [
                {
                    name: "Chưa thanh toán",
                    value: "0"
                },
                {
                    name: "Đã thanh toán",
                    value: "1"
                }
            ]),
        ];
    };
    OrderEditComponent.prototype.setFormValue = function () {
        var _this = this;
        var item = __WEBPACK_IMPORTED_MODULE_4__core__["j" /* ObjectUtil */].clone(this.model);
        var provinceObj = this.fields[3].data.filter(function (v) { return v.name == _this.model.province; });
        if (provinceObj.length > 0) {
            item.province = provinceObj;
            this.fields[4].data = provinceObj[0]['districts'];
            var districtObj = this.fields[4].data.filter(function (v) { return v.name == _this.model.district; });
            if (districtObj.length > 0) {
                item.district = districtObj;
                this.fields[5].data = districtObj[0]['wards'];
                var wardObj = this.fields[5].data.filter(function (v) { return v.name == _this.model.ward; });
                if (districtObj.length > 0) {
                    item.ward = wardObj;
                }
            }
        }
        this.formGroup.get(this.fields[7].formControl).setValue([this.arrProduct[0].product]);
        if (this.model.voucher != null) {
            this.formGroup.get(this.fields[8].formControl).setValue([this.model.voucher]);
        }
        this.formGroup.get(this.fields[9].formControl).setValue([this.model.payment_type]);
        this.formGroup.get(this.fields[10].formControl).setValue([this.model.payment_status]);
        this.formGroup.patchValue(__WEBPACK_IMPORTED_MODULE_4__core__["j" /* ObjectUtil */].mergeValue(this.formGroup.value, item));
        this.statusMain = true;
    };
    OrderEditComponent.prototype.loaded = function () {
        for (var _i = 0, _a = this.model.details; _i < _a.length; _i++) {
            var i = _a[_i];
            var cartItemMeta = new __WEBPACK_IMPORTED_MODULE_7__cart_item_meta__["a" /* CartItemMeta */]();
            cartItemMeta.product = i.product;
            cartItemMeta.quantity = i.quantity;
            cartItemMeta.unit_price = i.unit_price;
            cartItemMeta.warehouse_id = i.warehouse_id;
            this.arrProduct.push(cartItemMeta);
        }
    };
    OrderEditComponent.prototype.onFormChanged = function () {
        var _this = this;
        _super.prototype.onFormChanged.call(this);
        this.formGroup.controls['province'].valueChanges.subscribe(function (value) {
            if (value && value.length > 0) {
                _this.formGroup.controls['district'].setValue(null);
                _this.formGroup.controls['ward'].setValue(null);
                _this.fields[4].data = value[0].districts;
                _this.fields[5].data = [];
                _this.shipFee = 0;
            }
        });
        this.formGroup.controls['district'].valueChanges.subscribe(function (value) {
            if (value && value.length > 0) {
                _this.formGroup.controls['ward'].setValue(null);
                _this.fields[5].data = value[0].wards;
            }
        });
        this.formGroup.controls['ward'].valueChanges.subscribe(function (value) {
            if (value && value.length > 0) {
                _this.shipFeeService.loadByParams({ ward_id: value[0].id }).subscribe(function (shipFees) {
                    if (shipFees.length > 0) {
                        var s = shipFees[0];
                        _this.shipFee = _this.shipFeeOld = s.fee;
                        _this.updateCart();
                    }
                });
            }
        });
        this.formGroup.controls['voucher_list'].valueChanges.subscribe(function (value) {
            if (value && value.length > 0) {
                _this.voucherI = value;
            }
            else {
                _this.voucherI = [];
            }
            _this.updateCart();
        });
    };
    OrderEditComponent.prototype.addProduct = function (productList) {
        if (this.statusMain == true && productList && productList.length > 0) {
            this.arrProduct.push({
                product: productList[0],
                warehouse_id: 0,
                unit_price: productList[0].sale_price,
                quantity: 1,
            });
            this.updateCart();
        }
    };
    OrderEditComponent.prototype.checkArr = function (warehouse, i) {
        var test = this.arrProduct.filter(function (p) { return p.warehouse_id == warehouse; });
        if (test.length >= 2) {
            test[0].quantity = test[0].quantity + test[1].quantity;
            this.arrProduct.splice(i, 1);
            this.updateCart();
        }
    };
    OrderEditComponent.prototype.updateCart = function () {
        var _this = this;
        var quantity = 0;
        this.amount = 0;
        this.arrProduct.map(function (v) { return v.quantity; }).forEach(function (v) {
            quantity += v;
        });
        this.arrProduct.map(function (v) { return v.unit_price * v.quantity; }).forEach(function (v) {
            _this.amount = _this.amount + v;
        });
        this.checkVoucher();
    };
    OrderEditComponent.prototype.checkVoucher = function () {
        this.discount = 0;
        this.shipFee = this.shipFeeOld;
        this.voucherId = null;
        if (this.voucherI.length > 0) {
            var v = this.voucherI[0];
            if (Date.parse(v.expired_date) > Date.now()) {
                if (this.amount < v.min_order_value) {
                    this.service.toastError('Không đủ điều kiện áp dụng');
                }
                else {
                    if (v.type == 2) {
                        this.shipFee = 0;
                    }
                    else {
                        if (this.amount <= v.discount_value) {
                            this.discount = this.amount;
                        }
                        else {
                            this.discount = (this.amount * v.discount_percent / 100) + v.discount_value;
                        }
                    }
                    this.voucherId = v.id;
                }
            }
        }
        this.checkout();
    };
    OrderEditComponent.prototype.checkout = function () {
        var amountT = this.amount - this.discount;
        if (amountT < 0) {
            amountT = 0;
        }
        this.totalAmount = amountT + this.shipFee;
        this.formGroup.controls['amount'].setValue(this.amount);
        this.formGroup.controls['shipping_fee'].setValue(this.shipFee);
        this.formGroup.controls['discount'].setValue(this.discount);
        this.formGroup.controls['total_amount'].setValue(this.totalAmount);
    };
    OrderEditComponent.prototype.deleteArr = function (i) {
        this.arrProduct.splice(i, 1);
        if (this.arrProduct.length == 0) {
            this.formGroup.controls['product'].setValue(null);
        }
        this.updateCart();
    };
    OrderEditComponent.prototype.edit = function () {
        var _this = this;
        var status = 0;
        var _loop_1 = function (i) {
            var list = i.product.warehouse_views;
            if (i.quantity == 0 || i.warehouse_id == 0) {
                this_1.service.toastError("Cần nhập đủ thông tin sản phẩm");
                status = 1;
                return "break";
            }
            else {
                var t = list.filter(function (w) { return w.id == i.warehouse_id; });
                if (t[0].quantity < i.quantity) {
                    this_1.service.toastError("Sản phẩm " + i.product.code + " không đủ hàng");
                    status = 1;
                    return "break";
                }
            }
        };
        var this_1 = this;
        for (var _i = 0, _a = this.arrProduct; _i < _a.length; _i++) {
            var i = _a[_i];
            var state_1 = _loop_1(i);
            if (state_1 === "break")
                break;
        }
        if (status == 0) {
            var item = __WEBPACK_IMPORTED_MODULE_4__core__["j" /* ObjectUtil */].combineValue(this.model, this.formGroup.value);
            item.province = this.getFormValue('province')[0].name;
            item.district = this.getFormValue('district')[0].name;
            item.ward = this.getFormValue('ward')[0].name;
            item.product = JSON.stringify(this.arrProduct);
            item.voucher_id = this.voucherId;
            this.service.update(item).subscribe(function (res) {
                _this.service.toastSuccessfullyEdited();
                _this.close(res);
            }, function () { return _this.service.toastFailedEdited(); });
        }
    };
    OrderEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-order-edit',
            template: __webpack_require__("./src/app/modules/order/order-edit/order-edit.component.html"),
            styles: [__webpack_require__("./src/app/modules/order/order-edit/order-edit.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__order_service__["a" /* OrderService */], __WEBPACK_IMPORTED_MODULE_5__voucher_voucher_service__["a" /* VoucherService */], __WEBPACK_IMPORTED_MODULE_6__product_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_8__province_province_service__["a" /* ProvinceService */], __WEBPACK_IMPORTED_MODULE_9__shipping_fee_shipping_fee_service__["a" /* ShippingFeeService */], __WEBPACK_IMPORTED_MODULE_10__payment_method_payment_method_service__["a" /* PaymentMethodService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__order_service__["a" /* OrderService */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__["a" /* BsModalRef */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_6__product_product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_5__voucher_voucher_service__["a" /* VoucherService */],
            __WEBPACK_IMPORTED_MODULE_8__province_province_service__["a" /* ProvinceService */],
            __WEBPACK_IMPORTED_MODULE_10__payment_method_payment_method_service__["a" /* PaymentMethodService */],
            __WEBPACK_IMPORTED_MODULE_9__shipping_fee_shipping_fee_service__["a" /* ShippingFeeService */]])
    ], OrderEditComponent);
    return OrderEditComponent;
}(__WEBPACK_IMPORTED_MODULE_4__core__["d" /* AbstractModalComponent */]));



/***/ }),

/***/ "./src/app/modules/order/order-list/order-list.component.css":
/***/ (function(module, exports) {

module.exports = ".btn-form {\r\n  width: 35px;\r\n  height: 35px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.label-status {\r\n  font-size: 12px;\r\n}\r\n\r\n.label-1 {\r\n  background: rgb(0, 145, 65);\r\n}\r\n\r\n.label-2 {\r\n  background: rgb(0, 130, 139);\r\n}\r\n\r\n.label-3 {\r\n  background: rgb(141, 135, 48);\r\n}\r\n\r\n.label-4 {\r\n  background: rgb(136, 93, 30);\r\n}\r\n\r\n.label-5 {\r\n  background: rgb(177, 115, 0);\r\n}\r\n\r\n.label-6 {\r\n  background: rgb(16, 192, 0);\r\n}\r\n\r\n.label-7 {\r\n  background: rgb(228, 0, 0);\r\n}\r\n\r\n.label-8 {\r\n  background: rgb(210, 0, 230);\r\n}\r\n\r\n.label-9 {\r\n  background: rgb(238, 75, 0);\r\n}\r\n\r\n.label-10 {\r\n  background: rgb(199, 113, 0);\r\n}\r\n"

/***/ }),

/***/ "./src/app/modules/order/order-list/order-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n  <div class=\"panel-heading\">\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12\">\r\n        <form (ngSubmit)=\"load()\" [formGroup]=\"searchForm\">\r\n          <div *ngFor=\"let f of searchControls\" class=\"form-group col-md-6\">\r\n            <ng-template [ngIf]=\"f.type == 'input'\">\r\n              <label [for]=\"f.formControl\">\r\n                {{ f.label }}\r\n              </label>\r\n              <input [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\"\r\n                [placeholder]=\"f.placeHolder\" [type]=\"f.typeof\" class=\"form-control\" />\r\n            </ng-template>\r\n            <ng-template [ngIf]=\"f.type == 'textarea'\">\r\n              <label [for]=\"f.formControl\">\r\n                {{ f.label }}\r\n              </label>\r\n              <textarea [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\"\r\n                [placeholder]=\"f.placeHolder\" class=\"form-control\">\r\n              </textarea>\r\n            </ng-template>\r\n            <ng-template [ngIf]=\"f.type == 'checkbox'\">\r\n              <div class=\"checkbox\">\r\n                <label>\r\n                  <input [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\"\r\n                    type=\"checkbox\" />\r\n                  {{ f.label }}\r\n                </label>\r\n              </div>\r\n            </ng-template>\r\n            <ng-template [ngIf]=\"f.type == 'select'\">\r\n              <label [for]=\"f.formControl\">\r\n                {{ f.label }}\r\n              </label>\r\n              <select [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\"\r\n                class=\"form-control\">\r\n                <option *ngFor=\"let option of f.data\" [value]=\"option['value']\">\r\n                  {{ option[\"name\"] }}\r\n                </option>\r\n              </select>\r\n            </ng-template>\r\n            <ng-template [ngIf]=\"f.type == 'select2'\">\r\n              <label [for]=\"f.formControl\">\r\n                {{ f.label }}\r\n              </label>\r\n              <angular2-multiselect [data]=\"f.data\" [formControlName]=\"f.formControl\" [id]=\"f.formControl\"\r\n                [settings]=\"f.config\">\r\n              </angular2-multiselect>\r\n            </ng-template>\r\n          </div>\r\n          <div class=\"col-md-12\">\r\n            <button class=\"btn btn-default\" type=\"submit\">Tìm kiếm</button>\r\n            <button (click)=\"removeFilter()\" class=\"btn btn-default\" type=\"button\">Xóa lọc</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <div class=\"col-xs-6 col-xs-offset-6\">\r\n        <button (click)=\"createOrder()\" class=\"btn btn-primary pull-right\" type=\"button\">\r\n          <i class=\"fa fa-plus\"></i> Thêm mới\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"panel-body no-padding\">\r\n    <table class=\"table-responsive table table-bordered table-hover\">\r\n      <thead>\r\n        <tr>\r\n          <th style=\"width: 15%\">Mã đơn</th>\r\n          <th style=\"width: 20%\">Khách hàng</th>\r\n          <th style=\"width: 45%\">Thông tin</th>\r\n          <th style=\"width: 10%\">Thanh toán</th>\r\n          <th style=\"width: 10%\">Thao tác</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let item of list; let i = index\" class=\"odd\">\r\n          <td class=\"text-center\">\r\n            <label style=\"display: block\">{{ item.code }}</label>\r\n            <label class=\"label label-status\" style=\"padding: 5px 10px\"\r\n            [ngClass]=\"{\r\n              'label-1':item.order_status == 'Lên đơn',\r\n              'label-2':item.order_status == 'Xác nhận',\r\n              'label-3':item.order_status == 'Chuẩn bị hàng',\r\n              'label-4':item.order_status == 'Đã chuẩn bị hàng',\r\n              'label-5':item.order_status == 'Đang giao',\r\n              'label-6':item.order_status == 'Hoàn thành',\r\n              'label-7':item.order_status == 'Hủy đơn',\r\n              'label-8':item.order_status == 'Hoàn hàng',\r\n              'label-9':item.order_status == 'Đã hoàn hàng',\r\n              'label-10':item.order_status == 'Đã hoàn tiền'\r\n            }\">{{ item.order_status }}</label>\r\n            <p style=\"margin: 10px 0 0\">\r\n              {{ item.created_at | date : \"yyyy-MM-dd\" }}\r\n            </p>\r\n            <p>{{ item.created_at | date : \"HH:mm:ss\" }}</p>\r\n          </td>\r\n          <td>\r\n            <p>{{ item.customer_name }}</p>\r\n            <p>{{ item.customer_phone }}</p>\r\n            <p>{{ item.customer_text }}</p>\r\n            <label>\r\n              <textarea *ngIf=\"item.customer_request\" [cols]=\"30\" [rows]=\"5\" [value]=\"item.customer_request\" readonly\r\n                style=\"min-width: 200px; max-width: 200px\"></textarea>\r\n            </label>\r\n          </td>\r\n          <td>\r\n            <table class=\"table-responsive table table-bordered\">\r\n              <thead>\r\n                <tr>\r\n                  <th style=\"width: 50%\">Sản phẩm</th>\r\n                  <th style=\"width: 20%\">Loại</th>\r\n                  <th style=\"width: 10%\">S/L</th>\r\n                  <th style=\"width: 20%\">Giá tiền</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let d of item.details\">\r\n                  <td>\r\n                    <p><label>{{ d.product_code }}</label> - {{ d.product.name }}</p>\r\n                  </td>\r\n                  <td>\r\n                    <span style=\"display: block\">{{ d.size }} - {{ d.color }}</span>\r\n                  </td>\r\n                  <td class=\"text-right\">\r\n                    {{ d.quantity | number : \"1.0-0\" }}\r\n                  </td>\r\n                  <td class=\"text-right\">\r\n                    {{ d.quantity * d.unit_price | number : \"1.0-0\" }}\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <th class=\"text-right\" colspan=\"3\">Thành tiền</th>\r\n                  <td class=\"text-right\">\r\n                    {{ item.amount | number : \"1.0-0\" }}\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <th class=\"text-right\" colspan=\"3\">Phí ship</th>\r\n                  <td class=\"text-right\">\r\n                    {{ item.shipping_fee | number : \"1.0-0\" }}\r\n                  </td>\r\n                </tr>\r\n                <tr *ngIf=\"item.discount > 0\">\r\n                  <th class=\"text-right\" colspan=\"3\">Giảm giá</th>\r\n                  <td class=\"text-right\">\r\n                    {{ item.discount | number : \"1.0-0\" }}\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <th class=\"text-right\" colspan=\"3\">Tổng tiền</th>\r\n                  <th class=\"text-right\">\r\n                    {{ item.total_amount | number : \"1.0-0\" }}\r\n                  </th>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </td>\r\n          <td class=\"text-center\">\r\n            <label class=\"label\"\r\n            [ngClass]=\"{\r\n              'label-primary':item.payment_type == 'CoD',\r\n              'label-warning':item.payment_type == 'VNPay',\r\n              'label-danger':item.payment_type == 'Momo'\r\n            }\">{{ item.payment_type }}</label>\r\n            <label *ngIf=\"item.payment_status == 0\" class=\"label label-default\"\r\n              style=\"padding: 10px; display: block; margin: 10px\">Chưa thanh toán</label>\r\n            <label *ngIf=\"item.payment_status == 1\" class=\"label label-success\"\r\n              style=\"padding: 10px; display: block; margin: 10px\">Đã thanh toán</label>\r\n            <label>\r\n              <textarea *ngIf=\"item.note\" [cols]=\"30\" [rows]=\"7\" [value]=\"item.note\" readonly style=\"min-width: 100px; max-width: 100px\"></textarea>\r\n            </label>\r\n          </td>\r\n          <td class=\"text-center\">\r\n            <button *ngIf=\"item.order_status == 'Lên đơn'\" style=\"width: 65px; margin-bottom: 5px\"\r\n              (click)=\"confirm(item)\" class=\"btn btn-success btn-sm\" type=\"button\">\r\n              <i aria-hidden=\"true\" class=\"fa fa-check\"></i>\r\n            </button>\r\n            <!-- Sửa + hủy -->\r\n            <div style=\"display: block\" *ngIf=\"item.order_status == 'Lên đơn' || item.order_status == 'Xác nhận' || item.order_status == 'Chuẩn bị hàng' || item.order_status == 'Đang giao'\">\r\n              <button *ngIf=\"item.order_status != 'Đang giao'\" (click)=\"editOrder(item)\" class=\"btn btn-default btn-sm\" type=\"button\" style=\"width: 30px; height: 30px;\">\r\n                <i class=\"fa fa-pencil-square-o\"></i>\r\n              </button>\r\n              <button *ngIf=\"item.order_status != 'Lên đơn' || item.payment_status == 1\" (click)=\"cancel(item)\" class=\"btn btn-danger btn-sm\" type=\"button\" style=\"width: 30px; height: 30px;\">\r\n                <i class=\"fa fa-remove\"></i>\r\n              </button>\r\n              <button *ngIf=\"item.order_status == 'Lên đơn' && item.payment_status == 0\" class=\"btn btn-danger text-center btn-config\" type=\"button\" mwlConfirmationPopover\r\n                popoverTitle=\"Xóa\" popoverMessage=\"Bạn thực sự muốn xóa ?\" placement=\"top\"\r\n                confirmText=\"Yes <i class='fa fa-check'></i>\" cancelText=\"No <i class='fa fa-remove'></i>\"\r\n                (confirm)=\"remove(item, i)\" style=\"width: 30px; height: 30px; padding: 0;\">\r\n                <i class=\"fa fa-remove\" style=\"margin: auto\"></i>\r\n              </button>\r\n            </div>\r\n            <!-- Hoàn tiền -->\r\n            <div style=\"display: block\" *ngIf=\"!item.shipping\">\r\n              <button *ngIf=\"item.order_status == 'Hủy đơn' && item.payment_status == 1\" (click)=\"refund(item)\" title=\"Hoàn tiền\" class=\"btn btn-warning btn-sm\" type=\"button\">\r\n                <i class=\"fa fa-money\"></i>\r\n              </button>\r\n            </div>\r\n            <!-- Hoàn hàng -->\r\n            <div *ngIf=\"item.shipping\">\r\n              <button *ngIf=\"item.order_status == 'Hủy đơn' || item.order_status == 'Hoàn thành'\" (click)=\"return(item)\" title=\"Hoàn hàng\"  class=\"btn btn-info btn-sm\" type=\"button\">\r\n                <i class=\"fa fa-archive\"></i>\r\n              </button>\r\n              <button *ngIf=\"item.order_status == 'Hoàn hàng'\" class=\"btn btn-primary text-center btn-config\" type=\"button\" mwlConfirmationPopover\r\n                popoverTitle=\"Đã hoàn hàng\" popoverMessage=\"Xác nhận đã nhận hàng hoàn ?\" placement=\"top\"\r\n                confirmText=\"Yes <i class='fa fa-check'></i>\" cancelText=\"No <i class='fa fa-remove'></i>\"\r\n                (confirm)=\"returned(item, i)\" style=\"width: 30px; height: 30px; padding: 0;\">\r\n                <i class=\"fa fa-check\" style=\"margin: auto\"></i>\r\n              </button>\r\n              <ng-template [ngIf]=\"item.order_status == 'Đã hoàn hàng'\">\r\n                <button  *ngIf=\"item.payment_status == 1 || item.is_completed == 1\" (click)=\"refund(item)\" class=\"btn btn-warning btn-sm\" type=\"button\">\r\n                  <i class=\"fa fa-money\"></i>\r\n                </button>\r\n              </ng-template>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n  <div class=\"panel-footer\">\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-6\">\r\n        <pagination (numPages)=\"pagination.numPages = $event\" (pageChanged)=\"pageChanged($event)\"\r\n          [(ngModel)]=\"pagination.currentPage\" [boundaryLinks]=\"true\" [itemsPerPage]=\"pagination.itemsPerPage\"\r\n          [maxSize]=\"pagination.maxSize\" [totalItems]=\"pagination.totalItems\" class=\"pagination-sm\"></pagination>\r\n      </div>\r\n      <div class=\"col-xs-6\">\r\n        <div class=\"box-go-to\">\r\n          <input [(ngModel)]=\"nextPage\" class=\"col-xs-2\" type=\"number\" />\r\n          <span class=\"col-xs-1\">/</span>\r\n          <input [(ngModel)]=\"pagination.numPages\" class=\"col-xs-2\" disabled type=\"text\" />\r\n          <div class=\"col-xs-4\">\r\n            <button (click)=\"goToPageNumber()\">Đến</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/order/order-list/order-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__order_meta__ = __webpack_require__("./src/app/modules/order/order.meta.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__order_service__ = __webpack_require__("./src/app/modules/order/order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__order_create_order_create_component__ = __webpack_require__("./src/app/modules/order/order-create/order-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__order_edit_order_edit_component__ = __webpack_require__("./src/app/modules/order/order-edit/order-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core__ = __webpack_require__("./src/app/core/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__order_cancel_order_cancel_component__ = __webpack_require__("./src/app/modules/order/order-cancel/order-cancel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__order_confirm_order_confirm_component__ = __webpack_require__("./src/app/modules/order/order-confirm/order-confirm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__order_refund_order_refund_component__ = __webpack_require__("./src/app/modules/order/order-refund/order-refund.component.ts");
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











var OrderListComponent = /** @class */ (function (_super) {
    __extends(OrderListComponent, _super);
    function OrderListComponent(service, modal, builder) {
        return _super.call(this, service, modal, builder) || this;
    }
    OrderListComponent.prototype.onInit = function () {
        this.load();
    };
    OrderListComponent.prototype.onDestroy = function () {
    };
    OrderListComponent.prototype.getTitle = function () {
        return 'Đơn hàng của tôi';
    };
    OrderListComponent.prototype.getCreateModalComponent = function () {
        return __WEBPACK_IMPORTED_MODULE_5__order_create_order_create_component__["a" /* OrderCreateComponent */];
    };
    OrderListComponent.prototype.getEditModalComponent = function () {
        return __WEBPACK_IMPORTED_MODULE_6__order_edit_order_edit_component__["a" /* OrderEditComponent */];
    };
    OrderListComponent.prototype.getCreateModalComponentOptions = function () {
        return { class: 'modal-huge', ignoreBackdropClick: true };
    };
    OrderListComponent.prototype.getEditModalComponentOptions = function () {
        return { class: 'modal-huge', ignoreBackdropClick: true };
    };
    OrderListComponent.prototype.buildSearchForm = function () {
        return this.formBuilder.group({
            search: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null),
            order_status: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null),
            code: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null),
            created_date: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null),
        });
    };
    OrderListComponent.prototype.initSearchForm = function () {
        return [
            __WEBPACK_IMPORTED_MODULE_7__core__["h" /* FieldForm */].createTextInput('Tìm kiếm theo mã đơn', 'code', 'Nhập từ khóa'),
            __WEBPACK_IMPORTED_MODULE_7__core__["h" /* FieldForm */].createTextInput('Tìm kiếm theo khách hàng', 'search', 'Nhập từ khóa'),
            __WEBPACK_IMPORTED_MODULE_7__core__["h" /* FieldForm */].createSelect('Trạng thái đơn hàng', 'order_status', 'Chọn một', [
                {
                    name: "Lên đơn",
                    value: "Lên đơn"
                },
                {
                    name: "Xác nhận",
                    value: "Xác nhận"
                },
                {
                    name: "Chuẩn bị hàng",
                    value: "Chuẩn bị hàng"
                },
                {
                    name: "Đã chuẩn bị hàng",
                    value: "Đã chuẩn bị hàng"
                },
                {
                    name: "Đang giao",
                    value: "Đang giao"
                },
                {
                    name: "Hoàn thành",
                    value: "Hoàn thành"
                },
                {
                    name: "Hủy đơn",
                    value: "Hủy đơn"
                },
            ]),
            __WEBPACK_IMPORTED_MODULE_7__core__["h" /* FieldForm */].createDateInput('Ngày tạo', 'created_date', 'Chọn ngày'),
        ];
    };
    OrderListComponent.prototype.initNewModel = function () {
        return new __WEBPACK_IMPORTED_MODULE_3__order_meta__["a" /* OrderMeta */]();
    };
    OrderListComponent.prototype.createOrder = function () {
        var _this = this;
        var modalOptions = Object.assign(this.defaultModalOptions(), this.getCreateModalComponentOptions());
        var config = __WEBPACK_IMPORTED_MODULE_7__core__["j" /* ObjectUtil */].combineValue({ ignoreBackdropClick: true }, modalOptions);
        var modalRef = this.modalService.show(this.getCreateModalComponent(), config);
        var modal = modalRef.content;
        modal.setModel(this.initNewModel());
        var sub = modal.onHidden.subscribe(function (result) {
            if (result.success) {
                _this.load();
            }
        });
    };
    OrderListComponent.prototype.editOrder = function (item) {
        var _this = this;
        var modalOptions = Object.assign(this.defaultModalOptions(), this.getEditModalComponentOptions());
        var config = __WEBPACK_IMPORTED_MODULE_7__core__["j" /* ObjectUtil */].combineValue({ ignoreBackdropClick: true }, modalOptions);
        var modalRef = this.modalService.show(this.getEditModalComponent(), config);
        var modal = modalRef.content;
        modal.setModel(item);
        var sub = modal.onHidden.subscribe(function (result) {
            if (result.success) {
                _this.load();
            }
        });
    };
    OrderListComponent.prototype.confirm = function (item) {
        var _this = this;
        var modalRef = this.modalService.show(__WEBPACK_IMPORTED_MODULE_9__order_confirm_order_confirm_component__["a" /* OrderConfirmComponent */], { ignoreBackdropClick: true, 'class': 'modal-lg' });
        var modal = modalRef.content;
        modal.setModel(item);
        var sub = modal.onHidden.subscribe(function (result) {
            if (result.success) {
                _this.load();
            }
            sub.unsubscribe();
        });
    };
    OrderListComponent.prototype.cancel = function (item) {
        var _this = this;
        var modalRef = this.modalService.show(__WEBPACK_IMPORTED_MODULE_8__order_cancel_order_cancel_component__["a" /* OrderCancelComponent */], { ignoreBackdropClick: true, 'class': 'modal-lg' });
        var modal = modalRef.content;
        modal.setModel(item);
        var sub = modal.onHidden.subscribe(function (result) {
            if (result.success) {
                _this.load();
            }
            sub.unsubscribe();
        });
    };
    OrderListComponent.prototype.refund = function (item) {
        var _this = this;
        var modalRef = this.modalService.show(__WEBPACK_IMPORTED_MODULE_10__order_refund_order_refund_component__["a" /* OrderRefundComponent */], { ignoreBackdropClick: true, 'class': 'modal-lg' });
        var modal = modalRef.content;
        modal.setModel(item);
        var sub = modal.onHidden.subscribe(function (result) {
            if (result.success) {
                _this.load();
            }
            sub.unsubscribe();
        });
    };
    OrderListComponent.prototype.return = function (item) {
        var _this = this;
        this.service.return(item.id).subscribe(function (res) {
            _this.service.toastSuccessfully('Hoàn hàng');
            _this.load();
        }, function () { return _this.service.toastFailedEdited(); });
    };
    OrderListComponent.prototype.returned = function (item) {
        var _this = this;
        this.service.returned(item.id).subscribe(function (res) {
            _this.service.toastSuccessfully('Hoàn hàng');
            _this.load();
        }, function () { return _this.service.toastFailedEdited(); });
    };
    OrderListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-order-list',
            template: __webpack_require__("./src/app/modules/order/order-list/order-list.component.html"),
            styles: [__webpack_require__("./src/app/modules/order/order-list/order-list.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_4__order_service__["a" /* OrderService */]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__order_service__["a" /* OrderService */],
            __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__["b" /* BsModalService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]])
    ], OrderListComponent);
    return OrderListComponent;
}(__WEBPACK_IMPORTED_MODULE_7__core__["a" /* AbstractCRUDComponent */]));



/***/ }),

/***/ "./src/app/modules/order/order-refund/order-refund.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/order/order-refund/order-refund.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header bg-primary\">\r\n  <h4 class=\"modal-title pull-left\">Hoàn tiền</h4>\r\n  <button (click)=\"dismiss()\" aria-label=\"Close\" class=\"close pull-right\" type=\"button\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n      <form [formGroup]=\"formGroup\" novalidate>\r\n        <div *ngFor=\"let f of fields\" [ngClass]=\"{ 'has-error': !formGroup.controls[f.formControl].valid  && !formGroup.controls[f.formControl].disabled}\"\r\n             class=\"form-group\">\r\n          <ng-template [ngIf]=\"f.type == 'input'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{ f.label }}\r\n            </label>\r\n            <input [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\" [placeholder]=\"f.placeHolder\"\r\n                   [type]=\"f.typeof\" class=\"form-control\"/>\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type=='textarea'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{f.label}}\r\n            </label>\r\n            <textarea [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\" [placeholder]=\"f.placeHolder\"\r\n                      [rows]=\"5\" class=\"form-control\">\r\n          </textarea>\r\n          </ng-template>\r\n          <ng-template [ngIf]=\"f.type == 'select'\">\r\n            <label [for]=\"f.formControl\">\r\n              {{ f.label }}\r\n            </label>\r\n            <select [formControlName]=\"f.formControl\" [id]=\"f.formControl\" [name]=\"f.formControl\" class=\"form-control\">\r\n              <option *ngFor=\"let option of f.data\" [value]=\"option[f.config['primaryKey']]\">\r\n                {{ option[f.config[\"labelKey\"]] }}\r\n              </option>\r\n            </select>\r\n          </ng-template>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <button (click)=\"refund()\" [disabled]=\"!formGroup.valid\" class=\"btn btn-primary\" type=\"button\">\r\n    Hoàn tiền\r\n  </button>\r\n  <button (click)=\"dismiss()\" class=\"btn btn-default\" type=\"button\">\r\n    Hủy bỏ\r\n  </button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/order/order-refund/order-refund.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderRefundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__order_service__ = __webpack_require__("./src/app/modules/order/order.service.ts");
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





var OrderRefundComponent = /** @class */ (function (_super) {
    __extends(OrderRefundComponent, _super);
    function OrderRefundComponent(service, modal, builder) {
        return _super.call(this, service, modal, builder) || this;
    }
    OrderRefundComponent.prototype.onInit = function () {
    };
    OrderRefundComponent.prototype.onDestroy = function () {
    };
    OrderRefundComponent.prototype.buildForm = function () {
        return this.formBuilder.group({
            customer_namez: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]({ value: null, disabled: true }, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            total_amount: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            note: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null),
        });
    };
    OrderRefundComponent.prototype.initFieldForm = function () {
        return [
            __WEBPACK_IMPORTED_MODULE_4__core__["h" /* FieldForm */].createTextInput('Khách hàng', 'customer_namez', 'Nhập tên'),
            __WEBPACK_IMPORTED_MODULE_4__core__["h" /* FieldForm */].createNumberInput('Số tiền hoàn', 'total_amount', 'Nhập giá'),
            __WEBPACK_IMPORTED_MODULE_4__core__["h" /* FieldForm */].createTextArea('Lý do hủy đơn', 'note', 'Nhập kí tự'),
        ];
    };
    OrderRefundComponent.prototype.loaded = function () {
        var text = this.model.customer_name + " - " + this.model.customer_phone;
        this.formGroup.controls['customer_namez'].setValue(text);
    };
    OrderRefundComponent.prototype.refund = function () {
        var _this = this;
        var item = __WEBPACK_IMPORTED_MODULE_4__core__["j" /* ObjectUtil */].combineValue(this.model, this.formGroup.value);
        this.service.refund(item).subscribe(function (res) {
            _this.service.toastSuccessfully('Hoàn tiền');
            _this.close(res);
        }, function () { return _this.service.toastFailed('Hoàn tiền'); });
    };
    OrderRefundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-order-refund',
            template: __webpack_require__("./src/app/modules/order/order-refund/order-refund.component.html"),
            styles: [__webpack_require__("./src/app/modules/order/order-refund/order-refund.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__order_service__["a" /* OrderService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__order_service__["a" /* OrderService */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__["a" /* BsModalRef */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]])
    ], OrderRefundComponent);
    return OrderRefundComponent;
}(__WEBPACK_IMPORTED_MODULE_4__core__["d" /* AbstractModalComponent */]));



/***/ }),

/***/ "./src/app/modules/order/order.meta.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderMeta; });
var OrderMeta = /** @class */ (function () {
    function OrderMeta() {
    }
    OrderMeta.$LEN_DON = 'Lên đơn';
    OrderMeta.$XAC_NHAN = 'Xác nhận';
    OrderMeta.$CHUAN_BI_HANG = 'Chuẩn bị hàng';
    OrderMeta.$DA_BI_HANG = 'Đã chuẩn bị hàng';
    OrderMeta.$DANG_GIAO = 'Đang giao';
    OrderMeta.$DA_GIAO = 'Đã giao';
    OrderMeta.$HOAN_THANH = 'Hoàn thành';
    OrderMeta.$HUY_DON = 'Hủy đơn';
    return OrderMeta;
}());



/***/ }),

/***/ "./src/app/modules/order/order.modal.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderModalModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_confirmation_popover__ = __webpack_require__("./node_modules/angular-confirmation-popover/fesm5/angular-confirmation-popover.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_multiselect_dropdown__ = __webpack_require__("./node_modules/angular2-multiselect-dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_moment__ = __webpack_require__("./node_modules/ngx-moment/esm5/ngx-moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__order_create_order_create_component__ = __webpack_require__("./src/app/modules/order/order-create/order-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__order_edit_order_edit_component__ = __webpack_require__("./src/app/modules/order/order-edit/order-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__order_cancel_order_cancel_component__ = __webpack_require__("./src/app/modules/order/order-cancel/order-cancel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__order_confirm_order_confirm_component__ = __webpack_require__("./src/app/modules/order/order-confirm/order-confirm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__order_refund_order_refund_component__ = __webpack_require__("./src/app/modules/order/order-refund/order-refund.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var OrderModalModule = /** @class */ (function () {
    function OrderModalModule() {
    }
    OrderModalModule = __decorate([
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
                __WEBPACK_IMPORTED_MODULE_6_ngx_moment__["a" /* MomentModule */],
                __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__["c" /* CollapseModule */],
                __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__["h" /* TypeaheadModule */].forRoot(),
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__order_create_order_create_component__["a" /* OrderCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_8__order_edit_order_edit_component__["a" /* OrderEditComponent */],
                __WEBPACK_IMPORTED_MODULE_9__order_cancel_order_cancel_component__["a" /* OrderCancelComponent */],
                __WEBPACK_IMPORTED_MODULE_11__order_refund_order_refund_component__["a" /* OrderRefundComponent */],
                __WEBPACK_IMPORTED_MODULE_10__order_confirm_order_confirm_component__["a" /* OrderConfirmComponent */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__order_create_order_create_component__["a" /* OrderCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_8__order_edit_order_edit_component__["a" /* OrderEditComponent */],
                __WEBPACK_IMPORTED_MODULE_9__order_cancel_order_cancel_component__["a" /* OrderCancelComponent */],
                __WEBPACK_IMPORTED_MODULE_11__order_refund_order_refund_component__["a" /* OrderRefundComponent */],
                __WEBPACK_IMPORTED_MODULE_10__order_confirm_order_confirm_component__["a" /* OrderConfirmComponent */]
            ],
            exports: []
        })
    ], OrderModalModule);
    return OrderModalModule;
}());



/***/ }),

/***/ "./src/app/modules/order/order.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderModule", function() { return OrderModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_confirmation_popover__ = __webpack_require__("./node_modules/angular-confirmation-popover/fesm5/angular-confirmation-popover.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_multiselect_dropdown__ = __webpack_require__("./node_modules/angular2-multiselect-dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_moment__ = __webpack_require__("./node_modules/ngx-moment/esm5/ngx-moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__order_list_order_list_component__ = __webpack_require__("./src/app/modules/order/order-list/order-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__order_modal_module__ = __webpack_require__("./src/app/modules/order/order.modal.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routing = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_8__order_list_order_list_component__["a" /* OrderListComponent */]
    }
];
var OrderModule = /** @class */ (function () {
    function OrderModule() {
    }
    OrderModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* RouterModule */].forChild(routing),
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__["e" /* PaginationModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__["f" /* PopoverModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4_angular_confirmation_popover__["a" /* ConfirmationPopoverModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__["d" /* ModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6_angular2_multiselect_dropdown__["a" /* AngularMultiSelectModule */],
                __WEBPACK_IMPORTED_MODULE_7_ngx_moment__["a" /* MomentModule */],
                __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__["c" /* CollapseModule */],
                __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__["h" /* TypeaheadModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_9__order_modal_module__["a" /* OrderModalModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__order_list_order_list_component__["a" /* OrderListComponent */],
            ],
            entryComponents: [],
            exports: []
        })
    ], OrderModule);
    return OrderModule;
}());



/***/ })

});
//# sourceMappingURL=order.module.chunk.js.map