import { UserService } from './../../service/user.service';
import { DashboardService } from './../../service/dashboard.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-edituserlist',
  templateUrl: './edituserlist.component.html',
  styleUrls: ['./edituserlist.component.css']
})
export class EdituserlistComponent {
  @Input() visible: boolean = false;
  @Input() customerAccount: string = '';
  @Output() closed = new EventEmitter<void>();
  @Input() selectedAccountDetail: any;
  adminData: any;
  updateForm!: FormGroup;

  constructor(private fb: FormBuilder, private dashboardService: DashboardService, private userService: UserService) {
      this.adminData = this.userService.getUserIdentity();
   }

  ngOnInit(): void {
    this.initializeForm();
  }

  closeDialog(): void { 
    this.visible = false
    this.closed.emit();
  }

  initializeForm(): void {
    this.updateForm = this.fb.group({
      customerName: [this.selectedAccountDetail?.customerName || '', Validators.required],
      customerEmail: [this.selectedAccountDetail?.customerEmail || '', [Validators.required, Validators.email]],
      customerPhone: [this.selectedAccountDetail?.customerPhone || '', Validators.required],
      customerMotherName: [this.selectedAccountDetail?.customerMotherName || '', Validators.required],
      editedBy: [this.adminData[0]?.adminRoleDto.adminRoleId]
    });
    console.log(this.adminData[0])
  }

  updateData(): void { 
    if(this.updateForm.valid) {
      const updatedData = this.updateForm.value;
      console.log("Selected Data", this.selectedAccountDetail)
      console.log("Updated Data", updatedData)
      this.dashboardService.updateUserDataById(this.selectedAccountDetail.customerId, updatedData)
      .subscribe(
        (response) => {
          console.log("Data Update Successfully", updatedData)
          this.closeDialog()
        },
        (error) => {
          console.log("Update Error")
          console.log('error updating data', error)
        }
      )
    }
  }

}
