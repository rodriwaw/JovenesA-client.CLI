export class StudentMiniDTO {

  constructor(
    public studentId: number, // StudentID (Primary key)
    public studentName: string, // StudentName
    public statusId?: number, // StatusID
    public studentGUId?: string,
    public email?: string
  ) { }
}
