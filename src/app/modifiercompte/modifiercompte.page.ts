import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { emit } from 'process';
import { environment } from 'src/environments/environment';
import { ModifierprofilService } from '../services/profile/modifierprofil.service';
import { ProfilService } from '../services/profile/profil.service';
import { StorageServicesService } from '../services/storageService/storage-services.service';
import { UtilisateurService } from '../services/utilisateur/utilisateur.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modifiercompte',
  templateUrl: './modifiercompte.page.html',
  styleUrls: ['./modifiercompte.page.scss'],
})
export class ModifiercomptePage implements OnInit {
  form: any = {
    nomutilisateur: null,
    email: null,
  };
  content: any;
  id_utilisateur: any;
  payload: any;
  utilisateurs: any;
  image: any;
  profiles: any;

  public host = environment.host;
  public picture = `${this.host}image/`;
  constructor(private utilisateur: UtilisateurService, private profile: ProfilService, private storageService: StorageServicesService, private modifprofil: ModifierprofilService, private route: Router) { }

  ngOnInit() {
    this.id_utilisateur = this.storageService.getUser().id;
    this.utilisateur.affichernotifpariduser(this.id_utilisateur).subscribe(data => {
      this.utilisateurs = data
      console.log(this.utilisateurs + "jk nfkdjnfodnfkdfjjk");
    })


    this.profile.afficherprofilutilisateur(this.id_utilisateur).subscribe(data => {
      this.profiles = data
      this.image = this.profiles.image
      console.log(this.profiles);
    })
  }
  onSubmit(): void {
    const { nomutilisateur, email } = this.form;

    this.modifprofil.modifierCompteAllContent(nomutilisateur, email, this.id_utilisateur).subscribe(data => {
      this.content = data
      console.log(this.content);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Compte modifier avec succès !',
        showConfirmButton: false,
        heightAuto:false,
        timer: 1500
      })
      this.route.navigate(['/tabs/emploi']).then(() => {
        setTimeout(() => {
          location.reload();
        }, 2000);
      });    })
  }

  checkSatate(): void {
    if (this.storageService.isLoggedIn()) {
      this.route.navigate(['/tabs/changermotdepasse']);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        heightAuto: false,
        confirmButtonColor: '#C8FCEA',
        confirmButtonText: '<span style="color: black;">OK</span>',
        text: 'Vous devez vous connecter pour pouvoir exécuter cette action!',
        footer: '<a href="/login">Connexion... </a>',
      })
    }
  }
}
