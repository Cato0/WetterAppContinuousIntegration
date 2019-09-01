import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {

  constructor(private http?: Http) {
   
  }
  
  // Development
  //backend_ip 	= "localhost";
  
  // Deploy on PIs
  backend_ip 	= "sebwie.dynu.net";
  backend_port 	= 4000;
  
  // get the current Temperature of a city
  getTodaysWeatherData (cityName) {
	
    return new Promise ( (resolve) => {
      var weatherData;
    
    let url = "http://" + this.backend_ip + ":" + this.backend_port + "/TodaysWeatherData/" + cityName;

    this.http.get(url).subscribe(
      (data) => { 
          
        weatherData = JSON.parse( data.text() );
		resolve(weatherData[0].wItem);
      }
      );
    });
  }

  getWeeklyWeatherData (cityName) {
	
    return new Promise ( (resolve) => {
      var weatherData = [];
      
      let url = "http://" + this.backend_ip + ":" + this.backend_port + "/getWeeklyWeatherData/" + cityName;
      
      this.http.get(url).subscribe(
        (data) => { 
        
        data = JSON.parse( data.text() );
		if (data[24]) {
			weatherData.push(data[0].wItem1);
			weatherData.push(data[8].wItem1);
			weatherData.push(data[16].wItem1);
			weatherData.push(data[24].wItem1);
		}
        resolve(weatherData);
        }
        );
    });
  }

}
