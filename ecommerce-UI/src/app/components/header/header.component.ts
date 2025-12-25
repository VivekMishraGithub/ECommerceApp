import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, NgIf, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  username: any;
  email: any;
  isLoggedIn: boolean = false;
  name: any;
  categoryList: any;

  constructor(private http: HttpClient, private router: Router) {}

  formatRoute(name: string): string {
  return name.toLowerCase().replace(/ /g, '-');
}

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        this.username = payload.sub || 'User';
        this.email = payload.email || '';
        this.name = payload.name || '';
        this.isLoggedIn = true;
      } catch (e) {
        console.error('Invalid token:', e);
        this.logout();
      }
    }
    this.categories();
  }

categories() {
  this.http.get('http://localhost:8080/api/categories').subscribe({
    next: (res: any) => {
      this.categoryList = res;
    },
    error: (err) => {
      console.error('Error fetching categories:', err);
    }
  });
}


  logout(): void {
    localStorage.removeItem('token');
    this.isLoggedIn = false;
    this.router.navigate(['/']);
  }
}
