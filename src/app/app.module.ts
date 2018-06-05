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
import { ModalPageComponent } from './modal-page/modal-page.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ModalPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpModule,
    HttpClientModule,
    Ng2OrderModule,
    FormsModule
  ],
  providers: [PageSettingsService,Angular2TokenService ],
  bootstrap: [AppComponent],
  entryComponents:[ModalPageComponent]
})
export class AppModule { }
