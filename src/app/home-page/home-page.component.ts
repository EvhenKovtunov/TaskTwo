import { Component, OnInit } from '@angular/core';
import {PageSettingsService} from "../service/PageSettings.service";
import {Settings} from "../model/Settings.model"
import { Observable} from "rxjs/Observable"
import { HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  providers:[PageSettingsService]
})
export class HomePageComponent implements OnInit {

  ObservablepageSettings:Observable<Settings>=null;
  pageSettings:Settings=null;
  constructor(private _httpSrvice: PageSettingsService) {
   }

  ngOnInit() {
    this.ObservablepageSettings=this._httpSrvice.getPageSettings();
    this.ObservablepageSettings.subscribe(pageSettings=>this.pageSettings=pageSettings);
    console.log(this.ObservablepageSettings);
    console.log(this.pageSettings);

   // this._httpSrvice.getData().subscribe((data:Settings) => this.pageSettings=data);
    //console.log(this.pageSettings);
  }

}
