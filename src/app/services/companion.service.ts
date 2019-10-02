import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Companion } from '../model/companion';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanionService {
  url = "http://localhost:8080/companion";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getCompanions(): Observable<Companion[]> {

    return this.http.get<Companion[]>(this.url, this.httpOptions);
    
  }

  postCompanion(companion: Companion): Observable<Companion[]> {

    return this.http.post<Companion[]>(this.url, companion, this.httpOptions);

  }
  
}
