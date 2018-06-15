import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from './app.component';
import { MaterialModule } from "./material.module";
import { HomePageComponent} from './home-page/home-page.component';
import { HttpModule } from '@angular/http';
import {PageSettingsService} from "./service/PageSettings.service";
import { HttpClientModule }   from '@angular/common/http';
import { Angular2TokenService } from 'angular2-token';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { ModalPageComponent } from './modal-page/modal-page.component';
import { FormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { LinkyModule } from 'angular-linky';

import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ModalPageComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpModule,
    HttpClientModule,
    Ng2OrderModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),

    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    LinkyModule
    
  ],
  providers: [PageSettingsService,Angular2TokenService ],
  bootstrap: [AppComponent,HomePageComponent],
  entryComponents:[ModalPageComponent],
  schemas: [ NO_ERRORS_SCHEMA ],
})
export class AppModule { }
