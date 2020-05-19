function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["project-project-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/project/project.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/project/project.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProjectProjectPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n\n    <ion-buttons slot=\"start\" (click)=\"returnHome()\">\n      <ion-icon class=\"mediumIcon ion-float-left\" name=\"arrow-round-back\"></ion-icon>\n      </ion-buttons>\n    <ion-card-content>\n      \n      <ion-title class=\"bold twentyPt\">\n        {{ project?.title }}\n      </ion-title>\n    </ion-card-content>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <!-- FAB -->\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n      <ion-fab-button color=\"tertiary\">\n        <ion-icon name=\"add\"></ion-icon>\n      </ion-fab-button>\n  \n      <ion-fab-list side=\"top\">\n        <ion-fab-button color=\"tertiary\" data-desc=\"Project\">\n          <ion-icon name=\"construct\"></ion-icon>\n        </ion-fab-button>\n        <ion-fab-button color=\"tertiary\" data-desc=\"Item\">\n          <ion-icon name=\"pricetag\"></ion-icon>\n        </ion-fab-button>\n      </ion-fab-list>\n    </ion-fab>\n    \n  <ion-list>\n    <ion-list-header>\n      <ion-label color=\"dark\" class=\"bold fifteenPt\">Items</ion-label>\n    </ion-list-header>\n\n          \n    <ion-item *ngFor=\"let item of project?.items;\">\n      <ion-avatar slot=\"start\">\n        \n        <img *ngIf=\"item.image\" src=\"item.image\">\n        <ion-icon #elseBlock class=\"mediumIcon ion-float-left\" name=\"radio-button-off\"></ion-icon>\n      </ion-avatar>\n      <ion-label>\n        <h2>{{item.title}}</h2>\n        <p>{{item.description}}</p>\n      </ion-label>\n    </ion-item>\n    </ion-list>\n    \n\n</ion-content >";
    /***/
  },

  /***/
  "./src/app/project/project-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/project/project-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: ProjectPageRoutingModule */

  /***/
  function srcAppProjectProjectRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectPageRoutingModule", function () {
      return ProjectPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _project_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./project.page */
    "./src/app/project/project.page.ts");

    var routes = [{
      path: '',
      component: _project_page__WEBPACK_IMPORTED_MODULE_3__["ProjectPage"]
    }];

    var ProjectPageRoutingModule = function ProjectPageRoutingModule() {
      _classCallCheck(this, ProjectPageRoutingModule);
    };

    ProjectPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ProjectPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/project/project.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/project/project.module.ts ***!
    \*******************************************/

  /*! exports provided: ProjectPageModule */

  /***/
  function srcAppProjectProjectModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectPageModule", function () {
      return ProjectPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _project_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./project-routing.module */
    "./src/app/project/project-routing.module.ts");
    /* harmony import */


    var _project_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./project.page */
    "./src/app/project/project.page.ts");

    var ProjectPageModule = function ProjectPageModule() {
      _classCallCheck(this, ProjectPageModule);
    };

    ProjectPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _project_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProjectPageRoutingModule"]],
      declarations: [_project_page__WEBPACK_IMPORTED_MODULE_6__["ProjectPage"]]
    })], ProjectPageModule);
    /***/
  },

  /***/
  "./src/app/project/project.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/project/project.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppProjectProjectPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3QvcHJvamVjdC5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/project/project.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/project/project.page.ts ***!
    \*****************************************/

  /*! exports provided: ProjectPage */

  /***/
  function srcAppProjectProjectPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectPage", function () {
      return ProjectPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_projects_projects_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/projects/projects.service */
    "./src/app/services/projects/projects.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");

    var ProjectPage =
    /*#__PURE__*/
    function () {
      function ProjectPage(navCtrl, route, projectsService) {
        _classCallCheck(this, ProjectPage);

        this.navCtrl = navCtrl;
        this.route = route;
        this.projectsService = projectsService;
      }

      _createClass(ProjectPage, [{
        key: "returnHome",
        value: function returnHome() {
          this.navCtrl.back();
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var projectId = this.route.snapshot.paramMap.get('id');
          this.project = this.projectsService.getProject(projectId);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProjectPage;
    }();

    ProjectPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _services_projects_projects_service__WEBPACK_IMPORTED_MODULE_3__["ProjectsService"]
      }];
    };

    ProjectPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-project',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./project.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/project/project.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./project.page.scss */
      "./src/app/project/project.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_projects_projects_service__WEBPACK_IMPORTED_MODULE_3__["ProjectsService"]])], ProjectPage);
    /***/
  }
}]);
//# sourceMappingURL=project-project-module-es5.js.map