import { DashboardService } from './../../../service/dashboard.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminlist',
  templateUrl: './adminlist.component.html',
  styleUrls: ['./adminlist.component.css']
})
export class AdminlistComponent implements OnInit {
  adminlistData: any[] = []
  childVisible: boolean = false
  selectedAdminId: number = 0
  addAdminVisible: boolean = false;

  //pagination
  currentPage: number = 1;
  pageSize: number = 10; 
  totalPages: number = 0;
  totalData: number = 0; 

  constructor(private dashboardService: DashboardService) {}

  // delete dialog
  showDialog(adminId: number): void { 
    this.selectedAdminId = adminId
    this.childVisible = true
  }

  handleCloseDialog(): void { 
    this.childVisible = false
  }

  showAddAdmin() { 
    this.addAdminVisible = true
  }

  ngOnInit(): void {
    this.loadAdminDataList();
  }

  loadAdminDataList(): void {
    event?.preventDefault()
    // Calculate the start index based on the current page and page size
    const startIndex = (this.currentPage - 1) * this.pageSize;

    this.dashboardService.getAdminListData(``).subscribe((response) => {
      this.adminlistData = response.data.slice(startIndex, startIndex + this.pageSize);
      this.totalData = response.data.length;
      this.totalPages = Math.ceil(this.totalData / this.pageSize);
    });
  }

  // pagination 

  previousPage() { 
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadAdminDataList();
    }
  }

  nextPage() { 
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.loadAdminDataList();
    }
  }

  getStartIndex(): number {
    return (this.currentPage - 1) * this.pageSize + 1;
  }

  getEndIndex(): number {
    return Math.min(this.currentPage * this.pageSize, this.totalData);
  }


}
