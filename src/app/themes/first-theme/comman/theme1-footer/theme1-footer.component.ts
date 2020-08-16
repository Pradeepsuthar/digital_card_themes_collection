import { Component, OnInit } from '@angular/core';
import { ThemesManagerService } from 'src/app/services/themes-manager.service';

@Component({
  selector: 'app-theme1-footer',
  templateUrl: './theme1-footer.component.html',
  styleUrls: ['./theme1-footer.component.scss']
})
export class Theme1FooterComponent implements OnInit {

  constructor(
    public _themeService: ThemesManagerService
  ) { }

  ngOnInit(): void {
  }

}
