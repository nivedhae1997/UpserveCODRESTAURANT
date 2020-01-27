import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material'
import { NextComponent } from './next/next.component';
import { HomeComponent } from './home/home.component';
import { FilterPipe } from './filter.pipe';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    NextComponent,
    HomeComponent,
    FilterPipe,

   
    
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatGridListModule,
    HttpClientModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
