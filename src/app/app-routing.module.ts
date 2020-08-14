import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ThemesComponent } from './themes/themes.component';
import { DefaultThemeComponent } from './themes/default-theme/default-theme.component';


const routes: Routes = [
  { path:"",component:ThemesComponent },
  { path: ":domain", component:ThemesComponent},
  //{"1/:domain",Theme1Component}
  {path: '',  redirectTo: '/',  pathMatch: 'full'},
  {path:"**",component:AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
