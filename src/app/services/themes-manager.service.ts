import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemesManagerService {

  constructor() { }

  getAllThemes(){
    console.log("Display all themes")
  }
}
