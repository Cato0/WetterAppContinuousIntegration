import { Component, OnInit, Input, HostListener } from '@angular/core';
import { MainweatherdataComponent } from '../mainweatherdata/mainweatherdata.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

  @Input() mainWeatherObject: MainweatherdataComponent;

  constructor() { }

  ngOnInit() {
  }

  @HostListener('changeCityName')
  changeCityName(event: any) {
    	
	let name = event.target.text;
	
    if (this.mainWeatherObject) {

      this.mainWeatherObject.wItem0.City_name = name;
      this.mainWeatherObject.updateWeatherData(name);

    }
  }
}
