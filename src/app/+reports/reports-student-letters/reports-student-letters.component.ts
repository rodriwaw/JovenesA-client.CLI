import { Component, OnInit } from '@angular/core';

import { SqlReports } from '../shared/services/sql-reports';
import { Router } from '@angular/router';
import { SessionService } from '../../app_shared/services/session.service';
import { LatestStudentLetters } from '../shared/report-models/latest-student-letters';
@Component({
  moduleId: module.id,
  templateUrl: 'reports-student-letters.component.html'
})
export class ReportsStudentLettersComponent implements OnInit {
    latestStudentLetters: LatestStudentLetters[];
  isLoading: boolean;
  smileys: Array<string>;

  constructor(public sqlReports: SqlReports,
              public router: Router,
              public session: SessionService



  ) {
    this.smileys = [ '/assets/images/frownSmiley.jpg',
                    '/assets/images/neutralSmiley.jpg',
                    '/assets/images/greenSmiley.jpg',
                    '/assets/images/NA.jpg'
                    ];
  }

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.isLoading = true;
    console.log('in fetchData for LatestStudentLetters');
    this.sqlReports.getLatestStudentLetters()
      .subscribe(
        data => {this.latestStudentLetters = data;},
        err => console.error('Subscribe error: ' + err),
        () => { console.log('done'); console.log(this.latestStudentLetters[0]); this.isLoading = false;}
      );
  }
  // gotoStudent(id: number, studentName: string) {
  //   console.log('setting studentName to ' + studentName);
  //   this.session.setAssignedStudentName(studentName);

  //   let link = ['/admins/students/student/' + id];
  //   //let link = ['/admins/students/StudentLetters/' + id];
  //   console.log('navigating to ' + link);
  //   this.router.navigate(link);
  // }

  gotoStudentletter(id: number) {
    let link = ['/admins/students/studentLetters/' + id];
    console.log('navigating to ' + link);
    this.router.navigate(link);
  }


}
