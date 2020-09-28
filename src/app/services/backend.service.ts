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

  fetchStock(){
    return this.http.get('assets/data/stick.json')
  }

  fetchCompany(){
    var userId = localStorage.getItem('userId');
    console.log('local userId:'+userId);
    // return this.http.get(this.url+'/company?userId='+userId);
    return this.http.get('assets/data/nasdaq.json')
  }
}
