import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SponsorLetter } from '../../app_shared/models/sponsor-letter';
import { StudentDTO } from '../../app_shared/models/studentDTO';
import { SessionService } from '../../app_shared/services/session.service';
import { SqlResource } from '../../app_shared/services/sql-resource.service';


@Component({
  templateUrl: './students-sponsor-letters.component.html',
  styleUrls: ['./students-sponsor-letters.component.css'],
})

export class StudentsSponsorLettersComponent implements OnInit {

  isLoading: boolean;
  errorMessage: string;
  studentId: number;
  student: StudentDTO;
  sponsorLetters: Array<SponsorLetter>;
  sponsorName: string;
  sponsorGroupId: number;

  constructor(
    public currRoute: ActivatedRoute,
    private router: Router,
    public sqlResource: SqlResource,
    public session: SessionService) {

    console.log('sponsorLetters constructor');
  }

  ngOnInit() {
    console.log('sponsorLetters ngOnInit');
    this.studentId = this.currRoute.snapshot.params['id'];
    // may be undefined at this point:
    console.log('studentId ' + this.studentId);
    this.isLoading = true;
  }

  onSelectedSponsorName(sponsorName: string) {
    console.log('$$$$$$$ got selected NAME event');
    this.sponsorName = '' + sponsorName;
  }

  onSelectedSponsorId(sponsorGroupId: number) {
    console.log('$$$$$$$ got selectedId event sponsorGroupId: ' + sponsorGroupId);
    this.sponsorGroupId = sponsorGroupId;
    this.sqlResource.getSponsorLetters( this.studentId, sponsorGroupId)
      .subscribe(
      data => { this.sponsorLetters = data; },
      err => console.error('Subscribe error: ' + err),
      () => { console.log('done: ');
        this.isLoading = false;
      }
    );
  }

  sponsorLetterAdd() {
    const target = 'students/sponsor-letters-add/' + this.studentId  + '/' + this.sponsorGroupId;
    console.log('in students-sponsor-letters: ready to navigate to' + target);
    this.router.navigateByUrl(target);
  }
}
