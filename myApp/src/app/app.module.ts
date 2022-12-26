import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS, MatSuffix} from '@angular/material/form-field';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatSlideToggleModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
  ],

  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {appearance: 'outline'}
    },
  ],
  bootstrap: [AppComponent],


})


export class AppModule { }
