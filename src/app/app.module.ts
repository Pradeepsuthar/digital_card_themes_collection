import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoaderComponent } from './shared/loader/loader.component';
import { ThemesComponent } from './themes/themes.component';
import { DefaultThemeComponent } from './themes/default-theme/default-theme.component';
import { FirstThemeComponent } from './themes/first-theme/first-theme.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import {GoogleMapsModule} from '@angular/google-maps';
@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    ThemesComponent,
    DefaultThemeComponent,
    FirstThemeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScrollToModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    YouTubePlayerModule,
    GoogleMapsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
