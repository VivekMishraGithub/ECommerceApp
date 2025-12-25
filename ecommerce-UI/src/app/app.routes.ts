import { Routes } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './auth.guard';
import { BudgetPhonesComponent } from './components/mobilesCategory/budget-phones/budget-phones.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: '', component: HomepageComponent},
  { path: 'home', component: HomepageComponent, canActivate: [AuthGuard]},
  { path: 'mobiles/budget-phones', component: BudgetPhonesComponent, canActivate: [AuthGuard]},
];
