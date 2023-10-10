webpackJsonp(["home.module"],{

/***/ "./src/app/app.features.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_FEATURES; });
var APP_FEATURES = [
    {
        name: 'Bảng điều khiển',
        icon: 'fa fa-dashboard',
        link: '/dashboard'
    },
    {
        name: 'Quản lý chung',
        icon: 'fa fa-list',
        children: [
            {
                name: 'Thông tin cửa hàng',
                icon: 'fa fa-building-o',
                link: '/store'
            },
            {
                name: 'Quản lý nhân viên',
                icon: 'fa fa-users',
                link: '/staffs'
            },
            {
                name: 'Quản lý khách hàng',
                icon: 'fa fa-users',
                children: [
                    {
                        name: 'Tài khoản',
                        icon: 'fa fa-user',
                        link: '/customers'
                    },
                    {
                        name: 'Quản lý dữ liệu',
                        icon: 'fa fa-square',
                        link: '/form-datas'
                    }
                ]
            },
            {
                name: 'Quản lý giao dịch',
                icon: 'fa fa-money',
                children: [
                    {
                        name: 'Phương thức thanh toán',
                        icon: 'fa fa-credit-card',
                        link: '/payment_methods'
                    },
                    {
                        name: 'Giao dịch thanh toán',
                        icon: 'fa fa-handshake-o',
                        link: '/payment-transactions'
                    },
                    {
                        name: 'Giao dịch chi tiêu',
                        icon: 'fa fa-money',
                        link: '/expenses'
                    }
                ]
            },
        ]
    },
    {
        name: 'Quản lý giao diện',
        icon: 'fa fa-desktop',
        children: [
            {
                name: 'Banner',
                icon: 'fa fa-picture-o',
                link: '/banners'
            },
            {
                name: 'Menu',
                icon: 'fa fa-bars',
                link: '/menus'
            },
            {
                name: 'Bài viết',
                icon: 'fa fa-wpforms',
                link: '/store_posts'
            },
        ]
    },
    {
        name: 'Quản trị website',
        icon: 'fa fa-chrome',
        children: [
            {
                name: 'Quản lý bài đăng',
                icon: 'fa fa-wpforms',
                children: [
                    {
                        name: 'Danh mục',
                        icon: 'fa fa-bars',
                        link: '/post-categories'
                    },
                    {
                        name: 'Bài viết',
                        icon: 'fa fa-wpforms',
                        link: '/posts'
                    },
                    {
                        name: 'Tag',
                        icon: 'fa fa-tag',
                        link: '/post-tags'
                    }
                ],
            },
            {
                name: 'Quản lý sản phẩm',
                icon: 'fa fa-product-hunt',
                children: [
                    {
                        name: 'Danh mục',
                        icon: 'fa fa-bars',
                        link: '/product-categories'
                    },
                    {
                        name: 'Sản phẩm',
                        icon: 'fa fa-product-hunt',
                        link: '/products'
                    },
                    {
                        name: 'Biến thể',
                        icon: 'fa fa-vimeo',
                        link: '/variants'
                    },
                    {
                        name: 'Tag',
                        icon: 'fa fa-tag',
                        link: '/product-tags'
                    }
                ],
            },
            {
                name: 'Quản lý thông báo',
                icon: 'fa fa-bell',
                link: '/notifications'
            },
            {
                name: 'Mã giảm giá',
                icon: 'fa fa-gift',
                link: '/vouchers'
            },
            {
                name: 'Chương trình khuyến mãi',
                icon: 'fa fa-bullhorn',
                link: '/promotions'
            }
        ]
    },
    {
        name: 'Quản lý bán hàng',
        icon: 'fa fa-list-alt',
        children: [
            {
                name: 'Đơn hàng',
                icon: 'fa fa-bars',
                link: '/orders'
            },
            {
                name: 'Đơn vận',
                icon: 'fa fa-truck',
                link: '/order-ships'
            },
            {
                name: 'Đối tác vận chuyển',
                icon: 'fa fa-handshake-o',
                link: '/ship-units'
            },
            {
                name: 'Địa chỉ vận chuyển',
                icon: 'fa fa-map',
                children: [
                    {
                        name: 'Địa chỉ',
                        icon: 'fa fa-map-marker',
                        link: '/provinces'
                    },
                    {
                        name: 'Phí vận chuyển',
                        icon: 'fa fa-motorcycle',
                        link: '/shipping_fees'
                    },
                ]
            },
        ]
    },
    {
        name: 'Quản lý kho hàng',
        icon: 'fa fa-university',
        children: [
            {
                name: 'Kho hàng',
                icon: 'fa fa-archive',
                link: '/warehouses'
            },
            {
                name: 'Phiếu kho',
                icon: 'fa fa-wpforms',
                link: '/imports'
            }
        ]
    },
];


/***/ }),

/***/ "./src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MODULES_ROUTING; });
var MODULES_ROUTING = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        loadChildren: 'app/modules/dashboard/dashboard.module#DashboardModule'
    },
    {
        path: 'notifications',
        loadChildren: 'app/modules/notification/notification.module#NotificationModule'
    },
    {
        path: 'post-categories',
        loadChildren: 'app/modules/post-category/post-category.module#PostCategoryModule'
    },
    {
        path: 'posts',
        loadChildren: 'app/modules/post/post.module#PostModule'
    },
    {
        path: 'customers',
        loadChildren: 'app/modules/customer/customer.module#CustomerModule'
    },
    {
        path: 'staffs',
        loadChildren: 'app/modules/staff/staff.module#StaffModule'
    },
    {
        path: 'warehouses',
        loadChildren: 'app/modules/warehouse/warehouse.module#WarehouseModule'
    },
    {
        path: 'form-datas',
        loadChildren: 'app/modules/form-data/form-data.module#FormDataModule'
    },
    {
        path: 'post-tags',
        loadChildren: 'app/modules/post-tag/post-tag.module#PostTagModule'
    },
    {
        path: 'banners',
        loadChildren: 'app/modules/banner-group/banner-group.module#BannerGroupModule'
    },
    {
        path: 'menus',
        loadChildren: 'app/modules/menu-position/menu-position.module#MenuPositionModule'
    },
    {
        path: 'store',
        loadChildren: 'app/modules/store/store.module#StoreModule'
    },
    {
        path: 'product-categories',
        loadChildren: 'app/modules/product-category/product-category.module#ProductCategoryModule'
    },
    {
        path: 'products',
        loadChildren: 'app/modules/product/product.module#ProductModule'
    },
    {
        path: 'product-tags',
        loadChildren: 'app/modules/product-tag/product-tag.module#ProductTagModule'
    },
    {
        path: 'orders',
        loadChildren: 'app/modules/order/order.module#OrderModule'
    },
    {
        path: 'order-ships',
        loadChildren: 'app/modules/order-ship/order-ship.module#OrderShipModule'
    },
    {
        path: 'ship-units',
        loadChildren: 'app/modules/shipping-unit/shipping-unit.module#ShippingUnitModule'
    },
    {
        path: 'vouchers',
        loadChildren: 'app/modules/voucher/voucher.module#VoucherModule'
    },
    {
        path: 'promotions',
        loadChildren: 'app/modules/promotion/promotion.module#PromotionModule'
    },
    {
        path: 'shipping_fees',
        loadChildren: 'app/modules/shipping-fee/shipping-fee.module#ShippingFeeModule'
    },
    {
        path: 'variants',
        loadChildren: 'app/modules/variant/variant.module#VariantModule'
    },
    {
        path: 'store_posts',
        loadChildren: 'app/modules/store-post/store-post.module#StorePostModule'
    },
    {
        path: 'imports',
        loadChildren: 'app/modules/import/import.module#ImportModule'
    },
    {
        path: 'expenses',
        loadChildren: 'app/modules/expense/expense.module#ExpenseModule'
    },
    {
        path: 'payment_methods',
        loadChildren: 'app/modules/payment-method/payment-method.module#PaymentMethodModule'
    },
    {
        path: 'provinces',
        loadChildren: 'app/modules/province/province.module#ProvinceModule'
    },
    {
        path: 'payment-transactions',
        loadChildren: 'app/modules/payment-transaction/payment-transaction.module#PaymentTransactionModule'
    },
    {
        path: 'profile',
        loadChildren: 'app/modules/profile/profile.module#ProfileModule'
    }
];


/***/ }),

/***/ "./src/app/layout/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"main-footer\">\r\n  <div class=\"pull-right hidden-xs\">\r\n    <b>NamPH</b>\r\n  </div>\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/layout/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/layout/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/layout/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/layout/header/header.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"main-header\">\r\n  <a class=\"logo\" href=\"/\">\r\n    <span class=\"logo-mini\"><b>Spexi</b></span>\r\n    <span class=\"logo-lg\">Spexi Shop</span>\r\n  </a>\r\n  <nav class=\"navbar navbar-static-top\">\r\n    <a class=\"sidebar-toggle\" data-toggle=\"push-menu\" href=\"#\" role=\"button\">\r\n      <span class=\"sr-only\">Toggle navigation</span>\r\n    </a>\r\n    <div class=\"navbar-custom-menu\">\r\n      <ul class=\"nav navbar-nav\">\r\n        <li class=\"dropdown user user-menu\">\r\n          <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\r\n            <img [alt]=\"name\" [src]=\"avatar\" class=\"user-image\">\r\n            <span class=\"hidden-xs\">{{name}}</span>\r\n          </a>\r\n          <ul class=\"dropdown-menu\">\r\n            <li class=\"user-header\">\r\n              <img [alt]=\"name\" [src]=\"avatar\" class=\"img-circle\">\r\n              <p>{{name}}</p>\r\n            </li>\r\n            <li class=\"user-footer\">\r\n              <div class=\"pull-left\">\r\n                <a [routerLink]=\"['/profile']\" class=\"btn btn-default btn-flat\">Đổi thông tin</a>\r\n              </div>\r\n              <div class=\"pull-right\">\r\n                <a (click)=\"logout()\" class=\"btn btn-danger btn-flat\" href=\"javascript:void(0)\">Đăng xuất</a>\r\n              </div>\r\n            </li>\r\n          </ul>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </nav>\r\n</header>\r\n"

/***/ }),

/***/ "./src/app/layout/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_auth__ = __webpack_require__("./src/app/modules/auth/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_utils__ = __webpack_require__("./src/app/core/utils/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router) {
        this.router = router;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.name = __WEBPACK_IMPORTED_MODULE_3__core_utils__["d" /* StorageUtil */].get('name');
        this.avatar = __WEBPACK_IMPORTED_MODULE_3__core_utils__["d" /* StorageUtil */].get('avatar');
    };
    HeaderComponent.prototype.logout = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_3__core_utils__["d" /* StorageUtil */].clear();
        setTimeout(function () {
            _this.router.navigateByUrl('login');
        }, 500);
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/layout/header/header.component.html"),
            styles: [__webpack_require__("./src/app/layout/header/header.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__modules_auth__["a" /* AuthService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/layout/sidebar/sidebar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<aside class=\"main-sidebar\">\r\n  <section class=\"sidebar\">\r\n    <ul class=\"sidebar-menu\" data-widget=\"tree\">\r\n      <li>\r\n        <div class=\"row\">\r\n          <div class=\"col-xs-12\">\r\n          </div>\r\n        </div>\r\n      </li>\r\n      <li class=\"header\">TÍNH NĂNG CHÍNH</li>\r\n      <li *ngFor=\"let ft of features; let i=index;\" [routerLinkActive]=\"['active']\" class=\"treeview\">\r\n        <a *ngIf=\"ft['link']\" [routerLink]=\"[ft['link']]\">\r\n          <i [class]=\"ft['icon']\" class=\"fa\"></i>\r\n          <span>{{ft['name']}}</span>\r\n        </a>\r\n        <a *ngIf=\"!ft['link']\" href=\"javascript:void(0)\">\r\n          <i [class]=\"ft['icon']\"></i> <span>{{ft['name']}}</span>\r\n          <span class=\"pull-right-container\">\r\n              <i class=\"fa fa-angle-left pull-right\"></i>\r\n            </span>\r\n        </a>\r\n        <ul *ngIf=\"!ft['link']\" class=\"treeview-menu\">\r\n          <li *ngFor=\"let child of ft['children']\" [ngClass]=\"{'treeview':!child['link']&&child['children']}\"\r\n              [routerLinkActive]=\"['active']\">\r\n            <a *ngIf=\"child['link']\" [routerLink]=\"[child['link']]\">\r\n              <i [class]=\"child['icon']\" class=\"fa\"></i>\r\n              <span>{{child['name']}}</span>\r\n            </a>\r\n            <a *ngIf=\"!child['link']\" href=\"javascript:void(0)\">\r\n              <i [class]=\"child['icon']\"></i> <span>{{child['name']}}</span>\r\n              <span class=\"pull-right-container\">\r\n              <i class=\"fa fa-angle-left pull-right\"></i>\r\n            </span>\r\n            </a>\r\n            <ul *ngIf=\"!child['link']\" class=\"treeview-menu\">\r\n              <li *ngFor=\"let children of child['children']\" [routerLinkActive]=\"['active']\">\r\n                <a [routerLink]=\"[children['link']]\">\r\n                  <i [class]=\"children['icon']\"></i>{{children['name']}}\r\n                </a>\r\n              </li>\r\n            </ul>\r\n          </li>\r\n        </ul>\r\n      </li>\r\n    </ul>\r\n  </section>\r\n</aside>\r\n"

/***/ }),

/***/ "./src/app/layout/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_utils__ = __webpack_require__("./src/app/core/utils/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_features__ = __webpack_require__("./src/app/app.features.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(router) {
        this.router = router;
        this.name = '';
        this.features = __WEBPACK_IMPORTED_MODULE_2__app_features__["a" /* APP_FEATURES */];
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.name = __WEBPACK_IMPORTED_MODULE_1__core_utils__["d" /* StorageUtil */].get('name');
        this.photoUrl = __WEBPACK_IMPORTED_MODULE_1__core_utils__["d" /* StorageUtil */].get('photoUrl');
    };
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__("./src/app/layout/sidebar/sidebar.component.html"),
            styles: [__webpack_require__("./src/app/layout/sidebar/sidebar.component.css")],
            providers: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n\r\n  <app-header></app-header>\r\n\r\n  <app-sidebar></app-sidebar>\r\n\r\n  <div class=\"content-wrapper\">\r\n    <!-- Content Header (Page header) -->\r\n    <section class=\"content-header\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12\">\r\n          <h3>{{title}}</h3>\r\n        </div>\r\n      </div>\r\n\r\n    </section>\r\n\r\n    <!-- Main content -->\r\n    <section class=\"content\">\r\n      <router-outlet></router-outlet>\r\n    </section>\r\n    <!-- /.content -->\r\n  </div>\r\n\r\n  <app-footer></app-footer>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services__ = __webpack_require__("./src/app/core/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_auth__ = __webpack_require__("./src/app/modules/auth/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(titleService) {
        this.titleService = titleService;
        this.bodyClasses = ['skin-yellow-light', 'sidebar-mini'];
        this.body = document.getElementsByTagName('body')[0];
        this.title = 'Welcome to our system';
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bodyClasses.forEach(function (value) { return _this.body.classList.add(value); });
        this.sub = this.titleService.titleSubject$.subscribe(function (newTitle) { return _this.title = newTitle; });
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        var _this = this;
        this.bodyClasses.forEach(function (value) { return _this.body.classList.remove(value); });
        this.sub.unsubscribe();
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__("./src/app/pages/home/home.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__modules_auth__["a" /* AuthService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_services__["d" /* TitleService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layout_header_header_component__ = __webpack_require__("./src/app/layout/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__layout_sidebar_sidebar_component__ = __webpack_require__("./src/app/layout/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__layout_footer_footer_component__ = __webpack_require__("./src/app/layout/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_component__ = __webpack_require__("./src/app/pages/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing__ = __webpack_require__("./src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_multiselect_dropdown__ = __webpack_require__("./node_modules/angular2-multiselect-dropdown/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_6__home_component__["a" /* HomeComponent */],
        children: __WEBPACK_IMPORTED_MODULE_7__app_routing__["a" /* MODULES_ROUTING */]
    }
];
var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* RouterModule */].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_9_angular2_multiselect_dropdown__["a" /* AngularMultiSelectModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__layout_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_4__layout_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_3__layout_sidebar_sidebar_component__["a" /* SidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_6__home_component__["a" /* HomeComponent */]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ })

});
//# sourceMappingURL=home.module.chunk.js.map