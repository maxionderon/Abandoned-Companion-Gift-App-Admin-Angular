import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GiftType } from '../../model/gift-type';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GiftTypeService {

  url =  environment.baseURL + "/giftType";

  constructor(private http: HttpClient) { }

  getGiftTypes(token: string): Observable<GiftType[]> {

    return this.http.get<GiftType[]>(this.url, this.getHttpOptions(token));

  }

  postGiftType(giftType: GiftType, token: string): Observable<GiftType[]> {

    return this.http.post<GiftType[]>(this.url, giftType, this.getHttpOptions(token));
  }

  putGiftType(giftType: GiftType, token: string): Observable<GiftType[]> {

    return this.http.put<GiftType[]>(this.url + "/" + giftType.id, giftType, this.getHttpOptions(token));

  }

  deleteGiftType(id: number, token: string): Observable<GiftType[]> {

    return this.http.delete<GiftType[]>(this.url + "/" + id, this.getHttpOptions(token));

  }

  getHttpOptions(token: string) {

    let headers: HttpHeaders = new HttpHeaders();

    headers = headers.set('Content-Type', 'application/json');
    headers = headers.set( environment.recaptchaResponseHeaderString, token);

    return { headers };

  }

}