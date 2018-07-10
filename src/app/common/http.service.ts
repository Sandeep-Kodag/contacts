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
    debugger;
    return this.http.get(environment.apiUrl + url, this.GetAuthHeaders(auth))
      .pipe(
        map((res: Response) => {
          // Toast the Success Message
          return res;
        }),
        catchError((err: Response) => {
          debugger;
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

  public upload(url: string, data?: any, files?: File[], successMsg?: string, errorMsg?: string, auth: boolean = true) {
    let headers = new Headers();
    let formData: FormData = new FormData();

    if (files !== undefined && files !== null && files.length > 0) {
      let i;
      for (i = 0; i < files.length; i++) {
        formData.append('files', files[i], files[i].name);
      }
    }

    if (data !== '' && data !== undefined && data !== null) {
      for (let property in data) {
        if (data.hasOwnProperty(property)) {
          formData.append(property, data[property]);
        }
      }
    }

    return this.http.post(environment.apiUrl + url, formData, this.GetAuthHeaders(auth))
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
    debugger;
    if (auth) {
      let token = '5b433443529edc5997948a96';
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
