import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Urls } from './urls';

@Injectable({
  providedIn: 'root'
})
export class ServeService {

  login (user: {email: string, passwd: string}) {
    console.log(Urls.log);
    return this.http.get(Urls.log, { params: user });
  }

  constructor(
    private http: HttpClient
  ) { }
}
