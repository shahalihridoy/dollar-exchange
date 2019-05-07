import { Component, OnInit } from "@angular/core";
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { AuthService } from "src/app/shared/services/auth.service";
import { MatSnackBar } from "@angular/material";
import { AngularFireAuth } from "@angular/fire/auth";
import { throwError } from "rxjs";
import { Router } from '@angular/router';

@Component({
  selector: "app-signup4",
  templateUrl: "./signup4.component.html",
  styleUrls: ["./signup4.component.scss"]
})
export class Signup4Component implements OnInit {
  signupForm: FormGroup;
  isSigningUp: boolean = false;

  constructor(
    private afAuth: AngularFireAuth,
    private snackbar: MatSnackBar,
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.signupForm = this.fb.group({
      username: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required],
      agreed: ["", Validators.required]
    });
  }

  onSubmit() {
    let errorMessage = null;

    if (!this.signupForm.invalid) {
      this.isSigningUp = true;

      this.authService
        .signupWithEmail(
          this.signupForm.get("email").value,
          this.signupForm.get("password").value
        )
        .catch(error => {
          errorMessage = error.message;
          this.snackbar.open(errorMessage, "", {
            duration: 5000
          });
        })
        .then(user => {
          if (!errorMessage) {
            this.afAuth.auth.currentUser
              .updateProfile({
                displayName: this.signupForm.get("username").value
              })
              .then(user => {
                this.router.navigateByUrl("/car-list");
                // console.log(this.afAuth.auth.currentUser.uid);
              });
          }
        })
        .finally(() => {
          this.isSigningUp = false;
        });
    } else
      this.snackbar.open("Please, fill the form correctly", "", {
        duration: 5000
      });
  }
}
