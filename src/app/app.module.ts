import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

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
import { Theme1HomeComponent } from './themes/first-theme/pages/theme1-home/theme1-home.component';
import { Theme1AboutComponent } from './themes/first-theme/pages/theme1-about/theme1-about.component';
import { Theme1ContactComponent } from './themes/first-theme/pages/theme1-contact/theme1-contact.component';
import { Theme1ProductsComponent } from './themes/first-theme/pages/theme1-products/theme1-products.component';
import { Theme1NavigationComponent } from './themes/first-theme/comman/theme1-navigation/theme1-navigation.component';
import { Theme1FooterComponent } from './themes/first-theme/comman/theme1-footer/theme1-footer.component';
import { Theme1ImageGalleryComponent } from './themes/first-theme/pages/theme1-image-gallery/theme1-image-gallery.component';
import { Theme1VideoGalleryComponent } from './themes/first-theme/pages/theme1-video-gallery/theme1-video-gallery.component';
@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    ThemesComponent,
    DefaultThemeComponent,
    FirstThemeComponent,
    Theme1HomeComponent,
    Theme1AboutComponent,
    Theme1ContactComponent,
    Theme1ProductsComponent,
    Theme1NavigationComponent,
    Theme1FooterComponent,
    Theme1ImageGalleryComponent,
    Theme1VideoGalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScrollToModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    YouTubePlayerModule,
    GoogleMapsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
