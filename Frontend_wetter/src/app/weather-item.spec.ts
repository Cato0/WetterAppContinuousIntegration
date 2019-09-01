import { TestBed, inject } from '@angular/core/testing';
import { WeatherItem } from './weather-item';

describe('WeatherItem', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      //providers: [WeatherItem]
    });
  });

  it('constructor works with arguments', inject([], () => {

    let name = "Paris";
    let temperature = 15;

    let item = new WeatherItem(name,temperature);
    expect(item).toBeTruthy();

  }));

  it('constructor works with no arguments', inject([], () => {

    let obj = new WeatherItem();

    expect(obj).toBeDefined();
  }));
});
