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
  styleUrls: ['./home-page.component.scss'],
  providers: [PageSettingsService]
})
export class HomePageComponent implements OnInit {
  sources: Array<Object>;



  public jsonData: any;
  baseURL = 'assets/data/test.json';

  constructor(private tokenService: Angular2TokenService, public dialog: MatDialog) {
    this.tokenService.init();
    this.sources = [
      {
        src: "https://youtu.be/K4wEI5zhHB0.mp4",
        type: "video/mp4"
      },
      {
        src: "https://youtu.be/K4wEI5zhHB0.ogg",
        type: "video/ogg"
      },
      {
        src: "https://youtu.be/K4wEI5zhHB0.webm",
        type: "video/webm"
      }
    ];
  }

  ngOnInit() {
    this.tokenService.get(this.baseURL).map(res => res.json()).subscribe(
      res => this.jsonData = res,
      error => console.log(error)
    );

  }

  private formSlide(category: any): any {
    let result: any = {
      title: category.title,
      LongDescription: '',
      images: []
    };
    
    let myArray = [];
  /* for (let a of this.jsonData.items) {
      for (let s of category.items) {
        if(a.id==s.id){
          result.LongDescription=a.long_description;
          result.title=a.title;
          for(let img of a.gallery_images)
          {
            result.images.push(img.id);
          } 
          console.log(result);
          
        }
      }
    }*/
    result.LongDescription=category.long_description;
    console.log(result);
  }

  public openDialog(item: any): void {
    console.log('item:', item);
  // let object = this.formSlide(item);
    let dialogRef = this.dialog.open(ModalPageComponent, {
      width: '700px',
      height: '600px',
      data: {
        item: item,
        
      }
    });
  }


}
