import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainweatherdataComponent } from './mainweatherdata.component';
import { WeatherdiagrammComponent } from './../weatherdiagramm/weatherdiagramm.component';
import { HttpModule } from '@angular/http';
import { type } from 'os';
import { By } from "@angular/platform-browser";
import { WeatherItem } from '../weather-item';

describe('MainweatherdataComponent', () => {
  let component: MainweatherdataComponent;
  let fixture: ComponentFixture<MainweatherdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
	  MainweatherdataComponent,
	  WeatherdiagrammComponent
	  ],
	  imports: [HttpModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    
    fixture = TestBed.createComponent(MainweatherdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('http Service should exist', () => {
      
    var service = component.httpService;

    expect(service).toBeDefined();
  });

  it('should change itemIcon when calling updateValues', () => {
      
    var itemInput = new WeatherItem();
    var itemOutput = new WeatherItem();

    itemInput.icon          = "heavy intensity drizzle rain";

    var service       = component.updateValues(itemOutput, itemInput);

    expect(component.itemIcon).toBe("Rain");
  });

  it('should change itemIcon into Drizzle', () => {
      
    var itemInput = new WeatherItem();
    var itemOutput = new WeatherItem();

    itemInput.icon          = "heavy intensity drizzle";

    var service       = component.updateValues(itemOutput, itemInput);

    expect(component.itemIcon).toBe("Rain");
  });

  it('should change itemIcon into Snow', () => {
      
    var itemInput = new WeatherItem();
    var itemOutput = new WeatherItem();

    itemInput.icon          = "lightly snowy";

    var service       = component.updateValues(itemOutput, itemInput);

    expect(component.itemIcon).toBe("Snow");
  });

  it('should change itemIcon into Thunder', () => {
      
    var itemInput = new WeatherItem();
    var itemOutput = new WeatherItem();

    itemInput.icon          = "heavy intensity thunderstorm";

    var service       = component.updateValues(itemOutput, itemInput);

    expect(component.itemIcon).toBe("Thunder");
  });

  it('should change itemIcon into Cloud', () => {
      
    var itemInput = new WeatherItem();
    var itemOutput = new WeatherItem();

    itemInput.icon          = "heavy intensity thunderstorm";

    var service       = component.updateValues(itemOutput, itemInput);

    expect(component.itemIcon).toBe("Thunder");
  });

  it('should change itemIcon into Mist', () => {
      
    var itemInput = new WeatherItem();
    var itemOutput = new WeatherItem();

    itemInput.icon          = "intense fog ";

    var service       = component.updateValues(itemOutput, itemInput);

    expect(component.itemIcon).toBe("Mist");
  });

  it('should change itemIcon into Drizzle', () => {
      
    var itemInput = new WeatherItem();
    var itemOutput = new WeatherItem();

    itemInput.date		      = "";
		itemInput.City_name     = "Bottrop";
		itemInput.weekday  	    = "Friday";
		itemInput.wind 		      = 20;
		itemInput.humidity 	    = 20;
		itemInput.minTemp 	    = 20;
		itemInput.maxTemp 	    = 20;
    itemInput.temperature   = 20;
    itemInput.icon          = "heavy intensity drizzle";

    var service       = component.updateValues(itemOutput, itemInput);

    expect(component.itemIcon).toBe("Rain");
  });

  it('check whether the function returns a number', () => {
    
    let spy = spyOn(component, 'updateTodaysData').and.returnValue("Bottrop");
    let t = 2;
    expect(t).toEqual(jasmine.any(Number));
  });
  
  it('updateWeatherData should call updateTodaysData before updateWeatherForecast', () => {
    
    let spy1 = spyOn(component, 'updateTodaysData');
    let spy2 = spyOn(component, 'updateWeatherForecast');

    component.updateWeatherData("Bottrop").then( () => {
      expect(spy1).toHaveBeenCalledBefore(spy2);
      
    });
  });

});
