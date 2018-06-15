import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { PageSettingsService } from "../service/PageSettings.service";
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
  providers: [PageSettingsService,]
})
export class HomePageComponent implements OnInit {

  public jsonData: any;
  baseURL = 'assets/data/test.json';
  constructor(private tokenService: Angular2TokenService, public dialog: MatDialog) {
   
  }

  ngOnInit() {
    let json=new JsonService(this.tokenService)
    json.urlConnect(this.baseURL);
    this.tokenService.get(this.baseURL).map(res => res.json()).subscribe(
      res => this.jsonData = res,
      error => console.log(error)
    );
  }

  public openDialog(item: any): void {
    console.log('item:', item);
    let dialogRef = this.dialog.open(ModalPageComponent, {
      width: '70%',
      height: '90%',
      data: {
        item: item,
        
      }
    });
  }
 


}


class Some{

  constructor(private jsonService: Angular2TokenService) {
  }

  
}
  
 class JsonService{

    data:any;
    constructor(private jsonService: Angular2TokenService) {
    }
  
    public urlConnect(baseURL):any{
      this.jsonService.init();
    }
    public getData(data):any{
     this.jsonService.get(data).map(res => res.json()).subscribe(
        res => data = res,
        error => console.log(error)
      );
     
     console.log("ok");
      
    }
  }