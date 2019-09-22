import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { constants } from '../../app_shared/constants/constants';
import { SELECTITEM } from '../../app_shared/interfaces/SELECTITEM';
import { FollowUpRequestRPT } from '../../app_shared/models/follow-up-requestRPT';
import { SessionService } from '../../app_shared/services/session.service';
import { SqlResource } from '../../app_shared/services/sql-resource.service';
@Component({
  selector: 'app-follow-up-requests',
  styleUrls: ['./follow-up-requests.component.css'],
  templateUrl: 'follow-up-requests.component.html'
})
export class FollowUpRequestsComponent implements OnInit {
  followUpRequests: FollowUpRequestRPT[];
  isLoading: boolean;
  smileys: Array<string>;
  followUpStatuses: SELECTITEM[];
  selectedFollowUpStatusId: string;
  errorMessage: string;
  successMessage: string;
  studentName: string;
  displayCompleteHistory: true;
  showAddDetails: boolean;


  constructor(public sqlResource: SqlResource,
    public router: Router,
    public session: SessionService
  ) {

    this.followUpStatuses = constants.followUpStatuses;
    this.selectedFollowUpStatusId = constants.followUpStatuses[0].value;
    this.showAddDetails = this.selectedFollowUpStatusId === '2092'; // Assigned
  }

  ngOnInit() {
    console.log('calling fetchFilterdData with ' + this.selectedFollowUpStatusId);
    this.fetchFilteredData();
  }

  fetchFilteredData() {
    this.isLoading = true;
    console.log('in fetchFilteredData for FollowUpRequests');
    this.sqlResource.getFollowUpRequests(this.selectedFollowUpStatusId)
      .subscribe(
        data => { this.followUpRequests = data; },
        err => console.error('Subscribe error: ' + err),
        () => {
          console.log('done >>'); console.log(this.followUpRequests[0]); console.log('<<');
          this.isLoading = false;
        }
      );
  }
  followUpRequestAdd() {
    console.log('in follow-up-requests: FollowUpRequestAdd, ready to navigate');
    const target = '/admins/follow-up-requests-add';
    this.router.navigateByUrl(target);
  }
  setSelectedFollowUpStatus(status: string) {
    this.selectedFollowUpStatusId = status;
    this.showAddDetails = this.selectedFollowUpStatusId === '2092'; // Assigned
    this.fetchFilteredData();
  }
}
