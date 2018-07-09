import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { fromPromise } from 'rxjs';
import 'rxjs/Rx';
import * as moment from 'moment';

@Injectable()
export class HttpService {
  private headers: Headers;
  constructor(
    private http: Http, private router: Router
  ) { }

  public get(url: string, successMsg?: string, errorMsg?: string, auth: boolean = true) {
    return this.http.get(url, { headers: this.GetAuthHeaders(auth) })
      .map((res: Response) => {
        // Toast the Success Message
        return res.json();
      })
      .catch((err: Response) => {
        // Toast the Error Message
        return Observable.throw(err);
      });
  }

  public post(url: string, data?: any, successMsg?: string, errorMsg?: string, auth: boolean = true): Observable<Response> {
    return this.http.post(url, data, this.GetAuthHeaders(auth))
      .map((res: Response) => {
        // Toast the Success Message
        return res.json();
      })
      .catch((err: Response) => {
        // Toast the Error Message
        return Observable.throw(err);
      });
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

    return this.http.post(url, formData, { headers: this.GetAuthHeaders(auth) })
      .map((res: Response) => {
        // Toast the Success Message
        return res.json();
      })
      .catch((err: Response) => {
        // Toast the Error Message
        return Observable.throw(err);
      });
  }

  private GetAuthHeaders(auth?: boolean): Headers {
    this.headers = new Headers();
    let token = "asdfjhaskldfhasjkfklsdflkasdf";
    this.headers.append('Authorization', 'bearer ' + token);
    return this.headers;
  }
}
