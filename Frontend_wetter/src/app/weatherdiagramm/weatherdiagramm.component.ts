import { Component, OnInit} from '@angular/core';
import { Chart } from 'chart.js';
import { Service1Service } from './../service1.service';

@Component({
  selector: 'app-weatherdiagramm',
  templateUrl: './weatherdiagramm.component.html',
  styleUrls: ['./weatherdiagramm.component.css']
})

export class WeatherdiagrammComponent implements OnInit {

  temp_max = [1, 2, 3];
  temp_min = [4, 5, 6];

  data = [];
  
  alldates = [];
  httpService;
	
	// @Input() mainWeatherObject: MainweatherdataComponent;
  
  constructor(private serv?: Service1Service) {
		
		this.httpService = serv;

  }

  ngOnInit() {
	
	}
  
  createDiagramm = function (diagrammOption, dataPoints) {
	
	let days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
	let label = [];
	
	let today = new Date();
	
	// Inserts Descriptions for X-Axis with Weekdays
	for (let i = 0; i < dataPoints.length; i++) {
		let day = (today.getDay() + i-1) % 7;
		label.push(days[day]);
	}

	switch (diagrammOption) {
		case 'Temp' : this.createTempDiagramm(label, dataPoints);	 break;
		case 'Wind' : this.createWindDiagramm(label, dataPoints); break;
		case 'Rain' : this.createRainDiagramm(label, dataPoints);  break;
	}
	
	}
	
	createTempDiagramm = function (xLabel, dataPoints) {
		
		new Chart(document.getElementById("line-chart"), {
		  type: 'line',
		  data: {
			labels: xLabel,
			datasets: [{ 
				data: dataPoints,
				label: "Temp",
				borderColor: "#3e95cd",
				fill: false
			  },
			]
		  },
		  options: {
			title: {
			  display: true,
			  text: 'Weather'
			}
		  }
		});		
	}

	createRainDiagramm = function (lbl, dataPoints) {
		
		new Chart(document.getElementById("line-chart"), {
		  type: 'line',
		  data: {
			labels: lbl,
			datasets: [{ 
				data: dataPoints,
				label: "Rain",
				borderColor: "#3e95cd",
				fill: false
			  }, 
			  /*{ 
				data: [20, 25, 22, 24, 15, 18],
				label: "Zwei",
				borderColor: "#8e5ea2",
				fill: false
			  }*/
			]
		  },
		  options: {
			title: {
			  display: true,
			  text: 'Weather'
			}
		  }
		});		
	}
	
	createWindDiagramm = function (lbl, dataPoints) {
		new Chart(document.getElementById("line-chart"), {
		  type: 'line',
		  data: {
			labels: lbl,
			datasets: [{ 
				data: dataPoints,
				label: "Wind",
				borderColor: "#3e95cd",
				fill: false
			  }, 
			  /*{ 
				data: [20, 25, 22, 24, 15, 18],
				label: "Zwei",
				borderColor: "#8e5ea2",
				fill: false
			  }*/
			]
		  },
		  options: {
			title: {
			  display: true,
			  text: 'Weather'
			}
		  }
		});		
	}
}
