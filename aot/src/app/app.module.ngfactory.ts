/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from '../../../src/app/app.module';
import * as i2 from '../../../src/app/app.component';
import * as i3 from './+home/home.component.ngfactory';
import * as i4 from './+admins/admins.component.ngfactory';
import * as i5 from './+admins/admins-home/admins-home.component.ngfactory';
import * as i6 from './+admins/admins-profile/admins-profile.component.ngfactory';
import * as i7 from './+admins/admins-members/admins-members.component.ngfactory';
import * as i8 from './+admins/admins-communications/admins-communications.component.ngfactory';
import * as i9 from './+admins/admins-member/admins-member.component.ngfactory';
import * as i10 from './+admins/admins-students/admins-students.component.ngfactory';
import * as i11 from './+admins/admins-student/admins-student.component.ngfactory';
import * as i12 from './+admins/mr-summary-tracking/mr-summary-tracking.component.ngfactory';
import * as i13 from './+admins/mr-summary-updates/mr-summary-updates.component.ngfactory';
import * as i14 from './+admins/mr-follow-up-tracking/mr-follow-up-tracking.component.ngfactory';
import * as i15 from './+admins/mr-follow-up-updates/mr-follow-up-updates.component.ngfactory';
import * as i16 from './+mentors/mentors.component.ngfactory';
import * as i17 from './+mentors/monthly-reports/monthly-reports.component.ngfactory';
import * as i18 from './+mentors/mentors-home/mentors-home.component.ngfactory';
import * as i19 from './+mentors/mentors-profile/mentors-profile.component.ngfactory';
import * as i20 from './+mentors/monthly-reports-add/monthly-reports-add.component.ngfactory';
import * as i21 from './+students/students.component.ngfactory';
import * as i22 from './+students/students-home/students-home.component.ngfactory';
import * as i23 from './+students/students-profile/students-profile.component.ngfactory';
import * as i24 from './+students/students-sponsor-letters/students-sponsor-letters.component.ngfactory';
import * as i25 from './+students/sponsor-letters-add/sponsor-letters-add.component.ngfactory';
import * as i26 from './+reports/reports.component.ngfactory';
import * as i27 from './+reports/reports-home/reports-home.component.ngfactory';
import * as i28 from './+reports/reports-mentor-reports/reports-mentor-reports.component.ngfactory';
import * as i29 from './+reports/reports-mentor-reports2/reports-mentor-reports2.component.ngfactory';
import * as i30 from './+reports/reports-student-letters/reports-student-letters.component.ngfactory';
import * as i31 from './+reports/reports-student-letters2/reports-student-letters2.component.ngfactory';
import * as i32 from './app.component.ngfactory';
import * as i33 from '@angular/common';
import * as i34 from '@angular/platform-browser';
import * as i35 from '@angular/forms';
import * as i36 from '@angular/common/http';
import * as i37 from '../../../src/app/app_shared/services/web-api-prefix.service';
import * as i38 from '../../../src/app/+reports/shared/services/sql-reports';
import * as i39 from '@angular/router';
import * as i40 from '../../../src/app/app_shared/services/session.service';
import * as i41 from '../../../src/app/app_shared/services/sql-resource';
import * as i42 from '../../../src/app/app_shared/services/auth.service';
import * as i43 from '../../../src/app/app.routing-guards';
import * as i44 from '../../../src/app/+home/home.component';
import * as i45 from '../../../src/app/+admins/admins.component';
import * as i46 from '../../../src/app/+admins/admins-home/admins-home.component';
import * as i47 from '../../../src/app/+admins/admins-profile/admins-profile.component';
import * as i48 from '../../../src/app/+admins/admins-members/admins-members.component';
import * as i49 from '../../../src/app/+admins/admins-communications/admins-communications.component';
import * as i50 from '../../../src/app/+admins/admins-member/admins-member.component';
import * as i51 from '../../../src/app/+admins/admins-students/admins-students.component';
import * as i52 from '../../../src/app/+admins/admins-student/admins-student.component';
import * as i53 from '../../../src/app/+admins/mr-summary-tracking/mr-summary-tracking.component';
import * as i54 from '../../../src/app/+admins/mr-summary-updates/mr-summary-updates.component';
import * as i55 from '../../../src/app/+admins/mr-follow-up-tracking/mr-follow-up-tracking.component';
import * as i56 from '../../../src/app/+admins/mr-follow-up-updates/mr-follow-up-updates.component';
import * as i57 from '../../../src/app/+mentors/mentors.component';
import * as i58 from '../../../src/app/+mentors/monthly-reports/monthly-reports.component';
import * as i59 from '../../../src/app/+mentors/mentors-home/mentors-home.component';
import * as i60 from '../../../src/app/+mentors/mentors-profile/mentors-profile.component';
import * as i61 from '../../../src/app/+mentors/monthly-reports-add/monthly-reports-add.component';
import * as i62 from '../../../src/app/+students/students.component';
import * as i63 from '../../../src/app/+students/students-home/students-home.component';
import * as i64 from '../../../src/app/+students/students-profile/students-profile.component';
import * as i65 from '../../../src/app/+students/students-sponsor-letters/students-sponsor-letters.component';
import * as i66 from '../../../src/app/+students/sponsor-letters-add/sponsor-letters-add.component';
import * as i67 from '../../../src/app/+reports/reports.component';
import * as i68 from '../../../src/app/+reports/reports-home/reports-home.component';
import * as i69 from '../../../src/app/+reports/reports-mentor-reports/reports-mentor-reports.component';
import * as i70 from '../../../src/app/+reports/reports-mentor-reports2/reports-mentor-reports2.component';
import * as i71 from '../../../src/app/+reports/reports-student-letters/reports-student-letters.component';
import * as i72 from '../../../src/app/+reports/reports-student-letters2/reports-student-letters2.component';
import * as i73 from '../../../src/app/app_shared/app_shared.module';
import * as i74 from '../../../src/app/+home/home.module';
import * as i75 from '../../../src/app/+admins/admins.module';
import * as i76 from '../../../src/app/+mentors/mentors.module';
import * as i77 from '../../../src/app/+students/students.module';
import * as i78 from '../../../src/app/+reports/reports.module';
export const AppModuleNgFactory:i0.NgModuleFactory<i1.AppModule> = i0.ɵcmf(i1.AppModule,
    [i2.AppComponent],(_l:any) => {
      return i0.ɵmod([i0.ɵmpd(512,i0.ComponentFactoryResolver,i0.ɵCodegenComponentFactoryResolver,
          [[8,[i3.HomeComponentNgFactory,i4.AdminsComponentNgFactory,i5.AdminsHomeComponentNgFactory,
              i6.AdminsProfileComponentNgFactory,i7.AdminsMembersComponentNgFactory,
              i8.AdminsCommunicationsComponentNgFactory,i9.AdminsMemberComponentNgFactory,
              i10.AdminsStudentsComponentNgFactory,i11.AdminsStudentComponentNgFactory,
              i12.MentorReportsSummaryTrackingComponentNgFactory,i13.MentorReportSummaryUpdatesComponentNgFactory,
              i14.MentorReportsFollowUpTrackingComponentNgFactory,i15.MentorReportFollowUpUpdatesComponentNgFactory,
              i16.MentorsComponentNgFactory,i17.MonthlyReportsComponentNgFactory,i18.MentorsHomeComponentNgFactory,
              i19.MentorsProfileComponentNgFactory,i20.MonthlyReportsAddComponentNgFactory,
              i21.StudentsComponentNgFactory,i22.StudentsHomeComponentNgFactory,i23.StudentsProfileComponentNgFactory,
              i24.StudentsSponsorLettersComponentNgFactory,i25.SponsorLettersAddComponentNgFactory,
              i26.ReportsComponentNgFactory,i27.ReportsHomeComponentNgFactory,i28.ReportsMentorReportsComponentNgFactory,
              i29.ReportsMentorReports2ComponentNgFactory,i30.ReportsStudentLettersComponentNgFactory,
              i31.ReportsStudentLetters2ComponentNgFactory,i32.AppComponentNgFactory]],
              [3,i0.ComponentFactoryResolver],i0.NgModuleRef]),i0.ɵmpd(5120,i0.LOCALE_ID,
          i0.ɵm,[[3,i0.LOCALE_ID]]),i0.ɵmpd(4608,i33.NgLocalization,i33.NgLocaleLocalization,
          [i0.LOCALE_ID]),i0.ɵmpd(5120,i0.APP_ID,i0.ɵf,([] as any[])),i0.ɵmpd(5120,
          i0.IterableDiffers,i0.ɵk,([] as any[])),i0.ɵmpd(5120,i0.KeyValueDiffers,
          i0.ɵl,([] as any[])),i0.ɵmpd(4608,i34.DomSanitizer,i34.ɵe,[i33.DOCUMENT]),
          i0.ɵmpd(6144,i0.Sanitizer,(null as any),[i34.DomSanitizer]),i0.ɵmpd(4608,
              i34.HAMMER_GESTURE_CONFIG,i34.HammerGestureConfig,([] as any[])),i0.ɵmpd(5120,
              i34.EVENT_MANAGER_PLUGINS,(p0_0:any,p1_0:any,p2_0:any,p2_1:any) => {
                return [new i34.ɵDomEventsPlugin(p0_0),new i34.ɵKeyEventsPlugin(p1_0),
                    new i34.ɵHammerGesturesPlugin(p2_0,p2_1)];
              },[i33.DOCUMENT,i33.DOCUMENT,i33.DOCUMENT,i34.HAMMER_GESTURE_CONFIG]),
          i0.ɵmpd(4608,i34.EventManager,i34.EventManager,[i34.EVENT_MANAGER_PLUGINS,
              i0.NgZone]),i0.ɵmpd(135680,i34.ɵDomSharedStylesHost,i34.ɵDomSharedStylesHost,
              [i33.DOCUMENT]),i0.ɵmpd(4608,i34.ɵDomRendererFactory2,i34.ɵDomRendererFactory2,
              [i34.EventManager,i34.ɵDomSharedStylesHost]),i0.ɵmpd(6144,i0.RendererFactory2,
              (null as any),[i34.ɵDomRendererFactory2]),i0.ɵmpd(6144,i34.ɵSharedStylesHost,
              (null as any),[i34.ɵDomSharedStylesHost]),i0.ɵmpd(4608,i0.Testability,
              i0.Testability,[i0.NgZone]),i0.ɵmpd(4608,i34.Meta,i34.Meta,[i33.DOCUMENT]),
          i0.ɵmpd(4608,i34.Title,i34.Title,[i33.DOCUMENT]),i0.ɵmpd(4608,i35.FormBuilder,
              i35.FormBuilder,([] as any[])),i0.ɵmpd(4608,i35.ɵi,i35.ɵi,([] as any[])),
          i0.ɵmpd(4608,i36.HttpXsrfTokenExtractor,i36.ɵg,[i33.DOCUMENT,i0.PLATFORM_ID,
              i36.ɵe]),i0.ɵmpd(4608,i36.ɵh,i36.ɵh,[i36.HttpXsrfTokenExtractor,i36.ɵf]),
          i0.ɵmpd(5120,i36.HTTP_INTERCEPTORS,(p0_0:any) => {
            return [p0_0];
          },[i36.ɵh]),i0.ɵmpd(4608,i36.ɵd,i36.ɵd,([] as any[])),i0.ɵmpd(6144,i36.XhrFactory,
              (null as any),[i36.ɵd]),i0.ɵmpd(4608,i36.HttpXhrBackend,i36.HttpXhrBackend,
              [i36.XhrFactory]),i0.ɵmpd(6144,i36.HttpBackend,(null as any),[i36.HttpXhrBackend]),
          i0.ɵmpd(5120,i36.HttpHandler,i36.ɵinterceptingHandler,[i36.HttpBackend,[2,
              i36.HTTP_INTERCEPTORS]]),i0.ɵmpd(4608,i36.HttpClient,i36.HttpClient,
              [i36.HttpHandler]),i0.ɵmpd(4608,i37.WebApiPrefixService,i37.WebApiPrefixService,
              ([] as any[])),i0.ɵmpd(4608,i38.SqlReports,i38.SqlReports,[i36.HttpClient,
              i37.WebApiPrefixService]),i0.ɵmpd(5120,i39.ActivatedRoute,i39.ɵf,[i39.Router]),
          i0.ɵmpd(4608,i39.NoPreloading,i39.NoPreloading,([] as any[])),i0.ɵmpd(6144,
              i39.PreloadingStrategy,(null as any),[i39.NoPreloading]),i0.ɵmpd(135680,
              i39.RouterPreloader,i39.RouterPreloader,[i39.Router,i0.NgModuleFactoryLoader,
                  i0.Compiler,i0.Injector,i39.PreloadingStrategy]),i0.ɵmpd(4608,i39.PreloadAllModules,
              i39.PreloadAllModules,([] as any[])),i0.ɵmpd(5120,i39.ROUTER_INITIALIZER,
              i39.ɵi,[i39.ɵg]),i0.ɵmpd(5120,i0.APP_BOOTSTRAP_LISTENER,(p0_0:any) => {
            return [p0_0];
          },[i39.ROUTER_INITIALIZER]),i0.ɵmpd(4608,i40.SessionService,i40.SessionService,
              ([] as any[])),i0.ɵmpd(4608,i41.SqlResource,i41.SqlResource,[i36.HttpClient,
              i37.WebApiPrefixService]),i0.ɵmpd(4608,i42.AuthService,i42.AuthService,
              [i0.NgZone,i39.Router,i40.SessionService,i41.SqlResource]),i0.ɵmpd(4608,
              i43.CanActivateViaAdminAuthGuard,i43.CanActivateViaAdminAuthGuard,[i42.AuthService,
                  i39.Router,i40.SessionService]),i0.ɵmpd(4608,i43.CanActivateViaMentorAuthGuard,
              i43.CanActivateViaMentorAuthGuard,[i42.AuthService,i39.Router,i40.SessionService]),
          i0.ɵmpd(4608,i43.CanActivateViaStudentAuthGuard,i43.CanActivateViaStudentAuthGuard,
              [i42.AuthService,i39.Router,i40.SessionService]),i0.ɵmpd(4608,i43.ConfirmDeactivateGuard,
              i43.ConfirmDeactivateGuard,([] as any[])),i0.ɵmpd(512,i33.CommonModule,
              i33.CommonModule,([] as any[])),i0.ɵmpd(1024,i0.ErrorHandler,i34.ɵa,
              ([] as any[])),i0.ɵmpd(1024,i0.NgProbeToken,() => {
            return [i39.ɵb()];
          },([] as any[])),i0.ɵmpd(512,i39.ɵg,i39.ɵg,[i0.Injector]),i0.ɵmpd(1024,i0.APP_INITIALIZER,
              (p0_0:any,p0_1:any,p1_0:any) => {
                return [i34.ɵc(p0_0,p0_1),i39.ɵh(p1_0)];
              },[[2,i34.NgProbeToken],[2,i0.NgProbeToken],i39.ɵg]),i0.ɵmpd(512,i0.ApplicationInitStatus,
              i0.ApplicationInitStatus,[[2,i0.APP_INITIALIZER]]),i0.ɵmpd(131584,i0.ɵe,
              i0.ɵe,[i0.NgZone,i0.ɵConsole,i0.Injector,i0.ErrorHandler,i0.ComponentFactoryResolver,
                  i0.ApplicationInitStatus]),i0.ɵmpd(2048,i0.ApplicationRef,(null as any),
              [i0.ɵe]),i0.ɵmpd(512,i0.ApplicationModule,i0.ApplicationModule,[i0.ApplicationRef]),
          i0.ɵmpd(512,i34.BrowserModule,i34.BrowserModule,[[3,i34.BrowserModule]]),
          i0.ɵmpd(512,i35.ɵba,i35.ɵba,([] as any[])),i0.ɵmpd(512,i35.ReactiveFormsModule,
              i35.ReactiveFormsModule,([] as any[])),i0.ɵmpd(512,i36.HttpClientXsrfModule,
              i36.HttpClientXsrfModule,([] as any[])),i0.ɵmpd(512,i36.HttpClientModule,
              i36.HttpClientModule,([] as any[])),i0.ɵmpd(1024,i39.ɵa,i39.ɵd,[[3,i39.Router]]),
          i0.ɵmpd(512,i39.UrlSerializer,i39.DefaultUrlSerializer,([] as any[])),i0.ɵmpd(512,
              i39.ChildrenOutletContexts,i39.ChildrenOutletContexts,([] as any[])),
          i0.ɵmpd(256,i33.APP_BASE_HREF,'/',([] as any[])),i0.ɵmpd(256,i39.ROUTER_CONFIGURATION,
              {enableTracing:false},([] as any[])),i0.ɵmpd(1024,i33.LocationStrategy,
              i39.ɵc,[i33.PlatformLocation,[2,i33.APP_BASE_HREF],i39.ROUTER_CONFIGURATION]),
          i0.ɵmpd(512,i33.Location,i33.Location,[i33.LocationStrategy]),i0.ɵmpd(512,
              i0.Compiler,i0.Compiler,([] as any[])),i0.ɵmpd(512,i0.NgModuleFactoryLoader,
              i0.SystemJsNgModuleLoader,[i0.Compiler,[2,i0.SystemJsNgModuleLoaderConfig]]),
          i0.ɵmpd(1024,i39.ROUTES,() => {
            return [[{path:'',component:i44.HomeComponent}],[{path:'admins',component:i45.AdminsComponent,
                canActivate:[i43.CanActivateViaAdminAuthGuard],children:[{path:'',
                    pathMatch:'full',component:i46.AdminsHomeComponent},{path:'profile/:id',
                    component:i47.AdminsProfileComponent},{path:'members',component:i48.AdminsMembersComponent},
                    {path:'members/communications/:id',component:i49.AdminsCommunicationsComponent},
                    {path:'members/member/:id',component:i50.AdminsMemberComponent},
                    {path:'students',component:i51.AdminsStudentsComponent},{path:'students/student/:id',
                        component:i52.AdminsStudentComponent},{path:'mentor-reports/summary-tracking',
                        component:i53.MentorReportsSummaryTrackingComponent},{path:'mentor-reports/summary-updates/:mentorReportId',
                        component:i54.MentorReportSummaryUpdatesComponent},{path:'mentor-reports/follow-up-tracking',
                        component:i55.MentorReportsFollowUpTrackingComponent},{path:'mentor-reports/follow-up-updates/:mentorReportId',
                        component:i56.MentorReportFollowUpUpdatesComponent}]}],[{path:'mentors',
                component:i57.MentorsComponent,canActivate:[i43.CanActivateViaMentorAuthGuard],
                children:[{path:'',pathMatch:'full',component:i58.MonthlyReportsComponent},
                    {path:'home',component:i59.MentorsHomeComponent},{path:'profile/:id',
                        component:i60.MentorsProfileComponent},{path:'monthly-reports/:mentorId',
                        component:i58.MonthlyReportsComponent},{path:'monthly-reports',
                        component:i58.MonthlyReportsComponent},{path:'monthly-reports-add/:mentorId/:studentId',
                        component:i61.MonthlyReportsAddComponent}]}],[{path:'students',
                component:i62.StudentsComponent,canActivate:[i43.CanActivateViaStudentAuthGuard],
                children:[{path:'',pathMatch:'full',component:i63.StudentsHomeComponent},
                    {path:'home',component:i63.StudentsHomeComponent},{path:'profile/:id',
                        component:i64.StudentsProfileComponent},{path:'sponsor-letters/:id',
                        component:i65.StudentsSponsorLettersComponent},{path:'sponsor-letters-add/:studentId/:sponsorId',
                        component:i66.SponsorLettersAddComponent}]}],[{path:'reports',
                component:i67.ReportsComponent,canActivate:[i43.CanActivateViaAdminAuthGuard],
                children:[{path:'',pathMatch:'full',component:i68.ReportsHomeComponent},
                    {path:'mentor-reports',component:i69.ReportsMentorReportsComponent},
                    {path:'mentor-reports2',component:i70.ReportsMentorReports2Component},
                    {path:'student-letters',component:i71.ReportsStudentLettersComponent},
                    {path:'student-letters2',component:i72.ReportsStudentLetters2Component}]}],
                [{path:'',redirectTo:'home',pathMatch:'full'},{path:'Home/Mentors',
                    redirectTo:'/mentors'},{path:'**',redirectTo:''}]];
          },([] as any[])),i0.ɵmpd(1024,i39.Router,i39.ɵe,[i0.ApplicationRef,i39.UrlSerializer,
              i39.ChildrenOutletContexts,i33.Location,i0.Injector,i0.NgModuleFactoryLoader,
              i0.Compiler,i39.ROUTES,i39.ROUTER_CONFIGURATION,[2,i39.UrlHandlingStrategy],
              [2,i39.RouteReuseStrategy]]),i0.ɵmpd(512,i39.RouterModule,i39.RouterModule,
              [[2,i39.ɵa],[2,i39.Router]]),i0.ɵmpd(512,i35.FormsModule,i35.FormsModule,
              ([] as any[])),i0.ɵmpd(512,i73.AppSharedModule,i73.AppSharedModule,([] as any[])),
          i0.ɵmpd(512,i74.HomeModule,i74.HomeModule,([] as any[])),i0.ɵmpd(512,i75.AdminsModule,
              i75.AdminsModule,([] as any[])),i0.ɵmpd(512,i76.MentorsModule,i76.MentorsModule,
              ([] as any[])),i0.ɵmpd(512,i77.StudentsModule,i77.StudentsModule,([] as any[])),
          i0.ɵmpd(512,i78.ReportsModule,i78.ReportsModule,([] as any[])),i0.ɵmpd(512,
              i1.AppModule,i1.AppModule,([] as any[])),i0.ɵmpd(256,i36.ɵe,'XSRF-TOKEN',
              ([] as any[])),i0.ɵmpd(256,i36.ɵf,'X-XSRF-TOKEN',([] as any[]))]);
    });
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL2hvbWUvY2thcGlsbGEvRGV2L0pvdmVuZXNBLWNsaWVudC5DTEkvc3JjL2FwcC9hcHAubW9kdWxlLm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL2hvbWUvY2thcGlsbGEvRGV2L0pvdmVuZXNBLWNsaWVudC5DTEkvc3JjL2FwcC9hcHAubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIiAiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
