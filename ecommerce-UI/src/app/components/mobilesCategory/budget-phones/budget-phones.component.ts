import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-budget-phones',
  standalone: true,
  imports: [RouterModule, NgIf, CommonModule],
  templateUrl: './budget-phones.component.html',
  styleUrl: './budget-phones.component.css'
})
export class BudgetPhonesComponent {

  budgetphonesList: any[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(){
    this.budgetPhonesList();
  }

  budgetPhonesList(){
    this.http.get('http://localhost:8080/api/products').subscribe({
      next: (res: any) => {
        this.budgetphonesList = res;
        console.log(res);
      },
      error: (err) => {
          console.error('Error fetching products:', err);
      },
    })
  }

  openProductDetails(val: any){
    console.log(val);
  }
}
