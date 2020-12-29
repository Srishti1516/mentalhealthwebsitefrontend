import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpClient) { }

  Report(email){
    return this.http.get("http://127.0.0.1:8000/mentalhealthchart/"+email).pipe(map(result => result));
  }
}
