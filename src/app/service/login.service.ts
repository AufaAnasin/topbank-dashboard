import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private isAuthenticated = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) { }

  login(email: string, password: string):Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json')
    const loginUrl: string = `https://dia.ideaco.co.id:8787/api/v1/admin/auth?email=${email}&password=${password}`
    return this.http.get<any>(loginUrl, {headers})
  }

  logout(): void {
    this.isAuthenticated.next(false)
  }

  getIsAuthenticated(): BehaviorSubject<boolean> {
    return this.isAuthenticated
  }

}
