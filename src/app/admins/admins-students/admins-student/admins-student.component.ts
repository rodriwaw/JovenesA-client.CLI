import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SqlResource } from 'src/app/app_shared/services/sql-resource.service';
import { StudentDataService } from 'src/app/app_shared/services/student-data.service';
import { constants } from '../../../app_shared/constants/constants';
import { SELECTITEM } from '../../../app_shared/interfaces/SELECTITEM';
import { Student } from '../../../app_shared/models/student';
import { StudentDTO } from '../../../app_shared/models/studentDTO';
import { SessionService } from '../../../app_shared/services/session.service';

@Component({
  selector: 'app-admins-student-profile',
  templateUrl: './admins-student.component.html',
  styleUrls: ['./admins-student.component.css'],
})
export class AdminsStudentComponent implements OnInit {
  myForm: FormGroup;
  data: Object;
  isLoading: boolean;
  submitted: boolean;
  bReadOnly = true;

  studentStatuses: SELECTITEM[];
  languageStatuses: SELECTITEM[];
  joinedFromTypes: SELECTITEM[];
  joinedYears: SELECTITEM[];
  gradYears: SELECTITEM[];
  gradMonths: SELECTITEM[];
  genders: SELECTITEM[];
  prepas: SELECTITEM[];
  universities: SELECTITEM[];
  sponsorGroups: SELECTITEM[];
  mentors: SELECTITEM[];

  errorMessage: string;
  successMessage: string;
  // firstNames: string;
  // lastNames: string;
  student: Student;
  studentDTO: StudentDTO;
  photoPathName: string;
  studentIdParam: number;
  studentGUIdParam: string;
  sponsorGroupIdParam: number;
  emojiPathname: string;
  readonly smileys: string[] = constants.smileys;
  showEditLink = false;


  constructor(
    public currRoute: ActivatedRoute,
    private router: Router,
    private session: SessionService,
    public studentData: StudentDataService,
    public sqlResource: SqlResource,
    public formBuilder: FormBuilder,
    public location: Location
  ) {
    console.log('hi from MyForm.component constructor');
    this.languageStatuses = constants.languageStatuses;
    this.studentStatuses = constants.studentStatuses;
    this.joinedFromTypes = constants.joinedFromTypes;
    this.joinedYears = constants.joinedYears;
    this.gradYears = constants.gradYears;
    this.gradMonths = constants.months;
    this.genders = constants.genders;
    this.prepas = this.fetchPrepas();
    this.universities = this.fetchUniversities();
    this.sponsorGroups = this.fetchSponsorGroups();
    // this.mentors = this.fetchMentors();

    this.myForm = formBuilder.group({
      studentId: '',
      firstNames: ['',
        Validators.compose([Validators.required, Validators.maxLength(30)])],
      lastNames: [{ value: '' },
      Validators.compose([Validators.required, Validators.maxLength(30)])],
      email: [{ value: '' },
      Validators.compose([Validators.required, Validators.email, Validators.maxLength(50)])],
      cellPhone: [{ value: '' },
      Validators.compose([Validators.minLength(7), Validators.maxLength(13)])],
      homePhone: [{ value: '' },
      Validators.compose([Validators.minLength(7), Validators.maxLength(13)])],
      nickName: [{ value: '' }, Validators.maxLength(20)],
      photoUrl: [{ value: '' }, Validators.maxLength(255)],
      gender: ['',
        Validators.compose([Validators.required, Validators.maxLength(1)])],
      ja_Id: [{ value: '' }],
      emergencyContactPhone: [{ value: '' },
      Validators.compose([Validators.minLength(7), Validators.maxLength(13)])],
      emergencyContactName: [{ value: '' }],
      major: [{ value: '' }],
      englishSkillLevelId: [{ value: '' }],
      statusId: [{ value: '' }],
      yearJoinedJa: [{ value: '', }],
      joinedFromId: [{ value: '' }],
      prepaId: [{ value: '' }],
      universityId: [{ value: '' }],
      gradYear: [{ value: '' }],
      gradMonthNum: [{ value: '' }],
      curp: [{ value: '' }],
      rfc: [{ value: '' }],
      bankAccount: [{ value: '' }],
      sponsorGroupId: [{ value: '' }],
      mentorGUId: [{ value: '' }],
      studentGUId: [{ value: '' }],
      mentorName: ['']
      // inputInitialInterview: [{value: ''}, Validators.maxLength(2000)],
      // studentStory: [{value: ''}, Validators.maxLength(2000)],
    });
    this.myForm.disable();

    this.student = new Student();

    this.errorMessage = '';
    this.successMessage = '';
    this.submitted = false;
  }

  ngOnInit() {
    console.log('admins Student ngOnInit');
    this.studentGUIdParam = this.currRoute.snapshot.params['guid'];
    console.log('sqlResource with studentGUIdParam: ' + this.studentGUIdParam);
    this.fetchStudentDTOData();
  }

  fetchStudentDTOData() {
    // console.log('sqlResource for getStudents: ' +
    //        'status: ' + this.selectedStatus + ' ' +
    //        'yearjoined: ' + this.selectedYearJoined +  + ' ' +
    //        'gradyear: ' + this.selectedGradYear
    //        );
    this.isLoading = true;
    this.studentData.getStudentDTOViaGUID(this.studentGUIdParam)
      .subscribe(
        data => {
          this.studentDTO = data;
          console.log('#############studentAsMemberGUId ' + this.studentDTO.studentAsMemberGUId);
          this.studentDTO = this.getNumericStatus(this.studentDTO);
        },
        err => { this.errorMessage = err; },
        () => {
          console.log('studentDTO data loaded');
          console.log(JSON.stringify(this.studentDTO));
          this.isLoading = false;
          this.fetchStudentData();
        }
      );
  }



  fetchStudentData() {
    this.isLoading = true;
    this.studentData.getStudentViaGUID(this.studentGUIdParam)
      .subscribe(
        data => {
          this.student = data;
          this.photoPathName = '../../../../assets/images/StudentPhotos/' + this.student.yearJoinedJa;
          this.photoPathName = this.photoPathName + '/' + this.student.photoUrl;
          // this.photoPathName = this.photoPathName + '/' + 'CADENA RÍOS, CARLOS ANTONIO.jpg';
          console.log('photoPathName is ' + this.photoPathName);
          console.log(this.student);
          // this.sponsorGroupIdParam = this.student.sponsorGroupId;
          this.emojiPathname = this.smileys[this.studentDTO.studentSnapshotStatus + 1];
          console.log('emoji is ' + this.emojiPathname);
        },
        err => console.error('Subscribe error: ' + err),
        () => {
          console.log('getStudent is done now set timeout for scroll');
          this.setFormValues(this.student);
          setTimeout(() => {
            this.scrollIntoView();
          }, 0);
          this.isLoading = false;
        });

    this.myForm.valueChanges.subscribe(
      (form: any) => {
        this.errorMessage = '';
        this.successMessage = '';
        this.submitted = false;
      }
    );

    this.myForm.controls.sponsorGroupId.valueChanges.subscribe(newId => {
      console.log('have new sponsorGroupId: ' + newId);
      this.sponsorGroupIdParam = newId;
    });

  }


  setFormValues(student: Student) {
    console.log('setFormValues');
    console.log('gender: ' + student.gender);
    this.myForm.setValue({
      studentId: student.studentId,
      firstNames: student.firstNames,
      lastNames: student.lastNames,
      email: student.email,
      gender: student.gender,
      cellPhone: student.cellPhone,
      homePhone: student.homePhone,
      nickName: student.nickName,
      photoUrl: student.photoUrl,
      ja_Id: student.ja_Id,
      emergencyContactPhone: student.emergencyContactPhone,
      emergencyContactName: student.emergencyContactName,
      major: student.major,
      englishSkillLevelId: student.englishSkillLevelId,
      statusId: student.statusId,
      yearJoinedJa: student.yearJoinedJa,
      joinedFromId: student.joinedFromId,
      prepaId: student.prepaId,
      universityId: student.universityId,
      gradYear: student.gradYear,
      gradMonthNum: student.gradMonthNum,
      curp: student.curp,
      rfc: student.rfc,
      bankAccount: student.bankAccount,
      sponsorGroupId: student.sponsorGroupId,
      mentorGUId: student.mentorGUId,
      studentGUId: student.studentGUId,
      mentorName: this.studentDTO.mentorName
    });
  }

  retrieveFormValues(): void {
    this.student = this.myForm.value;

    // const ctls = this.myForm.controls;
    // this.student.firstNames = ctls.firstNames.value;
    // this.student.lastNames = ctls.lastNames.value;
    // this.student.email = ctls.email.value;

  }


  scrollIntoView() {

    const element = document.body;
    if (element) {
      element.scrollIntoView(true);
    }
  }

  saveMyForm(): boolean {
    console.log('saving admin student ');
    this.isLoading = true;
    this.retrieveFormValues();
    this.studentData.updateStudent(this.student)
      .subscribe(
        (student) => {
          // console.log('subscribe result in updateStudent');
          // need timeout to avoid "Expression has changed error"
          window.setTimeout(() => {
            this.successMessage = 'Changes were saved successfully.';
          }, 0);
          // this.successMessage = 'Changes were saved successfully.';
          this.submitted = true;
          this.isLoading = false;
          window.scrollTo(0, 0);
          window.setTimeout(() => {// console.log('clearing success message');
            this.successMessage = '';
          }, 3000);
        },
        (error) => {
          this.errorMessage = <any>error;
          this.isLoading = false;
        }
      );
    // prevent default action of reload
    return false;
  }

  backToStudentsList() {
    this.router.navigate(['/admins/students']);
  }

  mentorReportsReview() {
    const guid = this.currRoute.snapshot.params['guid'];
    this.router.navigate(['/admins/students/student/mentorReports/' + guid + '/' + this.student.firstNames + ' ' + this.student.lastNames]);
  }

  public hasChanges() {
    // if have changes then ask for confirmation
    // ask if form is dirty and has not just been submitted
    console.log('hasChanges has submitted ' + this.submitted);
    console.log('hasChanges has form dirty ' + this.myForm.dirty);
    console.log('hasChanges net is ' + this.myForm.dirty || this.submitted);
    return this.myForm.dirty && !this.submitted;
  }

  gotoMemberRecord() {

    const link = ['/admins/members/member/' + this.studentDTO.studentAsMemberGUId];
    console.log('navigating to ' + link);
    this.router.navigate(link);
  }

  gotoGradeHistory() {
    const id = this.currRoute.snapshot.params['id'];
    const link = ['/admins/students/grade-history/' + id + '/'];
    this.router.navigate(link);
  }
  setReadOnly() {
    console.log('toggle readOnly');
    if (this.myForm.enabled) {
      this.myForm.disable();
      this.showEditLink = false;
    } else {
      this.myForm.enable();
      this.showEditLink = true;
    }
  }

  fetchPrepas(): SELECTITEM[] {
    this.sqlResource.getPrepaNames()
      .subscribe(
        data => { this.prepas = data; console.log('getPrepaNames'); console.log(this.prepas[0]); },
        err => console.error('Subscribe error: ' + err),
        () => {
        }
      );
    return this.prepas;
  }

  fetchUniversities(): SELECTITEM[] {
    this.sqlResource.getUniversityNames()
      .subscribe(
        data => { this.universities = data; console.log('getUniversityNames'); console.log(this.universities[0]); },
        err => console.error('Subscribe error: ' + err),
        () => {
        }
      );
    return this.universities;
  }

  fetchSponsorGroups(): SELECTITEM[] {
    this.sqlResource.getSponsorGroups()
      .subscribe(
        data => { this.sponsorGroups = data; console.log('getSponsorGroups'); console.log(this.sponsorGroups[0]); },
        err => console.error('Subscribe error: ' + err),
        () => {
        }
      );
    return this.sponsorGroups;
  }

  fetchMentors(): SELECTITEM[] {
    this.sqlResource.getMentorNamesByGUId()
      .subscribe(
        data => { this.mentors = data; console.log('getMentorNames'); console.log(this.mentors[0]); },
        err => console.error('Subscribe error: ' + err),
        () => {
        }
      );
    return this.mentors;
  }
  getNumericStatus(studentDTO: StudentDTO): StudentDTO {

    studentDTO.numericTimelyMentorMeetingStatus = 0;
    if (studentDTO.timelyMentorMeetingStatus === 'red') {
      studentDTO.numericTimelyMentorMeetingStatus = 1;
    } else if (studentDTO.timelyMentorMeetingStatus === 'yellow') {
      studentDTO.numericTimelyMentorMeetingStatus = 2;
    } else if (studentDTO.timelyMentorMeetingStatus === 'green') {
      studentDTO.numericTimelyMentorMeetingStatus = 3;
    }

    studentDTO.numericTimelyMentorReportStatus = 0;
    if (studentDTO.timelyMentorReportStatus === 'red') {
      studentDTO.numericTimelyMentorReportStatus = 1;
    } else if (studentDTO.timelyMentorReportStatus === 'yellow') {
      studentDTO.numericTimelyMentorReportStatus = 2;
    } else if (studentDTO.timelyMentorReportStatus === 'green') {
      studentDTO.numericTimelyMentorReportStatus = 3;
    }


    studentDTO.numericGradeRptStatus = 0;
    if (studentDTO.gradeRptStatus === 'red') {
      studentDTO.numericGradeRptStatus = 1;
    } else if (studentDTO.gradeRptStatus === 'yellow') {
      studentDTO.numericGradeRptStatus = 2;
    } else if (studentDTO.gradeRptStatus === 'green') {
      studentDTO.numericGradeRptStatus = 3;
    }

    studentDTO.numericGPAStatus = 0;
    if (studentDTO.gpaStatus === 'red') {
      studentDTO.numericGPAStatus = 1;
    } else if (studentDTO.gpaStatus === 'yellow') {
      studentDTO.numericGPAStatus = 2;
    } else if (studentDTO.gpaStatus === 'green') {
      studentDTO.numericGPAStatus = 3;
    }

    studentDTO.joinedFrom = 'N/A';
    if (studentDTO.joinedFromId === 2056) {
      studentDTO.joinedFrom = 'Prepa';
    } else if (studentDTO.joinedFromId === 2057) {
      studentDTO.joinedFrom = 'Univ';
    }

    return studentDTO;
  }


}
