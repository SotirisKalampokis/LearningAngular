import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.services';

@Component({
  selector: 'app-Loginpage',
  templateUrl: './LoginPage.html',
})
export class LoginPage {
  form: FormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });
  constructor(private authService: AuthService, private fb: FormBuilder, private router: Router) { }
  login() {
    let user = this.authService.login(
      this.form.value.username,
      this.form.value.password
    );
    if (!user) {
      alert('Invalid Username or Password');
    } else {
      this.router.navigateByUrl('/admin');
    }

  }
}
