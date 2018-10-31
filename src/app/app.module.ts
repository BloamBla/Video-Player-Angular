import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';

import { HttpClientModule } from '@angular/common/http';
import { AddingComponent } from './adding/adding.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material';

import { SnackBarComponent } from './snack.service';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    AddingComponent,
    SnackBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatSnackBarModule
  ],
  entryComponents: [
    SnackBarComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
