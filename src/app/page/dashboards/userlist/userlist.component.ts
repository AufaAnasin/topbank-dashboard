import { DashboardService } from './../../../service/dashboard.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  userlistData: any[] = []
  childVisible: boolean = false;
  selectedCustomerName: string = ''

  constructor(private dashboardService: DashboardService) {

  }
  showDialog(customerName: string): void {
    this.selectedCustomerName = customerName 
    this.childVisible = true
  }
  handleCloseDialog(): void { 
    this.childVisible = false
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData():void { 
    this.dashboardService.getUserlistData(``).subscribe((response) => {
      this.userlistData = response.data
      console.log(this.userlistData)
    })
  }

}
