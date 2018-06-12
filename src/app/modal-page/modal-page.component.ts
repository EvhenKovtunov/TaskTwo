import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HomePageComponent } from '../home-page/home-page.component';
import { Angular2TokenService } from 'angular2-token';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-modal-page',
  templateUrl: './modal-page.component.html',
  styleUrls: ['./modal-page.component.scss']
})
export class ModalPageComponent implements OnInit {

  
  videoUrl: SafeResourceUrl;
  dangerousVideoUrl: string;
  counter:number;
  
  constructor(private sanitizer: DomSanitizer,
    public dialogRef: MatDialogRef<HomePageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.updateVideoUrl();
   }

  ngOnInit() {
     this.counter = Object.keys(this.data.item.gallery_images).length;
  }
  
  updateVideoUrl() {
    this.dangerousVideoUrl = this.data.item.videoUrl;
    this.videoUrl =
        this.sanitizer.bypassSecurityTrustResourceUrl(this.dangerousVideoUrl);
  }
  
}
