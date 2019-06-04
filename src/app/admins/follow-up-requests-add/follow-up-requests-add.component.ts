import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { SELECTITEM } from '../../app_shared/interfaces/SELECTITEM';
import { FollowUpRequest } from '../../app_shared/models/follow-up-request';
import { SessionService } from '../../app_shared/services/session.service';
import { SqlResource } from '../../app_shared/services/sql-resource.service';

@Component({
  selector: 'app-follow-up-requests-add',
  templateUrl: './follow-up-requests-add.component.html',
  styleUrls: ['./follow-up-requests-add.component.css']
})
export class FollowUpRequestsAddComponent implements OnInit {

  myForm: FormGroup;
  followUpRequest: FollowUpRequest;
  isLoading: boolean;
  submitted: boolean;

  followUpStatusSelector: AbstractControl;

  errorMessage: string;
  successMessage: string;
  requestStatuses: SELECTITEM[];
  requestorRoles: SELECTITEM[];

  // selectedFollowUpStatus: string;
  // savedFollowUpStatusId: number;
  // studentName: string;


  constructor(
    public currRoute: ActivatedRoute,
    private router: Router,
    public sqlResource: SqlResource,
    private _fb: FormBuilder,
    private session: SessionService
  ) {


    this.requestStatuses = [
      { value: '0', label: '[None]' },
      { value: '2091', label: 'Requested' },
      { value: '2092', label: 'Assigned' },
      { value: '2104', label: 'Closed' },
    ];

    this.requestorRoles = [
      { value: '0', label: '[None]' },
      { value: '1008', label: 'Volunteer' },
      { value: '1009', label: 'Sponsor' },
      { value: '1010', label: 'Mentor' },
      { value: '1013', label: 'Donor' },
      { value: '1007', label: 'Board Member' },
      { value: '2068', label: 'Admin' },
      { value: '2069', label: 'Student' }
    ];


    this.myForm = _fb.group({
      studentSelector: [''],
      requestorRoleSelector: [''],
      requestorSelector: [''],
      target_date: [''],
      description_English: [''],
      description_Spanish: [''],
    });



    this.followUpRequest = new FollowUpRequest();
    this.followUpRequest.studentId = 0;
    // SQL Server will adjust the time to UTC by adding TimezoneOffset
    // we want to store local time so we adjust for that.
    const now = new Date();
    this.followUpRequest.requestDateTime = new Date(now.getTime() - now.getTimezoneOffset() * 60000);
    console.log('reportDateTime = ' + this.followUpRequest.requestDateTime);

    this.errorMessage = '';
    this.successMessage = '';
    this.submitted = false;


  }

  ngOnInit() {

    this.isLoading = true;
    this.myForm.valueChanges.subscribe(
      (form: any) => {
        this.errorMessage = '';
        this.successMessage = '';
        this.submitted = false;
        // console.log('form change event');
      }
    );
  }

  onSubmit() {
    console.log('Hi from mentor FollowUpRequests Submit');

    if (this.myForm.invalid) {
      this.errorMessage = '';
      window.scrollTo(0, 0);
      return false;
    }
    this.sqlResource.postFollowUpRequest(this.followUpRequest)
      .subscribe(
        (request) => {
          console.log(this.successMessage = <any>request);
          this.submitted = true;
          this.isLoading = false;
          const target = '/admins/follow-up-requests';
          console.log('after call to addFollowUpRequest; navigating to ' + target);
          this.router.navigateByUrl(target);
        },
        (error) => {
          console.log(this.errorMessage = <any>error);
          this.isLoading = false;
        }
      );
    return false;
  }

onCancel() {
  this.navigateBackInContext();
}

navigateBackInContext() {
  const target = '/admins/follow-up';
  console.log('after Submit or Cancel navigating to ' + target);

  const navigationExtras: NavigationExtras = {
    // queryParams: { id: 'id' + this.followUpRequest.followUpRequestId,
    //                 summary: this.savedFollowUpStatusId
    //               }
  };

  this.router.navigate([target], navigationExtras);
}

    public hasChanges() {
  // if have changes then ask for confirmation
  // ask if form is dirty and has not just been submitted
  console.log('hasChanges has submitted ' + this.submitted);
  console.log('hasChanges has form dirty ' + this.myForm.dirty);
  console.log('hasChanges net is ' + this.myForm.dirty || this.submitted);
  return this.myForm.dirty && !this.submitted;
}

  public onSelectedStudentId(studentId: number) {
  this.followUpRequest.studentId = studentId;
  console.log('container form has studentId ' + studentId);
}


  public onSelectedRoleId(roleId: number) {
    this.followUpRequest.requestorRoleId = roleId;
  console.log('container form has reqeustorRoleId ' + roleId);
}

  public onSelectedMemberId(memberId: number) {
  this.followUpRequest.requestorId = memberId;
  console.log('container form has reqeustorMemberId ' + memberId);
}



}
