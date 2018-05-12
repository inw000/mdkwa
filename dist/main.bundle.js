webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<web-nav></web-nav>\n<router-outlet></router-outlet>\n<div class=\"add-back\">\n<app-footer></app-footer>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
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

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__sub_web_nav_web_nav_component__ = __webpack_require__("./src/app/sub/web-nav/web-nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__course_course_component__ = __webpack_require__("./src/app/course/course.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__sub_nav_jumbotron_nav_jumbotron_component__ = __webpack_require__("./src/app/sub/nav-jumbotron/nav-jumbotron.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__sub_profile_profile_component__ = __webpack_require__("./src/app/sub/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__sub_footer_footer_component__ = __webpack_require__("./src/app/sub/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__sub_course_show_course_show_component__ = __webpack_require__("./src/app/sub/course-show/course-show.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__content_genetics_genetics_component__ = __webpack_require__("./src/app/content/genetics/genetics.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__problem_test1_test1_component__ = __webpack_require__("./src/app/problem/test1/test1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__content_material_material_component__ = __webpack_require__("./src/app/content/material/material.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__problem_test2_test2_component__ = __webpack_require__("./src/app/problem/test2/test2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__content_material_2_material_2_component__ = __webpack_require__("./src/app/content/material-2/material-2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__content_material_3_material_3_component__ = __webpack_require__("./src/app/content/material-3/material-3.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__content_material_4_material_4_component__ = __webpack_require__("./src/app/content/material-4/material-4.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__content_material_5_material_5_component__ = __webpack_require__("./src/app/content/material-5/material-5.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__content_engineering_engineering_component__ = __webpack_require__("./src/app/content/engineering/engineering.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__content_evolution_evolution_component__ = __webpack_require__("./src/app/content/evolution/evolution.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__problem_test3_test3_component__ = __webpack_require__("./src/app/problem/test3/test3.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__problem_test4_test4_component__ = __webpack_require__("./src/app/problem/test4/test4.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_16__login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'dashboard',
        component: __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_component__["a" /* DashboardComponent */]
    },
    {
        path: 'course',
        component: __WEBPACK_IMPORTED_MODULE_10__course_course_component__["a" /* CourseComponent */]
    },
    {
        path: 'course/@genetics',
        component: __WEBPACK_IMPORTED_MODULE_15__content_genetics_genetics_component__["a" /* GeneticsComponent */]
    },
    {
        path: 'test/@genetics',
        component: __WEBPACK_IMPORTED_MODULE_17__problem_test1_test1_component__["a" /* Test1Component */]
    },
    {
        path: 'course/@genetic-material',
        component: __WEBPACK_IMPORTED_MODULE_18__content_material_material_component__["a" /* MaterialComponent */]
    },
    {
        path: 'test/@genetic-material',
        component: __WEBPACK_IMPORTED_MODULE_19__problem_test2_test2_component__["a" /* Test2Component */]
    },
    {
        path: 'test/@genetic-engineering',
        component: __WEBPACK_IMPORTED_MODULE_26__problem_test3_test3_component__["a" /* Test3Component */]
    },
    {
        path: 'test/@evolution',
        component: __WEBPACK_IMPORTED_MODULE_27__problem_test4_test4_component__["a" /* Test4Component */]
    },
    {
        path: 'course/@genetic-material-2',
        component: __WEBPACK_IMPORTED_MODULE_20__content_material_2_material_2_component__["a" /* Material2Component */]
    },
    {
        path: 'course/@genetic-material-3',
        component: __WEBPACK_IMPORTED_MODULE_21__content_material_3_material_3_component__["a" /* Material3Component */]
    },
    {
        path: 'course/@genetic-material-4',
        component: __WEBPACK_IMPORTED_MODULE_22__content_material_4_material_4_component__["a" /* Material4Component */]
    },
    {
        path: 'course/@genetic-material-5',
        component: __WEBPACK_IMPORTED_MODULE_23__content_material_5_material_5_component__["a" /* Material5Component */]
    }, {
        path: 'course/@genetic-engineering',
        component: __WEBPACK_IMPORTED_MODULE_24__content_engineering_engineering_component__["a" /* EngineeringComponent */]
    }, {
        path: 'course/@evolution',
        component: __WEBPACK_IMPORTED_MODULE_25__content_evolution_evolution_component__["a" /* EvolutionComponent */]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_9__sub_web_nav_web_nav_component__["a" /* WebNavComponent */],
                __WEBPACK_IMPORTED_MODULE_10__course_course_component__["a" /* CourseComponent */],
                __WEBPACK_IMPORTED_MODULE_11__sub_nav_jumbotron_nav_jumbotron_component__["a" /* NavJumbotronComponent */],
                __WEBPACK_IMPORTED_MODULE_12__sub_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_13__sub_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_14__sub_course_show_course_show_component__["a" /* CourseShowComponent */],
                __WEBPACK_IMPORTED_MODULE_15__content_genetics_genetics_component__["a" /* GeneticsComponent */],
                __WEBPACK_IMPORTED_MODULE_16__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_17__problem_test1_test1_component__["a" /* Test1Component */],
                __WEBPACK_IMPORTED_MODULE_18__content_material_material_component__["a" /* MaterialComponent */],
                __WEBPACK_IMPORTED_MODULE_19__problem_test2_test2_component__["a" /* Test2Component */],
                __WEBPACK_IMPORTED_MODULE_20__content_material_2_material_2_component__["a" /* Material2Component */],
                __WEBPACK_IMPORTED_MODULE_21__content_material_3_material_3_component__["a" /* Material3Component */],
                __WEBPACK_IMPORTED_MODULE_22__content_material_4_material_4_component__["a" /* Material4Component */],
                __WEBPACK_IMPORTED_MODULE_23__content_material_5_material_5_component__["a" /* Material5Component */],
                __WEBPACK_IMPORTED_MODULE_24__content_engineering_engineering_component__["a" /* EngineeringComponent */],
                __WEBPACK_IMPORTED_MODULE_25__content_evolution_evolution_component__["a" /* EvolutionComponent */],
                __WEBPACK_IMPORTED_MODULE_26__problem_test3_test3_component__["a" /* Test3Component */],
                __WEBPACK_IMPORTED_MODULE_27__problem_test4_test4_component__["a" /* Test4Component */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__data_service__["a" /* DataService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/content/engineering/engineering.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/content/engineering/engineering.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"little-margin-res\"></div>\n<div class=\"container-fluid content-fluid\">\n  <div class=\"large-margin\"></div>\n  <div class=\"panel panel-default\">\n      <div class=\"panel-img\" style=\"position:relative;background-image:url(assets/img/contents/3/preview.jpeg);background-position: 50% 40%;\"></div>\n    <div class=\"panel-body\" >\n      <br>\n      <p _ngcontent-c3=\"\" style=\"padding-left: 21px;padding-right: 21px;font-family: mn-me;padding-top: 14px;background-color:white;position: absolute;\" class=\"emp\" class=\"margin-res\">บทที่ 3 พันธุวิศวกรรม</p></div>\n    <hr>\n    <div class=\"panel-body padding-content\">\n      <div class=\"small-margin\"></div>\n      <div class=\"quote\">\n        That's one small step for a man,<br>\n      one giant leap for mankind.</div>\n      <div class=\"small-margin\"></div>\n      <br>\n      <p class=\"font-res\" style=\"font-family: mn-con;\">\n        <b>พันธุวิศวกรรม</b><br>คือการดัดแปลงหรือตัดต่อยีนเพื่อสร้าง สิ่งมีชีวิตในแบบที่เราต้องการ\n        มักจะใช้ในด้านพืชและอาหาร</p><br><br>\n\n        <p class=\"font-res\" style=\"font-family: mn-con;\">\n          สิ่งมีชีวิตดัดแปลงพันธุกรรม (GMOs)<br></p>\n          <ul _ngcontent-c3=\"\" class=\"font-res\" style=\"font-family: mn-con;\">\n            <li _ngcontent-c3=\"\" style=\"margin-bottom: 15px;\">พืชดัดแปลงพันธุกรรม</li>\n\n            <li _ngcontent-c3=\"\" style=\"margin-bottom: 15px;\">พืช BT ที่ฆ่าหนอนได้ โดยเอายีนของแบคทีเรียที่หนอนเกลียดมาใส่\n            </li>\n            <li _ngcontent-c3=\"\" style=\"margin-bottom: 15px;\">ข้าวสีทอง (สีออกเหลืองๆ) สามารถสร้างวิตามิน A ได้</li>\n            <li _ngcontent-c3=\"\" style=\"margin-bottom: 15px;\">มะเขือเทศที่ไม่สร้าง ethylene ทำให้สุกช้า วางขายได้นาน ไม่เหี่ยวเร็ว\n            </li>\n        </ul>\n        <div class=\"large-margin\"></div>\n          <img class=\"center-block\" src=\"assets/img/contents/3/1.jpg\" width=\"100%\" height=\"100%\">\n          <p _ngcontent-c3=\"\" class=\"font-res text-center re\" style=\"color: darkgrey;margin-top: 10px;font-size: 25px;\">ข้าวสีทอง</p>\n          <div class=\"large-margin\"></div>\n\n        <p class=\"font-res\" style=\"font-family: mn-con;\">\n          สัตว์ดัดแปลงพันธุกรรม (transgenic animal)<br></p>\n          <ul _ngcontent-c3=\"\" class=\"font-res\" style=\"font-family: mn-con;\">\n            <li _ngcontent-c3=\"\" style=\"margin-bottom: 15px;\">หมูเรืองแสง เกิดจากได้รับยีนเรืองแสงจากแมงกระพรุน ทำให้เรืองแสงในที่มืดได้</li>\n\n            <li _ngcontent-c3=\"\" style=\"margin-bottom: 15px;\">ปลาแซลมอนที่มีตัวใหญ่กว่า และเนื้อเยอะกว่าแซลมอนปกติ\n            </li>\n          </ul>\n          <div class=\"large-margin\"></div>\n          <img class=\"center-block\" src=\"assets/img/contents/3/2.jpg\" width=\"100%\" height=\"100%\">\n          <p _ngcontent-c3=\"\" class=\"font-res text-center re\" style=\"color: darkgrey;margin-top: 10px;font-size: 25px;\">แซลมอน GM กับแซลมอนธรรมดา</p>\n          <div class=\"large-margin\"></div>\n\n        <p class=\"font-res\" style=\"font-family: mn-con;\">\n          <b>1. การโคลนยีน</b><br>\n          ก็คือการทำ DNA replication นั่นแหละ เพียงแต่เป็นการสังเคราะห์ขึ้น ไม่ใช่รอให้เกิดโดยธรรมชาติ<br>\n          มีวิธีดังนี้\n        </p>\n        <br><br>\n\n        <p class=\"font-res\" style=\"font-family: mn-con;\">\n          1.1. การโคลนยีนโดยใช้ plasmid ของแบคทีเรีย<br>\n          Plasmid ก็คือ DNA ของพวก prokaryote โดยจะเป็นวงแหวนและลอยอยู่นอกนิวเคลียส<br>\nโดยขั้นตอนคือ\n        </p>\n        <div class=\"large-margin\"></div>\n          <img class=\"center-block\" src=\"assets/img/contents/3/3.jpg\" width=\"100%\" height=\"100%\">\n          <p _ngcontent-c3=\"\" class=\"font-res text-center re\" style=\"color: darkgrey;margin-top: 10px;font-size: 25px;\">การโคลนยีนด้วย Plasmid</p>\n          <div class=\"large-margin\"></div>\n        <ul _ngcontent-c3=\"\" class=\"font-res\" style=\"font-family: mn-con;\">\n          <li _ngcontent-c3=\"\" style=\"margin-bottom: 15px;\">1. นำ Plasmid ออกจากแบคทีเรีย และนำเตรียม gene ที่เราต้องการโคลน</li>\n\n          <li _ngcontent-c3=\"\" style=\"margin-bottom: 15px;\">2. ตัด Plasmid ของแบคทีเรียออกแค่ในบริเวณที่เราจะแก้ไข เรียกเอนไซม์ที่ตัดว่า เอนไซม์ตัดจำเพาะ (restriction enzyme)\n          </li>\n\n          <li _ngcontent-c3=\"\" style=\"margin-bottom: 15px;\">3. Plasmid ก็จะถูกเปิดออก เรียกว่า พาหะ หรือ Vector แล้วเราก็เอายีนใส่เข้าไปด้วยเอนไซม์ ligase ก็จะได้ plasmid ที่มียีนเราอยู่ เรียกว่า recombinant DNA หรือ DNA สายผสม\n          </li>\n\n          <li _ngcontent-c3=\"\" style=\"margin-bottom: 15px;\">4. นำ Plasmid ที่ได้กลับสู่เซลล์แบคทีเรียตัวเดิมที่ดึงออกมาอีกครั้ง นำไปเลี้ยงจนได้เป็นกลุ่ม (โคโลนี) จำนวนยีนที่ฝากไปกับพลาสมิดจะเพิ่มขึ้นเรื่อยๆพร้อมกับการแบ่งเซลล์ของแบคทีเรียนั่นเอง\n          </li>\n      </ul><br><br>\n\n      <p class=\"font-res\" style=\"font-family: mn-con;\">\n        ทีนี้มันจะมีแบคทีเรียบางตัวที่ Plasmid ไม่สามารถเข้าไปคืนได้ ทำให้กลายเป็นแบคทีเรียที่เราไม่ต้องการ<br><br>\nวิธีจัดการทำได้โดยการให้ยาปฏิชีวนะ เนื่องจาก Plasmid จะมียีนต้านยาปฏิชีวนะอยู่ ทำให้แบคทีเรียที่เราตัดต่อ Plasmid ถูกต้องสมบูรณ์จะรอด แต่แบคทีเรียที่ตัดต่อไม่สมบูรณ์ก็จะไม่รอด\n      </p><br><br>\n\n      <div class=\"large-margin\"></div>\n          <img class=\"center-block\" src=\"assets/img/contents/3/4.gif\" width=\"100%\" height=\"100%\">\n          <p _ngcontent-c3=\"\" class=\"font-res text-center re\" style=\"color: darkgrey;margin-top: 10px;font-size: 25px;\">โครงสร้าของ ​Plasmid จะเห็นว่ามียีนกันยาปฏิชีวนะด้วย (แถบน้ำเงิน)</p>\n          <div class=\"large-margin\"></div>\n\n      <p class=\"font-res\" style=\"font-family: mn-con;\">\n      <b>1.2 การโคลนยีนโดยใช้ PCR (polymerase chain reaction)</b><br>\n      วิธีนี้จะไม่ใช้สิ่งมีชีวิต แต่ทำในเครื่อง thermocycler ที่ตั้งเวลาและอุณหภูมิได้ ข้อเสียคือมีโอกาสจำลองผิดพลาด<br>\nมี 3 ขั้นตอนย่อยวนไปเรื่อยๆคือ เพิ่มอุณหภูมิ ลดอุณหภูมิ และปรับอุณหภูมิ\n      </p>\n      <div class=\"large-margin\"></div>\n          <img class=\"center-block\" src=\"assets/img/contents/3/5.jpg\" width=\"100%\" height=\"100%\">\n          <p _ngcontent-c3=\"\" class=\"font-res text-center re\" style=\"color: darkgrey;margin-top: 10px;font-size: 25px;\">เครื่อง Thermocycler</p>\n          <div class=\"large-margin\"></div>\n\n      <ul _ngcontent-c3=\"\" class=\"font-res\" style=\"font-family: mn-con;\">\n        <li _ngcontent-c3=\"\" style=\"margin-bottom: 15px;\"><b>1.2.1. การเพิ่มอุณหภูมิ</b> ทำให้ DNA แยกจากกัน (denaturation)</li>\n\n        <li _ngcontent-c3=\"\" style=\"margin-bottom: 15px;\"><b>1.2.2. ลดอุณหภูมิ</b> ทำให้ ​DNA primer เข้ามาเกาะแม่แบบ\n        </li>\n\n        <li _ngcontent-c3=\"\" style=\"margin-bottom: 15px;\"><b>1.2.3. ปรับอุณหภูมิเพิ่ม</b> เพื่อให้ DNA polymerase ทำงานได้ และนำ nucleotide มาต่อกัน (polymerization)\n        </li>\n    </ul><br><br>\n\n    <p class=\"font-res\" style=\"font-family: mn-con;\">\n      ซึ่งเอนไซม์ DNA polymerase ปกติมันจะไม่ทนความร้อน ฉะนั้นวิธีนี้จึงต้องไปขุดหา DNA polymerase จากแบคทีเรียที่อาศัยในน้ำพุร้อน นั่นก็คือ <b class=\"li\">Thermus aquaticus</b> จึงเรียกว่าเอนไซม์ <b>Taq polymerase</b>\n      </p>\n      <div class=\"large-margin\"></div>\n          <img class=\"center-block\" src=\"assets/img/contents/3/6.jpg\" width=\"100%\" height=\"100%\">\n          <p _ngcontent-c3=\"\" class=\"font-res text-center re\" style=\"color: darkgrey;margin-top: 10px;font-size: 25px;\">Taq polymerase</p>\n          <div class=\"large-margin\"></div>\n\n      <p class=\"font-res\" style=\"font-family: mn-con;\">\n        <b>2. Gel electrophoresis</b><br>\n        เป็นการตรวจสอบ DNA ว่ามีไหมและมีมากน้อยเท่าไร โดยแยกชิ้นส่วนของ DNA ตามขนาด<br>\nมักใช้ในงานสืบสวนสอบสวนด้านนิติวิทยาศาสตร์ เพราะมันสามารถใช้ระบุตัวตนได้\n      </p>\n      <div class=\"large-margin\"></div>\n          <img class=\"center-block\" src=\"assets/img/contents/3/7.png\" width=\"100%\" height=\"100%\">\n          <p _ngcontent-c3=\"\" class=\"font-res text-center re\" style=\"color: darkgrey;margin-top: 10px;font-size: 25px;\">Gel elctrophoresis</p>\n          <div class=\"large-margin\"></div>\n\n        <p class=\"font-res\" style=\"font-family: mn-con;\">\n          หลักการสร้างลายพิมพ์คือ<br>\nDNA มีประจุลบ (เพราะหมู่ฟอสเฟต) เมื่อปล่อยกระแสไฟฟ้าไป DNA มันก็จะวิ่งหาขั้วบวก โดย DNA ขนาดเล็กก็จะวิ่งเร็วกว่า DNA ขนาดใหญ่<br>\nก็จะได้แถบเรียกว่า RFLP (restriction fragment length polymorphism) \n          </p>\n\n          <div class=\"large-margin\"></div>\n          <img class=\"center-block\" src=\"assets/img/contents/3/8.jpg\" width=\"100%\" height=\"100%\">\n          <p _ngcontent-c3=\"\" class=\"font-res text-center re\" style=\"color: darkgrey;margin-top: 10px;font-size: 25px;\">ตัวอย่างการใช้ในงานสืบสวน จะเห็นว่าผู้ต้องสงสัยคนที่ 2 DNA เหมือนกับคนร้าย ฉะนั้นผู้ต้องสงสัยคนที่ 2 คือคนร้าย</p>\n          <div class=\"large-margin\"></div>\n\n          <p class=\"font-res\" style=\"font-family: mn-con;\">\n            ซึ่งถ้าแถบของใครตรงกัน ก็แสดงว่ามีความเกี่ยวข้องกัน<br>\n*** ทุกแถบของลูก จะต้องมีในพ่อ หรือแม่ ถ้าแถบใดๆของลูกไม่มีในพ่อและแม่เลย แสดงว่าลูกอาจเป็นของบุคคลอื่น\n            </p><br><br>\n\n          \n          \n\n          \n          <a routerLink=\"/test/@genetic-engineering\" class=\"btn btn-success btn-block\">ทำแบบทดสอบ</a>\n          <br _ngcontent-c7=\"\"><br _ngcontent-c7=\"\">\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/content/engineering/engineering.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EngineeringComponent; });
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

var EngineeringComponent = /** @class */ (function () {
    function EngineeringComponent() {
    }
    EngineeringComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
    };
    EngineeringComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-engineering',
            template: __webpack_require__("./src/app/content/engineering/engineering.component.html"),
            styles: [__webpack_require__("./src/app/content/engineering/engineering.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EngineeringComponent);
    return EngineeringComponent;
}());



/***/ }),

/***/ "./src/app/content/evolution/evolution.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/content/evolution/evolution.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"little-margin-res\"></div>\n<div class=\"container-fluid content-fluid\">\n  <div class=\"large-margin\"></div>\n  <div class=\"panel panel-default\">\n      <div class=\"panel-img\" style=\"position:relative;background-image:url(assets/img/contents/4/preview.jpg);background-position: 50% 40%;\"></div>\n    <div class=\"panel-body\" >\n      <br>\n      <p _ngcontent-c3=\"\" style=\"padding-left: 21px;padding-right: 21px;font-family: mn-me;padding-top: 14px;background-color:white;position: absolute;\" class=\"emp\" class=\"margin-res\">บทที่ 4 วิวัฒนาการ</p></div>\n    <hr>\n    <div class=\"panel-body padding-content\">\n      <div class=\"small-margin\"></div>\n      <div class=\"quote\">\n        It is not the <b class=\"li emp\">strongest</b> of the species<br> that <b class=\"li emp\">survives</b>, nor the most <b class=\"li emp\">intelligent</b>, but<br>\n        <b class=\"li emp\">the one</b> that most responsive to <b class=\"li emp\">change</b>\n      </div>\n      <div class=\"small-margin\"></div>\n      <br>\n      <p class=\"font-res\" style=\"font-family: mn-con;\">\n        วิวัฒนาการ หมายถึง การเปลี่ยนแปลงอย่างค่อยเป็นค่อยไปของสิ่งมีชีวิตในแต่ละรุ่น เพื่อให้รุ่นต่อๆ ไปสามารถดำรงชีวิต อยู่รอดต่อไปได้ โดยอาศัยระยะเวลาอันยาวนาน</p><br><br>\n\n        <p class=\"font-res\" style=\"font-family: mn-con;\">\n          ระดับของวิวัฒนาการ<br></p>\n          <ul _ngcontent-c3=\"\" class=\"font-res\" style=\"font-family: mn-con;\">\n            <li _ngcontent-c3=\"\" style=\"margin-bottom: 15px;\">ระดับจุลภาค (Microevolution) ที่พิจารณาการเปลี่ยนแปลงลักษณะทางพันธุกรรมในระดับสปีชีส์เดี่ยวกัน ก่อให้เกิดความหลากหลายทางพันธุกรรม</li>\n\n            <li _ngcontent-c3=\"\" style=\"margin-bottom: 15px;\">ระดับมหาภาค (Macroevolution) ที่พิจารณาการเปลี่ยนแปลงลักษณะทางพันธุกรรมมากจนเกิดเป็นสปีชีส์ใหม่ ก่อให้เกิดความหลากหลายในจำนวนชนิดของสิ่งมีชีวิต</li>\n\n        \n        </ul>\n\n        <div class=\"large-margin\"></div>\n          <img class=\"center-block\" src=\"assets/img/contents/4/1.jpg\" width=\"100%\" height=\"100%\">\n          <p _ngcontent-c3=\"\" class=\"font-res text-center re\" style=\"color: darkgrey;margin-top: 10px;font-size: 25px;\">Microevolution</p>\n          <div class=\"large-margin\"></div>\n\n\n          <p class=\"font-res\" style=\"font-family: mn-con;\">\n            <b>หลักฐานที่แสดงถึงวิวัฒนาการ</b><br></p>\n\n          <ul _ngcontent-c3=\"\" class=\"font-res\" style=\"font-family: mn-con;\">\n            <li _ngcontent-c3=\"\" style=\"margin-bottom: 15px;\">1. ซากดึกดำบรรพ์ (Fossil)</li>\n\n            <li _ngcontent-c3=\"\" style=\"margin-bottom: 15px;\">2. หลักฐานจากกายวิภาคเปรียบเทียบ\n              <ul>\n                <li>Analogous structure คือ โครงสร้างที่องค์ประกอบต่างกัน แต่ทำหน้าที่เหมือนกัน เช่น ปีกนกกับปีกแมลง</li>\n                <li>Homologous structure คือ โครงสร้างที่องค์ประกอบเหมือนกัน แต่ทำหน้าที่ต่างกัน เช่น แขนคนกับขาแมว</li>\n              </ul>\n\n            </li>\n\n            <li _ngcontent-c3=\"\" style=\"margin-bottom: 15px;\">3. หลักฐานจากคัพภวิทยาเปรียบเทียบ ดูจาก Embryo ว่าเหมือนบรรพบุรุษของสิ่งมีชีวิตตัวใด</li>\n              \n            <li _ngcontent-c3=\"\" style=\"margin-bottom: 15px;\">4. หลักฐานระดับโมเลกุล ดูที่ DNA ว่าเหมือนกันอย่างไร</li>\n             \n            <li _ngcontent-c3=\"\" style=\"margin-bottom: 15px;\">5. หลักฐานทางชีวภูมิศาสตร์ นั่นจึงทำให้เกิดการกระจายพันธุ์พืชและสัตว์ออกไปได้หลากหลายสปีชีส์ตามที่ต่างๆ โดยขึ้นอยู่กับสภาพแวดล้อม\n            </li>\n              \n\n      \n        </ul><br><br>\n\n        <p class=\"font-res\" style=\"font-family: mn-con;\">\n          <b>แนวคิดเกี่ยวกับวิวัฒนาการของสิ่งมีชีวิต</b><br></p>\n\n        <ul _ngcontent-c3=\"\" class=\"font-res\" style=\"font-family: mn-con;\">\n          <li _ngcontent-c3=\"\" style=\"margin-bottom: 15px;\">1. แนวคิดของฌอง-แบบติสต์ ลามาร์ก<br>\n            มี 2 กฎ คือ\n            <ul>\n              <li>1.1. กฎใช้ไม่ใช้ อันไหนใช้มากก็จะแข็งแรง อันไหนไม่ใช้ก็จะเสื่อมไป</li>\n              <li>1.2. กฎการถ่ายทอดลักษณะที่เกิดขึ้นใหม่ ก็คือ ลักษณะใหม่จากข้อแรก จะถ่ายทอดไปยังรุ่นอื่นได้</li>\n            </ul>\n            <b>ซึ่งเมื่อพิสูจน์แล้ว ไม่จริงทั้ง 2 ข้อ</b> เพราะเรื่องเหล่านี้ไม่เกี่ยวข้องกับยีน และพันธุกรรม แต่เกิดจากการฝึกฝน\n          </li>\n\n          <li _ngcontent-c3=\"\" style=\"margin-bottom: 15px;\">2. แนวคิดของชาร์ลส์ ดาร์วิน\n            <ul>\n              <li>สิ่งมีชีวิตจะถูกคัดเลือกให้เหมาะสมกับสภาพแวดล้อม</li>\n              <li>ตัวที่มีลักษณะไม่เหมาะสมจะไม่สามารถอยู่รอดได้</li>\n              <li>ทำให้เกิดการปรับตัวของสิ่งมีชีวิตจนเกิดเป็นสปีชีส์ใหม่</li>\n            </ul>\n\n          </li>\n      </ul>\n\n      <div class=\"large-margin\"></div>\n          <img class=\"center-block\" src=\"assets/img/contents/4/2.gif\" width=\"100%\" height=\"100%\">\n          <p _ngcontent-c3=\"\" class=\"font-res text-center re\" style=\"color: darkgrey;margin-top: 10px;font-size: 25px;\">ปากของนกแต่ละ species ซึ่งเปลี่ยนแปลงตามสภาพแวดล้อม</p>\n          <div class=\"large-margin\"></div>\n\n        <p class=\"font-res\" style=\"font-family: mn-con;\">\n          ประชากร หมายถึง กลุ่มของสิ่งมีชีวิตที่เป็นชนิดเดียวกันอาศัยอยู่ในบริเวณเดียวกันในช่วงเวลาหนึ่ง<br><br>\nประชากรในเชิงวิวัฒนาการ หมายถึง สมาชิกในประชากรของสิ่งมีชีวิตสามารถผสมพันธุ์ระหว่างกันได้และให้ลูกที่ไม่เป็นหมัน<br><br>\nGene Pool หมายถึง ยีนทั้งหมดที่มีอยู่ในประชากรในช่วงเวลาหนึ่ง ซึ่งประกอบด้วยแอลลีล (Allele) ทุกแอลลีลจากทุกยีนของสมาชิก<br><br>\nพันธุศาสตร์ประชากร คือ การศึกษาเกี่ยวกับการกระจายและการเปลี่ยนแปลงของความถี่ของแอลลีลในประชากร</p>\n\n<div class=\"large-margin\"></div>\n          <img class=\"center-block\" src=\"assets/img/contents/4/3.jpeg\" width=\"100%\" height=\"100%\">\n          <p _ngcontent-c3=\"\" class=\"font-res text-center re\" style=\"color: darkgrey;margin-top: 10px;font-size: 25px;\">ยีนพูล</p>\n          <div class=\"large-margin\"></div>\n\n          <p class=\"font-res\" style=\"font-family: mn-con;\">\n            <b>ทฤษฏีของฮาร์ดี – ไวน์เบิร์ก</b><br>มีใจความสำคัญว่า “ความถี่ของแอลลีลและความถี่ของจีโนไทป์ในยีนพูลของประชากรจะมีค่าคงที่เสมอ ไม่ว่าจะมีการสืบพันธุ์ต่อเนื่องไปกี่รุ่นก็ตาม หากประชากรนั้นยังคงอยู่ภายใต้ภาวะการณ์เงื่อนไขจำกัด” ความถี่ของยีนที่อยู่ในสภาวะสมดุลเช่นนี้เรียกว่า Hardy – Weinbery Equilibrium หรือ HWE<br>ภาวะการณ์เงื่อนไขจำกัด มีดังนี้</p>\n  \n\n          <ul _ngcontent-c3=\"\" class=\"font-res\" style=\"font-family: mn-con;\">\n            <li _ngcontent-c3=\"\" style=\"margin-bottom: 15px;\">1. ประชากรมีขนาดใหญ่</li>\n\n            <li _ngcontent-c3=\"\" style=\"margin-bottom: 15px;\">2. มีการผสมพันธุ์แบบสุ่ม\n            </li>\n\n            <li _ngcontent-c3=\"\" style=\"margin-bottom: 15px;\">3. ไม่มีการอพยพ\n            </li>\n\n            <li _ngcontent-c3=\"\" style=\"margin-bottom: 15px;\">4. ไม่มีการคัดเลือกโดยธรรมชาติ\n            </li>\n\n            <li _ngcontent-c3=\"\" style=\"margin-bottom: 15px;\">5. ไม่มีมิวเทชั่น\n            </li>\n        </ul><br><br>\n\n        <p class=\"font-res\" style=\"font-family: mn-con;\">\n          <b>ข้อสังเกตตามทฤษฏีของฮาร์ดี ไวน์เบิร์ก</b><br>\n        </p>\n        <ul _ngcontent-c3=\"\" class=\"font-res\" style=\"font-family: mn-con;\">\n          <li _ngcontent-c3=\"\" style=\"margin-bottom: 15px;\">1. ภาวะการณ์เงื่อนไขจำกัดทั้ง 5 ข้อนี้ ไม่เกิดขึ้นตามธรรมชาติ</li>\n\n          <li _ngcontent-c3=\"\" style=\"margin-bottom: 15px;\">2. มักจะนำไปใช้ประโยชน์ในการคาดคะเนหาความถี่ของยีนและความถี่ของจีโนไทป์ของประชากร เช่น ใช้คะเนจำนวน ประชากรที่เป็นพาหะของยีนที่ทำให้เกิดโรคต่างๆ\n          </li>\n          </ul>\n\n          <p class=\"font-res\" style=\"font-family: mn-con;\">\n            <b>การหาความถี่ของแอลลีลและความถี่ของจีโนไทป์ในประชากร</b><br>\n            <b>ความถี่ของจีโนไทป์</b> คือ ปริมาณจีโนไทป์ชนิดต่างๆ เมื่อคิดเป็นสัดส่วน หรือร้อยละต่อปริมาณจีโนไทป์ทั้งหมดของยีนในตำแหน่งเดียวกันในประชากร เช่น<br>\n            ประชากรกระต่ายมีทั้งหมด 500 ตัว ถูกควบคุมโดยยีน 2 แอลลีล คือ Y ควบคุมลักษณะขนสีขาว และ y ควบคุมลักษณะขนสีส้ม จะมีจีโนไทป์ดังนี้<br>\n            YY = 270 ตัว<br>\n            Yy = 190 ตัว<br>\n            yy = 40 ตัว\n          </p>\n\n          <div class=\"large-margin\"></div>\n          <img class=\"center-block\" src=\"assets/img/contents/4/4.png\" width=\"100%\" height=\"100%\">\n          <p _ngcontent-c3=\"\" class=\"font-res text-center re\" style=\"color: darkgrey;margin-top: 10px;font-size: 25px;\">ความถี่ของจีโนไทป์</p>\n          <div class=\"large-margin\"></div>\n\n          \n\n        <p class=\"font-res\" style=\"font-family: mn-con;\">\n          <b>ความถี่ของแอลลีล</b> คือ ปริมาณของแอลลีลชนิดต่างๆ เมื่อคิดเป็นสัดส่วน หรือร้อยละต่อจำนวนแอลลีลทั้งหมดของยีนตำแหน่งเดียวกันในประชากร ถ้าทราบปริมาณของจีโนไทป์ชนิดต่างๆ ในประชากรก็สามารถคำนวณหาความถี่ของแอลลีลแต่ละชนิดได้<br>\n          จากตัวอย่างกระต่าย สามารถคำนวณหาค่าความถี่ของแอลลีล Y และ y ได้ดังนี้\n        </p>\n\n        <div class=\"large-margin\"></div>\n          <img class=\"center-block\" src=\"assets/img/contents/4/6.png\" width=\"100%\" height=\"100%\">\n          <p _ngcontent-c3=\"\" class=\"font-res text-center re\" style=\"color: darkgrey;margin-top: 10px;font-size: 25px;\">ความถี่แอลลีล</p>\n          <div class=\"large-margin\"></div>\n\n\n      <p class=\"font-res\" style=\"font-family: mn-con;\">\n        ดังนั้น<br>ประชากรกระต่าย 500 ตัวนี้ จะมี…<br>ความถี่ของแอลลีล Y = 0.73<br>ความถี่ของแอลลีล y = 0.27<br>\n        <b>ภาวะสมดุลของฮาร์ดี – ไวน์เบิร์ก (HWE)</b><br>\n\n        คือ ทฤษฎีที่มีใจความหลักว่า “ความถี่ของแอลลีล และจีโนไทป์ในยีนพูลของประชากรจะมีค่าคงที่ในทุกๆรุ่น ถ้าไม่มีปัจจัยอื่นเข้ามาเกี่ยวข้อง” จะสามารถใช้สูตรได้ดังนี้<br>p + q =1<br>p = ความถี่ของแอลลีลเด่น<br>q = ความถี่ของแอลลีลด้อย\nเมื่อนำมายกกำลังสองจะได้สูตร p^2 + 2pq + q^2 = 1<br>P^2 = ความถี่ของจีโนไทป์ที่เป็นเด่นพันธุ์แท้<br>2pq = ความถี่จีโนไทน์ที่เป็นเด่นพันธุ์ทาง<br>q^2 = ความถี่จีโนไทน์ที่เป็นด้อยพันธุ์แท้\n\n      </p>\n\n      <div class=\"large-margin\"></div>\n          <img class=\"center-block\" src=\"assets/img/contents/4/7.jpg\" width=\"100%\" height=\"100%\">\n          <p _ngcontent-c3=\"\" class=\"font-res text-center re\" style=\"color: darkgrey;margin-top: 10px;font-size: 25px;\">สมดุลของฮาร์ดี – ไวน์เบิร์ก (HWE)</p>\n          <div class=\"large-margin\"></div>\n\n      <p class=\"font-res\" style=\"font-family: mn-con;\">\n        <b>วิวัฒนาการของสิ่งมีชีวิต</b><br>\n        <b>พืช</b>\n        </p>\n\n        <ul _ngcontent-c3=\"\" class=\"font-res\" style=\"font-family: mn-con;\">\n          <li _ngcontent-c3=\"\" style=\"margin-bottom: 15px;\">\n              สันนิษฐานว่ามาจากบรรพบุรุษที่เป็นแอลจีสีเขียว ซึ่งมีชีวิตเมื่อหลายร้อยล้านปีมาแล้ว มีเหตุผลสนับสนุน ดังนี้<br>+ มีกระบวนการแบ่งเซลล์แบบไมโทซิส ในระยะที่มีการสร้าง Cell Plate คล้ายกัน<br>+ มีอาหารสะสมในเซลล์เป็นพวกแป้ง<br>+ ผนังเซลล์เป็นสารประกอบพวกเซลลูโลส<br>+ มีคลอโรพลาสต์ที่มีรงควัตถุจำพวกคลอโรฟิลล์เอและบี และยังมีแคโรทีนอยด์, แคโรทีน และแซนโทฟิลล์\n          </li>\n\n          <li _ngcontent-c3=\"\" style=\"margin-bottom: 15px;\">\n              พืชที่มีเนื้อเยื่อลำเลียงพวกแรกเกิดขึ้นประมาณ 425 ล้านปี<br>+ ไม่มีรากและใบที่แท้จริง มีแต่ลำต้นที่หยั่งลงดิน<br>+ ลำต้นที่อยู่เหนือพื้นดินทำหน้าที่สังเคราะห์แสง<br>+ คลอโรฟิลล์เป็นชนิดเดียวกับที่พบในสาหร่ายเขียว จึงเชื่อว่าพืชบกมีวิวัฒนาการมาจากสาหร่ายสีเขียว โดยเริ่มแรกอยู่ตามชายฝั่งทะเลแล้วค่อยๆ วิวัฒนาการขึ้นมาอยู่บนบก\n          </li>\n\n          <li _ngcontent-c3=\"\" style=\"margin-bottom: 15px;\">\n              พืชที่ไม่มีเนื้อเยื่อลำเลียง<br>+ เริ่มปรากฏให้เห็นเมื่อประมาณ 400 ล้านปีที่แล้ว<br>+ ขึ้นอยู่เป็นกลุ่มในบริเวณชื้นแฉะ\n          </li>\n\n          </ul>\n\n          <div class=\"large-margin\"></div>\n          <img class=\"center-block\" src=\"assets/img/contents/4/8.gif\" width=\"100%\" height=\"100%\">\n          <p _ngcontent-c3=\"\" class=\"font-res text-center re\" style=\"color: darkgrey;margin-top: 10px;font-size: 25px;\">วิวัฒนาการพืช</p>\n          <div class=\"large-margin\"></div>\n\n          <p class=\"font-res\" style=\"font-family: mn-con;\">\n              <b>มนุษย์</b>\n              </p>\n      \n              <ul _ngcontent-c3=\"\" class=\"font-res\" style=\"font-family: mn-con;\">\n                <li _ngcontent-c3=\"\" style=\"margin-bottom: 15px;\">\n                    เริ่มปรากฏขึ้นในช่วงปลายสมัยไมโอซีน</li>\n      \n                <li _ngcontent-c3=\"\" style=\"margin-bottom: 15px;\">\n                    บรรพบุรุษที่มีความคล้ายมนุษย์มากที่สุด คือ Australopithecus เป็นลิงวานรที่คล้ายลิงและคล้ายมนุษย์มีสมองขนาด 450-750 ลูกบาศก์เซนติเมตร ใช้เครื่องมือที่มีอยู่ตามธรรมชาติ</li>\n      \n      \n                </ul>\n\n                <div class=\"large-margin\"></div>\n                <img class=\"center-block\" src=\"assets/img/contents/4/9.jpg\" width=\"100%\" height=\"100%\">\n                <p _ngcontent-c3=\"\" class=\"font-res text-center re\" style=\"color: darkgrey;margin-top: 10px;font-size: 25px;\"><b class=\"li\">Australopithecus afarensis</b></p>\n                <div class=\"large-margin\"></div>\n\n\n                <p class=\"font-res\" style=\"font-family: mn-con;\">\n                    <b>จีนัส โฮโม(Genus Homo)</b>\n                    </p>\n            \n                    <ul _ngcontent-c3=\"\" class=\"font-res\" style=\"font-family: mn-con;\">\n                      <li _ngcontent-c3=\"\" style=\"margin-bottom: 15px;\">\n                          มีวิวัฒนาการเกิดขึ้นเมื่อประมาณ 2 ล้านปีที่แล้ว</li>\n            \n                      <li _ngcontent-c3=\"\" style=\"margin-bottom: 15px;\">\n                          จีนัสที่อายุมากที่สุด คือ โฮโม แฮบิลิส (Homo Habilis) ซึ่งเป็นบรรพบุรุษของมนุษย์ มีขนาดสมองประมาณ 680-800 ลูกบาศก์เซนติเมตร สูงประมาณ 1.5 เมตร มีกระดูกนิ้วมือคล้ายมนุษย์ปัจจุบันมาก ประดิษฐ์เครื่องมือหินกะเทาะไว้ใช้งาน อาจใช้ไม้, กระดูก หรือเขาสัตว์เป็นเครื่องมือด้วย อาจเป็นพวกแรกที่รู้จักการประดิษฐ์ขวาน สิ่ว มีดจากหิน\n                          </li>\n                      </ul>\n\n                      <p class=\"font-res\" style=\"font-family: mn-con;\">\n                          <b>โฮโม อิเรกตัส (Homo Erectus)</b>\n                          </p>\n                  \n                          <ul _ngcontent-c3=\"\" class=\"font-res\" style=\"font-family: mn-con;\">\n                            <li _ngcontent-c3=\"\" style=\"margin-bottom: 15px;\">\n                              มีอายุประมาณ 1.8 ล้านปีถึง 500,000 ปีที่ผ่านมา\n                              </li>\n                  \n                            <li _ngcontent-c3=\"\" style=\"margin-bottom: 15px;\">\n                                เป็นมนุษย์ยุคแรกเริ่มที่อพยพมาจากแอฟริกาไปยังเอเชียและยุโรป มีขนาดสมองประมาณ 750-1,200 ลูกบาศก์เซนติเมตร สูงประมาณ 1.6-1.8 เมตร เดินตัวตรงเหมือนมนุษย์มากขึ้นใช้ขวานหินไม่มีด้าม อาศัยอยู่ในถ้ำ รู้จักการใช้ไฟ</li>\n                            \n                                <li _ngcontent-c3=\"\" style=\"margin-bottom: 15px;\">\n                                    พบซากดึกดำบรรพ์ในแถบเอเชีย รวมทั้งหมู่เกะอินโดนีเซีย ซากที่พบในหมู่เกาะชวา เรียกว่า “มนุษย์ชวา” ซากที่พบในปักกิ่ง เรียก “มนุษย์ปักกิ่ง” คาดว่ามีสังคม วัฒนธรรมและภาษา\n                                  </li>\n\n\n                                  <li _ngcontent-c3=\"\" style=\"margin-bottom: 15px;\">\n                                      โฮโม อิเรกตัสในแอฟริกาเป็นบรรพบุรุษของโฮโม เซเปี้ยน (Homo Sapiens) หรือมนุษย์ปัจจุบัน<br>สมมติฐานเกี่ยวกับกำเนิดของมนุษย์ มี 2 แนวทางคือ<br>สมมติฐานที่ 1 เชื่อกันว่ามนุษย์ปัจจุบันที่อยู่ในต่างทวีปนั้นมีวิวัฒนาการมาจากโฮโม อิเรกตัสที่แพร่กระจายจากแอฟริกาไปอยู่ตามที่ต่างๆ แล้วจึงวิวัฒนาการเป็นมนุษย์ปัจจุบัน<br>สมมติฐานที่ 2 เชื่อว่ามนุษย์ปัจจุบันมีวิวัฒนาการมาจากโฮโม อิเรกตัสในแอฟริกาจากนั้นก็แพร่กระจายไปอยู่ตามที่ต่างๆ ทั่วโลกแต่สูญพันธุ์หมดเหลือเพียงกลุ่มในแอฟริกาที่วิวัฒนาการต่อเนื่องแล้วจึงแพร่กระจายไปทั่วโลก โดยไม่มีการผสมทางเผ่าพันธุ์กับมนุษย์ในที่อื่นเลย</li>\n                        \n                            \n                              </ul>\n\n                              <div class=\"large-margin\"></div>\n          <img class=\"center-block\" src=\"assets/img/contents/4/10.gif\" width=\"100%\" height=\"100%\">\n          <p _ngcontent-c3=\"\" class=\"font-res text-center re\" style=\"color: darkgrey;margin-top: 10px;font-size: 25px;\">วิวัฒนาการมนุษย์</p>\n          <div class=\"large-margin\"></div>\n\n      \n          \n          <a routerLink=\"/test/@evolution\" class=\"btn btn-success btn-block\">ทำแบบทดสอบ</a>\n          <br _ngcontent-c7=\"\"><br _ngcontent-c7=\"\">\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/content/evolution/evolution.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EvolutionComponent; });
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

var EvolutionComponent = /** @class */ (function () {
    function EvolutionComponent() {
    }
    EvolutionComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
    };
    EvolutionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-evolution',
            template: __webpack_require__("./src/app/content/evolution/evolution.component.html"),
            styles: [__webpack_require__("./src/app/content/evolution/evolution.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EvolutionComponent);
    return EvolutionComponent;
}());



/***/ }),

/***/ "./src/app/content/genetics/genetics.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/content/genetics/genetics.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"little-margin-res\"></div>\n<div class=\"container-fluid content-fluid\">\n  <div class=\"large-margin\"></div>\n  <div class=\"panel panel-default\">\n      <div class=\"panel-img\" style=\"position:relative;background-image:url(assets/img/contents/1-preview.jpg);background-position: 50% 40%;\"></div>\n    <div class=\"panel-body\" >\n      <br>\n      <p _ngcontent-c3=\"\" style=\"padding-left: 21px;padding-right: 21px;font-family: mn-me;padding-top: 14px;background-color:white;position: absolute;\" class=\"emp\" class=\"margin-res\">บทที่ 1 การถ่ายทอดทางพันธุกรรม</p></div>\n    <hr>\n    <div class=\"panel-body padding-content\">\n      <div class=\"small-margin\"></div>\n      <div class=\"quote\">\n        ปัญญาย่อมเกิดจากการใช้งาน\n      </div>\n      <div class=\"small-margin\"></div>\n      <br>\n      <p class=\"font-res\" style=\"font-family: mn-con;\">\n          เกรกอร์ โยฮันน์ เมนเดล (1822 - 1884) เป็นบิดาแห่งวิชาพันธุศาสตร์ <br><br>\n          \n          เมนเดลได้ศึกษาลักษณะ <b>7 ประการ</b>ในการผสมถั่วลันเตา <b class=\"li\">Pisum sativum</b><br>\n          </p>\n          \n          <div class=\"large-margin\"></div>\n          <img class=\"center-block zoom\" src=\"assets/img/contents/1-1.png\" width=\"100%\" height=\"100%\">\n          <p _ngcontent-c3=\"\" class=\"font-res text-center re\" style=\"color: darkgrey;margin-top: 10px;font-size: 25px;\">7 ลักษณะที่เมนเดลศึกษา *** สำคัญมากกกกก</p>\n          <div class=\"large-margin\"></div>\n\n          <p _ngcontent-c3=\"\" class=\"font-res\" style=\"font-family: mn-con;\">โดยเหตุผลที่เมนเดลเลือกถั่วลันเตาเป็นพืชทดลองเนื่องจาก</p>\n          <ul _ngcontent-c3=\"\" class=\"font-res\" style=\"font-family: mn-con;\">\n              <li _ngcontent-c3=\"\" style=\"margin-bottom: 15px;\">ลักษณะเด่นด้อยแตกต่างกันอย่างชัดเจน ก็คือถ้าไม่ขาวก็จะม่วง ไม่มีกึ่งขาวกึ่งม่วง ม่วงอ่อน</li>\n\n              <li _ngcontent-c3=\"\" style=\"margin-bottom: 15px;\">ปลูกง่าย โตไว ให้ลูกหลานจำนวนมาก เพราะต้องใช้ไม่ต่ำกว่า 1 พันต้น เพื่อความน่าเชื่อถือของการทดลอง</li>\n              <li _ngcontent-c3=\"\" style=\"margin-bottom: 15px;\">ผสมในดอกเดียวกันได้ เพราะเป็นดอกสมบูรณ์เพศ เนื่องจากในการทดลอง จะต้องป้องกันไม่ให้เรณูจากดอกอื่นที่ไม่ต้องการเข้ามาผสมกับเซลล์ไข่</li>\n          </ul>\n          <br><br>\n\n          <p _ngcontent-c7=\"\" class=\"font-res\" style=\"font-family: mn-con;color: #e9b668;/* text-decoration:  underline; */\"><i _ngcontent-c7=\"\" class=\"fa fa-lightbulb-o\"></i> การถ่ายทอดทางพันธุกรรม</p>\n          <p _ngcontent-c7=\"\" class=\"font-res\" style=\"font-family: mn-con;\">\n            <b>1. ยีน (Gene)</b> คือ ลักษณะนั่นแหละ 1 Gene ก็จะแทน 1 ลักษณะ เช่น Gene สีดอก, Gene สีฝัก, Gene ความสูงของต้นถั่ว...<br><br>\n            <b>2. จีโนไทป์ (Genotype)</b> คือ ตัวอักษรที่อธิบาย Gene โดยตัวพิมพ์ใหญ่แทนเด่น ตัวพิมพ์เล็กแทนด้อย ในการทดลองเมนเดล <b>1 Gene ประกอบด้วย 1 Genotype เท่านั้น!!!</b><br>\n            ตัวอย่าง ให้สีดอกเขียนแทนด้วย Genotype ตัวอักษรเอ ก็จะได้ สีดอกแบบเด่นพันธุ์แท้มี Genotype เป็น AA ถ้าสีดอกเด่นพันธุ์ทางก็จะเป็น Aa และถ้าสีดอกด้อยพันธุ์แท้ก็จะเป็น aa\n\n            </p>\n            <div class=\"large-margin\"></div>\n            <img class=\"center-block\" src=\"assets/img/contents/1-5.png\" width=\"100%\" height=\"100%\">\n          <div class=\"large-margin\"></div>\n\n\n          <p _ngcontent-c7=\"\" class=\"font-res\" style=\"font-family: mn-con;\">\n          \n\n            <b>3. อัลลีล (Allele)</b> คือ ตัวอักษรเพียงตัวเดียวของ Genotype เช่น Genotype Aa ก็จะประกอบด้วย อัลลีล A กับ อัลลีล a \n            \n          </p><br><br>\n\n          <p _ngcontent-c7=\"\" class=\"font-res\" style=\"font-family: mn-con;\">\n            ตัวอย่างการสรุป Gene, Genotype, Allele เช่นโจทย์กำหนดให้เขียน Genotype และ Allele ของ Aa ซึ่งเป็นลักษณะของสีดอก\n          </p>\n          <div class=\"large-margin\"></div>\n            <img class=\"center-block\" src=\"assets/img/contents/1-7.png\" width=\"100%\" height=\"100%\">\n          <div class=\"large-margin\"></div>\n\n\n          <p _ngcontent-c7=\"\" class=\"font-res\" style=\"font-family: mn-con;\">\n            ย้อนกลับมาที่รูปเดิม จะเห็นว่า ถ้าเป็นพันธุ์ทาง (มี Allele ตัวใหญ่และตัวเล็กอยู่ใน Gene เดียวกัน เช่น Aa) <br>\n            แทนที่จะแสดงออกเป็นสีม่วงอ่อนจาง แต่กลับแสดงออกเหมือนพันธุ์แท้เด่นเลย\n          </p>\n          \n\n          <div class=\"large-margin\"></div>\n            <img class=\"center-block\" src=\"assets/img/contents/1-5.png\" width=\"100%\" height=\"100%\">\n            <p _ngcontent-c3=\"\" class=\"font-res text-center re\" style=\"color: darkgrey;margin-top: 10px;font-size: 25px;\">Aa เหมือน AA เพราะเหตุใด..??</p>\n          \n          <div class=\"large-margin\"></div>\n\n          <p _ngcontent-c7=\"\" class=\"font-res\" style=\"font-family: mn-con;\">\n            เหตุที่เป็นเช่นนี้ก็เพราะ  Allele ลักษณะเด่น (Dominant) ข่ม Allele ลักษณะด้อย (Recessive) อย่างสมบูรณ์<br>\n            เรียกการข่มแบบนี้ว่า <b>การข่มสมบูรณ์ (Complete Dominance) </b> (ถ้าข่มไม่สมบูรณ์มันจะแสดงลักษณะกันครึ่งๆกลางๆ คล้ายการผสมสี)\n            \n          </p><br><br>\n\n          <p _ngcontent-c7=\"\" class=\"font-res\" style=\"font-family: mn-con;color: #e9b668;/* text-decoration:  underline; */\"><i _ngcontent-c7=\"\" class=\"fa fa-lightbulb-o\"></i> \n            ข้อควรรู้</p>\n            <p _ngcontent-c7=\"\" class=\"font-res\" style=\"font-family: mn-con;\">\n            *** ต้นถั่วลันเตา เป็นการข่มสมบูรณ์ ดังนั้น การทดลองของเมนเดลจึงเป็นการข่มสมบูรณ์ทั้งหมด\n            </p>\n            <p _ngcontent-c7=\"\" class=\"font-res\" style=\"font-family: mn-con;\">\n              *** ในการทำโจทย์ โจทย์จะกำหนดมาให้อยู่แล้ว ว่าข้อนี้ข่มสมบูรณ์หรือไม่สมบูรณ์\n              </p><br><br>\n\n              <p _ngcontent-c7=\"\" class=\"font-res\" style=\"font-family: mn-con;\">\n                  <b>3.1 พันธุ์แท้ (Homozygote)</b> คือ Gene ที่ Allele เป็นตัวพิมพ์เล็กหรือพิมพ์ใหญ่ทั้งหมด เช่น AA, aa, BB, bb ถ้าเป็นพิมพ์ใหญ่หมดเรียก\n                   <b>เด่นพันธุ์แท้ (Homozygous dominant)</b> พิมพ์เล็กหมดเรียก <b>ด้อยพันธุ์แท้ (Homozygous recessive)</b>\n                </p>\n                <p _ngcontent-c7=\"\" class=\"font-res\" style=\"font-family: mn-con;\">\n                    <b>3.2 พันธุ์ทาง (Heterozygote)</b> คือ Gene ที่ Allele มีทั้งตัวพิมพ์เล็กและพิมพ์ใหญ่ เช่น Aa, Bb, Cc\n                  </p><br><br>\n\n              <p _ngcontent-c7=\"\" class=\"font-res\" style=\"font-family: mn-con;\">\n          \n\n                <b>4. ฟีโนไทป์ (Phenotype)</b> คือ ลักษณะที่แสดงออกมา โดยไม่สนว่าจะมี Genotype อย่างไร<br> เช่นสีดอก Genotype AA กับ สีดอก Genotype Aa แม้ Genotype จะแตกต่างกัน แต่แสดงออกมาเป็นสีเดียวกัน ก็นับว่าเป็น Phenotype เดียวกัน\n                \n              </p>\n\n              <p _ngcontent-c7=\"\" class=\"font-res\" style=\"font-family: mn-con;\">\n                แผนภาพ Genotype vs Phenotype\n              </p>\n\n              <div class=\"large-margin\"></div>\n            <img class=\"center-block\" src=\"assets/img/contents/1-8.png\" width=\"100%\" height=\"100%\">\n            \n          <div class=\"large-margin\"></div>\n\n          <p _ngcontent-c7=\"\" class=\"font-res\" style=\"font-family: mn-con;color: #e9b668;/* text-decoration:  underline; */\"><i _ngcontent-c7=\"\" class=\"fa fa-lightbulb-o\"></i> \n           การทดลองของเมนเดล</p>\n          <p _ngcontent-c7=\"\" class=\"font-res\" style=\"font-family: mn-con;\">\n            ในยุคเมนเดลนักวิทยาศาสตร์ยังไม่รู้จัก Gene, Allele, Genotype, Phenotype การทดลองของเมนเดลใช้วิธีสังเกตทั้งหมด (สายถึก) โดยเมนเดลเรียก Gene ว่า <b>แฟกเตอร์ (Factor)</b><br><br>\n            เมนเดลใช้ความรู้ด้านสถิติและความน่าจะเป็น ทำให้เมนเดลค้นพบ <b>การผสมทีละลักษณะ (Monohybrid Cross)</b> หรือก็คือการ Cross 1 ลักษณะที่เรามักจะพบเจอ\n          </p>\n\n          <div class=\"large-margin\"></div>\n            <img class=\"center-block\" src=\"assets/img/contents/1-6.png\" width=\"100%\" height=\"100%\">\n            <p _ngcontent-c3=\"\" class=\"font-res text-center re\" style=\"color: rgb(124, 0, 0);margin-top: 10px;font-size: 25px;\">*** สีตัวอักษรในรูป เป็นเพียงแค่การมาร์คตำแหน่ง ไม่เกี่ยวข้องกับ Phenotype หรืออะไรทั้งสิ้น</p>\n          \n          <div class=\"large-margin\"></div>\n\n          <p _ngcontent-c7=\"\" class=\"font-res\" style=\"font-family: mn-con;\">\n            จากการค้นพบ Monohybrid Cross นี้เอง ทำให้เมนเดลค้นพบกฎข้อที่ 1 ของตนเองคือ <b>กฎแห่งการแยก (Law of segregation)</b> <br><br>\n          <b>กฎแห่งการแยก (Law of segregation)</b> กล่าวไว้ว่า เมื่อเกิดการสร้างเซลล์สืบพันธุ์ อัลลีลจะแยกจากกัน ซึ่งก็เหมือนกับรูปด้านบนเป๊ะๆ ก็คือทุกอัลลีลจะแยกจากคู่เดิมแล้วไปเข้าคู่กับคู่ใหม่ (ดูจากสีที่กำหนดเอาไว้ พอเข้าคู่กันเสร็จ ก็จะได้คู่สีไม่ซ้ำสีพ่อแม่เลย) </p>\n            <br><br>\n          <p _ngcontent-c7=\"\" class=\"font-res\" style=\"font-family: mn-con;\">\n            หลังจากที่ค้นพบความสัมพันธ์ของ Cross 1 ลักษณะแล้ว เมนเดลก็ทำการทดลองแบบ 2 ลักษณะถัดไป<br>\n            โดยแบบ 2 ลักษณะเรียกว่า <b>Dihybrid Cross</b> <br>\n            Dihybrid Cross จะเยอะกว่า Monohybrid Cross นิดๆ จึงแยกเป็น 2 รูป\n          </p>\n\n          <div class=\"large-margin\"></div>\n            <img class=\"center-block zoom\" src=\"assets/img/contents/1-9.png\" width=\"100%\" height=\"100%\">\n            <p _ngcontent-c3=\"\" class=\"font-res text-center re\" style=\"color: rgb(124, 0, 0);margin-top: 10px;font-size: 25px;\">Dihybrid Cross รูปที่ 1</p>\n          \n          <div class=\"large-margin\"></div>\n\n          <p _ngcontent-c7=\"\" class=\"font-res\" style=\"font-family: mn-con;\">\n              โดยรูปแรก คือการหาเซลล์สืบพันธุ์ฝั่งซ้าย และขวา ก็คิดเหมือน Monohybrid Cross<br>\n              เซลล์สืบพันธุ์ฝั่งซ้ายมาจาก Mm * Nn เซลล์สืบพันธุ์ฝั่งขวามาจาก Mm * NN\n            </p>\n\n            <div class=\"large-margin\"></div>\n            <img class=\"center-block zoom\" src=\"assets/img/contents/1-10.png\" width=\"100%\" height=\"100%\">\n            <p _ngcontent-c3=\"\" class=\"font-res text-center re\" style=\"color: rgb(124, 0, 0);margin-top: 10px;font-size: 25px;\">Dihybrid Cross รูปที่ 2</p>\n          \n          <div class=\"large-margin\"></div>\n\n          <p _ngcontent-c7=\"\" class=\"font-res\" style=\"font-family: mn-con;\">\n              เมื่อได้เซลล์สืบพันธุ์มาแล้ว เราก็จะตีตาราง (กำหนดให้ฝั่งไหนคือแกนตั้ง แกนนอนก็ได้ ในที่นี้ให้ฝั่งซ้ายเป็นแกนนอน ฝั่งขวาแกนตั้ง)<br>\n              แล้วก็ทำการเขียนความน่าจะเป็นมาทั้งหมด เสร็จสิ้น Dihybrid Cross !!\n            </p><br><br>\n\n            <p _ngcontent-c7=\"\" class=\"font-res\" style=\"font-family: mn-con;\">\n              จากการทดลอง Dihybrid Cross ทำให้เมนเดลค้นพบกฎข้อที่ 2 !!! นั่นก็คือ <b>กฎแห่งการรวมกลุ่มอย่างอิสระ (Law of Independent Assortment)</b>\n\n              </p><br><br>\n\n              <p _ngcontent-c7=\"\" class=\"font-res\" style=\"font-family: mn-con;\">\n              <b>กฎแห่งการรวมกลุ่มอย่างอิสระ (Law of Independent Assortment)</b> กล่าวไว้ว่า Gene แต่ละ Gene จะรวมกันอย่างอิสระ เทียบกับในรูปก็คือ Dihybrid Cross รูป 1 ที่ Gene M สามารถรวมกับ Gene N ได้โดยที่ไม่จำเป็นต้องเป็นเด่นทั้งคู่ (MN) หรือด้อยทั้งคู่ (mn) แต่สามารถรวมกันได้อย่างอิสระ (Mn Nm MN mn)\n    \n                  </p><br><br>\n\n                  <p _ngcontent-c7=\"\" class=\"font-res\" style=\"font-family: mn-con;color: #e9b668;/* text-decoration:  underline; */\"><i _ngcontent-c7=\"\" class=\"fa fa-lightbulb-o\"></i> \n                    สรุป</p>\n                  <ul _ngcontent-c3=\"\" class=\"font-res\" style=\"font-family: mn-con;\">\n                      <li _ngcontent-c3=\"\" style=\"margin-bottom: 15px;\"><b>1. Gene</b> คือ ลักษณะ</li>\n                      <li _ngcontent-c3=\"\" style=\"margin-bottom: 15px;\"><b>2. Genotype</b> คือ ตัวอักษร 2 ตัวแสดงลักษณะ (ที่มีสองตัวเพราะ โครโมโซมมี 2 ด้าน)</li>\n                      <li _ngcontent-c3=\"\" style=\"margin-bottom: 15px;\"><b>3. Allele</b> คือ ตัวอักษรแค่ตัวเดียวของ Genotype</li>\n                      <ul>\n                        <li><b>3.1. Homozygote</b> คือ Gene ที่มี Allele พิมพ์เดียวกัน เช่น พิมพ์ใหญ่หมด AA, BB, CC หรือ พิมพ์เล็กหมด aa, bb, cc</li>\n                        <li><b>3.2. Heterozygote</b> คือ Gene ที่มี Allele พิมพ์ไม่เท่ากัน เช่น Aa, Bb, Cc</li>\n                      </ul>\n                      <li _ngcontent-c3=\"\" style=\"margin-bottom: 15px;\"><b>4. Phenotype</b> คือ ลักษณะที่แสดงออกมาให้เห็น โดยไม่คำนึงถึง Genotype เช่นสี ความสูง</li>\n                      <li _ngcontent-c3=\"\" style=\"margin-bottom: 15px;\"><b>5. กฎการแยก</b> คือ Allele ใน Gene เดียวกันจะแยกกันตอนผสมพันธุ์ เช่น Aa พอผสมพันธุ์ก็จะแยกเป็น A กับ a</li>\n                      <li _ngcontent-c3=\"\" style=\"margin-bottom: 15px;\"><b>6. กฎการรวมอิสระ</b> คือ Gene ต่างกันรวมกันได้โดยไม่จำเป็นว่าต้องเด่นเหมือนกันหรือด้อยเหมือนกัน เช่น Mm กับ Nn ก็เข้าเป็น Mn ก็ได้ หรือ Nm ก็ได้ไม่จำเป็นต้อง MN หรือ mn</li>\n        </ul>\n        \n                    \n          \n          \n          \n          <br><br>\n          <a routerLink=\"/test/@genetics\" class=\"btn btn-success btn-block\">ทำแบบทดสอบ</a>\n          <br _ngcontent-c7=\"\"><br _ngcontent-c7=\"\">\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/content/genetics/genetics.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeneticsComponent; });
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

var GeneticsComponent = /** @class */ (function () {
    function GeneticsComponent() {
    }
    GeneticsComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
    };
    GeneticsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-genetics',
            template: __webpack_require__("./src/app/content/genetics/genetics.component.html"),
            styles: [__webpack_require__("./src/app/content/genetics/genetics.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GeneticsComponent);
    return GeneticsComponent;
}());



/***/ }),

/***/ "./src/app/content/material-2/material-2.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/content/material-2/material-2.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"little-margin-res\"></div>\n<div class=\"container-fluid content-fluid\">\n  <div class=\"large-margin\"></div>\n  <div class=\"panel panel-default\">\n      <div class=\"panel-img\" style=\"position:relative;background-image:url(assets/img/contents/2-preview-2.jpg);background-position: 50% 60%;\"></div>\n    <div class=\"panel-body\" >\n      <br>\n      <p _ngcontent-c3=\"\" style=\"padding-left: 21px;padding-right: 21px;font-family: mn-me;padding-top: 14px;background-color:white;position: absolute;\" class=\"emp\" class=\"margin-res\">บทที่ 2 ยีนและโครโมโซม</p></div>\n    <hr>\n    <div class=\"panel-body padding-content\">\n      <br>\n      <div class=\"text-center\">\n      <a class=\"font-res\" style=\"font-family: mn-con;\" routerLink=\"/course/@genetic-material\" routerLinkActive=\"active\">1</a> |\n      <a class=\"font-res\" style=\"font-family: mn-con;\" routerLink=\"/course/@genetic-material-2\" routerLinkActive=\"active\">2</a> |\n      <a class=\"font-res\" style=\"font-family: mn-con;\" routerLink=\"/course/@genetic-material-3\" routerLinkActive=\"active\">3</a> |\n      <a class=\"font-res\" style=\"font-family: mn-con;\" routerLink=\"/course/@genetic-material-4\" routerLinkActive=\"active\">4</a> |\n      <a class=\"font-res\" style=\"font-family: mn-con;\" routerLink=\"/course/@genetic-material-5\" routerLinkActive=\"active\">5</a> \n      </div><br>\n      \n      <h5>2. โครงสร้างของสารพันธุกรรม</h5>\n      <hr>\n      \n\n      <p class=\"font-res\" style=\"font-family: mn-con;\">\n        เมื่อพูดถึงโครงสร้าง เราจะต้องเรียงจากหน่วยเล็กที่สุด ไปยังหน่วยที่ใหญ่ที่สุด<br>\nเรียงคร่าวๆก็จะได้เป็น <b>nucleotide < กรดนิวคลีอิก (RNA, DNA) < Chromosome</b><br><br>\n\n<b>2.1 กรดนิวคลีอิก</b><br>\nคือ polymer ของ nucleotide ที่มาต่อกันด้วยพันธะ phosphodiester \n      </p>\n\n      <div class=\"large-margin\"></div>\n          <img class=\"center-block \" src=\"assets/img/contents/2/3.jpeg\" width=\"100%\" height=\"100%\">\n          <p _ngcontent-c3=\"\" class=\"font-res text-center re\" style=\"color: darkgrey;margin-top: 10px;font-size: 25px;\">nucleotide ของ RNA กับ nucleotide ของ DNA</p>\n          <div class=\"large-margin\"></div>\n\n          <p class=\"font-res\" style=\"font-family: mn-con;\">\n            Nucleotide ประกอบด้วย 3 องค์ประกอบคือ</p>\n\n      <ul _ngcontent-c3=\"\" class=\"font-res\" style=\"font-family: mn-con;\">\n        <li _ngcontent-c3=\"\" style=\"margin-bottom: 15px;\">\n          <b>น้ำตาล 5 คาร์บอน (Pentose sugar)</b> เป็นตัวบอกว่าเป็น nucleotide ของ DNA หรือ RNA\n        </li>\n        <li _ngcontent-c3=\"\" style=\"margin-bottom: 15px;\">\n         <b>เบสที่มีไนโตรเจนเป็นองค์ประกอบ (Nitrogenous base)</b> คือข้อมูลของสารพันธุกรรม\n        </li>\n        <li _ngcontent-c3=\"\" style=\"margin-bottom: 15px;\">\n         <b>หมู่ฟอสเฟต (Phosphate group)</b> คือหมู่ที่ไว้ต่อกับ nucleotide ตัวอื่นๆ ทำให้ยาวขึ้นจนกลายเป็นกรดนิวคลีอิก\n        </li>\n      </ul> <br><br>\n\n      <p class=\"font-res\" style=\"font-family: mn-con;\">\n        ดังนั้น ชนิดของกรดนิวคลีอิกจึงแบ่งตามน้ำตาล 5 คาร์บอนที่เป็นองค์ประกอบของ nucleotide\n      </p>\n        <ul  class=\"font-res\" style=\"font-family: mn-con;\">\n          <li  style=\"margin-bottom: 15px;\">\n             DNA (<b>Deoxy</b>ribonucleic acid) มี Deoxyribose เป็นน้ำตาล\n          </li>\n\n          <li  style=\"margin-bottom: 15px;\">\n            RNA (ribonucleic acid) มี Ribose เป็นน้ำตาล\n          </li>\n\n        </ul> <br><br>\n\n      <p _ngcontent-c7=\"\" class=\"font-res\" style=\"font-family: mn-con;color: #e9b668;/* text-decoration:  underline; */\"><i _ngcontent-c7=\"\" class=\"fa fa-lightbulb-o\"></i> \n      ข้อควรรู้</p>\n\n      <p class=\"font-res\" style=\"font-family: mn-con;\">\n        Polynucleotide คือ nucleotide ตั้งแต่ 13 โมเลกุลขึ้นไปมาต่อกัน<br>\n        RNA คือ Polynucleotide 1 เส้น<br>\n        DNA คือ Polynucleotide 2 เส้น</p>\n        <div class=\"large-margin\"></div>\n          <img class=\"center-block \" src=\"assets/img/contents/2/4.png\" width=\"100%\" height=\"100%\">\n          <p _ngcontent-c3=\"\" class=\"font-res text-center re\" style=\"color: darkgrey;margin-top: 10px;font-size: 25px;\">ฝั่งซ้ายคือ polynucleotide ขวาคือ nucleotide</p>\n          <div class=\"large-margin\"></div><br>\n\n          <p class=\"font-res\" style=\"font-family: mn-con;\">\n        <b>2.2 DNA</b><br>\n        จากรูปจะเห็นว่า DNA มันเป็นเกลียว (double helix) เกิดจาก polynucleotide มาจับกันแบบกลับหัวกัน (antiparallel)\n\n\n      \n      </p>\n\n      <div class=\"large-margin\"></div>\n          <img class=\"center-block \" src=\"assets/img/contents/2/5.jpeg\" width=\"100%\" height=\"100%\">\n          <p _ngcontent-c3=\"\" class=\"font-res text-center re\" style=\"color: darkgrey;margin-top: 10px;font-size: 25px;\">DNA</p>\n          <div class=\"large-margin\"></div>\n\n          <p class=\"font-res\" style=\"font-family: mn-con;\">\n            เพื่อให้เห็นทิศทางชัดเจน นักวิทยาศาสตร์จึงกำหนดทิศมันไว้ ตรง OH น้ำตาล คือทิศ 3’ (อ่านว่าสามไพรม์)\nส่วนตรงปลายหมู่ฟอสเฟต คือทิศ 5’ (อ่านว่าห้าไพรม์)</p>\n\n<div class=\"large-margin\"></div>\n<img class=\"center-block \" src=\"assets/img/contents/2/6.jpg\" width=\"100%\" height=\"100%\">\n<p _ngcontent-c3=\"\" class=\"font-res text-center re\" style=\"color: darkgrey;margin-top: 10px;font-size: 25px;\">ทิศของ DNA</p>\n<div class=\"large-margin\"></div>\n\n<p _ngcontent-c7=\"\" class=\"font-res\" style=\"font-family: mn-con;color: #e9b668;/* text-decoration:  underline; */\"><i _ngcontent-c7=\"\" class=\"fa fa-lightbulb-o\"></i> \n  Polynucleotide 2 เส้นจับกันได้อย่างไร...?</p>\n\n  <p class=\"font-res\" style=\"font-family: mn-con;\">\n    องค์ประกอบที่เชื่อม 2 เส้นเข้าด้วยกันนั่นก็คือ เบส (Nitrogenous base) นั่นเอง<br><br>\n    แต่มันไม่ได้จับมั่วๆนะ มันจะเลือกจับเบสที่เป็น<b>คู่ของมัน</b>เท่านั้น เรียกว่า <b>เบสคู่สม (Complementary base)</b><br>\n    เบสมีทั้งหมด 4 รหัส คือ<br>\n    A, T, C, G</p>\n\n    <div class=\"large-margin\"></div>\n<img class=\"center-block \" src=\"assets/img/contents/2/5.png\" width=\"100%\" height=\"100%\">\n<p _ngcontent-c3=\"\" class=\"font-res text-center re\" style=\"color: darkgrey;margin-top: 10px;font-size: 25px;\">โครงสร้าง DNA, RNA และเบส</p>\n<div class=\"large-margin\"></div><br>\n\n<p class=\"font-res\" style=\"font-family: mn-con;\">\n  <b>โดย A จะจับกับ T, และ C จับกับ G เท่านั้น..!!</b><br>\nถ้าเป็นใน RNA เบส T จะเป็นเบส U แทน แต่ยังจับกับ A เหมือนเดิม (คิดซะว่าเปลี่ยนแค่ชื่อ เอาจริงๆมันเปลี่ยนสูตรทางเคมี แต่เราไม่พูดถึงจุดนั้น)</p><br><br>\n\n<p class=\"font-res\" style=\"font-family: mn-con;\">\n  เบสมันคือข้อมูลของพันธุกรรม มันก็เหมือนประโยคในภาษาอังกฤษนั่นแหละ เช่น<br>\n  3’ AGACT 5’ ก็มีความหมายหนึ่ง 3’ AAACCCTGG 5’ ก็มีความหมายหนึ่ง\n\n</p><br><br>\n\n<p _ngcontent-c7=\"\" class=\"font-res\" style=\"font-family: mn-con;color: #e9b668;/* text-decoration:  underline; */\"><i _ngcontent-c7=\"\" class=\"fa fa-lightbulb-o\"></i> \n  ทำไมถึงคู่เบสต้องจับคู่กันเป็น 2 เส้น ในเมื่อการแปลข้อมูลใช้แค่เส้นเดียว..?</p>\n  <p class=\"font-res\" style=\"font-family: mn-con;\">\n    เช่น<br> \n  3’  AGACT  5’ <br>\nก็เพียงพอแล้ว ทำไมถึงต้องมีอีกสายที่เข้าคู่กัน..??<br>\n  3’  AGACT 5’<br>\n  5’  TCTGA 3’<br><br>\n\n  เหตุที่มี 2 เส้นก็เพราะ... ป้องกันไม่ให้เกิดการกลายพันธุ์นั่นเอง<br><br>\n\n  ถ้า DNA ของเรามี Polynucleotide เพียงเส้นเดียว เมื่อเกิดการกลายพันธุ์แล้ว ก็จะเสียไปเลย<br>\nแต่ถ้ามี 2 เส้นที่จับคู่กันแล้ว ถึงอันหนึ่งจะเสียหายไป แต่ถ้าเรารู้เส้นหนึ่ง เราก็จะรู้อีกเส้นหนึ่งได้ เช่น \nเบส A คู่กับเบส T ถ้าเบส A หายเหลือแต่เบส T <br>\nเราก็จะรู้ได้ทันทีว่า เบสที่หายไปคือเบส A เพราะมีแค่เบส A เท่านั้นที่จับคู่กับเบส T\nนี่จึงเป็นข้อดีของการมี Polynucleotide 2 เส้น<br><br>\n\n<b>2.3 Chromosome</b><br>\nเกิดจาก DNA มาพันรอบก้อนโปรตีนฮิสโตน กลายเป็นรูปที่เรามักจะเห็นบ่อยๆ\n  </p>\n  <div class=\"large-margin\"></div>\n<img class=\"center-block \" src=\"assets/img/contents/2/7.jpg\" width=\"100%\" height=\"100%\">\n<p _ngcontent-c3=\"\" class=\"font-res text-center re\" style=\"color: darkgrey;margin-top: 10px;font-size: 25px;\">Chromosome มันก็เกิดจาก DNA มาขดกันเยอะๆนั่นแหละ</p>\n<div class=\"large-margin\"></div><br>\n\n<p _ngcontent-c7=\"\" class=\"font-res\" style=\"font-family: mn-con;color: #e9b668;/* text-decoration:  underline; */\"><i _ngcontent-c7=\"\" class=\"fa fa-lightbulb-o\"></i> \n  ข้อควรรู้</p>\n  <p class=\"font-res\" style=\"font-family: mn-con;\">\n    ในสภาวะปกติ Chromosome จะคลายตัวเป็นเส้นเรียก <b>เส้นใยโครมาทิน (Chromatin network)</b><br>\n    แต่จะหดตัวเป็น chromosome ก็ต่อเมื่อแบ่งเซลล์ในระยะ M-phase</p><br><br>\n\n    <p class=\"font-res\" style=\"font-family: mn-con;\">\n      เราสามารถแบ่งโครโมโซมได้ 4 แบบตามตำแหน่งของ centromere (โครมาทิดมาติดกันและมีโปรตีน kinetochore)</p>\n\n      <div class=\"large-margin\"></div>\n      <img class=\"center-block \" src=\"assets/img/contents/2/8.jpg\" width=\"100%\" height=\"100%\">\n      <p _ngcontent-c3=\"\" class=\"font-res text-center re\" style=\"color: darkgrey;margin-top: 10px;font-size: 25px;\">โครงสร้าง Chromosome</p>\n      <div class=\"large-margin\"></div>\n\n\n<ul _ngcontent-c3=\"\" class=\"font-res\" style=\"font-family: mn-con;\">\n  <li _ngcontent-c3=\"\" style=\"margin-bottom: 15px;\">\n    เซนโทรเมียร์อยู่กึ่งกลางโครโมโซม เรียก metacentric\n  </li>\n  <li _ngcontent-c3=\"\" style=\"margin-bottom: 15px;\">\n    เซนโทรเมียร์ค่อนมาด้านใดด้านหนึ่งนิดหน่อยเรียกว่า submetacentric\n  </li>\n  <li _ngcontent-c3=\"\" style=\"margin-bottom: 15px;\">\n   เซนโทรเมียร์ค่อนมาด้านใดด้านหนึ่งมากเรียกว่า acrocentric\n  </li>\n</ul> \n<div class=\"large-margin\"></div>\n      <img class=\"center-block \" src=\"assets/img/contents/2/9.jpeg\" width=\"100%\" height=\"100%\">\n      <p _ngcontent-c3=\"\" class=\"font-res text-center re\" style=\"color: darkgrey;margin-top: 10px;font-size: 25px;\">ประเภท Chromosome</p>\n      <div class=\"large-margin\"></div>\n\n      <p class=\"font-res\" style=\"font-family: mn-con;\">\n          โครโมโซมมนุษย์<br>\n          - โครโมโซมร่างกาย (Autosome) มี 22 คู่หรือ 44 โครโมโซม <br>\n          - โครโมโซมเพศ (Sex Chromosome) มี 1 คู่ หญิง XX ชาย XY\n      </p>\n\n      <div class=\"large-margin\"></div>\n      <img class=\"center-block \" src=\"assets/img/contents/2/10.gif\" width=\"100%\" height=\"100%\">\n      <p _ngcontent-c3=\"\" class=\"font-res text-center re\" style=\"color: darkgrey;margin-top: 10px;font-size: 25px;\">โครโมโซมทั้งหมดในร่างกาย การแสดงแบบนี้เรียกว่า Karyotype</p>\n      <div class=\"large-margin\"></div>\n\n\n\n         <div class=\"text-center\">\n          <a class=\"font-res\" style=\"font-family: mn-con;\" routerLink=\"/course/@genetic-material\" routerLinkActive=\"active\">1</a> |\n          <a class=\"font-res\" style=\"font-family: mn-con;\" routerLink=\"/course/@genetic-material-2\" routerLinkActive=\"active\">2</a> |\n          <a class=\"font-res\" style=\"font-family: mn-con;\" routerLink=\"/course/@genetic-material-3\" routerLinkActive=\"active\">3</a> |\n          <a class=\"font-res\" style=\"font-family: mn-con;\" routerLink=\"/course/@genetic-material-4\" routerLinkActive=\"active\">4</a> |\n          <a class=\"font-res\" style=\"font-family: mn-con;\" routerLink=\"/course/@genetic-material-5\" routerLinkActive=\"active\">5</a> \n          </div><br>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/content/material-2/material-2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Material2Component; });
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

var Material2Component = /** @class */ (function () {
    function Material2Component() {
    }
    Material2Component.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
    };
    Material2Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-material-2',
            template: __webpack_require__("./src/app/content/material-2/material-2.component.html"),
            styles: [__webpack_require__("./src/app/content/material-2/material-2.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Material2Component);
    return Material2Component;
}());



/***/ }),

/***/ "./src/app/content/material-3/material-3.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/content/material-3/material-3.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"little-margin-res\"></div>\n<div class=\"container-fluid content-fluid\">\n  <div class=\"large-margin\"></div>\n  <div class=\"panel panel-default\">\n      <div class=\"panel-img\" style=\"position:relative;background-image:url(assets/img/contents/2-preview-2.jpg);background-position: 50% 60%;\"></div>\n    <div class=\"panel-body\" >\n      <br>\n      <p _ngcontent-c3=\"\" style=\"padding-left: 21px;padding-right: 21px;font-family: mn-me;padding-top: 14px;background-color:white;position: absolute;\" class=\"emp\" class=\"margin-res\">บทที่ 2 ยีนและโครโมโซม</p></div>\n    <hr>\n    <div class=\"panel-body padding-content\">\n      <br>\n      <div class=\"text-center\">\n      <a class=\"font-res\" style=\"font-family: mn-con;\" routerLink=\"/course/@genetic-material\" routerLinkActive=\"active\">1</a> |\n      <a class=\"font-res\" style=\"font-family: mn-con;\" routerLink=\"/course/@genetic-material-2\" routerLinkActive=\"active\">2</a> |\n      <a class=\"font-res\" style=\"font-family: mn-con;\" routerLink=\"/course/@genetic-material-3\" routerLinkActive=\"active\">3</a> |\n      <a class=\"font-res\" style=\"font-family: mn-con;\" routerLink=\"/course/@genetic-material-4\" routerLinkActive=\"active\">4</a> |\n      <a class=\"font-res\" style=\"font-family: mn-con;\" routerLink=\"/course/@genetic-material-5\" routerLinkActive=\"active\">5</a> \n      </div><br>\n      \n      <h5>3. การจำลองตัวของ DNA (DNA Replication)</h5>\n      <hr>\n      \n\n      <p class=\"font-res\" style=\"font-family: mn-con;\">\n          คือการเพิ่ม DNA เป็น 2 เท่าจากเดิม <br>\n        <br>ใช้เอนไซม์ในการจำลอง ขั้นตอนมีดังนี้</p>\n\n        <div class=\"large-margin\"></div>\n        <img class=\"center-block \" src=\"assets/img/contents/2/12.jpg\" width=\"100%\" height=\"100%\">\n        <p _ngcontent-c3=\"\" class=\"font-res text-center re\" style=\"color: darkgrey;margin-top: 10px;font-size: 25px;\">DNA replication</p>\n        <div class=\"large-margin\"></div>\n\n        <ul _ngcontent-c3=\"\" class=\"font-res\" style=\"font-family: mn-con;\">\n            <li _ngcontent-c3=\"\" style=\"margin-bottom: 15px;\">\n               3.1 เอนไซม์ helicase หน้าที่คลายเกลียว DNA โดยสลายพันธะไฮโดรเจนระหว่าง polynucleotide ออกไป</li>\n            <li _ngcontent-c3=\"\" style=\"margin-bottom: 15px;\">\n                3.2 เอนไซม์ primase สร้าง RNA primer มาเกาะบนสาย polynucleotide เพื่อให้ DNA polymerase ทำงาน</li>\n            <li _ngcontent-c3=\"\" style=\"margin-bottom: 15px;\">\n                3.3 เอนไซม์ DNA polymerase นำเอา nucleotide ที่เป็นเบสคู่สมกับสายต้นแบบ มาเรียงต่อจาก primer แล้วต่อไปเรื่อยๆ </li>\n          </ul> <br><br>\n\n          <p class=\"font-res\" style=\"font-family: mn-con;\">\n              ซึ่ง DNA polymerase ทำงานจากทิศ 5’ ไป 3’ เท่านั้น เหตุนี้จึงทำให้ 2 สายใช้ความเร็วไม่เท่ากันตามรูป</p>\n\n              <div class=\"large-margin\"></div>\n        <img class=\"center-block \" src=\"assets/img/contents/2/11.png\" width=\"100%\" height=\"100%\">\n        <p _ngcontent-c3=\"\" class=\"font-res text-center re\" style=\"color: darkgrey;margin-top: 10px;font-size: 25px;\">สาย 3' ไป 5' เร็วกว่า..!</p>\n        <div class=\"large-margin\"></div>\n\n        <p class=\"font-res\" style=\"font-family: mn-con;\">\n            จะเห็นว่าสาย 3’ ไป 5’ จะเร็วกว่า เพราะ เป้าหมายที่ต้องการคือ 5’ ไป 3’ อยู่แล้ว จึงทำให้ DNA polymerase ทำงานได้แบบตรงๆ เรียกสายนี้ว่า Leading strand\n</p>\n\n<p class=\"font-res\" style=\"font-family: mn-con;\">\n    กลับกัน สาย 5’ ไป 3’ จะช้ากว่า เพราะสายนี้ต้องการ 3’ ไป 5’ ซึ่งมันขัดกับธรรมชาติของ DNA polyermerase ที่สร้างได้เฉพาะ 5’ ไป 3’ จึงทำให้ DNA polymerase ต้องกระจายกันทำงานกันเป็นท่อสั้นๆแทน เรียกท่อสั้นๆนี้ว่า Okazaki fragment เมื่อสร้างเสร็จก็จะถูก<b>เอนไซม์ ligase</b>ทำให้ท่อน DNA สั้นๆเหล่านี้เชื่อมกันด้วยพันธะ phosphodiester เรียกสายนี้ว่า Lagging strand</p>\n\n\n\n         <div class=\"text-center\">\n          <a class=\"font-res\" style=\"font-family: mn-con;\" routerLink=\"/course/@genetic-material\" routerLinkActive=\"active\">1</a> |\n          <a class=\"font-res\" style=\"font-family: mn-con;\" routerLink=\"/course/@genetic-material-2\" routerLinkActive=\"active\">2</a> |\n          <a class=\"font-res\" style=\"font-family: mn-con;\" routerLink=\"/course/@genetic-material-3\" routerLinkActive=\"active\">3</a> |\n          <a class=\"font-res\" style=\"font-family: mn-con;\" routerLink=\"/course/@genetic-material-4\" routerLinkActive=\"active\">4</a> |\n          <a class=\"font-res\" style=\"font-family: mn-con;\" routerLink=\"/course/@genetic-material-5\" routerLinkActive=\"active\">5</a> \n          </div><br>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/content/material-3/material-3.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Material3Component; });
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

var Material3Component = /** @class */ (function () {
    function Material3Component() {
    }
    Material3Component.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
    };
    Material3Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-material-3',
            template: __webpack_require__("./src/app/content/material-3/material-3.component.html"),
            styles: [__webpack_require__("./src/app/content/material-3/material-3.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Material3Component);
    return Material3Component;
}());



/***/ }),

/***/ "./src/app/content/material-4/material-4.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/content/material-4/material-4.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"little-margin-res\"></div>\n<div class=\"container-fluid content-fluid\">\n  <div class=\"large-margin\"></div>\n  <div class=\"panel panel-default\">\n      <div class=\"panel-img\" style=\"position:relative;background-image:url(assets/img/contents/2-preview-2.jpg);background-position: 50% 60%;\"></div>\n    <div class=\"panel-body\" >\n      <br>\n      <p _ngcontent-c3=\"\" style=\"padding-left: 21px;padding-right: 21px;font-family: mn-me;padding-top: 14px;background-color:white;position: absolute;\" class=\"emp\" class=\"margin-res\">บทที่ 2 ยีนและโครโมโซม</p></div>\n    <hr>\n    <div class=\"panel-body padding-content\">\n      <br>\n      <div class=\"text-center\">\n      <a class=\"font-res\" style=\"font-family: mn-con;\" routerLink=\"/course/@genetic-material\" routerLinkActive=\"active\">1</a> |\n      <a class=\"font-res\" style=\"font-family: mn-con;\" routerLink=\"/course/@genetic-material-2\" routerLinkActive=\"active\">2</a> |\n      <a class=\"font-res\" style=\"font-family: mn-con;\" routerLink=\"/course/@genetic-material-3\" routerLinkActive=\"active\">3</a> |\n      <a class=\"font-res\" style=\"font-family: mn-con;\" routerLink=\"/course/@genetic-material-4\" routerLinkActive=\"active\">4</a> |\n      <a class=\"font-res\" style=\"font-family: mn-con;\" routerLink=\"/course/@genetic-material-5\" routerLinkActive=\"active\">5</a> \n      </div><br>\n      \n      <h5>4. การถอดรหัส DNA จนได้ผลลัพธ์</h5>\n      <hr>\n      \n\n      <p class=\"font-res\" style=\"font-family: mn-con;\">\n          สิ่งที่เบสใน DNA เก็บทั้งหมดนั้นคือเก็บว่า DNA นี้จะสังเคราะห์โปรตีนอะไรบ้าง<br>\nพูดง่ายๆคือ โปรตีน ก็คือการแสดงออกในระดับโมเลกุล \nเมื่อ DNA แปลรหัสเป็นโปรตีนแล้ว โปรตีนก็จะไปทำงาน ท้ายที่สุดก็จะกลายเป็นการแสดงออกที่เห็นได้ด้วยตาเปล่า เช่นสีผิว ความสูง ทุกอย่างล้วนเริ่มจาก DNA สังเคราะห์เป็นโปรตีนก่อนทั้งสิ้น</p>\n\n        <div class=\"large-margin\"></div>\n        <img class=\"center-block \" src=\"assets/img/contents/2/13.jpeg\" width=\"100%\" height=\"100%\">\n        <p _ngcontent-c3=\"\" class=\"font-res text-center re\" style=\"color: darkgrey;margin-top: 10px;font-size: 25px;\">DNA -> mRNA -> Protein ..!!</p>\n        <div class=\"large-margin\"></div>\n\n        <p class=\"font-res\" style=\"font-family: mn-con;\">\n            การแปลง DNA เป็นโปรตีนมีขั้นตอนดังนี้</p>\n\n        <ul _ngcontent-c3=\"\" class=\"font-res\" style=\"font-family: mn-con;\">\n            <li _ngcontent-c3=\"\" style=\"margin-bottom: 15px;\">\n                4.1 <b>ถอดรหัส (Transcription)</b> ถอดรหัสจากเบสทิศทาง 3’ ไป 5’ เท่านั้น ทำให้ได้รหัสที่ถอดมีทิศทาง 5’ ไป 3’ แค่สายเดียว แน่นอนว่า ถ้ามีแค่สายเดียวมันก็คือ RNA ฉะนั้นสายที่ได้จากการถอดรหัสแล้วคือ RNA เรียกว่า mRNA\n              </li><li _ngcontent-c3=\"\" style=\"margin-bottom: 15px;\">\n                  4.2 <b>แปลรหัส (Translation)</b> แปล mRNA ที่ได้จากการถอดรหัสมาให้เป็นโปรตีน\n                </li>\n           </ul> \n\n           <div class=\"large-margin\"></div>\n        <img class=\"center-block \" src=\"assets/img/contents/2/15.jpg\" width=\"100%\" height=\"100%\">\n        <p _ngcontent-c3=\"\" class=\"font-res text-center re\" style=\"color: darkgrey;margin-top: 10px;font-size: 25px;\">ภาพรวมของหน้านี้</p>\n        <div class=\"large-margin\"></div>\n\n          <p class=\"font-res\" style=\"font-family: mn-con;\">\n            <b>4.1 การถอดรหัส Transcription</b><br>\n            ถอดรหัสจาก DNA ออกมาอยู่ในรูป mRNA<br>\nมีกระบวนการดังนี้<br>\n\n            </p>\n              <div class=\"large-margin\"></div>\n        <img class=\"center-block \" src=\"assets/img/contents/2/14.jpg\" width=\"100%\" height=\"100%\">\n        <p _ngcontent-c3=\"\" class=\"font-res text-center re\" style=\"color: darkgrey;margin-top: 10px;font-size: 25px;\">Transcription จะเห็นว่าใช้ DNA แค่สายเดียวนะ!</p>\n        <div class=\"large-margin\"></div>\n\n        <ul _ngcontent-c3=\"\" class=\"font-res\" style=\"font-family: mn-con;\">\n            <li _ngcontent-c3=\"\" style=\"margin-bottom: 15px;\">\n                4.1.1 เอนไซม์ RNA polymerase มาเกาะที่สาย DNA บริเวณ promoter และคลายเกลียว DNA ออก\n              </li><li _ngcontent-c3=\"\" style=\"margin-bottom: 15px;\">\n                4.1.2 จะใช้ DNA เพียงสายเดียวเท่านั้นเป็นแม่แบบ นั่นคือสาย 3’ ไป 5’\n              </li>\n           </ul> <br><br>\n           \n        <p class=\"font-res\" style=\"font-family: mn-con;\">\n            RNA polymerase ก็จะทำงานจากทิศ 5’ ไป 3’ เหมือน DNA polymerase ต่างกันที่ RNA polymerase มันคลายเกลียวได้เองเลย ไม่ต้องใช้ helicase\n          \n          <br><br>\n          <b>***** อย่าลืมว่า RNA เบส T จะเรียกว่าเบส U แทน แต่จับคู่กับ A เหมือนเดิม</b><br>\n          ตัวอย่าง<br>\nDNA ปกติ<br>\n3’  AGA 5’<br>\n5’  TCT 3’<br><br>\n\nก็จะได้ mRNA เป็น<br>\n5’  UCU 3’<br><br>\n\n          </p>\n\n          <p _ngcontent-c7=\"\" class=\"font-res\" style=\"font-family: mn-con;color: #e9b668;/* text-decoration:  underline; */\"><i _ngcontent-c7=\"\" class=\"fa fa-lightbulb-o\"></i> \n            ข้อสังเกต</p>\n\n<p class=\"font-res\" style=\"font-family: mn-con;\">\n    จะเห็นว่า mRNA มันก็คือรหัสเดียวกับสาย 5’ ไป 3’ ของ DNA ปกติเลย เพียงแค่เปลี่ยน T เป็น U\n    </p><br><br>\n\n    <p class=\"font-res\" style=\"font-family: mn-con;\">\n        <b>4.2 การแปลรหัส Translation</b><br>\n        เป็นการอ่านรหัสบนสาย mRNA ที่ได้จากการ transcription มา โดยตัวอ่านคือ <b>Ribosome</b>\n        </p>\n\n        <div class=\"large-margin\"></div>\n        <img class=\"center-block \" src=\"assets/img/contents/2/16.jpg\" width=\"100%\" height=\"100%\">\n        <p _ngcontent-c3=\"\" class=\"font-res text-center re\" style=\"color: darkgrey;margin-top: 10px;font-size: 25px;\">Ribosome</p>\n        <div class=\"large-margin\"></div>\n\n        <p class=\"font-res\" style=\"font-family: mn-con;\">\n            Ribosome มี 2 หน่วย คือ large subunit กับ small subunit\nเมื่อถึงเวลาที่จะแปลรหัส large unit จะประกบด้านบนสาย mRNA ส่วน small unit จะประกบด้านล่าง\n</p><br><br>\n\n\n<p class=\"font-res\" style=\"font-family: mn-con;\">\n    โดย ribosome จะเริ่มแปลจากปลาย 5’ ไป 3’ ของสาย mRNA โดยอ่านที่ละ 3 ลำดับเบส (triplet code) แบบไม่ซ้อนทับกัน และไม่อ่านข้าม ไม่อ่านซ้ำ (3 ลำดับเบส = 1 triplet code = 1 codon) ซึ่งทุกๆ 1 code จะได้กรดอะมิโน 1 โมเลกุล <br>\n    เช่น<br>\n    mRNA 5' AUGUAG 3' ก็จะอ่านได้แค่ 2 frame คือ<br>\n    AUG กับ UAG ไม่ใช่ AUG UGU GUA UAG นะ ​\n    </p>\n    <div class=\"large-margin\"></div>\n        <img class=\"center-block \" src=\"assets/img/contents/2/17.png\" width=\"100%\" height=\"100%\">\n        <p _ngcontent-c3=\"\" class=\"font-res text-center re\" style=\"color: darkgrey;margin-top: 10px;font-size: 25px;\">การ Translation</p>\n        <div class=\"large-margin\"></div>\n\n        <p class=\"font-res\" style=\"font-family: mn-con;\">\n    ** โดยการจะรู้ว่า codon นี้คือกรดอะมิโนตัวไหน สามารถดูได้จากตารางเทียบ ซึ่งโจทย์จะต้องมีมาให้</p>\n\n    <div class=\"large-margin\"></div>\n        <img class=\"center-block \" src=\"assets/img/contents/2/18.gif\" width=\"100%\" height=\"100%\">\n        <p _ngcontent-c3=\"\" class=\"font-res text-center re\" style=\"color: darkgrey;margin-top: 10px;font-size: 25px;\">ตารางกรดอะมิโน</p>\n        <div class=\"large-margin\"></div>\n\n    <p class=\"font-res\" style=\"font-family: mn-con;\">\n    Ribosome จะเริ่มแปลก็ต่อเมื่อเจอรหัส AUG และจะหยุดเมื่อเจอ UAA UGA UAG<br>\n    AUG จะแปลได้กรดอะมิโนชื่อว่า methionine (Met) <br>\nแต่พวกรหัสหยุด (UAA UGA UAG) จะไม่ได้กรดอะมิโน แต่จะเป็นการ return ผลลัพธ์เป็นกรดอะมิโนทั้งหมดที่ได้จากการแปลรหัสแทน<br><br>\nดังนั้น ถ้าไม่มี AUG ก็จะไม่เกิดกรดอะมิโนเลย เพราะ ribosome จะเริ่มก็ต่อเมื่อหา AUG เจอเช่น<br>\nmRNA 5’ AAAAAAAAAAAA  3’<br><br>\nหรือถ้าไม่มี stop codon ก็จะไม่มีกรดอะมิโนออกมาเช่นกัน\n</p><br><br>\n\n<p _ngcontent-c7=\"\" class=\"font-res\" style=\"font-family: mn-con;color: #e9b668;/* text-decoration:  underline; */\"><i _ngcontent-c7=\"\" class=\"fa fa-lightbulb-o\"></i> \n  ข้อควรรู้</p>\n\n  <p class=\"font-res\" style=\"font-family: mn-con;\">\n      ตัวที่นำพากรดอะมิโนมาให้ตามที่ ribosome ต้องการมีชื่อว่า tRNA (transfer RNA)\n\n  </p>\n\n  <div class=\"large-margin\"></div>\n        <img class=\"center-block \" src=\"assets/img/contents/2/19.gif\" width=\"100%\" height=\"100%\">\n        <p _ngcontent-c3=\"\" class=\"font-res text-center re\" style=\"color: darkgrey;margin-top: 10px;font-size: 25px;\">tRNA</p>\n        <div class=\"large-margin\"></div>\n\n\n\n         <div class=\"text-center\">\n          <a class=\"font-res\" style=\"font-family: mn-con;\" routerLink=\"/course/@genetic-material\" routerLinkActive=\"active\">1</a> |\n          <a class=\"font-res\" style=\"font-family: mn-con;\" routerLink=\"/course/@genetic-material-2\" routerLinkActive=\"active\">2</a> |\n          <a class=\"font-res\" style=\"font-family: mn-con;\" routerLink=\"/course/@genetic-material-3\" routerLinkActive=\"active\">3</a> |\n          <a class=\"font-res\" style=\"font-family: mn-con;\" routerLink=\"/course/@genetic-material-4\" routerLinkActive=\"active\">4</a> |\n          <a class=\"font-res\" style=\"font-family: mn-con;\" routerLink=\"/course/@genetic-material-5\" routerLinkActive=\"active\">5</a> \n          </div><br>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/content/material-4/material-4.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Material4Component; });
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

var Material4Component = /** @class */ (function () {
    function Material4Component() {
    }
    Material4Component.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
    };
    Material4Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-material-4',
            template: __webpack_require__("./src/app/content/material-4/material-4.component.html"),
            styles: [__webpack_require__("./src/app/content/material-4/material-4.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Material4Component);
    return Material4Component;
}());



/***/ }),

/***/ "./src/app/content/material-5/material-5.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/content/material-5/material-5.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"little-margin-res\"></div>\n<div class=\"container-fluid content-fluid\">\n  <div class=\"large-margin\"></div>\n  <div class=\"panel panel-default\">\n      <div class=\"panel-img\" style=\"position:relative;background-image:url(assets/img/contents/2-preview-2.jpg);background-position: 50% 60%;\"></div>\n    <div class=\"panel-body\" >\n      <br>\n      <p _ngcontent-c3=\"\" style=\"padding-left: 21px;padding-right: 21px;font-family: mn-me;padding-top: 14px;background-color:white;position: absolute;\" class=\"emp\" class=\"margin-res\">บทที่ 2 ยีนและโครโมโซม</p></div>\n    <hr>\n    <div class=\"panel-body padding-content\">\n      <br>\n      <div class=\"text-center\">\n      <a class=\"font-res\" style=\"font-family: mn-con;\" routerLink=\"/course/@genetic-material\" routerLinkActive=\"active\">1</a> |\n      <a class=\"font-res\" style=\"font-family: mn-con;\" routerLink=\"/course/@genetic-material-2\" routerLinkActive=\"active\">2</a> |\n      <a class=\"font-res\" style=\"font-family: mn-con;\" routerLink=\"/course/@genetic-material-3\" routerLinkActive=\"active\">3</a> |\n      <a class=\"font-res\" style=\"font-family: mn-con;\" routerLink=\"/course/@genetic-material-4\" routerLinkActive=\"active\">4</a> |\n      <a class=\"font-res\" style=\"font-family: mn-con;\" routerLink=\"/course/@genetic-material-5\" routerLinkActive=\"active\">5</a> \n      </div><br>\n      \n      <h5>5. การกลายพันธุ์ (Mutation)</h5>\n      <hr>\n      \n\n      <p class=\"font-res\" style=\"font-family: mn-con;\">\n        ก็คือการเปลี่ยนแปลงของสารพันธุกรรมซึ่ง จะถ่ายทอด หรือไม่ถ่ายทอดไปสู่รุ่นลูกก็ได้ โดยถ้าเกิดกับเซลล์สืบพันธุ์ (gamete) จะถ่ายทอด แต่ถ้าเกิดกับเซลล์ร่างกายจะไม่ถ่ายทอด<br><br>\n        เกิดขึ้นเองตามธรรมชาติ (spontaneous mutation) แต่โอกาสน้อยมาก อาจเกิดจากสารชักนำเช่น colchicine,<br> \n        สารก่อมะเร็ง (carcinogen) อันได้แก่รังสีต่างๆและสารเคมีเช่น aflatoxinr \n      </p><br><br>\n\n      <p class=\"font-res\" style=\"font-family: mn-con;\">\n        การกลายพันธุ์มี 2 ระดับคือ </p>\n        <ul _ngcontent-c3=\"\" class=\"font-res\" style=\"font-family: mn-con;\">\n          <li _ngcontent-c3=\"\" style=\"margin-bottom: 15px;\">\n            <b>ระดับยีน</b> กลายเฉพาะจุด เช่น การแทนที่คู่เบส (base-pair substitution) การเพิ่มขึ้นของนิวคลีโอไทด์ (insertion) และการหายไปของนิวคลีโอไทด์ (deletion)\n          </li>\n          <li _ngcontent-c3=\"\" style=\"margin-bottom: 15px;\">\n            <b>ระดับโครโมโซม</b> เป็นการเปลี่ยนแปลงของโครโมโซม เช่น การแลกชิ้นส่วนระหว่างโครโมโซม และโครงสร้างเปลี่ยนแปลง\n          </li>\n        </ul> <br><br>\n\n      <p class=\"font-res\" style=\"font-family: mn-con;\">\n        <b>5.1 การกลายพันธุ์ระดับยีน</b></p>\n\n        <div class=\"large-margin\"></div>\n          <img class=\"center-block\" src=\"assets/img/contents/2/20.jpg\" width=\"100%\" height=\"100%\">\n          <p _ngcontent-c3=\"\" class=\"font-res text-center re\" style=\"color: darkgrey;margin-top: 10px;font-size: 25px;\">ระดับยีน</p>\n          <div class=\"large-margin\"></div>\n\n      <p class=\"font-res\" style=\"font-family: mn-con;\">\n        *** การแทนที่คู่เบสคือจำนวนเบสยังอยู่เหมือนเดิม เพียงแต่ถูกแทนที่ด้วยตัวอื่น หรืออาจจะเป็นตัวเดิมก็ได้\n      </p><br><br>\n\n      <p class=\"font-res\" style=\"font-family: mn-con;\">\n        5.1.2 การเพิ่มหรือลดจำนวนนิวคลีโอไทด์<br>\nกรณีนี้คือเบสเพิ่มไม่ก็หายไปเลย จะทำให้เกิดการเลื่อนลำดับการอ่านเบส ทำให้กรดอะมิโนที่ได้จะเปลี่ยนไปทั้งหมด (frameshift mutation)</p><br><br>\n\n<p class=\"font-res\" style=\"font-family: mn-con;\">\n  5.1.2 การกลายพันธุ์ระดับโครโมโซม<br>\nสามารถดูได้จากโครโมโซมโดยตรงโดยการทำ karyotype</p>\n<div class=\"large-margin\"></div>\n          <img class=\"center-block\" src=\"assets/img/contents/2/21.jpg\" width=\"100%\" height=\"100%\">\n          <p _ngcontent-c3=\"\" class=\"font-res text-center re\" style=\"color: darkgrey;margin-top: 10px;font-size: 25px;\">ระดับโครโมโซม</p>\n          <div class=\"large-margin\"></div>\n\n<p class=\"font-res\" style=\"font-family: mn-con;\">\n  มีการเปลี่ยนแปลงหลายชนิด ทั้งทางโครงสร้าง และถึงขั้นเปลี่ยนจำนวนโครโมโซมเลย<br>\nซึ่งสำหรับสัตว์ การเปลี่ยนแปลงทางโครงสร้างก็จะทำให้เป็นโรคต่างๆ\nแต่ถ้าถึงขั้นเปลี่ยนจำนวนโครโมโซม โอกาสรอดจะต่ำมากๆ</p><br><br>\n\n<p class=\"font-res\" style=\"font-family: mn-con;\">\n  แต่สำหรับในพืช การเพิ่มจำนวนของโครโมโซมนั้น จะยิ่งทำให้สัดส่วนของพืชที่ได้นั้นใหญ่ขึ้นตามจำนวนโครโมโซมที่เพิ่ม..!!\n</p><br><br>\n\n<p class=\"font-res\" style=\"font-family: mn-con;\">\n  ซึ่งสารที่ทำให้จำนวนโครโมโซมเพิ่มมีชื่อว่า colchicine</p>\n\n  <div class=\"large-margin\"></div>\n          <img class=\"center-block\" src=\"assets/img/contents/2/22.gif\" width=\"100%\" height=\"100%\">\n          <p _ngcontent-c3=\"\" class=\"font-res text-center re\" style=\"color: darkgrey;margin-top: 10px;font-size: 25px;\">Colchicine ด้านซ้ายคือไม่ได้ฉีด ด้านขวาคือฉีด</p>\n          <div class=\"large-margin\"></div>\n\n  <p class=\"font-res\" style=\"font-family: mn-con;\">\n    คุณสมบัตินี้ทำให้มีการนำไปประยุกต์ใช้กับพืช เพื่อให้ดอกและผลที่ใหญ่ขึ้นกว่าเดิม</p><br><br>\n\n    <p class=\"font-res\" style=\"font-family: mn-con;\">\n      โรคหลักๆที่ควรรู้เมื่อโครโมโซมผิดปกติ<br>\n      Autosome ผิดปกติ</p>\n\n         <ul _ngcontent-c3=\"\" class=\"font-res\" style=\"font-family: mn-con;\">\n          <li _ngcontent-c3=\"\" style=\"margin-bottom: 15px;\">\n            1. Down syndrome โครโมโซมคู่ที่ 21 เกินมา 1 แท่ง (trisomy 21)\n          </li>\n          <li _ngcontent-c3=\"\" style=\"margin-bottom: 15px;\">\n            2. Patau syndrome Trisomy 13\n          </li>\n          <li _ngcontent-c3=\"\" style=\"margin-bottom: 15px;\">\n            3. Edwards syndrome Trisomy 18\n          </li>\n        </ul>\n        <div class=\"large-margin\"></div>\n          <img class=\"center-block\" src=\"assets/img/contents/2/23.jpg\" width=\"100%\" height=\"100%\">\n          <p _ngcontent-c3=\"\" class=\"font-res text-center re\" style=\"color: darkgrey;margin-top: 10px;font-size: 25px;\">ตัวอย่าง autosome ผิดปกติ, Down Syndrome trisomy 21</p>\n          <div class=\"large-margin\"></div>\n\n      \n        <p class=\"font-res\" style=\"font-family: mn-con;\">\n          Sex chromosome ผิดปกติ</p>\n    \n             <ul _ngcontent-c3=\"\" class=\"font-res\" style=\"font-family: mn-con;\">\n              <li _ngcontent-c3=\"\" style=\"margin-bottom: 15px;\">\n                1. Turner syndrome มี X แท่งเดียว <b>หญิงเท่านั้น</b>\n              </li>\n              <li _ngcontent-c3=\"\" style=\"margin-bottom: 15px;\">\n                2. Double Y syndrome มี Y เกินมาอีกตัว เป็น XYY <b>ชายเท่านั้น</b>\n              </li>\n              <li _ngcontent-c3=\"\" style=\"margin-bottom: 15px;\">\n                3. Triple X syndrome  มี X เกินมาอีกตัว เป็น  XXX <b>หญิงเท่านั้น</b>\n              </li>\n              <li _ngcontent-c3=\"\" style=\"margin-bottom: 15px;\">\n                4. Kinefelter syndrome มี X เพิ่มมาอีก 1-3 ตัวในเพศชายเป็น XXY, XXXY, XXXXY <b>ชายเท่านั้น</b>\n              </li>\n            </ul> \n            <div class=\"large-margin\"></div>\n          <img class=\"center-block\" src=\"assets/img/contents/2/24.jpeg\" width=\"100%\" height=\"100%\">\n          <p _ngcontent-c3=\"\" class=\"font-res text-center re\" style=\"color: darkgrey;margin-top: 10px;font-size: 25px;\">ตัวอย่าง sex chromosome ผิดปกติ, Kinefelter syndrome XXY</p>\n          <div class=\"large-margin\"></div>\n\n      \n\n      <br>\n         <div class=\"text-center\">\n          <a class=\"font-res\" style=\"font-family: mn-con;\" routerLink=\"/course/@genetic-material\" routerLinkActive=\"active\">1</a> |\n          <a class=\"font-res\" style=\"font-family: mn-con;\" routerLink=\"/course/@genetic-material-2\" routerLinkActive=\"active\">2</a> |\n          <a class=\"font-res\" style=\"font-family: mn-con;\" routerLink=\"/course/@genetic-material-3\" routerLinkActive=\"active\">3</a> |\n          <a class=\"font-res\" style=\"font-family: mn-con;\" routerLink=\"/course/@genetic-material-4\" routerLinkActive=\"active\">4</a> |\n          <a class=\"font-res\" style=\"font-family: mn-con;\" routerLink=\"/course/@genetic-material-5\" routerLinkActive=\"active\">5</a> \n          </div><br>\n          <a routerLink=\"/test/@genetic-material\" class=\"btn btn-success btn-block\">ทำแบบทดสอบ</a>\n          <br _ngcontent-c7=\"\">\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/content/material-5/material-5.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Material5Component; });
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

var Material5Component = /** @class */ (function () {
    function Material5Component() {
    }
    Material5Component.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
    };
    Material5Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-material-5',
            template: __webpack_require__("./src/app/content/material-5/material-5.component.html"),
            styles: [__webpack_require__("./src/app/content/material-5/material-5.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Material5Component);
    return Material5Component;
}());



/***/ }),

/***/ "./src/app/content/material/material.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/content/material/material.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"little-margin-res\"></div>\n<div class=\"container-fluid content-fluid\">\n  <div class=\"large-margin\"></div>\n  <div class=\"panel panel-default\">\n      <div class=\"panel-img\" style=\"position:relative;background-image:url(assets/img/contents/2-preview-2.jpg);background-position: 50% 60%;\"></div>\n    <div class=\"panel-body\" >\n      <br>\n      <p _ngcontent-c3=\"\" style=\"padding-left: 21px;padding-right: 21px;font-family: mn-me;padding-top: 14px;background-color:white;position: absolute;\" class=\"emp\" class=\"margin-res\">บทที่ 2 ยีนและโครโมโซม</p></div>\n    <hr>\n    <div class=\"panel-body padding-content\">\n      <div class=\"small-margin\"></div>\n      <div class=\"quote\">\n        Imagination is more important than<Br>knowledge. Knowledge is limited.<br>\n        Imagination encircles the world.</div>\n      <div class=\"small-margin\"></div>\n      <br>\n      <div class=\"text-center\">\n      <a class=\"font-res\" style=\"font-family: mn-con;\" routerLink=\"/course/@genetic-material\" routerLinkActive=\"active\">1</a> |\n      <a class=\"font-res\" style=\"font-family: mn-con;\" routerLink=\"/course/@genetic-material-2\" routerLinkActive=\"active\">2</a> |\n      <a class=\"font-res\" style=\"font-family: mn-con;\" routerLink=\"/course/@genetic-material-3\" routerLinkActive=\"active\">3</a> |\n      <a class=\"font-res\" style=\"font-family: mn-con;\" routerLink=\"/course/@genetic-material-4\" routerLinkActive=\"active\">4</a> |\n      <a class=\"font-res\" style=\"font-family: mn-con;\" routerLink=\"/course/@genetic-material-5\" routerLinkActive=\"active\">5</a> \n      </div><br>\n\n      <p class=\"font-res\" style=\"font-family: mn-con;\">\n        ในบทนี้จะพูดถึงการค้นพบสารพันธุกรรม (พวก DNA, RNA) โครงสร้างของสารพันธุกรรม และการถอดรหัสจากสารพันธุกรรม\n        <br>เนื่องจากเนื้อหาค่อนข้างยาว บทนี้จึงถูกแยกเป็น 5 หน้าดังนี้\n      </p>\n\n      <ul _ngcontent-c3=\"\" class=\"font-res\" style=\"font-family: mn-con;\">\n        <li _ngcontent-c3=\"\" style=\"margin-bottom: 15px;\">\n          1. การค้นพบสารพันธุกรรม \n        </li>\n        <li _ngcontent-c3=\"\" style=\"margin-bottom: 15px;\">\n          2. โครงสร้างของสารพันธุกรรม\n        </li>\n        <li _ngcontent-c3=\"\" style=\"margin-bottom: 15px;\">\n          3. การจำลองตัวของ DNA\n        </li>\n        <li _ngcontent-c3=\"\" style=\"margin-bottom: 15px;\">\n          4. การถอดรหัส DNA จนได้ผลลัพธ์\n        </li>\n      </ul> <br><br>\n\n      <p _ngcontent-c7=\"\" class=\"font-res\" style=\"font-family: mn-con;color: #e9b668;/* text-decoration:  underline; */\"><i _ngcontent-c7=\"\" class=\"fa fa-lightbulb-o\"></i> \n       สารพันธุกรรมคือ ..?</p>\n\n       <p class=\"font-res\" style=\"font-family: mn-con;\">\n          สารพันธุกรรม หรือเรียกแบบดูดีว่า <b>กรดนิวคลีอิก (Nucleic Acid)</b> ก็คือสารที่ทำหน้าที่เก็บข้อมูลทางพันธุกรรมของสิ่งมีชีวิตนั่นแหละ  เช่นเก็บว่าสิ่งมีชีวิตนี้จะเป็นสีใด ขนาดเท่าไหร่ โดยเมื่อสิ่งมีชีวิตมีการสืบพันธุ์ จะมีการถ่ายทอดสารพันธุกรรมเหล่านี้ไปด้วย</p>​<br><br>\n          \n\n          <p class=\"font-res\" style=\"font-family: mn-con;\">\n              สารพันธุกรรมของสิ่งมีชีวิตมี 2 แบบ (คือเป็นกรด nucleic ทั้งคู่ เพียงแต่โครงสร้างต่างกัน)\n          </p>\n          <ul _ngcontent-c3=\"\" class=\"font-res\" style=\"font-family: mn-con;\">\n              <li _ngcontent-c3=\"\" style=\"margin-bottom: 15px;\">\n                <b>DNA</b> พบในสิ่งมีชีวิตส่วนใหญ่\n\n                </li>\n                <li _ngcontent-c3=\"\" style=\"margin-bottom: 15px;\">\n                    <b>RNA</b> พบในสิ่งมีชีวิตบางชนิด เช่น RNA virus, ไวรอยด์\n                    </li>\n            </ul><br><br>\n          \n            <p class=\"font-res\" style=\"font-family: mn-con;\">\n                ***** กรดนิวคลีอิกไม่ใช่โปรตีน\n            </p> <br><br>\n          \n\n          <h5>1. การค้นพบสารพันธุกรรม</h5>\n          <hr>\n          <p class=\"font-res\" style=\"font-family: mn-con;\">\n            สมัยก่อน นักวิทยาศาสตร์มีการถกเถียงกันเรื่อง <b>โปรตีน กับ กรดนิวคลีอิก สิ่งใดคือสารพันธุกรรม???</b><br><br>\n            โดยนักวิทยาศาสตร์ในยุคนั้นเดาว่า โปรตีน คือสารพันธุกรรม เนื่องจากกรดนิวคลีอิกนั้น โครงสร้างแทบไม่มีอะไรเลย ผิดกับโปรตีน ที่ซึ่งมีโครงสร้างซับซ้อนกว่า ดูน่าจะมีความหลากหลายมากกว่า<br><br>\n            นักวิทยาศาสตร์หลายท่านจึงทำการทดลอง เพื่อพิสูจน์ว่าแท้จริงแล้ว สิ่งใดคือสารพันธุกรรม..<br><br>\n          </p>\n\n          <p class=\"font-res\" style=\"font-family: mn-con;\">\n             <b>1.1 การทดลองของ Griffith</b> \n          </p>\n          <p class=\"font-res\" style=\"font-family: mn-con;\">\n              ทดลองฉีดแบคทีเรียโรคปอดบวม(pneumonia) เข้าไปในหนูทดลอง<br> โดยแบคทีเรียปอดบวมมี 2 ชนิดคือ\n           </p>\n\n           <ul _ngcontent-c3=\"\" class=\"font-res\" style=\"font-family: mn-con;\">\n              <li _ngcontent-c3=\"\" style=\"margin-bottom: 15px;\">\n                <b>ชนิด S (Smooth, ผิวเรียบ)</b> ชนิดนี้ทำให้หนูตาย (แบคทีเรียมันมีแคปซูล(ผิวจึงเรียบ) ทำให้ไม่ถูกภูมิคุ้มกันหนูทำลาย จึงทำให้หนูตายได้)\n              </li>\n              <li _ngcontent-c3=\"\" style=\"margin-bottom: 15px;\">\n                  <b>ชนิด R (Rough, ผิวขรุขระ)</b> ชนิดนี้หนูไม่ตาย (แบคทีเรียมันไม่มีแคปซูล(ผิวจึงขรุขระ) จึงถูกภูมิคุ้มกันหนูทำลายหมดก่อน หนูเลยรอด)\n              </li>\n            </ul>\n          <br><br>\n\n          <p class=\"font-res\" style=\"font-family: mn-con;\">\n              ทำการทดลองโดยนำแบคทีเรียชนิด S และ R มาฉีด\n           </p>\n\n           <ul _ngcontent-c3=\"\" class=\"font-res\" style=\"font-family: mn-con;\">\n              <li _ngcontent-c3=\"\" style=\"margin-bottom: 15px;\">\n                <b>1. ฉีดแบคทีเรียชนิด R เข้าไป</b> หนูรอด ;D\n              </li>\n              <li _ngcontent-c3=\"\" style=\"margin-bottom: 15px;\">\n                  <b>2. ฉีดแบคทีเรียชนิด S เข้าไป</b> หนูตาย\n              </li>\n              <li _ngcontent-c3=\"\" style=\"margin-bottom: 15px;\">\n                  <b>3. นำชนิด S ไปผ่านความร้อนให้ตายๆก่อนแล้วค่อยฉีด</b> หนูรอด\n              </li>\n              <li _ngcontent-c3=\"\" style=\"margin-bottom: 15px;\">\n                  <b>4. นำชนิด S ไปผ่านความร้อนให้ตายๆก่อนแล้วค่อยฉีด แล้วเติมแบคทีเรีย R ปกติไป</b> หนูตาย ...?????\n              </li>\n\n            </ul>\n\n            <p class=\"font-res\" style=\"font-family: mn-con;\">\n              หนูตายได้อย่างไร ในเมื่อแบคทีเรีย R ปกติไม่ทำให้หนูตาย และแบคทีเรีย S ก็ถูกนำไปผ่านความร้อนจนตายหมดแล้ว...\n             </p><br><br>\n\n             <p class=\"font-res\" style=\"font-family: mn-con;\">\n              Griffith จึงสรุปว่า <b>แบคทีเรีย S ที่ตายแล้ว น่าจะส่งสารพันธุกรรมไปให้ R</b><br> แต่ก็ยังไม่รู้ว่าเป็นสารใดระหว่างโปรตีนกับกรดนิวคลีอิก\n            </p>\n\n            <div class=\"large-margin\"></div>\n          <img class=\"center-block\" src=\"assets/img/contents/2-1.jpg\" width=\"100%\" height=\"100%\">\n          <p _ngcontent-c3=\"\" class=\"font-res text-center re\" style=\"color: darkgrey;margin-top: 10px;font-size: 25px;\">การทดลองของ Griffith</p>\n          <div class=\"large-margin\"></div>\n\n            <p class=\"font-res\" style=\"font-family: mn-con;\">\n                <b>1.2 การทดลองของ Avery และ Maccarty</b> \n             </p>\n\n             <p class=\"font-res\" style=\"font-family: mn-con;\">\n              ทดลองต่อจาก Griffith เพื่อหาว่าสารที่ S ส่งไปให้ R คือสารใด <br>\n              โดยนำสารที่ S ส่งไปให้ R นี้ไปย่อยด้วยเอนไซม์\n              \n            </p>\n\n            <ul _ngcontent-c3=\"\" class=\"font-res\" style=\"font-family: mn-con;\">\n                <li _ngcontent-c3=\"\" style=\"margin-bottom: 15px;\">\n                  ย่อยด้วย Protease(สารย่อยโปรตีน) ผลคือ สารยังทำงานได้ปกติ\n                </li>\n                <li _ngcontent-c3=\"\" style=\"margin-bottom: 15px;\">\n                  ย่อยด้วย RNase (สารย่อย RNA) ผลคือ สารยังทำงานได้ปกติ\n                </li>\n                <li _ngcontent-c3=\"\" style=\"margin-bottom: 15px;\">\n                  ย่อด้วย DNase (สารย่อย DNA) ผลคือ สารหมดฤทธิ์\n                </li>\n  \n              </ul>\n              <p class=\"font-res\" style=\"font-family: mn-con;\">\n                การทดลองนี้จึงยืนยันอย่างชัดเจน ว่า DNA คือสารที่ S ส่งไปให้ R หรือก็คือ <b>สารพันธุกรรม</b>\n              </p><br><br>\n\n              <p class=\"font-res\" style=\"font-family: mn-con;\">\n                <b>1.3 การทดลองของ Hershey และ Chase </b> \n\n                \n        การทดลองนี้จะช่วยย้ำว่ากรดนิวคลีอิกคือสารพันธุกรรม<br>\n\n        โดยใช้วิธีติดฉลากที่ ไวรัสเจาะแบคทีเรีย (Bacteriophage) \n             </p>\n\n             <div class=\"large-margin\"></div>\n          <img class=\"center-block\" src=\"assets/img/contents/2/2.jpg\" width=\"100%\" height=\"100%\">\n          <p _ngcontent-c3=\"\" class=\"font-res text-center re\" style=\"color: darkgrey;margin-top: 10px;font-size: 25px;\">ตัว Bacteriophage</p>\n          <div class=\"large-margin\"></div>\n\n          <p class=\"font-res\" style=\"font-family: mn-con;\">\n            พวก Bacteriophage เรามั่นใจอยู่แล้วว่า สารที่มันส่งให้แบคทีเรีย คือสารพันธุกรรมแน่นอน<br>\nฉะนั้นการทดลองนี้จึงค่อนข้างชัดเจนกว่า<br><br>\n\nโดยเลี้ยงไวรัสไว้  2 กลุ่ม<br>\nกลุ่มแรกติดฉลาก กำมะถัน (S) ซึ่งกำมะถันไม่มีใน กรดนิวคลีอิก<br>\nกลุ่มที่สองติดฉลาก ฟอสฟอรัส (P) ซึ่งฟอสฟอรัสมีใน กรดนิวคลีอิก<br><br>\nโดยถ้าสารไหนเป็นองค์ประกอบของสารพันธุกรรม สารนั้นจะเข้าไปอยู่รวมกับสารพันธุกรรม<br>\nดังนั้นเมื่อไวรัสส่งสารพันธุกรรมไปให้แบคทีเรียแล้ว จะทำให้เมื่อส่องกล้องมา จะเห็นสารนั้นเรืองแสงอยู่\n         </p>\n\n         <div class=\"large-margin\"></div>\n          <img class=\"center-block\" src=\"assets/img/contents/2/1.jpg\" width=\"100%\" height=\"100%\">\n          <p _ngcontent-c3=\"\" class=\"font-res text-center re\" style=\"color: darkgrey;margin-top: 10px;font-size: 25px;\">การทดลอง</p>\n          <div class=\"large-margin\"></div>\n\n          <p class=\"font-res\" style=\"font-family: mn-con;\">\n            ผลการทดลองพบว่าเมื่อส่องกล้องแล้ว พบแต่ฉลาก P เรืองแสง จึงสรุปได้อย่างชัดเจนว่า\n<b>กรดนิวคลีอิก คือสารพันธุกรรม</b>\n         </p>\n\n\n\n              \n\n\n\n      <br>\n         <div class=\"text-center\">\n          <a class=\"font-res\" style=\"font-family: mn-con;\" routerLink=\"/course/@genetic-material\" routerLinkActive=\"active\">1</a> |\n          <a class=\"font-res\" style=\"font-family: mn-con;\" routerLink=\"/course/@genetic-material-2\" routerLinkActive=\"active\">2</a> |\n          <a class=\"font-res\" style=\"font-family: mn-con;\" routerLink=\"/course/@genetic-material-3\" routerLinkActive=\"active\">3</a> |\n          <a class=\"font-res\" style=\"font-family: mn-con;\" routerLink=\"/course/@genetic-material-4\" routerLinkActive=\"active\">4</a> |\n          <a class=\"font-res\" style=\"font-family: mn-con;\" routerLink=\"/course/@genetic-material-5\" routerLinkActive=\"active\">5</a> \n          </div><br>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/content/material/material.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialComponent; });
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

var MaterialComponent = /** @class */ (function () {
    function MaterialComponent() {
    }
    MaterialComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
    };
    MaterialComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-material',
            template: __webpack_require__("./src/app/content/material/material.component.html"),
            styles: [__webpack_require__("./src/app/content/material/material.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MaterialComponent);
    return MaterialComponent;
}());



/***/ }),

/***/ "./src/app/course/course.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/course/course.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"large-margin\"></div>\n<div class=\"container-fluid content-fluid\">\n  <app-course-show></app-course-show>\n</div>"

/***/ }),

/***/ "./src/app/course/course.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CourseComponent; });
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

var CourseComponent = /** @class */ (function () {
    function CourseComponent() {
    }
    CourseComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
    };
    CourseComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-course',
            template: __webpack_require__("./src/app/course/course.component.html"),
            styles: [__webpack_require__("./src/app/course/course.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CourseComponent);
    return CourseComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<br><br>\n<div class=\"large-margin\"></div>\n<div class=\"container-fluid content-fluid\">\n  \n      \n      <div class=\"row\">\n        <div class=\"col-md-2\"></div>\n        <div class=\"col-md-8\">\n            <div class=\"panel panel-default\">\n                <div class=\"panel-body\">\n                  <h5 class=\"text-center animated fadeIn\">แก้ไข username password</h5>\n                  <p *ngIf=\"error !== 'undefined'\" class=\"text-danger\">{{error}}</p>\n                  <div class=\"little-margin\"></div>\n\n                  <div class=\"form-group row\" style=\"margin-left: 10px;margin-right: 10px;\">\n                      <label  class=\"col-sm-2 col-form-label visible-check\">ชื่อผู้ใช้</label>\n                      <div class=\"col-sm-10\">\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" placeholder=\"ชื่อผู้ใช้\" maxlength=\"20\" required>\n                      </div>\n                  </div>\n\n                  <div class=\"form-group row\" style=\"margin-left: 10px;margin-right: 10px;\">\n                      <label  class=\"col-sm-2 col-form-label visible-check\">รหัสผ่านใหม่</label>\n                      <div class=\"col-sm-10\">\n                        <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" placeholder=\"รหัสผ่านใหม่\" maxlength=\"20\" required>\n                      </div>\n                  </div>\n                  \n                  <button class=\"btn btn-warning center-block visible-check\" (click)=\"changePwd()\">แก้ไข</button>\n              <div style=\"margin-left: 22px;margin-right: 22px;\">\n                <button class=\"btn btn-warning btn-block visible-xs-block\" (click)=\"changePwd()\">แก้ไข</button>\n              </div>\n\n              <div class=\"little-margin\"></div>\n                </div>\n            </div>\n        </div>\n      </div>\n</div>\n<div class=\"large-margin\"></div>\n<div class=\"container-fluid content-fluid\">\n  \n      \n      <div class=\"row\">\n        <div class=\"col-md-2\"></div>\n        <div class=\"col-md-8\">\n            <div class=\"panel panel-default\">\n                <div class=\"panel-body\">\n                  <h5 class=\"text-center nimated fadeIn\">แก้ไขข้อมูลส่วนตัว</h5>\n                  <p *ngIf=\"errorInfo !== 'undefined'\" class=\"text-danger\">{{errorInfo}}</p>\n                  <div class=\"little-margin\"></div>\n\n                  <div class=\"form-group row\" style=\"margin-left: 10px;margin-right: 10px;\">\n                      <label  class=\"col-sm-2 col-form-label visible-check\">ชื่อจริง</label>\n                      <div class=\"col-sm-10\">\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"name\" placeholder=\"ชื่อจริง\" maxlength=\"20\" required>\n                      </div>\n                  </div>\n\n                  <div class=\"form-group row\" style=\"margin-left: 10px;margin-right: 10px;\">\n                      <label  class=\"col-sm-2 col-form-label visible-check\">นามสกุล</label>\n                      <div class=\"col-sm-10\">\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"lastname\" placeholder=\"นามสกุล\" maxlength=\"20\" required>\n                      </div>\n                  </div>\n\n                  <div class=\"form-group row\" style=\"margin-left: 10px;margin-right: 10px;\">\n                      <label  class=\"col-sm-2 col-form-label visible-check\">ชั้น </label>\n                      <div class=\"col-sm-3\">\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"studentClass\" placeholder=\"ชั้น\" maxlength=\"1\" required>\n              \n                        \n                      </div>\n                      \n\n                      <div class=\"col-sm-3\">\n                          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"studentRoom\" placeholder=\"ห้อง\" maxlength=\"2\" required>\n                           \n                          \n                        </div>\n                  </div>\n\n                  <div class=\"form-group row\" style=\"margin-left: 10px;margin-right: 10px;\">\n                      <label  class=\"col-sm-2 col-form-label visible-check\">เลขที่</label>\n                      <div class=\"col-sm-10\">\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"studentNumber\" placeholder=\"เลขที่\" maxlength=\"2\" required>\n                      </div>\n                  </div>\n\n\n                  \n                  <button class=\"btn btn-warning center-block visible-check\" (click)=\"changeInfo()\">แก้ไข</button>\n              <div style=\"margin-left: 22px;margin-right: 22px;\">\n                <button class=\"btn btn-warning btn-block visible-xs-block\" (click)=\"changeInfo()\">แก้ไข</button>\n              </div>\n\n              <div class=\"little-margin\"></div>\n                </div>\n            </div>\n        </div>\n      </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("./src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(router, dataService) {
        this.router = router;
        this.dataService = dataService;
        this.username = '';
        this.password = '';
        this.name = '';
        this.lastname = '';
        this.studentNumber = '0';
        this.studentRoom = '';
        this.studentClass = '';
        this.error = '';
        this.errorInfo = '';
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.scrollTo(0, 0);
        this.onLoad('prepare', {}, function () {
            _this.onLoad('user', {}, function () {
                if (!_this.sessionPass.isLogin) {
                    _this.router.navigate(['/']);
                }
                else {
                    _this.username = _this.userPass.username;
                    _this.name = _this.userPass.name;
                    _this.lastname = _this.userPass.lastname;
                    _this.studentClass = _this.userPass.class;
                    _this.studentRoom = _this.userPass.room;
                    _this.studentNumber = _this.userPass.no;
                }
            });
        });
    };
    DashboardComponent.prototype.onLoad = function (tag, arg, callback) {
        var _this = this;
        if (tag === void 0) { tag = 'prepare'; }
        if (arg === void 0) { arg = {}; }
        if (callback === void 0) { callback = function () { }; }
        if (tag == 'user') {
            this.dataService.getUser(this.sessionPass.username)
                .subscribe(function (response) {
                if (!response.status) {
                    _this.userPass = undefined;
                    callback();
                }
                else {
                    _this.userPass = response.message[0];
                    callback();
                }
            });
        }
        if (tag == 'session' || tag == 'prepare') {
            this.dataService.getSession()
                .subscribe(function (response) {
                _this.sessionPass = response.message;
                callback();
            });
        }
    };
    DashboardComponent.prototype.changePwd = function () {
        var _this = this;
        this.dataService.postUpdate(this.username, this.password)
            .subscribe(function (res) {
            if (!res.status) {
                if (res.message == 'bad input') {
                    _this.error = '4 ≤ Username, Password ≤ 20';
                }
                else {
                    _this.error = 'Username นี้มีในระบบแล้ว';
                }
            }
            else {
                location.reload();
            }
        });
    };
    DashboardComponent.prototype.changeInfo = function () {
        var _this = this;
        this.dataService.postUpdateInfo(this.name, this.lastname, this.studentClass, this.studentRoom, this.studentNumber)
            .subscribe(function (res) {
            if (!res.status) {
                _this.errorInfo = 'กรอกข้อมูลให้ครบ';
            }
            else {
                location.reload();
            }
        });
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/dashboard.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_js_sha512__ = __webpack_require__("./node_modules/js-sha512/src/sha512.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_js_sha512___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_js_sha512__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.getSession = function () {
        return this.http.post('api/getsession', {})
            .map(function (res) { return res.json(); });
    };
    DataService.prototype.getUser = function (name) {
        return this.http.post('api/search', { username: name })
            .map(function (res) { return res.json(); });
    };
    DataService.prototype.postLogout = function () {
        return this.http.post('api/logout', {})
            .map(function (res) { return res.json(); });
    };
    DataService.prototype.postLogin = function (user, pwd, cap) {
        return this.http.post('api/login', { username: user, password: __WEBPACK_IMPORTED_MODULE_2_js_sha512__(pwd), captcha: cap })
            .map(function (res) { return res.json(); });
    };
    DataService.prototype.postUpdate = function (user, pwd) {
        return this.http.post('api/update', { username: user, password: __WEBPACK_IMPORTED_MODULE_2_js_sha512__(pwd) })
            .map(function (res) { return res.json(); });
    };
    DataService.prototype.postUpdateInfo = function (nme, lastnme, c, r, n) {
        return this.http.post('api/updateinfo', { name: nme, lastname: lastnme, class: c, room: r, no: n })
            .map(function (res) { return res.json(); });
    };
    DataService.prototype.postAnswer = function (whe, ans) {
        return this.http.post('api/answer', { where: '' + whe, answer: ans })
            .map(function (res) { return res.json(); });
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<nav-jumbotron></nav-jumbotron>\n<div class=\"add-back\">\n  <div class=\"container-fluid content-fluid\">\n    <br>\n    <div class=\"panel panel-default\">\n      <div class=\"panel-body\">\n        <br>\n          <img src=\"assets/img/kruwannee-jumbotron.png\" class=\"center-block animated bounce\" width=\"200\" height=\"166\">\n      </div>\n    </div>\n   \n    <app-profile></app-profile>\n    <app-course-show></app-course-show>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
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

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<br><br>\n<div class=\"large-margin\"></div>\n<div class=\"container-fluid text-center\">\n  \n      \n      <div class=\"row\">\n        <div class=\"col-md-2\"></div>\n        <div class=\"col-md-8\">\n            <div class=\"panel panel-default\">\n                <div class=\"panel-body\">\n                  \n                    <h4 class=\"animated fadeIn\">เข้าสู่ระบบ</h4>\n                    <p *ngIf=\"error !== 'undefined'\" class=\"text-danger\">{{error}}</p>\n        \n            <div class=\"form-group row\" style=\"margin-left: 10px;margin-right: 10px;\">\n                <label for=\"username\" class=\"col-sm-2 col-form-label visible-check\">Username</label>\n                <div class=\"col-sm-10\">\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" placeholder=\"ชื่อผู้ใช้\" required>\n                </div>\n              </div>\n              <div class=\"form-group row\" style=\"margin-left: 10px;margin-right: 10px;\">\n                  <label for=\"username\" class=\"col-sm-2 col-form-label visible-check\">Password</label>\n                  <div class=\"col-sm-10\">\n                    <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" placeholder=\"รหัสผ่าน\" required>\n                  </div>\n                </div>\n                <div class=\"form-group row\" style=\"margin-left: 10px;margin-right: 10px;\">\n                  <label for=\"username\" class=\"col-sm-2 col-form-label visible-check\">{{sessionPass?.token}}</label>\n                  <p class=\"visible-xs-block\">{{sessionPass?.token}}</p>\n                  <div class=\"col-sm-10\">\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"token\" placeholder=\"กรอกตัวเลข {{sessionPass?.token}}\" required>\n                  </div>\n                </div>\n              <button class=\"btn btn-success center-block visible-check\" (click)=\"onLogin()\">เข้าสู่ระบบ</button>\n              <div style=\"margin-left: 22px;margin-right: 22px;\">\n                <button class=\"btn btn-success btn-block visible-xs-block\" (click)=\"onLogin()\">เข้าสู่ระบบ</button>\n              </div>\n\n              <div class=\"little-margin\"></div>\n              </div></div>\n\n        </div>\n      </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("./src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, dataService) {
        this.router = router;
        this.dataService = dataService;
        this.username = '';
        this.password = '';
        this.token = '';
        this.error = undefined;
    }
    LoginComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
        this.onLoad('session');
    };
    LoginComponent.prototype.onLoad = function (tag, arg, callback) {
        var _this = this;
        if (tag === void 0) { tag = 'prepare'; }
        if (arg === void 0) { arg = {}; }
        if (callback === void 0) { callback = function () { }; }
        if (tag == 'session' || tag == 'prepare') {
            this.dataService.getSession()
                .subscribe(function (response) {
                _this.sessionPass = response.message;
                if (response.message.isLogin) {
                    _this.router.navigate(['/']);
                }
                callback();
            });
        }
    };
    LoginComponent.prototype.onLogin = function () {
        var _this = this;
        this.dataService.postLogin(this.username, this.password, this.token)
            .subscribe(function (response) {
            if (!response.status) {
                _this.onLoad('session', {}, function () {
                    if (response.message == 'bad input') {
                        _this.error = 'รหัสยืนยันตัวผิดพลาด';
                        _this.token = '';
                    }
                    else {
                        _this.error = 'ไม่พบบัญชีนี้ในระบบ';
                        _this.password = '';
                        _this.token = '';
                    }
                });
            }
            else {
                location.reload();
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/problem/test1/test1.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/problem/test1/test1.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"little-margin-res\"></div>\n<div class=\"container-fluid content-fluid\">\n    <div class=\"panel panel-default\">\n        <div class=\"panel-body panel-profile\">\n          <div class=\"panel-img\" style=\"background-image:url(assets/img/contents/1-preview.jpg);background-position: 50% 40%;\"></div>\n          <div class=\"panel-card text-center\">\n            <img class=\"card-img\" src=\"assets/img/logo-profile.png\" width=\"110\" height=\"110\">\n            <div class=\"small-margin\"></div>\n            <h5>แบบทดสอบบทที่ 1: การถ่ายทอดทางพันธุกรรม</h5>\n            <div class=\"small-margin\"></div>\n            <h6 class=\"re small-content-2\">แบบทดสอบนี้มีทั้งหมด 10 ข้อ</h6>\n            <div class=\"little-margin\"></div>\n            <h5 class=\"me small-content-2 text-warning\">นักเรียนทำมาแล้ว: {{userPass?.courseTime[0]}}/10 รอบ</h5>\n            <h6 class=\"me small-content-2 text-success\">คะแนนสูงสุดของนักเรียน: {{userPass?.course[0]}} คะแนน</h6>\n            <br>\n          </div>\n        </div>\n      </div>\n  \n      \n      <div class=\"row\">\n        <div class=\"col-md-2\"></div>\n        <div class=\"col-md-8\">\n            <div class=\"panel panel-default\">\n                <div class=\"panel-body\" style=\"padding-left:36px;\" *ngIf=\"problem\">\n                  <h5 style=\"font-family:mn-con;\" class=\"font-res\">ข้อ 1: จงเติม (X) (Y) ให้สมบูรณ์</h5>\n\n                  <img class=\"zoom\" src=\"assets/img/contents/ex1.png\" width=\"100%\" height=\"100%\">\n\n                  <div class=\"radio\">\n                    <label><input name=\"problem[0]\" value=\"1\" [(ngModel)]=\"problem[0]\" type=\"radio\" >1. (X) = MM, (Y) = MM</label>\n                  </div>\n                  <div class=\"radio\">\n                    <label><input name=\"problem[0]\" value=\"2\" [(ngModel)]=\"problem[0]\" type=\"radio\" >2. (X) = MM, (Y) = mm</label>\n                  </div>\n                  <div class=\"radio\">\n                    <label><input name=\"problem[0]\" value=\"3\" [(ngModel)]=\"problem[0]\" type=\"radio\" >3. (X) = Mm, (Y) = MM</label>\n                  </div>\n                  <div class=\"radio\">\n                    <label><input name=\"problem[0]\" value=\"4\" [(ngModel)]=\"problem[0]\" type=\"radio\" >4. (X) = Mm, (Y) = mm</label>\n                  </div>\n                  \n                  \n                </div>\n            </div>\n        </div>\n      </div>\n\n      <div class=\"row\">\n          <div class=\"col-md-2\"></div>\n          <div class=\"col-md-8\">\n              <div class=\"panel panel-default\">\n                  <div class=\"panel-body\" style=\"padding-left:36px;\" *ngIf=\"problem\">\n                    <h5 style=\"font-family:mn-con;\" class=\"font-res\">ข้อ 2: ถั่วลันเตาลักษณะเมล็ดสีเหลืองเป็นลักษณะเด่นต่อลักษณะเมล็ดสีเขียว ในการผสมพันธุ์ภายในดอกเดียวกันของต้นที่มีลักษณะเมล็ดสีเหลืองที่เป็นเฮเทอโรไซกัสทั้งคู่ จงหาร้อยละของรุ่น F1 ที่มีลักษณะเมล็ดสีเขียว</h5>\n  \n            \n                    <div class=\"radio\">\n                      <label><input name=\"problem[1]\" value=\"1\" [(ngModel)]=\"problem[1]\" type=\"radio\" >25%</label>\n                    </div>\n                    <div class=\"radio\">\n                      <label><input name=\"problem[1]\" value=\"2\" [(ngModel)]=\"problem[1]\" type=\"radio\" >50%</label>\n                    </div>\n                    <div class=\"radio\">\n                      <label><input name=\"problem[1]\" value=\"3\" [(ngModel)]=\"problem[1]\" type=\"radio\" >75%</label>\n                    </div>\n                    <div class=\"radio\">\n                      <label><input name=\"problem[1]\" value=\"4\" [(ngModel)]=\"problem[1]\" type=\"radio\" >100%</label>\n                    </div>\n                    \n                    \n                  </div>\n              </div>\n          </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-md-2\"></div>\n            <div class=\"col-md-8\">\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-body\" style=\"padding-left:36px;\" *ngIf=\"problem\">\n                      <h5 style=\"font-family:mn-con;\" class=\"font-res\">ข้อ 3: ในแมลงหวี่ กำหนดให้ L เป็นยีนควบคุมลักษณะปียาวและ l เป็นยีนควบคุมลักษณะปีกสั้น เมื่อผสมพันธุ์แมลงหวี่ปีกยาวและปีกสั้น จะได้ลูกที่มีปีกยาวและลูกที่มีปีกสั้นในอัตราส่วน 1:1 จงหาจีโนไทป์ของพ่อแม่และลูกในรุ่นแรก หรือรุ่น F1</h5>\n    \n              \n                      <div class=\"radio\">\n                        <label><input name=\"problem[2]\" value=\"1\" [(ngModel)]=\"problem[2]\" type=\"radio\" >1. พ่อแม่เป็น LL และ ll ลูกเป็น LL และ ll</label>\n                      </div>\n                      <div class=\"radio\">\n                        <label><input name=\"problem[2]\" value=\"2\" [(ngModel)]=\"problem[2]\" type=\"radio\" >2. พ่อแม่เป็น LL และ ll ลูกเป็น Ll และ ll</label>\n                      </div>\n                      <div class=\"radio\">\n                        <label><input name=\"problem[2]\" value=\"3\" [(ngModel)]=\"problem[2]\" type=\"radio\" >3. พ่อแม่เป็น Ll และ ll ลูกเป็น LL และ ll</label>\n                      </div>\n                      <div class=\"radio\">\n                        <label><input name=\"problem[2]\" value=\"4\" [(ngModel)]=\"problem[2]\" type=\"radio\" >4. พ่อแม่เป็น Ll และ ll ลูกเป็น Ll และ ll</label>\n                      </div>\n                      \n                      \n                    </div>\n                </div>\n            </div>\n          </div>\n\n          <div class=\"row\">\n              <div class=\"col-md-2\"></div>\n              <div class=\"col-md-8\">\n                  <div class=\"panel panel-default\">\n                      <div class=\"panel-body\" style=\"padding-left:36px;\" *ngIf=\"problem\">\n                        <h5 style=\"font-family:mn-con;\" class=\"font-res\">ข้อ 4: เมื่อนำกระต่ายขนสีดำที่เป็น Homozygous ผสมพันธุ์กับกระต่ายขนสีน้ำตาล ปรากฎว่าลูกที่เกิดใหม่มีสีดำทั้งหมด (สมมติให้ B และ b แทนแอลลีลคู่หนึ่งที่ควบคุมลักษณะสีขน) ถ้านำรุ่น F1 ผสมกันเอง จะได้จีโนไทป์ F2 เป็นอย่างไร</h5>\n      \n                \n                        <div class=\"radio\">\n                          <label><input name=\"problem[3]\" value=\"1\" [(ngModel)]=\"problem[3]\" type=\"radio\" >1. BB</label>\n                        </div>\n                        <div class=\"radio\">\n                          <label><input name=\"problem[3]\" value=\"2\" [(ngModel)]=\"problem[3]\" type=\"radio\" >2. Bb</label>\n                        </div>\n                        <div class=\"radio\">\n                          <label><input name=\"problem[3]\" value=\"3\" [(ngModel)]=\"problem[3]\" type=\"radio\" >3. BB Bb bb</label>\n                        </div>\n                        <div class=\"radio\">\n                          <label><input name=\"problem[3]\" value=\"4\" [(ngModel)]=\"problem[3]\" type=\"radio\" >4. bb</label>\n                        </div>\n                        \n                        \n                      </div>\n                  </div>\n              </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-md-2\"></div>\n                <div class=\"col-md-8\">\n                    <div class=\"panel panel-default\">\n                        <div class=\"panel-body\" style=\"padding-left:36px;\" *ngIf=\"problem\">\n                          <h5 style=\"font-family:mn-con;\" class=\"font-res\">ข้อ 5: จากข้อ 4 จีโนไทป์ของรุ่น F1 มีสภาพเป็น Homozygous หรือ Heterozygous</h5>\n        \n                  \n                          <div class=\"radio\">\n                            <label><input name=\"problem[4]\" value=\"1\" [(ngModel)]=\"problem[4]\" type=\"radio\" >1. Homozygous</label>\n                          </div>\n                          <div class=\"radio\">\n                            <label><input name=\"problem[4]\" value=\"2\" [(ngModel)]=\"problem[4]\" type=\"radio\" >2. Heterozygous</label>\n                          </div>\n                          \n                          \n                        </div>\n                    </div>\n                </div>\n              </div>\n\n              <div class=\"row\">\n                  <div class=\"col-md-2\"></div>\n                  <div class=\"col-md-8\">\n                      <div class=\"panel panel-default\">\n                          <div class=\"panel-body\" style=\"padding-left:36px;\" *ngIf=\"problem\">\n                            <h5 style=\"font-family:mn-con;\" class=\"font-res\">ข้อ 6: ถ้า N แทนยีนที่ควบคุมลักษณะปีกปกติของแมลงหวี่ และ n แทนยีนที่ควบคุมลักษณะปีกสั้น ในการผสมพันธุ์แมลงหวี่ที่มีปีกปกติคู่หนึ่ง ปรากฏว่ารุ่นลูกจำนวน 123 ตัวมีปีกปกติ 90 ตัว และปีกสั้น 33 ตัว จงเขียนจีโนไทป์ของแมลงหวี่ในรุ่นพ่อแม่</h5>\n          \n                    \n                            <div class=\"radio\">\n                              <label><input name=\"problem[5]\" value=\"1\" [(ngModel)]=\"problem[5]\" type=\"radio\" >1. NN</label>\n                            </div>\n                            <div class=\"radio\">\n                              <label><input name=\"problem[5]\" value=\"2\" [(ngModel)]=\"problem[5]\" type=\"radio\" >2. Nn</label>\n                            </div>\n                            <div class=\"radio\">\n                              <label><input name=\"problem[5]\" value=\"3\" [(ngModel)]=\"problem[5]\" type=\"radio\" >3. NN กับ nn</label>\n                            </div>\n                            <div class=\"radio\">\n                              <label><input name=\"problem[5]\" value=\"4\" [(ngModel)]=\"problem[5]\" type=\"radio\" >4. nn</label>\n                            </div>\n                            \n                            \n                          </div>\n                      </div>\n                  </div>\n                </div>\n\n                <div class=\"row\">\n                    <div class=\"col-md-2\"></div>\n                    <div class=\"col-md-8\">\n                        <div class=\"panel panel-default\">\n                            <div class=\"panel-body\" style=\"padding-left:36px;\" *ngIf=\"problem\">\n                              <h5 style=\"font-family:mn-con;\" class=\"font-res\">ข้อ 7: จากการผสมพันธุ์ระหว่างพืนที่มีจีโนไทป์ AABBrr กับ aabbrr ถ้าการจัดกลุ่มของยีนแต่ละคู่เป็นไปอย่างอิสระ จงหาว่ารุ่น F1 มีจีโนไทป์อย่างไร</h5>\n            \n                      \n                              <div class=\"radio\">\n                                <label><input name=\"problem[6]\" value=\"1\" [(ngModel)]=\"problem[6]\" type=\"radio\" >1. AABBRR</label>\n                              </div>\n                              <div class=\"radio\">\n                                <label><input name=\"problem[6]\" value=\"2\" [(ngModel)]=\"problem[6]\" type=\"radio\" >2. aaBbRr</label>\n                              </div>\n                              <div class=\"radio\">\n                                <label><input name=\"problem[6]\" value=\"3\" [(ngModel)]=\"problem[6]\" type=\"radio\" >3. AabbRr</label>\n                              </div>\n                              <div class=\"radio\">\n                                <label><input name=\"problem[6]\" value=\"4\" [(ngModel)]=\"problem[6]\" type=\"radio\" >4. AaBbrr</label>\n                              </div>\n                              \n                              \n                            </div>\n                        </div>\n                    </div>\n                  </div>\n\n                  <div class=\"row\">\n                      <div class=\"col-md-2\"></div>\n                      <div class=\"col-md-8\">\n                          <div class=\"panel panel-default\">\n                              <div class=\"panel-body\" style=\"padding-left:36px;\" *ngIf=\"problem\">\n                                <h5 style=\"font-family:mn-con;\" class=\"font-res\">ข้อ 8: จากข้อ 7 โอกาสที่จะได้รุ่น F2 ที่มีจีโนไทป์ aabbrr เป็นเท่าใด</h5>\n              \n                        \n                                <div class=\"radio\">\n                                  <label><input name=\"problem[7]\" value=\"1\" [(ngModel)]=\"problem[7]\" type=\"radio\" >1. 1/4</label>\n                                </div>\n                                <div class=\"radio\">\n                                  <label><input name=\"problem[7]\" value=\"2\" [(ngModel)]=\"problem[7]\" type=\"radio\" >2. 1/8</label>\n                                </div>\n                                <div class=\"radio\">\n                                  <label><input name=\"problem[7]\" value=\"3\" [(ngModel)]=\"problem[7]\" type=\"radio\" >3. 1/16</label>\n                                </div>\n                                <div class=\"radio\">\n                                  <label><input name=\"problem[7]\" value=\"4\" [(ngModel)]=\"problem[7]\" type=\"radio\" >4. 1/32</label>\n                                </div>\n                                \n                                \n                              </div>\n                          </div>\n                      </div>\n                    </div>\n\n                    <div class=\"row\">\n                        <div class=\"col-md-2\"></div>\n                        <div class=\"col-md-8\">\n                            <div class=\"panel panel-default\">\n                                <div class=\"panel-body\" style=\"padding-left:36px;\" *ngIf=\"problem\">\n                                  <h5 style=\"font-family:mn-con;\" class=\"font-res\">ข้อ 9: จากข้อ 7 โอกาสที่รุ่น F2 จะมีจีโนไทป์เหมือนพ่อแม่เป็นเท่าใด</h5>\n                \n                          \n                                  <div class=\"radio\">\n                                    <label><input name=\"problem[8]\" value=\"1\" [(ngModel)]=\"problem[8]\" type=\"radio\" >1. 1/4</label>\n                                  </div>\n                                  <div class=\"radio\">\n                                    <label><input name=\"problem[8]\" value=\"2\" [(ngModel)]=\"problem[8]\" type=\"radio\" >2. 1/8</label>\n                                  </div>\n                                  <div class=\"radio\">\n                                    <label><input name=\"problem[8]\" value=\"3\" [(ngModel)]=\"problem[8]\" type=\"radio\" >3. 1/16</label>\n                                  </div>\n                                  <div class=\"radio\">\n                                    <label><input name=\"problem[8]\" value=\"4\" [(ngModel)]=\"problem[8]\" type=\"radio\" >4. 1/32</label>\n                                  </div>\n                                  \n                                  \n                                </div>\n                            </div>\n                        </div>\n                      </div>\n\n                      <div class=\"row\">\n                          <div class=\"col-md-2\"></div>\n                          <div class=\"col-md-8\">\n                              <div class=\"panel panel-default\">\n                                  <div class=\"panel-body\" style=\"padding-left:36px;\" *ngIf=\"problem\">\n                                    <h5 style=\"font-family:mn-con;\" class=\"font-res\">ข้อ 10: แมลงหวี่ปีกยาวเป็นลักษณะเด่น (L) ปีกสั้นเป็นลักษณะด้อย (l) และลำตัวสีเทาเป็นลักษณะเด่น (G) บำตัวสีดำเป็นลักษณะด้อย (g) ในการผสมพันธุ์ระหว่างแมลงหวี่ปีกยาวลำตัวสีเทาและแมลงหวี่ปีกสั้น ลำตัวสีดำ จงหาจีโนไทป์ของรุ่นพ่อแม่ในกรณีที่ลูกมีปีกยาวลำตัวสีเทาทั้งหมด</h5>\n                  \n                            \n                                    <div class=\"radio\">\n                                      <label><input name=\"problem[9]\" value=\"1\" [(ngModel)]=\"problem[9]\" type=\"radio\" >1. LLGG</label>\n                                    </div>\n                                    <div class=\"radio\">\n                                      <label><input name=\"problem[9]\" value=\"2\" [(ngModel)]=\"problem[9]\" type=\"radio\" >2. LLGG กับ llgg</label>\n                                    </div>\n                                    <div class=\"radio\">\n                                      <label><input name=\"problem[9]\" value=\"3\" [(ngModel)]=\"problem[9]\" type=\"radio\" >3. LlGg</label>\n                                    </div>\n                                    <div class=\"radio\">\n                                      <label><input name=\"problem[9]\" value=\"4\" [(ngModel)]=\"problem[9]\" type=\"radio\" >4. LlGg กับ llgg</label>\n                                    </div>\n                                    \n                                    \n                                  </div>\n                              </div>\n</div>\n                        </div>\n\n        <button class=\"btn btn-success center-block visible-check\" (click)=\"onAnswer()\">ส่งคำตอบ</button>\n              <div style=\"margin-left: 22px;margin-right: 22px;\">\n                <button class=\"btn btn-success btn-block visible-xs-block\" (click)=\"onAnswer()\">ส่งคำตอบ</button>\n              </div>\n</div>"

/***/ }),

/***/ "./src/app/problem/test1/test1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Test1Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("./src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var Test1Component = /** @class */ (function () {
    function Test1Component(router, dataService) {
        this.router = router;
        this.dataService = dataService;
        this.level = 0;
        this.problem = [];
        this.problemCount = 10;
        for (var i = 0; i < this.problemCount; ++i) {
            this.problem[i] = '1';
        }
    }
    Test1Component.prototype.ngOnInit = function () {
        var _this = this;
        window.scrollTo(0, 0);
        this.onLoad('prepare', {}, function () {
            _this.onLoad('user', {}, function () {
                if (!_this.sessionPass.isLogin) {
                    _this.router.navigate(['/']);
                }
            });
        });
    };
    Test1Component.prototype.onLoad = function (tag, arg, callback) {
        var _this = this;
        if (tag === void 0) { tag = 'prepare'; }
        if (arg === void 0) { arg = {}; }
        if (callback === void 0) { callback = function () { }; }
        if (tag == 'user') {
            this.dataService.getUser(this.sessionPass.username)
                .subscribe(function (response) {
                if (!response.status) {
                    _this.userPass = undefined;
                    callback();
                }
                else {
                    _this.userPass = response.message[0];
                    callback();
                }
            });
        }
        if (tag == 'session' || tag == 'prepare') {
            this.dataService.getSession()
                .subscribe(function (response) {
                _this.sessionPass = response.message;
                callback();
            });
        }
    };
    Test1Component.prototype.onAnswer = function () {
        var _this = this;
        if (confirm("นักเรียนต้องการส่งแบบทดสอบหรือไม่")) {
            this.dataService.postAnswer(this.level, this.problem)
                .subscribe(function (res) {
                if (!res.status) {
                    if (res.message == 'too') {
                        alert('นักเรียนทำข้อสอบเกิน 10 ครั้งแล้ว');
                        _this.router.navigate(['/']);
                    }
                    else {
                        alert('เกิดข้อผิดพลาด');
                    }
                }
                else {
                    if (res.newhigh) {
                        alert('ยินดีด้วยจ้าา นักเรียนได้คะแนน ' + res.ans + 'คะแนน และได้คะแนนสูงกว่าครั้งที่ผ่านมา');
                        _this.router.navigate(['/']);
                    }
                    else {
                        alert('ยินดีด้วยจ้าา นักเรียนได้คะแนน ' + res.ans);
                        _this.router.navigate(['/']);
                    }
                }
            });
        }
    };
    Test1Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-test1',
            template: __webpack_require__("./src/app/problem/test1/test1.component.html"),
            styles: [__webpack_require__("./src/app/problem/test1/test1.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]])
    ], Test1Component);
    return Test1Component;
}());



/***/ }),

/***/ "./src/app/problem/test2/test2.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/problem/test2/test2.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"little-margin-res\"></div>\n<div class=\"container-fluid content-fluid\">\n    <div class=\"panel panel-default\">\n        <div class=\"panel-body panel-profile\">\n          <div class=\"panel-img\" style=\"background-image:url(assets/img/contents/2-preview-2.jpg);background-position: 50% 40%;\"></div>\n          <div class=\"panel-card text-center\">\n            <img class=\"card-img\" src=\"assets/img/logo-profile.png\" width=\"110\" height=\"110\">\n            <div class=\"small-margin\"></div>\n            <h5>แบบทดสอบบทที่ 2: ยีนและโครโมโซม</h5>\n            <div class=\"small-margin\"></div>\n            <h6 class=\"re small-content-2\">แบบทดสอบนี้มีทั้งหมด 10 ข้อ</h6>\n            <div class=\"little-margin\"></div>\n            <h5 class=\"me small-content-2 text-warning\">นักเรียนทำมาแล้ว: {{userPass?.courseTime[1]}}/10 รอบ</h5>\n            <h6 class=\"me small-content-2 text-success\">คะแนนสูงสุดของนักเรียน: {{userPass?.course[1]}} คะแนน</h6>\n            <br>\n          </div>\n        </div>\n      </div>\n  \n      \n      <div class=\"row\">\n        <div class=\"col-md-2\"></div>\n        <div class=\"col-md-8\">\n            <div class=\"panel panel-default\">\n                <div class=\"panel-body\" style=\"padding-left:36px;\" *ngIf=\"problem\">\n                  <h5 style=\"font-family:mn-con;\" class=\"font-res\">ข้อ 1: จงเติม (X) (Y) ให้สมบูรณ์</h5>\n\n                  <img class=\"zoom\" src=\"assets/img/contents/2/prob-1.png\" width=\"100%\" height=\"100%\">\n\n                  <div class=\"radio\">\n                    <label><input name=\"problem[0]\" value=\"1\" [(ngModel)]=\"problem[0]\" type=\"radio\" >1. (X) = A, (Y) = C</label>\n                  </div>\n                  <div class=\"radio\">\n                    <label><input name=\"problem[0]\" value=\"2\" [(ngModel)]=\"problem[0]\" type=\"radio\" >2. (X) = C, (Y) = A</label>\n                  </div>\n                  <div class=\"radio\">\n                    <label><input name=\"problem[0]\" value=\"3\" [(ngModel)]=\"problem[0]\" type=\"radio\" >3. (X) = T, (Y) = C</label>\n                  </div>\n                </div>\n            </div>\n        </div>\n      </div>\n\n      <div class=\"row\">\n          <div class=\"col-md-2\"></div>\n          <div class=\"col-md-8\">\n              <div class=\"panel panel-default\">\n                  <div class=\"panel-body\" style=\"padding-left:36px;\" *ngIf=\"problem\">\n                    <h5 style=\"font-family:mn-con;\" class=\"font-res\">ข้อ 2: จากรูปข้อที่ 1 กรอบสีแดงคืออะไร</h5>\n  \n            \n                    <div class=\"radio\">\n                      <label><input name=\"problem[1]\" value=\"1\" [(ngModel)]=\"problem[1]\" type=\"radio\" >Nucleotide</label>\n                    </div>\n                    <div class=\"radio\">\n                      <label><input name=\"problem[1]\" value=\"2\" [(ngModel)]=\"problem[1]\" type=\"radio\" >Nucleic Acid</label>\n                    </div>\n                    <div class=\"radio\">\n                      <label><input name=\"problem[1]\" value=\"3\" [(ngModel)]=\"problem[1]\" type=\"radio\" >Nuclein</label>\n                    </div>\n                    <div class=\"radio\">\n                      <label><input name=\"problem[1]\" value=\"4\" [(ngModel)]=\"problem[1]\" type=\"radio\" >Protein</label>\n                    </div>\n                    \n                    \n                  </div>\n              </div>\n          </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-md-2\"></div>\n            <div class=\"col-md-8\">\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-body\" style=\"padding-left:36px;\" *ngIf=\"problem\">\n                      <h5 style=\"font-family:mn-con;\" class=\"font-res\">ข้อ 3: จากรูปข้อ 1 ถ้าให้ฝั่งซ้ายคือสาย 3' ไป 5' แล้วเมื่อผ่านกระบวนการ Transcription จะได้ mRNA รหัสใด</h5>\n    \n              \n                      <div class=\"radio\">\n                        <label><input name=\"problem[2]\" value=\"1\" [(ngModel)]=\"problem[2]\" type=\"radio\" >mRNA 5' TGAC 3'</label>\n                      </div>\n                      <div class=\"radio\">\n                        <label><input name=\"problem[2]\" value=\"2\" [(ngModel)]=\"problem[2]\" type=\"radio\" >mRNA 5' ACTG 3'</label>\n                      </div>\n                      <div class=\"radio\">\n                        <label><input name=\"problem[2]\" value=\"3\" [(ngModel)]=\"problem[2]\" type=\"radio\" >mRNA 5' UGAC 3'</label>\n                      </div>\n                      <div class=\"radio\">\n                        <label><input name=\"problem[2]\" value=\"4\" [(ngModel)]=\"problem[2]\" type=\"radio\" >mRNA 5' ACUG 3'</label>\n                      </div>\n                      \n                      \n                    </div>\n                </div>\n            </div>\n          </div>\n\n          <div class=\"row\">\n              <div class=\"col-md-2\"></div>\n              <div class=\"col-md-8\">\n                  <div class=\"panel panel-default\">\n                      <div class=\"panel-body\" style=\"padding-left:36px;\" *ngIf=\"problem\">\n                        <h5 style=\"font-family:mn-con;\" class=\"font-res\">ข้อ 4: mRNA ที่ถอดรหัสจาก DNA มีลำดับเบสเป็น 5' UAC CGC 3' ลำดับเบสของ DNA แม่แบบเป็นอย่างไร</h5>\n      \n                \n                        <div class=\"radio\">\n                          <label><input name=\"problem[3]\" value=\"1\" [(ngModel)]=\"problem[3]\" type=\"radio\" >1. 5' ATG GCG 3' </label>\n                        </div>\n                        <div class=\"radio\">\n                          <label><input name=\"problem[3]\" value=\"2\" [(ngModel)]=\"problem[3]\" type=\"radio\" >2. 5' TAC CGC 3'</label>\n                        </div>\n                        <div class=\"radio\">\n                          <label><input name=\"problem[3]\" value=\"3\" [(ngModel)]=\"problem[3]\" type=\"radio\" >3. 3' ATG GCG 5'</label>\n                        </div>\n                        <div class=\"radio\">\n                          <label><input name=\"problem[3]\" value=\"4\" [(ngModel)]=\"problem[3]\" type=\"radio\" >4. 3' TAC CGC 5'</label>\n                        </div>\n                        \n                        \n                      </div>\n                  </div>\n              </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-md-2\"></div>\n                <div class=\"col-md-8\">\n                    <div class=\"panel panel-default\">\n                        <div class=\"panel-body\" style=\"padding-left:36px;\" *ngIf=\"problem\">\n                          <h5 style=\"font-family:mn-con;\" class=\"font-res\">ข้อ 5: จากข้อ 4 เมื่อผ่านกระบวนการ Translation แล้ว จะได้ลำดับกรดอะมิโนอย่างไร</h5>\n                          <img class=\"zoom\" src=\"assets/img/contents/2/18.gif\" width=\"100%\" height=\"100%\">\n\n        \n                  \n                          <div class=\"radio\">\n                            <label><input name=\"problem[4]\" value=\"1\" [(ngModel)]=\"problem[4]\" type=\"radio\" >1. Tyr - Arg</label>\n                          </div>\n                          <div class=\"radio\">\n                            <label><input name=\"problem[4]\" value=\"2\" [(ngModel)]=\"problem[4]\" type=\"radio\" >2. Met - Arg</label>\n                          </div>\n\n                          <div class=\"radio\">\n                              <label><input name=\"problem[4]\" value=\"3\" [(ngModel)]=\"problem[4]\" type=\"radio\" >3. Met - Ala</label>\n                            </div>\n                          \n                            <div class=\"radio\">\n                                <label><input name=\"problem[4]\" value=\"4\" [(ngModel)]=\"problem[4]\" type=\"radio\" >4. ไม่มีข้อถูก</label>\n                              </div>\n                          \n                        </div>\n                    </div>\n                </div>\n              </div>\n\n              <div class=\"row\">\n                  <div class=\"col-md-2\"></div>\n                  <div class=\"col-md-8\">\n                      <div class=\"panel panel-default\">\n                          <div class=\"panel-body\" style=\"padding-left:36px;\" *ngIf=\"problem\">\n                            <h5 style=\"font-family:mn-con;\" class=\"font-res\">ข้อ 6: DNA สายแม่แบบ 3' TAC CTT AAG GGA TTA CCG TCT ATG ATC 5' จงหาโคดอนของ mRNA</h5>\n          \n                    \n                            <div class=\"radio\">\n                              <label><input name=\"problem[5]\" value=\"1\" [(ngModel)]=\"problem[5]\" type=\"radio\" >1. AUG GGA UUC CCU AAU CCG UCU UAC UAG</label>\n                            </div>\n                            <div class=\"radio\">\n                              <label><input name=\"problem[5]\" value=\"2\" [(ngModel)]=\"problem[5]\" type=\"radio\" >2. AUG GGA UUC CCU AAU GGC AGA UAC UAG</label>\n                            </div>\n                            <div class=\"radio\">\n                              <label><input name=\"problem[5]\" value=\"3\" [(ngModel)]=\"problem[5]\" type=\"radio\" >3. AUG GGA UUC CCU AAU GGC GAG UAC UAG</label>\n                            </div>\n                            <div class=\"radio\">\n                              <label><input name=\"problem[5]\" value=\"4\" [(ngModel)]=\"problem[5]\" type=\"radio\" >4. AUG GGA UUC CCU AAU GGC AGG UAC UAG</label>\n                            </div>\n                            \n                            \n                          </div>\n                      </div>\n                  </div>\n                </div>\n\n                <div class=\"row\">\n                    <div class=\"col-md-2\"></div>\n                    <div class=\"col-md-8\">\n                        <div class=\"panel panel-default\">\n                            <div class=\"panel-body\" style=\"padding-left:36px;\" *ngIf=\"problem\">\n                              <h5 style=\"font-family:mn-con;\" class=\"font-res\">ข้อ 7: เอนไซม์ DNA polymerase จะทำงานก็ต่อเมื่อเอนไซม์ใดทำงาน</h5>\n            \n                      \n                              <div class=\"radio\">\n                                <label><input name=\"problem[6]\" value=\"1\" [(ngModel)]=\"problem[6]\" type=\"radio\" >1. Helicase</label>\n                              </div>\n                              <div class=\"radio\">\n                                <label><input name=\"problem[6]\" value=\"2\" [(ngModel)]=\"problem[6]\" type=\"radio\" >2. Topoisomerase</label>\n                              </div>\n                              <div class=\"radio\">\n                                <label><input name=\"problem[6]\" value=\"3\" [(ngModel)]=\"problem[6]\" type=\"radio\" >3. Primase</label>\n                              </div>\n                              <div class=\"radio\">\n                                <label><input name=\"problem[6]\" value=\"4\" [(ngModel)]=\"problem[6]\" type=\"radio\" >4. Ligase</label>\n                              </div>\n                              \n                              \n                            </div>\n                        </div>\n                    </div>\n                  </div>\n\n                  <div class=\"row\">\n                      <div class=\"col-md-2\"></div>\n                      <div class=\"col-md-8\">\n                          <div class=\"panel panel-default\">\n                              <div class=\"panel-body\" style=\"padding-left:36px;\" *ngIf=\"problem\">\n                                <h5 style=\"font-family:mn-con;\" class=\"font-res\">ข้อ 8: จากภาพ เป็น Mutation ในระดับใด</h5>\n                                <img class=\"zoom\" src=\"assets/img/contents/2/prob.png\" width=\"100%\" height=\"100%\">\n              \n                        \n                                <div class=\"radio\">\n                                  <label><input name=\"problem[7]\" value=\"1\" [(ngModel)]=\"problem[7]\" type=\"radio\" >1. ระดับ Gene</label>\n                                </div>\n                                <div class=\"radio\">\n                                  <label><input name=\"problem[7]\" value=\"2\" [(ngModel)]=\"problem[7]\" type=\"radio\" >2. ระดับ Chromosome</label>\n                                </div>\n                                <div class=\"radio\">\n                                  <label><input name=\"problem[7]\" value=\"3\" [(ngModel)]=\"problem[7]\" type=\"radio\" >3. ระดับ Nucleolus</label>\n                                </div>\n                                <div class=\"radio\">\n                                  <label><input name=\"problem[7]\" value=\"4\" [(ngModel)]=\"problem[7]\" type=\"radio\" >4. ระดับ Ribosome</label>\n                                </div>\n                                \n                                \n                              </div>\n                          </div>\n                      </div>\n                    </div>\n\n                    <div class=\"row\">\n                        <div class=\"col-md-2\"></div>\n                        <div class=\"col-md-8\">\n                            <div class=\"panel panel-default\">\n                                <div class=\"panel-body\" style=\"padding-left:36px;\" *ngIf=\"problem\">\n                                  <h5 style=\"font-family:mn-con;\" class=\"font-res\">ข้อ 9: จากรูปคือ Karyotype ของโรคใด</h5>\n\n                                  <img class=\"zoom\" src=\"assets/img/contents/2/prob2.jpg\" width=\"100%\" height=\"100%\">\n              \n                \n                          \n                                  <div class=\"radio\">\n                                    <label><input name=\"problem[8]\" value=\"1\" [(ngModel)]=\"problem[8]\" type=\"radio\" >1. Edwards syndrome</label>\n                                  </div>\n                                  <div class=\"radio\">\n                                    <label><input name=\"problem[8]\" value=\"2\" [(ngModel)]=\"problem[8]\" type=\"radio\" >2. Turner syndrome</label>\n                                  </div>\n                                  <div class=\"radio\">\n                                    <label><input name=\"problem[8]\" value=\"3\" [(ngModel)]=\"problem[8]\" type=\"radio\" >3. Triple X syndrome</label>\n                                  </div>\n                                  <div class=\"radio\">\n                                    <label><input name=\"problem[8]\" value=\"4\" [(ngModel)]=\"problem[8]\" type=\"radio\" >4. Kinefelter syndrome</label>\n                                  </div>\n                                  \n                                  \n                                </div>\n                            </div>\n                        </div>\n                      </div>\n\n                      <div class=\"row\">\n                          <div class=\"col-md-2\"></div>\n                          <div class=\"col-md-8\">\n                              <div class=\"panel panel-default\">\n                                  <div class=\"panel-body\" style=\"padding-left:36px;\" *ngIf=\"problem\">\n                                    <h5 style=\"font-family:mn-con;\" class=\"font-res\">ข้อ 10: การกลายพันธุ์นี้จะส่งผลถึงรุ่นลูกหรือไม่</h5>\n\n                                    <img class=\"zoom\" src=\"assets/img/contents/2/prob3.jpg\" width=\"100%\" height=\"100%\">\n              \n                  \n                            \n                                    <div class=\"radio\">\n                                      <label><input name=\"problem[9]\" value=\"1\" [(ngModel)]=\"problem[9]\" type=\"radio\" >1. ส่งผล</label>\n                                    </div>\n                                    <div class=\"radio\">\n                                      <label><input name=\"problem[9]\" value=\"2\" [(ngModel)]=\"problem[9]\" type=\"radio\" >2. ไม่ส่งผล</label>\n                                    </div>\n                                    \n                                    \n                                  </div>\n                              </div>\n</div>\n                        </div>\n\n        <button class=\"btn btn-success center-block visible-check\" (click)=\"onAnswer()\">ส่งคำตอบ</button>\n              <div style=\"margin-left: 22px;margin-right: 22px;\">\n                <button class=\"btn btn-success btn-block visible-xs-block\" (click)=\"onAnswer()\">ส่งคำตอบ</button>\n              </div>\n</div>"

/***/ }),

/***/ "./src/app/problem/test2/test2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Test2Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("./src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var Test2Component = /** @class */ (function () {
    function Test2Component(router, dataService) {
        this.router = router;
        this.dataService = dataService;
        this.level = 1;
        this.problem = [];
        this.problemCount = 10;
        for (var i = 0; i < this.problemCount; ++i) {
            this.problem[i] = '1';
        }
    }
    Test2Component.prototype.ngOnInit = function () {
        var _this = this;
        window.scrollTo(0, 0);
        this.onLoad('prepare', {}, function () {
            _this.onLoad('user', {}, function () {
                if (!_this.sessionPass.isLogin) {
                    _this.router.navigate(['/']);
                }
            });
        });
    };
    Test2Component.prototype.onLoad = function (tag, arg, callback) {
        var _this = this;
        if (tag === void 0) { tag = 'prepare'; }
        if (arg === void 0) { arg = {}; }
        if (callback === void 0) { callback = function () { }; }
        if (tag == 'user') {
            this.dataService.getUser(this.sessionPass.username)
                .subscribe(function (response) {
                if (!response.status) {
                    _this.userPass = undefined;
                    callback();
                }
                else {
                    _this.userPass = response.message[0];
                    callback();
                }
            });
        }
        if (tag == 'session' || tag == 'prepare') {
            this.dataService.getSession()
                .subscribe(function (response) {
                _this.sessionPass = response.message;
                callback();
            });
        }
    };
    Test2Component.prototype.onAnswer = function () {
        var _this = this;
        if (confirm("นักเรียนต้องการส่งแบบทดสอบหรือไม่")) {
            this.dataService.postAnswer(this.level, this.problem)
                .subscribe(function (res) {
                if (!res.status) {
                    if (res.message == 'too') {
                        alert('นักเรียนทำข้อสอบเกิน 10 ครั้งแล้ว');
                        _this.router.navigate(['/']);
                    }
                    else {
                        alert('เกิดข้อผิดพลาด');
                    }
                }
                else {
                    if (res.newhigh) {
                        alert('ยินดีด้วยจ้าา นักเรียนได้คะแนน ' + res.ans + 'คะแนน และได้คะแนนสูงกว่าครั้งที่ผ่านมา');
                        _this.router.navigate(['/']);
                    }
                    else {
                        alert('ยินดีด้วยจ้าา นักเรียนได้คะแนน ' + res.ans);
                        _this.router.navigate(['/']);
                    }
                }
            });
        }
    };
    Test2Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-test2',
            template: __webpack_require__("./src/app/problem/test2/test2.component.html"),
            styles: [__webpack_require__("./src/app/problem/test2/test2.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]])
    ], Test2Component);
    return Test2Component;
}());



/***/ }),

/***/ "./src/app/problem/test3/test3.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/problem/test3/test3.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"little-margin-res\"></div>\n<div class=\"container-fluid content-fluid\">\n    <div class=\"panel panel-default\">\n        <div class=\"panel-body panel-profile\">\n          <div class=\"panel-img\" style=\"background-image:url(assets/img/contents/3/preview.jpeg);background-position: 50% 40%;\"></div>\n          <div class=\"panel-card text-center\">\n            <img class=\"card-img\" src=\"assets/img/logo-profile.png\" width=\"110\" height=\"110\">\n            <div class=\"small-margin\"></div>\n            <h5>แบบทดสอบบทที่ 3: พันธุวิศวกรรม</h5>\n            <div class=\"small-margin\"></div>\n            <h6 class=\"re small-content-2\">แบบทดสอบนี้มีทั้งหมด 5 ข้อ</h6>\n            <div class=\"little-margin\"></div>\n            <h5 class=\"me small-content-2 text-warning\">นักเรียนทำมาแล้ว: {{userPass?.courseTime[2]}}/10 รอบ</h5>\n            <h6 class=\"me small-content-2 text-success\">คะแนนสูงสุดของนักเรียน: {{userPass?.course[2]}} คะแนน</h6>\n            <br>\n          </div>\n        </div>\n      </div>\n  \n      \n      <div class=\"row\">\n        <div class=\"col-md-2\"></div>\n        <div class=\"col-md-8\">\n            <div class=\"panel panel-default\">\n                <div class=\"panel-body\" style=\"padding-left:36px;\" *ngIf=\"problem\">\n                  <h5 style=\"font-family:mn-con;\" class=\"font-res\">ข้อ 1: เอนไซม์ใด ทำให้ Plasmid กลายเป็น Vector</h5>\n\n                  <div class=\"radio\">\n                    <label><input name=\"problem[0]\" value=\"1\" [(ngModel)]=\"problem[0]\" type=\"radio\" >1. Restriction Enzyme</label>\n                  </div>\n                  <div class=\"radio\">\n                    <label><input name=\"problem[0]\" value=\"2\" [(ngModel)]=\"problem[0]\" type=\"radio\" >2. Recombinant Enzyme</label>\n                  </div>\n                  <div class=\"radio\">\n                    <label><input name=\"problem[0]\" value=\"3\" [(ngModel)]=\"problem[0]\" type=\"radio\" >3. Ligase</label>\n                  </div>\n                  <div class=\"radio\">\n                    <label><input name=\"problem[0]\" value=\"4\" [(ngModel)]=\"problem[0]\" type=\"radio\" >4. Taq polymerase</label>\n                  </div>\n                </div>\n            </div>\n        </div>\n      </div>\n\n      <div class=\"row\">\n          <div class=\"col-md-2\"></div>\n          <div class=\"col-md-8\">\n              <div class=\"panel panel-default\">\n                  <div class=\"panel-body\" style=\"padding-left:36px;\" *ngIf=\"problem\">\n                    <h5 style=\"font-family:mn-con;\" class=\"font-res\">ข้อ 2: แบคทีเรียที่มี Plasmid เมื่อให้ยาปฏิชีวนะจะเป็นอย่างไร</h5>\n  \n            \n                    <div class=\"radio\">\n                      <label><input name=\"problem[1]\" value=\"1\" [(ngModel)]=\"problem[1]\" type=\"radio\" >แบคทีเรียจะเหมือนเดิม</label>\n                    </div>\n                    <div class=\"radio\">\n                      <label><input name=\"problem[1]\" value=\"2\" [(ngModel)]=\"problem[1]\" type=\"radio\" >แบคทีเรียจะไม่รอด</label>\n                    </div>\n                    <div class=\"radio\">\n                      <label><input name=\"problem[1]\" value=\"3\" [(ngModel)]=\"problem[1]\" type=\"radio\" >แบคทีเรียจะเพิ่มจำนวน</label>\n                    </div>\n                    <div class=\"radio\">\n                      <label><input name=\"problem[1]\" value=\"4\" [(ngModel)]=\"problem[1]\" type=\"radio\" >แบคทีเรียจะสร้างแคปซูล</label>\n                    </div>\n                    \n                    \n                  </div>\n              </div>\n          </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-md-2\"></div>\n            <div class=\"col-md-8\">\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-body\" style=\"padding-left:36px;\" *ngIf=\"problem\">\n                      <h5 style=\"font-family:mn-con;\" class=\"font-res\">ข้อ 3: ข้อใดหมายถึงพันธุวิศวกรรม</h5>\n    \n              \n                      <div class=\"radio\">\n                        <label><input name=\"problem[2]\" value=\"1\" [(ngModel)]=\"problem[2]\" type=\"radio\" >1. การทำให้สิ่งมีชีวิตเพิ่มจำนวนได้อย่างรวดเร็วในระยะเวลาที่จำกัด</label>\n                      </div>\n                      <div class=\"radio\">\n                        <label><input name=\"problem[2]\" value=\"2\" [(ngModel)]=\"problem[2]\" type=\"radio\" >2. การสร้างสิ่งมีชีวิตใหม่ให้มีลักษณะพันธุกรรมเหมือนเดิมทุกประการ</label>\n                      </div>\n                      <div class=\"radio\">\n                        <label><input name=\"problem[2]\" value=\"3\" [(ngModel)]=\"problem[2]\" type=\"radio\" >3. การแทรกยีนที่ต้องการเข้าไปทาให้สิ่งมีชีวิตนั้นให้มีลักษณะพันธุกรรมใหม่ขึ้นมา</label>\n                      </div>\n                      <div class=\"radio\">\n                        <label><input name=\"problem[2]\" value=\"4\" [(ngModel)]=\"problem[2]\" type=\"radio\" >4. การเปลี่ยนแปลงลักษณะสายพันธุ์ของสิ่งมีชีวิตให้มีรูปร่างหรือคุณสมบัติตามที่ต้องการ</label>\n                      </div>\n                      \n                      \n                    </div>\n                </div>\n            </div>\n          </div>\n\n          <div class=\"row\">\n              <div class=\"col-md-2\"></div>\n              <div class=\"col-md-8\">\n                  <div class=\"panel panel-default\">\n                      <div class=\"panel-body\" style=\"padding-left:36px;\" *ngIf=\"problem\">\n                        <h5 style=\"font-family:mn-con;\" class=\"font-res\">ข้อ 4: รีคอมบิแนนท์ดีเอ็นเอ (Recombinant DNA) คืออะไร </h5>\n      \n                \n                        <div class=\"radio\">\n                          <label><input name=\"problem[3]\" value=\"1\" [(ngModel)]=\"problem[3]\" type=\"radio\" >1. DNA ของสิ่งมีชีวิตที่พบเฉพาะพวกยูคาริโอต (eukaryote)</label>\n                        </div>\n                        <div class=\"radio\">\n                          <label><input name=\"problem[3]\" value=\"2\" [(ngModel)]=\"problem[3]\" type=\"radio\" >2. DNA ของสิ่งมีชีวิตที่เพิ่มจานวนโดยการโคลนนิ่ง (cloning)</label>\n                        </div>\n                        <div class=\"radio\">\n                          <label><input name=\"problem[3]\" value=\"3\" [(ngModel)]=\"problem[3]\" type=\"radio\" >3. DNA ของสิ่งมีชีวิตต่างชนิดกันที่เชื่อมกันโดยเทคนิคพันธุวิศวกรรม</label>\n                        </div>\n                        <div class=\"radio\">\n                          <label><input name=\"problem[3]\" value=\"4\" [(ngModel)]=\"problem[3]\" type=\"radio\" >4. DNA ของสิ่งมีชีวิตชนิดเดียวกันที่ทำให้เกิดมิวเทชันโดยเทคนิคพันธุวิศวกรรม</label>\n                        </div>\n                        \n                        \n                      </div>\n                  </div>\n              </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-md-2\"></div>\n                <div class=\"col-md-8\">\n                    <div class=\"panel panel-default\">\n                        <div class=\"panel-body\" style=\"padding-left:36px;\" *ngIf=\"problem\">\n                          <h5 style=\"font-family:mn-con;\" class=\"font-res\">ข้อ 5: สิ่งมีชีวิตในข้อใดจัดเป็นจีเอ็มโอ (GMOs)</h5>\n\n                  \n                          <div class=\"radio\">\n                            <label><input name=\"problem[4]\" value=\"1\" [(ngModel)]=\"problem[4]\" type=\"radio\" >1. แตงโมที่เมล็ดลีบ</label>\n                          </div>\n                          <div class=\"radio\">\n                            <label><input name=\"problem[4]\" value=\"2\" [(ngModel)]=\"problem[4]\" type=\"radio\" >2. เซลล์แบคทีเรียที่มียีนอินซูลินของคน</label>\n                          </div>\n\n                          <div class=\"radio\">\n                              <label><input name=\"problem[4]\" value=\"3\" [(ngModel)]=\"problem[4]\" type=\"radio\" >3. ต้นเปล้าน้อยที่ได้จากการเพาะเลี้ยงเนื้อเยื่อ</label>\n                            </div>\n                          \n                            <div class=\"radio\">\n                                <label><input name=\"problem[4]\" value=\"4\" [(ngModel)]=\"problem[4]\" type=\"radio\" >4. พุทธรักษาพันธุ์กลายที่เกิดจากการฉายรังสีแกมมา</label>\n                              </div>\n                          \n                        </div>\n                    </div>\n                </div>\n              </div>\n\n              \n\n                      \n\n        <button class=\"btn btn-success center-block visible-check\" (click)=\"onAnswer()\">ส่งคำตอบ</button>\n              <div style=\"margin-left: 22px;margin-right: 22px;\">\n                <button class=\"btn btn-success btn-block visible-xs-block\" (click)=\"onAnswer()\">ส่งคำตอบ</button>\n              </div>\n</div>"

/***/ }),

/***/ "./src/app/problem/test3/test3.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Test3Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("./src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var Test3Component = /** @class */ (function () {
    function Test3Component(router, dataService) {
        this.router = router;
        this.dataService = dataService;
        this.level = 2;
        this.problem = [];
        this.problemCount = 5;
        for (var i = 0; i < this.problemCount; ++i) {
            this.problem[i] = '1';
        }
    }
    Test3Component.prototype.ngOnInit = function () {
        var _this = this;
        window.scrollTo(0, 0);
        this.onLoad('prepare', {}, function () {
            _this.onLoad('user', {}, function () {
                if (!_this.sessionPass.isLogin) {
                    _this.router.navigate(['/']);
                }
            });
        });
    };
    Test3Component.prototype.onLoad = function (tag, arg, callback) {
        var _this = this;
        if (tag === void 0) { tag = 'prepare'; }
        if (arg === void 0) { arg = {}; }
        if (callback === void 0) { callback = function () { }; }
        if (tag == 'user') {
            this.dataService.getUser(this.sessionPass.username)
                .subscribe(function (response) {
                if (!response.status) {
                    _this.userPass = undefined;
                    callback();
                }
                else {
                    _this.userPass = response.message[0];
                    callback();
                }
            });
        }
        if (tag == 'session' || tag == 'prepare') {
            this.dataService.getSession()
                .subscribe(function (response) {
                _this.sessionPass = response.message;
                callback();
            });
        }
    };
    Test3Component.prototype.onAnswer = function () {
        var _this = this;
        if (confirm("นักเรียนต้องการส่งแบบทดสอบหรือไม่")) {
            this.dataService.postAnswer(this.level, this.problem)
                .subscribe(function (res) {
                if (!res.status) {
                    if (res.message == 'too') {
                        alert('นักเรียนทำข้อสอบเกิน 10 ครั้งแล้ว');
                        _this.router.navigate(['/']);
                    }
                    else {
                        alert('เกิดข้อผิดพลาด');
                    }
                }
                else {
                    if (res.newhigh) {
                        alert('ยินดีด้วยจ้าา นักเรียนได้คะแนน ' + res.ans + 'คะแนน และได้คะแนนสูงกว่าครั้งที่ผ่านมา');
                        _this.router.navigate(['/']);
                    }
                    else {
                        alert('ยินดีด้วยจ้าา นักเรียนได้คะแนน ' + res.ans);
                        _this.router.navigate(['/']);
                    }
                }
            });
        }
    };
    Test3Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-test3',
            template: __webpack_require__("./src/app/problem/test3/test3.component.html"),
            styles: [__webpack_require__("./src/app/problem/test3/test3.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]])
    ], Test3Component);
    return Test3Component;
}());



/***/ }),

/***/ "./src/app/problem/test4/test4.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/problem/test4/test4.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"little-margin-res\"></div>\n<div class=\"container-fluid content-fluid\">\n    <div class=\"panel panel-default\">\n        <div class=\"panel-body panel-profile\">\n          <div class=\"panel-img\" style=\"background-image:url(assets/img/contents/4/preview.jpg);background-position: 50% 40%;\"></div>\n          <div class=\"panel-card text-center\">\n            <img class=\"card-img\" src=\"assets/img/logo-profile.png\" width=\"110\" height=\"110\">\n            <div class=\"small-margin\"></div>\n            <h5>แบบทดสอบบทที่ 4: วิวัฒนาการ</h5>\n            <div class=\"small-margin\"></div>\n            <h6 class=\"re small-content-2\">แบบทดสอบนี้มีทั้งหมด 10 ข้อ</h6>\n            <div class=\"little-margin\"></div>\n            <h5 class=\"me small-content-2 text-warning\">นักเรียนทำมาแล้ว: {{userPass?.courseTime[3]}}/10 รอบ</h5>\n            <h6 class=\"me small-content-2 text-success\">คะแนนสูงสุดของนักเรียน: {{userPass?.course[3]}} คะแนน</h6>\n            <br>\n          </div>\n        </div>\n      </div>\n  \n      \n      <div class=\"row\">\n        <div class=\"col-md-2\"></div>\n        <div class=\"col-md-8\">\n            <div class=\"panel panel-default\">\n                <div class=\"panel-body\" style=\"padding-left:36px;\" *ngIf=\"problem\">\n                  <h5 style=\"font-family:mn-con;\" class=\"font-res\">ข้อ 1: ข้อใดเป็นวิวัฒนาการ</h5>\n\n              \n                  <div class=\"radio\">\n                    <label><input name=\"problem[0]\" value=\"1\" [(ngModel)]=\"problem[0]\" type=\"radio\" >1. การหดหายไปของขางู</label>\n                  </div>\n                  <div class=\"radio\">\n                    <label><input name=\"problem[0]\" value=\"2\" [(ngModel)]=\"problem[0]\" type=\"radio\" >2. การงอกหางของจิ้งจกหลังหางขาด</label>\n                  </div>\n                  <div class=\"radio\">\n                    <label><input name=\"problem[0]\" value=\"3\" [(ngModel)]=\"problem[0]\" type=\"radio\" >3. การเปลี่ยนแปลงจากลูกน้ำเป็นยุงที่มีปีก</label>\n                  </div>\n                  <div class=\"radio\">\n                    <label><input name=\"problem[0]\" value=\"4\" [(ngModel)]=\"problem[0]\" type=\"radio\" >3. การเพิ่มปริมาณฮีโมลโกลบินในเลือดของคนที่ขึ้นไปอยู่บนภูเขา</label>\n                  </div>\n                </div>\n            </div>\n        </div>\n      </div>\n\n      <div class=\"row\">\n          <div class=\"col-md-2\"></div>\n          <div class=\"col-md-8\">\n              <div class=\"panel panel-default\">\n                  <div class=\"panel-body\" style=\"padding-left:36px;\" *ngIf=\"problem\">\n                    <h5 style=\"font-family:mn-con;\" class=\"font-res\">ข้อ 2: เหตุที่เราไม่ค่อยพบซากดึกดำบรรพ์ของสัตว์ไม่มีกระดูกสันหลังเพราะสัตว์เหล่านี้</h5>\n  \n            \n                    <div class=\"radio\">\n                      <label><input name=\"problem[1]\" value=\"1\" [(ngModel)]=\"problem[1]\" type=\"radio\" >1. มีช่วงอายุสั้น</label>\n                    </div>\n                    <div class=\"radio\">\n                      <label><input name=\"problem[1]\" value=\"2\" [(ngModel)]=\"problem[1]\" type=\"radio\" >2. ถูกทำลายได้ง่าย</label>\n                    </div>\n                    <div class=\"radio\">\n                      <label><input name=\"problem[1]\" value=\"3\" [(ngModel)]=\"problem[1]\" type=\"radio\" >3. เป็นสัตว์ที่มีจำนวนน้อย</label>\n                    </div>\n                    <div class=\"radio\">\n                      <label><input name=\"problem[1]\" value=\"4\" [(ngModel)]=\"problem[1]\" type=\"radio\" >4. เป็นสัตว์ที่เกิดขึ้นมานานมาก</label>\n                    </div>\n                    \n                    \n                  </div>\n              </div>\n          </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-md-2\"></div>\n            <div class=\"col-md-8\">\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-body\" style=\"padding-left:36px;\" *ngIf=\"problem\">\n                      <h5 style=\"font-family:mn-con;\" class=\"font-res\">ข้อ 3: ซากดึกดำบรรพ์ซากใด? ที่มีชื่อวิทยาศาสตร์เช่นเดียวกับมนุษย์ปัจจุบัน</h5>\n    \n              \n                      <div class=\"radio\">\n                        <label><input name=\"problem[2]\" value=\"1\" [(ngModel)]=\"problem[2]\" type=\"radio\" >1. วานรมนุษย์</label>\n                      </div>\n                      <div class=\"radio\">\n                        <label><input name=\"problem[2]\" value=\"2\" [(ngModel)]=\"problem[2]\" type=\"radio\" >2. มนุษย์โครมันยอง</label>\n                      </div>\n                      <div class=\"radio\">\n                        <label><input name=\"problem[2]\" value=\"3\" [(ngModel)]=\"problem[2]\" type=\"radio\" >3. มนุษย์วานร</label>\n                      </div>\n                      <div class=\"radio\">\n                        <label><input name=\"problem[2]\" value=\"4\" [(ngModel)]=\"problem[2]\" type=\"radio\" >4. มนุษย์ชวา</label>\n                      </div>\n                      \n                      \n                    </div>\n                </div>\n            </div>\n          </div>\n\n          <div class=\"row\">\n              <div class=\"col-md-2\"></div>\n              <div class=\"col-md-8\">\n                  <div class=\"panel panel-default\">\n                      <div class=\"panel-body\" style=\"padding-left:36px;\" *ngIf=\"problem\">\n                        <h5 style=\"font-family:mn-con;\" class=\"font-res\">ข้อ 4: ต้นตระกูลของมนุษย์ที่เก่าแก่ที่สุดที่ได้ชื่อว่าเป็นมนุษย์ได้แก่มนุษย์พวกใด</h5>\n      \n                \n                        <div class=\"radio\">\n                          <label><input name=\"problem[3]\" value=\"1\" [(ngModel)]=\"problem[3]\" type=\"radio\" >1. โฮโม อีเรคตัส </label>\n                        </div>\n                        <div class=\"radio\">\n                          <label><input name=\"problem[3]\" value=\"2\" [(ngModel)]=\"problem[3]\" type=\"radio\" >2. โฮโม แฮปิลิส</label>\n                        </div>\n                        <div class=\"radio\">\n                          <label><input name=\"problem[3]\" value=\"3\" [(ngModel)]=\"problem[3]\" type=\"radio\" >3. โฮโม เซเปียนส์</label>\n                        </div>\n                        <div class=\"radio\">\n                          <label><input name=\"problem[3]\" value=\"4\" [(ngModel)]=\"problem[3]\" type=\"radio\" >4. โฮโม เซเปียนส์ เซเปียนส์</label>\n                        </div>\n                        \n                        \n                      </div>\n                  </div>\n              </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-md-2\"></div>\n                <div class=\"col-md-8\">\n                    <div class=\"panel panel-default\">\n                        <div class=\"panel-body\" style=\"padding-left:36px;\" *ngIf=\"problem\">\n                          <h5 style=\"font-family:mn-con;\" class=\"font-res\">ข้อ 5: จงบอกชื่อวิทยาศาสตร์ของโฮมินิดที่นักวิทยาศาสตร์ค้นพบฟอสซิลซึ่งมีความสมบูรณ์ถึง 40% มีอายุประมาณ 3.24 ล้านปีก่อน และตั้งชื่อเล่นให้ว่า Lucy</h5>\n                \n        \n                  \n                          <div class=\"radio\">\n                            <label><input name=\"problem[4]\" value=\"1\" [(ngModel)]=\"problem[4]\" type=\"radio\" >1. <b class=\"li\">Australopithecus afarensis</b></label>\n                          </div>\n                          <div class=\"radio\">\n                            <label><input name=\"problem[4]\" value=\"2\" [(ngModel)]=\"problem[4]\" type=\"radio\" >2. <b class=\"li\">Australopithecus africanus</b></label>\n                          </div>\n\n                          <div class=\"radio\">\n                              <label><input name=\"problem[4]\" value=\"3\" [(ngModel)]=\"problem[4]\" type=\"radio\" >3. <b class=\"li\">Paranthropus robustus</b></label>\n                            </div>\n                          \n                            <div class=\"radio\">\n                                <label><input name=\"problem[4]\" value=\"4\" [(ngModel)]=\"problem[4]\" type=\"radio\" >4. <b class=\"li\">Homo habilus</b></label>\n                              </div>\n                          \n                        </div>\n                    </div>\n                </div>\n              </div>\n\n              <div class=\"row\">\n                  <div class=\"col-md-2\"></div>\n                  <div class=\"col-md-8\">\n                      <div class=\"panel panel-default\">\n                          <div class=\"panel-body\" style=\"padding-left:36px;\" *ngIf=\"problem\">\n                            <h5 style=\"font-family:mn-con;\" class=\"font-res\">ข้อ 6: ประชากรของสิ่งมีชีวิตที่มีลักษณะใดดังต่อไปนี้ จึงจะมีความถี่ของยีนอยู่ในสมดุลฮาร์ดี-ไวน์เบิร์ก</h5>\n          \n                    \n                            <div class=\"radio\">\n                              <label><input name=\"problem[5]\" value=\"1\" [(ngModel)]=\"problem[5]\" type=\"radio\" >1. ประชากรมีขนาดใหญ่</label>\n                            </div>\n                            <div class=\"radio\">\n                              <label><input name=\"problem[5]\" value=\"2\" [(ngModel)]=\"problem[5]\" type=\"radio\" >2. มีการอพยพย้ายถิ่นฐานระหว่างประชากรย่อย</label>\n                            </div>\n                            <div class=\"radio\">\n                              <label><input name=\"problem[5]\" value=\"3\" [(ngModel)]=\"problem[5]\" type=\"radio\" >3. สิ่งมีชีวิตมีความสามารถในการอยู่รอดและสืบพันธุ์แตกต่างกัน</label>\n                            </div>\n                            <div class=\"radio\">\n                              <label><input name=\"problem[5]\" value=\"4\" [(ngModel)]=\"problem[5]\" type=\"radio\" >4. มีการกลายของสารพันธุกรรมในสิ่งมีชีวิต</label>\n                            </div>\n                            \n                            \n                          </div>\n                      </div>\n                  </div>\n                </div>\n\n                <div class=\"row\">\n                    <div class=\"col-md-2\"></div>\n                    <div class=\"col-md-8\">\n                        <div class=\"panel panel-default\">\n                            <div class=\"panel-body\" style=\"padding-left:36px;\" *ngIf=\"problem\">\n                              <h5 style=\"font-family:mn-con;\" class=\"font-res\">ข้อ 7: หากประชากรอยู่ในสมดุลฮาร์ดี-ไวน์เบิร์กแล้วข้อใดต่อไปนี้เป็นจริง</h5>\n            \n                      \n                              <div class=\"radio\">\n                                <label><input name=\"problem[6]\" value=\"1\" [(ngModel)]=\"problem[6]\" type=\"radio\" >1. การคัดเลือกโดยธรรมชาติจะเกิดขึ้น สิ่งมีชีวิตที่แข็งแรงกว่าจะอยู่รอด</label>\n                              </div>\n                              <div class=\"radio\">\n                                <label><input name=\"problem[6]\" value=\"2\" [(ngModel)]=\"problem[6]\" type=\"radio\" >2. ไม่มีการเปลี่ยนแปลงของความถี่อัลลีลจากรุ่นหนึ่งไปยังอีกรุ่นหนึ่ง</label>\n                              </div>\n                              <div class=\"radio\">\n                                <label><input name=\"problem[6]\" value=\"3\" [(ngModel)]=\"problem[6]\" type=\"radio\" >3. จำนวนสิ่งมีชีวิตที่อพยพออก เท่ากับจำนวนสิ่งมีชีวิตที่อพยพเข้า</label>\n                              </div>\n                              <div class=\"radio\">\n                                <label><input name=\"problem[6]\" value=\"4\" [(ngModel)]=\"problem[6]\" type=\"radio\" >4. ประชากรมีขนาดเล็ก และขนาดของประชากรไม่เปลี่ยนแปลง</label>\n                              </div>\n                              \n                              \n                            </div>\n                        </div>\n                    </div>\n                  </div>\n\n                  <div class=\"row\">\n                      <div class=\"col-md-2\"></div>\n                      <div class=\"col-md-8\">\n                          <div class=\"panel panel-default\">\n                              <div class=\"panel-body\" style=\"padding-left:36px;\" *ngIf=\"problem\">\n                                <h5 style=\"font-family:mn-con;\" class=\"font-res\">ข้อ 8: ถ้ายีนหนึ่งมีสองอัลลีล โดยมีความถี่ของอัลลีลทั้งสองเท่ากับ p และ q ตามลำดับ จงหาความถี่ของ p และ q ที่เมื่อจำนวนเฮตเทอโรไซโกตมีค่าสูงที่สุดในประชากร</h5>\n    \n                                <div class=\"radio\">\n                                  <label><input name=\"problem[7]\" value=\"1\" [(ngModel)]=\"problem[7]\" type=\"radio\" >1. เมื่อ p = q = 1</label>\n                                </div>\n                                <div class=\"radio\">\n                                  <label><input name=\"problem[7]\" value=\"2\" [(ngModel)]=\"problem[7]\" type=\"radio\" >2. เมื่อ p = q = 0.5</label>\n                                </div>\n                                <div class=\"radio\">\n                                  <label><input name=\"problem[7]\" value=\"3\" [(ngModel)]=\"problem[7]\" type=\"radio\" >3. เมื่อ p = 1 และ q = 0</label>\n                                </div>\n                                <div class=\"radio\">\n                                  <label><input name=\"problem[7]\" value=\"4\" [(ngModel)]=\"problem[7]\" type=\"radio\" >4. เมื่อ p = 0 และ q = 1</label>\n                                </div>\n                                \n                                \n                              </div>\n                          </div>\n                      </div>\n                    </div>\n\n                    <div class=\"row\">\n                        <div class=\"col-md-2\"></div>\n                        <div class=\"col-md-8\">\n                            <div class=\"panel panel-default\">\n                                <div class=\"panel-body\" style=\"padding-left:36px;\" *ngIf=\"problem\">\n                                  <h5 style=\"font-family:mn-con;\" class=\"font-res\">ข้อ 9: สมมติว่าประชากรอยู่ในสมดุลฮาร์ดี-ไวน์เบิร์ก แล้วจำนวนของคนที่เป็นพาหะของโรคทางพันธุกรรมที่เป็นเฉพาะในคนที่มีลักษณะด้อยแท้ จะเป็นเท่าไหร่ เมื่อความถี่ของคนที่เป็นโรคดังกล่าวในประชากรนั้นเกิดขึ้นที่ 1 ใน 10000 คน</h5>\n\n                \n                          \n                                  <div class=\"radio\">\n                                    <label><input name=\"problem[8]\" value=\"1\" [(ngModel)]=\"problem[8]\" type=\"radio\" >1. 0.01</label>\n                                  </div>\n                                  <div class=\"radio\">\n                                    <label><input name=\"problem[8]\" value=\"2\" [(ngModel)]=\"problem[8]\" type=\"radio\" >2. 0.99</label>\n                                  </div>\n                                  <div class=\"radio\">\n                                    <label><input name=\"problem[8]\" value=\"3\" [(ngModel)]=\"problem[8]\" type=\"radio\" >3. 0.0198</label>\n                                  </div>\n                                  <div class=\"radio\">\n                                    <label><input name=\"problem[8]\" value=\"4\" [(ngModel)]=\"problem[8]\" type=\"radio\" >4. 0.0001</label>\n                                  </div>\n                                  \n                                  \n                                </div>\n                            </div>\n                        </div>\n                      </div>\n\n                      <div class=\"row\">\n                          <div class=\"col-md-2\"></div>\n                          <div class=\"col-md-8\">\n                              <div class=\"panel panel-default\">\n                                  <div class=\"panel-body\" style=\"padding-left:36px;\" *ngIf=\"problem\">\n                                    <h5 style=\"font-family:mn-con;\" class=\"font-res\">ข้อ 10: การที่มือและแขนของมนุษย์ มีกระดูกชิ้นต่างๆเหมือนกับปีกของนก ครีบของปลาโลมาหรือปลาวาฬ ขาของสุนัขนั้น เราเรียกการมีโครงสร้างที่คล้ายกันแต่อาจจะมีหน้าที่การทำงานต่างกันว่าอะไร</h5>\n\n\n                            \n                                    <div class=\"radio\">\n                                      <label><input name=\"problem[9]\" value=\"1\" [(ngModel)]=\"problem[9]\" type=\"radio\" >1. Analogous Structure</label>\n                                    </div>\n                                    <div class=\"radio\">\n                                      <label><input name=\"problem[9]\" value=\"2\" [(ngModel)]=\"problem[9]\" type=\"radio\" >2. Homologous Structure</label>\n                                    </div>\n                                    <div class=\"radio\">\n                                      <label><input name=\"problem[9]\" value=\"3\" [(ngModel)]=\"problem[9]\" type=\"radio\" >3. Convergent evolution</label>\n                                    </div>\n                                    <div class=\"radio\">\n                                      <label><input name=\"problem[9]\" value=\"4\" [(ngModel)]=\"problem[9]\" type=\"radio\" >4. Microevolution</label>\n                                    </div>\n                                    \n                                    \n                                  </div>\n                              </div>\n</div>\n                        </div>\n\n        <button class=\"btn btn-success center-block visible-check\" (click)=\"onAnswer()\">ส่งคำตอบ</button>\n              <div style=\"margin-left: 22px;margin-right: 22px;\">\n                <button class=\"btn btn-success btn-block visible-xs-block\" (click)=\"onAnswer()\">ส่งคำตอบ</button>\n              </div>\n</div>"

/***/ }),

/***/ "./src/app/problem/test4/test4.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Test4Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("./src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var Test4Component = /** @class */ (function () {
    function Test4Component(router, dataService) {
        this.router = router;
        this.dataService = dataService;
        this.level = 3;
        this.problem = [];
        this.problemCount = 10;
        for (var i = 0; i < this.problemCount; ++i) {
            this.problem[i] = '1';
        }
    }
    Test4Component.prototype.ngOnInit = function () {
        var _this = this;
        window.scrollTo(0, 0);
        this.onLoad('prepare', {}, function () {
            _this.onLoad('user', {}, function () {
                if (!_this.sessionPass.isLogin) {
                    _this.router.navigate(['/']);
                }
            });
        });
    };
    Test4Component.prototype.onLoad = function (tag, arg, callback) {
        var _this = this;
        if (tag === void 0) { tag = 'prepare'; }
        if (arg === void 0) { arg = {}; }
        if (callback === void 0) { callback = function () { }; }
        if (tag == 'user') {
            this.dataService.getUser(this.sessionPass.username)
                .subscribe(function (response) {
                if (!response.status) {
                    _this.userPass = undefined;
                    callback();
                }
                else {
                    _this.userPass = response.message[0];
                    callback();
                }
            });
        }
        if (tag == 'session' || tag == 'prepare') {
            this.dataService.getSession()
                .subscribe(function (response) {
                _this.sessionPass = response.message;
                callback();
            });
        }
    };
    Test4Component.prototype.onAnswer = function () {
        var _this = this;
        if (confirm("นักเรียนต้องการส่งแบบทดสอบหรือไม่")) {
            this.dataService.postAnswer(this.level, this.problem)
                .subscribe(function (res) {
                if (!res.status) {
                    if (res.message == 'too') {
                        alert('นักเรียนทำข้อสอบเกิน 10 ครั้งแล้ว');
                        _this.router.navigate(['/']);
                    }
                    else {
                        alert('เกิดข้อผิดพลาด');
                    }
                }
                else {
                    if (res.newhigh) {
                        alert('ยินดีด้วยจ้าา นักเรียนได้คะแนน ' + res.ans + 'คะแนน และได้คะแนนสูงกว่าครั้งที่ผ่านมา');
                        _this.router.navigate(['/']);
                    }
                    else {
                        alert('ยินดีด้วยจ้าา นักเรียนได้คะแนน ' + res.ans);
                        _this.router.navigate(['/']);
                    }
                }
            });
        }
    };
    Test4Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-test4',
            template: __webpack_require__("./src/app/problem/test4/test4.component.html"),
            styles: [__webpack_require__("./src/app/problem/test4/test4.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]])
    ], Test4Component);
    return Test4Component;
}());



/***/ }),

/***/ "./src/app/sub/course-show/course-show.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sub/course-show/course-show.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"large-margin\"></div>\n<div class=\"panel panel-default\">\n  <div class=\"panel-body panel-profile\">\n    <div class=\"panel-img\" style=\"background-image:url('assets/img/contents/1-preview.jpg');background-position: 50% 40%;\"></div>\n    <div class=\"small-margin\"></div>\n    <div class=\"panel-card panel-dock\">\n      <div class=\"row\">\n        <div class=\"row-equal\">\n          <div class=\"col-md-8\">\n            <div class=\"container-content\">\n              <img src=\"assets/img/biology-tag.png\" width=\"100\" height=\"31\">\n              <br><br>\n              <p class=\"me\">บทที่ 1: การถ่ายทอดทางพันธุกรรม</p>\n              <p class=\"re\">การศึกษาลักษณะทั้ง 7 ประการในการผสมพันธุ์ถั่วลันเตา และการค้นพบการถ่ายทอดลักษณะทางพันธุกรรม …</p>\n            </div>\n            <div class=\"large-margin\"></div>\n          </div>\n          <div class=\"col-md-4 visible-check-card\">\n            \n            <div class=\"panel-right text-center\">\n              <br><h5>คะแนนรายหน่วย</h5>\n              <div class=\"small-margin\"></div>\n              \n              <div *ngIf=\"sessionPass?.isLogin ; else falseTemplate\">\n                  <p class=\"me text-info\">{{scoreUser[0]}} / 10 คะแนน</p>\n              </div>\n              <ng-template #falseTemplate>\n                  <p class=\"me text-danger\">นักเรียนยังไม่ได้เข้าสู่ระบบ</p>\n              </ng-template>\n\n              <br>\n              <a routerLink=\"/course/@genetics\" class=\"btn btn-warning\" style=\"width: 120px;\">เข้าสู่บทเรียน</a>\n              <div class=\"little-margin\"></div>\n              <a routerLink=\"/test/@genetics\" class=\"btn btn-danger\" style=\"width: 120px;\">ทำแบบทดสอบ</a>\n              <br><br><br>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"disable-check-card\">\n        <hr>\n        <div class=\"container-fluid text-center\">\n            <br><h5>คะแนนรายหน่วย</h5>\n            <div class=\"small-margin\"></div>\n            <div *ngIf=\"sessionPass?.isLogin ; else falseTemplate\">\n                <p class=\"me text-info\">{{scoreUser[0]}} / 10 คะแนน</p>\n            </div>\n            <ng-template #falseTemplate>\n                <p class=\"me text-danger\">นักเรียนยังไม่ได้เข้าสู่ระบบ</p>\n            </ng-template>\n            <br>\n            <a routerLink=\"/course/@genetics\" class=\"btn btn-warning\" style=\"width: 120px;\">เข้าสู่บทเรียน</a>\n            <div class=\"little-margin\"></div>\n            <a routerLink=\"/test/@genetics\" class=\"btn btn-danger\" style=\"width: 120px;\">ทำแบบทดสอบ</a>\n            <br><br><br>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<br>\n\n<div class=\"panel panel-default\">\n  <div class=\"panel-body panel-profile\">\n    <div class=\"panel-img\" style=\"background-image:url('assets/img/contents/2-preview-2.jpg');background-position: 50% 60%;\"></div>\n    <div class=\"small-margin\"></div>\n    <div class=\"panel-card panel-dock\">\n      <div class=\"row\">\n        <div class=\"row-equal\">\n          <div class=\"col-md-8\">\n            <div class=\"container-content\">\n              <img src=\"assets/img/biology-tag.png\" width=\"100\" height=\"31\">\n              <br><br>\n              <p class=\"me\">บทที่ 2: ยีนและโครโมโซม</p>\n              <p class=\"re\">สารพันธุกรรมของสิ่งมีชีวิต การกลายพันธุ์ และเทคโนโลยีพันธุศาสตร์ …</p>\n            </div>\n            <div class=\"large-margin\"></div>\n          </div>\n          <div class=\"col-md-4 visible-check-card\">\n            \n            <div class=\"panel-right text-center\">\n              <br><h5>คะแนนรายหน่วย</h5>\n              <div class=\"small-margin\"></div>\n              \n              <div *ngIf=\"sessionPass?.isLogin ; else falseTemplate\">\n                  <p class=\"me text-info\">{{scoreUser[1]}} / 10 คะแนน</p>\n              </div>\n              <ng-template #falseTemplate>\n                  <p class=\"me text-danger\">นักเรียนยังไม่ได้เข้าสู่ระบบ</p>\n              </ng-template>\n\n              <br>\n              <a routerLink=\"/course/@genetic-material\" class=\"btn btn-warning\" style=\"width: 120px;\">เข้าสู่บทเรียน</a>\n              <div class=\"little-margin\"></div>\n              <a routerLink=\"/test/@genetic-material\" class=\"btn btn-danger\" style=\"width: 120px;\">ทำแบบทดสอบ</a>\n              <br><br><br>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"disable-check-card\">\n        <hr>\n        <div class=\"container-fluid text-center\">\n            <br><h5>คะแนนรายหน่วย</h5>\n            <div class=\"small-margin\"></div>\n            <div *ngIf=\"sessionPass?.isLogin ; else falseTemplate\">\n                <p class=\"me text-info\">{{scoreUser[1]}} / 10 คะแนน</p>\n            </div>\n            <ng-template #falseTemplate>\n                <p class=\"me text-danger\">นักเรียนยังไม่ได้เข้าสู่ระบบ</p>\n            </ng-template>\n            <br>\n            <a routerLink=\"/course/@genetic-material\" class=\"btn btn-warning\" style=\"width: 120px;\">เข้าสู่บทเรียน</a>\n            <div class=\"little-margin\"></div>\n            <a routerLink=\"/test/@genetic-material\" class=\"btn btn-danger\" style=\"width: 120px;\">ทำแบบทดสอบ</a>\n            <br><br><br>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<br>\n\n<div class=\"panel panel-default\">\n  <div class=\"panel-body panel-profile\">\n    <div class=\"panel-img\" style=\"background-image:url('assets/img/contents/3/preview.jpeg');background-position: 50% 60%;\"></div>\n    <div class=\"small-margin\"></div>\n    <div class=\"panel-card panel-dock\">\n      <div class=\"row\">\n        <div class=\"row-equal\">\n          <div class=\"col-md-8\">\n            <div class=\"container-content\">\n              <img src=\"assets/img/biology-tag.png\" width=\"100\" height=\"31\">\n              <br><br>\n              <p class=\"me\">บทที่ 3: พันธุวิศวกรรม</p>\n              <p class=\"re\">การดัดแปลงหรือตัดต่อยีนเพื่อสร้าง สิ่งมีชีวิตในแบบที่เราต้องการ …</p>\n            </div>\n            <div class=\"large-margin\"></div>\n          </div>\n          <div class=\"col-md-4 visible-check-card\">\n            \n            <div class=\"panel-right text-center\">\n              <br><h5>คะแนนรายหน่วย</h5>\n              <div class=\"small-margin\"></div>\n              \n              <div *ngIf=\"sessionPass?.isLogin ; else falseTemplate\">\n                  <p class=\"me text-info\">{{scoreUser[2]}} / 5 คะแนน</p>\n              </div>\n              <ng-template #falseTemplate>\n                  <p class=\"me text-danger\">นักเรียนยังไม่ได้เข้าสู่ระบบ</p>\n              </ng-template>\n\n              <br>\n              <a routerLink=\"/course/@genetic-engineering\" class=\"btn btn-warning\" style=\"width: 120px;\">เข้าสู่บทเรียน</a>\n              <div class=\"little-margin\"></div>\n              <a routerLink=\"/test/@genetic-engineering\" class=\"btn btn-danger\" style=\"width: 120px;\">ทำแบบทดสอบ</a>\n              <br><br><br>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"disable-check-card\">\n        <hr>\n        <div class=\"container-fluid text-center\">\n            <br><h5>คะแนนรายหน่วย</h5>\n            <div class=\"small-margin\"></div>\n            <div *ngIf=\"sessionPass?.isLogin ; else falseTemplate\">\n                <p class=\"me text-info\">{{scoreUser[2]}} / 5 คะแนน</p>\n            </div>\n            <ng-template #falseTemplate>\n                <p class=\"me text-danger\">นักเรียนยังไม่ได้เข้าสู่ระบบ</p>\n            </ng-template>\n            <br>\n            <a routerLink=\"/course/@genetic-engineering\" class=\"btn btn-warning\" style=\"width: 120px;\">เข้าสู่บทเรียน</a>\n            <div class=\"little-margin\"></div>\n            <a routerLink=\"/test/@genetic-engineering\" class=\"btn btn-danger\" style=\"width: 120px;\">ทำแบบทดสอบ</a>\n            <br><br><br>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<br>\n\n<div class=\"panel panel-default\">\n  <div class=\"panel-body panel-profile\">\n    <div class=\"panel-img\" style=\"background-image:url('assets/img/contents/4/preview.jpg');background-position: 50% 60%;\"></div>\n    <div class=\"small-margin\"></div>\n    <div class=\"panel-card panel-dock\">\n      <div class=\"row\">\n        <div class=\"row-equal\">\n          <div class=\"col-md-8\">\n            <div class=\"container-content\">\n              <img src=\"assets/img/biology-tag.png\" width=\"100\" height=\"31\">\n              <br><br>\n              <p class=\"me\">บทที่ 4: วิวัฒนาการ</p>\n              <p class=\"re\">การเปลี่ยนแปลงอย่างค่อยเป็นค่อยไปของสิ่งมีชีวิตในแต่ละรุ่น ….</p>\n            </div>\n            <div class=\"large-margin\"></div>\n          </div>\n          <div class=\"col-md-4 visible-check-card\">\n            \n            <div class=\"panel-right text-center\">\n              <br><h5>คะแนนรายหน่วย</h5>\n              <div class=\"small-margin\"></div>\n              \n              <div *ngIf=\"sessionPass?.isLogin ; else falseTemplate\">\n                  <p class=\"me text-info\">{{scoreUser[3]}} / 10 คะแนน</p>\n              </div>\n              <ng-template #falseTemplate>\n                  <p class=\"me text-danger\">นักเรียนยังไม่ได้เข้าสู่ระบบ</p>\n              </ng-template>\n\n              <br>\n              <a routerLink=\"/course/@evolution\" class=\"btn btn-warning\" style=\"width: 120px;\">เข้าสู่บทเรียน</a>\n              <div class=\"little-margin\"></div>\n              <a routerLink=\"/test/@evolution\" class=\"btn btn-danger\" style=\"width: 120px;\">ทำแบบทดสอบ</a>\n              <br><br><br>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"disable-check-card\">\n        <hr>\n        <div class=\"container-fluid text-center\">\n            <br><h5>คะแนนรายหน่วย</h5>\n            <div class=\"small-margin\"></div>\n            <div *ngIf=\"sessionPass?.isLogin ; else falseTemplate\">\n                <p class=\"me text-info\">{{scoreUser[3]}} / 10 คะแนน</p>\n            </div>\n            <ng-template #falseTemplate>\n                <p class=\"me text-danger\">นักเรียนยังไม่ได้เข้าสู่ระบบ</p>\n            </ng-template>\n            <br>\n            <a routerLink=\"/course/@evolution\" class=\"btn btn-warning\" style=\"width: 120px;\">เข้าสู่บทเรียน</a>\n            <div class=\"little-margin\"></div>\n            <a routerLink=\"/test/@evolution\" class=\"btn btn-danger\" style=\"width: 120px;\">ทำแบบทดสอบ</a>\n            <br><br><br>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<br>\n"

/***/ }),

/***/ "./src/app/sub/course-show/course-show.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CourseShowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("./src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var CourseShowComponent = /** @class */ (function () {
    function CourseShowComponent(dataService) {
        this.dataService = dataService;
        this.scoreUser = ['', '', '', ''];
    }
    CourseShowComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.onLoad('prepare', [], function () {
            _this.getScore(0);
            _this.getScore(1);
            _this.getScore(2);
            _this.getScore(3);
        });
    };
    CourseShowComponent.prototype.onLoad = function (tag, arg, callback) {
        var _this = this;
        if (tag === void 0) { tag = 'prepare'; }
        if (callback === void 0) { callback = function () { }; }
        if (tag == 'user') {
            this.dataService.getUser(this.sessionPass.username)
                .subscribe(function (response) {
                if (!response.status) {
                    _this.userPass = undefined;
                    callback();
                }
                else {
                    _this.userPass = response.message;
                    callback();
                }
            });
        }
        if (tag == 'session' || tag == 'prepare') {
            this.dataService.getSession()
                .subscribe(function (response) {
                _this.sessionPass = response.message;
                callback();
            });
        }
    };
    CourseShowComponent.prototype.getScore = function (courseId) {
        var _this = this;
        var isFound = false;
        if (this.sessionPass.isLogin) {
            this.onLoad('user', [], function () {
                if (typeof _this.userPass !== 'undefined') {
                    isFound = true;
                    _this.scoreUser[courseId] = _this.userPass[0].course[courseId];
                }
                if (!isFound) {
                    _this.scoreUser[courseId] = 'ไม่สามารถค้นหาได้';
                }
            });
        }
        else {
            this.scoreUser[courseId] = 'คุณยังไม่ได้เข้าสู่ระบบ';
        }
    };
    CourseShowComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-course-show',
            template: __webpack_require__("./src/app/sub/course-show/course-show.component.html"),
            styles: [__webpack_require__("./src/app/sub/course-show/course-show.component.css")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]])
    ], CourseShowComponent);
    return CourseShowComponent;
}());



/***/ }),

/***/ "./src/app/sub/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sub/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <hr>\n  <br>\n</div>"

/***/ }),

/***/ "./src/app/sub/footer/footer.component.ts":
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/sub/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/sub/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/sub/nav-jumbotron/nav-jumbotron.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sub/nav-jumbotron/nav-jumbotron.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"feed-cover\">\n  <br><br><br><br><br><br><br><br>\n  <div class=\"feed-cover bg\" ></div>\n  <div class=\"bg2\"></div>\n</div>"

/***/ }),

/***/ "./src/app/sub/nav-jumbotron/nav-jumbotron.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavJumbotronComponent; });
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

var NavJumbotronComponent = /** @class */ (function () {
    function NavJumbotronComponent() {
    }
    NavJumbotronComponent.prototype.ngOnInit = function () {
    };
    NavJumbotronComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'nav-jumbotron',
            template: __webpack_require__("./src/app/sub/nav-jumbotron/nav-jumbotron.component.html"),
            styles: [__webpack_require__("./src/app/sub/nav-jumbotron/nav-jumbotron.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavJumbotronComponent);
    return NavJumbotronComponent;
}());



/***/ }),

/***/ "./src/app/sub/profile/profile.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sub/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"large-margin\"></div>\n<div class=\"panel panel-default\">\n  <div class=\"panel-body panel-profile\">\n    <div class=\"panel-img\"></div>\n    <div class=\"panel-card text-center\">\n      <img class=\"card-img\" src=\"assets/img/profile-img.png\" width=\"110\" height=\"110\">\n      <div class=\"small-margin\"></div>\n      <h5>คุณครูวรรณี มณีพงศ์</h5>\n      <h6 class=\"small-content gray\">คุณครูชำนาญการพิเศษ โรงเรียนสิรินธร</h6>\n      <div class=\"small-margin\"></div>\n      <h6 class=\"me small-content-2\">เบอร์โทรศัพท์ | ช่องทางอื่น</h6>\n      <div class=\"large-margin\"></div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/sub/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
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

var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/sub/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/sub/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/sub/web-nav/web-nav.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sub/web-nav/web-nav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\"\n        aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand visible-xs-block text-center\" href=\"#\" style=\"float:none;\">\n        <img _ngcontent-c1=\"\" class=\"center-block\" height=\"22\" src=\"assets/img/kruwannee.png\" width=\"125\" style=\"\n    margin-top: 5px;\n\">\n      </a>\n      <a class=\"navbar-brand visible-check\" href=\"#\" style=\"float:none;\">\n        <img src=\"assets/img/kruwannee.png\" width=\"200\" height=\"34\">\n      </a>\n      <li *ngIf=\"sessionPass?.isLogin ; else falseTemplateXs\" class=\"dropdown visible-xs-block\" style=\"position: relative;float:right;/* top: 5px; *//* right: 0; *//* margin-right: auto; */margin-top: -46px;padding-right: 21px;\">\n        <a href=\"#\" class=\"dropdown-toggle visible-xs-block\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          <img src=\"assets/img/man-user.svg\" width=\"20\" height=\"20\"> </a>\n        <ul class=\"dropdown-menu\" style=\"left:-85px;\">\n          <li>\n              <a routerLink=\"/dashboard\">{{userPass?.name}} {{userPass?.lastname}}</a>\n            </li>\n            <li role=\"separator\" class=\"divider\"></li>\n            <li>  \n              <a (click)=\"logout()\">ออกจากระบบ</a>\n            </li>\n        </ul>\n      </li>\n      <ng-template #falseTemplateXs>\n          <li class=\"dropdown visible-xs-block\" style=\"position: relative;float:right;/* top: 5px; *//* right: 0; *//* margin-right: auto; */margin-top: -46px;padding-right: 21px;\">\n              <a href=\"#\" class=\"dropdown-toggle visible-xs-block\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                  <img src=\"assets/img/man-user.svg\" width=\"20\" height=\"20\"> </a>\n                <ul class=\"dropdown-menu\" style=\"left:-85px;\">\n                  <li>\n                      <a routerLink=\"/login\">เข้าสู่ระบบ</a>\n                    </li>\n                </ul>\n          </li>\n        </ng-template>\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">\n          <a href=\"#\" routerLink=\"/\">หน้าแรก</a>\n        </li>\n        <li routerLinkActive=\"active\">\n          <a href=\"#\" routerLink=\"/course\" routerLinkActive=\"active\">คอร์ส</a>\n        </li>\n        <li *ngIf=\"sessionPass?.isLogin ; else falseTemplate\" class=\"visible-check dropdown\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            <img src=\"assets/img/man-user.svg\" width=\"15\" height=\"15\">\n            <span class=\"caret\"></span>\n          </a>\n          <ul class=\"dropdown-menu\">\n            <li>\n              <a routerLink=\"/dashboard\">{{userPass?.name}} {{userPass?.lastname}}</a>\n            </li>\n            <li role=\"separator\" class=\"divider\"></li>\n            <li>  \n              <a (click)=\"logout()\">ออกจากระบบ</a>\n            </li>\n          </ul>\n        </li>\n        <ng-template #falseTemplate>\n          <li class=\"visible-check dropdown\">\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n              <img src=\"assets/img/man-user.svg\" width=\"15\" height=\"15\">\n              <span class=\"caret\"></span>\n            </a>\n            <ul class=\"dropdown-menu\">\n              <li>\n                <a routerLink=\"/login\">เข้าสู่ระบบ</a>\n              </li>\n            </ul>\n          </li>\n        </ng-template>\n      </ul>\n    </div>\n    <!-- /.navbar-collapse -->\n  </div>\n  <!-- /.container-fluid -->\n</nav>"

/***/ }),

/***/ "./src/app/sub/web-nav/web-nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebNavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("./src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var WebNavComponent = /** @class */ (function () {
    function WebNavComponent(dataService) {
        this.dataService = dataService;
    }
    WebNavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.onLoad('prepare', {}, function () {
            _this.onLoad('user');
        });
    };
    WebNavComponent.prototype.onLoad = function (tag, arg, callback) {
        var _this = this;
        if (tag === void 0) { tag = 'prepare'; }
        if (arg === void 0) { arg = {}; }
        if (callback === void 0) { callback = function () { }; }
        if (tag == 'user') {
            this.dataService.getUser(this.sessionPass.username)
                .subscribe(function (response) {
                if (!response.status) {
                    _this.userPass = undefined;
                    callback();
                }
                else {
                    _this.userPass = response.message[0];
                    callback();
                }
            });
        }
        if (tag == 'session' || tag == 'prepare') {
            this.dataService.getSession()
                .subscribe(function (response) {
                _this.sessionPass = response.message;
                callback();
            });
        }
    };
    WebNavComponent.prototype.logout = function () {
        var _this = this;
        this.dataService.postLogout()
            .subscribe(function (response) {
            _this.refreshPage();
        });
    };
    WebNavComponent.prototype.refreshPage = function () {
        location.reload();
    };
    WebNavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'web-nav',
            template: __webpack_require__("./src/app/sub/web-nav/web-nav.component.html"),
            styles: [__webpack_require__("./src/app/sub/web-nav/web-nav.component.css")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]])
    ], WebNavComponent);
    return WebNavComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map