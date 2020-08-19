import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ThemesComponent } from './themes/themes.component';
import { DefaultThemeComponent } from './themes/default-theme/default-theme.component';
import { FirstThemeComponent } from './themes/first-theme/first-theme.component';


const routes: Routes = [
  { path:"",component:DefaultThemeComponent },
  { path: ":domain", component:ThemesComponent,children:[
    {path : "",component:DefaultThemeComponent},
    {path : "1/:page",component:FirstThemeComponent},
  ]},
  {path: '',  redirectTo: '/',  pathMatch: 'full'},
  {path:"**",component:AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
