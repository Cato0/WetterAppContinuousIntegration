import { TestBed, inject } from '@angular/core/testing';
import { Service1Service } from './service1.service';
import { HttpModule } from '@angular/http';
import { WeatherItem } from './weather-item';

describe('Service1Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service1Service],
	  imports: [HttpModule]
    });
  });

  it('Service instance should be created', inject([Service1Service], (service: Service1Service) => {
    expect(service).toBeTruthy();
  }));
 
  it('getWeeklyWeatherData receives an object', inject([Service1Service], (service: Service1Service) => {
  
    let data = service.getWeeklyWeatherData("Bottrop");

    expect(data).toBeDefined();
  }));

  it('getTodaysWeatherData receives an object', inject([Service1Service], (service: Service1Service) => {
  
    let data = service.getTodaysWeatherData("Bottrop");

    expect(data).toEqual(jasmine.any(Object));

  }));

  it('getWeeklyWeatherData should return 4 items', inject([Service1Service], (service: Service1Service) => {
  
    service.getWeeklyWeatherData("Bottrop").then( (res: Array<WeatherItem>) => {

      expect(res.length ).toBe(4);
    });

  }));

  it('Temperature should be a Number', inject([Service1Service], (service: Service1Service) => {
  
    service.getTodaysWeatherData("Bottrop").then( (res : WeatherItem) => {

      expect(res.temperature).toEqual(jasmine.any(Number));
    });

  }));

  it('Name should be a String', inject([Service1Service], (service: Service1Service) => {
  
    service.getTodaysWeatherData("Bottrop").then( (res : WeatherItem) => {

      expect(res.City_name).toEqual("Bottrop");
    });

  }));

});
