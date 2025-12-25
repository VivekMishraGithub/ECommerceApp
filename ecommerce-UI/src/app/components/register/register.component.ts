import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  @Output() close = new EventEmitter<void>();

  user = {
    username: '',
    password: '',
    email: '',
    fullName: ''
  };

  successMessage = '';
  errorMessage = '';

  constructor(private http: HttpClient) {}

  register() {
    this.http.post('http://localhost:8080/api/auth/register', this.user, { responseType: 'text' }).subscribe({
      next: (response: string) => {
          this.successMessage = response; 
          this.errorMessage = '';
        setTimeout(() => this.close.emit(), 1500); 
      },
      error: (error) => {
          this.errorMessage = error.error;
          this.successMessage = '';
      }
    });
  }
}
