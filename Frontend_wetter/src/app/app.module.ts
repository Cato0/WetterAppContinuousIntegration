import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';


// Test von Tim für Diagramm
// import { HttpClientModule } from '@angular/common/http';	// DELETE ???

// Test Ende
import { Service1Service } from './service1.service';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MainweatherdataComponent } from './mainweatherdata/mainweatherdata.component';
import { WeatherdiagrammComponent } from './weatherdiagramm/weatherdiagramm.component';
//import { Comp2Component } from './comp2/comp2.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
	WeatherdiagrammComponent,
    MainweatherdataComponent 
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [Service1Service, MainweatherdataComponent ],	// MainweatherdataComponent, WeatherService
  bootstrap: [AppComponent]
})
export class AppModule { }
