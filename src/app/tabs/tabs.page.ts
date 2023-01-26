import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { NotificationComponent } from '../notification/notification.component';
import { AuthenticationService } from '../services/authentication/authentication.service';
import { StorageServicesService } from '../services/storageService/storage-services.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  showProjet = false;  
  showEmploi=false;
  isLoggedIn = false;
  roles:any;
  constructor( private popNotif: PopoverController, private authService: AuthenticationService , private storageService:StorageServicesService,private route:Router) { }
  async openNotif(){
    const popup= await this.popNotif.create({
      component:NotificationComponent,
    });
    popup.present();
   
  }
  ngOnInit() {
    this.roles=this.storageService.getUser().roles;
    console.log(this.roles);
    //   if (this.storageService.isLoggedIn()) {
    //   this.isLoggedIn = true;
    //   this.roles = this.storageService.getUser().roles;
    // }
    if(this.roles == undefined){
      this.showProjet = true;
      this.showEmploi=true;
    }
    else if (this.roles[0] == "ROLE_PROJET") {
      this.showProjet = true;
    }
    else{ 
      this.showEmploi=true;
    }
  }
  back(): void {
    window.history.back()
  }
 
  logout(): void {
    this.authService.logout().subscribe({
      next: res => {
        console.log(res);
        this.storageService.clean();

        this.route.navigate(['/tabs/accueil']).then(()=>{
          setTimeout(() => {
            location.reload();
          }, 100);
        });
      },
      error: err => {
        console.log(err);
      }
    });
  }
}
