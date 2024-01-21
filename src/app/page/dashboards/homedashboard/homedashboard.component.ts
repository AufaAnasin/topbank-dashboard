import { DashboardService } from './../../../service/dashboard.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-homedashboard',
  templateUrl: './homedashboard.component.html',
  styleUrls: ['./homedashboard.component.css']
})
export class HomedashboardComponent implements OnInit {
  data: any; 
  options: any;
  adminData: any[];
  dashboardData: any;

  constructor(private userService: UserService, private dashboardService: DashboardService){
    this.adminData = this.userService.getUserIdentity();
    console.log(this.adminData[0])
  }


  loadData() { 
    this.dashboardService.getDashboardData("account-purpose-summary").subscribe(
        (response) => {
            this.dashboardData = response.data
            console.log(this.dashboardData)
            this.processDashboardData();
        }, 
        (error) => {
            console.log(error)
        }
    )
  }

  processDashboardData() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    // Extract purposeName values from the detail array
    const labels = this.dashboardData.detail.map((item: { purposeName: any; }) => item.purposeName);

    // Set up 'data' and 'options' properties
    this.data = {
      labels: labels,
      datasets: [
        {
          data: this.dashboardData.detail.map((item: { count: any; }) => item.count),
          backgroundColor: [documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--green-500')],
          hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--green-400')]
        }
      ]
    };

    this.options = {
      cutout: '60%',
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      }
    };
  }

  ngOnInit() {
    this.loadData();
  }

}
