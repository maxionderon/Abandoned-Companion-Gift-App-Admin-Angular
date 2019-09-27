import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GiftReaction } from '../model/gift-reaction';

@Injectable({
  providedIn: 'root'
})
export class GiftReactionService {

  url = "http://localhost:8080/giftReaction";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getGiftReactions(): Observable<GiftReaction[]>{

    return this.http.get<GiftReaction[]>(this.url);

  }

  postGiftReaction(giftReaction: GiftReaction): Observable<any> {

    return this.http.post(this.url, giftReaction, this.httpOptions);

  }

  putGiftReaction(giftReaction: GiftReaction): Observable<any> {

    return this.http.put(this.url + "/" + giftReaction.id, giftReaction, this.httpOptions);

  }

  deleteGiftReaction(id: number): Observable<any> {

    return this.http.delete(this.url + "/" + id );
    
  }

}
