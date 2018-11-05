import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material-module';

import { AddingComponent } from './adding/adding.component';
import { AppComponent } from './app.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { PlayerComponent } from './player/player.component';
import { SnackBarComponent } from './snack-bar/snack-bar.component';

import { DataService } from './services/data-service/data.service';
import { InMemoryDataService } from './services/in-memory-data-service/in-memory-data.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ParamInterceptor } from './api.interceptor';

import { DndModule } from 'ng2-dnd';

@NgModule({
  declarations: [
    AppComponent,
    AddingComponent,
    ConfirmDialogComponent,
    PlayerComponent,
    SnackBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DndModule.forRoot(),
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }),
    MaterialModule,
    NoopAnimationsModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    ConfirmDialogComponent,
    SnackBarComponent
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
