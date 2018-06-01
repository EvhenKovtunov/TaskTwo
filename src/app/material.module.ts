import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule,MatTabsModule,MatIconModule} from "@angular/material";

@NgModule({
    imports: [MatButtonModule,MatTabsModule,MatIconModule],
    exports: [MatButtonModule,MatTabsModule,MatIconModule],
})
export class MaterialModule { }