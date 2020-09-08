import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BackendService {

  url:string

  constructor(private http: HttpClient) {
    this.url = environment.url;
  }

  fetchCompany(){
    return this.http.get(this.url+'/company');
  }
}
