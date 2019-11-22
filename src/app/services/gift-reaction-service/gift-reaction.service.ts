import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GiftReaction } from '../../model/gift-reaction';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GiftReactionService {

  url = environment.baseURL + "/giftReaction";
  
  constructor(private http: HttpClient) { }

  getGiftReactions(token: string): Observable<GiftReaction[]>{

    return this.http.get<GiftReaction[]>(this.url, this.getHttpOptions(token));

  }

  postGiftReaction(giftReaction: GiftReaction, token: string): Observable<GiftReaction[]> {

    return this.http.post<GiftReaction[]>(this.url, giftReaction, this.getHttpOptions(token));

  }

  putGiftReaction(giftReaction: GiftReaction, token: string): Observable<GiftReaction[]> {

    return this.http.put<GiftReaction[]>(this.url + "/" + giftReaction.id, giftReaction, this.getHttpOptions(token));

  }

  deleteGiftReaction(id: number, token: string): Observable<GiftReaction[]> {

    return this.http.delete<GiftReaction[]>(this.url + "/" + id, this.getHttpOptions(token) );
    
  }

  getHttpOptions(token: string) {

    let headers: HttpHeaders = new HttpHeaders();

    headers = headers.set('Content-Type', 'application/json');
    headers = headers.set('recaptcha-response', token);

    return { headers };

  }

}
