import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable()
export class HttpService {
  private _options;


  constructor(private http: HttpClient, private router: Router) {

  }

  public get(url: string, successMsg?: string, errorMsg?: string, auth: boolean = true): Observable<Response> {
    return this.http.get(environment.apiUrl + url, this.GetAuthHeaders(auth))
      .pipe(
        map((res: Response) => {
          return res;
        }),
        catchError((err: Response) => {
          // Toast the Error Message
          return Observable.throw(err);
        }));
  }

  public post(url: string, data?: any, successMsg?: string, errorMsg?: string, auth: boolean = true): Observable<Response> {
    return this.http.post(environment.apiUrl + url, data, this.GetAuthHeaders(auth))
      .pipe(
        map((res: Response) => {
          // Toast the Success Message
          return res;
        })
        , catchError((err: Response) => {
          // Toast the Error Message
          return Observable.throw(err);
        }));
  }

  private GetAuthHeaders(auth?: boolean) {
    if (auth) {
      const token = '5b433443529edc5997948a96';
      this._options = {
        headers: new HttpHeaders({
          'x-apikey': token,
          'Content-Type': 'application/json'
        })
      };
    }
    return this._options;
  }
}
