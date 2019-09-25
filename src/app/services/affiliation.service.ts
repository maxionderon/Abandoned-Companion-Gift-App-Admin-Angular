import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Affiliation } from '../model/affiliation';

@Injectable({
  providedIn: 'root'
})
export class AffiliationService {

  url = "http://localhost:8080/affiliation";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getAffiliations(): Observable<Affiliation[]> {

    return this.http.get<Affiliation[]>(this.url);

  }

  postAffiliation(affiliation: Affiliation): Observable<any> {

    return this.http.post(this.url, affiliation, this.httpOptions);
    
  }

  deleteAffiliation(id: number): Observable<any> {

    return this.http.delete(this.url + "/" + id);

  }
  

}
