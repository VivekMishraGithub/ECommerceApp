import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `<app-header></app-header>
    <main style="margin-bottom: 60px;">
      <router-outlet></router-outlet>
    </main>
  <app-footer></app-footer>
  `
})
export class AppComponent {

  constructor(private authService: AuthService) {};

ngOnInit() {
  this.authService.autoLogoutIfExpired();
}
}
