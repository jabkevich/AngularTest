import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {DemoMaterialModule} from './redactor-data/material-module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputDataComponent } from './input-data/input-data.component';
import {FormsModule} from "@angular/forms";
import { RedactorDataComponent } from './redactor-data/redactor-data.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    InputDataComponent,
    RedactorDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DemoMaterialModule,
    // BrowserAnimationsModule,
    MatSliderModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
