import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { auth, User } from 'firebase';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  afUser$: Observable<User> = this.afAuth.user;

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
  ) {
    this.afUser$.subscribe(user => console.log(user));
   }

  login(){
    this.afAuth.signInWithPopup(
      new auth.GithubAuthProvider()
    );
  }

  logout(){
    this.afAuth.signOut();
    this.router.navigateByUrl('/welcome');
  }


}
