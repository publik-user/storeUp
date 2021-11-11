import { FileUDService } from './file-ud.service';
import { Component } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private FileUDService: FileUDService) { }

  title = 'storeUp';

  public upload(event: { target: { files: File[]; }; }): any {
    const file: File = event.target.files[0];
    this.FileUDService.uploadFile(file).subscribe((response: any) => {
      window.alert(response);
    }, (error: HttpErrorResponse) => {
      window.alert("somethin went wrong");
    })
  }
}
