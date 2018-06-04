import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule,MatTabsModule,MatIconModule,MatGridListModule,MatTabGroupBase} from "@angular/material";

@NgModule({
    imports: [MatButtonModule,MatTabsModule,MatIconModule,MatGridListModule],
    exports: [MatButtonModule,MatTabsModule,MatIconModule,MatGridListModule],
})
export class MaterialModule { }