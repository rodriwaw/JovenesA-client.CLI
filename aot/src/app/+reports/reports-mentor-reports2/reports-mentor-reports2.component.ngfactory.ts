/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from '../../app_shared/components/loading-container.component.ngfactory';
import * as i2 from '../../../../../src/app/app_shared/components/loading-container.component';
import * as i3 from '@angular/common';
import * as i4 from '../../../../../src/app/app_shared/pipes/alpha-language-pipe';
import * as i5 from '../../../../../src/app/+reports/reports-mentor-reports2/reports-mentor-reports2.component';
import * as i6 from '../../../../../src/app/+reports/shared/services/sql-reports';
import * as i7 from '@angular/router';
import * as i8 from '../../../../../src/app/app_shared/services/session.service';
const styles_ReportsMentorReports2Component:any[] = ([] as any[]);
export const RenderType_ReportsMentorReports2Component:i0.RendererType2 = i0.ɵcrt({encapsulation:2,
    styles:styles_ReportsMentorReports2Component,data:{}});
function View_ReportsMentorReports2Component_1(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,0,(null as any),(null as any),1,'span',[['class',
      'alert alert-danger']],(null as any),(null as any),(null as any),(null as any),
      (null as any))),(_l()(),i0.ɵted(1,(null as any),['','']))],(null as any),(_ck,
      _v) => {
    var _co:any = _v.component;
    const currVal_0:any = _co.errorMessage;
    _ck(_v,1,0,currVal_0);
  });
}
function View_ReportsMentorReports2Component_2(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,0,(null as any),(null as any),1,'span',[['class',
      'alert alert-success']],(null as any),(null as any),(null as any),(null as any),
      (null as any))),(_l()(),i0.ɵted(1,(null as any),['','']))],(null as any),(_ck,
      _v) => {
    var _co:any = _v.component;
    const currVal_0:any = _co.successMessage;
    _ck(_v,1,0,currVal_0);
  });
}
function View_ReportsMentorReports2Component_3(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,0,(null as any),(null as any),5,'div',[['class',
      'text-center col-md-4 col-md-offset-4']],(null as any),(null as any),(null as any),
      (null as any),(null as any))),(_l()(),i0.ɵted(-1,(null as any),['\n        '])),
      (_l()(),i0.ɵeld(2,0,(null as any),(null as any),2,'loading-container',([] as any[]),
          (null as any),(null as any),(null as any),i1.View_LoadingContainerComponent_0,
          i1.RenderType_LoadingContainerComponent)),i0.ɵdid(3,49152,(null as any),
          0,i2.LoadingContainerComponent,([] as any[]),(null as any),(null as any)),
      (_l()(),i0.ɵted(-1,(null as any),['\n        '])),(_l()(),i0.ɵted(-1,(null as any),
          ['\n      ']))],(null as any),(null as any));
}
function View_ReportsMentorReports2Component_5(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,0,(null as any),(null as any),68,'div',[['class',
      'row'],['style','border-bottom: 3px solid #ccc; margin-top: 2px;']],(null as any),
      (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted(-1,
      (null as any),['\n          '])),(_l()(),i0.ɵeld(2,0,(null as any),(null as any),
      65,'div',[['class','col-md-12']],(null as any),(null as any),(null as any),(null as any),
      (null as any))),(_l()(),i0.ɵted(-1,(null as any),['\n\n            '])),(_l()(),
      i0.ɵeld(4,0,(null as any),(null as any),10,'div',[['class','row']],(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted(-1,
      (null as any),['\n              '])),(_l()(),i0.ɵeld(6,0,(null as any),(null as any),
      1,'span',[['class','padded link']],(null as any),(null as any),(null as any),
      (null as any),(null as any))),(_l()(),i0.ɵted(7,(null as any),['\n               Student:\n              ',
      '\n          '])),(_l()(),i0.ɵted(-1,(null as any),['\n              '])),(_l()(),
      i0.ɵeld(9,0,(null as any),(null as any),1,'span',[['class','padded']],(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted(10,
      (null as any),['\n              [Mentor:\n              ',' ]\n          '])),
      (_l()(),i0.ɵted(-1,(null as any),['\n              '])),(_l()(),i0.ɵeld(12,0,
          (null as any),(null as any),1,'span',[['class','padded']],(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted(13,
          (null as any),['\n              [Sponsor:\n              ',', ',' ]\n          '])),
      (_l()(),i0.ɵted(-1,(null as any),['\n\n            '])),(_l()(),i0.ɵted(-1,(null as any),
          ['\n\n            '])),(_l()(),i0.ɵeld(16,0,(null as any),(null as any),
          12,'div',[['class','row']],(null as any),(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i0.ɵted(-1,(null as any),['\n              '])),
      (_l()(),i0.ɵeld(18,0,(null as any),(null as any),1,'span',[['class','padded']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted(19,(null as any),['\n             Report Date:\n            ',
          '\n          '])),(_l()(),i0.ɵted(-1,(null as any),['\n              '])),
      (_l()(),i0.ɵeld(21,0,(null as any),(null as any),1,'span',[['class','padded']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted(22,(null as any),['\n             Last Contact Month:\n\n           ',
          '\n          '])),(_l()(),i0.ɵted(-1,(null as any),['\n              '])),
      (_l()(),i0.ɵeld(24,0,(null as any),(null as any),3,'span',[['class','padded']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted(-1,(null as any),['\n             Student Snapshot:\n            '])),
      (_l()(),i0.ɵeld(26,0,(null as any),(null as any),0,'img',[['width','24px']],
          [[8,'src',4]],(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted(-1,(null as any),['\n          '])),(_l()(),i0.ɵted(-1,(null as any),
          ['\n            '])),(_l()(),i0.ɵted(-1,(null as any),['\n            '])),
      (_l()(),i0.ɵeld(30,0,(null as any),(null as any),7,'div',[['class','row']],(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted(-1,
          (null as any),['\n              '])),(_l()(),i0.ɵeld(32,0,(null as any),
          (null as any),1,'div',[['class','padded']],(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i0.ɵted(-1,(null as any),['\n                 Follow-up Needed:\n              '])),
      (_l()(),i0.ɵted(-1,(null as any),['\n              '])),(_l()(),i0.ɵeld(35,0,
          (null as any),(null as any),1,'div',[['class','col-md-10']],(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted(36,
          (null as any),['\n                ','\n              '])),(_l()(),i0.ɵted(-1,
          (null as any),['\n            '])),(_l()(),i0.ɵted(-1,(null as any),['\n            '])),
      (_l()(),i0.ɵeld(39,0,(null as any),(null as any),7,'div',[['class','row']],(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted(-1,
          (null as any),['\n              '])),(_l()(),i0.ɵeld(41,0,(null as any),
          (null as any),1,'div',[['class','col-md2 padded']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i0.ɵted(-1,(null as any),
          ['\n                 Positive Events:\n              '])),(_l()(),i0.ɵted(-1,
          (null as any),['\n              '])),(_l()(),i0.ɵeld(44,0,(null as any),
          (null as any),1,'div',[['class','col-md-10']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i0.ɵted(45,(null as any),
          ['\n                ','\n              '])),(_l()(),i0.ɵted(-1,(null as any),
          ['\n            '])),(_l()(),i0.ɵted(-1,(null as any),['\n            '])),
      (_l()(),i0.ɵeld(48,0,(null as any),(null as any),7,'div',[['class','row']],(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted(-1,
          (null as any),['\n              '])),(_l()(),i0.ɵeld(50,0,(null as any),
          (null as any),1,'div',[['class','padded']],(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i0.ɵted(-1,(null as any),['\n                 Challenges:\n              '])),
      (_l()(),i0.ɵted(-1,(null as any),['\n              '])),(_l()(),i0.ɵeld(53,0,
          (null as any),(null as any),1,'div',[['class','col-md-10']],(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted(54,
          (null as any),['\n                ','\n              '])),(_l()(),i0.ɵted(-1,
          (null as any),['\n            '])),(_l()(),i0.ɵted(-1,(null as any),['\n            '])),
      (_l()(),i0.ɵeld(57,0,(null as any),(null as any),9,'div',[['class','row']],(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted(-1,
          (null as any),['\n              '])),(_l()(),i0.ɵeld(59,0,(null as any),
          (null as any),3,'div',[['class','padded']],(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i0.ɵted(60,(null as any),['\n                 Sponsor Summary:    [Status: ',
          '] [',' --> ',' ',']\n\n              '])),i0.ɵppd(61,1),i0.ɵppd(62,1),(_l()(),
          i0.ɵted(-1,(null as any),['\n              '])),(_l()(),i0.ɵeld(64,0,(null as any),
          (null as any),1,'div',[['class','col-md-10']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i0.ɵted(65,(null as any),
          ['\n                ','\n              '])),(_l()(),i0.ɵted(-1,(null as any),
          ['\n            '])),(_l()(),i0.ɵted(-1,(null as any),['\n          '])),
      (_l()(),i0.ɵted(-1,(null as any),['\n        ']))],(null as any),(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_0:any = _v.context.$implicit.studentName;
    _ck(_v,7,0,currVal_0);
    const currVal_1:any = _v.context.$implicit.mentorName;
    _ck(_v,10,0,currVal_1);
    const currVal_2:any = _v.context.$implicit.sponsorLastName;
    const currVal_3:any = _v.context.$implicit.sponsorFirstName;
    _ck(_v,13,0,currVal_2,currVal_3);
    const currVal_4:any = _v.context.$implicit.reportDate;
    _ck(_v,19,0,currVal_4);
    const currVal_5:any = _v.context.$implicit.latestMonth;
    _ck(_v,22,0,currVal_5);
    const currVal_6:any = i0.ɵinlineInterpolate(1,'',_co.smileys[(_v.context.$implicit.mentorReportSnapshot + 1)],
        '');
    _ck(_v,26,0,currVal_6);
    const currVal_7:any = _v.context.$implicit.followUpNeeded;
    _ck(_v,36,0,currVal_7);
    const currVal_8:any = _v.context.$implicit.recentSuccess;
    _ck(_v,45,0,currVal_8);
    const currVal_9:any = _v.context.$implicit.recentSetback;
    _ck(_v,54,0,currVal_9);
    const currVal_10:any = _v.context.$implicit.sponsorSummaryStatus;
    const currVal_11:any = i0.ɵunv(_v,60,1,_ck(_v,61,0,i0.ɵnov((<any>(<any>_v.parent).parent),
        0),_v.context.$implicit.mentorPreferredLanguageId));
    const currVal_12:any = i0.ɵunv(_v,60,2,_ck(_v,62,0,i0.ɵnov((<any>(<any>_v.parent).parent),
        0),_v.context.$implicit.sponsorPreferredLanguageId));
    const currVal_13:any = _co.translationNeeded(_v.context.$implicit.mentorPreferredLanguageId,
        _v.context.$implicit.sponsorPreferredLanguageId);
    _ck(_v,60,0,currVal_10,currVal_11,currVal_12,currVal_13);
    const currVal_14:any = _v.context.$implicit.sponsorSummary;
    _ck(_v,65,0,currVal_14);
  });
}
function View_ReportsMentorReports2Component_4(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,0,(null as any),(null as any),4,'div',([] as any[]),
      (null as any),(null as any),(null as any),(null as any),(null as any))),(_l()(),
      i0.ɵted(-1,(null as any),['\n        '])),(_l()(),i0.ɵand(16777216,(null as any),
      (null as any),1,(null as any),View_ReportsMentorReports2Component_5)),i0.ɵdid(3,
      802816,(null as any),0,i3.NgForOf,[i0.ViewContainerRef,i0.TemplateRef,i0.IterableDiffers],
      {ngForOf:[0,'ngForOf']},(null as any)),(_l()(),i0.ɵted(-1,(null as any),['\n      ']))],
      (_ck,_v) => {
        var _co:any = _v.component;
        const currVal_0:any = _co.latestMentorReports2;
        _ck(_v,3,0,currVal_0);
      },(null as any));
}
export function View_ReportsMentorReports2Component_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[i0.ɵpid(0,i4.AlphaLanguagePipe,([] as any[])),(_l()(),i0.ɵeld(1,
      0,(null as any),(null as any),28,'div',[['class','panel panel-primary']],(null as any),
      (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted(-1,
      (null as any),['\n  '])),(_l()(),i0.ɵeld(3,0,(null as any),(null as any),1,'div',
      [['class','panel-heading'],['style','font-size:large']],(null as any),(null as any),
      (null as any),(null as any),(null as any))),(_l()(),i0.ɵted(-1,(null as any),
      [' Latest Mentor Reports -- Full Content\n  '])),(_l()(),i0.ɵted(-1,(null as any),
      ['\n  '])),(_l()(),i0.ɵeld(6,0,(null as any),(null as any),22,'div',[['class',
      'panel-body']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted(-1,(null as any),['\n    '])),(_l()(),i0.ɵand(16777216,(null as any),
          (null as any),1,(null as any),View_ReportsMentorReports2Component_1)),i0.ɵdid(9,
          16384,(null as any),0,i3.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,
              'ngIf']},(null as any)),(_l()(),i0.ɵted(-1,(null as any),['\n    '])),
      (_l()(),i0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_ReportsMentorReports2Component_2)),
      i0.ɵdid(12,16384,(null as any),0,i3.NgIf,[i0.ViewContainerRef,i0.TemplateRef],
          {ngIf:[0,'ngIf']},(null as any)),(_l()(),i0.ɵted(-1,(null as any),['\n\n    '])),
      (_l()(),i0.ɵeld(14,0,(null as any),(null as any),3,'div',([] as any[]),(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted(-1,
          (null as any),['\n\n      '])),(_l()(),i0.ɵted(-1,(null as any),['\n\n      '])),
      (_l()(),i0.ɵted(-1,(null as any),['\n\n\n    '])),(_l()(),i0.ɵted(-1,(null as any),
          ['\n\n    '])),(_l()(),i0.ɵeld(19,0,(null as any),(null as any),8,'div',
          ([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
      i0.ɵdid(20,16384,(null as any),0,i3.NgSwitch,([] as any[]),{ngSwitch:[0,'ngSwitch']},
          (null as any)),(_l()(),i0.ɵted(-1,(null as any),['\n      '])),(_l()(),i0.ɵand(16777216,
          (null as any),(null as any),1,(null as any),View_ReportsMentorReports2Component_3)),
      i0.ɵdid(23,278528,(null as any),0,i3.NgSwitchCase,[i0.ViewContainerRef,i0.TemplateRef,
          i3.NgSwitch],{ngSwitchCase:[0,'ngSwitchCase']},(null as any)),(_l()(),i0.ɵted(-1,
          (null as any),['\n      '])),(_l()(),i0.ɵand(16777216,(null as any),(null as any),
          1,(null as any),View_ReportsMentorReports2Component_4)),i0.ɵdid(26,278528,
          (null as any),0,i3.NgSwitchCase,[i0.ViewContainerRef,i0.TemplateRef,i3.NgSwitch],
          {ngSwitchCase:[0,'ngSwitchCase']},(null as any)),(_l()(),i0.ɵted(-1,(null as any),
          ['\n    '])),(_l()(),i0.ɵted(-1,(null as any),['\n  '])),(_l()(),i0.ɵted(-1,
          (null as any),['\n'])),(_l()(),i0.ɵted(-1,(null as any),['\n\n\nl']))],(_ck,
      _v) => {
    var _co:i5.ReportsMentorReports2Component = _v.component;
    const currVal_0:any = _co.errorMessage;
    _ck(_v,9,0,currVal_0);
    const currVal_1:any = _co.successMessage;
    _ck(_v,12,0,currVal_1);
    const currVal_2:any = _co.isLoading;
    _ck(_v,20,0,currVal_2);
    const currVal_3:any = true;
    _ck(_v,23,0,currVal_3);
    const currVal_4:any = false;
    _ck(_v,26,0,currVal_4);
  },(null as any));
}
export function View_ReportsMentorReports2Component_Host_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,0,(null as any),(null as any),1,'ng-component',
      ([] as any[]),(null as any),(null as any),(null as any),View_ReportsMentorReports2Component_0,
      RenderType_ReportsMentorReports2Component)),i0.ɵdid(1,114688,(null as any),0,
      i5.ReportsMentorReports2Component,[i6.SqlReports,i7.Router,i8.SessionService],
      (null as any),(null as any))],(_ck,_v) => {
    _ck(_v,1,0);
  },(null as any));
}
export const ReportsMentorReports2ComponentNgFactory:i0.ComponentFactory<i5.ReportsMentorReports2Component> = i0.ɵccf('ng-component',
    i5.ReportsMentorReports2Component,View_ReportsMentorReports2Component_Host_0,{},
    {},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL2hvbWUvY2thcGlsbGEvRGV2L0pvdmVuZXNBLWNsaWVudC5DTEkvc3JjL2FwcC8rcmVwb3J0cy9yZXBvcnRzLW1lbnRvci1yZXBvcnRzMi9yZXBvcnRzLW1lbnRvci1yZXBvcnRzMi5jb21wb25lbnQubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vaG9tZS9ja2FwaWxsYS9EZXYvSm92ZW5lc0EtY2xpZW50LkNMSS9zcmMvYXBwLytyZXBvcnRzL3JlcG9ydHMtbWVudG9yLXJlcG9ydHMyL3JlcG9ydHMtbWVudG9yLXJlcG9ydHMyLmNvbXBvbmVudC50cyIsIm5nOi8vL2hvbWUvY2thcGlsbGEvRGV2L0pvdmVuZXNBLWNsaWVudC5DTEkvc3JjL2FwcC8rcmVwb3J0cy9yZXBvcnRzLW1lbnRvci1yZXBvcnRzMi9yZXBvcnRzLW1lbnRvci1yZXBvcnRzMi5jb21wb25lbnQuaHRtbCIsIm5nOi8vL2hvbWUvY2thcGlsbGEvRGV2L0pvdmVuZXNBLWNsaWVudC5DTEkvc3JjL2FwcC8rcmVwb3J0cy9yZXBvcnRzLW1lbnRvci1yZXBvcnRzMi9yZXBvcnRzLW1lbnRvci1yZXBvcnRzMi5jb21wb25lbnQudHMuUmVwb3J0c01lbnRvclJlcG9ydHMyQ29tcG9uZW50X0hvc3QuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIgIiwiPGRpdiBjbGFzcz1cInBhbmVsIHBhbmVsLXByaW1hcnlcIj5cbiAgPGRpdiBjbGFzcz1cInBhbmVsLWhlYWRpbmdcIiBzdHlsZT1cImZvbnQtc2l6ZTpsYXJnZVwiPiBMYXRlc3QgTWVudG9yIFJlcG9ydHMgLS0gRnVsbCBDb250ZW50XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwicGFuZWwtYm9keVwiPlxuICAgIDxzcGFuICpuZ0lmPVwiZXJyb3JNZXNzYWdlXCIgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIj57e2Vycm9yTWVzc2FnZX19PC9zcGFuPlxuICAgIDxzcGFuICpuZ0lmPVwic3VjY2Vzc01lc3NhZ2VcIiBjbGFzcz1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIj57e3N1Y2Nlc3NNZXNzYWdlfX08L3NwYW4+XG5cbiAgICA8ZGl2PlxuXG4gICAgICA8IS0tXG4gICAgICAgIDxsYWJlbCBmb3I9XCJTcG9uc29yU3VtbWFyeVN0YXR1c1NlbGVjdG9yXCI+U3BvbnNvclN1bW1hcnlTdGF0dXM6PC9sYWJlbD5cbiAgICAgICAgPHNlbGVjdCBuYW1lPVwiU3BvbnNvclN1bW1hcnlTdGF0dXNTZWxlY3RvclwiIFsobmdNb2RlbCldPVwic2VsZWN0ZWRTcG9uc29yU3VtbWFyeVN0YXR1c1wiIChjaGFuZ2UpPVwic2V0U2VsZWN0ZWRTcG9uc29yU3VtbWFyeVN0YXR1cygkZXZlbnQudGFyZ2V0LnZhbHVlKVwiPlxuICAgICAgICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IHN0YXR1cyBvZiBzcG9uc29yU3VtbWFyeVN0YXR1c2VzXCIgW3ZhbHVlXT1cInN0YXR1cy52YWx1ZVwiPnt7c3RhdHVzLmxhYmVsfX08L29wdGlvbj5cbiAgICAgICAgPC9zZWxlY3Q+LS0+XG5cbiAgICAgIDwhLS08YnV0dG9uIGNsYXNzPVwiYnRuIGRlZmF1bHQtYnRuXCIgKGNsaWNrKT1cImZldGNoRmlsdGVyZWREYXRhKClcIj5TdWJtaXQ8L2J1dHRvbj4tLT5cblxuXG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IFtuZ1N3aXRjaF09XCJpc0xvYWRpbmdcIj5cbiAgICAgIDxkaXYgKm5nU3dpdGNoQ2FzZT1cInRydWVcIiBjbGFzcz1cInRleHQtY2VudGVyIGNvbC1tZC00IGNvbC1tZC1vZmZzZXQtNFwiPlxuICAgICAgICA8bG9hZGluZy1jb250YWluZXI+XG4gICAgICAgIDwvbG9hZGluZy1jb250YWluZXI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgKm5nU3dpdGNoQ2FzZT1cImZhbHNlXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIiBzdHlsZT1cImJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjY2NjOyBtYXJnaW4tdG9wOiAycHg7XCIgKm5nRm9yPVwibGV0IGxtciBvZiBsYXRlc3RNZW50b3JSZXBvcnRzMiwgbGV0IGkgPSBpbmRleFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTJcIj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInBhZGRlZCBsaW5rXCI+XG4gICAgICAgICAgICAgICZuYnNwO1N0dWRlbnQ6XG4gICAgICAgICAgICAgIHt7IGxtci5zdHVkZW50TmFtZSB9fVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwYWRkZWRcIj5cbiAgICAgICAgICAgICAgW01lbnRvcjpcbiAgICAgICAgICAgICAge3sgbG1yLm1lbnRvck5hbWUgfX0gXVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwYWRkZWRcIj5cbiAgICAgICAgICAgICAgW1Nwb25zb3I6XG4gICAgICAgICAgICAgIHt7IGxtci5zcG9uc29yTGFzdE5hbWUgfX0sIHt7IGxtci5zcG9uc29yRmlyc3ROYW1lfX0gXVxuICAgICAgICAgIDwvc3Bhbj5cblxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwYWRkZWRcIj5cbiAgICAgICAgICAgICZuYnNwO1JlcG9ydCBEYXRlOlxuICAgICAgICAgICAge3sgbG1yLnJlcG9ydERhdGUgfX1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicGFkZGVkXCI+XG4gICAgICAgICAgICAmbmJzcDtMYXN0IENvbnRhY3QgTW9udGg6XG5cbiAgICAgICAgICAge3sgbG1yLmxhdGVzdE1vbnRoIH19XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInBhZGRlZFwiPlxuICAgICAgICAgICAgJm5ic3A7U3R1ZGVudCBTbmFwc2hvdDpcbiAgICAgICAgICAgIDxpbWcgc3JjPVwie3tzbWlsZXlzW2xtci5tZW50b3JSZXBvcnRTbmFwc2hvdCsxXX19XCIgd2lkdGg9XCIyNHB4XCIgLz5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhZGRlZFwiPlxuICAgICAgICAgICAgICAgICZuYnNwO0ZvbGxvdy11cCBOZWVkZWQ6XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEwXCI+XG4gICAgICAgICAgICAgICAge3sgbG1yLmZvbGxvd1VwTmVlZGVkIH19XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQyIHBhZGRlZFwiPlxuICAgICAgICAgICAgICAgICZuYnNwO1Bvc2l0aXZlIEV2ZW50czpcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTBcIj5cbiAgICAgICAgICAgICAgICB7eyBsbXIucmVjZW50U3VjY2VzcyB9fVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFkZGVkXCI+XG4gICAgICAgICAgICAgICAgJm5ic3A7Q2hhbGxlbmdlczpcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTBcIj5cbiAgICAgICAgICAgICAgICB7eyBsbXIucmVjZW50U2V0YmFjayB9fVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFkZGVkXCI+XG4gICAgICAgICAgICAgICAgJm5ic3A7U3BvbnNvciBTdW1tYXJ5OiAmbmJzcDsmbmJzcDsmbmJzcDtbU3RhdHVzOiB7eyBsbXIuc3BvbnNvclN1bW1hcnlTdGF0dXMgfX1dIFt7eyBsbXIubWVudG9yUHJlZmVycmVkTGFuZ3VhZ2VJZCB8IGFscGhhTGFuZ3VhZ2VcbiAgICAgICAgICAgICAgICB9fSAtLSZndDsge3sgbG1yLnNwb25zb3JQcmVmZXJyZWRMYW5ndWFnZUlkIHwgYWxwaGFMYW5ndWFnZSB9fSB7eyB0cmFuc2xhdGlvbk5lZWRlZChsbXIubWVudG9yUHJlZmVycmVkTGFuZ3VhZ2VJZCxsbXIuc3BvbnNvclByZWZlcnJlZExhbmd1YWdlSWQpXG4gICAgICAgICAgICAgICAgfX1dXG5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTBcIj5cbiAgICAgICAgICAgICAgICB7eyBsbXIuc3BvbnNvclN1bW1hcnkgfX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cblxuXG5sIiwiPG5nLWNvbXBvbmVudD48L25nLWNvbXBvbmVudD4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JDSUk7TUFBQTtNQUFBLGdCQUFzRDs7O0lBQUE7SUFBQTs7OztvQkFDdEQ7TUFBQTtNQUFBLGdCQUF5RDs7O0lBQUE7SUFBQTs7OztvQkFnQnZEO01BQUE7TUFBQSw4QkFBdUU7TUFDckU7VUFBQTtpREFBQSxVQUFBO1VBQUE7TUFBbUIsa0RBQ0M7VUFBQTs7O29CQUdwQjtNQUFBO01BQUEsMERBQWlJO01BQUEsaUNBQy9IO01BQUE7TUFBQSxnQkFBdUIsd0RBRXJCO2FBQUE7VUFBQSwwREFBaUI7TUFBQSxxQ0FDZjtNQUFBO01BQUEsOEJBQTBCO01BQUEsa0JBR3ZCLHdEQUNIO2FBQUE7VUFBQSwwREFBcUI7TUFBQTtNQUdsQix3REFDSDtVQUFBO1VBQUEsMERBQXFCO1VBQUE7TUFHbEIsd0RBRUM7VUFBQSx1QkFFTjtVQUFBO1VBQUEsZ0JBQWlCO01BQ2Y7VUFBQTtNQUFxQjtVQUFBLGtCQUdsQjtNQUNIO1VBQUE7TUFBcUI7VUFBQSxrQkFJbEI7TUFDSDtVQUFBO01BQXFCO01BRXZCO1VBQUE7TUFBa0Usb0RBQzdEO1VBQUEscUJBQ0M7TUFDTjtVQUFBLDBEQUFpQjtVQUFBLHFDQUNmO1VBQUE7VUFBQSw4QkFBb0I7TUFFZCx3REFDTjtVQUFBO1VBQUEsMERBQXVCO1VBQUEsMERBRWpCO1VBQUEsbUNBQ0Y7TUFDTjtVQUFBLDBEQUFpQjtVQUFBLHFDQUNmO1VBQUE7VUFBQSw0Q0FBNEI7VUFBQSwwREFFdEI7VUFBQSxxQ0FDTjtVQUFBO1VBQUEsNENBQXVCO1VBQUEsNENBRWpCO1VBQUEscUJBQ0Y7TUFDTjtVQUFBLDBEQUFpQjtVQUFBLHFDQUNmO1VBQUE7VUFBQSw4QkFBb0I7TUFFZCx3REFDTjtVQUFBO1VBQUEsMERBQXVCO1VBQUEsMERBRWpCO1VBQUEsbUNBQ0Y7TUFDTjtVQUFBLDBEQUFpQjtVQUFBLHFDQUNmO1VBQUE7VUFBQSw4QkFBb0I7VUFBQSx1RUFLZDtpQkFBQSx5Q0FDTjtVQUFBO1VBQUEsNENBQXVCO1VBQUEsNENBRWpCO1VBQUEscUJBQ0Y7TUFDRjs7SUFqRXdCO0lBQUE7SUFJTDtJQUFBO0lBSUE7SUFBQTtJQUFBO0lBUUE7SUFBQTtJQUlBO0lBQUE7SUFPbEI7UUFBQTtJQUFMLFlBQUssU0FBTDtJQU95QjtJQUFBO0lBUUE7SUFBQTtJQVFBO0lBQUE7SUFLSDtJQUFBO1FBQUE7SUFBQTtRQUFBO0lBQUE7UUFBQTtJQUFBO0lBTUc7SUFBQTs7OztvQkFsRS9CO01BQUEsd0VBQTJCO2FBQUEsbUNBQ3pCO01BQUEsNkVBQUE7TUFBQTtNQUFBLHVDQXNFTTs7O1FBdEVtRTtRQUF6RSxXQUF5RSxTQUF6RTs7OztrRUExQlI7TUFBQTtNQUFBLDBEQUFpQztNQUFBLHlCQUMvQjtNQUFBO01BQUEsNENBQW1EO01BQUEsaURBQzdDO01BQUEsV0FDTjtNQUFBO01BQXdCLDhDQUN0QjtVQUFBLDZFQUFBO1VBQUE7Y0FBQSx3QkFBNkU7TUFDN0U7YUFBQTtVQUFBLGlDQUFrRjtNQUVsRjtVQUFBLDBEQUFLO1VBQUEsK0JBTVc7TUFFc0Usa0RBR2hGO1VBQUEsZUFFTjtVQUFBO2FBQUE7VUFBQSxlQUE0QixnREFDMUI7VUFBQTthQUFBO3FCQUFBLG1EQUdNO1VBQUEsNkJBQ047VUFBQSwrREFBQTtVQUFBO1VBQUEsaURBd0VNO1VBQUEsYUFDRiw0Q0FDRjtVQUFBLHVCQUNGOzs7SUFoR0k7SUFBTixXQUFNLFNBQU47SUFDTTtJQUFOLFlBQU0sU0FBTjtJQWVLO0lBQUwsWUFBSyxTQUFMO0lBQ087SUFBTCxZQUFLLFNBQUw7SUFJSztJQUFMLFlBQUssU0FBTDs7OztvQkN6Qk47TUFBQTsrQ0FBQSxVQUFBO3dDQUFBO01BQUE7SUFBQTs7Ozs7In0=
