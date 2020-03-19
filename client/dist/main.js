(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--The content below is only a placeholder and can be replaced.-->\n \n  <div class=\"appdecoration\">\n\n    <mat-icon svgIcon=\"home\"></mat-icon>\n    <button mat-button [matMenuTriggerFor]=\"menu\">File</button>\n    <mat-menu #menu=\"matMenu\">\n        <button mat-menu-item>New</button>\n        <button mat-menu-item (click)=\"openDocumentList()\">Open</button>\n        <button mat-menu-item>Recent</button>\n        <button mat-menu-item>Upload</button>\n        <button mat-menu-item>Link to Nextcloud</button>\n        <button mat-menu-item>Export</button>\n        <button mat-menu-item>Close</button>\n      </mat-menu>\n    <button mat-button [matMenuTriggerFor]=\"edit\">Edit</button>\n    <mat-menu #edit=\"matMenu\">\n        <button mat-menu-item>Copy</button>\n        <button mat-menu-item>Cut</button>\n        <button mat-menu-item>Paste</button>\n         <button mat-menu-item>Search</button>\n    </mat-menu>\n    <button mat-button [matMenuTriggerFor]=\"view\">View</button>\n    <mat-menu #view=\"matMenu\">\n        <button mat-menu-item>Outline</button>\n        <button mat-menu-item>OM Images</button>\n        <button mat-menu-item>Audio track</button>\n         <button mat-menu-item>Export</button>\n    </mat-menu>\n    <button mat-button [matMenuTriggerFor]=\"format\">Format</button>\n    <mat-menu #format=\"matMenu\">\n        <button mat-menu-item>Headings</button>\n        <button mat-menu-item>Paragraph</button>\n        <button mat-menu-item>Text</button>\n         <button mat-menu-item>OM Images</button>\n    </mat-menu>\n    <button mat-button [matMenuTriggerFor]=\"format\">Analyze</button>\n    <mat-menu #analyze=\"matMenu\">\n        <button mat-menu-item>Cut Sructure</button>\n        <button mat-menu-item>Audio Structure</button>\n        <button mat-menu-item>Novements</button>\n         <button mat-menu-item>Persons</button>\n    </mat-menu>\n    <button mat-button [matMenuTriggerFor]=\"window\">Window</button>\n    <mat-menu #window=\"matMenu\">\n        <button mat-menu-item>Score</button>\n        <button mat-menu-item (click)=\"openMovieList()\">Movies</button>\n        <button mat-menu-item (click)=\"showTasks()\">Background Tasks</button>\n        <button mat-menu-item>Help</button>\n    </mat-menu>\n\n    <router-outlet></router-outlet>\n  </div>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3>Movies</h3>\n\n<div class=\"mmbox\">\n<div class=\"grid grid-pad\">\n  <a *ngFor=\"let movie of movies$ | async\" class=\"col-1-4\"\n    routerLink=\"/detail/{{movie.id}}\">\n    <div class=\"module movie\">\n      <h4>{{movie.name}}</h4>\n    </div>\n\n  </a>\n</div>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/document/document-display/contentelement/contentelement.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/document/document-display/contentelement/contentelement.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-omimage [ceuuid]=\"id\" [movieuuid]=\"payload.movieuuid\" [s]=\"payload.s\" [e]=\"payload.e\" [n]=\"payload.n\"></app-omimage> ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/document/document-display/document-display.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/document/document-display/document-display.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3>{{(content|async)?.name}}</h3>\n\n    <div style=\"height: 90vh;\">\n        <as-split [direction]=\"direction\">\n            <as-split-area size=\"70\">\n                <div *ngIf=\"co | async\">\n                    <ng-container *ngFor=\"let c of co | async\">\n                        <app-contentelement [id]=\"c.id\" [payload]=\"c.payload\"> </app-contentelement>\n                        <span  #gluebetweenCE>_</span>\n                    </ng-container>\n                </div>\n            </as-split-area>\n            <as-split-area size=\"30\">\n               <p>Selected Movie and Frame</p>\n                 \n               <div *ngIf=\"selectedMovie | async\">\n                   {{(movies$|async)(selectedMovie|async).name}}  -- {{selectedFrame|async}}\n               </div>\n              {{youtubevideoid}}\n              <p>YOUTUBE VIDEO </p>\n              \n              <youtube-player\n              [videoId]=\"tiNPFqalCh0\"\n              [height]=\"600\"\n              [width]=\"1080\"\n              >\n              </youtube-player>\n            <p>YOUTUBE VIDEO  END</p>\n            </as-split-area>\n        </as-split>\n    </div>\n\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/document/document-display/omimage/omimage.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/document/document-display/omimage/omimage.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"compressOmImages; then thenBlock else elseBlock\"></div>\n<ng-template #thenBlock> \n        <img src = \"{{fceurl}}\"  width=\"140px\"> XXXXXXXXXXXX <img src = \"{{lceurl}}\"  width=\"140px\">\n</ng-template>\n<ng-template #elseBlock>\n        <ng-container  *ngFor=\"let o of ainfos index as i\"> \n        <span class=\"outerdiv\">       \n                <span *ngIf=\"( ((selectedCE  | async) == ceuuid) &&((selectedCEpos  | async) == i) )\" >\n                  <img src=\"assets/cursor.png\" alt=\"image\" height=\"130px\"  width=\"12%\" right=\"90px\" class=\"cursor-overlay\" style=\"left:{{selectedCEdeltaCursor}}px\">\n        </span>\n          <img  (mouseenter) =\"mouseEnter('span a')\" \n                  (mouseleave) =\"mouseLeave('span A')\"\n                  (mousemove)  =\"mouseMove(i, $event)\"\n                  (click)  =\"click(ceuuid, i, $event)\"\n                  src = \"{{o.url}}\"  width=\"100px\">\n          </span>\n         </ng-container>\n</ng-template>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/documentlist/documentlist.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/documentlist/documentlist.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<table mat-table [dataSource]=\"documents$|async\" class=\"mat-elevation-z8\">\n\n  <!--- Note that these columns can be defined in any order.\n        The actual rendered columns are set as a property on the row definition\" -->\n\n  <!-- Position Column -->\n\n  <!-- Name Column -->\n  <ng-container matColumnDef=\"name\">\n    <th mat-header-cell *matHeaderCellDef> Name </th>\n      <td mat-cell *matCellDef=\"let m\"> \n       {{m.name}} \n  </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"uuid\">\n    <th mat-header-cell *matHeaderCellDef> UUID </th>\n      <td mat-cell *matCellDef=\"let m\"> \n        {{m.uuid}} \n  </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"openDocument(row)\"></tr>\n</table>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/messages/messages.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/messages/messages.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"messageService.messages.length\">\n\n  <h2>Messages</h2>\n  <button class=\"clear\"\n          (click)=\"messageService.clear()\">clear</button>\n\n  <div *ngFor='let message of messageService.messages'> {{message}}\n\n  </div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/movie-detail/movie-detail.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/movie-detail/movie-detail.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=(movies$|async)(id)>\n\n  <br>\n  <a href=\"{{(movies$|async)(id).uri}}\" target=\"_blank\"> {{(movies$|async)(id).name}}</a>\n  <br />\n  stripes:{{(movies$|async)(id).stripeStatus}}&#37; cuts: {{(movies$|async)(id).cutStatus}}&#37; doc: {{(movies$|async)(id).docStatus}}&#37;\n  <div>\n    <button (click)=\"computeStripes()\">(re)compute stripes</button>\n    <button (click)=\"computeCuts()\">(re)compute cuts</button>\n    <button (click)=\"makeDocAndOmImages()\">(re)compute Doc and OM Images</button>\n    <button (click)=\"goBack()\">go back</button>\n  </div>\n  <br />\n  \n  <app-stripes id = \"{{(movies$|async)(id).id}}\"></app-stripes>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/movies/movies.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/movies/movies.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<table mat-table [dataSource]=\"movies$|async\" class=\"mat-elevation-z8\">\n\n  <!--- Note that these columns can be defined in any order.\n        The actual rendered columns are set as a property on the row definition\" -->\n\n  <!-- Position Column -->\n  <ng-container matColumnDef=\"id\">\n    <th mat-header-cell *matHeaderCellDef> ID </th>\n    <td mat-cell *matCellDef=\"let m\"> {{m.id}} </td>\n  </ng-container>\n\n  <!-- Name Column -->\n  <ng-container matColumnDef=\"name\">\n    <th mat-header-cell *matHeaderCellDef> Name </th>\n      <td mat-cell *matCellDef=\"let m\"> \n        <a routerLink=\"/detail/{{m.uuid}}\"> {{m.name}}</a> \n  </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"stripe\">\n    <th mat-header-cell *matHeaderCellDef> Stripes </th>\n      <td mat-cell *matCellDef=\"let m\"> \n        {{m.stripeStatus}} &#37; \n  </td>\n  </ng-container>\n  \n  <ng-container matColumnDef=\"cut\">\n    <th mat-header-cell *matHeaderCellDef> Cuts </th>\n      <td mat-cell *matCellDef=\"let m\"> \n        {{m.cutStatus}} &#37; \n  </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"doc\">\n    <th mat-header-cell *matHeaderCellDef> Doc </th>\n      <td mat-cell *matCellDef=\"let m\"> \n        {{m.docStatus}} &#37; \n  </td>\n  </ng-container>\n\n  <!-- Weight Column -->\n  <ng-container matColumnDef=\"uri\">\n    <th mat-header-cell *matHeaderCellDef> Link </th>\n    <td mat-cell *matCellDef=\"let m\"> \n        <a href=\"{{m.uri}}\" target=\"_blank\"> {{m.uri}}</a>       \n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/stripes-overlay/stripes-overlay.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/stripes-overlay/stripes-overlay.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  stripes-overlay works!\n</p>\n<canvas #myCanvas width=\"500\" height=\"500\">\n</canvas>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/stripes/stripes.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/stripes/stripes.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"outerdiv\" width=\"800\">\n\n  <canvas class=\"stripeimagearray\" #imageCanvas   width=\"800\" height=\"10\">\n  </canvas>\n  <canvas class=\"overlaycanvas\"    #overlayCanvas width=\"800\" height=\"10\">\n  </canvas>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/task/task-list/task-list.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/task/task-list/task-list.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3>Backgound Tasks on Server</h3>\n\n\n<table mat-table [dataSource]=\"tasks$|async\" class=\"mat-elevation-z8\">\n\n  <!--- Note that these columns can be defined in any order.\n        The actual rendered columns are set as a property on the row definition\" -->\n\n<ng-container matColumnDef=\"movieID\">\n    <th mat-header-cell *matHeaderCellDef> ID </th>\n      <td mat-cell *matCellDef=\"let t\"> \n        <a routerLink=\"/detail/{{t.movieID}}\">  {{(movies$|async)(t.movieID).name}}  </a> \n  </td>\n  </ng-container>\n\n\n  <ng-container matColumnDef=\"actionID\">\n    <th mat-header-cell *matHeaderCellDef> command </th>\n    <td mat-cell *matCellDef=\"let t\"> {{t.actionID}} </td>\n  </ng-container>\n\n  \n  <ng-container matColumnDef=\"state\">\n    <th mat-header-cell *matHeaderCellDef> state </th>\n    <td mat-cell *matCellDef=\"let t\"> {{t.state}} </td>\n  </ng-container>\n\n\n  <ng-container matColumnDef=\"progress\">\n    <th mat-header-cell *matHeaderCellDef> progress </th>\n      <td mat-cell *matCellDef=\"let t\"> \n        {{t.progress}} &#37; \n  </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _movies_movies_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./movies/movies.component */ "./src/app/movies/movies.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./movie-detail/movie-detail.component */ "./src/app/movie-detail/movie-detail.component.ts");
/* harmony import */ var _documentlist_documentlist_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./documentlist/documentlist.component */ "./src/app/documentlist/documentlist.component.ts");
/* harmony import */ var _document_document_display_document_display_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./document/document-display/document-display.component */ "./src/app/document/document-display/document-display.component.ts");
/* harmony import */ var _task_task_list_task_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./task/task-list/task-list.component */ "./src/app/task/task-list/task-list.component.ts");









var routes = [
    { path: 'movies', component: _movies_movies_component__WEBPACK_IMPORTED_MODULE_3__["MoviesComponent"] },
    { path: 'documents', component: _documentlist_documentlist_component__WEBPACK_IMPORTED_MODULE_6__["DocumentListComponent"] },
    { path: 'document/:id', component: _document_document_display_document_display_component__WEBPACK_IMPORTED_MODULE_7__["DocumentDisplayComponent"] },
    { path: 'tasks', component: _task_task_list_task_list_component__WEBPACK_IMPORTED_MODULE_8__["TaskListComponent"] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"] },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'detail/:id', component: _movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_5__["MovieDetailComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\nh1 {\n  font-size: 2.0em;\n  color: #999;\n  margin-bottom: 0;\n}\nh2 {\n  font-size: 1em;\n  margin-top: 0;\n  padding-top: 0;\n}\nnav a {\n  padding: 5px 10px;\n  text-decoration: none;\n  margin-top: 10px;\n  display: inline-block;\n  background-color: #eee;\n  border-radius: 4px;\n}\nnav a:visited, a:link {\n  color: #607D8B;\n}\nnav a:hover {\n  color: #039be5;\n  background-color: #CFD8DC;\n}\nnav a.active {\n  color: #039be5;\n}\nappdecoration {\n   background-color: #CFD8DC;\n   margin-top:300px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsY0FBYztBQUNoQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGNBQWM7RUFDZCx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtHQUNHLHlCQUF5QjtHQUN6QixnQkFBZ0I7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaDEge1xuICBmb250LXNpemU6IDIuMGVtO1xuICBjb2xvcjogIzk5OTtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbmgyIHtcbiAgZm9udC1zaXplOiAxZW07XG4gIG1hcmdpbi10b3A6IDA7XG4gIHBhZGRpbmctdG9wOiAwO1xufVxubmF2IGEge1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbm5hdiBhOnZpc2l0ZWQsIGE6bGluayB7XG4gIGNvbG9yOiAjNjA3RDhCO1xufVxubmF2IGE6aG92ZXIge1xuICBjb2xvcjogIzAzOWJlNTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0NGRDhEQztcbn1cbm5hdiBhLmFjdGl2ZSB7XG4gIGNvbG9yOiAjMDM5YmU1O1xufVxuXG5hcHBkZWNvcmF0aW9uIHtcbiAgIGJhY2tncm91bmQtY29sb3I6ICNDRkQ4REM7XG4gICBtYXJnaW4tdG9wOjMwMHB4O1xufVxuIl19 */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");




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
    AppComponent.prototype.openDocumentList = function () {
        this.router.navigateByUrl('/documents');
    };
    AppComponent.ctorParameters = function () { return [
        { type: _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"],
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _movies_movies_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./movies/movies.component */ "./src/app/movies/movies.component.ts");
/* harmony import */ var _movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./movie-detail/movie-detail.component */ "./src/app/movie-detail/movie-detail.component.ts");
/* harmony import */ var _documentlist_documentlist_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./documentlist/documentlist.component */ "./src/app/documentlist/documentlist.component.ts");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/messages/messages.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/animations.js");
/* harmony import */ var _stripes_stripes_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./stripes/stripes.component */ "./src/app/stripes/stripes.component.ts");
/* harmony import */ var _stripes_overlay_stripes_overlay_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./stripes-overlay/stripes-overlay.component */ "./src/app/stripes-overlay/stripes-overlay.component.ts");
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngrx/router-store */ "./node_modules/@ngrx/router-store/__ivy_ngcc__/fesm5/router-store.js");
/* harmony import */ var angular_split__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! angular-split */ "./node_modules/angular-split/__ivy_ngcc__/fesm5/angular-split.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/__ivy_ngcc__/fesm5/store-devtools.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm5/effects.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./reducers */ "./src/app/reducers/index.ts");
/* harmony import */ var _entities_movies_api_effects__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./entities/movies-api.effects */ "./src/app/entities/movies-api.effects.ts");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/checkbox.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/table.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/menu.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/icon.js");
/* harmony import */ var _task_task_module__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./task/task.module */ "./src/app/task/task.module.ts");
/* harmony import */ var _document_document_module__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./document/document.module */ "./src/app/document/document.module.ts");


















// STORE





// MATERIAL





// TASKS

// Documents

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _movies_movies_component__WEBPACK_IMPORTED_MODULE_7__["MoviesComponent"],
                _movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_8__["MovieDetailComponent"],
                _documentlist_documentlist_component__WEBPACK_IMPORTED_MODULE_9__["DocumentListComponent"],
                _messages_messages_component__WEBPACK_IMPORTED_MODULE_10__["MessagesComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["DashboardComponent"],
                _stripes_stripes_component__WEBPACK_IMPORTED_MODULE_14__["StripesComponent"],
                _stripes_overlay_stripes_overlay_component__WEBPACK_IMPORTED_MODULE_15__["StripesOverlayComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_23__["MatCheckboxModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_24__["MatTableModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__["MatMenuModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_26__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__["MatIconModule"],
                _task_task_module__WEBPACK_IMPORTED_MODULE_28__["TaskModule"],
                _document_document_module__WEBPACK_IMPORTED_MODULE_29__["DocumentModule"],
                angular_split__WEBPACK_IMPORTED_MODULE_17__["AngularSplitModule"].forRoot(),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_19__["StoreModule"].forRoot(_reducers__WEBPACK_IMPORTED_MODULE_21__["reducers"]),
                _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_18__["StoreDevtoolsModule"].instrument({ maxAge: 25 }),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_20__["EffectsModule"].forRoot([]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_20__["EffectsModule"].forFeature([_entities_movies_api_effects__WEBPACK_IMPORTED_MODULE_22__["MovieApiEffects"]]),
                _ngrx_router_store__WEBPACK_IMPORTED_MODULE_16__["StoreRouterConnectingModule"].forRoot({ serializer: _ngrx_router_store__WEBPACK_IMPORTED_MODULE_16__["DefaultRouterStateSerializer"] })
            ],
            exports: [_angular_material_checkbox__WEBPACK_IMPORTED_MODULE_23__["MatCheckboxModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__["MatMenuModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__["MatIconModule"]],
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm5/store.js");
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
        this.store.subscribe(function (v) { return console.log(v); });
        return this.http.get('/api/ping');
    };
    AppService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: _syncstore_service__WEBPACK_IMPORTED_MODULE_6__["SyncstoreService"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
    ]; };
    AppService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* DashboardComponent's private CSS styles */\n[class*='col-'] {\n  float: left;\n  padding-right: 20px;\n  padding-bottom: 20px;\n}\n[class*='col-']:last-of-type {\n  padding-right: 0;\n}\n.mmbox {\n  display: flex;\n  \n}\na {\n  text-decoration: none;\n}\n*, *:after, *:before {\n  box-sizing: border-box;\n}\nh3 {\n  text-align: center;\n  margin-bottom: 0;\n}\nh4 {\n  position: relative;\n}\n.grid {\n\n  margin: 0;\n}\n.col-1-4 {\n  width: 50%;\n}\n.module {\n  padding: 20px;\n  text-align: center;\n  color: #eee;\n  max-height: 120px;\n  min-width: 120px;\n  background-color: #607d8b;\n  border-radius: 2px;\n  white-space: nowrap;\n}\n.module:hover {\n  background-color: #eee;\n  cursor: pointer;\n  color: #607d8b;\n}\n.grid-pad {\n\n  padding: 10px 0;\n}\n.grid-pad > [class*='col-']:last-of-type {\n  padding-right: 20px;\n}\n@media (max-width: 600px) {\n  .module {\n    font-size: 10px;\n    max-height: 75px; }\n}\n@media (max-width: 1024px) {\n  .grid {\n    margin: 0;\n  }\n  .module {\n    min-width: 60px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRDQUE0QztBQUM1QztFQUNFLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGFBQWE7O0FBRWY7QUFDQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUNBO0VBR0Usc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTs7RUFFRSxTQUFTO0FBQ1g7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixjQUFjO0FBQ2hCO0FBQ0E7O0VBRUUsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRTtJQUNFLGVBQWU7SUFDZixnQkFBZ0IsRUFBRTtBQUN0QjtBQUNBO0VBQ0U7SUFDRSxTQUFTO0VBQ1g7RUFDQTtJQUNFLGVBQWU7RUFDakI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIERhc2hib2FyZENvbXBvbmVudCdzIHByaXZhdGUgQ1NTIHN0eWxlcyAqL1xuW2NsYXNzKj0nY29sLSddIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuW2NsYXNzKj0nY29sLSddOmxhc3Qtb2YtdHlwZSB7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG59XG5cbi5tbWJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIFxufVxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbiosICo6YWZ0ZXIsICo6YmVmb3JlIHtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5oMyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbmg0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmdyaWQge1xuXG4gIG1hcmdpbjogMDtcbn1cbi5jb2wtMS00IHtcbiAgd2lkdGg6IDUwJTtcbn1cbi5tb2R1bGUge1xuICBwYWRkaW5nOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZWVlO1xuICBtYXgtaGVpZ2h0OiAxMjBweDtcbiAgbWluLXdpZHRoOiAxMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYwN2Q4YjtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLm1vZHVsZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICM2MDdkOGI7XG59XG4uZ3JpZC1wYWQge1xuXG4gIHBhZGRpbmc6IDEwcHggMDtcbn1cbi5ncmlkLXBhZCA+IFtjbGFzcyo9J2NvbC0nXTpsYXN0LW9mLXR5cGUge1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5tb2R1bGUge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBtYXgtaGVpZ2h0OiA3NXB4OyB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5ncmlkIHtcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgLm1vZHVsZSB7XG4gICAgbWluLXdpZHRoOiA2MHB4O1xuICB9XG59XG4iXX0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm5/store.js");
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
    DashboardComponent.ctorParameters = function () { return [
        { type: _movie_service__WEBPACK_IMPORTED_MODULE_3__["MovieService"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
    ]; };
    DashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_movie_service__WEBPACK_IMPORTED_MODULE_3__["MovieService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/document.service.ts":
/*!*************************************!*\
  !*** ./src/app/document.service.ts ***!
  \*************************************/
/*! exports provided: DocListEntry, DocumentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocListEntry", function() { return DocListEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentService", function() { return DocumentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./message.service */ "./src/app/message.service.ts");






var DocListEntry = /** @class */ (function () {
    function DocListEntry() {
    }
    return DocListEntry;
}());

var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var DocumentService = /** @class */ (function () {
    function DocumentService(messageService, http) {
        this.messageService = messageService;
        this.http = http;
        this.movieAPI = '/api/documents'; // URL to web api
    }
    DocumentService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error); // log to console instead
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    DocumentService.prototype.getDocuments = function () {
        var url = "/api/documents";
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError("getDocuments")));
    };
    DocumentService.prototype.getDocument = function (id) {
        var url = "/api/document/" + id;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError("getDocument")));
    };
    DocumentService.ctorParameters = function () { return [
        { type: _message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    DocumentService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DocumentService);
    return DocumentService;
}());



/***/ }),

/***/ "./src/app/document/document-api.actions.ts":
/*!**************************************************!*\
  !*** ./src/app/document/document-api.actions.ts ***!
  \**************************************************/
/*! exports provided: DocumentAPIActionTypes, LoadDocument, LoadDocumentSucess, LoadDocumentError, SyncDocument */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentAPIActionTypes", function() { return DocumentAPIActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadDocument", function() { return LoadDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadDocumentSucess", function() { return LoadDocumentSucess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadDocumentError", function() { return LoadDocumentError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SyncDocument", function() { return SyncDocument; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var DocumentAPIActionTypes;
(function (DocumentAPIActionTypes) {
    DocumentAPIActionTypes["LoadDocument"] = "[Document API] Load Document";
    DocumentAPIActionTypes["LoadDocumentSucess"] = "[Document API] Load Document Success";
    DocumentAPIActionTypes["LoadDocumentError"] = "[Document API] Load Document Error";
    DocumentAPIActionTypes["SyncDocument"] = "[Document API] Sync Document";
})(DocumentAPIActionTypes || (DocumentAPIActionTypes = {}));
var LoadDocument = /** @class */ (function () {
    function LoadDocument(payload) {
        this.payload = payload;
        this.type = DocumentAPIActionTypes.LoadDocument;
    }
    return LoadDocument;
}());

var LoadDocumentSucess = /** @class */ (function () {
    function LoadDocumentSucess() {
        this.type = DocumentAPIActionTypes.LoadDocumentSucess;
    }
    return LoadDocumentSucess;
}());

var LoadDocumentError = /** @class */ (function () {
    function LoadDocumentError() {
        this.type = DocumentAPIActionTypes.LoadDocumentError;
    }
    return LoadDocumentError;
}());

var SyncDocument = /** @class */ (function () {
    function SyncDocument(payload) {
        this.payload = payload;
        this.type = DocumentAPIActionTypes.SyncDocument;
    }
    return SyncDocument;
}());



/***/ }),

/***/ "./src/app/document/document-api.effects.ts":
/*!**************************************************!*\
  !*** ./src/app/document/document-api.effects.ts ***!
  \**************************************************/
/*! exports provided: DocumentApiEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentApiEffects", function() { return DocumentApiEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm5/store.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm5/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _document_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./document.actions */ "./src/app/document/document.actions.ts");
/* harmony import */ var _document_api_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./document-api.actions */ "./src/app/document/document-api.actions.ts");









var DocumentApiEffects = /** @class */ (function () {
    function DocumentApiEffects(http, actions, store) {
        var _this = this;
        this.http = http;
        this.actions = actions;
        this.store = store;
        this.documentAPI = '/api/document/'; // URL to web api
        this.loadDocument = this.actions
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_document_api_actions__WEBPACK_IMPORTED_MODULE_8__["DocumentAPIActionTypes"].LoadDocument), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(function (action) { return _this.http.get(_this.documentAPI + action.payload.id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (document) { return (new _document_actions__WEBPACK_IMPORTED_MODULE_7__["LoadDocument"]({ document: document })); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])({ type: '[Document] Documents Loaded Error' }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () { return _this.store.dispatch(new _document_api_actions__WEBPACK_IMPORTED_MODULE_8__["LoadDocumentSucess"]()); })); }));
    }
    DocumentApiEffects.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Actions"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], DocumentApiEffects.prototype, "loadDocument", void 0);
    DocumentApiEffects = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Actions"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], DocumentApiEffects);
    return DocumentApiEffects;
}());



/***/ }),

/***/ "./src/app/document/document-api.reducer.ts":
/*!**************************************************!*\
  !*** ./src/app/document/document-api.reducer.ts ***!
  \**************************************************/
/*! exports provided: initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _document_api_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./document-api.actions */ "./src/app/document/document-api.actions.ts");


var initialState = {
    pending: false,
    error: null
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _document_api_actions__WEBPACK_IMPORTED_MODULE_1__["DocumentAPIActionTypes"].LoadDocument: {
            console.log('DocumentAPIActionTypes.LoadDocument');
            return Object.assign({}, state, { pending: true, error: null });
        }
        case _document_api_actions__WEBPACK_IMPORTED_MODULE_1__["DocumentAPIActionTypes"].LoadDocumentSucess: {
            console.log('DocumentAPIActionTypes.LoadDocumentSucess');
            return Object.assign({}, state, { pending: false });
        }
        case _document_api_actions__WEBPACK_IMPORTED_MODULE_1__["DocumentAPIActionTypes"].LoadDocumentError: {
            return Object.assign({}, state, { pending: false, error: 'ERROR' });
        }
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/document/document-display/contentelement/contentelement.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/document/document-display/contentelement/contentelement.component.css ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".outerdiv {\n  position: relative;\n  display: inline;\n}\n\n.omcanvas {\n/*  position: absolute; */\n  z-index: 0;\n}\n\n.overlaycanvas {\n  position: absolute;\n  z-index: 100;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9jdW1lbnQvZG9jdW1lbnQtZGlzcGxheS9jb250ZW50ZWxlbWVudC9jb250ZW50ZWxlbWVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7QUFDQSx5QkFBeUI7RUFDdkIsVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2RvY3VtZW50L2RvY3VtZW50LWRpc3BsYXkvY29udGVudGVsZW1lbnQvY29udGVudGVsZW1lbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vdXRlcmRpdiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuXG4ub21jYW52YXMge1xuLyogIHBvc2l0aW9uOiBhYnNvbHV0ZTsgKi9cbiAgei1pbmRleDogMDtcbn1cblxuLm92ZXJsYXljYW52YXMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDEwMDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/document/document-display/contentelement/contentelement.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/document/document-display/contentelement/contentelement.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ContentElementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentElementComponent", function() { return ContentElementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");




var ContentElementComponent = /** @class */ (function () {
    function ContentElementComponent(renderer, route) {
        this.renderer = renderer;
        this.route = route;
    }
    ContentElementComponent.prototype.ngOnInit = function () {
        // console.log (this.ceurl);
        // console.log (this.subomis);
    };
    ContentElementComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], ContentElementComponent.prototype, "id", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], ContentElementComponent.prototype, "payload", void 0);
    ContentElementComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contentelement',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./contentelement.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/document/document-display/contentelement/contentelement.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./contentelement.component.css */ "./src/app/document/document-display/contentelement/contentelement.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ContentElementComponent);
    return ContentElementComponent;
}());



/***/ }),

/***/ "./src/app/document/document-display/document-display.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/document/document-display/document-display.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n    width: 100%;\n  }\n  \n  .btns {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-wrap: wrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9jdW1lbnQvZG9jdW1lbnQtZGlzcGxheS9kb2N1bWVudC1kaXNwbGF5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvZG9jdW1lbnQvZG9jdW1lbnQtZGlzcGxheS9kb2N1bWVudC1kaXNwbGF5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gIC5idG5zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC13cmFwOiB3cmFwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/document/document-display/document-display.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/document/document-display/document-display.component.ts ***!
  \*************************************************************************/
/*! exports provided: DocumentDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentDisplayComponent", function() { return DocumentDisplayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm5/store.js");
/* harmony import */ var _document_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../document.selectors */ "./src/app/document/document.selectors.ts");
/* harmony import */ var _entities_movie_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../entities/movie.selectors */ "./src/app/entities/movie.selectors.ts");







var DocumentDisplayComponent = /** @class */ (function () {
    function DocumentDisplayComponent(store, route, router) {
        this.store = store;
        this.route = route;
        this.router = router;
        this.movies$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_entities_movie_selectors__WEBPACK_IMPORTED_MODULE_6__["selectMovie"]));
        this.selectedMovie = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_document_selectors__WEBPACK_IMPORTED_MODULE_5__["selectDocumentSelectedMovie"]));
        this.selectedFrame = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_document_selectors__WEBPACK_IMPORTED_MODULE_5__["selectDocumentSelectedFrame"]));
        this.content = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_document_selectors__WEBPACK_IMPORTED_MODULE_5__["selectDocumentContent"]));
        this.direction = 'horizontal';
    }
    DocumentDisplayComponent.prototype.ngOnInit = function () {
        var tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        document.body.appendChild(tag);
        this.id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
        console.log('Load Document', this.id);
        this.store.dispatch({ type: '[Document] Clear Document' });
        this.store.dispatch({ type: '[Document API] Load Document', payload: { id: this.id } });
        var Dictionary = /** @class */ (function () {
            function Dictionary() {
            }
            return Dictionary;
        }());
        function orderedCE(ids, entities) {
            var ces = [];
            console.log('START GENERATE ORDERED CE');
            for (var _i = 0, ids_1 = ids; _i < ids_1.length; _i++) {
                var id = ids_1[_i];
                var cecontent = eval(entities[id]);
                var ce = { id: id, type: cecontent.id, payload: JSON.parse(cecontent.payload) };
                ces.push(ce);
            }
            console.log('FINISH GENERATE ORDERED CE');
            return ces;
        }
        function makeCE(input) {
            var ces = [];
            console.log('START GENERATE CE');
            for (var _i = 0, input_1 = input; _i < input_1.length; _i++) {
                var i = input_1[_i];
                var ce = { id: i.id, type: i.type, payload: JSON.parse(i.payload) };
                console.log("kk", ce);
                ces.push(ce);
            }
            console.log('FINISH GENERATE CE');
            return ces;
        }
        // Object.assign({}, state, {pending: true, error: null});
        // TODO, check why v['content_element_index'] has to be eval-ed
        this.co = this.content.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (v) { return v !== null; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (v) {
            if (v == null) {
                return null;
            }
            console.log('START REORDER');
            var oce = orderedCE(eval(v['content_element_index']), v['content_elements']);
            console.log('FINISH REORDER');
            return oce;
        }));
        this.index = this.content.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (v) { return v !== null; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (v) { return eval(v['content_element_index']); }));
        // <app-omsubimage  [startFN]="ce.startFN" [endFN]="somi.endFN" [centerFN]="ce.centerFN"></app-omsubimage>
        //   this.co.subscribe (v => console.log(v));
    };
    DocumentDisplayComponent.prototype.mouseEnter = function (div) {
        console.log('mouse enter : ' + div);
    };
    DocumentDisplayComponent.prototype.mouseLeave = function (div) {
        console.log('mouse leave :' + div);
    };
    DocumentDisplayComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('player'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], DocumentDisplayComponent.prototype, "player", void 0);
    DocumentDisplayComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-document-display',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./document-display.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/document/document-display/document-display.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./document-display.component.css */ "./src/app/document/document-display/document-display.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DocumentDisplayComponent);
    return DocumentDisplayComponent;
}());



/***/ }),

/***/ "./src/app/document/document-display/omimage/omimage.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/document/document-display/omimage/omimage.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".outerdiv {\n  position: relative;\n  display: inline;\n}\n\n.omcanvas {\n/*  position: absolute; */\n  z-index: 0;\n}\n\n.overlaycanvas {\n  position: absolute;\n  z-index: 100;\n}\n\n.cursor-overlay {\n  position: absolute;\n  z-index: 100;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9jdW1lbnQvZG9jdW1lbnQtZGlzcGxheS9vbWltYWdlL29taW1hZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0FBQ0EseUJBQXlCO0VBQ3ZCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvZG9jdW1lbnQvZG9jdW1lbnQtZGlzcGxheS9vbWltYWdlL29taW1hZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vdXRlcmRpdiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuXG4ub21jYW52YXMge1xuLyogIHBvc2l0aW9uOiBhYnNvbHV0ZTsgKi9cbiAgei1pbmRleDogMDtcbn1cblxuLm92ZXJsYXljYW52YXMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDEwMDtcbn1cblxuLmN1cnNvci1vdmVybGF5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxMDA7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/document/document-display/omimage/omimage.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/document/document-display/omimage/omimage.component.ts ***!
  \************************************************************************/
/*! exports provided: OmImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OmImageComponent", function() { return OmImageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _entities_movie_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../entities/movie.selectors */ "./src/app/entities/movie.selectors.ts");
/* harmony import */ var _document_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../document.selectors */ "./src/app/document/document.selectors.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm5/store.js");








var OmImageComponent = /** @class */ (function () {
    function OmImageComponent(renderer, store, route) {
        this.renderer = renderer;
        this.store = store;
        this.route = route;
        this.movies$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["select"])(_entities_movie_selectors__WEBPACK_IMPORTED_MODULE_2__["selectMovie"]));
        this.selectedFrame = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["select"])(_document_selectors__WEBPACK_IMPORTED_MODULE_3__["selectDocumentSelectedFrame"]));
        this.selectedCE = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["select"])(_document_selectors__WEBPACK_IMPORTED_MODULE_3__["selectDocumentSelectedCE"]));
        this.selectedCEpos = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["select"])(_document_selectors__WEBPACK_IMPORTED_MODULE_3__["selectDocumentSelectedCEpos"]));
        this.selectedCEposDelta = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["select"])(_document_selectors__WEBPACK_IMPORTED_MODULE_3__["selectDocumentSelectedCEposDelta"]));
    }
    OmImageComponent.prototype.ngOnInit = function () {
        //   console.log ("NG INIT IN OM IMAGES")
        this.delta = this.e - this.s;
        this.showSummary = false;
        this.showCursor = false;
        //   this.selectedCEposDelta.subscribe (x => console.log(x));
        function pad(num, size) {
            var s = num + '';
            while (s.length < size) {
                s = '0' + s;
            }
            return s;
        }
        this.ainfos = [];
        for (var _i = 0; _i < this.n; _i++) {
            var luerl = 'static/cache/' +
                this.movieuuid + '/omi/'
                + pad(this.s, 8) + '_' + pad(this.e, 8) + '/'
                + pad(_i, 8) + '.jpg';
            var sframenr = Math.round(this.s + this.delta * (_i * 200) / this.n / 100.0);
            var eframenr = Math.round(this.s + this.delta * ((_i + 1) * 200) / this.n / 100.0);
            var ominfo = { s: sframenr, e: eframenr, url: luerl };
            this.ainfos.push(ominfo);
        }
        this.cuerl = 'static/cache/' +
            this.movieuuid + '/omi/'
            + pad(this.s, 8) + '_' + pad(this.e, 8) + '/'
            + pad(0, 8) + '.jpg';
        var cominfo = { cpos: -1, url: this.cuerl };
        this.compressOmImages = false;
        if (this.showSummary && (this.n > 2)) {
            this.compressOmImages = true;
            this.finfo = this.ainfos[0];
            this.linfo = this.ainfos[this.n - 1];
        }
        // console.log (this.cuerl);
        // console.log (this.subomis);
    };
    OmImageComponent.prototype.mouseEnter = function (div) {
        console.log('mouse enter : ' + div);
    };
    OmImageComponent.prototype.mouseLeave = function (div) {
        console.log('mouse leave :' + div);
    };
    OmImageComponent.prototype.mouseMove = function (i, e) {
        var _this = this;
        var framenr = Math.round(this.s + this.delta * (i * 200 + e.offsetX) / this.n / 100.0);
        this.store.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["select"])(_entities_movie_selectors__WEBPACK_IMPORTED_MODULE_2__["selectMovie"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (f) { return f(_this.movieuuid); })).subscribe(function (m) { return console.log(m.name, Math.round(framenr)); });
        //this.store.dispatch({ type: '[Document] Set Movie and Frame', payload: {movieuuid: this.movieuuid, fnr: framenr}} );
    };
    OmImageComponent.prototype.click = function (celem, i, e) {
        var framenr = Math.round(this.s + this.delta * (i * 200 + e.offsetX) / this.n / 100.0);
        var deltainframe = e.offsetX / 100;
        this.store.dispatch({ type: '[Document] Set Movie and Frame',
            payload: { movieuuid: this.movieuuid, fnr: framenr, ce: celem, cepos: i, ceposdelta: deltainframe } });
        this.selectedCEdeltaCursor = e.offsetX - 5;
        console.log('click : ', celem, i, deltainframe);
    };
    OmImageComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
    ], OmImageComponent.prototype, "s", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
    ], OmImageComponent.prototype, "e", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
    ], OmImageComponent.prototype, "n", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], OmImageComponent.prototype, "movieuuid", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], OmImageComponent.prototype, "ceuuid", void 0);
    OmImageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-omimage',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./omimage.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/document/document-display/omimage/omimage.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./omimage.component.css */ "./src/app/document/document-display/omimage/omimage.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], OmImageComponent);
    return OmImageComponent;
}());



/***/ }),

/***/ "./src/app/document/document.actions.ts":
/*!**********************************************!*\
  !*** ./src/app/document/document.actions.ts ***!
  \**********************************************/
/*! exports provided: DocumentActionTypes, LoadDocument, ClearDocument, SetSelectedMovieAndFrame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentActionTypes", function() { return DocumentActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadDocument", function() { return LoadDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClearDocument", function() { return ClearDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetSelectedMovieAndFrame", function() { return SetSelectedMovieAndFrame; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var DocumentActionTypes;
(function (DocumentActionTypes) {
    DocumentActionTypes["LoadDocument"] = "[Document] Load Document";
    DocumentActionTypes["ClearDocument"] = "[Document] Clear Document";
    DocumentActionTypes["SetSelectedMovieAndFrame"] = "[Document] Set Movie and Frame";
})(DocumentActionTypes || (DocumentActionTypes = {}));
var LoadDocument = /** @class */ (function () {
    function LoadDocument(payload) {
        this.payload = payload;
        this.type = DocumentActionTypes.LoadDocument;
    }
    return LoadDocument;
}());

var ClearDocument = /** @class */ (function () {
    function ClearDocument() {
        this.type = DocumentActionTypes.ClearDocument;
    }
    return ClearDocument;
}());

var SetSelectedMovieAndFrame = /** @class */ (function () {
    function SetSelectedMovieAndFrame(payload) {
        this.payload = payload;
        this.type = DocumentActionTypes.SetSelectedMovieAndFrame;
    }
    return SetSelectedMovieAndFrame;
}());



/***/ }),

/***/ "./src/app/document/document.module.ts":
/*!*********************************************!*\
  !*** ./src/app/document/document.module.ts ***!
  \*********************************************/
/*! exports provided: DocumentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentModule", function() { return DocumentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm5/effects.js");
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/youtube-player */ "./node_modules/@angular/youtube-player/__ivy_ngcc__/fesm5/youtube-player.js");
/* harmony import */ var _document_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./document.state */ "./src/app/document/document.state.ts");
/* harmony import */ var _document_api_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./document-api.effects */ "./src/app/document/document-api.effects.ts");
/* harmony import */ var _document_display_document_display_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./document-display/document-display.component */ "./src/app/document/document-display/document-display.component.ts");
/* harmony import */ var _document_display_contentelement_contentelement_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./document-display/contentelement/contentelement.component */ "./src/app/document/document-display/contentelement/contentelement.component.ts");
/* harmony import */ var _document_display_omimage_omimage_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./document-display/omimage/omimage.component */ "./src/app/document/document-display/omimage/omimage.component.ts");
/* harmony import */ var angular_split__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-split */ "./node_modules/angular-split/__ivy_ngcc__/fesm5/angular-split.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/table.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");





// VIDEO PLAYER







// MATERIAL


// TASKS
var DocumentModule = /** @class */ (function () {
    function DocumentModule() {
    }
    DocumentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_youtube_player__WEBPACK_IMPORTED_MODULE_5__["YouTubePlayerModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"],
                angular_split__WEBPACK_IMPORTED_MODULE_11__["AngularSplitModule"].forRoot(),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forFeature('document', _document_state__WEBPACK_IMPORTED_MODULE_6__["documentreducers"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsModule"].forFeature([_document_api_effects__WEBPACK_IMPORTED_MODULE_7__["DocumentApiEffects"]])
            ],
            declarations: [
                _document_display_document_display_component__WEBPACK_IMPORTED_MODULE_8__["DocumentDisplayComponent"],
                _document_display_contentelement_contentelement_component__WEBPACK_IMPORTED_MODULE_9__["ContentElementComponent"],
                _document_display_omimage_omimage_component__WEBPACK_IMPORTED_MODULE_10__["OmImageComponent"]
            ],
            exports: [_angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"]],
        })
    ], DocumentModule);
    return DocumentModule;
}());



/***/ }),

/***/ "./src/app/document/document.reducer.ts":
/*!**********************************************!*\
  !*** ./src/app/document/document.reducer.ts ***!
  \**********************************************/
/*! exports provided: initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _document_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./document.actions */ "./src/app/document/document.actions.ts");


var initialState = {
    content: null,
    selectedMovieUUID: '',
    selectedFrame: 0,
    selectedCE: '',
    selectedCEpos: -1,
    selectedCEposDelta: 0.0,
    simplecontent: null
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _document_actions__WEBPACK_IMPORTED_MODULE_1__["DocumentActionTypes"].LoadDocument: {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { content: action.payload.document, simplecontent: null });
            return state;
        }
        case _document_actions__WEBPACK_IMPORTED_MODULE_1__["DocumentActionTypes"].SetSelectedMovieAndFrame: {
            console.log('SELECT  SELECT :' + action.payload.movieuuid);
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { selectedMovieUUID: action.payload.movieuuid, selectedFrame: action.payload.fnr, selectedCE: action.payload.ce, selectedCEpos: action.payload.cepos, selectedCEposDelta: action.payload.ceposdelta });
            return state;
        }
        case _document_actions__WEBPACK_IMPORTED_MODULE_1__["DocumentActionTypes"].ClearDocument: {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { content: null, simplecontent: null });
            return state;
        }
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/document/document.selectors.ts":
/*!************************************************!*\
  !*** ./src/app/document/document.selectors.ts ***!
  \************************************************/
/*! exports provided: selectDocumentContent, selectDocumentSelectedMovie, selectDocumentSelectedFrame, selectDocumentSelectedCE, selectDocumentSelectedCEpos, selectDocumentSelectedCEposDelta */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectDocumentContent", function() { return selectDocumentContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectDocumentSelectedMovie", function() { return selectDocumentSelectedMovie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectDocumentSelectedFrame", function() { return selectDocumentSelectedFrame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectDocumentSelectedCE", function() { return selectDocumentSelectedCE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectDocumentSelectedCEpos", function() { return selectDocumentSelectedCEpos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectDocumentSelectedCEposDelta", function() { return selectDocumentSelectedCEposDelta; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var selectDocumentContent = function (state) { return state.document.document.content; };
var selectDocumentSelectedMovie = function (state) { return state.document.document.selectedMovieUUID; };
var selectDocumentSelectedFrame = function (state) { return state.document.document.selectedFrame; };
var selectDocumentSelectedCE = function (state) { return state.document.document.selectedCE; };
var selectDocumentSelectedCEpos = function (state) { return state.document.document.selectedCEpos; };
var selectDocumentSelectedCEposDelta = function (state) { return state.document.document.selectedCEposDelta; };


/***/ }),

/***/ "./src/app/document/document.state.ts":
/*!********************************************!*\
  !*** ./src/app/document/document.state.ts ***!
  \********************************************/
/*! exports provided: documentreducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "documentreducers", function() { return documentreducers; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _document_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./document.reducer */ "./src/app/document/document.reducer.ts");
/* harmony import */ var _document_api_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./document-api.reducer */ "./src/app/document/document-api.reducer.ts");



var documentreducers = {
    document: _document_reducer__WEBPACK_IMPORTED_MODULE_1__["reducer"],
    documentapi: _document_api_reducer__WEBPACK_IMPORTED_MODULE_2__["reducer"]
};


/***/ }),

/***/ "./src/app/documentlist/documentlist.component.css":
/*!*********************************************************!*\
  !*** ./src/app/documentlist/documentlist.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Movies Component's private CSS styles */\n\ntable {\n  width: 100%;\n}\n\n.selected {\n  background-color: #CFD8DC !important;\n  color: white;\n}\n\n.movies {\n  margin: 0 0 2em 0;\n  list-style-type: none;\n  padding: 0;\n  position: left;\n  width: 45em;\n  text-align: left;\n}\n\n.movies li {\n  cursor: pointer;\n  position: relative;\n  left: 0;\n  background-color: #EEE;\n  margin: .5em;\n  padding: .3em 0;\n  height: 1.6em;\n  border-radius: 4px;\n}\n\n.movies li.selected:hover {\n  background-color: #BBD8DC !important;\n  color: white;\n}\n\n.movies li:hover {\n  color: #607D8B;\n  background-color: #DDD;\n  left: .1em;\n}\n\n.movies .text {\n  position: relative;\n  top: -3px;\n}\n\n.movies .badge {\n  display: inline-block;\n  font-size: small;\n  color: white;\n  padding: 0.8em 0.7em 0 0.7em;\n  background-color: #607D8B;\n  line-height: 1em;\n  position: relative;\n  left: -1px;\n  top: -4px;\n  height: 1.8em;\n  margin-right: .8em;\n  border-radius: 4px 0 0 4px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9jdW1lbnRsaXN0L2RvY3VtZW50bGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDBDQUEwQzs7QUFFMUM7RUFDRSxXQUFXO0FBQ2I7O0FBR0E7RUFDRSxvQ0FBb0M7RUFDcEMsWUFBWTtBQUNkOztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsY0FBYztFQUNkLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGVBQWU7RUFDZixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0Usb0NBQW9DO0VBQ3BDLFlBQVk7QUFDZDs7QUFDQTtFQUNFLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsVUFBVTtBQUNaOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7QUFDWDs7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLDRCQUE0QjtFQUM1Qix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsU0FBUztFQUNULGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsMEJBQTBCO0FBQzVCIiwiZmlsZSI6InNyYy9hcHAvZG9jdW1lbnRsaXN0L2RvY3VtZW50bGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogTW92aWVzIENvbXBvbmVudCdzIHByaXZhdGUgQ1NTIHN0eWxlcyAqL1xuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5cbi5zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNDRkQ4REMgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLm1vdmllcyB7XG4gIG1hcmdpbjogMCAwIDJlbSAwO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIHBvc2l0aW9uOiBsZWZ0O1xuICB3aWR0aDogNDVlbTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5tb3ZpZXMgbGkge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VFRTtcbiAgbWFyZ2luOiAuNWVtO1xuICBwYWRkaW5nOiAuM2VtIDA7XG4gIGhlaWdodDogMS42ZW07XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5tb3ZpZXMgbGkuc2VsZWN0ZWQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkJEOERDICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5tb3ZpZXMgbGk6aG92ZXIge1xuICBjb2xvcjogIzYwN0Q4QjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RERDtcbiAgbGVmdDogLjFlbTtcbn1cbi5tb3ZpZXMgLnRleHQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTNweDtcbn1cbi5tb3ZpZXMgLmJhZGdlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IHNtYWxsO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDAuOGVtIDAuN2VtIDAgMC43ZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICM2MDdEOEI7XG4gIGxpbmUtaGVpZ2h0OiAxZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogLTFweDtcbiAgdG9wOiAtNHB4O1xuICBoZWlnaHQ6IDEuOGVtO1xuICBtYXJnaW4tcmlnaHQ6IC44ZW07XG4gIGJvcmRlci1yYWRpdXM6IDRweCAwIDAgNHB4O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/documentlist/documentlist.component.ts":
/*!********************************************************!*\
  !*** ./src/app/documentlist/documentlist.component.ts ***!
  \********************************************************/
/*! exports provided: DocumentListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentListComponent", function() { return DocumentListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _document_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../document.service */ "./src/app/document.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm5/store.js");





var DocumentListComponent = /** @class */ (function () {
    function DocumentListComponent(ds, route, router, store) {
        this.ds = ds;
        this.route = route;
        this.router = router;
        this.store = store;
        this.displayedColumns = ['name', 'uuid'];
    }
    DocumentListComponent.prototype.ngOnInit = function () {
        this.documents$ = this.ds.getDocuments();
    };
    DocumentListComponent.prototype.openDocument = function (row) {
        this.router.navigateByUrl('/document/' + row.id);
    };
    DocumentListComponent.ctorParameters = function () { return [
        { type: _document_service__WEBPACK_IMPORTED_MODULE_3__["DocumentService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }
    ]; };
    DocumentListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-documentlist',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./documentlist.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/documentlist/documentlist.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./documentlist.component.css */ "./src/app/documentlist/documentlist.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_document_service__WEBPACK_IMPORTED_MODULE_3__["DocumentService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]])
    ], DocumentListComponent);
    return DocumentListComponent;
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

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
/*! exports provided: selectMovieId, adapter, initialState, reducer, selectIds, selectEntities, selectAll, selectTotal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectMovieId", function() { return selectMovieId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return adapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIds", function() { return selectIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectEntities", function() { return selectEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return selectAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectTotal", function() { return selectTotal; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/entity */ "./node_modules/@ngrx/entity/__ivy_ngcc__/fesm5/entity.js");
/* harmony import */ var _movie_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./movie.actions */ "./src/app/entities/movie.actions.ts");
var _a;



function sortByMovieID(e1, e2) {
    return e1.id - e2.id;
}
function selectMovieId(m) {
    return m.uuid;
}
var adapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_1__["createEntityAdapter"])({
    selectId: selectMovieId,
    sortComparer: sortByMovieID
});
var initialState = adapter.getInitialState({
// additional entity state properties
});
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _movie_actions__WEBPACK_IMPORTED_MODULE_2__["MovieActionTypes"].AddMovie: {
            return adapter.addOne(action.payload.movie, state);
        }
        case _movie_actions__WEBPACK_IMPORTED_MODULE_2__["MovieActionTypes"].UpsertMovie: {
            return adapter.upsertOne(action.payload.movie, state);
        }
        case _movie_actions__WEBPACK_IMPORTED_MODULE_2__["MovieActionTypes"].AddMovies: {
            return adapter.addMany(action.payload.movies, state);
        }
        case _movie_actions__WEBPACK_IMPORTED_MODULE_2__["MovieActionTypes"].UpsertMovies: {
            return adapter.upsertMany(action.payload.movies, state);
        }
        case _movie_actions__WEBPACK_IMPORTED_MODULE_2__["MovieActionTypes"].UpdateMovie: {
            var ns = adapter.updateOne(action.payload.movie, state);
            return ns;
        }
        case _movie_actions__WEBPACK_IMPORTED_MODULE_2__["MovieActionTypes"].UpdateMovies: {
            return adapter.updateMany(action.payload.movies, state);
        }
        case _movie_actions__WEBPACK_IMPORTED_MODULE_2__["MovieActionTypes"].DeleteMovie: {
            return adapter.removeOne(action.payload.id, state);
        }
        case _movie_actions__WEBPACK_IMPORTED_MODULE_2__["MovieActionTypes"].DeleteMovies: {
            return adapter.removeMany(action.payload.ids, state);
        }
        case _movie_actions__WEBPACK_IMPORTED_MODULE_2__["MovieActionTypes"].LoadMovies: {
            return adapter.addAll(action.payload.movies, state);
        }
        case _movie_actions__WEBPACK_IMPORTED_MODULE_2__["MovieActionTypes"].ClearMovies: {
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm5/store.js");
/* harmony import */ var _movie_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./movie.reducer */ "./src/app/entities/movie.reducer.ts");



var _a = _movie_reducer__WEBPACK_IMPORTED_MODULE_2__["adapter"].getSelectors(), selectEntities = _a.selectEntities, selectAll = _a.selectAll;
var selectMovieState = function (state) { return state.movies; };
var selectAllMovies = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectMovieState, selectAll);
var selectMoviesEntities = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectMovieState, selectEntities);
var selectMovie = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectMoviesEntities, function (movie) { return function (id) { return movie[id]; }; });


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm5/store.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm5/effects.js");
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
    MovieApiEffects.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Actions"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], MovieApiEffects.prototype, "loadMovies$", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], MovieApiEffects.prototype, "syncMovie$", void 0);
    MovieApiEffects = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _movies_api_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./movies-api.actions */ "./src/app/entities/movies-api.actions.ts");


var initialState = {
    pending: false,
    error: null
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _movies_api_actions__WEBPACK_IMPORTED_MODULE_1__["MoviesAPIActionTypes"].LoadMovies: {
            console.log('MoviesAPIActionTypes.LoadMovies');
            return Object.assign({}, state, { pending: true, error: null });
        }
        case _movies_api_actions__WEBPACK_IMPORTED_MODULE_1__["MoviesAPIActionTypes"].LoadMoviesSucess: {
            console.log('MoviesAPIActionTypes.LoadMoviesSucess');
            return Object.assign({}, state, { pending: false });
        }
        case _movies_api_actions__WEBPACK_IMPORTED_MODULE_1__["MoviesAPIActionTypes"].LoadMoviesError: {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


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
    MessageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lc3NhZ2VzL21lc3NhZ2VzLmNvbXBvbmVudC5jc3MifQ== */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../message.service */ "./src/app/message.service.ts");



var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(messageService) {
        this.messageService = messageService;
    }
    MessagesComponent.prototype.ngOnInit = function () {
    };
    MessagesComponent.ctorParameters = function () { return [
        { type: _message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"] }
    ]; };
    MessagesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-messages',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./messages.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/messages/messages.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./messages.component.css */ "./src/app/messages/messages.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "./src/app/movie-detail/movie-detail.component.css":
/*!*********************************************************!*\
  !*** ./src/app/movie-detail/movie-detail.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".omi {\n  display: inline;\n}\n\n.subomi {\n  display: inline;\n}\n\nlabel {\n    display: inline-block;\n    width: 5em;\n    margin: .5em 0;\n    color: #607D8B;\n    font-weight: bold;\n  }\n\ninput {\n    height: 2em;\n    width: 40em;\n    font-size: 1em;\n    padding-left: .4em;\n  }\n\nbutton {\n    margin-top: 20px;\n    font-family: Arial;\n    background-color: #eee;\n    border: none;\n    padding: 5px 10px;\n    border-radius: 4px;\n    cursor: pointer; cursor: hand;\n  }\n\nbutton:hover {\n    background-color: #cfd8dc;\n  }\n\nbutton:disabled {\n    background-color: #eee;\n    color: #ccc;\n    cursor: auto;\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWUtZGV0YWlsL21vdmllLWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsVUFBVTtJQUNWLGNBQWM7SUFDZCxjQUFjO0lBQ2QsaUJBQWlCO0VBQ25COztBQUNBO0lBQ0UsV0FBVztJQUNYLFdBQVc7SUFDWCxjQUFjO0lBQ2Qsa0JBQWtCO0VBQ3BCOztBQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZUFBZSxFQUFFLFlBQVk7RUFDL0I7O0FBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7O0FBQ0E7SUFDRSxzQkFBc0I7SUFDdEIsV0FBVztJQUNYLFlBQVk7RUFDZCIsImZpbGUiOiJzcmMvYXBwL21vdmllLWRldGFpbC9tb3ZpZS1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vbWkge1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbi5zdWJvbWkge1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbmxhYmVsIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDVlbTtcbiAgICBtYXJnaW46IC41ZW0gMDtcbiAgICBjb2xvcjogIzYwN0Q4QjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICBpbnB1dCB7XG4gICAgaGVpZ2h0OiAyZW07XG4gICAgd2lkdGg6IDQwZW07XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgcGFkZGluZy1sZWZ0OiAuNGVtO1xuICB9XG4gIGJ1dHRvbiB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBmb250LWZhbWlseTogQXJpYWw7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjsgY3Vyc29yOiBoYW5kO1xuICB9XG4gIGJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NmZDhkYztcbiAgfVxuICBidXR0b246ZGlzYWJsZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gICAgY29sb3I6ICNjY2M7XG4gICAgY3Vyc29yOiBhdXRvO1xuICB9XG4iXX0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm5/store.js");
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
        this.id = this.route.snapshot.paramMap.get('id');
        // this.store.subscribe ( s  => console.log(s) );
    };
    MovieDetailComponent.prototype.makeOMImageDataStructure = function (cuts) {
        var omsl = [];
        var i = 0;
        var start = 0;
        for (var _i = 0, cuts_1 = cuts; _i < cuts_1.length; _i++) {
            var c = cuts_1[_i];
            var om = { id: i, startFN: start, endFN: c.fn - 1 };
            omsl.push(om);
            //   console.log (i, c);
            start = c.fn;
            i += 1;
        }
        return omsl;
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
    MovieDetailComponent.prototype.makeDocAndOmImages = function () {
        var _this = this;
        console.log('Start the Compute OM Images Process');
        this.store.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_entities_movie_selectors__WEBPACK_IMPORTED_MODULE_6__["selectMovie"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (f) { return f(_this.id); })).subscribe(function (m) { return _this.movieService.makeDocAndOmImages(m.id); });
    };
    MovieDetailComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _movie_service__WEBPACK_IMPORTED_MODULE_7__["MovieService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] }
    ]; };
    MovieDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movie-detail',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./movie-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/movie-detail/movie-detail.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./movie-detail.component.css */ "./src/app/movie-detail/movie-detail.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
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
    MovieService.prototype.makeDocAndOmImages = function (id) {
        var _this = this;
        console.log('Make Document and OM Images Cache in MOVIE SERVICES');
        var url = "/api/movie/" + id + "/command";
        var command = "{ \"command\": \"[MOVIE] MAKE DOC AND IMAGES\", \"parameters\": {\"silent\": \"true\"} }";
        this.http.post(url, command, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log("Make Document and OM Images id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('makeDocAndOmImages'))).subscribe(function () { return console.log('Make Document and OM Images Cache  command done'); });
    };
    MovieService.ctorParameters = function () { return [
        { type: _message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    MovieService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MovieService);
    return MovieService;
}());



/***/ }),

/***/ "./src/app/movies/movies.component.css":
/*!*********************************************!*\
  !*** ./src/app/movies/movies.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Movies Component's private CSS styles */\n\ntable {\n  width: 100%;\n}\n\n.selected {\n  background-color: #CFD8DC !important;\n  color: white;\n}\n\n.movies {\n  margin: 0 0 2em 0;\n  list-style-type: none;\n  padding: 0;\n  position: left;\n  width: 45em;\n  text-align: left;\n}\n\n.movies li {\n  cursor: pointer;\n  position: relative;\n  left: 0;\n  background-color: #EEE;\n  margin: .5em;\n  padding: .3em 0;\n  height: 1.6em;\n  border-radius: 4px;\n}\n\n.movies li.selected:hover {\n  background-color: #BBD8DC !important;\n  color: white;\n}\n\n.movies li:hover {\n  color: #607D8B;\n  background-color: #DDD;\n  left: .1em;\n}\n\n.movies .text {\n  position: relative;\n  top: -3px;\n}\n\n.movies .badge {\n  display: inline-block;\n  font-size: small;\n  color: white;\n  padding: 0.8em 0.7em 0 0.7em;\n  background-color: #607D8B;\n  line-height: 1em;\n  position: relative;\n  left: -1px;\n  top: -4px;\n  height: 1.8em;\n  margin-right: .8em;\n  border-radius: 4px 0 0 4px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWVzL21vdmllcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDBDQUEwQzs7QUFFMUM7RUFDRSxXQUFXO0FBQ2I7O0FBR0E7RUFDRSxvQ0FBb0M7RUFDcEMsWUFBWTtBQUNkOztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsY0FBYztFQUNkLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGVBQWU7RUFDZixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0Usb0NBQW9DO0VBQ3BDLFlBQVk7QUFDZDs7QUFDQTtFQUNFLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsVUFBVTtBQUNaOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7QUFDWDs7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLDRCQUE0QjtFQUM1Qix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsU0FBUztFQUNULGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsMEJBQTBCO0FBQzVCIiwiZmlsZSI6InNyYy9hcHAvbW92aWVzL21vdmllcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogTW92aWVzIENvbXBvbmVudCdzIHByaXZhdGUgQ1NTIHN0eWxlcyAqL1xuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5cbi5zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNDRkQ4REMgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLm1vdmllcyB7XG4gIG1hcmdpbjogMCAwIDJlbSAwO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIHBvc2l0aW9uOiBsZWZ0O1xuICB3aWR0aDogNDVlbTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5tb3ZpZXMgbGkge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VFRTtcbiAgbWFyZ2luOiAuNWVtO1xuICBwYWRkaW5nOiAuM2VtIDA7XG4gIGhlaWdodDogMS42ZW07XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5tb3ZpZXMgbGkuc2VsZWN0ZWQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkJEOERDICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5tb3ZpZXMgbGk6aG92ZXIge1xuICBjb2xvcjogIzYwN0Q4QjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RERDtcbiAgbGVmdDogLjFlbTtcbn1cbi5tb3ZpZXMgLnRleHQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTNweDtcbn1cbi5tb3ZpZXMgLmJhZGdlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IHNtYWxsO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDAuOGVtIDAuN2VtIDAgMC43ZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICM2MDdEOEI7XG4gIGxpbmUtaGVpZ2h0OiAxZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogLTFweDtcbiAgdG9wOiAtNHB4O1xuICBoZWlnaHQ6IDEuOGVtO1xuICBtYXJnaW4tcmlnaHQ6IC44ZW07XG4gIGJvcmRlci1yYWRpdXM6IDRweCAwIDAgNHB4O1xufVxuIl19 */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm5/store.js");
/* harmony import */ var _entities_movie_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../entities/movie.selectors */ "./src/app/entities/movie.selectors.ts");




var MoviesComponent = /** @class */ (function () {
    function MoviesComponent(store) {
        this.store = store;
        this.movies$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_entities_movie_selectors__WEBPACK_IMPORTED_MODULE_3__["selectAllMovies"]));
        this.movientitiedes$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_entities_movie_selectors__WEBPACK_IMPORTED_MODULE_3__["selectMoviesEntities"]));
        this.displayedColumns = ['id', 'name', 'stripe', 'cut', 'doc', 'uri'];
    }
    MoviesComponent.prototype.ngOnInit = function () {
        // this.store.subscribe ( s  => console.log(s) );
    };
    MoviesComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
    ]; };
    MoviesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movies',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./movies.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/movies/movies.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./movies.component.css */ "./src/app/movies/movies.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], MoviesComponent);
    return MoviesComponent;
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _entities_movie_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../entities/movie.reducer */ "./src/app/entities/movie.reducer.ts");
/* harmony import */ var _entities_movies_api_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../entities/movies-api.reducer */ "./src/app/entities/movies-api.reducer.ts");



var reducers = {
    movies: _entities_movie_reducer__WEBPACK_IMPORTED_MODULE_1__["reducer"],
    movieapi: _entities_movies_api_reducer__WEBPACK_IMPORTED_MODULE_2__["reducer"]
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
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
    SseService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0cmlwZXMtb3ZlcmxheS9zdHJpcGVzLW92ZXJsYXkuY29tcG9uZW50LmNzcyJ9 */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");



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
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myCanvas'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], StripesOverlayComponent.prototype, "canvasRef", void 0);
    StripesOverlayComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-stripes-overlay',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./stripes-overlay.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/stripes-overlay/stripes-overlay.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./stripes-overlay.component.css */ "./src/app/stripes-overlay/stripes-overlay.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], StripesOverlayComponent);
    return StripesOverlayComponent;
}());



/***/ }),

/***/ "./src/app/stripes/stripes.component.css":
/*!***********************************************!*\
  !*** ./src/app/stripes/stripes.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".outerdiv {\n  position: relative;\n}\n\n.overlaycanvas {\n  position: absolute;\n  z-index: 100;\n}\n\n.stripeimagearray {\n  position: absolute;\n  z-index: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RyaXBlcy9zdHJpcGVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL3N0cmlwZXMvc3RyaXBlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm91dGVyZGl2IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ub3ZlcmxheWNhbnZhcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTAwO1xufVxuXG4uc3RyaXBlaW1hZ2VhcnJheSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMDtcbn1cbiJdfQ== */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
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
        this.renderer.setAttribute(this.imageCanvas.nativeElement, 'height', h.toString());
        this.drawImages();
    };
    StripesComponent.prototype.assignCutsAndDrawOverlay = function (cuts) {
        this.cuts = cuts;
        var lastfn = cuts[cuts.length - 1].fn;
        var h = 80 * Math.ceil(lastfn / 1500.0);
        this.renderer.setAttribute(this.overlayCanvas.nativeElement, 'height', h.toString());
        this.drawOverlay();
    };
    StripesComponent.prototype.getStripes = function () {
        var _this = this;
        this.movieService.getStripes(this.id)
            .subscribe(function (stripes) { return _this.assignStripesAndDrawImages(stripes); });
    };
    StripesComponent.prototype.getCuts = function () {
        var _this = this;
        this.movieService.getCuts(this.id)
            .subscribe(function (cuts) { return _this.assignCutsAndDrawOverlay(cuts); });
    };
    StripesComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _movie_service__WEBPACK_IMPORTED_MODULE_3__["MovieService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
    ], StripesComponent.prototype, "id", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('imageCanvas'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], StripesComponent.prototype, "imageCanvas", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('overlayCanvas'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], StripesComponent.prototype, "overlayCanvas", void 0);
    StripesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-stripes',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./stripes.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/stripes/stripes.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./stripes.component.css */ "./src/app/stripes/stripes.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _movie_service__WEBPACK_IMPORTED_MODULE_3__["MovieService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm5/store.js");
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
        // console.log (op);
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
                console.log('****************** RELOAD TASKS');
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
    SyncstoreService.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
        { type: _sse_service__WEBPACK_IMPORTED_MODULE_6__["SseService"] }
    ]; };
    SyncstoreService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"],
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm5/store.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm5/effects.js");
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
    TaskApiEffects.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Actions"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], TaskApiEffects.prototype, "loadTasks$", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], TaskApiEffects.prototype, "syncTask$", void 0);
    TaskApiEffects = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _task_api_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task-api.actions */ "./src/app/task/task-api.actions.ts");


var initialState = {
    pending: false,
    error: null
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _task_api_actions__WEBPACK_IMPORTED_MODULE_1__["TasksAPIActionTypes"].LoadTasks: {
            //      console.log ('TasksAPIActionTypes.LoadTasks');
            return Object.assign({}, state, { pending: true, error: null });
        }
        case _task_api_actions__WEBPACK_IMPORTED_MODULE_1__["TasksAPIActionTypes"].LoadTasksSucess: {
            //      console.log ('TasksAPIActionTypes.LoadTasksSucess');
            return Object.assign({}, state, { pending: false });
        }
        case _task_api_actions__WEBPACK_IMPORTED_MODULE_1__["TasksAPIActionTypes"].LoadTasksError: {
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n    width: 100%;\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFzay90YXNrLWxpc3QvdGFzay1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0VBQ2IiLCJmaWxlIjoic3JjL2FwcC90YXNrL3Rhc2stbGlzdC90YXNrLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAiXX0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm5/store.js");
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
    TaskListComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
    ]; };
    TaskListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'task-list',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./task-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/task/task-list/task-list.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./task-list.component.css */ "./src/app/task/task-list/task-list.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm5/effects.js");
/* harmony import */ var _task_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./task.state */ "./src/app/task/task.state.ts");
/* harmony import */ var _task_api_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./task-api.effects */ "./src/app/task/task-api.effects.ts");
/* harmony import */ var _task_list_task_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./task-list/task-list.component */ "./src/app/task/task-list/task-list.component.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/table.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");








// MATERIAL


// TASKS
var TaskModule = /** @class */ (function () {
    function TaskModule() {
    }
    TaskModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/entity */ "./node_modules/@ngrx/entity/__ivy_ngcc__/fesm5/entity.js");
/* harmony import */ var _task_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task.actions */ "./src/app/task/task.actions.ts");
var _a;



function sortByMovieID(e1, e2) {
    if (e1.movieID === e2.movieID) {
        return (e1.progress - e2.progress);
    }
    else {
        return (e1.movieID - e2.movieID);
    }
}
var adapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_1__["createEntityAdapter"])({
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
        case _task_actions__WEBPACK_IMPORTED_MODULE_2__["TaskActionTypes"].AddTask: {
            return adapter.addOne(action.payload.task, state);
        }
        case _task_actions__WEBPACK_IMPORTED_MODULE_2__["TaskActionTypes"].UpsertTask: {
            return adapter.upsertOne(action.payload.task, state);
        }
        case _task_actions__WEBPACK_IMPORTED_MODULE_2__["TaskActionTypes"].AddTasks: {
            return adapter.addMany(action.payload.tasks, state);
        }
        case _task_actions__WEBPACK_IMPORTED_MODULE_2__["TaskActionTypes"].UpsertTasks: {
            return adapter.upsertMany(action.payload.tasks, state);
        }
        case _task_actions__WEBPACK_IMPORTED_MODULE_2__["TaskActionTypes"].UpdateTask: {
            return adapter.updateOne(action.payload.task, state);
        }
        case _task_actions__WEBPACK_IMPORTED_MODULE_2__["TaskActionTypes"].UpdateTasks: {
            return adapter.updateMany(action.payload.tasks, state);
        }
        case _task_actions__WEBPACK_IMPORTED_MODULE_2__["TaskActionTypes"].DeleteTask: {
            return adapter.removeOne(action.payload.id, state);
        }
        case _task_actions__WEBPACK_IMPORTED_MODULE_2__["TaskActionTypes"].DeleteTasks: {
            return adapter.removeMany(action.payload.ids, state);
        }
        case _task_actions__WEBPACK_IMPORTED_MODULE_2__["TaskActionTypes"].LoadTasks: {
            return adapter.addAll(action.payload.tasks, state);
        }
        case _task_actions__WEBPACK_IMPORTED_MODULE_2__["TaskActionTypes"].ClearTasks: {
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm5/store.js");
/* harmony import */ var _task_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task.reducer */ "./src/app/task/task.reducer.ts");



var _a = _task_reducer__WEBPACK_IMPORTED_MODULE_2__["adapter"].getSelectors(), selectEntities = _a.selectEntities, selectAll = _a.selectAll;
var selectTaskState = function (state) { return state.task.tasks; };
var selectAllTasks = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectTaskState, selectAll);
var selectTasksEntities = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectTaskState, selectEntities);


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _task_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task.reducer */ "./src/app/task/task.reducer.ts");
/* harmony import */ var _task_api_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task-api.reducer */ "./src/app/task/task-api.reducer.ts");



var taskreducers = {
    tasks: _task_reducer__WEBPACK_IMPORTED_MODULE_1__["reducer"],
    tasksapi: _task_api_reducer__WEBPACK_IMPORTED_MODULE_2__["reducer"]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm5/platform-browser-dynamic.js");
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

module.exports = __webpack_require__(/*! /Users/Shared/SWD/HCAILAB-GITHUB-REPS/app-video-score/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map