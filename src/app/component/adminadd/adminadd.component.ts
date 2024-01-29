import { DashboardService } from './../../service/dashboard.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-adminadd',
  templateUrl: './adminadd.component.html',
  styleUrls: ['./adminadd.component.css']
})
export class AdminaddComponent {
  @Input() visible: boolean = false;
  @Output() closed = new EventEmitter<void>();

  closeDialog(): void { 
    this.visible = false
    this.closed.emit();
  }

  // for dropdown

  options = [
    { label: 'Super Admin', value: 1 },
    { label: 'Admin Pusat', value: 2 },
    { label: 'Admin Cabang', value: 3 }
  ];

  onOptionSelected(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement)?.value;
    console.log('Selected option:', selectedValue);
  }

  formGroup!: FormGroup;

  constructor(private fb: FormBuilder, private adminService: DashboardService) {}

  ngOnInit() {
    this.formGroup = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required],
      createdBy: ['', Validators.required] // Assuming createdBy is also required
    });
  }

  onSubmit() {
    if (this.formGroup.valid) {
      const formData = this.formGroup.value;
      this.adminService.addAdmin(formData).subscribe(
        response => {
          console.log('Admin added successfully:', response);
          // Optionally, handle success response
        },
        error => {
          console.error('Error adding admin:', error);
          // Optionally, handle error response
        }
      );
    }
  }
  
}
