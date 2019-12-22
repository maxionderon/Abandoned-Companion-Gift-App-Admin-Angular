import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiIsAvailableService {

  url = environment.baseURL + "/";

  constructor(private http: HttpClient) { }

  getApiIsAvailable( token: string): Observable<any> {

    const header = this.getHttpOptions(token);

    return this.http.get( this.url, this.getHttpOptions(token));

  }

  getHttpOptions(token: string) {

    let headers: HttpHeaders = new HttpHeaders();

    headers = headers.set('Content-Type', 'text/plain; charset=utf-8');
    headers = headers.set( environment.recaptchaResponseHeaderString, token);

    return { headers: headers, responseType: 'text' as 'text' };

  }

}
