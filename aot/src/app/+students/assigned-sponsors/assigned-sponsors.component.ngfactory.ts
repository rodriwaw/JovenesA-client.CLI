/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from './assigned-sponsors.component.css.shim.ngstyle';
import * as i1 from '@angular/core';
import * as i2 from '@angular/common';
import * as i3 from '../../../../../src/app/+students/assigned-sponsors/assigned-sponsors.component';
import * as i4 from '../../../../../src/app/app_shared/services/session.service';
import * as i5 from '../../../../../src/app/app_shared/services/sql-resource';
const styles_AssignedSponsorsComponent:any[] = [i0.styles];
export const RenderType_AssignedSponsorsComponent:i1.RendererType2 = i1.ɵcrt({encapsulation:0,
    styles:styles_AssignedSponsorsComponent,data:{}});
function View_AssignedSponsorsComponent_1(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),1,'div',[['class',
      'alert alert-danger']],(null as any),(null as any),(null as any),(null as any),
      (null as any))),(_l()(),i1.ɵted(1,(null as any),['','']))],(null as any),(_ck,
      _v) => {
    var _co:any = _v.component;
    const currVal_0:any = _co.errorMessage;
    _ck(_v,1,0,currVal_0);
  });
}
function View_AssignedSponsorsComponent_3(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),5,'tr',[['id',
      'item.sponsorId']],(null as any),[[(null as any),'click']],(_v,en,$event) => {
    var ad:boolean = true;
    var _co:any = _v.component;
    if (('click' === en)) {
      const pd_0:any = ((<any>_co.selectSponsor(_v.context.$implicit.sponsorId,_v.context.index)) !== false);
      ad = (pd_0 && ad);
    }
    return ad;
  },(null as any),(null as any))),i1.ɵdid(1,278528,(null as any),0,i2.NgClass,[i1.IterableDiffers,
      i1.KeyValueDiffers,i1.ElementRef,i1.Renderer],{ngClass:[0,'ngClass']},(null as any)),
      (_l()(),i1.ɵted(-1,(null as any),['\n              '])),(_l()(),i1.ɵeld(3,0,
          (null as any),(null as any),1,'td',([] as any[]),(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i1.ɵted(4,(null as any),
          ['',''])),(_l()(),i1.ɵted(-1,(null as any),['\n            ']))],(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_0:any = _co.setRowClasses(_v.context.$implicit.sponsorId);
    _ck(_v,1,0,currVal_0);
  },(_ck,_v) => {
    const currVal_1:any = _v.context.$implicit.sponsorGroupName;
    _ck(_v,4,0,currVal_1);
  });
}
function View_AssignedSponsorsComponent_2(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),19,'div',[['class',
      'container']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted(-1,(null as any),['\n    '])),(_l()(),i1.ɵeld(2,0,(null as any),
          (null as any),16,'table',[['class','table table-condensed']],(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i1.ɵted(-1,
          (null as any),['\n      '])),(_l()(),i1.ɵeld(4,0,(null as any),(null as any),
          7,'thead',([] as any[]),(null as any),(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i1.ɵted(-1,(null as any),['\n        '])),(_l()(),
          i1.ɵeld(6,0,(null as any),(null as any),4,'tr',([] as any[]),(null as any),
              (null as any),(null as any),(null as any),(null as any))),(_l()(),i1.ɵted(-1,
          (null as any),['\n          '])),(_l()(),i1.ɵeld(8,0,(null as any),(null as any),
          1,'th',([] as any[]),(null as any),(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i1.ɵted(-1,(null as any),['Nombre de Padrino(s)'])),
      (_l()(),i1.ɵted(-1,(null as any),['\n        '])),(_l()(),i1.ɵted(-1,(null as any),
          ['\n      '])),(_l()(),i1.ɵted(-1,(null as any),['\n      '])),(_l()(),i1.ɵeld(13,
          0,(null as any),(null as any),4,'tbody',([] as any[]),(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i1.ɵted(-1,(null as any),
          ['\n\n            '])),(_l()(),i1.ɵand(16777216,(null as any),(null as any),
          1,(null as any),View_AssignedSponsorsComponent_3)),i1.ɵdid(16,802816,(null as any),
          0,i2.NgForOf,[i1.ViewContainerRef,i1.TemplateRef,i1.IterableDiffers],{ngForOf:[0,
              'ngForOf']},(null as any)),(_l()(),i1.ɵted(-1,(null as any),['\n      '])),
      (_l()(),i1.ɵted(-1,(null as any),['\n    '])),(_l()(),i1.ɵted(-1,(null as any),
          ['\n']))],(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_0:any = _co.sponsors;
    _ck(_v,16,0,currVal_0);
  },(null as any));
}
export function View_AssignedSponsorsComponent_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵand(16777216,(null as any),(null as any),1,(null as any),
      View_AssignedSponsorsComponent_1)),i1.ɵdid(1,16384,(null as any),0,i2.NgIf,[i1.ViewContainerRef,
      i1.TemplateRef],{ngIf:[0,'ngIf']},(null as any)),(_l()(),i1.ɵted(-1,(null as any),
      ['\n'])),(_l()(),i1.ɵand(16777216,(null as any),(null as any),1,(null as any),
      View_AssignedSponsorsComponent_2)),i1.ɵdid(4,16384,(null as any),0,i2.NgIf,[i1.ViewContainerRef,
      i1.TemplateRef],{ngIf:[0,'ngIf']},(null as any)),(_l()(),i1.ɵted(-1,(null as any),
      ['\n']))],(_ck,_v) => {
    var _co:i3.AssignedSponsorsComponent = _v.component;
    const currVal_0:any = _co.errorMessage;
    _ck(_v,1,0,currVal_0);
    const currVal_1:boolean = !_co.errorMessage;
    _ck(_v,4,0,currVal_1);
  },(null as any));
}
export function View_AssignedSponsorsComponent_Host_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),1,'assigned-sponsors',
      ([] as any[]),(null as any),(null as any),(null as any),View_AssignedSponsorsComponent_0,
      RenderType_AssignedSponsorsComponent)),i1.ɵdid(1,114688,(null as any),0,i3.AssignedSponsorsComponent,
      [i4.SessionService,i5.SqlResource],(null as any),(null as any))],(_ck,_v) => {
    _ck(_v,1,0);
  },(null as any));
}
export const AssignedSponsorsComponentNgFactory:i1.ComponentFactory<i3.AssignedSponsorsComponent> = i1.ɵccf('assigned-sponsors',
    i3.AssignedSponsorsComponent,View_AssignedSponsorsComponent_Host_0,{},{onSelectedSponsorName:'onSelectedSponsorName',
        onSelectedSponsorId:'onSelectedSponsorId'},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL2hvbWUvY2thcGlsbGEvRGV2L0pvdmVuZXNBLWNsaWVudC5DTEkvc3JjL2FwcC8rc3R1ZGVudHMvYXNzaWduZWQtc3BvbnNvcnMvYXNzaWduZWQtc3BvbnNvcnMuY29tcG9uZW50Lm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL2hvbWUvY2thcGlsbGEvRGV2L0pvdmVuZXNBLWNsaWVudC5DTEkvc3JjL2FwcC8rc3R1ZGVudHMvYXNzaWduZWQtc3BvbnNvcnMvYXNzaWduZWQtc3BvbnNvcnMuY29tcG9uZW50LnRzIiwibmc6Ly8vaG9tZS9ja2FwaWxsYS9EZXYvSm92ZW5lc0EtY2xpZW50LkNMSS9zcmMvYXBwLytzdHVkZW50cy9hc3NpZ25lZC1zcG9uc29ycy9hc3NpZ25lZC1zcG9uc29ycy5jb21wb25lbnQuaHRtbCIsIm5nOi8vL2hvbWUvY2thcGlsbGEvRGV2L0pvdmVuZXNBLWNsaWVudC5DTEkvc3JjL2FwcC8rc3R1ZGVudHMvYXNzaWduZWQtc3BvbnNvcnMvYXNzaWduZWQtc3BvbnNvcnMuY29tcG9uZW50LnRzLkFzc2lnbmVkU3BvbnNvcnNDb21wb25lbnRfSG9zdC5odG1sIl0sInNvdXJjZXNDb250ZW50IjpbIiAiLCI8ZGl2ICpuZ0lmPVwiZXJyb3JNZXNzYWdlXCIgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIj57e2Vycm9yTWVzc2FnZX19PC9kaXY+XG48ZGl2ICpuZ0lmID0gXCIhZXJyb3JNZXNzYWdlXCIgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZSB0YWJsZS1jb25kZW5zZWRcIj5cbiAgICAgIDx0aGVhZD5cbiAgICAgICAgPHRyPlxuICAgICAgICAgIDx0aD5Ob21icmUgZGUgUGFkcmlubyhzKTwvdGg+XG4gICAgICAgIDwvdHI+XG4gICAgICA8L3RoZWFkPlxuICAgICAgPHRib2R5PlxuXG4gICAgICAgICAgICA8dHIgKm5nRm9yPVwibGV0IGl0ZW0gb2Ygc3BvbnNvcnMsIGxldCBpID0gaW5kZXhcIlxuICAgICAgICAgICAgICBbbmdDbGFzc109XCJzZXRSb3dDbGFzc2VzKGl0ZW0uc3BvbnNvcklkKVwiXG4gICAgICAgICAgICAgIGlkPVwiaXRlbS5zcG9uc29ySWRcIlxuICAgICAgICAgICAgICAoY2xpY2spPSdzZWxlY3RTcG9uc29yKGl0ZW0uc3BvbnNvcklkLCBpKSc+XG4gICAgICAgICAgICAgIDx0ZD57e2l0ZW0uc3BvbnNvckdyb3VwTmFtZX19PC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICA8L3Rib2R5PlxuICAgIDwvdGFibGU+XG48L2Rpdj5cbiIsIjxhc3NpZ25lZC1zcG9uc29ycz48L2Fzc2lnbmVkLXNwb25zb3JzPiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkNBQTtNQUFBO01BQUEsZ0JBQXFEOzs7SUFBQTtJQUFBOzs7O29CQVV6QztNQUFBO0lBQUE7SUFBQTtJQUdFO01BQUE7TUFBQTtJQUFBO0lBSEY7RUFBQSx1Q0FBQTtrREFBQTtNQUc2Qyx3REFDM0M7VUFBQTtVQUFBLDRDQUFJO1VBQUEsVUFBOEI7O0lBSGxDO0lBREYsV0FDRSxTQURGOztJQUlNO0lBQUE7Ozs7b0JBYmxCO01BQUE7TUFBK0MsOENBQzNDO1VBQUE7VUFBQSwwREFBcUM7VUFBQSw2QkFDbkM7VUFBQTtVQUFBLGdCQUFPLGtEQUNMO2lCQUFBO2NBQUEsMERBQUk7VUFBQSxpQ0FDRjtVQUFBO1VBQUEsZ0JBQUk7TUFBeUIsa0RBQzFCO1VBQUEsZUFDQyxnREFDUjtVQUFBO1VBQUEsNENBQU87VUFBQSx1QkFFRDtVQUFBLDBEQUFBO1VBQUE7Y0FBQSwyQkFLSztNQUNILDhDQUNGO1VBQUE7O0lBUEk7SUFBSixZQUFJLFNBQUo7Ozs7b0JBVlo7TUFBQSwwQ0FBQTtvQkFBQSxtQ0FBMkU7TUFBQSxTQUMzRTtNQUFBLDBDQUFBO29CQUFBLG1DQWlCTTtNQUFBOztJQWxCRDtJQUFMLFdBQUssU0FBTDtJQUNLO0lBQUwsV0FBSyxTQUFMOzs7O29CQ0RBO01BQUE7MENBQUEsVUFBQTtNQUFBO0lBQUE7Ozs7OyJ9
