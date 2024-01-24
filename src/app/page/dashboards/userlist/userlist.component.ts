import { DashboardService } from './../../../service/dashboard.service';
import { Component, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  userlistData: any[] = []
  childVisible: boolean = false;
  selectedCustomerId: string = ''
  selectedCustomerDetail: any[] = []

  constructor(private dashboardService: DashboardService, private el: ElementRef, private renderer: Renderer2) {
  }
  showDialog(customerId: string): void {
    this.selectedCustomerId = customerId
    this.childVisible = true
    const selectedCustomer = this.userlistData.find(user => user.customerId == customerId)
    if(selectedCustomer) {
      this.selectedCustomerDetail.push(selectedCustomer);
    }
  }
  handleCloseDialog(): void { 
    this.childVisible = false
  }

  @HostListener('document:keydown.escape', ['$event'])
  onEscapeKeyPress(event: KeyboardEvent): void {
    // Close the dialog when the "Escape" key is pressed
    this.handleCloseDialog();
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    // Close the dialog when clicking outside of it
    const target = event.target as HTMLElement;
    if (!this.el.nativeElement.contains(target)) {
      this.handleCloseDialog();
    }
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
