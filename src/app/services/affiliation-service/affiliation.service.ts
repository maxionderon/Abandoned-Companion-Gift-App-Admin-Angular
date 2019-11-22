import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Affiliation } from '../../model/affiliation';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AffiliationService {

  url = environment.baseURL + "/affiliation";

  constructor(private http: HttpClient) { }

  getAffiliations( token: string): Observable<Affiliation[]> { 
         
    return this.http.get<Affiliation[]>(this.url, this.getHttpOptions(token) );

  }

  postAffiliation(affiliation: Affiliation, token: string): Observable<Affiliation[]> {

    return this.http.post<Affiliation[]>(this.url, affiliation, this.getHttpOptions(token));
    
  }

  putAffiliation(affiliation: Affiliation, token: string): Observable<Affiliation[]> {

    return this.http.put<Affiliation[]>(this.url + "/" + affiliation.id, affiliation, this.getHttpOptions(token));

  }

  deleteAffiliation(id: number, token: string): Observable<Affiliation[]> {

    return this.http.delete<Affiliation[]>(this.url + "/" + id, this.getHttpOptions(token));

  }

  getHttpOptions(token: string) {

    let headers: HttpHeaders = new HttpHeaders();

    headers = headers.set('Content-Type', 'application/json');
    headers = headers.set( environment.recaptchaResponseHeaderString, token);

    return { headers };

  }
  

}
