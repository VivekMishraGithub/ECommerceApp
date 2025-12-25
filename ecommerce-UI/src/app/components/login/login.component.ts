import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { RegisterComponent } from '../register/register.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, NgIf, RegisterComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user = { username: '', password: '' };
  errorMessage = '';
  showRegisterModal: boolean = false;
  hideLoginForm: boolean = false;

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit(ngForm: any) {
    if(ngForm.invalid){
      console.log("INVALID FORM")
    }
    this.http.post('http://localhost:8080/api/auth/login', this.user)
      .subscribe({
      next: (res) => {
          localStorage.setItem('token', (res as any).token);
          this.router.navigate(['/home']);
          this.errorMessage = '';
      },
      error: (error) => {
          this.errorMessage = error.error;
      }
      });
  }

    openRegisterModal() {
    this.showRegisterModal = true;
    this.hideLoginForm = true;
  }

  closeRegisterModal() {
    this.showRegisterModal = false;
    this.hideLoginForm = false;
  }
}

