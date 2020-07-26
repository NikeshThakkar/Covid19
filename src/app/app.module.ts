import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GoogleChartsModule } from 'angular-google-charts';
import { CountUpModule } from 'ngx-countup';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CitydataComponent } from './citydata/citydata.component';
import { CovidserviceService } from './covidservice.service';
import { MaterialModule } from './material/material.module';



@NgModule({
  declarations: [
    AppComponent,
    CitydataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    GoogleChartsModule,
    FormsModule,
    CountUpModule,
    NgxSpinnerModule,
  ],
  providers: [CovidserviceService, ],
  entryComponents: [CitydataComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
