import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpEvent, HttpParams, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUDService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  uploadFile(file: File): Observable<any> {
    const data: FormData = new FormData();
    data.append('file', file);
    data.append('limit', '10');
    let params = new HttpParams();
    const options = {
      params: params,
      reportProgress: true
    };
    return this.http.post<any>(`${this.apiServerUrl}/file/upload`, data, options);

  }
}
