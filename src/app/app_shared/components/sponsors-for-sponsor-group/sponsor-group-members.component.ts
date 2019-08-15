import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { SponsorGroupMemberDTO } from '../../models/sponsor-group-memberDTO';
import { SessionService } from '../../services/session.service';
import { SqlResource } from '../../services/sql-resource.service';

@Component({
  selector: 'app-sponsor-group-members',
  templateUrl: './sponsor-group-members.component.html'
})

export class SponsorGroupMembersComponent implements OnInit, OnChanges {
  sponsors: SponsorGroupMemberDTO[];
  sponsorName: string;
  sponsorId: number;
  errorMessage = '';
  @Output() onSelectedSponsorName = new EventEmitter<string>();
  @Output() onSelectedSponsorId = new EventEmitter<number>();
  // @Input() studentId: number;
  @Input() sponsorGroupId: number;

  constructor(public session: SessionService,
    private sqlResource: SqlResource) {

    console.log('in SponsorsForSponsorGroupComponent constructor with SponsorGroupId=' + this.sponsorGroupId);
  }

  public ngOnInit() {
    this.sqlResource.getMembersForSponsorGroup(this.sponsorGroupId)
      .subscribe(
        data => { this.sponsors = data; console.log('getSponsorsForSponsorGroup'); console.log(this.sponsors[0]); },
        err => console.error('Subscribe error: ' + err),
        () => {
          console.log('sponsors-for-sponsor-group loaded ' + this.sponsors.length + ' rows');
        }
      );
  }

  public ngOnChanges() {
    console.log('child had new inpout');
    this.ngOnInit();
  }
}
