(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _movies_movies_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./movies/movies.component */ "./src/app/movies/movies.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./movie-detail/movie-detail.component */ "./src/app/movie-detail/movie-detail.component.ts");
/* harmony import */ var _task_task_list_task_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./task/task-list/task-list.component */ "./src/app/task/task-list/task-list.component.ts");







var routes = [
    { path: 'movies', component: _movies_movies_component__WEBPACK_IMPORTED_MODULE_3__["MoviesComponent"] },
    { path: 'tasks', component: _task_task_list_task_list_component__WEBPACK_IMPORTED_MODULE_6__["TaskListComponent"] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"] },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'detail/:id', component: _movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_5__["MovieDetailComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\nh1 {\n  font-size: 2.0em;\n  color: #999;\n  margin-bottom: 0;\n}\nh2 {\n  font-size: 1em;\n  margin-top: 0;\n  padding-top: 0;\n}\nnav a {\n  padding: 5px 10px;\n  text-decoration: none;\n  margin-top: 10px;\n  display: inline-block;\n  background-color: #eee;\n  border-radius: 4px;\n}\nnav a:visited, a:link {\n  color: #607D8B;\n}\nnav a:hover {\n  color: #039be5;\n  background-color: #CFD8DC;\n}\nnav a.active {\n  color: #039be5;\n}\nappdecoration {\n   background-color: #CFD8DC;\n   margin-top:300px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsZUFBZTtDQUNoQjtBQUNEO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7Q0FDcEI7QUFDRDtFQUNFLGVBQWU7Q0FDaEI7QUFDRDtFQUNFLGVBQWU7RUFDZiwwQkFBMEI7Q0FDM0I7QUFDRDtFQUNFLGVBQWU7Q0FDaEI7QUFFRDtHQUNHLDBCQUEwQjtHQUMxQixpQkFBaUI7Q0FDbkIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaDEge1xuICBmb250LXNpemU6IDIuMGVtO1xuICBjb2xvcjogIzk5OTtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbmgyIHtcbiAgZm9udC1zaXplOiAxZW07XG4gIG1hcmdpbi10b3A6IDA7XG4gIHBhZGRpbmctdG9wOiAwO1xufVxubmF2IGEge1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbm5hdiBhOnZpc2l0ZWQsIGE6bGluayB7XG4gIGNvbG9yOiAjNjA3RDhCO1xufVxubmF2IGE6aG92ZXIge1xuICBjb2xvcjogIzAzOWJlNTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0NGRDhEQztcbn1cbm5hdiBhLmFjdGl2ZSB7XG4gIGNvbG9yOiAjMDM5YmU1O1xufVxuXG5hcHBkZWNvcmF0aW9uIHtcbiAgIGJhY2tncm91bmQtY29sb3I6ICNDRkQ4REM7XG4gICBtYXJnaW4tdG9wOjMwMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n \n  <div class=\"appdecoration\">\n\n    <mat-icon svgIcon=\"home\"></mat-icon>\n    <button mat-button [matMenuTriggerFor]=\"menu\">File</button>\n    <mat-menu #menu=\"matMenu\">\n        <button mat-menu-item>New</button>\n        <button mat-menu-item (click)=\"openMovieList()\">Open</button>\n        <button mat-menu-item>Recent</button>\n        <button mat-menu-item>Upload</button>\n        <button mat-menu-item>Link to Nextcloud</button>\n        <button mat-menu-item>Export</button>\n        <button mat-menu-item>Close</button>\n      </mat-menu>\n    <button mat-button [matMenuTriggerFor]=\"edit\">Edit</button>\n    <mat-menu #edit=\"matMenu\">\n        <button mat-menu-item>Copy</button>\n        <button mat-menu-item>Cut</button>\n        <button mat-menu-item>Paste</button>\n         <button mat-menu-item>Search</button>\n    </mat-menu>\n    <button mat-button [matMenuTriggerFor]=\"view\">View</button>\n    <mat-menu #view=\"matMenu\">\n        <button mat-menu-item>Outline</button>\n        <button mat-menu-item>OM Images</button>\n        <button mat-menu-item>Audio track</button>\n         <button mat-menu-item>Export</button>\n    </mat-menu>\n    <button mat-button [matMenuTriggerFor]=\"format\">Format</button>\n    <mat-menu #format=\"matMenu\">\n        <button mat-menu-item>Headings</button>\n        <button mat-menu-item>Paragraph</button>\n        <button mat-menu-item>Text</button>\n         <button mat-menu-item>OM Images</button>\n    </mat-menu>\n    <button mat-button [matMenuTriggerFor]=\"format\">Analyze</button>\n    <mat-menu #analyze=\"matMenu\">\n        <button mat-menu-item>Cut Sructure</button>\n        <button mat-menu-item>Audio Structure</button>\n        <button mat-menu-item>Novements</button>\n         <button mat-menu-item>Persons</button>\n    </mat-menu>\n    <button mat-button [matMenuTriggerFor]=\"window\">Window</button>\n    <mat-menu #window=\"matMenu\">\n        <button mat-menu-item>Score</button>\n        <button mat-menu-item (click)=\"showTasks()\">Background Tasks</button>\n        <button mat-menu-item>Help</button>\n    </mat-menu>\n\n    <router-outlet></router-outlet>\n  </div>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(appService, router) {
        this.appService = appService;
        this.router = router;
        this.title = 'Video Score';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.initStore().subscribe(function (data) { return _this.msg = data['msg']; });
    };
    AppComponent.prototype.openMovieList = function () {
        this.router.navigateByUrl('/movies');
    };
    AppComponent.prototype.showTasks = function () {
        this.router.navigateByUrl('/tasks');
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _movies_movies_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./movies/movies.component */ "./src/app/movies/movies.component.ts");
/* harmony import */ var _movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./movie-detail/movie-detail.component */ "./src/app/movie-detail/movie-detail.component.ts");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/messages/messages.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _stripes_stripes_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./stripes/stripes.component */ "./src/app/stripes/stripes.component.ts");
/* harmony import */ var _stripes_overlay_stripes_overlay_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./stripes-overlay/stripes-overlay.component */ "./src/app/stripes-overlay/stripes-overlay.component.ts");
/* harmony import */ var _omsubimage_omsubimage_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./omsubimage/omsubimage.component */ "./src/app/omsubimage/omsubimage.component.ts");
/* harmony import */ var _omimage_omimage_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./omimage/omimage.component */ "./src/app/omimage/omimage.component.ts");
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngrx/router-store */ "./node_modules/@ngrx/router-store/fesm5/router-store.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./reducers */ "./src/app/reducers/index.ts");
/* harmony import */ var _entities_movies_api_effects__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./entities/movies-api.effects */ "./src/app/entities/movies-api.effects.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _task_task_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./task/task.module */ "./src/app/task/task.module.ts");


















// STORE





// MATERIAL





// TASKS

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _movies_movies_component__WEBPACK_IMPORTED_MODULE_7__["MoviesComponent"],
                _movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_8__["MovieDetailComponent"],
                _messages_messages_component__WEBPACK_IMPORTED_MODULE_9__["MessagesComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["DashboardComponent"],
                _stripes_stripes_component__WEBPACK_IMPORTED_MODULE_13__["StripesComponent"],
                _stripes_overlay_stripes_overlay_component__WEBPACK_IMPORTED_MODULE_14__["StripesOverlayComponent"],
                _omsubimage_omsubimage_component__WEBPACK_IMPORTED_MODULE_15__["OMSubimageComponent"],
                _omimage_omimage_component__WEBPACK_IMPORTED_MODULE_16__["OMImageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_23__["MatCheckboxModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_24__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_23__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_23__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
                _task_task_module__WEBPACK_IMPORTED_MODULE_25__["TaskModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_19__["StoreModule"].forRoot(_reducers__WEBPACK_IMPORTED_MODULE_21__["reducers"]),
                _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_18__["StoreDevtoolsModule"].instrument({ maxAge: 25 }),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_20__["EffectsModule"].forRoot([]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_20__["EffectsModule"].forFeature([_entities_movies_api_effects__WEBPACK_IMPORTED_MODULE_22__["MovieApiEffects"]]),
                _ngrx_router_store__WEBPACK_IMPORTED_MODULE_17__["StoreRouterConnectingModule"].forRoot()
            ],
            exports: [_angular_material__WEBPACK_IMPORTED_MODULE_23__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_23__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"]],
            providers: [_app_service__WEBPACK_IMPORTED_MODULE_6__["AppService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _entities_movies_api_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./entities/movies-api.actions */ "./src/app/entities/movies-api.actions.ts");
/* harmony import */ var _task_task_api_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./task/task-api.actions */ "./src/app/task/task-api.actions.ts");
/* harmony import */ var _syncstore_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./syncstore.service */ "./src/app/syncstore.service.ts");







var AppService = /** @class */ (function () {
    function AppService(http, syncstore, store) {
        this.http = http;
        this.syncstore = syncstore;
        this.store = store;
    }
    AppService.prototype.initStore = function () {
        console.log('in the APP SERVICE class');
        this.store.dispatch(new _entities_movies_api_actions__WEBPACK_IMPORTED_MODULE_4__["LoadMovies"]());
        this.store.dispatch(new _task_task_api_actions__WEBPACK_IMPORTED_MODULE_5__["LoadTasks"]());
        //  this.store.subscribe (v => console.log(v));
        return this.http.get('/api/ping');
    };
    AppService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _syncstore_service__WEBPACK_IMPORTED_MODULE_6__["SyncstoreService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* DashboardComponent's private CSS styles */\n[class*='col-'] {\n  float: left;\n  padding-right: 20px;\n  padding-bottom: 20px;\n}\n[class*='col-']:last-of-type {\n  padding-right: 0;\n}\n.mmbox {\n  display: flex;\n  \n}\na {\n  text-decoration: none;\n}\n*, *:after, *:before {\n  box-sizing: border-box;\n}\nh3 {\n  text-align: center;\n  margin-bottom: 0;\n}\nh4 {\n  position: relative;\n}\n.grid {\n\n  margin: 0;\n}\n.col-1-4 {\n  width: 50%;\n}\n.module {\n  padding: 20px;\n  text-align: center;\n  color: #eee;\n  max-height: 120px;\n  min-width: 120px;\n  background-color: #607d8b;\n  border-radius: 2px;\n  white-space: nowrap;\n}\n.module:hover {\n  background-color: #eee;\n  cursor: pointer;\n  color: #607d8b;\n}\n.grid-pad {\n\n  padding: 10px 0;\n}\n.grid-pad > [class*='col-']:last-of-type {\n  padding-right: 20px;\n}\n@media (max-width: 600px) {\n  .module {\n    font-size: 10px;\n    max-height: 75px; }\n}\n@media (max-width: 1024px) {\n  .grid {\n    margin: 0;\n  }\n  .module {\n    min-width: 60px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZDQUE2QztBQUM3QztFQUNFLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIscUJBQXFCO0NBQ3RCO0FBQ0Q7RUFDRSxpQkFBaUI7Q0FDbEI7QUFFRDtFQUNFLGNBQWM7O0NBRWY7QUFDRDtFQUNFLHNCQUFzQjtDQUN2QjtBQUNEO0VBR0UsdUJBQXVCO0NBQ3hCO0FBQ0Q7RUFDRSxtQkFBbUI7RUFDbkIsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxtQkFBbUI7Q0FDcEI7QUFDRDs7RUFFRSxVQUFVO0NBQ1g7QUFDRDtFQUNFLFdBQVc7Q0FDWjtBQUNEO0VBQ0UsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQiwwQkFBMEI7RUFDMUIsbUJBQW1CO0VBQ25CLG9CQUFvQjtDQUNyQjtBQUNEO0VBQ0UsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixlQUFlO0NBQ2hCO0FBQ0Q7O0VBRUUsZ0JBQWdCO0NBQ2pCO0FBQ0Q7RUFDRSxvQkFBb0I7Q0FDckI7QUFDRDtFQUNFO0lBQ0UsZ0JBQWdCO0lBQ2hCLGlCQUFpQixFQUFFO0NBQ3RCO0FBQ0Q7RUFDRTtJQUNFLFVBQVU7R0FDWDtFQUNEO0lBQ0UsZ0JBQWdCO0dBQ2pCO0NBQ0YiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBEYXNoYm9hcmRDb21wb25lbnQncyBwcml2YXRlIENTUyBzdHlsZXMgKi9cbltjbGFzcyo9J2NvbC0nXSB7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cbltjbGFzcyo9J2NvbC0nXTpsYXN0LW9mLXR5cGUge1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xufVxuXG4ubW1ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBcbn1cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4qLCAqOmFmdGVyLCAqOmJlZm9yZSB7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuaDMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5oNCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5ncmlkIHtcblxuICBtYXJnaW46IDA7XG59XG4uY29sLTEtNCB7XG4gIHdpZHRoOiA1MCU7XG59XG4ubW9kdWxlIHtcbiAgcGFkZGluZzogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2VlZTtcbiAgbWF4LWhlaWdodDogMTIwcHg7XG4gIG1pbi13aWR0aDogMTIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2MDdkOGI7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi5tb2R1bGU6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjNjA3ZDhiO1xufVxuLmdyaWQtcGFkIHtcblxuICBwYWRkaW5nOiAxMHB4IDA7XG59XG4uZ3JpZC1wYWQgPiBbY2xhc3MqPSdjb2wtJ106bGFzdC1vZi10eXBlIHtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAubW9kdWxlIHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgbWF4LWhlaWdodDogNzVweDsgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAuZ3JpZCB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG4gIC5tb2R1bGUge1xuICAgIG1pbi13aWR0aDogNjBweDtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Movies</h3>\n\n<div class=\"mmbox\">\n<div class=\"grid grid-pad\">\n  <a *ngFor=\"let movie of movies$ | async\" class=\"col-1-4\"\n    routerLink=\"/detail/{{movie.id}}\">\n    <div class=\"module movie\">\n      <h4>{{movie.name}}</h4>\n    </div>\n\n  </a>\n</div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _movie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../movie.service */ "./src/app/movie.service.ts");
/* harmony import */ var _entities_movie_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../entities/movie.selectors */ "./src/app/entities/movie.selectors.ts");





var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(movieService, store) {
        this.movieService = movieService;
        this.store = store;
        this.movies$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_entities_movie_selectors__WEBPACK_IMPORTED_MODULE_4__["selectAllMovies"]));
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_movie_service__WEBPACK_IMPORTED_MODULE_3__["MovieService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/entities/movie.actions.ts":
/*!*******************************************!*\
  !*** ./src/app/entities/movie.actions.ts ***!
  \*******************************************/
/*! exports provided: MovieActionTypes, LoadMovies, AddMovie, UpsertMovie, AddMovies, UpsertMovies, UpdateMovie, UpdateMovies, DeleteMovie, DeleteMovies, ClearMovies */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieActionTypes", function() { return MovieActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadMovies", function() { return LoadMovies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMovie", function() { return AddMovie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpsertMovie", function() { return UpsertMovie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMovies", function() { return AddMovies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpsertMovies", function() { return UpsertMovies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateMovie", function() { return UpdateMovie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateMovies", function() { return UpdateMovies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteMovie", function() { return DeleteMovie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteMovies", function() { return DeleteMovies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClearMovies", function() { return ClearMovies; });
var MovieActionTypes;
(function (MovieActionTypes) {
    MovieActionTypes["LoadMovies"] = "[Movie] Load Movies";
    MovieActionTypes["AddMovie"] = "[Movie] Add Movie";
    MovieActionTypes["UpsertMovie"] = "[Movie] Upsert Movie";
    MovieActionTypes["AddMovies"] = "[Movie] Add Movies";
    MovieActionTypes["UpsertMovies"] = "[Movie] Upsert Movies";
    MovieActionTypes["UpdateMovie"] = "[Movie] Update Movie";
    MovieActionTypes["UpdateMovies"] = "[Movie] Update Movies";
    MovieActionTypes["DeleteMovie"] = "[Movie] Delete Movie";
    MovieActionTypes["DeleteMovies"] = "[Movie] Delete Movies";
    MovieActionTypes["ClearMovies"] = "[Movie] Clear Movies";
})(MovieActionTypes || (MovieActionTypes = {}));
var LoadMovies = /** @class */ (function () {
    function LoadMovies(payload) {
        this.payload = payload;
        this.type = MovieActionTypes.LoadMovies;
    }
    return LoadMovies;
}());

var AddMovie = /** @class */ (function () {
    function AddMovie(payload) {
        this.payload = payload;
        this.type = MovieActionTypes.AddMovie;
    }
    return AddMovie;
}());

var UpsertMovie = /** @class */ (function () {
    function UpsertMovie(payload) {
        this.payload = payload;
        this.type = MovieActionTypes.UpsertMovie;
    }
    return UpsertMovie;
}());

var AddMovies = /** @class */ (function () {
    function AddMovies(payload) {
        this.payload = payload;
        this.type = MovieActionTypes.AddMovies;
    }
    return AddMovies;
}());

var UpsertMovies = /** @class */ (function () {
    function UpsertMovies(payload) {
        this.payload = payload;
        this.type = MovieActionTypes.UpsertMovies;
    }
    return UpsertMovies;
}());

var UpdateMovie = /** @class */ (function () {
    function UpdateMovie(payload) {
        this.payload = payload;
        this.type = MovieActionTypes.UpdateMovie;
    }
    return UpdateMovie;
}());

var UpdateMovies = /** @class */ (function () {
    function UpdateMovies(payload) {
        this.payload = payload;
        this.type = MovieActionTypes.UpdateMovies;
    }
    return UpdateMovies;
}());

var DeleteMovie = /** @class */ (function () {
    function DeleteMovie(payload) {
        this.payload = payload;
        this.type = MovieActionTypes.DeleteMovie;
    }
    return DeleteMovie;
}());

var DeleteMovies = /** @class */ (function () {
    function DeleteMovies(payload) {
        this.payload = payload;
        this.type = MovieActionTypes.DeleteMovies;
    }
    return DeleteMovies;
}());

var ClearMovies = /** @class */ (function () {
    function ClearMovies() {
        this.type = MovieActionTypes.ClearMovies;
    }
    return ClearMovies;
}());



/***/ }),

/***/ "./src/app/entities/movie.reducer.ts":
/*!*******************************************!*\
  !*** ./src/app/entities/movie.reducer.ts ***!
  \*******************************************/
/*! exports provided: adapter, initialState, reducer, selectIds, selectEntities, selectAll, selectTotal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return adapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIds", function() { return selectIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectEntities", function() { return selectEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return selectAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectTotal", function() { return selectTotal; });
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/entity */ "./node_modules/@ngrx/entity/fesm5/entity.js");
/* harmony import */ var _movie_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./movie.actions */ "./src/app/entities/movie.actions.ts");
var _a;


function sortByMovieID(e1, e2) {
    return e1.id - e2.id;
}
var adapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_0__["createEntityAdapter"])({
    sortComparer: sortByMovieID
});
var initialState = adapter.getInitialState({
// additional entity state properties
});
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _movie_actions__WEBPACK_IMPORTED_MODULE_1__["MovieActionTypes"].AddMovie: {
            return adapter.addOne(action.payload.movie, state);
        }
        case _movie_actions__WEBPACK_IMPORTED_MODULE_1__["MovieActionTypes"].UpsertMovie: {
            return adapter.upsertOne(action.payload.movie, state);
        }
        case _movie_actions__WEBPACK_IMPORTED_MODULE_1__["MovieActionTypes"].AddMovies: {
            return adapter.addMany(action.payload.movies, state);
        }
        case _movie_actions__WEBPACK_IMPORTED_MODULE_1__["MovieActionTypes"].UpsertMovies: {
            return adapter.upsertMany(action.payload.movies, state);
        }
        case _movie_actions__WEBPACK_IMPORTED_MODULE_1__["MovieActionTypes"].UpdateMovie: {
            var ns = adapter.updateOne(action.payload.movie, state);
            return ns;
        }
        case _movie_actions__WEBPACK_IMPORTED_MODULE_1__["MovieActionTypes"].UpdateMovies: {
            return adapter.updateMany(action.payload.movies, state);
        }
        case _movie_actions__WEBPACK_IMPORTED_MODULE_1__["MovieActionTypes"].DeleteMovie: {
            return adapter.removeOne(action.payload.id, state);
        }
        case _movie_actions__WEBPACK_IMPORTED_MODULE_1__["MovieActionTypes"].DeleteMovies: {
            return adapter.removeMany(action.payload.ids, state);
        }
        case _movie_actions__WEBPACK_IMPORTED_MODULE_1__["MovieActionTypes"].LoadMovies: {
            return adapter.addAll(action.payload.movies, state);
        }
        case _movie_actions__WEBPACK_IMPORTED_MODULE_1__["MovieActionTypes"].ClearMovies: {
            return adapter.removeAll(state);
        }
        default: {
            return state;
        }
    }
}
var selectIds = (_a = adapter.getSelectors(), _a.selectIds), selectEntities = _a.selectEntities, selectAll = _a.selectAll, selectTotal = _a.selectTotal;


/***/ }),

/***/ "./src/app/entities/movie.selectors.ts":
/*!*********************************************!*\
  !*** ./src/app/entities/movie.selectors.ts ***!
  \*********************************************/
/*! exports provided: selectMovieState, selectAllMovies, selectMoviesEntities, selectMovie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectMovieState", function() { return selectMovieState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllMovies", function() { return selectAllMovies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectMoviesEntities", function() { return selectMoviesEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectMovie", function() { return selectMovie; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _movie_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./movie.reducer */ "./src/app/entities/movie.reducer.ts");


var _a = _movie_reducer__WEBPACK_IMPORTED_MODULE_1__["adapter"].getSelectors(), selectEntities = _a.selectEntities, selectAll = _a.selectAll;
var selectMovieState = function (state) { return state.movies; };
var selectAllMovies = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectMovieState, selectAll);
var selectMoviesEntities = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectMovieState, selectEntities);
var selectMovie = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectMoviesEntities, function (movie) { return function (id) { return movie[id]; }; });


/***/ }),

/***/ "./src/app/entities/movies-api.actions.ts":
/*!************************************************!*\
  !*** ./src/app/entities/movies-api.actions.ts ***!
  \************************************************/
/*! exports provided: MoviesAPIActionTypes, LoadMovies, LoadMoviesSucess, LoadMoviesError, AddMovie, AddMovieSucess, AddMovieError, SyncMovie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesAPIActionTypes", function() { return MoviesAPIActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadMovies", function() { return LoadMovies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadMoviesSucess", function() { return LoadMoviesSucess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadMoviesError", function() { return LoadMoviesError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMovie", function() { return AddMovie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMovieSucess", function() { return AddMovieSucess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMovieError", function() { return AddMovieError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SyncMovie", function() { return SyncMovie; });
var MoviesAPIActionTypes;
(function (MoviesAPIActionTypes) {
    MoviesAPIActionTypes["LoadMovies"] = "[Movies API] Load Movies";
    MoviesAPIActionTypes["LoadMoviesSucess"] = "[Movies API] Load Movies Success";
    MoviesAPIActionTypes["LoadMoviesError"] = "[Movies API] Load Movies Error";
    MoviesAPIActionTypes["AddMovie"] = "[Movies API] Add Movie";
    MoviesAPIActionTypes["AddMovieSucess"] = "[Movies API] Add Success";
    MoviesAPIActionTypes["AddMovieError"] = "[Movies API] Add Error";
    MoviesAPIActionTypes["SyncMovie"] = "[Movies API] Sync Movie";
})(MoviesAPIActionTypes || (MoviesAPIActionTypes = {}));
var LoadMovies = /** @class */ (function () {
    function LoadMovies() {
        this.type = MoviesAPIActionTypes.LoadMovies;
    }
    return LoadMovies;
}());

var LoadMoviesSucess = /** @class */ (function () {
    function LoadMoviesSucess() {
        this.type = MoviesAPIActionTypes.LoadMoviesSucess;
    }
    return LoadMoviesSucess;
}());

var LoadMoviesError = /** @class */ (function () {
    function LoadMoviesError() {
        this.type = MoviesAPIActionTypes.LoadMoviesError;
    }
    return LoadMoviesError;
}());

var AddMovie = /** @class */ (function () {
    function AddMovie() {
        this.type = MoviesAPIActionTypes.AddMovie;
    }
    return AddMovie;
}());

var AddMovieSucess = /** @class */ (function () {
    function AddMovieSucess() {
        this.type = MoviesAPIActionTypes.AddMovieSucess;
    }
    return AddMovieSucess;
}());

var AddMovieError = /** @class */ (function () {
    function AddMovieError() {
        this.type = MoviesAPIActionTypes.AddMovieError;
    }
    return AddMovieError;
}());

var SyncMovie = /** @class */ (function () {
    function SyncMovie(payload) {
        this.payload = payload;
        this.type = MoviesAPIActionTypes.SyncMovie;
    }
    return SyncMovie;
}());



/***/ }),

/***/ "./src/app/entities/movies-api.effects.ts":
/*!************************************************!*\
  !*** ./src/app/entities/movies-api.effects.ts ***!
  \************************************************/
/*! exports provided: MovieApiEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieApiEffects", function() { return MovieApiEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _movie_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./movie.actions */ "./src/app/entities/movie.actions.ts");
/* harmony import */ var _movies_api_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./movies-api.actions */ "./src/app/entities/movies-api.actions.ts");









var MovieApiEffects = /** @class */ (function () {
    function MovieApiEffects(http, actions$, store) {
        var _this = this;
        this.http = http;
        this.actions$ = actions$;
        this.store = store;
        this.movieAPI = '/api/movies'; // URL to web api
        this.loadMovies$ = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_movies_api_actions__WEBPACK_IMPORTED_MODULE_8__["MoviesAPIActionTypes"].LoadMovies), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(function () { return _this.http.get(_this.movieAPI)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (movies) { return (new _movie_actions__WEBPACK_IMPORTED_MODULE_7__["LoadMovies"]({ movies: movies })); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])({ type: '[Movie] Movies Loaded Error' }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () { return _this.store.dispatch(new _movies_api_actions__WEBPACK_IMPORTED_MODULE_8__["LoadMoviesSucess"]()); })); }));
        this.syncMovie$ = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_movies_api_actions__WEBPACK_IMPORTED_MODULE_8__["MoviesAPIActionTypes"].SyncMovie), 
        //    tap (() => console.log('have to sync a movie')),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["concatMap"])(function (syncaction) { return [
            new _movie_actions__WEBPACK_IMPORTED_MODULE_7__["UpdateMovie"]({ movie: syncaction.payload.movie })
        ]; }));
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MovieApiEffects.prototype, "loadMovies$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MovieApiEffects.prototype, "syncMovie$", void 0);
    MovieApiEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Actions"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], MovieApiEffects);
    return MovieApiEffects;
}());



/***/ }),

/***/ "./src/app/entities/movies-api.reducer.ts":
/*!************************************************!*\
  !*** ./src/app/entities/movies-api.reducer.ts ***!
  \************************************************/
/*! exports provided: initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _movies_api_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./movies-api.actions */ "./src/app/entities/movies-api.actions.ts");

var initialState = {
    pending: false,
    error: null
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _movies_api_actions__WEBPACK_IMPORTED_MODULE_0__["MoviesAPIActionTypes"].LoadMovies: {
            console.log('MoviesAPIActionTypes.LoadMovies');
            return Object.assign({}, state, { pending: true, error: null });
        }
        case _movies_api_actions__WEBPACK_IMPORTED_MODULE_0__["MoviesAPIActionTypes"].LoadMoviesSucess: {
            console.log('MoviesAPIActionTypes.LoadMoviesSucess');
            return Object.assign({}, state, { pending: false });
        }
        case _movies_api_actions__WEBPACK_IMPORTED_MODULE_0__["MoviesAPIActionTypes"].LoadMoviesError: {
            return Object.assign({}, state, { pending: false, error: 'ERROR' });
        }
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/message.service.ts":
/*!************************************!*\
  !*** ./src/app/message.service.ts ***!
  \************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MessageService = /** @class */ (function () {
    function MessageService() {
        this.messages = [];
    }
    MessageService.prototype.add = function (message) {
        this.messages.push(message);
    };
    MessageService.prototype.clear = function () {
        this.messages = [];
    };
    MessageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        })
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/messages/messages.component.css":
/*!*************************************************!*\
  !*** ./src/app/messages/messages.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lc3NhZ2VzL21lc3NhZ2VzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/messages/messages.component.html":
/*!**************************************************!*\
  !*** ./src/app/messages/messages.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"messageService.messages.length\">\n\n  <h2>Messages</h2>\n  <button class=\"clear\"\n          (click)=\"messageService.clear()\">clear</button>\n\n  <div *ngFor='let message of messageService.messages'> {{message}}\n\n  </div>\n\n"

/***/ }),

/***/ "./src/app/messages/messages.component.ts":
/*!************************************************!*\
  !*** ./src/app/messages/messages.component.ts ***!
  \************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../message.service */ "./src/app/message.service.ts");



var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(messageService) {
        this.messageService = messageService;
    }
    MessagesComponent.prototype.ngOnInit = function () {
    };
    MessagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__(/*! ./messages.component.html */ "./src/app/messages/messages.component.html"),
            styles: [__webpack_require__(/*! ./messages.component.css */ "./src/app/messages/messages.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "./src/app/movie-detail/movie-detail.component.css":
/*!*********************************************************!*\
  !*** ./src/app/movie-detail/movie-detail.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".omi {\n  display: inline;\n}\n\n.subomi {\n  display: inline;\n}\n\nlabel {\n    display: inline-block;\n    width: 5em;\n    margin: .5em 0;\n    color: #607D8B;\n    font-weight: bold;\n  }\n\ninput {\n    height: 2em;\n    width: 40em;\n    font-size: 1em;\n    padding-left: .4em;\n  }\n\nbutton {\n    margin-top: 20px;\n    font-family: Arial;\n    background-color: #eee;\n    border: none;\n    padding: 5px 10px;\n    border-radius: 4px;\n    cursor: pointer; cursor: hand;\n  }\n\nbutton:hover {\n    background-color: #cfd8dc;\n  }\n\nbutton:disabled {\n    background-color: #eee;\n    color: #ccc;\n    cursor: auto;\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWUtZGV0YWlsL21vdmllLWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0UsZ0JBQWdCO0NBQ2pCOztBQUVEO0lBQ0ksc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZUFBZTtJQUNmLGtCQUFrQjtHQUNuQjs7QUFDRDtJQUNFLFlBQVk7SUFDWixZQUFZO0lBQ1osZUFBZTtJQUNmLG1CQUFtQjtHQUNwQjs7QUFDRDtJQUNFLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGdCQUFnQixDQUFDLGFBQWE7R0FDL0I7O0FBQ0Q7SUFDRSwwQkFBMEI7R0FDM0I7O0FBQ0Q7SUFDRSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGFBQWE7R0FDZCIsImZpbGUiOiJzcmMvYXBwL21vdmllLWRldGFpbC9tb3ZpZS1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vbWkge1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbi5zdWJvbWkge1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbmxhYmVsIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDVlbTtcbiAgICBtYXJnaW46IC41ZW0gMDtcbiAgICBjb2xvcjogIzYwN0Q4QjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICBpbnB1dCB7XG4gICAgaGVpZ2h0OiAyZW07XG4gICAgd2lkdGg6IDQwZW07XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgcGFkZGluZy1sZWZ0OiAuNGVtO1xuICB9XG4gIGJ1dHRvbiB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBmb250LWZhbWlseTogQXJpYWw7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjsgY3Vyc29yOiBoYW5kO1xuICB9XG4gIGJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NmZDhkYztcbiAgfVxuICBidXR0b246ZGlzYWJsZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gICAgY29sb3I6ICNjY2M7XG4gICAgY3Vyc29yOiBhdXRvO1xuICB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/movie-detail/movie-detail.component.html":
/*!**********************************************************!*\
  !*** ./src/app/movie-detail/movie-detail.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=(movies$|async)(id)>\n\n  <br>\n  <a href=\"{{(movies$|async)(id).uri}}\" target=\"_blank\"> {{(movies$|async)(id).name}}</a>\n  <br />\n  stripes:{{(movies$|async)(id).stripeStatus}}&#37; cuts: {{(movies$|async)(id).cutStatus}}&#37;\n  <div>\n    <button (click)=\"computeStripes()\">(re)compute stripes</button>\n    <button (click)=\"computeCuts()\">(re)compute cuts</button>\n    <button (click)=\"goBack()\">go back</button>\n  </div>\n  <br />\n\n  <ng-container *ngFor='let omi of omimages$ | async'>\n    <app-omimage [startFN]=\"omi.startFN\" [endFN]=\"omi.endFN\"  ></app-omimage>\n  </ng-container>\n</div>\n\n<app-stripes></app-stripes>"

/***/ }),

/***/ "./src/app/movie-detail/movie-detail.component.ts":
/*!********************************************************!*\
  !*** ./src/app/movie-detail/movie-detail.component.ts ***!
  \********************************************************/
/*! exports provided: MovieDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDetailComponent", function() { return MovieDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _entities_movie_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../entities/movie.selectors */ "./src/app/entities/movie.selectors.ts");
/* harmony import */ var _movie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../movie.service */ "./src/app/movie.service.ts");








var MovieDetailComponent = /** @class */ (function () {
    function MovieDetailComponent(route, movieService, location, store) {
        this.route = route;
        this.movieService = movieService;
        this.location = location;
        this.store = store;
        this.movies$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_entities_movie_selectors__WEBPACK_IMPORTED_MODULE_6__["selectMovie"]));
    }
    MovieDetailComponent.prototype.ngOnDestroy = function () {
    };
    MovieDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        //   this.id = parseInt(this.route.snapshot.paramMap.get('id'));
        this.id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
        //  this.store.subscribe ( s  => console.log(s) );
        this.omimages$ = this.movieService.getCuts(this.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (cuts) { return _this.makeOMImageDataStructure(cuts); }));
    };
    MovieDetailComponent.prototype.makeOMImageDataStructure = function (cuts) {
        var omsl = [];
        var i = 0;
        var start = 0;
        for (var _i = 0, cuts_1 = cuts; _i < cuts_1.length; _i++) {
            var c = cuts_1[_i];
            var om = { id: i, startFN: start, endFN: c.fn - 1 };
            omsl.push(om);
            //console.log (i, om);
            start = c.fn;
            i += 1;
        }
        return omsl;
    };
    MovieDetailComponent.prototype.assignMovie = function (movie) {
        this.movie = movie;
        console.log('Movie Data Structures, received from the Movie Service');
        console.log(movie);
        console.log(movie.stripeStatus);
    };
    MovieDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    MovieDetailComponent.prototype.computeStripes = function () {
        var _this = this;
        console.log('Start the Compute Stripes Process');
        this.store.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_entities_movie_selectors__WEBPACK_IMPORTED_MODULE_6__["selectMovie"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (f) { return f(_this.id); }, Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (m) { return console.log(m); }))).subscribe(function (m) { return _this.movieService.computeStripe(m.id); });
    };
    MovieDetailComponent.prototype.computeCuts = function () {
        var _this = this;
        console.log('Start the Compute Cut Process');
        this.store.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_entities_movie_selectors__WEBPACK_IMPORTED_MODULE_6__["selectMovie"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (f) { return f(_this.id); })).subscribe(function (m) { return _this.movieService.computeCuts(m.id); });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MovieDetailComponent.prototype, "movie", void 0);
    MovieDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movie-detail',
            template: __webpack_require__(/*! ./movie-detail.component.html */ "./src/app/movie-detail/movie-detail.component.html"),
            styles: [__webpack_require__(/*! ./movie-detail.component.css */ "./src/app/movie-detail/movie-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _movie_service__WEBPACK_IMPORTED_MODULE_7__["MovieService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]])
    ], MovieDetailComponent);
    return MovieDetailComponent;
}());



/***/ }),

/***/ "./src/app/movie.service.ts":
/*!**********************************!*\
  !*** ./src/app/movie.service.ts ***!
  \**********************************/
/*! exports provided: MovieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieService", function() { return MovieService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./message.service */ "./src/app/message.service.ts");






var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var MovieService = /** @class */ (function () {
    function MovieService(messageService, http) {
        this.messageService = messageService;
        this.http = http;
        this.movieAPI = '/api/movies'; // URL to web api
    }
    /** Log a HeroService message with the MessageService */
    MovieService.prototype.log = function (message) {
        this.messageService.add("MovieService: " + message);
    };
    MovieService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    MovieService.prototype.getStripes = function (id) {
        var _this = this;
        var url = "/api/movie/" + id + "/stripes";
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log("fetched stripes for id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError("getStripes id=" + id)));
    };
    MovieService.prototype.getCuts = function (id) {
        var _this = this;
        var url = "/api/movie/" + id + "/cuts";
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log("fetched cuts for id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError("getCuts id=" + id)));
    };
    /** DELETE: delete the hero from the server */
    MovieService.prototype.deleteMovie = function (movie) {
        var _this = this;
        var id = typeof movie === 'number' ? movie : movie.id;
        var url = "/api/movie/" + id;
        return this.http.delete(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log("deleted movie id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('deleteMovie')));
    };
    MovieService.prototype.computeStripe = function (id) {
        var _this = this;
        console.log('Compute Stripes Process in MOVIE SERVICES');
        var url = "/api/movie/" + id + "/command";
        var command = "{ \"command\": \"[MOVIE] MAKE STRIPES\", \"parameters\": {\"silent\": \"true\"} }";
        console.log(url, command);
        this.http.post(url, command, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log("generate stripes id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('computeStripe'))).subscribe(function () { return console.log('command done'); });
    };
    MovieService.prototype.computeCuts = function (id) {
        var _this = this;
        console.log('Compute Cut Process in MOVIE SERVICES');
        var url = "/api/movie/" + id + "/command";
        var command = "{ \"command\": \"[MOVIE] ANALYZE CUTS\", \"parameters\": {\"silent\": \"true\"} }";
        this.http.post(url, command, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log("compute cuts movie id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('computeCuts'))).subscribe(function () { return console.log('command done'); });
    };
    MovieService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MovieService);
    return MovieService;
}());



/***/ }),

/***/ "./src/app/movies/movies.component.css":
/*!*********************************************!*\
  !*** ./src/app/movies/movies.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Movies Component's private CSS styles */\n\ntable {\n  width: 100%;\n}\n\n.selected {\n  background-color: #CFD8DC !important;\n  color: white;\n}\n\n.movies {\n  margin: 0 0 2em 0;\n  list-style-type: none;\n  padding: 0;\n  position: left;\n  width: 45em;\n  text-align: left;\n}\n\n.movies li {\n  cursor: pointer;\n  position: relative;\n  left: 0;\n  background-color: #EEE;\n  margin: .5em;\n  padding: .3em 0;\n  height: 1.6em;\n  border-radius: 4px;\n}\n\n.movies li.selected:hover {\n  background-color: #BBD8DC !important;\n  color: white;\n}\n\n.movies li:hover {\n  color: #607D8B;\n  background-color: #DDD;\n  left: .1em;\n}\n\n.movies .text {\n  position: relative;\n  top: -3px;\n}\n\n.movies .badge {\n  display: inline-block;\n  font-size: small;\n  color: white;\n  padding: 0.8em 0.7em 0 0.7em;\n  background-color: #607D8B;\n  line-height: 1em;\n  position: relative;\n  left: -1px;\n  top: -4px;\n  height: 1.8em;\n  margin-right: .8em;\n  border-radius: 4px 0 0 4px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWVzL21vdmllcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJDQUEyQzs7QUFFM0M7RUFDRSxZQUFZO0NBQ2I7O0FBR0Q7RUFDRSxxQ0FBcUM7RUFDckMsYUFBYTtDQUNkOztBQUNEO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsZUFBZTtFQUNmLFlBQVk7RUFDWixpQkFBaUI7Q0FDbEI7O0FBQ0Q7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFFBQVE7RUFDUix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsbUJBQW1CO0NBQ3BCOztBQUNEO0VBQ0UscUNBQXFDO0VBQ3JDLGFBQWE7Q0FDZDs7QUFDRDtFQUNFLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsV0FBVztDQUNaOztBQUNEO0VBQ0UsbUJBQW1CO0VBQ25CLFVBQVU7Q0FDWDs7QUFDRDtFQUNFLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QiwwQkFBMEI7RUFDMUIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsVUFBVTtFQUNWLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsMkJBQTJCO0NBQzVCIiwiZmlsZSI6InNyYy9hcHAvbW92aWVzL21vdmllcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogTW92aWVzIENvbXBvbmVudCdzIHByaXZhdGUgQ1NTIHN0eWxlcyAqL1xuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5cbi5zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNDRkQ4REMgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLm1vdmllcyB7XG4gIG1hcmdpbjogMCAwIDJlbSAwO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIHBvc2l0aW9uOiBsZWZ0O1xuICB3aWR0aDogNDVlbTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5tb3ZpZXMgbGkge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VFRTtcbiAgbWFyZ2luOiAuNWVtO1xuICBwYWRkaW5nOiAuM2VtIDA7XG4gIGhlaWdodDogMS42ZW07XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5tb3ZpZXMgbGkuc2VsZWN0ZWQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkJEOERDICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5tb3ZpZXMgbGk6aG92ZXIge1xuICBjb2xvcjogIzYwN0Q4QjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RERDtcbiAgbGVmdDogLjFlbTtcbn1cbi5tb3ZpZXMgLnRleHQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTNweDtcbn1cbi5tb3ZpZXMgLmJhZGdlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IHNtYWxsO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDAuOGVtIDAuN2VtIDAgMC43ZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICM2MDdEOEI7XG4gIGxpbmUtaGVpZ2h0OiAxZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogLTFweDtcbiAgdG9wOiAtNHB4O1xuICBoZWlnaHQ6IDEuOGVtO1xuICBtYXJnaW4tcmlnaHQ6IC44ZW07XG4gIGJvcmRlci1yYWRpdXM6IDRweCAwIDAgNHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/movies/movies.component.html":
/*!**********************************************!*\
  !*** ./src/app/movies/movies.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table mat-table [dataSource]=\"movies$|async\" class=\"mat-elevation-z8\">\n\n  <!--- Note that these columns can be defined in any order.\n        The actual rendered columns are set as a property on the row definition\" -->\n\n  <!-- Position Column -->\n  <ng-container matColumnDef=\"id\">\n    <th mat-header-cell *matHeaderCellDef> ID </th>\n    <td mat-cell *matCellDef=\"let m\"> {{m.id}} </td>\n  </ng-container>\n\n  <!-- Name Column -->\n  <ng-container matColumnDef=\"name\">\n    <th mat-header-cell *matHeaderCellDef> Name </th>\n      <td mat-cell *matCellDef=\"let m\"> \n        <a routerLink=\"/detail/{{m.id}}\"> {{m.name}}</a> \n  </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"stripe\">\n    <th mat-header-cell *matHeaderCellDef> Stripes </th>\n      <td mat-cell *matCellDef=\"let m\"> \n        {{m.stripeStatus}} &#37; \n  </td>\n  </ng-container>\n  \n  <ng-container matColumnDef=\"cut\">\n    <th mat-header-cell *matHeaderCellDef> Cuts </th>\n      <td mat-cell *matCellDef=\"let m\"> \n        {{m.cutStatus}} &#37; \n  </td>\n  </ng-container>\n\n  <!-- Weight Column -->\n  <ng-container matColumnDef=\"uri\">\n    <th mat-header-cell *matHeaderCellDef> Link </th>\n    <td mat-cell *matCellDef=\"let m\"> \n        <a href=\"{{m.uri}}\" target=\"_blank\"> {{m.uri}}</a>       \n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>"

/***/ }),

/***/ "./src/app/movies/movies.component.ts":
/*!********************************************!*\
  !*** ./src/app/movies/movies.component.ts ***!
  \********************************************/
/*! exports provided: MoviesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesComponent", function() { return MoviesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _entities_movie_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../entities/movie.selectors */ "./src/app/entities/movie.selectors.ts");




var MoviesComponent = /** @class */ (function () {
    function MoviesComponent(store) {
        this.store = store;
        this.movies$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_entities_movie_selectors__WEBPACK_IMPORTED_MODULE_3__["selectAllMovies"]));
        this.movientitiedes$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_entities_movie_selectors__WEBPACK_IMPORTED_MODULE_3__["selectMoviesEntities"]));
        this.displayedColumns = ['id', 'name', 'stripe', 'cut', 'uri'];
    }
    MoviesComponent.prototype.ngOnInit = function () {
        // this.store.subscribe ( s  => console.log(s) );
    };
    MoviesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movies',
            template: __webpack_require__(/*! ./movies.component.html */ "./src/app/movies/movies.component.html"),
            styles: [__webpack_require__(/*! ./movies.component.css */ "./src/app/movies/movies.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], MoviesComponent);
    return MoviesComponent;
}());



/***/ }),

/***/ "./src/app/omimage/omimage.component.css":
/*!***********************************************!*\
  !*** ./src/app/omimage/omimage.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".outerdiv {\n  position: relative;\n  display: inline;\n}\n\n.omcanvas {\n/*  position: absolute; */\n  z-index: 0;\n}\n\n.overlaycanvas {\n  position: absolute;\n  z-index: 100;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb21pbWFnZS9vbWltYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0NBQ2pCOztBQUVEO0FBQ0EsMEJBQTBCO0VBQ3hCLFdBQVc7Q0FDWjs7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0NBQ2QiLCJmaWxlIjoic3JjL2FwcC9vbWltYWdlL29taW1hZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vdXRlcmRpdiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuXG4ub21jYW52YXMge1xuLyogIHBvc2l0aW9uOiBhYnNvbHV0ZTsgKi9cbiAgei1pbmRleDogMDtcbn1cblxuLm92ZXJsYXljYW52YXMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDEwMDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/omimage/omimage.component.html":
/*!************************************************!*\
  !*** ./src/app/omimage/omimage.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n <ng-container *ngFor='let somi of subomis'>\n          <app-omsubimage  [startFN]=\"somi.startFN\" [endFN]=\"somi.endFN\" [centerFN]=\"somi.centerFN\"></app-omsubimage>\n  </ng-container>\n^"

/***/ }),

/***/ "./src/app/omimage/omimage.component.ts":
/*!**********************************************!*\
  !*** ./src/app/omimage/omimage.component.ts ***!
  \**********************************************/
/*! exports provided: OMImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OMImageComponent", function() { return OMImageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _movie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../movie.service */ "./src/app/movie.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");






var OMImageComponent = /** @class */ (function () {
    function OMImageComponent(renderer, movieService, store, route) {
        this.renderer = renderer;
        this.movieService = movieService;
        this.store = store;
        this.route = route;
    }
    OMImageComponent.prototype.ngOnInit = function () {
        this.n = Math.ceil((this.endFN - this.startFN + 1) / 25 / 5);
        var delta = (this.endFN - this.startFN + 1) / this.n;
        this.subomis = [];
        //   console.log (this.n, this.delta);
        for (var num = 0; num < this.n; num++) {
            var sfn = Math.round(this.startFN + num * delta);
            var efn = Math.round(sfn + delta - 1);
            var cfn = Math.round((sfn + efn) / 2.0);
            var subomi = { centerFN: cfn, startFN: sfn, endFN: efn };
            this.subomis.push(subomi);
        }
        // console.log (this.subomis);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], OMImageComponent.prototype, "startFN", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], OMImageComponent.prototype, "endFN", void 0);
    OMImageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-omimage',
            template: __webpack_require__(/*! ./omimage.component.html */ "./src/app/omimage/omimage.component.html"),
            styles: [__webpack_require__(/*! ./omimage.component.css */ "./src/app/omimage/omimage.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer"],
            _movie_service__WEBPACK_IMPORTED_MODULE_3__["MovieService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], OMImageComponent);
    return OMImageComponent;
}());



/***/ }),

/***/ "./src/app/omsubimage/omsubimage.component.css":
/*!*****************************************************!*\
  !*** ./src/app/omsubimage/omsubimage.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".outerdiv {\n  position: relative;\n  display: inline;\n}\n\n.omcanvas {\n/*  position: absolute; */\n  z-index: 0;\n}\n\n.overlaycanvas {\n  position: absolute;\n  z-index: 100;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb21zdWJpbWFnZS9vbXN1YmltYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0NBQ2pCOztBQUVEO0FBQ0EsMEJBQTBCO0VBQ3hCLFdBQVc7Q0FDWjs7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0NBQ2QiLCJmaWxlIjoic3JjL2FwcC9vbXN1YmltYWdlL29tc3ViaW1hZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vdXRlcmRpdiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuXG4ub21jYW52YXMge1xuLyogIHBvc2l0aW9uOiBhYnNvbHV0ZTsgKi9cbiAgei1pbmRleDogMDtcbn1cblxuLm92ZXJsYXljYW52YXMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDEwMDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/omsubimage/omsubimage.component.html":
/*!******************************************************!*\
  !*** ./src/app/omsubimage/omsubimage.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"outerdiv\" #outerdiv>\n  <canvas class=\"omcanvas\" #omcanvas   width=\"1\" height=\"1\"> </canvas>\n</div>\n"

/***/ }),

/***/ "./src/app/omsubimage/omsubimage.component.ts":
/*!****************************************************!*\
  !*** ./src/app/omsubimage/omsubimage.component.ts ***!
  \****************************************************/
/*! exports provided: OMSubimageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OMSubimageComponent", function() { return OMSubimageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _movie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../movie.service */ "./src/app/movie.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _entities_movie_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../entities/movie.selectors */ "./src/app/entities/movie.selectors.ts");








var OMSubimageComponent = /** @class */ (function () {
    function OMSubimageComponent(renderer, movieService, store, route) {
        this.renderer = renderer;
        this.movieService = movieService;
        this.store = store;
        this.route = route;
        this.movies$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_entities_movie_selectors__WEBPACK_IMPORTED_MODULE_6__["selectMovie"]));
        this.mset = false;
        this.cset = false;
        this.sset = false;
        this.aspectRatio = 1.0;
    }
    OMSubimageComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = parseInt(this.route.snapshot.paramMap.get('id'));
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_entities_movie_selectors__WEBPACK_IMPORTED_MODULE_6__["selectMovie"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (f) { return f(id); })).subscribe(function (m) { return _this.setMovieParameters(m); });
        this.getStripes();
        this.getCuts();
    };
    OMSubimageComponent.prototype.setMovieParameters = function (m) {
        if (m) {
            //      console.log('movie received');
            this.mset = true;
            this.mlocal = m;
            this.aspectRatio = m.height / m.width;
        }
    };
    OMSubimageComponent.prototype.drawOMSubImage = function () {
        if (this.mset && this.cset && this.mset) {
            var ctx_1 = this.omCanvas.nativeElement.getContext('2d');
            var SMALLIMAGEWITH = 30;
            var BIGIMAGEWITH_1 = SMALLIMAGEWITH * 5;
            var SMALLIMAGEHEIGHT_1 = Math.round(SMALLIMAGEWITH * this.aspectRatio);
            var BIGIMAGEHEIGTH_1 = Math.round(BIGIMAGEWITH_1 * this.aspectRatio);
            var STRIPEHEIGHT_1 = BIGIMAGEHEIGTH_1;
            var HEIGHT = STRIPEHEIGHT_1 + SMALLIMAGEHEIGHT_1 + BIGIMAGEWITH_1;
            var WIDTH = BIGIMAGEWITH_1;
            this.renderer.setElementProperty(this.omCanvas.nativeElement, 'height', HEIGHT.toString());
            this.renderer.setElementProperty(this.omCanvas.nativeElement, 'width', WIDTH.toString());
            this.renderer.setElementProperty(this.outerdiv.nativeElement, 'height', HEIGHT.toString());
            this.renderer.setElementProperty(this.outerdiv.nativeElement, 'width', WIDTH.toString());
            ctx_1.strokeStyle = '#ff0000';
            ctx_1.clearRect(0, 0, WIDTH, HEIGHT);
            var i = 0;
            ctx_1.rect(0, 0, WIDTH, BIGIMAGEHEIGTH_1);
            ctx_1.rect(0, BIGIMAGEHEIGTH_1, WIDTH, SMALLIMAGEHEIGHT_1);
            ctx_1.rect(0, BIGIMAGEHEIGTH_1 + SMALLIMAGEHEIGHT_1, WIDTH, STRIPEHEIGHT_1);
            for (var num = 0; num <= 4; num++) {
                ctx_1.rect(num * SMALLIMAGEWITH, BIGIMAGEHEIGTH_1, SMALLIMAGEWITH, SMALLIMAGEHEIGHT_1);
            }
            ctx_1.stroke();
            var startStripe = Math.floor(this.startFN / 1500);
            var endStripe = Math.floor(this.endFN / 1500);
            var sheight_1 = this.mlocal.height;
            if (startStripe === endStripe) {
                // we only have one stripe
                var xstart_1 = this.startFN - startStripe * 1500;
                var xend = this.endFN - endStripe * 1500;
                var swidth_1 = xend - xstart_1 + 1;
                if (this.stripes) {
                    //console.log (xstart, xend, swidth, sheight);
                    var s = this.stripes[startStripe];
                    var stripeimage_1 = new Image();
                    stripeimage_1.src = s.url;
                    stripeimage_1.onload = function () {
                        ctx_1.drawImage(stripeimage_1, xstart_1, 0, swidth_1, sheight_1, 0, BIGIMAGEHEIGTH_1 + SMALLIMAGEHEIGHT_1, BIGIMAGEWITH_1, STRIPEHEIGHT_1);
                    };
                }
            }
            else {
                var xstart2_1 = this.startFN - startStripe * 1500;
                var xend2 = 1500;
                var swidth2_1 = xend2 - xstart2_1 + 1;
                if (this.stripes) {
                    // console.log (xstart, xend, swidth, sheight);
                    var s = this.stripes[startStripe];
                    var stripeimage_2 = new Image();
                    stripeimage_2.src = s.url;
                    stripeimage_2.onload = function () {
                        ctx_1.drawImage(stripeimage_2, xstart2_1, 0, swidth2_1, sheight_1, 0, BIGIMAGEHEIGTH_1 + SMALLIMAGEHEIGHT_1, BIGIMAGEWITH_1, STRIPEHEIGHT_1);
                    };
                }
                var xstart3_1 = 0;
                var xend3 = this.endFN - endStripe * 1500;
                var swidth3_1 = xend3 - xstart3_1 + 1;
                if (this.stripes) {
                    // console.log (xstart, xend, swidth, sheight);
                    var s = this.stripes[endStripe];
                    var stripeimage_3 = new Image();
                    stripeimage_3.src = s.url;
                    stripeimage_3.onload = function () {
                        ctx_1.drawImage(stripeimage_3, xstart3_1, 0, swidth3_1, sheight_1, 0, BIGIMAGEHEIGTH_1 + SMALLIMAGEHEIGHT_1, BIGIMAGEWITH_1, STRIPEHEIGHT_1);
                    };
                }
            }
        }
    };
    OMSubimageComponent.prototype.drawOverlay = function () {
        var ctx = this.overlayCanvas.nativeElement.getContext('2d');
        ctx.strokeStyle = '#ff0000';
    };
    OMSubimageComponent.prototype.assignStripes = function (stripes) {
        this.stripes = stripes;
        this.sset = true;
        //      console.log(this.stripes );
        this.drawOMSubImage();
    };
    OMSubimageComponent.prototype.assignCuts = function (cuts) {
        this.cset = true;
        this.cuts = cuts;
        //      console.log("cuts received");
        this.drawOMSubImage();
    };
    OMSubimageComponent.prototype.getStripes = function () {
        var _this = this;
        var id = parseInt(this.route.snapshot.paramMap.get('id'));
        this.movieService.getStripes(id)
            .subscribe(function (stripes) { return _this.assignStripes(stripes); });
    };
    OMSubimageComponent.prototype.getCuts = function () {
        var _this = this;
        var id = parseInt(this.route.snapshot.paramMap.get('id'));
        this.movieService.getCuts(id)
            .subscribe(function (cuts) { return _this.assignCuts(cuts); });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], OMSubimageComponent.prototype, "startFN", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], OMSubimageComponent.prototype, "endFN", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], OMSubimageComponent.prototype, "centerFN", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('outerdiv'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], OMSubimageComponent.prototype, "outerdiv", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('omcanvas'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], OMSubimageComponent.prototype, "omCanvas", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('overlayCanvas'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], OMSubimageComponent.prototype, "overlayCanvas", void 0);
    OMSubimageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-omsubimage',
            template: __webpack_require__(/*! ./omsubimage.component.html */ "./src/app/omsubimage/omsubimage.component.html"),
            styles: [__webpack_require__(/*! ./omsubimage.component.css */ "./src/app/omsubimage/omsubimage.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer"],
            _movie_service__WEBPACK_IMPORTED_MODULE_4__["MovieService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], OMSubimageComponent);
    return OMSubimageComponent;
}());



/***/ }),

/***/ "./src/app/reducers/index.ts":
/*!***********************************!*\
  !*** ./src/app/reducers/index.ts ***!
  \***********************************/
/*! exports provided: reducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony import */ var _entities_movie_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../entities/movie.reducer */ "./src/app/entities/movie.reducer.ts");
/* harmony import */ var _entities_movies_api_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../entities/movies-api.reducer */ "./src/app/entities/movies-api.reducer.ts");


var reducers = {
    movies: _entities_movie_reducer__WEBPACK_IMPORTED_MODULE_0__["reducer"],
    movieapi: _entities_movies_api_reducer__WEBPACK_IMPORTED_MODULE_1__["reducer"]
};


/***/ }),

/***/ "./src/app/sse.service.ts":
/*!********************************!*\
  !*** ./src/app/sse.service.ts ***!
  \********************************/
/*! exports provided: SseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SseService", function() { return SseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var SseService = /** @class */ (function () {
    function SseService() {
        this.sseSource = new EventSource('/stream');
    }
    SseService.prototype.ngOnInit = function () {
        this.sseEvent = this.getEvent();
        this.sseEvent.subscribe(function (v) { return console.log(v); });
    };
    SseService.prototype.getEvent = function () {
        var _this = this;
        var observable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            var handler = function (event) { return observer.next(event); };
            _this.sseSource.addEventListener('greeting', handler);
            return function () { return _this.sseSource.removeEventListener('greeting', handler); };
        });
        return observable;
    };
    SseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SseService);
    return SseService;
}());

/*
@Injectable({ providedIn: 'root'})
export class SseService {

  constructor() { }

  private subject: Subject<MessageEvent>;

  public connect(url): Subject<MessageEvent> {
    if (!this.subject) {
      this.subject = this.create(url);
      console.log('Successfully connected: ' + url);
    }
    return this.subject;
  }

  private create(url): Subject<MessageEvent> {
    
    const observable = new Observable(observer => {
      const source = new EventSource(url);
      const handler = (event) => observer.next(event);
      source.addEventListener('greeting', handler);
      return () => source.removeEventListener('greeting', handler);
    });

    console.log(observable);
    return Subject.create(observable);
  }

}
*/ 


/***/ }),

/***/ "./src/app/stripes-overlay/stripes-overlay.component.css":
/*!***************************************************************!*\
  !*** ./src/app/stripes-overlay/stripes-overlay.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0cmlwZXMtb3ZlcmxheS9zdHJpcGVzLW92ZXJsYXkuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/stripes-overlay/stripes-overlay.component.html":
/*!****************************************************************!*\
  !*** ./src/app/stripes-overlay/stripes-overlay.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  stripes-overlay works!\n</p>\n<canvas #myCanvas width=\"500\" height=\"500\">\n</canvas>\n"

/***/ }),

/***/ "./src/app/stripes-overlay/stripes-overlay.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/stripes-overlay/stripes-overlay.component.ts ***!
  \**************************************************************/
/*! exports provided: StripesOverlayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StripesOverlayComponent", function() { return StripesOverlayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var StripesOverlayComponent = /** @class */ (function () {
    function StripesOverlayComponent() {
    }
    StripesOverlayComponent.prototype.ngOnInit = function () {
        var ctx = this.canvasRef.nativeElement.getContext('2d');
        // Clear any previous content.
        ctx.clearRect(0, 0, 500, 500);
        // Draw the clip path that will mask everything else
        // that we'll draw later.
        ctx.beginPath();
        ctx.moveTo(250, 60);
        ctx.lineTo(63.8, 126.4);
        ctx.lineTo(92.2, 372.6);
        ctx.lineTo(250, 460);
        ctx.lineTo(407.8, 372.6);
        ctx.lineTo(436.2, 126.4);
        ctx.moveTo(250, 104.2);
        ctx.lineTo(133.6, 365.2);
        ctx.lineTo(177, 365.2);
        ctx.lineTo(200.4, 306.8);
        ctx.lineTo(299.2, 306.8);
        ctx.lineTo(325.2, 365.2);
        ctx.lineTo(362.6, 365.2);
        ctx.lineTo(250, 104.2);
        ctx.moveTo(304, 270.8);
        ctx.lineTo(216, 270.8);
        ctx.lineTo(250, 189);
        ctx.lineTo(284, 270.8);
        ctx.clip('evenodd');
        // Draw 50,000 circles at random points
        ctx.beginPath();
        ctx.fillStyle = '#DD0031';
        for (var i = 0; i < 50000; i++) {
            var x = Math.random() * 500;
            var y = Math.random() * 500;
            ctx.moveTo(x, y);
            ctx.arc(x, y, 1, 0, Math.PI * 2);
        }
        ctx.fill();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myCanvas'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], StripesOverlayComponent.prototype, "canvasRef", void 0);
    StripesOverlayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-stripes-overlay',
            template: __webpack_require__(/*! ./stripes-overlay.component.html */ "./src/app/stripes-overlay/stripes-overlay.component.html"),
            styles: [__webpack_require__(/*! ./stripes-overlay.component.css */ "./src/app/stripes-overlay/stripes-overlay.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StripesOverlayComponent);
    return StripesOverlayComponent;
}());



/***/ }),

/***/ "./src/app/stripes/stripes.component.css":
/*!***********************************************!*\
  !*** ./src/app/stripes/stripes.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".outerdiv {\n  position: relative;\n}\n\n.overlaycanvas {\n  position: absolute;\n  z-index: 100;\n}\n\n.stripeimagearray {\n  position: absolute;\n  z-index: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RyaXBlcy9zdHJpcGVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtDQUNkOztBQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7Q0FDWiIsImZpbGUiOiJzcmMvYXBwL3N0cmlwZXMvc3RyaXBlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm91dGVyZGl2IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ub3ZlcmxheWNhbnZhcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTAwO1xufVxuXG4uc3RyaXBlaW1hZ2VhcnJheSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/stripes/stripes.component.html":
/*!************************************************!*\
  !*** ./src/app/stripes/stripes.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"outerdiv\" width=\"800\">\n\n  <canvas class=\"stripeimagearray\" #imageCanvas   width=\"800\" height=\"10\">\n  </canvas>\n  <canvas class=\"overlaycanvas\"    #overlayCanvas width=\"800\" height=\"10\">\n  </canvas>\n\n</div>\n"

/***/ }),

/***/ "./src/app/stripes/stripes.component.ts":
/*!**********************************************!*\
  !*** ./src/app/stripes/stripes.component.ts ***!
  \**********************************************/
/*! exports provided: StripesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StripesComponent", function() { return StripesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _movie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../movie.service */ "./src/app/movie.service.ts");





var StripesComponent = /** @class */ (function () {
    function StripesComponent(renderer, movieService, route) {
        this.renderer = renderer;
        this.movieService = movieService;
        this.route = route;
    }
    StripesComponent.prototype.ngOnInit = function () {
        this.getStripes();
        this.getCuts();
    };
    StripesComponent.prototype.drawImages = function () {
        var ctx = this.imageCanvas.nativeElement.getContext('2d');
        ctx.clearRect(0, 0, 1500, 800);
        var i = 0;
        var _loop_1 = function (s) {
            //         console.log (i, s)
            var stripeimage = new Image();
            stripeimage.src = s.url;
            var y = i * 80;
            stripeimage.onload = function () { ctx.drawImage(stripeimage, 0, y, 800, 75); };
            i = i + 1;
        };
        for (var _i = 0, _a = this.stripes; _i < _a.length; _i++) {
            var s = _a[_i];
            _loop_1(s);
        }
    };
    StripesComponent.prototype.drawOverlay = function () {
        var ctx = this.overlayCanvas.nativeElement.getContext('2d');
        ctx.strokeStyle = '#ff0000';
        var i = 0;
        for (var _i = 0, _a = this.cuts; _i < _a.length; _i++) {
            var c = _a[_i];
            if (i > 0) {
                var y = Math.floor(c.fn / 1500.0);
                var x = 800 * (c.fn - y * 1500) / 1500;
                ctx.beginPath();
                ctx.moveTo(x, y * 80 - 1);
                ctx.lineTo(x, y * 80 + 75 + 1);
                ctx.stroke();
                //console.log(c.fn, x,y)
            }
            i += 1;
        }
    };
    StripesComponent.prototype.assignStripesAndDrawImages = function (stripes) {
        this.stripes = stripes;
        var h = this.stripes.length * 80;
        this.renderer.setElementProperty(this.imageCanvas.nativeElement, "height", h.toString());
        this.drawImages();
    };
    StripesComponent.prototype.assignCutsAndDrawOverlay = function (cuts) {
        this.cuts = cuts;
        //console.log (cuts)
        var lastfn = cuts[cuts.length - 1].fn;
        var h = 80 * Math.ceil(lastfn / 1500.0);
        this.renderer.setElementProperty(this.overlayCanvas.nativeElement, "height", h.toString());
        this.drawOverlay();
    };
    StripesComponent.prototype.getStripes = function () {
        var _this = this;
        var id = parseInt(this.route.snapshot.paramMap.get('id'));
        this.movieService.getStripes(id)
            .subscribe(function (stripes) { return _this.assignStripesAndDrawImages(stripes); });
    };
    StripesComponent.prototype.getCuts = function () {
        var _this = this;
        var id = parseInt(this.route.snapshot.paramMap.get('id'));
        this.movieService.getCuts(id)
            .subscribe(function (cuts) { return _this.assignCutsAndDrawOverlay(cuts); });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('imageCanvas'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], StripesComponent.prototype, "imageCanvas", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('overlayCanvas'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], StripesComponent.prototype, "overlayCanvas", void 0);
    StripesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-stripes',
            template: __webpack_require__(/*! ./stripes.component.html */ "./src/app/stripes/stripes.component.html"),
            styles: [__webpack_require__(/*! ./stripes.component.css */ "./src/app/stripes/stripes.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer"], _movie_service__WEBPACK_IMPORTED_MODULE_3__["MovieService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], StripesComponent);
    return StripesComponent;
}());



/***/ }),

/***/ "./src/app/syncstore.service.ts":
/*!**************************************!*\
  !*** ./src/app/syncstore.service.ts ***!
  \**************************************/
/*! exports provided: SyncstoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SyncstoreService", function() { return SyncstoreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _entities_movies_api_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./entities/movies-api.actions */ "./src/app/entities/movies-api.actions.ts");
/* harmony import */ var _task_task_api_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./task/task-api.actions */ "./src/app/task/task-api.actions.ts");
/* harmony import */ var _sse_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sse.service */ "./src/app/sse.service.ts");







var webSockerUrl = 'ws:/127.0.0.1:8077/socket.io/';
var SyncstoreService = /** @class */ (function () {
    function SyncstoreService(store, sseServ) {
        var _this = this;
        this.store = store;
        console.log('SyncstoreService make observable');
        this.messages = sseServ.getEvent().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            var data = JSON.parse(response.data);
            return {
                storeID: data.storeID,
                operation: data.operation,
                payload: data.payload
            };
        }));
        this.messages.subscribe(function (op) { return _this.dispatchSyncOperation(op); });
    }
    SyncstoreService.prototype.dispatchSyncOperation = function (op) {
        //  console.log (op);
        switch (op.storeID) {
            case 'MOVIE': {
                this.dispatchMovieOperation(op);
                break;
            }
            case 'TASK': {
                this.dispatchTaskOperation(op);
                break;
            }
            default: {
                break;
            }
        }
    };
    SyncstoreService.prototype.dispatchMovieOperation = function (op) {
        switch (op.operation) {
            case 'UPDATE': {
                this.store.dispatch(new _entities_movies_api_actions__WEBPACK_IMPORTED_MODULE_4__["SyncMovie"]({ movie: op.payload }));
                break;
            }
            default: {
                break;
            }
        }
    };
    SyncstoreService.prototype.dispatchTaskOperation = function (op) {
        switch (op.operation) {
            case 'LOAD': {
                console.log("****************** RELOAD TASKS");
                this.store.dispatch(new _task_task_api_actions__WEBPACK_IMPORTED_MODULE_5__["LoadTasks"]());
                break;
            }
            case 'UPDATE': {
                this.store.dispatch(new _task_task_api_actions__WEBPACK_IMPORTED_MODULE_5__["SyncTask"]({ task: op.payload }));
                break;
            }
            default: {
                break;
            }
        }
    };
    SyncstoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"],
            _sse_service__WEBPACK_IMPORTED_MODULE_6__["SseService"]])
    ], SyncstoreService);
    return SyncstoreService;
}());



/***/ }),

/***/ "./src/app/task/task-api.actions.ts":
/*!******************************************!*\
  !*** ./src/app/task/task-api.actions.ts ***!
  \******************************************/
/*! exports provided: TasksAPIActionTypes, LoadTasks, LoadTasksSucess, LoadTasksError, AddTask, AddTaskSucess, AddTaskError, SyncTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksAPIActionTypes", function() { return TasksAPIActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadTasks", function() { return LoadTasks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadTasksSucess", function() { return LoadTasksSucess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadTasksError", function() { return LoadTasksError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTask", function() { return AddTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTaskSucess", function() { return AddTaskSucess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTaskError", function() { return AddTaskError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SyncTask", function() { return SyncTask; });
var TasksAPIActionTypes;
(function (TasksAPIActionTypes) {
    TasksAPIActionTypes["LoadTasks"] = "[Tasks API] Load Tasks";
    TasksAPIActionTypes["LoadTasksSucess"] = "[Tasks API] Load Tasks Success";
    TasksAPIActionTypes["LoadTasksError"] = "[Tasks API] Load Tasks Error";
    TasksAPIActionTypes["AddTask"] = "[Tasks API] Add Task";
    TasksAPIActionTypes["AddTaskSucess"] = "[Tasks API] Add Success";
    TasksAPIActionTypes["AddTaskError"] = "[Tasks API] Add Error";
    TasksAPIActionTypes["SyncTask"] = "[Tasks API] Sync Task";
})(TasksAPIActionTypes || (TasksAPIActionTypes = {}));
var LoadTasks = /** @class */ (function () {
    function LoadTasks() {
        this.type = TasksAPIActionTypes.LoadTasks;
    }
    return LoadTasks;
}());

var LoadTasksSucess = /** @class */ (function () {
    function LoadTasksSucess() {
        this.type = TasksAPIActionTypes.LoadTasksSucess;
    }
    return LoadTasksSucess;
}());

var LoadTasksError = /** @class */ (function () {
    function LoadTasksError() {
        this.type = TasksAPIActionTypes.LoadTasksError;
    }
    return LoadTasksError;
}());

var AddTask = /** @class */ (function () {
    function AddTask() {
        this.type = TasksAPIActionTypes.AddTask;
    }
    return AddTask;
}());

var AddTaskSucess = /** @class */ (function () {
    function AddTaskSucess() {
        this.type = TasksAPIActionTypes.AddTaskSucess;
    }
    return AddTaskSucess;
}());

var AddTaskError = /** @class */ (function () {
    function AddTaskError() {
        this.type = TasksAPIActionTypes.AddTaskError;
    }
    return AddTaskError;
}());

var SyncTask = /** @class */ (function () {
    function SyncTask(payload) {
        this.payload = payload;
        this.type = TasksAPIActionTypes.SyncTask;
    }
    return SyncTask;
}());



/***/ }),

/***/ "./src/app/task/task-api.effects.ts":
/*!******************************************!*\
  !*** ./src/app/task/task-api.effects.ts ***!
  \******************************************/
/*! exports provided: TaskApiEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskApiEffects", function() { return TaskApiEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _task_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./task.actions */ "./src/app/task/task.actions.ts");
/* harmony import */ var _task_api_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./task-api.actions */ "./src/app/task/task-api.actions.ts");









var TaskApiEffects = /** @class */ (function () {
    function TaskApiEffects(http, actions$, store) {
        var _this = this;
        this.http = http;
        this.actions$ = actions$;
        this.store = store;
        this.taskAPI = '/api/tasks'; // URL to web api
        this.loadTasks$ = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_task_api_actions__WEBPACK_IMPORTED_MODULE_8__["TasksAPIActionTypes"].LoadTasks), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(function () { return _this.http.get(_this.taskAPI)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (tasks) { return (new _task_actions__WEBPACK_IMPORTED_MODULE_7__["LoadTasks"]({ tasks: tasks })); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])({ type: '[Task] Tasks Loaded Error' }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () { return _this.store.dispatch(new _task_api_actions__WEBPACK_IMPORTED_MODULE_8__["LoadTasksSucess"]()); })); }));
        this.syncTask$ = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_task_api_actions__WEBPACK_IMPORTED_MODULE_8__["TasksAPIActionTypes"].SyncTask), 
        //    tap (() => console.log('have to sync a task')),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["concatMap"])(function (syncaction) { return [
            new _task_actions__WEBPACK_IMPORTED_MODULE_7__["UpdateTask"]({ task: syncaction.payload.task })
        ]; }));
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TaskApiEffects.prototype, "loadTasks$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TaskApiEffects.prototype, "syncTask$", void 0);
    TaskApiEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Actions"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], TaskApiEffects);
    return TaskApiEffects;
}());



/***/ }),

/***/ "./src/app/task/task-api.reducer.ts":
/*!******************************************!*\
  !*** ./src/app/task/task-api.reducer.ts ***!
  \******************************************/
/*! exports provided: initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _task_api_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task-api.actions */ "./src/app/task/task-api.actions.ts");

var initialState = {
    pending: false,
    error: null
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _task_api_actions__WEBPACK_IMPORTED_MODULE_0__["TasksAPIActionTypes"].LoadTasks: {
            //      console.log ('TasksAPIActionTypes.LoadTasks');
            return Object.assign({}, state, { pending: true, error: null });
        }
        case _task_api_actions__WEBPACK_IMPORTED_MODULE_0__["TasksAPIActionTypes"].LoadTasksSucess: {
            //      console.log ('TasksAPIActionTypes.LoadTasksSucess');
            return Object.assign({}, state, { pending: false });
        }
        case _task_api_actions__WEBPACK_IMPORTED_MODULE_0__["TasksAPIActionTypes"].LoadTasksError: {
            return Object.assign({}, state, { pending: false, error: 'ERROR' });
        }
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/task/task-list/task-list.component.css":
/*!********************************************************!*\
  !*** ./src/app/task/task-list/task-list.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    width: 100%;\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFzay90YXNrLWxpc3QvdGFzay1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0dBQ2IiLCJmaWxlIjoic3JjL2FwcC90YXNrL3Rhc2stbGlzdC90YXNrLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAiXX0= */"

/***/ }),

/***/ "./src/app/task/task-list/task-list.component.html":
/*!*********************************************************!*\
  !*** ./src/app/task/task-list/task-list.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Backgound Tasks on Server</h3>\n\n\n<table mat-table [dataSource]=\"tasks$|async\" class=\"mat-elevation-z8\">\n\n  <!--- Note that these columns can be defined in any order.\n        The actual rendered columns are set as a property on the row definition\" -->\n\n<ng-container matColumnDef=\"movieID\">\n    <th mat-header-cell *matHeaderCellDef> ID </th>\n      <td mat-cell *matCellDef=\"let t\"> \n        <a routerLink=\"/detail/{{t.movieID}}\">  {{(movies$|async)(t.movieID).name}}  </a> \n  </td>\n  </ng-container>\n\n\n  <ng-container matColumnDef=\"actionID\">\n    <th mat-header-cell *matHeaderCellDef> command </th>\n    <td mat-cell *matCellDef=\"let t\"> {{t.actionID}} </td>\n  </ng-container>\n\n  \n  <ng-container matColumnDef=\"state\">\n    <th mat-header-cell *matHeaderCellDef> state </th>\n    <td mat-cell *matCellDef=\"let t\"> {{t.state}} </td>\n  </ng-container>\n\n\n  <ng-container matColumnDef=\"progress\">\n    <th mat-header-cell *matHeaderCellDef> progress </th>\n      <td mat-cell *matCellDef=\"let t\"> \n        {{t.progress}} &#37; \n  </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>"

/***/ }),

/***/ "./src/app/task/task-list/task-list.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/task/task-list/task-list.component.ts ***!
  \*******************************************************/
/*! exports provided: TaskListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskListComponent", function() { return TaskListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _task_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../task.selectors */ "./src/app/task/task.selectors.ts");
/* harmony import */ var _entities_movie_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../entities/movie.selectors */ "./src/app/entities/movie.selectors.ts");





var TaskListComponent = /** @class */ (function () {
    function TaskListComponent(store) {
        this.store = store;
        this.tasks$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_task_selectors__WEBPACK_IMPORTED_MODULE_3__["selectAllTasks"]));
        this.movies$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_entities_movie_selectors__WEBPACK_IMPORTED_MODULE_4__["selectMovie"]));
        this.displayedColumns = ['movieID', 'actionID', 'state', 'progress'];
    }
    TaskListComponent.prototype.ngOnInit = function () {
        //  this.tasks$.subscribe (v => console.log(v));
    };
    TaskListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'task-list',
            template: __webpack_require__(/*! ./task-list.component.html */ "./src/app/task/task-list/task-list.component.html"),
            styles: [__webpack_require__(/*! ./task-list.component.css */ "./src/app/task/task-list/task-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], TaskListComponent);
    return TaskListComponent;
}());



/***/ }),

/***/ "./src/app/task/task.actions.ts":
/*!**************************************!*\
  !*** ./src/app/task/task.actions.ts ***!
  \**************************************/
/*! exports provided: TaskActionTypes, LoadTasks, AddTask, UpsertTask, AddTasks, UpsertTasks, UpdateTask, UpdateTasks, DeleteTask, DeleteTasks, ClearTasks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskActionTypes", function() { return TaskActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadTasks", function() { return LoadTasks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTask", function() { return AddTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpsertTask", function() { return UpsertTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTasks", function() { return AddTasks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpsertTasks", function() { return UpsertTasks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateTask", function() { return UpdateTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateTasks", function() { return UpdateTasks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteTask", function() { return DeleteTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteTasks", function() { return DeleteTasks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClearTasks", function() { return ClearTasks; });
var TaskActionTypes;
(function (TaskActionTypes) {
    TaskActionTypes["LoadTasks"] = "[Task] Load Tasks";
    TaskActionTypes["AddTask"] = "[Task] Add Task";
    TaskActionTypes["UpsertTask"] = "[Task] Upsert Task";
    TaskActionTypes["AddTasks"] = "[Task] Add Tasks";
    TaskActionTypes["UpsertTasks"] = "[Task] Upsert Tasks";
    TaskActionTypes["UpdateTask"] = "[Task] Update Task";
    TaskActionTypes["UpdateTasks"] = "[Task] Update Tasks";
    TaskActionTypes["DeleteTask"] = "[Task] Delete Task";
    TaskActionTypes["DeleteTasks"] = "[Task] Delete Tasks";
    TaskActionTypes["ClearTasks"] = "[Task] Clear Tasks";
})(TaskActionTypes || (TaskActionTypes = {}));
var LoadTasks = /** @class */ (function () {
    function LoadTasks(payload) {
        this.payload = payload;
        this.type = TaskActionTypes.LoadTasks;
    }
    return LoadTasks;
}());

var AddTask = /** @class */ (function () {
    function AddTask(payload) {
        this.payload = payload;
        this.type = TaskActionTypes.AddTask;
    }
    return AddTask;
}());

var UpsertTask = /** @class */ (function () {
    function UpsertTask(payload) {
        this.payload = payload;
        this.type = TaskActionTypes.UpsertTask;
    }
    return UpsertTask;
}());

var AddTasks = /** @class */ (function () {
    function AddTasks(payload) {
        this.payload = payload;
        this.type = TaskActionTypes.AddTasks;
    }
    return AddTasks;
}());

var UpsertTasks = /** @class */ (function () {
    function UpsertTasks(payload) {
        this.payload = payload;
        this.type = TaskActionTypes.UpsertTasks;
    }
    return UpsertTasks;
}());

var UpdateTask = /** @class */ (function () {
    function UpdateTask(payload) {
        this.payload = payload;
        this.type = TaskActionTypes.UpdateTask;
    }
    return UpdateTask;
}());

var UpdateTasks = /** @class */ (function () {
    function UpdateTasks(payload) {
        this.payload = payload;
        this.type = TaskActionTypes.UpdateTasks;
    }
    return UpdateTasks;
}());

var DeleteTask = /** @class */ (function () {
    function DeleteTask(payload) {
        this.payload = payload;
        this.type = TaskActionTypes.DeleteTask;
    }
    return DeleteTask;
}());

var DeleteTasks = /** @class */ (function () {
    function DeleteTasks(payload) {
        this.payload = payload;
        this.type = TaskActionTypes.DeleteTasks;
    }
    return DeleteTasks;
}());

var ClearTasks = /** @class */ (function () {
    function ClearTasks() {
        this.type = TaskActionTypes.ClearTasks;
    }
    return ClearTasks;
}());



/***/ }),

/***/ "./src/app/task/task.module.ts":
/*!*************************************!*\
  !*** ./src/app/task/task.module.ts ***!
  \*************************************/
/*! exports provided: TaskModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskModule", function() { return TaskModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _task_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./task.state */ "./src/app/task/task.state.ts");
/* harmony import */ var _task_api_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./task-api.effects */ "./src/app/task/task-api.effects.ts");
/* harmony import */ var _task_list_task_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./task-list/task-list.component */ "./src/app/task/task-list/task-list.component.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








// MATERIAL


// TASKS
var TaskModule = /** @class */ (function () {
    function TaskModule() {
    }
    TaskModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _task_list_task_list_component__WEBPACK_IMPORTED_MODULE_7__["TaskListComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"],
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsModule"].forFeature([_task_api_effects__WEBPACK_IMPORTED_MODULE_6__["TaskApiEffects"]]),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forFeature('task', _task_state__WEBPACK_IMPORTED_MODULE_5__["taskreducers"])
            ],
            exports: [_angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"]],
        })
    ], TaskModule);
    return TaskModule;
}());



/***/ }),

/***/ "./src/app/task/task.reducer.ts":
/*!**************************************!*\
  !*** ./src/app/task/task.reducer.ts ***!
  \**************************************/
/*! exports provided: adapter, initialState, reducer, selectIds, selectEntities, selectAll, selectTotal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return adapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIds", function() { return selectIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectEntities", function() { return selectEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return selectAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectTotal", function() { return selectTotal; });
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/entity */ "./node_modules/@ngrx/entity/fesm5/entity.js");
/* harmony import */ var _task_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task.actions */ "./src/app/task/task.actions.ts");
var _a;


function sortByMovieID(e1, e2) {
    if (e1.movieID === e2.movieID) {
        return (e1.progress - e2.progress);
    }
    else {
        return (e1.movieID - e2.movieID);
    }
}
var adapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_0__["createEntityAdapter"])({
    sortComparer: sortByMovieID
});
var initialState = adapter.getInitialState({
    api_pending: false,
    api_sucess: false
    // additional entity state properties
});
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _task_actions__WEBPACK_IMPORTED_MODULE_1__["TaskActionTypes"].AddTask: {
            return adapter.addOne(action.payload.task, state);
        }
        case _task_actions__WEBPACK_IMPORTED_MODULE_1__["TaskActionTypes"].UpsertTask: {
            return adapter.upsertOne(action.payload.task, state);
        }
        case _task_actions__WEBPACK_IMPORTED_MODULE_1__["TaskActionTypes"].AddTasks: {
            return adapter.addMany(action.payload.tasks, state);
        }
        case _task_actions__WEBPACK_IMPORTED_MODULE_1__["TaskActionTypes"].UpsertTasks: {
            return adapter.upsertMany(action.payload.tasks, state);
        }
        case _task_actions__WEBPACK_IMPORTED_MODULE_1__["TaskActionTypes"].UpdateTask: {
            return adapter.updateOne(action.payload.task, state);
        }
        case _task_actions__WEBPACK_IMPORTED_MODULE_1__["TaskActionTypes"].UpdateTasks: {
            return adapter.updateMany(action.payload.tasks, state);
        }
        case _task_actions__WEBPACK_IMPORTED_MODULE_1__["TaskActionTypes"].DeleteTask: {
            return adapter.removeOne(action.payload.id, state);
        }
        case _task_actions__WEBPACK_IMPORTED_MODULE_1__["TaskActionTypes"].DeleteTasks: {
            return adapter.removeMany(action.payload.ids, state);
        }
        case _task_actions__WEBPACK_IMPORTED_MODULE_1__["TaskActionTypes"].LoadTasks: {
            return adapter.addAll(action.payload.tasks, state);
        }
        case _task_actions__WEBPACK_IMPORTED_MODULE_1__["TaskActionTypes"].ClearTasks: {
            return adapter.removeAll(state);
        }
        default: {
            return state;
        }
    }
}
var selectIds = (_a = adapter.getSelectors(), _a.selectIds), selectEntities = _a.selectEntities, selectAll = _a.selectAll, selectTotal = _a.selectTotal;


/***/ }),

/***/ "./src/app/task/task.selectors.ts":
/*!****************************************!*\
  !*** ./src/app/task/task.selectors.ts ***!
  \****************************************/
/*! exports provided: selectTaskState, selectAllTasks, selectTasksEntities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectTaskState", function() { return selectTaskState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllTasks", function() { return selectAllTasks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectTasksEntities", function() { return selectTasksEntities; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _task_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task.reducer */ "./src/app/task/task.reducer.ts");


var _a = _task_reducer__WEBPACK_IMPORTED_MODULE_1__["adapter"].getSelectors(), selectEntities = _a.selectEntities, selectAll = _a.selectAll;
var selectTaskState = function (state) { return state.task.tasks; };
var selectAllTasks = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectTaskState, selectAll);
var selectTasksEntities = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectTaskState, selectEntities);


/***/ }),

/***/ "./src/app/task/task.state.ts":
/*!************************************!*\
  !*** ./src/app/task/task.state.ts ***!
  \************************************/
/*! exports provided: taskreducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taskreducers", function() { return taskreducers; });
/* harmony import */ var _task_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.reducer */ "./src/app/task/task.reducer.ts");
/* harmony import */ var _task_api_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task-api.reducer */ "./src/app/task/task-api.reducer.ts");


var taskreducers = {
    tasks: _task_reducer__WEBPACK_IMPORTED_MODULE_0__["reducer"],
    tasksapi: _task_api_reducer__WEBPACK_IMPORTED_MODULE_1__["reducer"]
};


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Shared/SWD/BIBBOX-DOCKER-CONTAINER-DEV/app-video-score/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map