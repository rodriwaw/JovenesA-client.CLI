import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FileSystemFileEntry, NgxFileDropEntry } from 'ngx-file-drop';
import { BecaDataService } from '../../data/beca-data.service';
import { SessionService } from '../../services/session.service';
import { UrlService } from '../../services/url.service';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html' // ,
  // styleUrls: ['./app.component.scss']
})
export class FileUploaderComponent {
  public files: NgxFileDropEntry[] = [];
  WebApiPrefix: string;
  errorMessage: string;
  successMessage: string;

  constructor(
    private http: HttpClient,
    private webApiPrefixService: UrlService,
    private session: SessionService,
    private becaData: BecaDataService
  ) {
    // console.log('data service constructor');
    this.WebApiPrefix = webApiPrefixService.getWebApiPrefix();
  }

  public dropped(files: NgxFileDropEntry[]) {
    this.files = files;
    for (const currFile of files) {
      if (currFile.fileEntry.isFile) {
        const fileEntry = currFile.fileEntry as FileSystemFileEntry;

        // interface File extends Blob {
        fileEntry.file((file: File) => {
          console.log('fileEntry relativePath: ' + currFile.relativePath);
          console.log('filEntry.name: ', file.name);
          console.log('filEntry.size: ', file.size);

          const frmData = new FormData();
          frmData.append('file', file);
          // frmData.append('studentGUID', this.session.getStudentRecordGUId());
          this.becaData.uploadStudentGradesReport(frmData, this.session.getStudentRecordGUId()).subscribe(
            // this.becaData.uploadStudentGradesReport(frmData).subscribe(
            () => {
              this.successMessage = 'Changes were saved successfully.';
              window.scrollTo(0, 0);
              window.setTimeout(() => {
                this.successMessage = '';
              }, 3000);
            },
            (error) => {
              this.errorMessage = error;
            }
          );
        });
      }
    }
  }

  public fileOver(event) {
    console.log(event);
  }

  public fileLeave(event) {
    console.log(event);
  }
}
