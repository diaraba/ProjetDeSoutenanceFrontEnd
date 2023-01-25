import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication/authentication.service';
import { PreferenceService } from '../services/preferences/preference.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  form: any = {
    nomutilisateur: null,
    email: null,
    password: null,
  };
  role:any;
  roles: any = [];
  public interests: any = [];
  public activites: any[] = [];


  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private pref: PreferenceService, private authService: AuthenticationService) { }

  ngOnInit() {
    this.pref.getAllPref().subscribe(data => {
      this.interests = data
      console.log(this.interests);
      console.log(this.role);

    })
  }



  onInterestSelected(interest: any) {
    if (!this.activites.includes(interest)) {
      this.activites.push(interest);
    }  else {
      this.activites.splice(this.activites.indexOf(interest), 1);
    }
    console.log(this.activites);
  }

  onSubmit(): void {
    const { nomutilisateur, email, password } = this.form;

    // console.log(nomutilisateur);
    // console.log(password);
    console.log(this.role);
    this.roles.push(this.role);
    console.log(this.roles);
    // console.log(email);
    // alert(this.form.password);
    // alert(this.form.nomutilisateur);
    // alert(this.form.email);
    this.authService.register(nomutilisateur, email, password, this.activites, this.roles).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }




}

