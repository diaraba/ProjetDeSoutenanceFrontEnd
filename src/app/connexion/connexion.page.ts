import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlertService } from '../services/alerttoast/alert.service';
import { AuthenticationService } from '../services/authentication/authentication.service';
import { StorageServicesService } from '../services/storageService/storage-services.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {
  form: any = {
    email: null,
    password: null,
  };
  isLoggedIn = false;
  isLoginFailed = false;
  id: any;
  emails:any;
  errorMessage = '';
  roles: string[] = [];
  showEmploi = false;
  isForgetpass=false;
  private subscriptions: Subscription[] = [];

  constructor(private authService: AuthenticationService, private storageService: StorageServicesService, private route: Router, private alerteService:AlertService) { }
  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().roles;
    }
  }

  onSubmit(): void {
    const { email, password } = this.form;

    // console.log(nomutilisateur);
    // console.log(password);

    console.log(email);
    alert(this.form.password);
    // alert(this.form.nomutilisateur);
    // alert(this.form.email);
    this.authService.login(email, password,).subscribe({
      next: data => {
        this.storageService.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.storageService.getUser().roles;
        console.log(this.roles[0]);
        // this.reloadPage();
        // if(this.isLoggedIn == true){
        //   this.route.navigateByUrl("/tabs/accueil");
        // }


        // Refresh the current page
        // this.route.navigate(['/tabs/accueil'], {skipLocationChange: true});
        if (this.roles[0] == "ROLE_EMPLOI") {
          this.showEmploi = true;
        }
        this.route.navigate(['/tabs/accueil']).then(() => {
          setTimeout(() => {
            location.reload();
          }, 1);
        });
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });
  }
  reloadPage(): void {
    window.location.reload();
  }



  onResetpassword(form:any): void {
    console.log(form.emails);
    const email: string = form.emails;
    this.subscriptions.push(
      this.authService.forgetpassword(email).subscribe(
        response => {
          console.log(response);
          this.alerteService.presentToast(
            "Un nouveau mots vous a été envoyé.",
            "success"
          );
        },
        (error: HttpErrorResponse) => {
          console.log(error);
          const errorMsg = error.error;
          if (errorMsg === 'L\'email n\'existe pas!!!!!') {
            this.alerteService.presentToast(
              "Cet email n'existe pas verifié encore.",
              "danger"
            );
          }
          if (errorMsg !== 'L\'email n\'existe pas!!!!!') {
            this.alerteService.presentToast(
              "Une erreur est survenue verifié essayer encore.",
              "danger"
            );
          }
        }
      )
    );
  }
}
