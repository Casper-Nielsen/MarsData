import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MarsWeatherComponent } from './mars-weather/mars-weather.component';
import { TempPipe } from './temp.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MarsWeatherComponent,
    TempPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
