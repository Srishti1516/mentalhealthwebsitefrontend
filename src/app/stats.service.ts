import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  constructor(private http: HttpClient) { }

  AgeMorbidity(){
    return this.http.get("http://127.0.0.1:8000/agemorbiditychart").pipe(map(result => result));
  }
  States(){
    return this.http.get("http://127.0.0.1:8000/statedisorderchart").pipe(map(result => result));
  }
  SuicidalRisk(){
    return this.http.get("http://127.0.0.1:8000/suicidalriskchart").pipe(map(result => result));
  }
  MentalHealth(){
    return this.http.get("http://127.0.0.1:8000/humanresourceschart").pipe(map(result => result));
  }

}
