import { Component, OnInit } from '@angular/core';
import { ThemesManagerService } from 'src/app/services/themes-manager.service';


@Component({
  selector: 'app-theme1-home',
  templateUrl: './theme1-home.component.html',
  styleUrls: ['./theme1-home.component.scss']
})
export class Theme1HomeComponent implements OnInit {

  constructor(
    public _themeService: ThemesManagerService
  ) { }

  ngOnInit(): void { }

}
