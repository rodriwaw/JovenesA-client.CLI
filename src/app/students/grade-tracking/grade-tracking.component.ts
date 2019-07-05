import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../../app_shared/services/session.service';


@Component({

  templateUrl: 'grade-tracking.component.html'
})
export class GradeTrackingComponent implements OnInit {
  isLoading: boolean;
  smileys: Array<string>;
  errorMessage: string;
  successMessage: string;

  constructor(public router: Router,
              public session: SessionService
  ) {
    this.smileys = [ '/assets/images/needsAttention.jpg',
                    '/assets/images/thumbsUp.jpg',
                    '/assets/images/celebrate.jpg',
                    '/assets/images/NA.jpg'
                    ];
  }

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.isLoading = true;
    console.log('in fetchData for LatestMentorReports');
    // this.sqlReports.getLatestMentorReports()
    //   .subscribe(
    //     data => {this.latestMentorReports = data;},
    //     err => console.error('Subscribe error: ' + err),
    //     () => { console.log('done'); console.log(this.latestMentorReports[0]); this.isLoading = false;}
    //   );
  }
}
