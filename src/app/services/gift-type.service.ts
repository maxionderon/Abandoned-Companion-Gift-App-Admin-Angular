import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GiftType } from '../model/gift-type';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GiftTypeService {

  url = "http://localhost:8080/giftType";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getGiftTypes(): Observable<GiftType[]> {

    return this.http.get<GiftType[]>(this.url);

  }

  postGiftType(giftType: GiftType): Observable<any> {

    return this.http.post(this.url, giftType, this.httpOptions);
  }

  putGiftType(giftType: GiftType): Observable<any> {

    return this.http.put(this.url + "/" + giftType.id, giftType, this.httpOptions);

  }

  deleteGiftType(id: number): Observable<any> {

    return this.http.delete(this.url + "/" + id);

  }

}