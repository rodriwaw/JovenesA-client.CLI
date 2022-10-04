import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FollowUpDataService } from 'src/app/_shared/data/follow-up-data.service';
import { constants } from '../../_shared/constants/constants';
import { SELECTITEM } from '../../_shared/interfaces/SELECTITEM';
import { FollowUpRequest } from '../../_shared/models/follow-up-request';
import { SessionService } from '../../_shared/services/session.service';
import { TranslationService } from '../../_shared/services/translation.service';

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
  subject_EnglishCtl: AbstractControl;
  subject_SpanishCtl: AbstractControl;
  updateHistory_EnglishCtl: AbstractControl;
  updateHistory_SpanishCtl: AbstractControl;
  assignedToId: number;
  childRequestStatusId: number;

  errorMessage: string;
  successMessage: string;
  requestStatuses: SELECTITEM[];

  // selectedFollowUpStatus: string;
  // savedFollowUpStatusId: number;
  // studentName: string;

  constructor(
    public currRoute: ActivatedRoute,
    private router: Router,
    public followUpData: FollowUpDataService,
    private _fb: FormBuilder,
    private session: SessionService,
    private xlator: TranslationService
  ) {

    this.requestStatuses = constants.followUpStatuses;

    this.myForm = _fb.group({
      studentSelector: [''],
      requesterSelector: [''],
      statusSelector: [''],
      subject_English: [''],
      subject_Spanish: [''],
      updateHistory_English: [''],
      updateHistory_Spanish: ['']
    });


    this.subject_EnglishCtl = this.myForm.controls.subject_English;
    this.subject_SpanishCtl= this.myForm.controls.subject_Spanish;
    this.updateHistory_EnglishCtl = this.myForm.controls.updateHistory_English;
    this.updateHistory_SpanishCtl = this.myForm.controls.updateHistory_Spanish;


    this.followUpRequest = new FollowUpRequest();

    // SQL Server will adjust the time to UTC by adding TimezoneOffset
    // we want to store local time so we adjust for that.
    const now = new Date();
    this.followUpRequest.createDateTime = new Date(now.getTime() - now.getTimezoneOffset() * 60000);
    console.log('reportDateTime = ' + this.followUpRequest.createDateTime);

    this.errorMessage = '';
    this.successMessage = '';
    this.submitted = false;
  }

  ngOnInit() {
    this.isLoading = true;
    this.myForm.valueChanges.subscribe(() => {
      this.errorMessage = '';
      this.successMessage = '';
      this.submitted = false;
      // console.log('form change event');
    });
  }

  retrieveFormValues(): void {
    console.log('retrieveFormValues ' + JSON.stringify(this.myForm.value));
    // use spread operator to merge changes:
    // this.followUpRequest = { ...this.followUpRequest, ...this.myForm.value };

    this.followUpRequest.requesterId = this.session.getUserId();
    // this.followUpRequest.requestStatusId = this.requestStatusCtl.value;
    this.followUpRequest.requestStatusId = + this.requestStatuses[0].value; // 2092; //open
    this.followUpRequest.assignedToId =  this.assignedToId;
    this.followUpRequest.latestUpdaterId = this.session.getUserId()
    this.followUpRequest.subject_English = this.subject_EnglishCtl.value;
    // this.followUpRequest.subject_Spanish = this.subject_SpanishCtl.value;
    this.followUpRequest.updateHistory_English = this.updateHistory_EnglishCtl.value;
    // this.followUpRequest.updateHistory_Spanish = this.updateHistory_SpanishCtl.value;
    this.followUpRequest.lastUpdateDateTime = new Date();
    this.followUpRequest.createDateTime = new Date();

    this.followUpRequest.studentGUId =  this.followUpRequest.studentGUId;// set by store message
  }

  onSubmit() {
    console.log('Hi from FollowUpRequests Submit');

    if (this.myForm.invalid) {
      this.errorMessage = '';
      window.scrollTo(0, 0);
      return false;
    }
    this.retrieveFormValues();
    this.followUpData.postFollowUpRequest(this.followUpRequest).subscribe(
      (response) => {
        console.log('followUp add Request submit completed');
        console.log(response.followUpRequest);
      },
      (error) => {
        this.errorMessage = error;
        this.isLoading = false;
      },
      () => {
        this.navigateBackInContext();
      }
    );
    return false;
  }

  onCancel() {
    this.navigateBackInContext();
  }


  navigateBackInContext() {
    const link = ['/admins/follow-up/requests'];
    console.log('after Submit or Cancel navigating to ' + link);

    this.router.navigate(link);
  }

  public hasChanges() {
    // if have changes then ask for confirmation
    // ask if form is dirty and has not just been submitted
    console.log('hasChanges has submitted ' + this.submitted);
    console.log('hasChanges has form dirty ' + this.myForm.dirty);
    console.log('hasChanges net is ' + this.myForm.dirty || this.submitted);
    return this.myForm.dirty && !this.submitted;
  }

  public onSelectedStudentGUId(studentGUId: string) {
    this.followUpRequest.studentGUId = studentGUId;
    console.log('container form has studentGUId ' + studentGUId);
  }

  public onSelectedAssignedToId(memberId: number) {
    this.assignedToId = memberId;
    // this.followUpRequest.requesterId = memberId;
    console.log('container form has reqeustorMemberId ' + memberId);
  }
  // public onSelectedRequestStatus(statusId: number) {
  //   this.childRequestStatusId = statusId;
  //   console.log('requestStatus set to  ' + statusId);
  // }

  public translateFromSpanish(spanishText: string) {
    this.xlator.translateFromSpanish(spanishText);
  }
}
