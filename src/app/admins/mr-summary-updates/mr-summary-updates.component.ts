import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { MentorReport2DataService } from 'src/app/app_shared/services/mentor-report2-data.service';
import { constants } from '../../app_shared/constants/constants';
import { SELECTITEM } from '../../app_shared/interfaces/SELECTITEM';
import { MentorReport2RPT } from '../../app_shared/models/mentor-report2';
import { SessionService } from '../../app_shared/services/session.service';

@Component({

  templateUrl: './mr-summary-updates.component.html',
  styleUrls: ['../../../assets/css/forms.css'],
})

export class MentorReportSummaryUpdatesComponent
  implements OnInit {
  myForm: FormGroup;
  mentorReport2: MentorReport2RPT;
  isLoading: boolean;
  submitted: boolean;
  errorMessage: string;
  successMessage: string;

  emojiCtl: AbstractControl;
  narrative_EnglishCtl: AbstractControl;
  narrative_SpanishCtl: AbstractControl;
  lastYear: AbstractControl;
  lastMonth: AbstractControl;
  followUp: AbstractControl;
  success: AbstractControl;
  challenge: AbstractControl;
  summary: AbstractControl;
  reviewedStatus: AbstractControl;
  highlightStatus: AbstractControl;

  // contactYears: SELECTITEM[];
  // contactMonths: SELECTITEM[];

  reviewedStatuses: SELECTITEM[];
  highlightStatuses: SELECTITEM[];
  followUpStatuses: SELECTITEM[];
  selectedYear: string;
  selectedMonth: string;
  selectedReviewedStatus: string;
  selectedFollowUpStatus: string;
  savedReviewedStatusId: number;
  savedHighlightStatusId: number;
  studentName: string;

  constructor(
    public currRoute: ActivatedRoute,
    private router: Router,
    public mentorReportData: MentorReport2DataService,
    private _fb: FormBuilder,
    public session: SessionService
  ) {

    this.reviewedStatuses = constants.reviewedStatuses;
    this.highlightStatuses = constants.highlightStatuses;

    this.myForm = _fb.group({

      inputSummary: [''], // ,Validators.compose([Validators.required, Validators.maxLength(2000)])],
      reviewedStatusSelector: [''],
      highlightStatusSelector: [''],
      inputEmoji: [666, { validators: [Validators.required, this.validateEmojis], updateOn: 'change' }],
      narrative_English: ['', { validators: [Validators.required], updateOn: 'blur' }],
      narrative_Spanish: [''],
    });

    this.summary = this.myForm.controls['inputSummary'];
    this.reviewedStatus = this.myForm.controls['reviewedStatusSelector'];
    this.highlightStatus = this.myForm.controls['highlightStatusSelector'];
    this.emojiCtl = this.myForm.controls['inputEmoji'];
    this.narrative_EnglishCtl = this.myForm.controls['narrative_English'];
    this.narrative_SpanishCtl = this.myForm.controls['narrative_Spanish'];
    this.mentorReport2 = new MentorReport2RPT(); // MentorReportResource();

    this.errorMessage = '';
    this.successMessage = '';
    this.submitted = false;
    this.studentName = this.session.getStudentInContextName();
  }

  ngOnInit() {

    const mentorReportId = this.currRoute.snapshot.params['mentorReportId'];
    console.log('ngOnInit with MentorReportId: ' + mentorReportId);

    this.savedReviewedStatusId = this.currRoute.snapshot.params['reviewedStatus'];
    if (this.savedReviewedStatusId === undefined) {
      this.savedReviewedStatusId = 0;
    }

    this.savedHighlightStatusId = this.currRoute.snapshot.params['highlight'];
    if (this.savedHighlightStatusId === undefined) {
      this.savedHighlightStatusId = 0;
    }

    this.isLoading = true;
    this.mentorReportData.getMentorReport2(mentorReportId)
      .subscribe(
        data => { this.mentorReport2 = data; },
        err => console.error('Subscribe error: ' + err),
        () => {
          console.log('done with data MentorReport>>');
          console.log(this.mentorReport2);
          console.log('<<');
          this.emojiCtl.setValue(this.mentorReport2.emoji);
          this.narrative_EnglishCtl.setValue(this.mentorReport2.narrative_English);
          this.narrative_SpanishCtl.setValue(this.mentorReport2.narrative_Spanish);
          this.isLoading = false;
        }
      );

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
    console.log('Hi from mentor ReportReview Submit');
    // console.log(this.mentorReport);

    if (this.myForm.invalid) {
      let i = 0;
      this.errorMessage = '';

      if (!this.lastYear.valid || !this.lastMonth.valid) {
        this.errorMessage = this.errorMessage + 'Year and month must be selected from drop-downs. ';
        ++i;
      }

      if (!this.emojiCtl.valid) {
        this.errorMessage = this.errorMessage + 'An emoji must be selected. Se debe seleccionar un Emoji';
        ++i;
      }

      if (!this.followUp.valid || !this.success.valid || !this.challenge.valid) {
        this.errorMessage = this.errorMessage + 'All 3 text boxes must be filled in . ';
        ++i;
      }

      window.scrollTo(0, 0);
      return false;
    }

    this.mentorReport2.emoji = this.emojiCtl.value;
    this.mentorReport2.narrative_English = this.narrative_EnglishCtl.value;
    this.mentorReport2.narrative_Spanish = this.narrative_SpanishCtl.value;

    this.mentorReportData.updateMentorReport2(this.mentorReport2)
      .subscribe(
        (student) => {
          console.log(this.successMessage = <any>student);
          this.submitted = true;
          this.isLoading = false;
          this.navigateBackInContext();
        },
        (error) => {
          this.errorMessage = <any>error;
          this.isLoading = false;
        }
      );
    return false;
  }

  onCancel() {
    this.navigateBackInContext();
  }

  navigateBackInContext() {
    const target = '/admins/mentor-reports/summary-tracking';
    console.log('after Submit or Cancel navigating to ' + target);
    const reportDate = new Date(this.mentorReport2.reportDateTime);

    let reportYear = reportDate.getFullYear();
    console.log('orig reportYear ' + reportYear);
    let reportMonth = reportDate.getMonth() + 1;  // JS Date months are zero based
    console.log('orig reportMonth ' + reportMonth);
    if (reportDate.getDate() <= 2) {
      reportMonth--;
      if (reportMonth === 0) {
        reportMonth = 12;
        reportYear--;
      }
    }

    console.log('adj reportMonth ' + reportMonth);
    const navigationExtras: NavigationExtras = {
      queryParams: {
        id: 'id' + this.mentorReport2.mentorReportId,
        year: reportYear,
        month: reportMonth,
        reviewedStatus: this.savedReviewedStatusId,
        highlight: this.savedHighlightStatusId
      }
    };
    console.log(navigationExtras.queryParams);
    this.router.navigate([target], navigationExtras);
  }

  validateEmojis(control: FormControl): { [error: string]: any } {
    console.log('emoji validator ' + control.value);
    const rtnVal: any = (control.value === 666)
      ? { validateEmojis: { valid: false } }
      : null;
    console.log(rtnVal);
    return rtnVal;
  }
  public hasChanges() {
    // if have changes then ask for confirmation
    // ask if form is dirty and has not just been submitted
    console.log('hasChanges has submitted ' + this.submitted);
    console.log('hasChanges has form dirty ' + this.myForm.dirty);
    console.log('hasChanges net is ' + this.myForm.dirty || this.submitted);
    return this.myForm.dirty && !this.submitted;
  }

}
