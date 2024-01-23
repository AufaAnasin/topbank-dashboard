import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})


export class DashboardService {
  endpoint: string = '';
  private dashboardData:any[] = []
  private accountAmountServiceData: any[] = []
  private userlistData: any[] = []

  constructor(private http: HttpClient) { }

  getDashboardData(endpoint: string): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json')
    const dataUrl: string = `https://dia.ideaco.co.id:8787/api/v1/dashboard/${endpoint}`
    return this.http.get<any>(dataUrl, {headers})
  }

  setDashboardData(data: any) {
    this.dashboardData = []
    this.dashboardData.push(data)
  }

  getDashboardDataset() {
    return this.dashboardData
  }

  setAccountAmountData(data: any) {
    this.accountAmountServiceData = []
    this.accountAmountServiceData.push(data)
  }
  getAccountAmountData() {
    return this.accountAmountServiceData
  }

  getUserlistData(endpoint: string): Observable<any> { 
    const headers = new HttpHeaders().set('Content-Type', 'application/json')
    const dataUrl: string = `https://dia.ideaco.co.id:8787/api/v1/customers${endpoint}`
    return this.http.get<any>(dataUrl, {headers})
  }

  setUserlistData(data: any) {
    this.userlistData = []
    this.userlistData.push(data)
  }

  getUserlistDataset() {
    return this.userlistData
  }
}
