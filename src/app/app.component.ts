import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  user$ = this.authsService.afUser$;

  constructor(
    private authsService: AuthService
  ){}
  title = 'dog-hunting';

  logout(){
    this.authsService.logout();
  }
}
