import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { auth, User } from 'firebase';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  afUser$: Observable<User> = this.afAuth.user;
  uid: string;
  GitHubId: number;

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private snackBar: MatSnackBar,
  ) {
    this.afUser$.subscribe(user => {
      this.uid = user && user.uid;
      this.GitHubId = user && +user.providerData[0].uid;
    });
   }

  login(){
    this.afAuth.signInWithPopup(
      new auth.GithubAuthProvider()
    ).then(() => {
      this.snackBar.open('ようこそgitpetへ！', null, {
        duration: 2000
      });
      this.router.navigateByUrl('/create');
    });
  }

  logout(){
    this.router.navigateByUrl('/welcome');
    this.afAuth.signOut().then(() => {
      this.snackBar.open('ログアウトしました', null, {
        duration: 2000
      });
      this.router.navigateByUrl('/welcome');
    });
  }

}
