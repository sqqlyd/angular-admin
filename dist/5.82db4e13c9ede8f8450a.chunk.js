webpackJsonp([5],{1217:function(module,exports,__webpack_require__){"use strict";var core_1=__webpack_require__(0),common_1=__webpack_require__(14),forms_1=__webpack_require__(12),nga_module_1=__webpack_require__(299),dashboard_component_1=__webpack_require__(1257),dashboard_routing_1=__webpack_require__(1404),siteStatistics_1=__webpack_require__(1405),siteStatistics_service_1=__webpack_require__(1258),DashboardModule=function(){function DashboardModule(){}return DashboardModule=__decorate([core_1.NgModule({imports:[common_1.CommonModule,forms_1.FormsModule,nga_module_1.NgaModule,dashboard_routing_1.routing],declarations:[siteStatistics_1.siteStatistics,dashboard_component_1.Dashboard],providers:[siteStatistics_service_1.SiteStatisticsService]}),__metadata("design:paramtypes",[])],DashboardModule)}();Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=DashboardModule},1257:function(module,exports,__webpack_require__){"use strict";var core_1=__webpack_require__(0),Dashboard=function(){function Dashboard(){}return Dashboard=__decorate([core_1.Component({selector:"dashboard",encapsulation:core_1.ViewEncapsulation.None,styles:[__webpack_require__(1320)],template:__webpack_require__(1344)}),__metadata("design:paramtypes",[])],Dashboard)}();exports.Dashboard=Dashboard},1258:function(module,exports,__webpack_require__){"use strict";var core_1=__webpack_require__(0),SiteStatisticsService=function(){function SiteStatisticsService(){}return SiteStatisticsService.prototype.getData=function(){return[{description:"今日浏览人数",stats:"57,820",icon:"person"},{description:"今日留言数",stats:"89,745",icon:"money"},{description:"今天新文章",stats:"178,391",icon:"face"},{description:"我也不知道",stats:"32,592",icon:"refresh"}]},SiteStatisticsService=__decorate([core_1.Injectable(),__metadata("design:paramtypes",[])],SiteStatisticsService)}();exports.SiteStatisticsService=SiteStatisticsService},1320:function(module,exports){module.exports="@media screen and (min-width: 1620px) {\n  .row.shift-up > * {\n    margin-top: -573px; } }\n\n@media screen and (max-width: 1620px) {\n  .card.feed-panel.large-card {\n    height: 824px; } }\n\n.user-stats-card .card-title {\n  padding: 0 0 15px; }\n\n.blurCalendar {\n  height: 475px; }\n"},1321:function(module,exports){module.exports=".pie-charts {\n  color: #ffffff; }\n  .pie-charts .pie-chart-item-container {\n    position: relative;\n    padding: 0 15px;\n    float: left;\n    box-sizing: border-box; }\n    .pie-charts .pie-chart-item-container .card {\n      height: 115px; }\n      .pie-charts .pie-chart-item-container .card .card-body {\n        padding: 15px; }\n  @media screen and (min-width: 1325px) {\n    .pie-charts .pie-chart-item-container {\n      width: 25%;\n      flex: 0 0 25%; } }\n  @media screen and (min-width: 700px) and (max-width: 1325px) {\n    .pie-charts .pie-chart-item-container {\n      width: 50%;\n      flex: 0 0 50%; } }\n  @media screen and (max-width: 700px) {\n    .pie-charts .pie-chart-item-container {\n      width: 100%;\n      flex: 0 0 100%; } }\n  .pie-charts .pie-chart-item {\n    position: relative; }\n    .pie-charts .pie-chart-item .chart-icon {\n      position: absolute;\n      right: 0;\n      top: 3px; }\n  @media screen and (min-width: 1325px) and (max-width: 1650px), (min-width: 700px) and (max-width: 830px), (max-width: 400px) {\n    .pie-charts .chart-icon {\n      display: none; } }\n  .pie-charts .description {\n    display: inline-block;\n    padding: 15px 0 0 20px;\n    font-size: 18px;\n    opacity: 0.9; }\n    .pie-charts .description .description-stats {\n      padding-top: 20px;\n      font-size: 24px; }\n  .pie-charts .angular {\n    margin-top: 100px; }\n  .pie-charts .angular .chart {\n    margin-top: 0; }\n"},1344:function(module,exports){module.exports='<div class="row">\n  <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">\n    <site-statistics></site-statistics>\n  </div>\n</div>\n<div class="row">\n  <ba-card class="col-xlg-6 col-xl-6 col-lg-12 col-sm-12 col-xs-12"\n           title="用户来源渠道" \n           baCardClass="traffic-panel medium-card">\n    <!-- <traffic-chart></traffic-chart> -->\n  </ba-card>\n  <ba-card class="col-xlg-6 col-xl-6 col-lg-12 col-sm-12 col-xs-12"\n           title="用户来源地区" \n           baCardClass="medium-card">\n    <!-- <users-map></users-map> -->\n  </ba-card>\n</div>\n<div class="row">\n  <ba-card class="col-xlg-6 col-xl-6 col-lg-12 col-sm-12 col-xs-12"\n           title="今日流量" \n           baCardClass="medium-card">\n    <!-- <line-chart></line-chart> -->\n  </ba-card>\n  <ba-card class="col-xlg-6 col-xl-6 col-lg-12 col-sm-12 col-xs-12" \n           title="待办事项"\n           baCardClass="medium-card with-scroll">\n    <!-- <todo></todo> -->\n  </ba-card>\n</div>\n'},1345:function(module,exports){module.exports='<div class="row pie-charts">\r\n  <ba-card *ngFor="let chart of charts" \r\n           class="pie-chart-item-container col-xlg-3 col-lg-3 col-md-6 col-sm-12 col-xs-12">\r\n    <div class="pie-chart-item">\r\n      <div class="description">\r\n        <div>{{ chart.description }}</div>\r\n        <div class="description-stats">{{ chart.stats }}</div>\r\n      </div>\r\n      <i class="chart-icon i-{{ chart.icon }}"></i>\r\n    </div>\r\n  </ba-card>\r\n</div>\r\n'},1404:function(module,exports,__webpack_require__){"use strict";var router_1=__webpack_require__(41),dashboard_component_1=__webpack_require__(1257),routes=[{path:"",component:dashboard_component_1.Dashboard}];exports.routing=router_1.RouterModule.forChild(routes)},1405:function(module,exports,__webpack_require__){"use strict";function __export(m){for(var p in m)exports.hasOwnProperty(p)||(exports[p]=m[p])}__export(__webpack_require__(1406))},1406:function(module,exports,__webpack_require__){"use strict";var core_1=__webpack_require__(0),siteStatistics_service_1=__webpack_require__(1258),siteStatistics=function(){function siteStatistics(_siteStatisticsService){this._siteStatisticsService=_siteStatisticsService,this.charts=this._siteStatisticsService.getData()}return siteStatistics=__decorate([core_1.Component({selector:"site-statistics",encapsulation:core_1.ViewEncapsulation.None,styles:[__webpack_require__(1321)],template:__webpack_require__(1345)}),__metadata("design:paramtypes",["function"==typeof(_a="undefined"!=typeof siteStatistics_service_1.SiteStatisticsService&&siteStatistics_service_1.SiteStatisticsService)&&_a||Object])],siteStatistics);var _a}();exports.siteStatistics=siteStatistics}});