import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class StudentSelectedService {
  private subject = new BehaviorSubject<string>('0000');

  subscribeForStudentGUIds(): Observable<string> {
    console.log('studentSelectedService has ' + this.subject.observers + ' observables');
    return this.subject.asObservable();
  }

  notifyNewStudentGUId(message: string) {
    this.subject.next(message);
  }

  getLatestStudentGUId(): string {
    return this.subject.getValue();
  }

  unsubscribe() {
    this.subject.complete();
  }

  getInternalSubject() {
    return this.subject;
  }

}
