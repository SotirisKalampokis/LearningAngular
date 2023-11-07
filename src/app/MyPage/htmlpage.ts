import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.services';

@Component({
  selector: 'app-Mypage',
  templateUrl: './htmlpage.html',
})
export class HtmlPageComponent {
  constructor(private authService: AuthService) {

  }
  logout() {
    this.authService.logout();
  }
}
