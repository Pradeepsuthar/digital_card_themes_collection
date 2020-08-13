import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoaderComponent } from './shared/loader/loader.component';
import { ThemesComponent } from './themes/themes.component';
import { DefaultThemeComponent } from './themes/default-theme/default-theme.component';
import { FirstThemeComponent } from './themes/first-theme/first-theme.component';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

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
    ScrollToModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
