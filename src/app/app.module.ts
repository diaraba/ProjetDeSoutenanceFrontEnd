import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NotificationComponent } from './notification/notification.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CreerprofilPipe } from './creerprofil.pipe';

@NgModule({
  declarations: [AppComponent, NotificationComponent, CreerprofilPipe],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
