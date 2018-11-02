import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AddingComponent } from './adding/adding.component';
import { MaterialModule } from './material-module';

import { SnackBarComponent } from './snack-bar/snack-bar.component';
import { DndModule } from 'ng2-dnd';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { ParamInterceptor } from './api.interceptor';
import { DataService } from './services/data-service/data.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data-service/in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    AddingComponent,
    SnackBarComponent,
    ConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService),
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MaterialModule,
    DndModule.forRoot()
  ],
  entryComponents: [
    SnackBarComponent,
    ConfirmDialogComponent
  ],
  providers: [
    DataService, {
      provide: HTTP_INTERCEPTORS,
      useClass: ParamInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
