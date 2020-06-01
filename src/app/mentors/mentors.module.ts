import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StudentHeaderMentorsComponent } from '../mentors/student-header-mentors/student-header-mentors.component';
import { QuarterlyModule } from '../quarterly/quarterly.module';
import { AppSharedModule } from '../_shared/_shared.module';
import { FollowUpRequestsAddComponent } from './follow-up-requests-add/follow-up-requests-add.component';
import { FollowUpRequestsComponent } from './follow-up-requests/follow-up-requests.component';
import { ForumComponent } from './forum/forum.component';
import { MentorsContainerComponent } from './mentors-container/mentors-container.component';
import { MentorsNavbarComponent } from './mentors-navbar/mentors-navbar.component';
import { MentorsProfileComponent } from './mentors-profile/mentors-profile.component';
import { MentorsRoutingModule } from './mentors-routing.module';
import { MentorsComponent } from './mentors.component';
import { MonthlyReports2AddComponent } from './monthly-reports2-add/monthly-reports2-add.component';
import { MonthlyReports2EditComponent } from './monthly-reports2-edit/monthly-reports2-edit.component';
import { MonthlyReports2Component } from './monthly-reports2/monthly-reports2.component';


@NgModule({
    imports: [
        AppSharedModule,
        MentorsRoutingModule,
        QuarterlyModule,
        NgbModule
    ],
    declarations: [
        MentorsComponent,
        MentorsNavbarComponent,
        MentorsContainerComponent,
        MentorsProfileComponent,
        MonthlyReports2Component,
        MonthlyReports2AddComponent,
        MonthlyReports2EditComponent,
        FollowUpRequestsAddComponent,
        FollowUpRequestsComponent,
        ForumComponent,
        StudentHeaderMentorsComponent,
    ],
})

export class MentorsModule { }
