import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule,MatTabsModule,MatIconModule,MatGridListModule,MatTabGroupBase,MatDialogModule, MAT_DIALOG_DATA,MatInputModule,MatCardModule} from "@angular/material";

@NgModule({
    imports: [MatButtonModule,MatTabsModule,MatIconModule,MatGridListModule,MatDialogModule,MatInputModule,MatCardModule ],
    exports: [MatButtonModule,MatTabsModule,MatIconModule,MatGridListModule,MatDialogModule,MatInputModule,MatCardModule],
})
export class MaterialModule { }