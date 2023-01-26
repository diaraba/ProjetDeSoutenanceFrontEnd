import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  id:any;
  errorMessage = '';
  roles: string[] = [];
  showEmploi=false;

  constructor(private authService: AuthenticationService, private storageService:StorageServicesService,private route:Router) { }
  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().roles;
    }
  }

  onSubmit(): void {
    const {  email, password } = this.form;
    
    // console.log(nomutilisateur);
    // console.log(password);
 
    console.log(email);
    alert(this.form.password);
    // alert(this.form.nomutilisateur);
    // alert(this.form.email);
    this.authService.login( email, password, ).subscribe({
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
       if(this.roles[0]=="ROLE_EMPLOI"){
         this.showEmploi=true;
       }
          this.route.navigate(['/tabs/accueil']).then(()=>{
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
}
