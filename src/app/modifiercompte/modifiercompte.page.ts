import { Component, OnInit } from '@angular/core';
import { emit } from 'process';
import { ModifierprofilService } from '../services/profile/modifierprofil.service';
import { ProfilService } from '../services/profile/profil.service';
import { StorageServicesService } from '../services/storageService/storage-services.service';
import { UtilisateurService } from '../services/utilisateur/utilisateur.service';

@Component({
  selector: 'app-modifiercompte',
  templateUrl: './modifiercompte.page.html',
  styleUrls: ['./modifiercompte.page.scss'],
})
export class ModifiercomptePage implements OnInit {
  form: any = {
    nomutilisateur: null,
    email:null,
  };
  content:any;
  id_utilisateur: any;
  payload:any;
  utilisateurs:any;
  constructor(private utilisateur: UtilisateurService, private storageService: StorageServicesService,private modifprofil:ModifierprofilService) { }

  ngOnInit() {
    this.id_utilisateur = this.storageService.getUser().id;
    this.utilisateur.affichernotifpariduser(this.id_utilisateur).subscribe(data => {
      this.utilisateurs = data
      console.log(this.utilisateurs + "jk nfkdjnfodnfkdfjjk");
    })
  }
  onSubmit(): void {
    const {nomutilisateur, email} = this.form;

    this.modifprofil.modifierCompteAllContent(nomutilisateur, email, this.id_utilisateur).subscribe(data=>{
      this.content=data
      console.log(this.content);
    })
  }
}
