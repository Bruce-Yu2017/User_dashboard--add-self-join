webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__welcome_welcome_component__ = __webpack_require__("../../../../../src/app/welcome/welcome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__edit_self_edit_self_component__ = __webpack_require__("../../../../../src/app/edit-self/edit-self.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__newuser_newuser_component__ = __webpack_require__("../../../../../src/app/newuser/newuser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__edit_other_edit_other_component__ = __webpack_require__("../../../../../src/app/edit-other/edit-other.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__message_message_component__ = __webpack_require__("../../../../../src/app/message/message.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__event_dashboard_event_dashboard_component__ = __webpack_require__("../../../../../src/app/event-dashboard/event-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__event_detail_event_detail_component__ = __webpack_require__("../../../../../src/app/event-detail/event-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__poke_poke_component__ = __webpack_require__("../../../../../src/app/poke/poke.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    { path: "", pathMatch: "full", component: __WEBPACK_IMPORTED_MODULE_2__welcome_welcome_component__["a" /* WelcomeComponent */] },
    { path: "signin", pathMatch: "full", component: __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */] },
    { path: "register", pathMatch: "full", component: __WEBPACK_IMPORTED_MODULE_4__register_register_component__["a" /* RegisterComponent */] },
    { path: "dashboard", pathMatch: "full", component: __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: "edit", pathMatch: "full", component: __WEBPACK_IMPORTED_MODULE_6__edit_self_edit_self_component__["a" /* EditSelfComponent */] },
    { path: "addnew", pathMatch: "full", component: __WEBPACK_IMPORTED_MODULE_7__newuser_newuser_component__["a" /* NewuserComponent */] },
    { path: "edit_other/:id", pathMatch: "full", component: __WEBPACK_IMPORTED_MODULE_8__edit_other_edit_other_component__["a" /* EditOtherComponent */] },
    { path: "message/:id", pathMatch: "full", component: __WEBPACK_IMPORTED_MODULE_9__message_message_component__["a" /* MessageComponent */] },
    { path: "events", pathMatch: "full", component: __WEBPACK_IMPORTED_MODULE_10__event_dashboard_event_dashboard_component__["a" /* EventDashboardComponent */] },
    { path: "eventdetail/:id", pathMatch: "full", component: __WEBPACK_IMPORTED_MODULE_11__event_detail_event_detail_component__["a" /* EventDetailComponent */] },
    { path: "pokes", pathMatch: "full", component: __WEBPACK_IMPORTED_MODULE_12__poke_poke_component__["a" /* PokeComponent */] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__main_service__ = __webpack_require__("../../../../../src/app/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__welcome_welcome_component__ = __webpack_require__("../../../../../src/app/welcome/welcome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__edit_self_edit_self_component__ = __webpack_require__("../../../../../src/app/edit-self/edit-self.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__newuser_newuser_component__ = __webpack_require__("../../../../../src/app/newuser/newuser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__edit_other_edit_other_component__ = __webpack_require__("../../../../../src/app/edit-other/edit-other.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__message_message_component__ = __webpack_require__("../../../../../src/app/message/message.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__event_dashboard_event_dashboard_component__ = __webpack_require__("../../../../../src/app/event-dashboard/event-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__event_detail_event_detail_component__ = __webpack_require__("../../../../../src/app/event-detail/event-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__poke_poke_component__ = __webpack_require__("../../../../../src/app/poke/poke.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__welcome_welcome_component__["a" /* WelcomeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_9__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_10__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_11__edit_self_edit_self_component__["a" /* EditSelfComponent */],
                __WEBPACK_IMPORTED_MODULE_12__newuser_newuser_component__["a" /* NewuserComponent */],
                __WEBPACK_IMPORTED_MODULE_13__edit_other_edit_other_component__["a" /* EditOtherComponent */],
                __WEBPACK_IMPORTED_MODULE_14__message_message_component__["a" /* MessageComponent */],
                __WEBPACK_IMPORTED_MODULE_15__event_dashboard_event_dashboard_component__["a" /* EventDashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_16__event_detail_event_detail_component__["a" /* EventDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_17__poke_poke_component__["a" /* PokeComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__main_service__["a" /* MainService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".back {\n  background-image: url(\"/./../assets/img/dashboard.jpeg\");\n  background-position: center center;\n  background-size: cover;\n  height: 1000px;\n  opacity: 0.9;\n  background-attachment:fixed;\n  \n}\n\n.tabletop {\n  display: inline-block;\n  margin-top: 100px;\n\n}\n\n#addnew {\n  float: right;\n}\n\n.namelink {\n  color: #eafe05;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-expand-lg navbar-dark bg-primary fixed-top\">\n  <div class=\"container\">\n    <a class=\"navbar-brand\" [routerLink]=\"['/']\">Bruce's App</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor01\" aria-controls=\"navbarColor01\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarColor01\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" [routerLink]=\"['/edit']\">Profile <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" [routerLink]=\"['/events']\">Check Events <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" [routerLink]=\"['/pokes']\">Let's Poke <span class=\"sr-only\">(current)</span></a>\n        </li>\n      </ul>\n      <form class=\"form-inline my-2 my-lg-0\" (submit) = \"logout()\">\n        <button class=\"btn btn-secondary my-2 my-sm-0\" type=\"submit\">Log out</button>\n      </form>\n    </div>\n  </div>\n</nav>\n\n<div class=\"back\">\n  <div class=\"container\">\n\n    <div *ngIf = \"current_user.user_level == '9'\">\n      <h2 class=\"tabletop\">Manage User</h2>\n      <a [routerLink]=\"['/addnew']\"><button id=\"addnew\" class=\"tabletop btn btn-secondary\">Add new</button></a>\n    </div>\n\n    <h2 *ngIf = \"current_user.user_level == '0'\" class=\"tabletop\">All users</h2>\n\n    <table class=\"table table-hover\">\n      <thead>\n        <tr>\n          <th scope=\"col\">Name</th>\n          <th scope=\"col\">Email</th>\n          <th scope=\"col\">Create_at</th>\n          <th scope=\"col\">Location</th>\n          <th scope=\"col\">User Level</th>\n          <th scope=\"col\" *ngIf = \"current_user.user_level == '9'\">Actions</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr class=\"table-success\" *ngFor = \"let a of allusers\">\n          <th scope=\"row\"><a [routerLink]=\"['/message', a._id]\" class=\"namelink\">{{a.first_name}} {{a.last_name}}</a></th>\n          <td>{{a.email}}</td>\n          <td>{{a.createdAt | date:'longDate'}}</td>\n          <td>{{a.location}}</td>\n          <td *ngIf = \"a.user_level == 9\">Admin</td>\n          <td *ngIf = \"a.user_level == 0\">Normal</td>\n          <td *ngIf = \"current_user.user_level == '9'\">\n            <a [routerLink]=\"['/edit_other', a._id]\"><button *ngIf = \"a.user_level != '9'\" class=\"btn btn-info\">Edit</button></a> \n            <button *ngIf = \"a.user_level != '9'\" class=\"btn btn-danger\" (click) =(delete_user(a._id))>Delete</button> </td>\n\n          </tr>\n        </tbody>\n      </table> \n    </div>\n  </div>\n\n\n\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_service__ = __webpack_require__("../../../../../src/app/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = (function () {
    function DashboardComponent(_service, _router) {
        this._service = _service;
        this._router = _router;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.user == undefined) {
            this._router.navigate(['/']);
        }
        this.current_user = this._service.user;
        console.log("from dash com oninit: ", this.current_user);
        this._service.retrieveAllUser(function (res) {
            _this.allusers = res;
        });
    };
    DashboardComponent.prototype.delete_user = function (id) {
        var _this = this;
        console.log("from dashboard com delete: ", id);
        this._service.delete_user(id, function (res) {
            console.log("delete user success from dashboard com: ", res);
        });
        this._service.retrieveAllUser(function (res) {
            _this.allusers = res;
        });
    };
    DashboardComponent.prototype.logout = function () {
        this._service.logout();
        this._router.navigate(['/']);
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__main_service__["a" /* MainService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/edit-other/edit-other.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".back {\n  background-image: url(\"/./../assets/img/editother.jpeg\");\n  background-position: center center;\n  background-size: cover;\n  height: 1000px;\n  opacity: 0.9;\n  overflow: auto;\n\n}\n.top {\n  margin-top: 284px;\n}\n\n.inlineshow {\n  display: inline-block;\n  /*width: 500px;*/\n}\n.editcontrol {\n  display: inline-block;\n  width: 100%;\n  padding: 0.375rem 0.75rem;\n  font-size: 0.9375rem;\n  line-height: 1.5;\n  color: #7b8a8b;\n  background-color: #fff;\n  background-image: none;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n}\n\n.bigdiv {\n  margin-left: 100px; \n  margin-top: 100px;\n}\n\n.subformdiv {\n  display: inline-block;\n  /*border: 1px solid black;*/\n}\n.des_form {\n  margin-left: 110px;\n  margin-top: 20px;\n}\n\np {\n  color: red;\n}\n\n\n\n\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/edit-other/edit-other.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"back\">\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-primary fixed-top\">\n    <div class=\"container\">\n      <a class=\"navbar-brand\" [routerLink]=\"['/']\" style=\"color: white;\">Bruce's App</a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor01\" aria-controls=\"navbarColor01\"\n      aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarColor01\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" [routerLink]=\"['/dashboard']\">Dashboard\n            <span class=\"sr-only\">(current)</span>\n          </a>\n        </li>\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" [routerLink]=\"['/edit']\">Profile\n            <span class=\"sr-only\">(current)</span>\n          </a>\n        </li>\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" [routerLink]=\"['/pokes']\">Let's Poke <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" [routerLink]=\"['/events']\">Check Events\n            <span class=\"sr-only\">(current)</span>\n          </a>\n        </li>\n      </ul>\n      <form class=\"form-inline my-2 my-lg-0\" (submit)=\"logout()\">\n        <button class=\"btn btn-secondary my-2 my-sm-0\" type=\"submit\">Log out</button>\n      </form>\n    </div>\n  </div>\n</nav>\n\n<!-- edit information -->\n<div class=\"container top\">\n  <div class=\"bigdiv\">\n    <h2 style=\"color: green;\">Being editted user: {{being_editted_user.first_name}} {{being_editted_user.last_name}}</h2>\n    <div class=\"col-lg-5 subformdiv\">\n      <h3>Edit information</h3>\n      <form (submit)=\"update_other()\">\n        <div class=\"form-group\">\n          <label>First Name</label>\n          <input type=\"text\" name=\"first_name\" class=\"editcontrol\" [(ngModel)]=\"being_editted_user.first_name\" required #update_firstname=\"ngModel\">\n        </div>\n        <div *ngIf=\"update_firstname.invalid && (update_firstname.dirty || update_firstname.touched)\">\n          <p *ngIf=\"update_firstname.errors.required\">\n            First Name is required.\n          </p>\n        </div>\n\n        <div class=\"form-group\">\n          <label>Last Name</label>\n          <input type=\"text\" name=\"last_name\" class=\"editcontrol\" [(ngModel)]=\"being_editted_user.last_name\" required #update_lastname=\"ngModel\">\n        </div>\n        <div *ngIf=\"update_lastname.invalid && (update_lastname.dirty || update_lastname.touched)\">\n          <p *ngIf=\"update_lastname.errors.required\">\n            Last Name is required.\n          </p>\n        </div>\n\n        <div class=\"form-group\">\n          <label>Location</label>\n          <select [(ngModel)]=\"being_editted_user.location\" #update_location=\"ngModel\" name=\"locat\" required>\n            <option value=\"AL\">Alabama</option>\n            <option value=\"AK\">Alaska</option>\n            <option value=\"AZ\">Arizona</option>\n            <option value=\"AR\">Arkansas</option>\n            <option value=\"CA\">California</option>\n            <option value=\"CO\">Colorado</option>\n            <option value=\"CT\">Connecticut</option>\n            <option value=\"DE\">Delaware</option>\n            <option value=\"DC\">District Of Columbia</option>\n            <option value=\"FL\">Florida</option>\n            <option value=\"GA\">Georgia</option>\n            <option value=\"HI\">Hawaii</option>\n            <option value=\"ID\">Idaho</option>\n            <option value=\"IL\">Illinois</option>\n            <option value=\"IN\">Indiana</option>\n            <option value=\"IA\">Iowa</option>\n            <option value=\"KS\">Kansas</option>\n            <option value=\"KY\">Kentucky</option>\n            <option value=\"LA\">Louisiana</option>\n            <option value=\"ME\">Maine</option>\n            <option value=\"MD\">Maryland</option>\n            <option value=\"MA\">Massachusetts</option>\n            <option value=\"MI\">Michigan</option>\n            <option value=\"MN\">Minnesota</option>\n            <option value=\"MS\">Mississippi</option>\n            <option value=\"MO\">Missouri</option>\n            <option value=\"MT\">Montana</option>\n            <option value=\"NE\">Nebraska</option>\n            <option value=\"NV\">Nevada</option>\n            <option value=\"NH\">New Hampshire</option>\n            <option value=\"NJ\">New Jersey</option>\n            <option value=\"NM\">New Mexico</option>\n            <option value=\"NY\">New York</option>\n            <option value=\"NC\">North Carolina</option>\n            <option value=\"ND\">North Dakota</option>\n            <option value=\"OH\">Ohio</option>\n            <option value=\"OK\">Oklahoma</option>\n            <option value=\"OR\">Oregon</option>\n            <option value=\"PA\">Pennsylvania</option>\n            <option value=\"RI\">Rhode Island</option>\n            <option value=\"SC\">South Carolina</option>\n            <option value=\"SD\">South Dakota</option>\n            <option value=\"TN\">Tennessee</option>\n            <option value=\"TX\">Texas</option>\n            <option value=\"UT\">Utah</option>\n            <option value=\"VT\">Vermont</option>\n            <option value=\"VA\">Virginia</option>\n            <option value=\"WA\">Washington</option>\n            <option value=\"WV\">West Virginia</option>\n            <option value=\"WI\">Wisconsin</option>\n            <option value=\"WY\">Wyoming</option>\n          </select>\n        </div>\n        <div *ngIf=\"update_location.invalid && (update_location.dirty || update_location.touched)\">\n          <p *ngIf=\"update_location.errors.required\">\n            Location is required.\n          </p>\n        </div>\n        <hr>\n        <button class=\"btn btn-primary\">Update Information</button>\n      </form>\n    </div>\n\n    <!-- change password -->\n    <div class=\"col-lg-5 subformdiv\">\n      <h3>Edit password</h3>\n      <form (submit)=\"update_otherpassword()\">\n        <div class=\"form-group\">\n          <label>Password</label>\n          <input type=\"password\" name=\"password\" class=\"editcontrol\" [(ngModel)]=\"password_update\" required #password=\"ngModel\">\n        </div>\n        <div *ngIf=\"password.invalid && (password.dirty || password.touched)\">\n          <p *ngIf=\"password.errors.required\">\n            Password is required.\n          </p>\n        </div>\n\n        <div class=\"form-group\">\n          <label>Password confirmation</label>\n          <input type=\"password\" name=\"passwordcon\" class=\"editcontrol\" [(ngModel)]=\"passwordcon\" required pattern=\"{{password_update}}\"\n          #password_con=\"ngModel\">\n        </div>\n        <div *ngIf=\"password_con.invalid && (password_con.dirty || password_con.touched)\">\n          <p *ngIf=\"password_con.errors.required\">\n            Password confirmation is required.\n          </p>\n          <p *ngIf=\"password_con.errors.pattern\">\n            Password confirmation is not mattch your password.\n          </p>\n        </div>\n        <hr>\n        <button class=\"btn btn-primary\">Update Password</button>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/edit-other/edit-other.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditOtherComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_service__ = __webpack_require__("../../../../../src/app/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditOtherComponent = (function () {
    function EditOtherComponent(_service, _router, _route) {
        this._service = _service;
        this._router = _router;
        this._route = _route;
        this.being_editted_user = {
            first_name: "",
            last_name: "",
            location: ""
        };
        this.being_editted_id = {
            id: ""
        };
        this.error_message = {
            email: ""
        };
    }
    EditOtherComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.current_user = this._service.user;
        if (localStorage.user == undefined) {
            this._router.navigate(['/']);
        }
        if (this.current_user.user_level != 9) {
            this._router.navigate(['/']);
            localStorage.removeItem("user");
        }
        this._route.paramMap.subscribe(function (params) {
            _this._service.retrieveOneUser(params.get("id"), function (res) {
                _this.being_editted_user = res;
                _this.being_editted_id = res._id;
                console.log("from edit other com oninit: ", _this.being_editted_id);
            });
        });
    };
    //update other user by admin
    EditOtherComponent.prototype.update_other = function () {
        var _this = this;
        this._service.update_other(this.being_editted_id, this.being_editted_user, function (res) {
            _this._router.navigate(['dashboard']);
        });
    };
    EditOtherComponent.prototype.update_otherpassword = function () {
        console.log("from com updatepassword: ", this.password_update);
        this._service.update_other_password(this.being_editted_id, this.password_update, function (res) {
            console.log("from edit other com update password: success update", res);
        });
        this._router.navigate(['dashboard']);
        this.password_update = "";
    };
    EditOtherComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-edit-other',
            template: __webpack_require__("../../../../../src/app/edit-other/edit-other.component.html"),
            styles: [__webpack_require__("../../../../../src/app/edit-other/edit-other.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__main_service__["a" /* MainService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], EditOtherComponent);
    return EditOtherComponent;
}());



/***/ }),

/***/ "../../../../../src/app/edit-self/edit-self.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".back {\n  background-image: url(\"/./../assets/img/editself.jpeg\");\n  background-position: center center;\n  background-size: cover;\n  height: 1000px;\n  opacity: 0.9;\n  overflow: auto;\n\n}\n.top {\n  margin-top: 30px;\n}\n\n.inlineshow {\n  display: inline-block;\n  /*width: 500px;*/\n}\n.editcontrol {\n  display: inline-block;\n  width: 100%;\n  padding: 0.375rem 0.75rem;\n  font-size: 0.9375rem;\n  line-height: 1.5;\n  color: #7b8a8b;\n  background-color: #fff;\n  background-image: none;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n}\n\n.bigdiv {\n  /*margin-left: 100px; */\n  margin-top: 100px;\n  color: white;\n}\n\n.subformdiv {\n  display: inline-block;\n  /*border: 1px solid black;*/\n}\n.des_form {\n  margin-left: 10px;\n  margin-top: 20px;\n  color: white;\n}\n\np {\n  color: red;\n}\n\n/* .margin {\n  padding-bottom: 40px;\n} */\n\n\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/edit-self/edit-self.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"back\">\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-primary fixed-top\">\n    <div class=\"container\">\n      <a class=\"navbar-brand\" [routerLink]=\"['/']\" style=\"color: white;\">Bruce's App</a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor01\" aria-controls=\"navbarColor01\"\n      aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarColor01\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" [routerLink]=\"['/dashboard']\">Dashboard\n            <span class=\"sr-only\">(current)</span>\n          </a>\n        </li>\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" [routerLink]=\"['/pokes']\">Let's Poke <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" [routerLink]=\"['/events']\">Check Events\n            <span class=\"sr-only\">(current)</span>\n          </a>\n        </li>\n      </ul>\n      <form class=\"form-inline my-2 my-lg-0\" (submit)=\"logout()\">\n        <button class=\"btn btn-secondary my-2 my-sm-0\" type=\"submit\">Log out</button>\n      </form>\n    </div>\n  </div>\n</nav>\n\n<!-- edit information -->\n<div class=\"container\">\n  <div class=\"bigdiv\">\n    <div class=\"col-lg-5 subformdiv\">\n      <h3>Edit information</h3>\n      <form (submit)=\"update()\">\n        <div class=\"form-group\">\n          <label>First Name</label>\n          <input type=\"text\" name=\"first_name\" class=\"editcontrol\" [(ngModel)]=\"user.first_name\" required #update_firstname=\"ngModel\">\n        </div>\n        <div *ngIf=\"update_firstname.invalid && (update_firstname.dirty || update_firstname.touched)\">\n          <p *ngIf=\"update_firstname.errors.required\">\n            First Name is required.\n          </p>\n        </div>\n\n        <div class=\"form-group\">\n          <label>Last Name</label>\n          <input type=\"text\" name=\"last_name\" class=\"editcontrol\" [(ngModel)]=\"user.last_name\" required #update_lastname=\"ngModel\">\n        </div>\n        <div *ngIf=\"update_lastname.invalid && (update_lastname.dirty || update_lastname.touched)\">\n          <p *ngIf=\"update_lastname.errors.required\">\n            Last Name is required.\n          </p>\n        </div>\n\n        <div class=\"form-group\">\n          <label>Location</label>\n          <select [(ngModel)]=\"user.location\" #update_location=\"ngModel\" name=\"locat\" required>\n            <option value=\"AL\">Alabama</option>\n            <option value=\"AK\">Alaska</option>\n            <option value=\"AZ\">Arizona</option>\n            <option value=\"AR\">Arkansas</option>\n            <option value=\"CA\">California</option>\n            <option value=\"CO\">Colorado</option>\n            <option value=\"CT\">Connecticut</option>\n            <option value=\"DE\">Delaware</option>\n            <option value=\"DC\">District Of Columbia</option>\n            <option value=\"FL\">Florida</option>\n            <option value=\"GA\">Georgia</option>\n            <option value=\"HI\">Hawaii</option>\n            <option value=\"ID\">Idaho</option>\n            <option value=\"IL\">Illinois</option>\n            <option value=\"IN\">Indiana</option>\n            <option value=\"IA\">Iowa</option>\n            <option value=\"KS\">Kansas</option>\n            <option value=\"KY\">Kentucky</option>\n            <option value=\"LA\">Louisiana</option>\n            <option value=\"ME\">Maine</option>\n            <option value=\"MD\">Maryland</option>\n            <option value=\"MA\">Massachusetts</option>\n            <option value=\"MI\">Michigan</option>\n            <option value=\"MN\">Minnesota</option>\n            <option value=\"MS\">Mississippi</option>\n            <option value=\"MO\">Missouri</option>\n            <option value=\"MT\">Montana</option>\n            <option value=\"NE\">Nebraska</option>\n            <option value=\"NV\">Nevada</option>\n            <option value=\"NH\">New Hampshire</option>\n            <option value=\"NJ\">New Jersey</option>\n            <option value=\"NM\">New Mexico</option>\n            <option value=\"NY\">New York</option>\n            <option value=\"NC\">North Carolina</option>\n            <option value=\"ND\">North Dakota</option>\n            <option value=\"OH\">Ohio</option>\n            <option value=\"OK\">Oklahoma</option>\n            <option value=\"OR\">Oregon</option>\n            <option value=\"PA\">Pennsylvania</option>\n            <option value=\"RI\">Rhode Island</option>\n            <option value=\"SC\">South Carolina</option>\n            <option value=\"SD\">South Dakota</option>\n            <option value=\"TN\">Tennessee</option>\n            <option value=\"TX\">Texas</option>\n            <option value=\"UT\">Utah</option>\n            <option value=\"VT\">Vermont</option>\n            <option value=\"VA\">Virginia</option>\n            <option value=\"WA\">Washington</option>\n            <option value=\"WV\">West Virginia</option>\n            <option value=\"WI\">Wisconsin</option>\n            <option value=\"WY\">Wyoming</option>\n          </select>\n        </div>\n        <div *ngIf=\"update_location.invalid && (update_location.dirty || update_location.touched)\">\n          <p *ngIf=\"update_location.errors.required\">\n            Location is required.\n          </p>\n        </div>\n\n        <hr>\n        <button class=\"btn btn-primary\">Update Information</button>\n      </form>\n    </div>\n\n    <!-- change password -->\n    <div class=\"col-lg-5 subformdiv\">\n      <h3>Edit password</h3>\n      <form (submit)=\"updatepassword()\">\n        <div class=\"form-group\">\n          <label>Password</label>\n          <input type=\"password\" name=\"password\" class=\"editcontrol\" [(ngModel)]=\"password_update\" required #password=\"ngModel\">\n        </div>\n        <div *ngIf=\"password.invalid && (password.dirty || password.touched)\">\n          <p *ngIf=\"password.errors.required\">\n            Password is required.\n          </p>\n        </div>\n\n        <div class=\"form-group\">\n          <label>Password confirmation</label>\n          <input type=\"password\" name=\"passwordcon\" class=\"editcontrol\" [(ngModel)]=\"passwordcon\" required pattern=\"{{password_update}}\"\n          #password_con=\"ngModel\">\n        </div>\n        <div *ngIf=\"password_con.invalid && (password_con.dirty || password_con.touched)\">\n          <p *ngIf=\"password_con.errors.required\">\n            Password confirmation is required.\n          </p>\n          <p *ngIf=\"password_con.errors.pattern\">\n            Password confirmation is not mattch your password.\n          </p>\n        </div>\n        <hr>\n        <button class=\"btn btn-primary\">Update Password</button>\n      </form>\n    </div>\n  </div>\n\n  <!-- edit description -->\n  <form class=\"des_form\" (submit)=\"add_description()\">\n    <h3>Edit Description</h3>\n    <input type=\"text\" name=\"des\" class=\"form-control\" [(ngModel)]=\"description\" required #des=\"ngModel\">\n    <div *ngIf=\"des.invalid && (des.dirty || des.touched)\">\n      <p *ngIf=\"des.errors.required\">\n        Description is required.\n      </p>\n    </div>\n    <hr>\n    <button class=\"btn btn-primary\">Save Description</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/edit-self/edit-self.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditSelfComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_service__ = __webpack_require__("../../../../../src/app/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditSelfComponent = (function () {
    function EditSelfComponent(_service, _router) {
        this._service = _service;
        this._router = _router;
        this.updateinfo = {
            email: "",
            first_name: "",
            last_name: "",
            location: ""
        };
        this.error_message = {
            email: ""
        };
    }
    EditSelfComponent.prototype.ngOnInit = function () {
        if (localStorage.user == undefined) {
            this._router.navigate(['/']);
        }
        this.user = this._service.user;
        console.log(this.user);
    };
    EditSelfComponent.prototype.update = function () {
        var _this = this;
        this._service.update(this.user, function (res) {
            _this._router.navigate(['dashboard']);
        });
        // this._router.navigate(['dashboard']);  
    };
    EditSelfComponent.prototype.updatepassword = function () {
        console.log("from com updatepassword: ", this.password_update);
        this._service.updatepassword(this.password_update, function (res) {
            console.log("from com update password: success update", res);
        });
        this._router.navigate(['dashboard']);
        this.password_update = "";
    };
    EditSelfComponent.prototype.add_description = function () {
        console.log("from com add des: ", this.description);
        this._service.add_description(this.description, function (res) {
            console.log("from com add description success: ", res);
        });
        this._router.navigate(['dashboard']);
        this.description = "";
    };
    EditSelfComponent.prototype.logout = function () {
        this._service.logout();
        this._router.navigate(['/']);
    };
    EditSelfComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-edit-self',
            template: __webpack_require__("../../../../../src/app/edit-self/edit-self.component.html"),
            styles: [__webpack_require__("../../../../../src/app/edit-self/edit-self.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__main_service__["a" /* MainService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], EditSelfComponent);
    return EditSelfComponent;
}());



/***/ }),

/***/ "../../../../../src/app/event-dashboard/event-dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".back {\n  background-image: url(\"/./../assets/img/eventdashboard.jpeg\");\n  background-position: center center;\n  background-size: cover;\n  background-attachment:fixed;\n  height: 1000px;\n  opacity: 0.9;\n  padding-top: 100px;\n}\n\n.showtable {\n  height: 800px;\n  overflow: scroll;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/event-dashboard/event-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-expand-lg navbar-dark bg-primary fixed-top\">\n  <div class=\"container\">\n    <a class=\"navbar-brand\" [routerLink]=\"['/']\" style=\"color: white;\">Bruce's App</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor01\" aria-controls=\"navbarColor01\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarColor01\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" [routerLink]=\"['/dashboard']\">Dashboard\n          <span class=\"sr-only\">(current)</span>\n        </a>\n      </li>\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" [routerLink]=\"['/edit']\">Profile\n          <span class=\"sr-only\">(current)</span>\n        </a>\n      </li>\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" [routerLink]=\"['/pokes']\">Let's Poke <span class=\"sr-only\">(current)</span></a>\n      </li>\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\" (submit)=\"logout()\">\n      <button class=\"btn btn-secondary my-2 my-sm-0\" type=\"submit\">Log out</button>\n    </form>\n  </div>\n</div>\n</nav>\n\n<div class=\"back\">\n  <div class=\"container\">\n    <div class=\"showtable\">\n      <h2>Welcome, {{user.first_name}} {{user.last_name}}, from {{user.location}}</h2>\n      <hr>\n      <form (submit)=\"create_event()\">\n        <h3>Add Event</h3>\n        <div class=\"form-group\">\n          <label>Name: </label>\n          <input type=\"text\" name=\"name\" class=\"form-control\" aria-describedby=\"emailHelp\" placeholder=\"Enter event name\" [(ngModel)]=\"event.name\"\n          required #event_name=\"ngModel\">\n        </div>\n        <div *ngIf=\"event_name.invalid && (event_name.dirty || event_name.touched)\">\n          <div class=\"alert alert-dismissible alert-danger\" role=\"alert\" *ngIf=\"event_name.errors.required\">\n            Event name is required.\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <label>Date:</label>\n          <input min=\"{{ tomorrow }}\" type=\"date\" name=\"date\" [(ngModel)]=\"event.date\" required #event_date=\"ngModel\">\n          <div *ngIf=\"event_date.invalid && (event_date.dirty || event_date.touched)\">\n            <div class=\"alert alert-dismissible alert-danger\" role=\"alert\" *ngIf=\"event_name.errors.required\">\n              Event date is required.\n            </div>\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <label>Location:</label>\n          <select [(ngModel)]=event.location #event_location=\"ngModel\" name=\"locat\" required>\n            <option value=\"AL\">Alabama</option>\n            <option value=\"AK\">Alaska</option>\n            <option value=\"AZ\">Arizona</option>\n            <option value=\"AR\">Arkansas</option>\n            <option value=\"CA\">California</option>\n            <option value=\"CO\">Colorado</option>\n            <option value=\"CT\">Connecticut</option>\n            <option value=\"DE\">Delaware</option>\n            <option value=\"DC\">District Of Columbia</option>\n            <option value=\"FL\">Florida</option>\n            <option value=\"GA\">Georgia</option>\n            <option value=\"HI\">Hawaii</option>\n            <option value=\"ID\">Idaho</option>\n            <option value=\"IL\">Illinois</option>\n            <option value=\"IN\">Indiana</option>\n            <option value=\"IA\">Iowa</option>\n            <option value=\"KS\">Kansas</option>\n            <option value=\"KY\">Kentucky</option>\n            <option value=\"LA\">Louisiana</option>\n            <option value=\"ME\">Maine</option>\n            <option value=\"MD\">Maryland</option>\n            <option value=\"MA\">Massachusetts</option>\n            <option value=\"MI\">Michigan</option>\n            <option value=\"MN\">Minnesota</option>\n            <option value=\"MS\">Mississippi</option>\n            <option value=\"MO\">Missouri</option>\n            <option value=\"MT\">Montana</option>\n            <option value=\"NE\">Nebraska</option>\n            <option value=\"NV\">Nevada</option>\n            <option value=\"NH\">New Hampshire</option>\n            <option value=\"NJ\">New Jersey</option>\n            <option value=\"NM\">New Mexico</option>\n            <option value=\"NY\">New York</option>\n            <option value=\"NC\">North Carolina</option>\n            <option value=\"ND\">North Dakota</option>\n            <option value=\"OH\">Ohio</option>\n            <option value=\"OK\">Oklahoma</option>\n            <option value=\"OR\">Oregon</option>\n            <option value=\"PA\">Pennsylvania</option>\n            <option value=\"RI\">Rhode Island</option>\n            <option value=\"SC\">South Carolina</option>\n            <option value=\"SD\">South Dakota</option>\n            <option value=\"TN\">Tennessee</option>\n            <option value=\"TX\">Texas</option>\n            <option value=\"UT\">Utah</option>\n            <option value=\"VT\">Vermont</option>\n            <option value=\"VA\">Virginia</option>\n            <option value=\"WA\">Washington</option>\n            <option value=\"WV\">West Virginia</option>\n            <option value=\"WI\">Wisconsin</option>\n            <option value=\"WY\">Wyoming</option>\n          </select>\n        </div>\n        <div *ngIf=\"event_location.invalid && (event_location.dirty || event_location.touched)\">\n          <div class=\"alert alert-dismissible alert-danger\" role=\"alert\" *ngIf=\"event_location.errors.required\">\n            Location is required.\n          </div>\n        </div>\n        <button type=\"submit\" class=\"btn btn-primary\">Add Event</button>\n      </form>\n      <br>\n      <!-- event from the same state of current user -->\n\n\n\n      <div class=\"same_state\">\n        <h4>Here are some of the events at your state:</h4>\n        <table class=\"table table-hover\">\n          <thead>\n            <tr>\n              <th scope=\"col\">Name</th>\n              <th scope=\"col\">Date</th>\n              <th scope=\"col\">Location</th>\n              <th scope=\"col\">Host</th>\n              <th scope=\"col\">Action / Status</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr class=\"table-success\" *ngFor=\"let a of allevents\">\n              <th class=\"col-xs-3\" scope=\"row\" *ngIf=\"a.location == user.location\"><a style=\"color: yellow;\" [routerLink]=\"['/eventdetail', a._id]\">{{a.name}}</a></th>\n              <td class=\"col-xs-3\" *ngIf=\"a.location == user.location\">{{a.date | date:'longDate'}}</td>\n              <td class=\"col-xs-1\" *ngIf=\"a.location == user.location\">{{a.location}}</td>\n              <td class=\"col-xs-1\" *ngIf=\"a.location == user.location\">{{a._event_poster.first_name}} {{a._event_poster.last_name}}</td>\n              <td class=\"col-xs-4\" *ngIf=\"a.location == user.location\">\n                <button *ngIf=\"a._event_poster._id === user._id\" class=\"btn btn-danger\" (click)=\"delete(a._id)\">Delete</button>\n                <span *ngIf=\"a._users_joined.includes(user._id)\">Joining --\n                  <button class=\"btn btn-primary\" (click)=\"cancle_join(a._id)\">Cancle</button>\n                </span>\n                <button *ngIf=\"!a._users_joined.includes(user._id) && a._event_poster._id != user._id\" class=\"btn btn-info\" (click)=\"join(a._id)\">Join</button>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n\n      <hr>\n\n      <!-- event from different states of current user -->\n      <div class=\"diff_state\">\n        <h4>Here are some of the events in other states:</h4>\n        <table class=\"table table-hover\">\n          <thead>\n            <tr>\n              <th scope=\"col\">Name</th>\n              <th scope=\"col\">Date</th>\n              <th scope=\"col\">Location</th>\n              <th scope=\"col\">Host</th>\n              <th scope=\"col\">Action / Status</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr class=\"table-success\" *ngFor=\"let a of allevents\">\n              <th class=\"col-xs-3\" scope=\"row\" *ngIf=\"a.location != user.location\"><a style=\"color: yellow;\" [routerLink]=\"['/eventdetail', a._id]\">{{a.name}}</a></th>\n              <td class=\"col-xs-3\" *ngIf=\"a.location != user.location\">{{a.date | date:'longDate'}}</td>\n              <td class=\"col-xs-1\" *ngIf=\"a.location != user.location\">{{a.location}}</td>\n              <td class=\"col-xs-1\" *ngIf=\"a.location != user.location\">{{a._event_poster.first_name}} </td>\n              <td class=\"col-xs-4\" *ngIf=\"a.location != user.location\">\n                <button *ngIf=\"a._event_poster._id === user._id\" class=\"btn btn-danger\" (click)=\"delete(a._id)\">Delete</button>\n                <span *ngIf=\"a._users_joined.includes(user._id)\">Joining --\n                  <button class=\"btn btn-primary\" (click)=\"cancle_join(a._id)\">Cancle</button>\n                </span>\n                <button *ngIf=\"!a._users_joined.includes(user._id) && a._event_poster._id != user._id\" class=\"btn btn-info\" (click)=\"join(a._id)\">Join</button>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/event-dashboard/event-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventDashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_service__ = __webpack_require__("../../../../../src/app/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EventDashboardComponent = (function () {
    function EventDashboardComponent(_service, _router, _route) {
        this._service = _service;
        this._router = _router;
        this._route = _route;
        this.today = new Date();
        this.tomorrow = this.today.setDate(this.today.getDate() + 1);
        this.event = {
            name: "",
            date: "",
            location: ""
        };
    }
    EventDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.user == undefined) {
            this._router.navigate(['/']);
        }
        this.user = this._service.user;
        this._service.retrieveAllEvent(function (res) {
            console.log("from event dash com oninit: ", res);
            _this.allevents = res;
        });
    };
    EventDashboardComponent.prototype.create_event = function () {
        var _this = this;
        this._service.create_event(this.event, function (res) {
            _this._service.retrieveAllEvent(function (res) {
                console.log("from event dash com oninit: ", res);
                _this.allevents = res;
            });
        });
        this.event = {
            name: "",
            date: "",
            location: ""
        };
    };
    EventDashboardComponent.prototype.delete = function (event_id) {
        var _this = this;
        this._service.delete_event(event_id, function (res) {
            console.log("delete event success: ", res);
            _this._service.retrieveAllEvent(function (res) {
                console.log("from event dash com oninit: ", res);
                _this.allevents = res;
            });
        });
    };
    EventDashboardComponent.prototype.join = function (event_id) {
        var _this = this;
        this._service.join_event(event_id, function (res) {
            console.log("join event success: ", res);
            _this._service.retrieveAllEvent(function (res) {
                console.log("from event dash com oninit: ", res);
                _this.allevents = res;
            });
        });
    };
    EventDashboardComponent.prototype.cancle_join = function (event_id) {
        var _this = this;
        this._service.cancle_join(event_id, function (res) {
            console.log("cancle join success: ", res);
            _this._service.retrieveAllEvent(function (res) {
                console.log("from event dash com oninit: ", res);
                _this.allevents = res;
            });
        });
    };
    EventDashboardComponent.prototype.logout = function () {
        this._service.logout();
        this._router.navigate(['/']);
    };
    EventDashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-event-dashboard',
            template: __webpack_require__("../../../../../src/app/event-dashboard/event-dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/event-dashboard/event-dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__main_service__["a" /* MainService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], EventDashboardComponent);
    return EventDashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/event-detail/event-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".back {\n  background-image: url(\"/./../assets/img/eventdetail.jpg\");\n  background-position: center center;\n  background-size: cover;\n  background-attachment:fixed;\n  height: 900px;\n  /*opacity: 0.9;*/\n  padding-top: 150px;\n}\n\n.list-group1 {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding-left: 0;\n  margin-bottom: 0;\n  /*position: fixed;*/\n  width: 30rem;\n}\n\n.list {\n  display: blcok;\n}\n\n.tab {\n  margin-top: 70px;\n  width: 60%;\n}\n\n.r {\n  background-color: green;\n  color: white;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/event-detail/event-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-expand-lg navbar-dark bg-primary fixed-top\">\n  <div class=\"container\">\n    <a class=\"navbar-brand\" [routerLink]=\"['/']\" style=\"color: white;\">Bruce's App</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor01\" aria-controls=\"navbarColor01\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarColor01\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" [routerLink]=\"['/dashboard']\">Dashboard\n          <span class=\"sr-only\">(current)</span>\n        </a>\n      </li>\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" [routerLink]=\"['/edit']\">Profile\n          <span class=\"sr-only\">(current)</span>\n        </a>\n      </li>\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" [routerLink]=\"['/pokes']\">Let's Poke <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" [routerLink]=\"['/events']\">Check Events\n          <span class=\"sr-only\">(current)</span>\n        </a>\n      </li>\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\" (submit)=\"logout()\">\n      <button class=\"btn btn-secondary my-2 my-sm-0\" type=\"submit\">Log out</button>\n    </form>\n  </div>\n</div>\n</nav>\n\n<div class=\"back\">\n  <div class=\"container\">\n    <div class=\"list\">\n      <div class=\"list-group1\">\n        <p class=\"list-group-item list-group-item-action active\">\n          Host: {{event._event_poster.first_name}} {{event._event_poster.last_name}}\n        </p>\n        <p class=\"list-group-item list-group-item-action\">Date: {{event.date | date: \"longDate\"}}\n        </p>\n        <p class=\"list-group-item list-group-item-action\">Location: {{event.location}}\n        </p>\n        <p class=\"list-group-item list-group-item-action\">People who are joining this event: {{event._users_joined.length}}\n        </p>\n      </div>\n    </div>\n\n    <div class=\"tab\">\n      <table class=\"table table-hover\">\n        <thead>\n          <tr class=\"table-primary\">\n            <th scope=\"col\">Name</th>\n            <th scope=\"col\">Email</th>\n            <th scope=\"col\">Location</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor = \"let e of event._users_joined\" class=\"r\">\n            <th scope=\"row\">{{e.first_name}} {{e.last_name}}</th>\n            <td>{{e.email}}</td>\n            <td>{{e.location}}</td>\n          </tr>\n        </tbody>\n      </table> \n    </div>\n  </div>\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/event-detail/event-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_service__ = __webpack_require__("../../../../../src/app/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EventDetailComponent = (function () {
    function EventDetailComponent(_service, _router, _route) {
        this._service = _service;
        this._router = _router;
        this._route = _route;
    }
    EventDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.user == undefined) {
            this._router.navigate(['/']);
        }
        this.user = this._service.user;
        this._route.paramMap.subscribe(function (params) {
            _this._service.retrieveOneEvent(params.get("id"), function (res) {
                console.log("event detail service retrieve: ", res);
                _this.event = res;
            });
        });
    };
    EventDetailComponent.prototype.logout = function () {
        this._service.logout();
        this._router.navigate(['/']);
    };
    EventDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-event-detail',
            template: __webpack_require__("../../../../../src/app/event-detail/event-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/event-detail/event-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__main_service__["a" /* MainService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], EventDetailComponent);
    return EventDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".top {\n  margin-top: 30px;\n}\n\n#atag {\n  color: blue;\n  margin-top: 20px;\n  display: block;\n}\n\n.back {\n  background-image: url(\"/./../assets/img/login.jpeg\");\n  background-position: center center;\n  background-size: cover;\n  height: 800px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"back\">\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\n    <div class=\"container\">\n      <a class=\"navbar-brand\" [routerLink]=\"['/']\">Bruce's App</a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor01\" aria-controls=\"navbarColor01\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n\n      <div class=\"collapse navbar-collapse\" id=\"navbarColor01\">\n        <ul class=\"navbar-nav mr-auto\">\n          <li class=\"nav-item active\">\n\n          </li>\n        </ul>\n        <a [routerLink]=\"['/register']\"><button class=\"btn btn-secondary my-2 my-sm-0\" type=\"submit\">Register</button></a>\n      </div>\n    </div>\n  </nav>\n\n  <div class=\"container\">\n    <form class=\"top\" (submit) = \"login()\">\n      <fieldset>\n        <legend>Sign In</legend>\n        <div class=\"form-group\">\n          <label for=\"exampleInputEmail1\">Email address</label>\n          <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\" name=\"email\" [(ngModel)] = \"user_log.email\" #log_email = \"ngModel\" required>\n        </div>\n        <div *ngIf=\"log_email.invalid && (log_email.dirty || log_email.touched)\">\n          <div class=\"alert alert-dismissible alert-danger\" role=\"alert\" *ngIf=\"log_email.errors.required\">\n            Email is required.\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"exampleInputPassword1\">Password</label>\n          <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\" name=\"password\" [(ngModel)] = \"user_log.password\" #log_password = \"ngModel\" required >\n        </div>\n        <div *ngIf=\"log_password.invalid && (log_password.dirty || log_password.touched)\">\n          <div class=\"alert alert-dismissible alert-danger\" role=\"alert\" *ngIf=\"log_password.errors.required\">\n            Password is required.\n          </div>\n        </div>\n        <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n      </fieldset>\n      <div class=\"alert alert-dismissible alert-danger\" role=\"alert\" *ngIf=\"error_message.login != ''\">\n        {{error_message.login}}\n      </div>\n    </form>\n    <a [routerLink]=\"['/register']\" id=\"atag\">Don't hava an account? Register.</a>\n  </div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_service__ = __webpack_require__("../../../../../src/app/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(_service, _router) {
        this._service = _service;
        this._router = _router;
        this.user_log = {
            email: "",
            password: ""
        };
        this.error_message = {
            login: ""
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this._service.login(this.user_log, function (res) {
            console.log("from login com: ", res);
            if (res.error == undefined) {
                _this._router.navigate(['/dashboard']);
            }
            else {
                _this.error_message.login = res.error;
            }
        });
        this.user_log = {
            email: "",
            password: ""
        };
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__main_service__["a" /* MainService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainService = (function () {
    function MainService(_http) {
        this._http = _http;
        if (localStorage.user != undefined) {
            this.user = JSON.parse(localStorage.user);
        }
    }
    MainService.prototype.login = function (userdata, callback) {
        var _this = this;
        console.log(userdata);
        this._http.post("/login", userdata).subscribe(function (res) {
            callback(res.json());
            _this.user = res.json();
            if (res.json().error == undefined) {
                _this.user = res.json();
                console.log("from service login: ", _this.user);
                localStorage.user = JSON.stringify(res.json());
            }
        }, function (err) {
            console.log("error from login service: ", err);
        });
    };
    MainService.prototype.register = function (userdata, callback) {
        var _this = this;
        this._http.post("/register", userdata).subscribe(function (res) {
            console.log("from service register: ", res.json());
            callback(res.json());
            if (res.json().success == "success") {
                _this.user = res.json().user;
                localStorage.user = JSON.stringify(res.json().user);
            }
        }, function (err) {
            console.log("from service register error: ", err);
        });
    };
    MainService.prototype.retrieveAllUser = function (callback) {
        this._http.get("/users").subscribe(function (res) {
            // console.log("from service retrieveAllUser: ", res);
            callback(res.json());
        });
    };
    //self-update info by user
    MainService.prototype.update = function (user, callback) {
        var _this = this;
        this._http.put("/user/" + this.user._id, user).subscribe(function (res) {
            console.log("from update: ", res.json());
            _this.user = res.json();
            localStorage.user = JSON.stringify(res.json());
            callback(res.json());
        });
    };
    //self-update password by user
    MainService.prototype.updatepassword = function (password, callback) {
        var _this = this;
        console.log("from service update password: ", password);
        this._http.put("/password/" + this.user._id, { password: password }).subscribe(function (res) {
            callback(res.json());
            _this.user = res.json();
            localStorage.user = JSON.stringify(res.json());
        }, function (err) {
            console.log("from service update password err: ", err);
        });
    };
    //self-add description by user
    MainService.prototype.add_description = function (des, callback) {
        var _this = this;
        this._http.put("/des/" + this.user._id, { des: des }).subscribe(function (res) {
            callback(res.json());
            _this.user = res.json();
            localStorage.user = JSON.stringify(res.json());
        }, function (err) {
            console.log("err from service add des: ", err);
        });
    };
    //add a new user by admin
    MainService.prototype.add_new = function (userdata, callback) {
        this._http.post("/register", userdata).subscribe(function (res) {
            console.log("from service register: ", res.json());
            callback(res.json());
        }, function (err) {
            console.log("from service add_new error: ", err);
        });
    };
    //delete a user by admin
    MainService.prototype.delete_user = function (id, callback) {
        this._http.delete("/user/" + id).subscribe(function (res) {
            callback(res.json());
        }, function (err) {
            console.log("from service delete user: ", err);
        });
    };
    //retrieve one user in edit other component
    MainService.prototype.retrieveOneUser = function (id, callback) {
        this._http.get("/user/" + id).subscribe(function (res) {
            // console.log(res.json());
            callback(res.json());
        }, function (err) {
            console.log("from service retrieveOneUser err: ", err);
        });
    };
    //update other user info by admin
    MainService.prototype.update_other = function (id, user, callback) {
        console.log("update other: ", user);
        this._http.put("/user/" + id, user).subscribe(function (res) {
            callback(res.json());
        }, function (err) {
            console.log("err from service update other: ", err);
        });
    };
    //update other user password by admin
    MainService.prototype.update_other_password = function (id, password, callback) {
        console.log("from service update password: ", password);
        this._http.put("/password/" + id, { password: password }).subscribe(function (res) {
            callback(res.json());
        }, function (err) {
            console.log("from service update password err: ", err);
        });
    };
    MainService.prototype.create_message = function (message, target_id, callback) {
        this._http.post("/message/" + target_id + "/" + this.user._id, message).subscribe(function (res) {
            console.log("from service create message: create success: ", res);
            callback(res.json());
        }, function (err) {
            console.log("from service create message: error: ", err);
        });
    };
    MainService.prototype.create_comment = function (msg_id, comment, callback) {
        this._http.post("/comment/" + msg_id + "/" + this.user._id, comment).subscribe(function (res) {
            console.log("from service create comment: create success");
            callback(res.json());
        }, function (err) {
            console.log("from service create comment: error");
        });
    };
    MainService.prototype.delete_message = function (id, callback) {
        this._http.delete("/message/" + id).subscribe(function (res) {
            callback(res.json());
        });
    };
    MainService.prototype.delete_comment = function (id, callback) {
        this._http.delete("/comment/" + id).subscribe(function (res) {
            callback(res.json());
        });
    };
    MainService.prototype.create_event = function (event, callback) {
        this._http.post("/user/" + this.user._id + "/event", event).subscribe(function (res) {
            console.log("from service create event: ", res.json());
            callback(res.json());
        }, function (err) {
            console.log("err from service create event: ", err);
        });
    };
    MainService.prototype.retrieveAllEvent = function (callback) {
        this._http.get("/event").subscribe(function (res) {
            console.log("from service retrieve events: ", res);
            callback(res.json());
        }, function (err) {
            console.log("err from service retrieve events: ", err);
        });
    };
    MainService.prototype.delete_event = function (event_id, callback) {
        this._http.delete("/event/" + event_id).subscribe(function (res) {
            callback(res.json());
        });
    };
    MainService.prototype.join_event = function (event_id, callback) {
        this._http.post("/join/" + event_id + "/" + this.user._id, {}).subscribe(function (res) {
            console.log("join event from service: ", res);
            callback(res.json());
        });
    };
    MainService.prototype.cancle_join = function (event_id, callback) {
        this._http.post("/cancle/" + event_id + "/" + this.user._id, {}).subscribe(function (res) {
            console.log("cancle join from service: ", res);
            callback(res.json());
        });
    };
    MainService.prototype.retrieveOneEvent = function (event_id, callback) {
        this._http.get("/detail/" + event_id).subscribe(function (res) {
            callback(res.json());
        });
    };
    MainService.prototype.retrieveAllOtherUser = function (callback) {
        // console.log(this.user._id);
        this._http.get("/allOtherUser/" + this.user._id).subscribe(function (res) {
            callback(res.json());
        });
    };
    MainService.prototype.poke = function (user_id, callback) {
        this._http.post("/poke/" + this.user._id + "/" + user_id, {}).subscribe(function (res) {
            callback(res.json());
        });
    };
    MainService.prototype.getMyPoke = function (callback) {
        this._http.get("/allpoke/" + this.user._id).subscribe(function (res) {
            callback(res.json());
        });
    };
    MainService.prototype.logout = function () {
        localStorage.removeItem("user");
    };
    MainService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], MainService);
    return MainService;
}());



/***/ }),

/***/ "../../../../../src/app/message/message.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".back {\n  background-color: grey;\n  background-position: center center;\n  background-size: cover;\n  height: 1000px;\n  opacity: 0.9;\n  background-attachment:fixed;\n  background-repeat: repeat-y;\n}\n\n.pad {\n  padding-top: 93px;\n  margin-left: 13%;\n}\n\n.bg-info1 {\n  background-color: #5cdb348f !important;\n}\n\n.text-white1 {\n  color: #14195e !important;\n}\n\n.messagearea {\n  margin-left: 39%;\n  margin-top: -5px;\n  /*height: 900px;\n  overflow: scroll;*/\n  /*position: fixed;*/\n}\n.showmessage {\n  height: 700px;\n  /*overflow: scroll;*/\n}\n\n.form-control1 {\n  display: block;\n  width: 100%;\n  height: 70px;\n  padding: 0.375rem 0.75rem;\n  font-size: 0.9375rem;\n  line-height: 1.5;\n  color: #7b8a8b;\n  background-color: #fff;\n  background-image: none;\n  background-clip: padding-box;\n  border: 2px solid #d73013;\n  border-radius: 0.25rem;\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n}\n\n.btnright {\n  margin-top: 10px;\n  float: right;\n}\n\n.btnright2 {\n  float: right;\n}\n\n\n.card-header1 {\n  padding: 0.75rem 1.25rem;\n  margin-bottom: 0;\n  background-color: rgba(149, 135, 32, 0.5);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.125);\n  font-size: 23px;\n}\n\n.card-header2 {\n  padding: 0.75rem 1.25rem;\n  margin-bottom: 0;\n  background-color: rgb(22, 241, 98);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.125);\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n  font-size: 18px;\n  height: 40px;\n}\n\n.card-body2 {\n  width: 42.3rem;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  padding: 0.5rem;\n  height: 44px;\n  margin-top: 1px;\n  margin-left: -20px;\n  background-color: #fdb76094;\n  border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 8px;\n}\n\n.card2 {\n  margin-top: 58px;\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  min-width: 0;\n  word-wrap: break-word;\n  background-color: #fff;\n  background-clip: border-box;\n  \n  border-radius: 0.25rem;\n}\n\n.right {\n  float: right;\n}\n\n.messageform {\n  width: 42rem;\n  /*position: fixed;*/\n}\n\n.card-header3 {\n  padding: 0.75rem 1.25rem;\n  margin-bottom: 0;\n  background-color: rgb(208, 237, 218);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.125);\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n  font-size: 16px;\n  height: 40px;\n\n}\n\n.card-body3 {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  padding: 0.5rem;\n  height: 44px;\n  border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 8px;\n  background-color: #95f3f3a1;\n}\n\n.card3 {\n  margin-top: 57px;\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  min-width: 0;\n  word-wrap: break-word;\n  background-color: #fff;\n  background-clip: border-box;\n  \n  border-radius: 0.25rem;\n}\n\n.comment {\n  padding-left: 6rem;\n}\n\n.form-control2 {\n  display: block;\n  width: 100%;\n  height: 40px;\n  padding: 0.375rem 0.75rem;\n  font-size: 0.9375rem;\n  line-height: 1.5;\n  color: #7b8a8b;\n  background-color: #fff;\n  background-image: none;\n  background-clip: padding-box;\n  border: 2px solid #3d27248a;\n  border-radius: 0.25rem;\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n}\n\n.commentform {\n  padding-left: 364px;\n  margin-top: 54px;\n}\n\n\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/message/message.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-expand-lg navbar-dark bg-primary fixed-top \">\n  <div class=\"container\">\n    <a class=\"navbar-brand\" [routerLink]=\"['/']\">Bruce's App</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor01\" aria-controls=\"navbarColor01\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarColor01\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" [routerLink]=\"['/dashboard']\">Dashboard <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" [routerLink]=\"['/edit']\">Profile <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" [routerLink]=\"['/pokes']\">Let's Poke <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" [routerLink]=\"['/events']\">Check Events <span class=\"sr-only\">(current)</span></a>\n        </li>\n      </ul>\n      <form class=\"form-inline my-2 my-lg-0\" (submit) = \"logout()\">\n        <button class=\"btn btn-secondary my-2 my-sm-0\" type=\"submit\">Log out</button>\n      </form>\n    </div>\n  </div>\n</nav>\n\n<div>\n  <div class=\"container pad\">\n    <div class=\"card text-white1 bg-info1 mb-3\" style=\"max-width: 20rem;position: fixed;\">\n      <div class=\"card-header1\">{{target_user.first_name}} {{target_user.last_name}}</div>\n      <div class=\"card-body\">\n        <p class=\"card-text\"><strong>Register at</strong>: {{target_user.createdAt | date:'longDate'}}</p>\n        <p class=\"card-text\"><strong>Email</strong>: {{target_user.email}}</p>\n        <p class=\"card-text\"><strong>Description</strong>: {{target_user.description}}</p>\n      </div>\n    </div>\n    \n    \n    <div class=\"messagearea\">\n      <form (submit) = \"create_message()\" class=\"messageform\">\n        <div class=\"form-group\">\n          <h3>Leave a message for <span style=\"color: blue;\">{{target_user.first_name}}</span> </h3>\n          <input type=\"text\" name=\"mes\" [(ngModel)] = \"message.content\" required #mess = \"ngModel\" class=\"form-control1\">  \n          <button class=\"btn btn-warning btnright\" >Post</button>\n        </div>\n      </form>\n\n      <div class=\"card2 text-white1 mb-3\" style=\"max-width: 45rem;\" *ngFor = \"let m of target_user._receive_messages\">\n        <div class=\"card-header2\">\n          <strong>{{m._poster.first_name}} {{m._poster.last_name}}</strong>'s message<span class=\"right\">{{m.createdAt | date: 'medium'}}</span>\n\n          <div class=\"card-body2\">\n            <p class=\"card-text\" style=\"display: inline-block;\">{{m.content}}</p><span class=\"btnright2\"><button *ngIf = \"m._poster._id == current_user._id\" class=\"btn btn-info btn-sm\" (click) = \"delete_message(m._id)\">Delete this message</button></span>\n          </div>\n        </div>\n        <div class=\"comment\">\n          <div class=\"card3 border-info mb-3\" style=\"max-width: 37rem;\" *ngFor = \"let c of m._comments\">\n            <div class=\"card-header3\">{{c._poster.first_name}} {{c._poster.last_name}}'s comment<span class=\"right\">{{c.createdAt | date: 'medium'}}</span></div>\n            <div class=\"card-body3 text-primary\">\n              <p class=\"card-text\">{{c.content}}<span class=\"btnright2\"><button *ngIf = \"c._poster._id == current_user._id\" class=\"btn btn-info btn-sm\" (click) = \"delete_comment(c._id)\">Delete this comment</button></span></p>\n            </div>\n          </div>\n        </div>\n        <div class=\"commentform\">\n          <form (submit) = \"create_comment(m._id)\">\n            <div class=\"form-group\">\n              <h6>Write a comment</h6>\n              <input type=\"text\" class=\"form-control2\" name=\"comment\" [(ngModel)] = \"comment.content\" required #comm = \"ngModel\" >\n              <button class=\"btn btn-info btn-sm btnright\">Comment</button>\n            </div>\n          </form>\n        </div>\n      </div>\n\n\n    </div>\n  </div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/message/message.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_service__ = __webpack_require__("../../../../../src/app/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MessageComponent = (function () {
    function MessageComponent(_service, _router, _route) {
        this._service = _service;
        this._router = _router;
        this._route = _route;
        this.message = {
            content: ""
        };
        this.comment = {
            content: ""
        };
    }
    MessageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.current_user = this._service.user;
        console.log(this.current_user);
        if (localStorage.user == undefined) {
            this._router.navigate(['/']);
        }
        this._route.paramMap.subscribe(function (params) {
            _this._service.retrieveOneUser(params.get("id"), function (res) {
                console.log(res);
                _this.target_user = res;
                _this.target_id = res._id;
                // console.log("this", this.target_user._receive_messages[0]._poster.first_name);
            });
        });
    };
    MessageComponent.prototype.create_message = function () {
        var _this = this;
        this._service.create_message(this.message, this.target_id, function (res) {
            console.log("from message com create success: ", res);
            _this._route.paramMap.subscribe(function (params) {
                _this._service.retrieveOneUser(params.get("id"), function (res) {
                    _this.target_user = res;
                });
            });
        });
        this.message = {
            content: ""
        };
    };
    MessageComponent.prototype.create_comment = function (msg_id) {
        var _this = this;
        this._service.create_comment(msg_id, this.comment, function (res) {
            console.log("from message com create comment success");
        });
        this._route.paramMap.subscribe(function (params) {
            _this._service.retrieveOneUser(params.get("id"), function (res) {
                _this.target_user = res;
            });
        });
        this.comment = {
            content: ""
        };
    };
    MessageComponent.prototype.delete_message = function (msg_id) {
        var _this = this;
        this._service.delete_message(msg_id, function (res) {
            console.log("delete success: ", res);
        });
        this._route.paramMap.subscribe(function (params) {
            _this._service.retrieveOneUser(params.get("id"), function (res) {
                _this.target_user = res;
            });
        });
    };
    MessageComponent.prototype.delete_comment = function (comm_id) {
        var _this = this;
        this._service.delete_comment(comm_id, function (res) {
            console.log("delete comment success: ", res);
        });
        this._route.paramMap.subscribe(function (params) {
            _this._service.retrieveOneUser(params.get("id"), function (res) {
                _this.target_user = res;
            });
        });
    };
    MessageComponent.prototype.logout = function () {
        this._service.logout();
        this._router.navigate(['/']);
    };
    MessageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-message',
            template: __webpack_require__("../../../../../src/app/message/message.component.html"),
            styles: [__webpack_require__("../../../../../src/app/message/message.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__main_service__["a" /* MainService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], MessageComponent);
    return MessageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/newuser/newuser.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".back {\n  background-image: url(\"/./../assets/img/addnew.jpeg\");\n  background-position: center center;\n  background-size: cover;\n  height: 1000px;\n  opacity: 0.9;\n}\n\n.tabletop {\n  display: inline-block;\n  margin-top: 100px;\n\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/newuser/newuser.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"back\">\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\n    <div class=\"container\">\n      <a class=\"navbar-brand\" [routerLink]=\"['/']\" id=\"header\" style=\"color: white;\">Bruce's App</a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor01\" aria-controls=\"navbarColor01\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n\n      <div class=\"collapse navbar-collapse\" id=\"navbarColor01\">\n        <ul class=\"navbar-nav mr-auto\">\n          <li class=\"nav-item active\">\n            <a class=\"nav-link\" [routerLink]=\"['/dashboard']\">Dashboard <span class=\"sr-only\">(current)</span></a>\n          </li>\n          <li class=\"nav-item active\">\n            <a class=\"nav-link\" [routerLink]=\"['/edit']\">Profile <span class=\"sr-only\">(current)</span></a>\n          </li>\n          <li class=\"nav-item active\">\n            <a class=\"nav-link\" [routerLink]=\"['/pokes']\">Let's Poke <span class=\"sr-only\">(current)</span></a>\n          </li>\n          <li class=\"nav-item active\">\n            <a class=\"nav-link\" [routerLink]=\"['/events']\">Check Events <span class=\"sr-only\">(current)</span></a>\n          </li>\n        </ul>\n        <form class=\"form-inline my-2 my-lg-0\" (submit) = \"logout()\">\n          <button class=\"btn btn-secondary my-2 my-sm-0\" type=\"submit\">Log out</button>\n        </form>\n      </div>\n    </div>\n  </nav>\n\n  <div class=\"container\">\n    <form class=\"top\" (submit) = (add_new()) >\n      <fieldset>\n        <legend>Add a new user</legend>\n        <div class=\"form-group\">\n          <label for=\"exampleInputEmail1\">Email address:</label>\n          <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\" [(ngModel)] = \"new_user.email\" required email #reg_email = \"ngModel\" name=\"email\">\n        </div>\n\n        <div *ngIf=\"reg_email.invalid && (reg_email.dirty || reg_email.touched)\">\n          <div class=\"alert alert-dismissible alert-danger\" role=\"alert\" *ngIf=\"reg_email.errors.required\">\n            Email is required.\n          </div>\n          <div class=\"alert alert-dismissible alert-danger\" role=\"alert\" *ngIf=\"reg_email.errors.email\">\n            Please input an valid email.\n          </div>\n        </div>\n\n        <!-- first name -->\n        <div class=\"form-group\">\n          <label for=\"exampleInputEmail1\">First Name:</label>\n          <input type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter first name\" name=\"firstname\" [(ngModel)] = \"new_user.first_name\" #reg_firstname = \"ngModel\" required >\n        </div>\n        <div *ngIf=\"reg_firstname.invalid && (reg_firstname.dirty || reg_firstname.touched)\">\n          <div class=\"alert alert-dismissible alert-danger\" role=\"alert\" *ngIf=\"reg_firstname.errors.required\">\n            First name is required.\n          </div>\n        </div>\n        \n        <!-- last name -->\n        <div class=\"form-group\">\n          <label for=\"exampleInputEmail1\">Last Name: </label>\n          <input type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter last name\" name=\"lastname\" [(ngModel)] = \"new_user.last_name\" #reg_lastname = \"ngModel\" required>\n        </div>\n        <div *ngIf=\"reg_lastname.invalid && (reg_lastname.dirty || reg_lastname.touched)\">\n          <div class=\"alert alert-dismissible alert-danger\" role=\"alert\" *ngIf=\"reg_lastname.errors.required\">\n            Last name is required.\n          </div>\n        </div>\n\n        <!-- location -->\n        <div class=\"form-group\">\n          <label for=\"exampleInputEmail1\">Location: </label>\n          <select [(ngModel)] = \"new_user.location\" #reg_location = \"ngModel\" name=\"locat\" required>\n            <option value=\"AL\">Alabama</option>\n            <option value=\"AK\">Alaska</option>\n            <option value=\"AZ\">Arizona</option>\n            <option value=\"AR\">Arkansas</option>\n            <option value=\"CA\">California</option>\n            <option value=\"CO\">Colorado</option>\n            <option value=\"CT\">Connecticut</option>\n            <option value=\"DE\">Delaware</option>\n            <option value=\"DC\">District Of Columbia</option>\n            <option value=\"FL\">Florida</option>\n            <option value=\"GA\">Georgia</option>\n            <option value=\"HI\">Hawaii</option>\n            <option value=\"ID\">Idaho</option>\n            <option value=\"IL\">Illinois</option>\n            <option value=\"IN\">Indiana</option>\n            <option value=\"IA\">Iowa</option>\n            <option value=\"KS\">Kansas</option>\n            <option value=\"KY\">Kentucky</option>\n            <option value=\"LA\">Louisiana</option>\n            <option value=\"ME\">Maine</option>\n            <option value=\"MD\">Maryland</option>\n            <option value=\"MA\">Massachusetts</option>\n            <option value=\"MI\">Michigan</option>\n            <option value=\"MN\">Minnesota</option>\n            <option value=\"MS\">Mississippi</option>\n            <option value=\"MO\">Missouri</option>\n            <option value=\"MT\">Montana</option>\n            <option value=\"NE\">Nebraska</option>\n            <option value=\"NV\">Nevada</option>\n            <option value=\"NH\">New Hampshire</option>\n            <option value=\"NJ\">New Jersey</option>\n            <option value=\"NM\">New Mexico</option>\n            <option value=\"NY\">New York</option>\n            <option value=\"NC\">North Carolina</option>\n            <option value=\"ND\">North Dakota</option>\n            <option value=\"OH\">Ohio</option>\n            <option value=\"OK\">Oklahoma</option>\n            <option value=\"OR\">Oregon</option>\n            <option value=\"PA\">Pennsylvania</option>\n            <option value=\"RI\">Rhode Island</option>\n            <option value=\"SC\">South Carolina</option>\n            <option value=\"SD\">South Dakota</option>\n            <option value=\"TN\">Tennessee</option>\n            <option value=\"TX\">Texas</option>\n            <option value=\"UT\">Utah</option>\n            <option value=\"VT\">Vermont</option>\n            <option value=\"VA\">Virginia</option>\n            <option value=\"WA\">Washington</option>\n            <option value=\"WV\">West Virginia</option>\n            <option value=\"WI\">Wisconsin</option>\n            <option value=\"WY\">Wyoming</option>\n          </select>\n        </div>\n        <div *ngIf=\"reg_location.invalid && (reg_location.dirty || reg_location.touched)\">\n          <div class=\"alert alert-dismissible alert-danger\" role=\"alert\" *ngIf=\"reg_location.errors.required\">\n            Location is required.\n          </div>\n        </div>\n        \n        <!-- password -->\n        <div class=\"form-group\">\n          <label for=\"exampleInputEmail1\">Password</label>\n          <input type=\"password\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter password\" name=\"password\" [(ngModel)] = \"new_user.password\" #reg_password = \"ngModel\" required minlength=\"4\" >\n        </div>\n        <div *ngIf=\"reg_password.invalid && (reg_password.dirty || reg_password.touched)\">\n          <div class=\"alert alert-dismissible alert-danger\" role=\"alert\" *ngIf=\"reg_password.errors.required\">\n            Password is required.\n          </div>\n          <div class=\"alert alert-dismissible alert-danger\" role=\"alert\" *ngIf=\"reg_password.errors.minlength\">\n            Password need at least four characters.\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"exampleInputEmail1\">Password Confirmation</label>\n          <input type=\"password\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Confirm your password\" name=\"passwordconfirm\" [(ngModel)] = \"password_confirm.con\" #reg_confirm = \"ngModel\" pattern=\"{{new_user.password}}\">\n        </div>\n        <div *ngIf=\"reg_confirm.invalid && (reg_confirm.dirty || reg_confirm.touched)\">\n          <div class=\"alert alert-dismissible alert-danger\" role=\"alert\" *ngIf=\"reg_confirm.errors.pattern\">\n            Not mattch the password.\n          </div>\n        </div>\n        <button type=\"submit\" class=\"btn btn-primary\">Create</button>\n        <div class=\"alert alert-dismissible alert-danger\" role=\"alert\" *ngIf=\"error_message.email != ''\">\n          {{error_message.email}}\n        </div>\n      </fieldset>\n    </form>\n  </div>\n</div>\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/newuser/newuser.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewuserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_service__ = __webpack_require__("../../../../../src/app/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewuserComponent = (function () {
    function NewuserComponent(_service, _router) {
        this._service = _service;
        this._router = _router;
        this.new_user = {
            first_name: "",
            last_name: "",
            email: "",
            location: "",
            password: ""
        };
        this.error_message = {
            email: "",
            login: ""
        };
        this.password_confirm = {
            con: ""
        };
    }
    NewuserComponent.prototype.ngOnInit = function () {
        this.current_user = this._service.user;
        if (localStorage.user == undefined) {
            this._router.navigate(['/']);
        }
        if (this.current_user.user_level != 9) {
            this._router.navigate(['/']);
            localStorage.removeItem("user");
        }
    };
    NewuserComponent.prototype.add_new = function () {
        var _this = this;
        console.log("from com add new user: ", this.new_user);
        this._service.add_new(this.new_user, function (res) {
            if (res.success === "success") {
                _this._router.navigate(['/dashboard']);
            }
            else {
                _this.error_message.email = "This email has been registered.";
            }
            _this.new_user = {
                first_name: "",
                last_name: "",
                email: "",
                location: "",
                password: ""
            };
            _this.password_confirm = {
                con: ""
            };
        });
    };
    NewuserComponent.prototype.logout = function () {
        this._service.logout();
        this._router.navigate(['/']);
    };
    NewuserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-newuser',
            template: __webpack_require__("../../../../../src/app/newuser/newuser.component.html"),
            styles: [__webpack_require__("../../../../../src/app/newuser/newuser.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__main_service__["a" /* MainService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], NewuserComponent);
    return NewuserComponent;
}());



/***/ }),

/***/ "../../../../../src/app/poke/poke.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".back {\n  background-image: url(\"/./../assets/img/poke.jpeg\");\n  background-position: center center;\n  background-size: cover;\n  background-attachment:fixed;\n  height: 1000px;\n  opacity: 0.9;\n  padding-top: 100px;\n}\n\n.list-group1 {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding-left: 0;\n  margin-bottom: 0;\n  /*position: fixed;*/\n  width: 30rem;\n}\n\n.trow {\n  color: white;\n  font-size: 23px;\n}\n\n.width {\n  width: 30rem;\n}\n\n.badge-primary1 {\n  color: #fff;\n  background-color: #ae9e29;\n}\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/poke/poke.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-expand-lg navbar-dark bg-primary fixed-top\">\n  <div class=\"container\">\n    <a class=\"navbar-brand\" [routerLink]=\"['/']\" style=\"color: white;\">Bruce's App</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor01\" aria-controls=\"navbarColor01\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarColor01\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" [routerLink]=\"['/dashboard']\">Dashboard\n          <span class=\"sr-only\">(current)</span>\n        </a>\n      </li>\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" [routerLink]=\"['/edit']\">Profile\n          <span class=\"sr-only\">(current)</span>\n        </a>\n      </li>\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" [routerLink]=\"['/events']\">Check Events\n          <span class=\"sr-only\">(current)</span>\n        </a>\n      </li>\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\" (submit)=\"logout()\">\n      <button class=\"btn btn-secondary my-2 my-sm-0\" type=\"submit\">Log out</button>\n    </form>\n  </div>\n</div>\n</nav>\n\n<div class=\"back\">\n  <div class=\"container\">\n    <p class=\"list-group-item list-group-item-action active width\">\n      Welcome, {{user.first_name}} {{user.last_name}}!--- <strong><span class=\"badge badge-primary1 badge-pill\">{{my_poke.length}}</span> people poked you!</strong>\n    </p>\n    <ul class=\"list-group1\" *ngFor = \"let m of my_poke\">\n      <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n        Number of {{m._from_user.first_name}} {{m._from_user.last_name}} poked you: \n        <span class=\"badge badge-primary badge-pill\">{{m.num_of_pokes}}</span>\n      </li>\n      \n    </ul>\n    <hr>\n\n    <div class=\"show\">\n      <h3 style=\"color: white;\">People you may want to poke:</h3>\n      <table class=\"table table-hover\">\n        <thead>\n          <tr class=\"trow\">\n            <th scope=\"col\">Name</th>\n            <th scope=\"col\">Email Address</th>\n            <th scope=\"col\">Poke History</th>\n            <th scope=\"col\">Action</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr class=\"table-warning\" *ngFor = \"let a of allusers\">\n            <th scope=\"row\">{{a.first_name}} {{a.last_name}}</th>\n            <td>{{a.email}}</td>\n            <td>{{a.poked_total}}</td>\n            <td><button class=\"btn btn-danger\" (click) = \"poke(a._id)\">Poke!</button></td>\n          </tr>\n\n        </tbody>\n      </table> \n    </div>\n  </div>\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/poke/poke.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PokeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_service__ = __webpack_require__("../../../../../src/app/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PokeComponent = (function () {
    function PokeComponent(_service, _router, _route) {
        this._service = _service;
        this._router = _router;
        this._route = _route;
    }
    PokeComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.user == undefined) {
            this._router.navigate(['/']);
        }
        this.user = this._service.user;
        this._service.retrieveAllOtherUser(function (res) {
            console.log("retrieve all other users from poke com: ", res);
            _this.allusers = res;
        });
        this._service.getMyPoke(function (res) {
            console.log("get my poke from poke com: ", res);
            _this.my_poke = res;
        });
    };
    PokeComponent.prototype.poke = function (user_id) {
        var _this = this;
        this._service.poke(user_id, function (res) {
            console.log(res);
            _this._service.retrieveAllOtherUser(function (res) {
                console.log("retrieve all other users from poke com: ", res);
                _this.allusers = res;
            });
        });
    };
    PokeComponent.prototype.logout = function () {
        this._service.logout();
        this._router.navigate(['/']);
    };
    PokeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-poke',
            template: __webpack_require__("../../../../../src/app/poke/poke.component.html"),
            styles: [__webpack_require__("../../../../../src/app/poke/poke.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__main_service__["a" /* MainService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], PokeComponent);
    return PokeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#header {\n  color: white;\n}\n\n.top {\n  margin-top: 90px;\n}\n\n#atag {\n  color: blue;\n  margin-top: 20px;\n  display: block;\n}\n\n.back {\n  background-image: url(\"/./../assets/img/register.jpeg\");\n  background-position: center center;\n  background-size: cover;\n  background-attachment:fixed;\n  height: 1000px;\n  opacity: 0.9;\n  padding-top: 30px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary fixed-top\">\n  <div class=\"container\">\n    <a class=\"navbar-brand\" [routerLink]=\"['/']\" id=\"header\" >Bruce's App</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor01\" aria-controls=\"navbarColor01\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarColor01\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item active\">\n\n        </li>\n      </ul>\n      <a [routerLink]=\"['/signin']\"><button class=\"btn btn-secondary my-2 my-sm-0\" type=\"submit\">Sign in</button></a>\n    </div>\n  </div>\n</nav>\n\n<div class=\"back\">\n  <div class=\"container\">\n    <form class=\"top\" (submit) = (register()) >\n      <fieldset>\n        <legend>Register</legend>\n        <div class=\"form-group\">\n          <label for=\"exampleInputEmail1\">Email address:</label>\n          <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\" [(ngModel)] = \"user_reg.email\" required email #reg_email = \"ngModel\" name=\"email\">\n        </div>\n\n        <div *ngIf=\"reg_email.invalid && (reg_email.dirty || reg_email.touched)\">\n          <div class=\"alert alert-dismissible alert-danger\" role=\"alert\" *ngIf=\"reg_email.errors.required\">\n            Email is required.\n          </div>\n          <div class=\"alert alert-dismissible alert-danger\" role=\"alert\" *ngIf=\"reg_email.errors.email\">\n            Please input an valid email.\n          </div>\n        </div>\n\n        <!-- first name -->\n        <div class=\"form-group\">\n          <label for=\"exampleInputEmail1\">First Name:</label>\n          <input type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter first name\" name=\"firstname\" [(ngModel)] = \"user_reg.first_name\" #reg_firstname = \"ngModel\" required >\n        </div>\n        <div *ngIf=\"reg_firstname.invalid && (reg_firstname.dirty || reg_firstname.touched)\">\n          <div class=\"alert alert-dismissible alert-danger\" role=\"alert\" *ngIf=\"reg_firstname.errors.required\">\n            First name is required.\n          </div>\n        </div>\n        \n        <!-- last name -->\n        <div class=\"form-group\">\n          <label for=\"exampleInputEmail1\">Last Name: </label>\n          <input type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter last name\" name=\"lastname\" [(ngModel)] = \"user_reg.last_name\" #reg_lastname = \"ngModel\" required>\n        </div>\n        <div *ngIf=\"reg_lastname.invalid && (reg_lastname.dirty || reg_lastname.touched)\">\n          <div class=\"alert alert-dismissible alert-danger\" role=\"alert\" *ngIf=\"reg_lastname.errors.required\">\n            Last name is required.\n          </div>\n        </div>\n\n        <!-- location -->\n        <div class=\"form-group\">\n          <label for=\"exampleInputEmail1\">Location: </label>\n          <select [(ngModel)] = \"user_reg.location\" #reg_location = \"ngModel\" name=\"locat\" required>\n            <option value=\"AL\">Alabama</option>\n            <option value=\"AK\">Alaska</option>\n            <option value=\"AZ\">Arizona</option>\n            <option value=\"AR\">Arkansas</option>\n            <option value=\"CA\">California</option>\n            <option value=\"CO\">Colorado</option>\n            <option value=\"CT\">Connecticut</option>\n            <option value=\"DE\">Delaware</option>\n            <option value=\"DC\">District Of Columbia</option>\n            <option value=\"FL\">Florida</option>\n            <option value=\"GA\">Georgia</option>\n            <option value=\"HI\">Hawaii</option>\n            <option value=\"ID\">Idaho</option>\n            <option value=\"IL\">Illinois</option>\n            <option value=\"IN\">Indiana</option>\n            <option value=\"IA\">Iowa</option>\n            <option value=\"KS\">Kansas</option>\n            <option value=\"KY\">Kentucky</option>\n            <option value=\"LA\">Louisiana</option>\n            <option value=\"ME\">Maine</option>\n            <option value=\"MD\">Maryland</option>\n            <option value=\"MA\">Massachusetts</option>\n            <option value=\"MI\">Michigan</option>\n            <option value=\"MN\">Minnesota</option>\n            <option value=\"MS\">Mississippi</option>\n            <option value=\"MO\">Missouri</option>\n            <option value=\"MT\">Montana</option>\n            <option value=\"NE\">Nebraska</option>\n            <option value=\"NV\">Nevada</option>\n            <option value=\"NH\">New Hampshire</option>\n            <option value=\"NJ\">New Jersey</option>\n            <option value=\"NM\">New Mexico</option>\n            <option value=\"NY\">New York</option>\n            <option value=\"NC\">North Carolina</option>\n            <option value=\"ND\">North Dakota</option>\n            <option value=\"OH\">Ohio</option>\n            <option value=\"OK\">Oklahoma</option>\n            <option value=\"OR\">Oregon</option>\n            <option value=\"PA\">Pennsylvania</option>\n            <option value=\"RI\">Rhode Island</option>\n            <option value=\"SC\">South Carolina</option>\n            <option value=\"SD\">South Dakota</option>\n            <option value=\"TN\">Tennessee</option>\n            <option value=\"TX\">Texas</option>\n            <option value=\"UT\">Utah</option>\n            <option value=\"VT\">Vermont</option>\n            <option value=\"VA\">Virginia</option>\n            <option value=\"WA\">Washington</option>\n            <option value=\"WV\">West Virginia</option>\n            <option value=\"WI\">Wisconsin</option>\n            <option value=\"WY\">Wyoming</option>\n          </select>\n        </div>\n        <div *ngIf=\"reg_location.invalid && (reg_location.dirty || reg_location.touched)\">\n          <div class=\"alert alert-dismissible alert-danger\" role=\"alert\" *ngIf=\"reg_location.errors.required\">\n            Location is required.\n          </div>\n        </div>\n        \n        <!-- password -->\n        <div class=\"form-group\">\n          <label for=\"exampleInputEmail1\">Password</label>\n          <input type=\"password\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter password\" name=\"password\" [(ngModel)] = \"user_reg.password\" #reg_password = \"ngModel\" required minlength=\"4\" >\n        </div>\n        <div *ngIf=\"reg_password.invalid && (reg_password.dirty || reg_password.touched)\">\n          <div class=\"alert alert-dismissible alert-danger\" role=\"alert\" *ngIf=\"reg_password.errors.required\">\n            Password is required.\n          </div>\n          <div class=\"alert alert-dismissible alert-danger\" role=\"alert\" *ngIf=\"reg_password.errors.minlength\">\n            Password need at least four characters.\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"exampleInputEmail1\">Password Confirmation</label>\n          <input type=\"password\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Confirm your password\" name=\"passwordconfirm\" [(ngModel)] = \"password_confirm.con\" #reg_confirm = \"ngModel\" pattern=\"{{user_reg.password}}\">\n        </div>\n        <div *ngIf=\"reg_confirm.invalid && (reg_confirm.dirty || reg_confirm.touched)\">\n          <div class=\"alert alert-dismissible alert-danger\" role=\"alert\" *ngIf=\"reg_confirm.errors.pattern\">\n            Not mattch the password.\n          </div>\n        </div>\n        <button type=\"submit\" class=\"btn btn-primary\">Register</button>\n        <div class=\"alert alert-dismissible alert-danger\" role=\"alert\" *ngIf=\"error_message.email != ''\">\n          {{error_message.email}}\n        </div>\n      </fieldset>\n    </form>\n    <a [routerLink]=\"['/signin']\" id=\"atag\">Already have an account? Login.</a>\n  </div>\n</div>\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_service__ = __webpack_require__("../../../../../src/app/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = (function () {
    function RegisterComponent(_service, _router) {
        this._service = _service;
        this._router = _router;
        this.user_reg = {
            first_name: "",
            last_name: "",
            email: "",
            location: "",
            password: ""
        };
        this.password_confirm = {
            con: ""
        };
        this.error_message = {
            email: "",
            login: ""
        };
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        console.log("from com register: ", this.user_reg);
        this._service.register(this.user_reg, function (res) {
            if (res.success === "success") {
                _this._router.navigate(['/dashboard']);
            }
            else {
                _this.error_message.email = "This email has been registered.";
            }
            _this.user_reg = {
                first_name: "",
                last_name: "",
                email: "",
                location: "",
                password: ""
            };
            _this.password_confirm = {
                con: ""
            };
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__main_service__["a" /* MainService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/welcome/welcome.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bottomcard {\n  display: inline-block;\n  max-width: 23rem;\n  height: 14rem;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/welcome/welcome.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!-- #############navbar################ -->\n<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\n  <div class=\"container\">\n    <a class=\"navbar-brand\" [routerLink]=\"['/']\">Bruce's App</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor01\" aria-controls=\"navbarColor01\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarColor01\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" [routerLink]=\"['/dashboard']\">Home <span class=\"sr-only\">(current)</span></a>\n        </li>\n      </ul>\n      <!-- <form class=\"form-inline my-2 my-lg-0\"> -->\n        <a [routerLink]=\"['signin']\"><button class=\"btn btn-secondary my-2 my-sm-0\" type=\"submit\">Sign In</button></a>\n        <!--   </form> -->\n      </div>\n    </div>\n  </nav>\n\n  <!-- ##########jumbotron################ -->\n  <div class=\"container\">\n    <div class=\"jumbotron\">\n      <h1 class=\"display-3\">Welcome to the Bruce's User Dashboard!</h1>\n      <p class=\"lead\">This User Dashboard app is built by MEAN stack which inclue MongoDB, Express, Angular, and Node.js. And also with the libraries include jQuery and Bootstrap.</p>\n      <hr class=\"my-4\">\n      <p class=\"lead\">\n        <a class=\"btn btn-primary btn-lg\" [routerLink]=\"['signin']\" role=\"button\">Let's Start!</a>\n      </p>\n    </div>\n\n    <!-- ###########card################### -->\n\n    <div class=\"card text-white bg-info mb-3 bottomcard\">\n      <div class=\"card-header\">Manage User</div>\n      <div class=\"card-body\">\n        <p class=\"card-text\">Using this app, you can add, remove, and edit users from the dashboard.</p>\n      </div>\n    </div>\n\n    <div class=\"card text-white bg-info mb-3 bottomcard\">\n      <div class=\"card-header\">Leave Message</div>\n      <div class=\"card-body\">\n        <p class=\"card-text\">Users will be able to leave a message to another user using this app.</p>\n      </div>\n    </div>\n\n    <div class=\"card text-white bg-info mb-3 bottomcard\">\n      <div class=\"card-header\">Edit user info</div>\n      <div class=\"card-body\">\n        <p class=\"card-text\">Admins will be able to edit another user's information.</p>\n      </div>\n    </div>\n  </div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/welcome/welcome.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WelcomeComponent = (function () {
    function WelcomeComponent() {
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    WelcomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-welcome',
            template: __webpack_require__("../../../../../src/app/welcome/welcome.component.html"),
            styles: [__webpack_require__("../../../../../src/app/welcome/welcome.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map