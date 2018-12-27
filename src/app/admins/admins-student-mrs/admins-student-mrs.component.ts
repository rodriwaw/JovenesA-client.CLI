import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RptMentorReport } from '../../app_shared/models/mentor-report';
import { SessionService } from '../../app_shared/services/session.service';
import { SqlResource } from '../../app_shared/services/sql-resource.service';

@Component({

  templateUrl: './admins-student-mrs.component.html',
})

export class AdminsStudentMRsComponent implements OnInit {

  isLoading: boolean;
  errorMessage: string;

  studentId: number;
  mentorId: number;
  mentorReportId: number;
  mentorReports: Array<RptMentorReport>;
  studentName: string;

  constructor(
              public currRoute: ActivatedRoute,
              private router: Router,
              public sqlResource: SqlResource,
              public session: SessionService,
              public location: Location) {
  }

   ngOnInit() {
    console.log('admins MRs ngOnInit');
    //  not here this.mentorId = this.currRoute.snapshot.params['mentorId'];
     this.mentorId = 0; // 2208;
    console.log('mentorId ' + this.mentorId);
    this.studentId = this.currRoute.snapshot.params['id'];
    this.studentName = this.session.getStudentInContextName();
    console.log('studentId  ' + this.studentId);
    this.isLoading = true;
    this.sqlResource.getMentorReportDTOs(this.mentorId, this.studentId)
      .subscribe(
        data => {this.mentorReports = data; },
        err => console.error('Subscribe error: ' + err),
        () => {console.log('done: ');
        this.isLoading = false;
        }
      );
  }
}
