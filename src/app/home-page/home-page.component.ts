import { Component, OnInit } from '@angular/core';
import {PageSettingsService} from "../service/PageSettings.service";
import {Settings} from "../model/Settings.model"
import { Observable} from "rxjs/Observable"
import { HttpClient} from '@angular/common/http';
import { Angular2TokenService } from 'angular2-token';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  providers:[PageSettingsService]
})
export class HomePageComponent implements OnInit {
  public jsonData:any;
  baseURL = 'assets/data/test.json';
  
  constructor(private tokenService: Angular2TokenService) {
    this.tokenService.init();
   }

  ngOnInit() {
    this.tokenService.get(this.baseURL).map(res => res.json()).subscribe(
      res =>      this.jsonData = res,
      error =>    console.log(error)
  );
  
  }

}
