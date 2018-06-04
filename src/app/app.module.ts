import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from './app.component';
import { MaterialModule } from "./material.module";
import { HomePageComponent } from './home-page/home-page.component';
import { HttpModule } from '@angular/http';
import {PageSettingsService} from "./service/PageSettings.service";
import { HttpClientModule }   from '@angular/common/http';
import { Angular2TokenService } from 'angular2-token';
import { Ng2OrderModule } from 'ng2-order-pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpModule,
    HttpClientModule,
    Ng2OrderModule
  ],
  providers: [PageSettingsService,Angular2TokenService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
