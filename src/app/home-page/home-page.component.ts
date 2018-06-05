import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { PageSettingsService } from "../service/PageSettings.service";
import { Settings } from "../model/Settings.model"
import { Observable } from "rxjs/Observable"
import { HttpClient } from '@angular/common/http';
import { Angular2TokenService } from 'angular2-token';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ModalPageComponent } from '../modal-page/modal-page.component';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  providers: [PageSettingsService]
})
export class HomePageComponent implements OnInit {

  

  public jsonData: any;
  baseURL = 'assets/data/test.json';

  constructor(private tokenService: Angular2TokenService, public dialog: MatDialog) {
    this.tokenService.init();

  }

  ngOnInit() {
    this.tokenService.get(this.baseURL).map(res => res.json()).subscribe(
      res => this.jsonData = res,
      error => console.log(error)
    );

  }
  tiles = [
    { text: "this.jsonData.description", cols: 4, rows: 1, color: 'lightblue' },
    { text: 'Two', cols: 1, rows: 1, color: 'lightgreen' },
    { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
  ];

  openDialog(title: any,videoUrl:any,long_description:any,videoTitle:any,gallery_images:Array<any>): void {
    let dialogRef = this.dialog.open(ModalPageComponent, {
      width: '500px',
      height: '400px',
      data: { title,long_description,videoTitle,videoUrl,gallery_images}
    });
    console.log(videoUrl);
  }

 
}
