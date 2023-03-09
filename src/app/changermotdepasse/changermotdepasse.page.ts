import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Changepassword } from '../changepassword/changepassword';
import { AlertService } from '../services/alerttoast/alert.service';
import { ModifierprofilService } from '../services/profile/modifierprofil.service';
import { ProfilService } from '../services/profile/profil.service';
import { StorageServicesService } from '../services/storageService/storage-services.service';
import { UtilisateurService } from '../services/utilisateur/utilisateur.service';

@Component({
  selector: 'app-changermotdepasse',
  templateUrl: './changermotdepasse.page.html',
  styleUrls: ['./changermotdepasse.page.scss'],
})
export class ChangermotdepassePage implements OnInit {

  form: any = {
    currentpassword: null,
    newpassword: null,
    confirmpassword: null,
    email:null,
  };
  content:any;
  id_utilisateur: any;
  payload:any;
  utilisateurs:any;
  image:any;
  profiles:any;
  
  public host=environment.host;
  public picture=`${this.host}image/`;
  private subscriptions: Subscription[] = [];
  constructor(private utilisateur: UtilisateurService, private profile: ProfilService,private storageService: StorageServicesService,private modifprofil:ModifierprofilService, private alertService:AlertService) { }

  ngOnInit() {
    this.id_utilisateur = this.storageService.getUser().id;
    // this.utilisateur.affichernotifpariduser(this.id_utilisateur).subscribe(data => {
    //   this.utilisateurs = data
    //   console.log(this.utilisateurs + "jk nfkdjnfodnfkdfjjk");
    // })


    this.profile.afficherprofilutilisateur(this.id_utilisateur).subscribe(data => {
      this.profiles = data
      this.image = this.profiles.image
      console.log(this.profiles);
    })
  }
  onSubmit(passwordchange:Changepassword): void {
    this.subscriptions.push(
      this.modifprofil.updatepassword(passwordchange).subscribe(        
        response => {
          console.log(response);
          this.alertService.presentToast(
            'Mots de passe modifier avec succès',
            "success"
          );
        },
        error => {
          console.log(error);
          const errorMsg: string = error.error;
        }
      )
    );
  }
}
