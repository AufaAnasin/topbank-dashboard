import { LoginService } from './../../service/login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  showWarning: boolean = false;
  loginForm: FormGroup = new FormGroup({})

  constructor(private router: Router, private formBuilder: FormBuilder, private authService: LoginService) {}


  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  login(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value
      this.authService.login(email, password).subscribe(
        (response) => {
          if (response.success==true) {
            console.log(response)
            this.authService.getIsAuthenticated().next(true)
            this.router.navigate(['dashboard'])
          } else {
            console.log(response.message)
            this.router.navigate([''])
          }
        }
      )
    }
  }
} 
