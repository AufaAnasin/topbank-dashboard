import { AdminlistComponent } from './../../page/dashboards/adminlist/adminlist.component';
import { DashboardService } from './../../service/dashboard.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-deleteadmin',
  templateUrl: './deleteadmin.component.html',
  styleUrls: ['./deleteadmin.component.css']
})
export class DeleteadminComponent {
  @Input() visible: boolean = false;
  @Output() closed = new EventEmitter<void>();
  @Input() adminId: number = 0;

  constructor(private dashboardService: DashboardService, private adminList: AdminlistComponent) {}

  closeDialog(): void { 
    this.visible = false
    this.closed.emit();
  }

  deleteAdmin(): void { 
    this.dashboardService.deleteAdminById(this.adminId).subscribe(() => {
      console.log("Succesfully Delete")
      this.adminList.loadAdminDataList()
      this.closeDialog()
    }, (error) => {
      console.log("Error")
    }
    )
  }

}
