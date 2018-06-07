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
    // console.log(this.data.id);
    // console.log(this.data);
    console.log("data",this.data);
  
  }

  onNoClick(): void {
    
    this.dialogRef.close();
  }

 
}
