import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { LatestMentorReports } from '../report-models/latest-mentor-reports';
import { LatestMentorReports2 } from '../report-models/latest-mentor-reports2';
import { LatestStudentLetters } from '../report-models/latest-student-letters';
import { LatestStudentLetters2 } from '../report-models/latest-student-letters2';
//import { AuthHttp } from 'angular2-jwt/angular2-jwt';
import { UrlService } from '../../../app_shared/services/url.service';
import { SponsorSummaryStatusCount } from '../report-models/sponsor-summary-status-count';
import { SponsorSummarySentCount } from '../report-models/sponsor-summary-sent-count';


@Injectable()
export class SqlReports {
  WebApiPrefix: string;

  constructor(private http: HttpClient,
    private webApiPrefixService: UrlService) {
    console.log('sqlReports constructor');
    this.WebApiPrefix = webApiPrefixService.getWebApiPrefix();
}

  public getLatestMentorReports(): Observable <LatestMentorReports[]>  {
    const url = this.WebApiPrefix + 'reports/latest_mentor_reports';
    console.log('sending AuthHttp get request for LatestMentorReports with ' + url);
    return this.http.get(url)
      .catch(this.handleError);
  }

  public getLatestMentorReports2(): Observable <LatestMentorReports2[]>  {
    const url = this.WebApiPrefix + 'reports/latest_mentor_reports2';
    console.log('sending AuthHttp get request for LatestMentorReports with ' + url);
    return this.http.get(url)
      .catch(this.handleError);
  }


  public getLatestStudentLetters(): Observable <LatestStudentLetters[]>  {
    const url = this.WebApiPrefix + 'reports/latest_student_letters';
    console.log('sending AuthHttp get request for LatestStudentLetters with ' + url);
    return this.http.get(url)
      .catch(this.handleError);
  }

  public getLatestStudentLetters2(): Observable <LatestStudentLetters2[]>  {
    const url = this.WebApiPrefix + 'reports/latest_student_letters2';
    console.log('sending AuthHttp get request for LatestStudentLetters2 with ' + url);
    return this.http.get(url)
      .catch(this.handleError);
  }

  public getSponsorSummaryStatusCounts(): Observable <SponsorSummaryStatusCount[]>  {
    const url = this.WebApiPrefix + 'reports/sponsor_summary_status_counts';
    console.log('sending AuthHttp get request for SponsorSummaryStatusCounts with ' + url);
    return this.http.get(url)
      .catch(this.handleError);
  }

  public getSponsorSummarySentCounts(): Observable <SponsorSummarySentCount[]>  {
    const url = this.WebApiPrefix + 'reports/sponsor_summary_sent_counts';
    console.log('sending AuthHttp get request for SponsorSummarSentCounts with ' + url);
    return this.http.get(url)
      .catch(this.handleError);
  }


  private handleError (error: any) {
    console.log('sqlResource handle error');
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    if (errMsg === 'No JWT present or has expired') {
      window.alert('Session has expired, please log in again.');
    }
    return Observable.throw(errMsg);
  }

}




