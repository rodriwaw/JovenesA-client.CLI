/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from './admins-communications.component.css.shim.ngstyle';
import * as i1 from '@angular/core';
import * as i2 from '../../app_shared/components/loading-container.component.ngfactory';
import * as i3 from '../../../../../src/app/app_shared/components/loading-container.component';
import * as i4 from '@angular/common';
import * as i5 from '../../../../../src/app/+admins/admins-communications/admins-communications.component';
import * as i6 from '@angular/forms';
import * as i7 from '@angular/router';
import * as i8 from '../../../../../src/app/app_shared/services/sql-resource';
import * as i9 from '../../../../../src/app/app_shared/services/session.service';
const styles_AdminsCommunicationsComponent:any[] = [i0.styles];
export const RenderType_AdminsCommunicationsComponent:i1.RendererType2 = i1.ɵcrt({encapsulation:0,
    styles:styles_AdminsCommunicationsComponent,data:{}});
function View_AdminsCommunicationsComponent_1(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),1,'span',[['class',
      'alert alert-danger']],(null as any),(null as any),(null as any),(null as any),
      (null as any))),(_l()(),i1.ɵted(1,(null as any),['','']))],(null as any),(_ck,
      _v) => {
    var _co:any = _v.component;
    const currVal_0:any = _co.errorMessage;
    _ck(_v,1,0,currVal_0);
  });
}
function View_AdminsCommunicationsComponent_2(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),1,'span',[['class',
      'alert alert-success']],(null as any),(null as any),(null as any),(null as any),
      (null as any))),(_l()(),i1.ɵted(1,(null as any),['','']))],(null as any),(_ck,
      _v) => {
    var _co:any = _v.component;
    const currVal_0:any = _co.successMessage;
    _ck(_v,1,0,currVal_0);
  });
}
function View_AdminsCommunicationsComponent_3(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),5,'div',[['class',
      'text-center col-md-4 col-md-offset-4']],(null as any),(null as any),(null as any),
      (null as any),(null as any))),(_l()(),i1.ɵted(-1,(null as any),['\n        '])),
      (_l()(),i1.ɵeld(2,0,(null as any),(null as any),2,'loading-container',([] as any[]),
          (null as any),(null as any),(null as any),i2.View_LoadingContainerComponent_0,
          i2.RenderType_LoadingContainerComponent)),i1.ɵdid(3,49152,(null as any),
          0,i3.LoadingContainerComponent,([] as any[]),(null as any),(null as any)),
      (_l()(),i1.ɵted(-1,(null as any),['\n        '])),(_l()(),i1.ɵted(-1,(null as any),
          ['\n      ']))],(null as any),(null as any));
}
function View_AdminsCommunicationsComponent_5(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),22,'tr',([] as any[]),
      (null as any),(null as any),(null as any),(null as any),(null as any))),(_l()(),
      i1.ɵted(-1,(null as any),['\n              '])),(_l()(),i1.ɵeld(2,0,(null as any),
      (null as any),1,'td',([] as any[]),(null as any),(null as any),(null as any),
      (null as any),(null as any))),(_l()(),i1.ɵted(3,(null as any),['\n                ',
      '\n              '])),(_l()(),i1.ɵted(-1,(null as any),['\n              '])),
      (_l()(),i1.ɵeld(5,0,(null as any),(null as any),1,'td',([] as any[]),(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i1.ɵted(6,
          (null as any),['\n                ','\n              '])),(_l()(),i1.ɵted(-1,
          (null as any),['\n              '])),(_l()(),i1.ɵeld(8,0,(null as any),(null as any),
          1,'td',([] as any[]),(null as any),(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i1.ɵted(9,(null as any),['\n                ','\n              '])),
      (_l()(),i1.ɵted(-1,(null as any),['\n              '])),(_l()(),i1.ɵeld(11,0,
          (null as any),(null as any),1,'td',([] as any[]),(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i1.ɵted(12,(null as any),
          ['\n                ','\n              '])),(_l()(),i1.ɵted(-1,(null as any),
          ['\n              '])),(_l()(),i1.ɵeld(14,0,(null as any),(null as any),
          1,'td',([] as any[]),(null as any),(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i1.ɵted(15,(null as any),['\n                ','\n              '])),
      (_l()(),i1.ɵted(-1,(null as any),['\n              '])),(_l()(),i1.ɵeld(17,0,
          (null as any),(null as any),1,'td',([] as any[]),(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i1.ɵted(18,(null as any),
          ['\n                ','\n              '])),(_l()(),i1.ɵted(-1,(null as any),
          ['\n              '])),(_l()(),i1.ɵeld(20,0,(null as any),(null as any),
          1,'td',([] as any[]),(null as any),(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i1.ɵted(21,(null as any),['\n                ','\n              '])),
      (_l()(),i1.ɵted(-1,(null as any),['\n            ']))],(null as any),(_ck,_v) => {
    const currVal_0:any = (_v.context.index + 1);
    _ck(_v,3,0,currVal_0);
    const currVal_1:any = _v.context.$implicit.communicationDateTime;
    _ck(_v,6,0,currVal_1);
    const currVal_2:any = _v.context.$implicit.memberId;
    _ck(_v,9,0,currVal_2);
    const currVal_3:any = _v.context.$implicit.methodId;
    _ck(_v,12,0,currVal_3);
    const currVal_4:any = _v.context.$implicit.categoryId;
    _ck(_v,15,0,currVal_4);
    const currVal_5:any = _v.context.$implicit.relatedStudentId;
    _ck(_v,18,0,currVal_5);
    const currVal_6:any = _v.context.$implicit.comments;
    _ck(_v,21,0,currVal_6);
  });
}
function View_AdminsCommunicationsComponent_4(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),40,'div',([] as any[]),
      (null as any),(null as any),(null as any),(null as any),(null as any))),(_l()(),
      i1.ɵted(-1,(null as any),['\n        '])),(_l()(),i1.ɵeld(2,0,(null as any),
      (null as any),37,'table',[['class','table']],(null as any),(null as any),(null as any),
      (null as any),(null as any))),(_l()(),i1.ɵted(-1,(null as any),['\n\n          '])),
      (_l()(),i1.ɵeld(4,0,(null as any),(null as any),28,'thead',([] as any[]),(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i1.ɵted(-1,
          (null as any),['\n            '])),(_l()(),i1.ɵeld(6,0,(null as any),(null as any),
          25,'tr',([] as any[]),(null as any),(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i1.ɵted(-1,(null as any),['\n              '])),
      (_l()(),i1.ɵted(-1,(null as any),['\n              '])),(_l()(),i1.ɵeld(9,0,
          (null as any),(null as any),0,'td',([] as any[]),(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i1.ɵted(-1,(null as any),
          ['\n              '])),(_l()(),i1.ɵeld(11,0,(null as any),(null as any),
          1,'td',([] as any[]),(null as any),(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i1.ɵted(-1,(null as any),['Date/Time'])),(_l()(),
          i1.ɵted(-1,(null as any),['\n              '])),(_l()(),i1.ɵeld(14,0,(null as any),
          (null as any),1,'td',([] as any[]),(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i1.ɵted(-1,(null as any),['Member'])),
      (_l()(),i1.ɵted(-1,(null as any),['\n              '])),(_l()(),i1.ɵeld(17,0,
          (null as any),(null as any),1,'td',([] as any[]),(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i1.ɵted(-1,(null as any),
          ['Method'])),(_l()(),i1.ɵted(-1,(null as any),['\n              '])),(_l()(),
          i1.ɵeld(20,0,(null as any),(null as any),1,'td',([] as any[]),(null as any),
              (null as any),(null as any),(null as any),(null as any))),(_l()(),i1.ɵted(-1,
          (null as any),['Category'])),(_l()(),i1.ɵted(-1,(null as any),['\n              '])),
      (_l()(),i1.ɵeld(23,0,(null as any),(null as any),1,'td',([] as any[]),(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i1.ɵted(-1,
          (null as any),['Related Student'])),(_l()(),i1.ɵted(-1,(null as any),['\n              '])),
      (_l()(),i1.ɵeld(26,0,(null as any),(null as any),1,'td',([] as any[]),(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i1.ɵted(-1,
          (null as any),['Comments'])),(_l()(),i1.ɵted(-1,(null as any),['\n              '])),
      (_l()(),i1.ɵeld(29,0,(null as any),(null as any),1,'td',([] as any[]),(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i1.ɵted(-1,
          (null as any),['Communication History'])),(_l()(),i1.ɵted(-1,(null as any),
          ['\n            '])),(_l()(),i1.ɵted(-1,(null as any),['\n          '])),
      (_l()(),i1.ɵted(-1,(null as any),['\n          '])),(_l()(),i1.ɵeld(34,0,(null as any),
          (null as any),4,'tbody',([] as any[]),(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i1.ɵted(-1,(null as any),['\n            '])),
      (_l()(),i1.ɵand(16777216,(null as any),(null as any),1,(null as any),View_AdminsCommunicationsComponent_5)),
      i1.ɵdid(37,802816,(null as any),0,i4.NgForOf,[i1.ViewContainerRef,i1.TemplateRef,
          i1.IterableDiffers],{ngForOf:[0,'ngForOf']},(null as any)),(_l()(),i1.ɵted(-1,
          (null as any),['\n          '])),(_l()(),i1.ɵted(-1,(null as any),['\n        '])),
      (_l()(),i1.ɵted(-1,(null as any),['\n      ']))],(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_0:any = _co.communications;
    _ck(_v,37,0,currVal_0);
  },(null as any));
}
export function View_AdminsCommunicationsComponent_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),51,'div',[['class',
      'panel panel-primary']],(null as any),(null as any),(null as any),(null as any),
      (null as any))),(_l()(),i1.ɵted(-1,(null as any),['\n  '])),(_l()(),i1.ɵeld(2,
      0,(null as any),(null as any),16,'div',[['class','panel-heading'],['style','font-size:large']],
      (null as any),(null as any),(null as any),(null as any),(null as any))),(_l()(),
      i1.ɵted(-1,(null as any),['\n    '])),(_l()(),i1.ɵeld(4,0,(null as any),(null as any),
      1,'span',([] as any[]),(null as any),(null as any),(null as any),(null as any),
      (null as any))),(_l()(),i1.ɵted(-1,(null as any),['Communications for'])),(_l()(),
      i1.ɵted(-1,(null as any),['\n    '])),(_l()(),i1.ɵeld(7,0,(null as any),(null as any),
      1,'span',([] as any[]),(null as any),(null as any),(null as any),(null as any),
      (null as any))),(_l()(),i1.ɵted(8,(null as any),['',''])),(_l()(),i1.ɵted(-1,
      (null as any),['\n    '])),(_l()(),i1.ɵeld(10,0,(null as any),(null as any),
      7,'span',([] as any[]),(null as any),(null as any),(null as any),(null as any),
      (null as any))),(_l()(),i1.ɵted(-1,(null as any),['\n      '])),(_l()(),i1.ɵeld(12,
      0,(null as any),(null as any),4,'span',([] as any[]),(null as any),(null as any),
      (null as any),(null as any),(null as any))),(_l()(),i1.ɵted(-1,(null as any),
      ['\n        '])),(_l()(),i1.ɵeld(14,0,(null as any),(null as any),1,'span',[['class',
      'btn btn-default active'],['style','margin-left:10px']],(null as any),[[(null as any),
      'click']],(_v,en,$event) => {
    var ad:boolean = true;
    var _co:i5.AdminsCommunicationsComponent = _v.component;
    if (('click' === en)) {
      const pd_0:any = ((<any>_co.communicationAdd(1216)) !== false);
      ad = (pd_0 && ad);
    }
    return ad;
  },(null as any),(null as any))),(_l()(),i1.ɵted(-1,(null as any),['\n            Add New Communication\n      '])),
      (_l()(),i1.ɵted(-1,(null as any),['\n      '])),(_l()(),i1.ɵted(-1,(null as any),
          ['\n    '])),(_l()(),i1.ɵted(-1,(null as any),['\n  '])),(_l()(),i1.ɵted(-1,
          (null as any),['\n  '])),(_l()(),i1.ɵeld(20,0,(null as any),(null as any),
          31,'div',[['class','panel-body']],(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i1.ɵted(-1,(null as any),['\n  '])),
      (_l()(),i1.ɵeld(22,0,(null as any),(null as any),28,'div',[['class','panel-body']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted(-1,(null as any),['\n    '])),(_l()(),i1.ɵand(16777216,(null as any),
          (null as any),1,(null as any),View_AdminsCommunicationsComponent_1)),i1.ɵdid(25,
          16384,(null as any),0,i4.NgIf,[i1.ViewContainerRef,i1.TemplateRef],{ngIf:[0,
              'ngIf']},(null as any)),(_l()(),i1.ɵted(-1,(null as any),['\n    '])),
      (_l()(),i1.ɵand(16777216,(null as any),(null as any),1,(null as any),View_AdminsCommunicationsComponent_2)),
      i1.ɵdid(28,16384,(null as any),0,i4.NgIf,[i1.ViewContainerRef,i1.TemplateRef],
          {ngIf:[0,'ngIf']},(null as any)),(_l()(),i1.ɵted(-1,(null as any),['\n\n    '])),
      (_l()(),i1.ɵeld(30,0,(null as any),(null as any),9,'div',([] as any[]),(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i1.ɵted(-1,
          (null as any),['\n      '])),(_l()(),i1.ɵeld(32,0,(null as any),(null as any),
          6,'form',[['novalidate','']],[[2,'ng-untouched',(null as any)],[2,'ng-touched',
              (null as any)],[2,'ng-pristine',(null as any)],[2,'ng-dirty',(null as any)],
              [2,'ng-valid',(null as any)],[2,'ng-invalid',(null as any)],[2,'ng-pending',
                  (null as any)]],[[(null as any),'submit'],[(null as any),'reset']],
          (_v,en,$event) => {
            var ad:boolean = true;
            if (('submit' === en)) {
              const pd_0:any = ((<any>i1.ɵnov(_v,34).onSubmit($event)) !== false);
              ad = (pd_0 && ad);
            }
            if (('reset' === en)) {
              const pd_1:any = ((<any>i1.ɵnov(_v,34).onReset()) !== false);
              ad = (pd_1 && ad);
            }
            return ad;
          },(null as any),(null as any))),i1.ɵdid(33,16384,(null as any),0,i6.ɵbf,
          ([] as any[]),(null as any),(null as any)),i1.ɵdid(34,16384,(null as any),
          0,i6.NgForm,[[8,(null as any)],[8,(null as any)]],(null as any),(null as any)),
      i1.ɵprd(2048,(null as any),i6.ControlContainer,(null as any),[i6.NgForm]),i1.ɵdid(36,
          16384,(null as any),0,i6.NgControlStatusGroup,[i6.ControlContainer],(null as any),
          (null as any)),(_l()(),i1.ɵted(-1,(null as any),['\n        '])),(_l()(),
          i1.ɵted(-1,(null as any),['\n      '])),(_l()(),i1.ɵted(-1,(null as any),
          ['\n\n    '])),(_l()(),i1.ɵted(-1,(null as any),['\n    '])),(_l()(),i1.ɵeld(41,
          0,(null as any),(null as any),8,'div',([] as any[]),(null as any),(null as any),
          (null as any),(null as any),(null as any))),i1.ɵdid(42,16384,(null as any),
          0,i4.NgSwitch,([] as any[]),{ngSwitch:[0,'ngSwitch']},(null as any)),(_l()(),
          i1.ɵted(-1,(null as any),['\n      '])),(_l()(),i1.ɵand(16777216,(null as any),
          (null as any),1,(null as any),View_AdminsCommunicationsComponent_3)),i1.ɵdid(45,
          278528,(null as any),0,i4.NgSwitchCase,[i1.ViewContainerRef,i1.TemplateRef,
              i4.NgSwitch],{ngSwitchCase:[0,'ngSwitchCase']},(null as any)),(_l()(),
          i1.ɵted(-1,(null as any),['\n      '])),(_l()(),i1.ɵand(16777216,(null as any),
          (null as any),1,(null as any),View_AdminsCommunicationsComponent_4)),i1.ɵdid(48,
          278528,(null as any),0,i4.NgSwitchCase,[i1.ViewContainerRef,i1.TemplateRef,
              i4.NgSwitch],{ngSwitchCase:[0,'ngSwitchCase']},(null as any)),(_l()(),
          i1.ɵted(-1,(null as any),['\n    '])),(_l()(),i1.ɵted(-1,(null as any),['\n  '])),
      (_l()(),i1.ɵted(-1,(null as any),['\n\n\n  l\n']))],(_ck,_v) => {
    var _co:i5.AdminsCommunicationsComponent = _v.component;
    const currVal_1:any = _co.errorMessage;
    _ck(_v,25,0,currVal_1);
    const currVal_2:any = _co.successMessage;
    _ck(_v,28,0,currVal_2);
    const currVal_10:any = _co.isLoading;
    _ck(_v,42,0,currVal_10);
    const currVal_11:any = true;
    _ck(_v,45,0,currVal_11);
    const currVal_12:any = false;
    _ck(_v,48,0,currVal_12);
  },(_ck,_v) => {
    var _co:i5.AdminsCommunicationsComponent = _v.component;
    const currVal_0:any = _co.memberId;
    _ck(_v,8,0,currVal_0);
    const currVal_3:any = i1.ɵnov(_v,36).ngClassUntouched;
    const currVal_4:any = i1.ɵnov(_v,36).ngClassTouched;
    const currVal_5:any = i1.ɵnov(_v,36).ngClassPristine;
    const currVal_6:any = i1.ɵnov(_v,36).ngClassDirty;
    const currVal_7:any = i1.ɵnov(_v,36).ngClassValid;
    const currVal_8:any = i1.ɵnov(_v,36).ngClassInvalid;
    const currVal_9:any = i1.ɵnov(_v,36).ngClassPending;
    _ck(_v,32,0,currVal_3,currVal_4,currVal_5,currVal_6,currVal_7,currVal_8,currVal_9);
  });
}
export function View_AdminsCommunicationsComponent_Host_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),1,'ng-component',
      ([] as any[]),(null as any),(null as any),(null as any),View_AdminsCommunicationsComponent_0,
      RenderType_AdminsCommunicationsComponent)),i1.ɵdid(1,114688,(null as any),0,
      i5.AdminsCommunicationsComponent,[i7.ActivatedRoute,i8.SqlResource,i7.Router,
          i9.SessionService],(null as any),(null as any))],(_ck,_v) => {
    _ck(_v,1,0);
  },(null as any));
}
export const AdminsCommunicationsComponentNgFactory:i1.ComponentFactory<i5.AdminsCommunicationsComponent> = i1.ɵccf('ng-component',
    i5.AdminsCommunicationsComponent,View_AdminsCommunicationsComponent_Host_0,{},
    {},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL2hvbWUvY2thcGlsbGEvRGV2L0pvdmVuZXNBLWNsaWVudC5DTEkvc3JjL2FwcC8rYWRtaW5zL2FkbWlucy1jb21tdW5pY2F0aW9ucy9hZG1pbnMtY29tbXVuaWNhdGlvbnMuY29tcG9uZW50Lm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL2hvbWUvY2thcGlsbGEvRGV2L0pvdmVuZXNBLWNsaWVudC5DTEkvc3JjL2FwcC8rYWRtaW5zL2FkbWlucy1jb21tdW5pY2F0aW9ucy9hZG1pbnMtY29tbXVuaWNhdGlvbnMuY29tcG9uZW50LnRzIiwibmc6Ly8vaG9tZS9ja2FwaWxsYS9EZXYvSm92ZW5lc0EtY2xpZW50LkNMSS9zcmMvYXBwLythZG1pbnMvYWRtaW5zLWNvbW11bmljYXRpb25zL2FkbWlucy1jb21tdW5pY2F0aW9ucy5jb21wb25lbnQuaHRtbCIsIm5nOi8vL2hvbWUvY2thcGlsbGEvRGV2L0pvdmVuZXNBLWNsaWVudC5DTEkvc3JjL2FwcC8rYWRtaW5zL2FkbWlucy1jb21tdW5pY2F0aW9ucy9hZG1pbnMtY29tbXVuaWNhdGlvbnMuY29tcG9uZW50LnRzLkFkbWluc0NvbW11bmljYXRpb25zQ29tcG9uZW50X0hvc3QuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIgIiwiPGRpdiBjbGFzcz1cInBhbmVsIHBhbmVsLXByaW1hcnlcIj5cbiAgPGRpdiBjbGFzcz1cInBhbmVsLWhlYWRpbmdcIiBzdHlsZT1cImZvbnQtc2l6ZTpsYXJnZVwiPlxuICAgIDxzcGFuPkNvbW11bmljYXRpb25zIGZvcjwvc3Bhbj5cbiAgICA8c3Bhbj57e21lbWJlcklkfX08L3NwYW4+XG4gICAgPHNwYW4+XG4gICAgICA8c3BhbiA+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGFjdGl2ZVwiIChjbGljayk9XCJjb21tdW5pY2F0aW9uQWRkKDEyMTYpXCIgc3R5bGU9XCJtYXJnaW4tbGVmdDoxMHB4XCI+XG4gICAgICAgICAgICBBZGQgTmV3IENvbW11bmljYXRpb25cbiAgICAgIDwvc3Bhbj5cbiAgICAgIDwvc3Bhbj5cbiAgICA8L3NwYW4+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwicGFuZWwtYm9keVwiPlxuICA8ZGl2IGNsYXNzPVwicGFuZWwtYm9keVwiPlxuICAgIDxzcGFuICpuZ0lmPVwiZXJyb3JNZXNzYWdlXCIgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIj57e2Vycm9yTWVzc2FnZX19PC9zcGFuPlxuICAgIDxzcGFuICpuZ0lmPVwic3VjY2Vzc01lc3NhZ2VcIiBjbGFzcz1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIj57e3N1Y2Nlc3NNZXNzYWdlfX08L3NwYW4+XG5cbiAgICA8ZGl2PlxuICAgICAgPGZvcm0+XG4gICAgICAgIDwhLS08YnV0dG9uIGNsYXNzPVwiYnRuIGRlZmF1bHQtYnRuXCIgKGNsaWNrKT1cImZldGNoRmlsdGVyZWREYXRhKClcIj5TdWJtaXQ8L2J1dHRvbj4tLT5cbiAgICAgIDwvZm9ybT5cblxuICAgIDwvZGl2PlxuICAgIDxkaXYgW25nU3dpdGNoXT1cImlzTG9hZGluZ1wiPlxuICAgICAgPGRpdiAqbmdTd2l0Y2hDYXNlPVwidHJ1ZVwiIGNsYXNzPVwidGV4dC1jZW50ZXIgY29sLW1kLTQgY29sLW1kLW9mZnNldC00XCI+XG4gICAgICAgIDxsb2FkaW5nLWNvbnRhaW5lcj5cbiAgICAgICAgPC9sb2FkaW5nLWNvbnRhaW5lcj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiAqbmdTd2l0Y2hDYXNlPVwiZmFsc2VcIj5cbiAgICAgICAgPHRhYmxlIGNsYXNzPVwidGFibGVcIj5cblxuICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPCEtLTx0ZD5JZDwvdGQ+LS0+XG4gICAgICAgICAgICAgIDx0ZD48L3RkPlxuICAgICAgICAgICAgICA8dGQ+RGF0ZS9UaW1lPC90ZD5cbiAgICAgICAgICAgICAgPHRkPk1lbWJlcjwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD5NZXRob2Q8L3RkPlxuICAgICAgICAgICAgICA8dGQ+Q2F0ZWdvcnk8L3RkPlxuICAgICAgICAgICAgICA8dGQ+UmVsYXRlZCBTdHVkZW50PC90ZD5cbiAgICAgICAgICAgICAgPHRkPkNvbW1lbnRzPC90ZD5cbiAgICAgICAgICAgICAgPHRkPkNvbW11bmljYXRpb24gSGlzdG9yeTwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgPHRyICpuZ0Zvcj1cImxldCBjb21tdW5pY2F0aW9uIG9mIGNvbW11bmljYXRpb25zLCBsZXQgaSA9IGluZGV4XCI+XG4gICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICB7eyBpKzEgfX1cbiAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgIHt7IGNvbW11bmljYXRpb24uY29tbXVuaWNhdGlvbkRhdGVUaW1lIH19XG4gICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICB7eyBjb21tdW5pY2F0aW9uLm1lbWJlcklkIH19XG4gICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICB7eyBjb21tdW5pY2F0aW9uLm1ldGhvZElkIH19XG4gICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICB7eyBjb21tdW5pY2F0aW9uLmNhdGVnb3J5SWQgfX1cbiAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgIHt7IGNvbW11bmljYXRpb24ucmVsYXRlZFN0dWRlbnRJZCB9fVxuICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAge3sgY29tbXVuaWNhdGlvbi5jb21tZW50cyB9fVxuICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuXG5cbiAgbFxuIiwiPG5nLWNvbXBvbmVudD48L25nLWNvbXBvbmVudD4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQ2NJO01BQUE7TUFBQSxnQkFBc0Q7OztJQUFBO0lBQUE7Ozs7b0JBQ3REO01BQUE7TUFBQSxnQkFBeUQ7OztJQUFBO0lBQUE7Ozs7b0JBU3ZEO01BQUE7TUFBQSw4QkFBdUU7TUFDckU7VUFBQTtpREFBQSxVQUFBO1VBQUE7TUFBbUIsa0RBQ0M7VUFBQTs7O29CQW1CaEI7TUFBQSx3RUFBZ0U7YUFBQSx5Q0FDOUQ7TUFBQTtNQUFBLDhCQUFJO01BQUEsc0JBRUM7TUFDTDtVQUFBLDBEQUFJO1VBQUEsMERBRUM7VUFBQSxxQ0FDTDtVQUFBO1VBQUEsZ0JBQUk7TUFFQyx3REFDTDtVQUFBO1VBQUEsNENBQUk7VUFBQSw0Q0FFQztVQUFBLHVCQUNMO1VBQUE7VUFBQSxnQkFBSTtNQUVDLHdEQUNMO1VBQUE7VUFBQSw0Q0FBSTtVQUFBLDRDQUVDO1VBQUEsdUJBQ0w7VUFBQTtVQUFBLGdCQUFJO01BRUM7SUFwQkQ7SUFBQTtJQUdBO0lBQUE7SUFHQTtJQUFBO0lBR0E7SUFBQTtJQUdBO0lBQUE7SUFHQTtJQUFBO0lBR0E7SUFBQTs7OztvQkFwQ1o7TUFBQSx3RUFBMkI7YUFBQSxtQ0FDekI7TUFBQTtNQUFBLDhCQUFxQjtNQUVuQjtVQUFBLDBEQUFPO1VBQUEsbUNBQ0w7VUFBQTtVQUFBLGdCQUFJO01BQ2dCLHdEQUNsQjtVQUFBO1VBQUEsNENBQVM7VUFBQSx1QkFDVDtVQUFBO1VBQUEsZ0JBQUksaURBQWM7aUJBQUEseUNBQ2xCO1VBQUE7VUFBQSw4QkFBSTtNQUFXLHdEQUNmO1VBQUE7VUFBQSw0Q0FBSTtVQUFBLGFBQVcsd0RBQ2Y7aUJBQUE7Y0FBQSwwREFBSTtVQUFBLDZCQUFhO01BQ2pCO1VBQUEsMERBQUk7VUFBQSxvQ0FBb0I7TUFDeEI7VUFBQSwwREFBSTtVQUFBLDZCQUFhO01BQ2pCO1VBQUEsMERBQUk7VUFBQSwwQ0FBMEI7VUFBQSxxQkFDM0I7TUFDQyxvREFDUjtVQUFBO1VBQUEsOEJBQU87TUFDTDthQUFBOzRCQUFBLHlDQXNCSztVQUFBLGlDQUNDO01BQ0Y7O0lBeEJBO0lBQUosWUFBSSxTQUFKOzs7O29CQTdDWjtNQUFBO01BQUEsZ0JBQWlDLDRDQUMvQjtNQUFBO01BQUEsd0VBQW1EO2FBQUEsK0JBQ2pEO01BQUE7TUFBQSxnQkFBTSwwREFBeUI7YUFBQSwrQkFDL0I7TUFBQTtNQUFBLGdCQUFNLDBDQUFtQjtNQUFBLDJCQUN6QjtNQUFBO01BQUEsZ0JBQU0sZ0RBQ0o7TUFBQTtNQUFBLDRDQUFPO01BQUEsaUJBQ0w7TUFBQTtNQUFBO0lBQUE7SUFBQTtJQUFxQztNQUFBO01BQUE7SUFBQTtJQUFyQztFQUFBLGdDQUErRjtNQUUxRixnREFDQTtVQUFBLGFBQ0YsNENBQ0g7VUFBQSx5QkFDTjtVQUFBO1VBQUEsOEJBQXdCO01BQ3hCO1VBQUE7TUFBd0IsOENBQ3RCO1VBQUEsNEVBQUE7VUFBQTtjQUFBLHdCQUE2RTtNQUM3RTthQUFBO1VBQUEsaUNBQWtGO01BRWxGO1VBQUEsMERBQUs7VUFBQSw2QkFDSDtVQUFBO2NBQUE7Y0FBQTtrQkFBQTtVQUFBO1lBQUE7WUFBQTtjQUFBO2NBQUE7WUFBQTtZQUFBO2NBQUE7Y0FBQTtZQUFBO1lBQUE7VUFBQSx1Q0FBQTtVQUFBLGtEQUFBO1VBQUE7YUFBQSwwRUFBQTtVQUFBO1VBQUEsZUFBTSxrREFDZ0Y7aUJBQUEsaUNBQy9FO1VBQUEsZUFFSCw4Q0FDTjtVQUFBO1VBQUEsbURBQUE7VUFBQSxxRUFBNEI7aUJBQUEsaUNBQzFCO1VBQUEsNEVBQUE7VUFBQTt5QkFBQSxtREFHTTtpQkFBQSxpQ0FDTjtVQUFBLDRFQUFBO1VBQUE7eUJBQUEsbURBMENNO2lCQUFBLCtCQUNGO01BQ0Y7O0lBMURFO0lBQU4sWUFBTSxTQUFOO0lBQ007SUFBTixZQUFNLFNBQU47SUFRSztJQUFMLFlBQUssVUFBTDtJQUNPO0lBQUwsWUFBSyxVQUFMO0lBSUs7SUFBTCxZQUFLLFVBQUw7OztJQXpCSTtJQUFBO0lBZUo7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQSxZQUFBLHFFQUFBOzs7O29CQ2xCTjtNQUFBOzhDQUFBLFVBQUE7dUNBQUE7MkJBQUE7SUFBQTs7Ozs7In0=
