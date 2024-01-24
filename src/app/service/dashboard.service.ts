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

  // get users list data

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

  // get userlist by id 
  updateUserDataById(userId: number, updateData: any): Observable<any> {
    const dataUrl: string = `https://dia.ideaco.co.id:8787/api/v1/customers/${userId}`
    console.log("Inputted User ID", userId)
    console.log("Inputted Update Data", updateData)
    return this.http.put<any>(dataUrl, updateData)
  }
}
