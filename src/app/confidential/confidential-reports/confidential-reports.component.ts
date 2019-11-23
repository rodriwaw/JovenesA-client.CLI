import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ConfidentialReportRPT } from 'src/app/app_shared/models/confidential-reportRPT';
import { ConfidentialDataService } from 'src/app/app_shared/services/confidential-data.service';
import { StudentSelectedService } from 'src/app/app_shared/services/student-selected.service';
import { constants } from '../../app_shared/constants/constants';
import { SessionService } from '../../app_shared/services/session.service';


@Component({
  selector: 'app-confidential-reports',
  templateUrl: './confidential-reports.component.html',
})

export class ConfidentialReportsComponent implements OnInit, OnDestroy {

  isLoading: boolean;
  errorMessage: string;

  studentId: number;
  studentGUId: string;
  adminId: number;
  confidentialReportId: number;
  confidentialReports: Array<ConfidentialReportRPT>;
  smileys: Array<string>;
  studentName: string;
  haveCurrentReport: boolean;
  private subscription: Subscription;

  constructor(
    public currRoute: ActivatedRoute,
    private router: Router,
    public confidentialReportData: ConfidentialDataService,
    public session: SessionService,
    private studentSelected: StudentSelectedService
  ) {

    console.log('confidentialReports constructor');
    this.smileys = constants.smileys;
  }

  ngOnInit() {
    console.log('confidentialReports ngOnInit');
    // this.mentorId = this.currRoute.snapshot.params['mentorId'];
    this.adminId = this.session.getUserId();
    console.log('mentorId ' + this.adminId);

    // // may be undefined at this point:
    // console.log('studentId ' + this.studentId);


    this.haveCurrentReport = false;

    // console.log('(((((((((((((((((MR ngOnInit)))))))))))))');
    this.subscribeForStudentGUIds();
    // console.log('after subscribe' + this.studentSelected.getInternalSubject().observers.length);

  }

  ngOnDestroy() {
    // console.log('{{{{{{{{{{{{{MR ngOnDestroy / unsubscribe }}}}}}}}}}}}}');
    // this.studentSelected.unsubscribe();
    this.subscription.unsubscribe();
    // this.subscription.unsubscribe();
    console.log(' after unsubscribe ' + this.studentSelected.getInternalSubject().observers.length);
  }

  subscribeForStudentGUIds() {
    console.log('CR set up studentGUId subscription');
    this.subscription = this.studentSelected.subscribeForStudentGUIds()
      // .pipe(takeWhile(() => this.notDestroyed))
      .subscribe(message => {
        this.studentGUId = message;
        console.log('CR new StudentGUId received' + this.studentGUId);
        if (this.studentGUId && this.studentGUId !== '0000') {
          this.fetchData(this.studentGUId);
        }
        // console.log('subscribe next ' + this.studentSelected.getInternalSubject().observers.length);
      });
  }


  fetchData(studentGUId: string) {

    console.log('cr fetchData');
    this.isLoading = true;
    this.isLoading = true;
    this.haveCurrentReport = false;
    this.studentGUId = studentGUId;
    this.confidentialReportData.getConfidentialReportRPTsViaGUID(0, studentGUId)
      .subscribe(
        data => { this.confidentialReports = data; },
        err => console.error('Subscribe error: ' + err),
        () => {
          console.log('done: ');
          this.isLoading = false;
          for (const x of this.confidentialReports) {
            if (x.reviewedStatusId === 2086) { // Needs_Setup
              // console.log('current report found; disable add function');
              this.haveCurrentReport = true;
            }
          }

        }
      );
  }

  confidentialReportAdd() {
    if (this.haveCurrentReport) {
      alert('There is already a report filed for this month. Please use the edit button to edit it. / Ya hay un informe presentado para este mes. Por favor, utilice el botón Editar para editarlo. ');
    } else {
      console.log('in monthly-reports: monthlyReportAdd, ready to navigate');
      if (this.studentGUId !== null) {
        // const target = '/mentors/monthly-reports-add';
        // this.router.navigate([target, { mentorId: this.mentorId, studentGUId: this.studentGUId }]);
        const link = ['/mentors/monthly-reports-add', { mentorId: this.adminId, studentGUId: this.studentGUId }];
        console.log('navigating to ' + JSON.stringify(link));
        this.router.navigate(link);
      }
    }
  }

  confidentialReportEdit(mentorReportId: number) {
    console.log('in monthly-reports: monthlyReportEdit, ready to navigate');
    if (this.studentId !== null) {
      const target = '/mentors/monthly-reports-edit/' + mentorReportId;
      this.router.navigateByUrl(target); // , //{mentorId: this.mentorId, studentId: this.studentId}]);
    }
  }
}
