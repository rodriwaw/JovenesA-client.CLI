export class StudentDTO {
  constructor(
    public studentId: number, // StudentID (Primary key)
    public studentName: string, // StudentName
    public email: string, // Email
    public memberRecordGUId: string,
    public gender: string, // Gender
    public status: string, // Status
    public esStatus: string, // Status
    public activeStatus: number,
    public yearJoinedJa?: number, // YearJoinedJA
    public statusId?: number, // StatusID
    public gradYear?: number, // GradYear
    public gradMonth?: string, // GradMonth
    public gradeRptStatus?: string, // GradeRptStatus
    public gpaStatus?: string, // GPAStatus
    public numericGradeRptStatus?: number,
    public numericGPAStatus?: number,
    public timelyMentorMeetingStatus?: string,
    public timelyMentorReportStatus?: string,
    public numericTimelyMentorMeetingStatus?: number,
    public numericTimelyMentorReportStatus?: number,
    public studentSnapshotStatus?: number,
    public mentorId?: number, // MentorID
    public mentorName?: number, // MentorName
    public sponsorGroupName?: string, // MentorName
    public sponsorGroupId?: string,
    public universityAbbrev?: string,
    public major?: string,
    public tituloIssuedDate?: Date,
    public tituloUploadedDate?: Date,
    public joinedFromId?: number,
    public joinedFrom?: string,
    public photoUrl?: string,
    public studentGUId?: string,
    public mentorGUId?: string,
    public mentorAssignedDate?: Date,
    public mentoringEndDate?: Date,
    public mentoringComment?: string,
    public credentialYear?: number,
    public credentialMonthNum?: number,
    public credentialMonth?: string,
    public probationStartDate?: Date,
    public probationEndDate?: Date,
    public pilotProgram?: string,
    public educationalLevel?: string,
    public currentGradesProcessingPeriodID?: number,
    public entryStartDate?: Date,
    public gradeEntryActiveStatus?: number
  ) {}
}
