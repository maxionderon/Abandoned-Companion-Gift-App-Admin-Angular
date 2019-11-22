import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Companion } from '../../model/companion';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompanionService {
  url = environment.baseURL + "/companion";
  

  constructor(private http: HttpClient) { }

  getCompanions(token: string): Observable<Companion[]> {

    return this.http.get<Companion[]>(this.url, this.getHttpOptions(token));
    
  }

  postCompanion(companion: Companion, token: string): Observable<Companion[]> {

    return this.http.post<Companion[]>(this.url, companion, this.getHttpOptions(token));

  }

  deleteCompanion(companion: Companion, token: string): Observable<Companion[]> {

    return this.http.delete<Companion[]>(this.url + "/" + companion.id, this.getHttpOptions(token));

  }

  getHttpOptions(token: string) {

    let headers: HttpHeaders = new HttpHeaders();

    headers = headers.set('Content-Type', 'application/json');
    headers = headers.set( environment.recaptchaResponseHeaderString, token);

    return { headers };

  }

}
