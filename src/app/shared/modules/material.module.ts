import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatCardModule, MatSidenavModule, MatToolbarModule, MatIconModule, MatDividerModule, MatFormFieldModule, MatCheckboxModule, MatInputModule, MatMenuModule, MatSnackBarModule, MatRippleModule, MatStepperModule, MatSelectModule, MatTableModule} from '@angular/material';

@NgModule({
  exports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    MatMenuModule,
    MatSnackBarModule,
    MatRippleModule,
    MatStepperModule,
    MatSelectModule,
    MatTableModule
  ]
})
export class MaterialModule { }
