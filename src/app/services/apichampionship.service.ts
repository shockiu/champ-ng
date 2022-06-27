import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../environments/environment';
import { environment as envProd } from '../../environments/environment.prod';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApichampionshipService {
  
  private URLAPIDEV: string = env.urlApiChamp;
  private URLAPIPROD: string = envProd.urlApiChamp;

 /**
  * 
  * @param http { HttpClient }
  */
  constructor(
    private http: HttpClient
  ) { }

  getReq(path: string, params: any): Observable<any> {
    return this.http.get<any>(`${this.URLAPIDEV}${path}`, {
      params
    });
  }

  postReq(path: string, ...additionalReq: any): Observable<any> {
    const { obj } = additionalReq
    return this.http.post<any>(`${this.URLAPIDEV}${path}`, obj);
  }

  putReq(path: string, ...additionalReq: any): Observable<any> {
     const { obj } = additionalReq
    return this.http.put<any>(`${this.URLAPIDEV}${path}`, obj);
  }

  deleteReq(path: string): Observable<any> {
    return this.http.get<any>(`${this.URLAPIDEV}${path}`);
  }
}
