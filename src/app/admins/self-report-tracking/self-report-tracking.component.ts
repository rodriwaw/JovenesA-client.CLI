import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentSelfReportDataService } from 'src/app/app_shared/services/student-self-report-data.service';
import { constants } from '../../app_shared/constants/constants';
import { SELECTITEM } from '../../app_shared/interfaces/SELECTITEM';
import { StudentSelfReport } from '../../app_shared/models/student-self-report';
import { SessionService } from '../../app_shared/services/session.service';


@Component({

  templateUrl: 'self-report-tracking.component.html',
  styleUrls: ['self-report-tracking.component.css']
})
export class SelfReportsTrackingComponent implements OnInit {
  studentReportsByPeriod: StudentSelfReport[];
  isLoading: boolean;
  smileys: Array<string>;
  public errorMessage: string;
  successMessage: string;
  submitted: string;
  studentReportStatuses: SELECTITEM[];
  years: SELECTITEM[];
  periods: SELECTITEM[];
  ssrReviewedStatuses: SELECTITEM[];
  highlightStatuses: SELECTITEM[];
  selectedYear: string;
  selectedPeriod: string;
  selectedSRReviewedStatus: string;
  // selectedHighlightStatus: string;
  displayOriginalFields = true;
  x: any;
  studentName: string;

  constructor(
    public router: Router,
    public session: SessionService,
    public ssrData: StudentSelfReportDataService,
    private route: ActivatedRoute
  ) {


    this.years = constants.years;
    this.periods = constants.periods;
    this.ssrReviewedStatuses = constants.reviewedStatuses;

    const today = new Date();
    this.selectedYear = '2019'; // '' + today.getFullYear(); //
    this.selectedPeriod = '0'; // + today.getPeriod() + 1;// '5';

    this.selectedSRReviewedStatus = '0'; // this.ssrReviewedStatuses[0].value;
    // this.selectedHighlightStatus = this.highlightStatuses[0].value;


    this.smileys = constants.smileys;
  }

  ngOnInit() {
    console.log('onInit');
    this.processRouteParams();
  }

  processRouteParams() {
    console.log('SelfReportTracking setting filters form queryParams');

    const year = this.route.snapshot.queryParams['year'];
    console.log('year param = ' + year);
    if (year !== undefined) {
      this.selectedYear = year;
    }

    const period = this.route.snapshot.queryParams['period'];
    console.log('period param = ' + period);
    if (period !== undefined) {
      this.selectedPeriod = period;
    }
    const summary = this.route.snapshot.queryParams['summaryStatus'];
    console.log('summary param = ' + summary);
    if (period !== undefined) {
      this.selectedSRReviewedStatus = summary;
    } else {
      this.selectedSRReviewedStatus = '0';
    }

    // const highlight = this.route.snapshot.queryParams['highlight'];
    // console.log('highlight param = ' + highlight);
    // if (highlight !== undefined) {
    //   this.selectedHighlightStatus = highlight;
    // } else {
    //   this.selectedHighlightStatus = '0';
    // }

    if (period > 0) {
      this.fetchFilteredData();
    }

  }


  fetchFilteredData() {
    this.isLoading = true;
    console.log('in fetchData for StudentReportsByPeriod');
    this.ssrData.getStudentSelfReportsByPeriod(this.selectedYear,
      this.selectedPeriod,
      '0', // this.selectedSRReviewedStatus,
      null
    )
      .subscribe(
        data => { this.studentReportsByPeriod = data; console.log('studentReportByPeriod has'); console.log(this.studentReportsByPeriod[0]); },
        err => console.error('Subscribe error: ' + err),
        () => {
          console.log('data loaded now set timeout for scroll');
          setTimeout(() => {
            this.scrollIntoView();
          }, 0);
          this.isLoading = false;
        }
      );
  }

  scrollIntoView() {
    console.log('in scrollIntoView');
    if (this.route.snapshot.queryParams['id']) {
      console.log(this.route.snapshot.queryParams['id']);
      const idSelector = '#' + this.route.snapshot.queryParams['id'];
      console.log('id param = ' + this.route.snapshot.queryParams['id']);
      const element = document.querySelector(idSelector);
      if (element) {
        console.log('querySelector returns element ' + element);
        element.scrollIntoView(true);
      }
    }
  }

  setSelectedSRReviewedStatus(status: string) {
    this.selectedSRReviewedStatus = status;
    this.fetchFilteredData();
  }

  // setSelectedHighlightStatus(status: string) {
  //   this.selectedHighlightStatus = status;
  //   this.fetchFilteredData();
  // }

  setSelectedYear(year: string) {
    this.selectedYear = year;
    this.fetchFilteredData();
  }
  setSelectedPeriod(period: string) {
    this.selectedPeriod = period;
    this.fetchFilteredData();
  }

  gotoStudent(guid: string, studentName: string) {
    console.log('setting studentName to ' + studentName);
    this.session.setStudentInContextName(studentName);

    const link = ['admins/students/student', { guid: guid }];

    console.log('navigating to ' + link);
    this.router.navigate(link);
  }

  gotoReportSummary(id: number, studentName: string) {
    // const link = ['/admins/student-reports/summary-updates?id=' + id + '&summaryStatus=' + 2087 + '&highlight=' + 2106];
    this.session.setStudentInContextName(studentName);
    const link: [string, { studentReportId: number, summaryStatus: string }]
      = ['/admins/self-reports/updates',
        { studentReportId: id, summaryStatus: this.selectedSRReviewedStatus }];

    console.log('navigating to ' + link);
    this.router.navigate(link);
  }


  getHighlightColor(highlightStatusId: number): string {

    if (highlightStatusId === 2106) {
      // console.log('returning ' + 'green-row');
      return 'green-row';
    } else if (highlightStatusId === 2105) {
      return 'red-row';
    } else {
      return '';
    }
  }

}
