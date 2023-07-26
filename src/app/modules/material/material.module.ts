import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {NgFor} from '@angular/common';
import {MatSelectModule} from '@angular/material/select';


const MaterialComponents = [
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatListModule,
  MatToolbarModule,
  MatExpansionModule,
  MatInputModule,
  TextFieldModule,
  MatSnackBarModule,
  MatSelectModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MaterialComponents
  ]
})
export class MaterialModule { }
