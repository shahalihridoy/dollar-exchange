import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) {
   }

   loginWithEmail(email: string, password: string) {
      return this.afAuth.auth.signInWithEmailAndPassword(email,password)
   }
   login() {
      return this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  logout() {
      return  this.afAuth.auth.signOut();
  }

  fuck() {
    console.log("asshole");
    
  }

  signupWithEmail(email: string, password: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  signInWithGoogle() {
    return this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  get userObservable() {
    return this.afAuth.user;
  }
  getCurrentUser(){
    return new Promise<any>((resolve, reject) => {
      var user = this.afAuth.auth.onAuthStateChanged( user => {
        if (user) {
          resolve(user);
        } else {
          reject('No user logged in');
        }
      })
    })
  }
}
