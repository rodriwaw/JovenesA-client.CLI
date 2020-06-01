import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppSharedModule } from '../_shared/_shared.module';
// import { SelfReportsUpdatesComponent } from '../students/self-reports-updates/self-reports-updates.component';
import { AdminsHomeComponent } from './admins-home/admins-home.component';
import { AdminsAddMemberComponent } from './admins-members/admins-add-member/admins-add-member.component';
import { AdminsMemberListComponent } from './admins-members/admins-member-list/admins-member-list.component';
import { AdminsMemberSearchComponent } from './admins-members/admins-member-search/admins-member-search.component';
import { AdminsMemberComponent } from './admins-members/admins-member/admins-member.component';
import { AdminsNavbarComponent } from './admins-navbar/admins-navbar.component';
import { AdminsRoutingModule } from './admins-routing.module';
import { AdminsStudentMRsComponent } from './admins-student-mrs/admins-student-mrs.component';
import { AdminsStudentListComponent } from './admins-students/admins-student-list/admins-student-list.component';
import { AdminsStudentSearchComponent } from './admins-students/admins-student-search/admins-student-search.component';
import { AdminsStudentComponent } from './admins-students/admins-student/admins-student.component';
import { AdminsComponent } from './admins.component';
import { FollowUpEventsAddComponent } from './follow-up-events-add/follow-up-events-add.component';
import { FollowUpRequestsAddComponent } from './follow-up-requests-add/follow-up-requests-add.component';
import { FollowUpRequestsComponent } from './follow-up-requests/follow-up-requests.component';
import { MentorReportsContainerComponent } from './mr-container/mr-container.component';
import { MentorReportsProxyAddComponent } from './mr-proxy/mr-proxy-add.component';
import { MentorReportsStatusCountsComponent } from './mr-status-counts/mr-status-counts.component';
import { MentorReportsSummaryTrackingComponent } from './mr-summary-tracking/mr-summary-tracking.component';
import { MentorReportSummaryUpdatesComponent } from './mr-summary-updates/mr-summary-updates.component';
import { MentorReportsSubmittedComponent } from './reports/mentor-reports-submitted/mentor-reports-submitted.component';
import { ReportsComponent } from './reports/reports.component';
import { ServerEnvironmentComponent } from './reports/server-environment/server-environment.component';
import { SponsorSummariesSentComponent } from './reports/sponsor-summaries-sent/sponsor-summaries-sent.component';
import { SponsorGroupComponent } from './sponsor-group/sponsor-group.component';
import { SponsorGroupsComponent } from './sponsor-groups/sponsor-groups.component';
import { StudentReportsStatusCountsComponent } from './ssr-status-counts/ssr-status-counts.component';

@NgModule({
    imports: [
        AppSharedModule,
        AdminsRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        NgbModule
    ],
    declarations: [
        AdminsComponent,
        AdminsHomeComponent,
        AdminsMemberListComponent,
        AdminsMemberComponent,
        AdminsAddMemberComponent,
        AdminsStudentListComponent,
        AdminsStudentComponent,
        AdminsStudentMRsComponent,
        MentorReportsSummaryTrackingComponent,
        MentorReportsStatusCountsComponent,
        MentorReportSummaryUpdatesComponent,
        MentorReportsContainerComponent,
        MentorReportsProxyAddComponent,
        ServerEnvironmentComponent,
        StudentReportsStatusCountsComponent,
        AdminsNavbarComponent,
        FollowUpRequestsComponent,
        FollowUpRequestsAddComponent,
        FollowUpEventsAddComponent,
        SponsorGroupsComponent,
        SponsorGroupComponent,
        // FollowUpEventsComponent
        ReportsComponent,
        SponsorSummariesSentComponent,
        MentorReportsSubmittedComponent,
        AdminsStudentSearchComponent,
        AdminsMemberSearchComponent


    ],
    exports: [
        AdminsStudentMRsComponent,
        SponsorGroupsComponent
    ],
    entryComponents: [
        SponsorSummariesSentComponent,
        ServerEnvironmentComponent,
        MentorReportsSubmittedComponent]
})
export class AdminsModule { }
