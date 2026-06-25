import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  onLogin() {
    const success = this.auth.login(this.email, this.password);

    if (success) {
      this.router.navigate(['/dashboard']);
    }
  }
}