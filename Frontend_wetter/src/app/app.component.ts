import { Component } from '@angular/core';
import { Service1Service } from './service1.service';
import { MainweatherdataComponent } from './mainweatherdata/mainweatherdata.component';

// import { Chart } from 'chart.js';

@Component(
	{
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
	})
	
export class AppComponent 
	{

		title = 'Weather App';

		constructor (private serv: Service1Service)
		{
		}
		
		ngOnInit() 
		{

		}
		
	}
