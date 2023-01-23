import { Component, OnInit } from '@angular/core';
import { ProfilService } from '../services/profile/profil.service';
import { StorageServicesService } from '../services/storageService/storage-services.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  id_structure: any;
  profiles: any;

  isLoggedIn = false;

  constructor(private profile: ProfilService, private storageService: StorageServicesService) { }

  ngOnInit() {
    this.isLoggedIn = true;
      this.id_structure = this.storageService.getUser().id;
      this.profile.afficherprofil(this.id_structure).subscribe(data => {
        this.profiles = data
        console.log(this.profiles);
      })
   

  }

}
