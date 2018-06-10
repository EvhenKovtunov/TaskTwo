import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HomePageComponent } from '../home-page/home-page.component';
import { Angular2TokenService } from 'angular2-token';
@Component({
  selector: 'app-modal-page',
  templateUrl: './modal-page.component.html',
  styleUrls: ['./modal-page.component.scss']
})
export class ModalPageComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<HomePageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ){ }

  ngOnInit() {
    let counter=Object.keys(this.data.item.gallery_images).length;
    console.log("counter",counter);
    console.log("data",this.data);

    let shos=this.data.item.long_description;
    for(let i=0;i<shos.length;i++)
    {
      if(shos[i]==0)console.log("ok");
    }
  
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

 
}
