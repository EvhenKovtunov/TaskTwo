import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from './app.component';
import { MaterialModule } from "./material.module";
import { HomePageComponent } from './home-page/home-page.component';
import { HttpModule } from '@angular/http';
import {PageSettingsService} from "./service/PageSettings.service";
import { HttpClientModule }   from '@angular/common/http';


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
    HttpClientModule
  ],
  providers: [PageSettingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
