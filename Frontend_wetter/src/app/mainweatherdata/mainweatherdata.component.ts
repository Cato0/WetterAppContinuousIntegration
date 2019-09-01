import { Component, OnInit, HostBinding } from '@angular/core';
import { WeatherdiagrammComponent } from './../weatherdiagramm/weatherdiagramm.component';
import { Service1Service } from './../service1.service';
// import { WeatherService } from './../weather.service';
import { Day } from './../day';

import { WeatherItem } from './../weather-item';

@Component({
  selector: 'app-mainweatherdata',
  templateUrl: './mainweatherdata.component.html',
  styleUrls: ['./mainweatherdata.component.css']
})

export class MainweatherdataComponent implements OnInit {

	httpService;					// Object to call Http-Requests

	wItem0 = new WeatherItem();		// First main WeatherItem (contains Todays Weather Data)

	weatherItems  = [];				// includes 4 items except for the next 4 Days
	itemIcon = "";					

	constructor(private serv: Service1Service) {

		this.httpService = serv;
		
	}

	ngOnInit() {

		this.updateWeatherData("Bochum")
			.then ( () => { this.onTempButtonClicked();	} );
			
	}
	
	// Update Some Value either for Today or the next 4 Days; Shouldn't be called on its own
	updateValues(item: WeatherItem, object) {

		item.date		 = object.date;
		item.City_name	 = object.name;
		item.weekday 	 = object.weekday
		item.wind 		 = object.wind;
		item.humidity 	 = object.humidity;
		item.minTemp 	 = object.minTemp;
		item.maxTemp 	 = object.maxTemp;
		item.temperature = object.temperature;
		
		// Change the Icon depending on the Weather
		
		if (object.icon.includes("rain")) 			{ this.itemIcon = "Rain"; }
		else if (object.icon.includes("cloud")) 	{ this.itemIcon = "Cloud"; }
		else if (object.icon.includes("sky")) 		{ this.itemIcon = "Sun"; }
		else if (object.icon.includes("thunder")) 	{ this.itemIcon = "Thunder"; }
		else if (object.icon.includes("snow")) 		{ this.itemIcon = "Snow"; }
		else if (object.icon.includes("drizzle")) 	{ this.itemIcon = "Rain"; }
		else if (object.icon.includes("mist") ||object.icon.includes("fog")) 	{ this.itemIcon = "Mist"; }
		else { this.itemIcon = "Cloud"; }

		item.icon 		 = "assets/img/icons/" + this.itemIcon + ".svg";
	}

	// Updates all Informations for Today on the Page from the Data in the Database
	updateTodaysData (cityName) {

		return new Promise ( (resolve) => {

			this.httpService.getTodaysWeatherData(cityName).then( (res) => {
				
				this.updateValues(this.wItem0, res);

				resolve();
			});
		});
	}
	
	// Updates all Informations for the next 4 Days on the Page from the Data in the Database
	updateWeatherForecast(cityName) {

		return new Promise( (resolve) => {

			this.httpService.getWeeklyWeatherData(cityName).then( (res) => {
				
				// Create all necessary WeatherItems and insert the Data
				for (let i = 0; i < res.length; i++) {
					
					let wItem = new WeatherItem();
					this.updateValues(wItem, res[i]);
					this.weatherItems.push(wItem);
				}
				
				resolve();
			});
		});
	}

	// gets Updated Values on all the Data from the Database, both Today and the next 4 Days
	updateWeatherData(cityName) {
	
		return new Promise ( (resolve) => {
			
			this.weatherItems.splice(0);

			this.updateTodaysData(cityName)
			.then ( () =>  this.updateWeatherForecast(cityName)  )
			.then ( () => { resolve(); } );
			
		});
	}

	// Changes the Chart to show the Temperature Diagramm
	onTempButtonClicked () {

		let weatherDiagramm = new WeatherdiagrammComponent();
		weatherDiagramm.createDiagramm('Temp', [this.wItem0.temperature, this.weatherItems[0].temperature, this.weatherItems[1].temperature, this.weatherItems[2].temperature, this.weatherItems[3].temperature] );
	}
	
	// Changes the Chart to show the Rain Diagramm
	onRainButtonClicked = function () {

		let weatherDiagramm = new WeatherdiagrammComponent();
		weatherDiagramm.createDiagramm('Rain', [this.wItem0.humidity, this.weatherItems[0].humidity, this.weatherItems[1].humidity, this.weatherItems[2].humidity, this.weatherItems[3].humidity] );
		
	}
	
	// Changes the Chart to show the Wind Diagramm
	onWindButtonClicked = function () {
		
		let weatherDiagramm = new WeatherdiagrammComponent();
		weatherDiagramm.createDiagramm('Wind', [this.wItem0.wind, this.weatherItems[0].wind, this.weatherItems[1].wind, this.weatherItems[2].wind, this.weatherItems[3].wind]);
	}
	
}
