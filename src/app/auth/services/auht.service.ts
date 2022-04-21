import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuhtService {
  private loginUserUrl = "http//localhost:4000/api/auth/"
  constructor(private http: HttpClient) { }

  loginUser(user:any){
    return this.http.post<any>(this.loginUserUrl,user);
    }
}
