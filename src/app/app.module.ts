import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {MatCardModule} from '@angular/material/card';


import { CardComponent } from './card/card.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';


//raggruppo i moduli material per tenere il modulo il più leggibile possibile
const MATERIAL_MODULES = [
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  MatSelectModule,
  MatIconModule,
  MatDividerModule
]

@NgModule({
  declarations: [
    AppComponent,
    CardComponent
  ],
  imports: [
    MATERIAL_MODULES,
    BrowserModule,
    BrowserAnimationsModule,

    //Imports for using forms
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
