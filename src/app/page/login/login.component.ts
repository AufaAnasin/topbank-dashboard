import { LoginService } from './../../service/login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  showWarning: boolean = false;
  loginForm: FormGroup = new FormGroup({})

  constructor(private router: Router, private formBuilder: FormBuilder, private authService: LoginService, private messageService: MessageService) {}


  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(50), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])/)]],
    })
  }
  // update email harus ada @, dan password harus 8 karakter campuran Huruf besar Kecil
  login(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value
      this.authService.login(email, password).subscribe(
        (response) => {
          console.log(response)
          if ((response.success==true) && (response.data.adminRoleDto.adminRoleId == 1)) {
            this.authService.getIsAuthenticated().next(true)
            console.log('sampai sini')
            this.router.navigate(['dashboard/home'])
            console.log('gak sampai sini')
          } else if ((response.success==true) && (response.data.adminRoleDto.adminRoleId != 1)) {
            this.messageService.add({severity: 'error', summary: 'Youre not allowed', detail: 'Not for your role'})
         } else {
            console.log(response.data.adminRoleDto.adminRoleName)
            this.messageService.add({severity: 'error', summary: 'Wrong email/password', detail: 'Please input correct email/password'})
          }
        }
      )
    }
  }
} 
