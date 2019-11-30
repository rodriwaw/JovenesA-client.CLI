import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { StudentSelectedService } from '../../_shared/services/student-selected.service';

@Component({
  selector: 'app-student-header-quarterly',
  templateUrl: './student-header-quarterly.component.html'
})
export class StudentHeaderQuarterlyComponent implements OnInit, OnDestroy {


  photoPathName: string;
  private subscription: Subscription;
  public studentGUId: string;

  constructor(
    public router: Router,
    private studentSelected: StudentSelectedService
  ) {
    console.log('hi from student-header constructor');

  }

  ngOnInit() {
    this.subscribeForStudentGUIds();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  subscribeForStudentGUIds() {
    // console.log('header set up studentGUId subscription');
    this.subscription = this.studentSelected.subscribeForStudentGUIds()
      // .pipe(takeWhile(() => this.notDestroyed))
      .subscribe(message => {
        this.studentGUId = message;
        console.log('header new StudentGUId received' + this.studentGUId);
        // console.log('subscribe next ' + this.studentSelected.getInternalSubject().observers.length);
      });
  }

  public onPhotoPathNameSet(photoPathName: string) {
    this.photoPathName = photoPathName;
    // console.log('parent studentHeader has onPhotoPathNameSet called with' + photoPathName);
  }




}
