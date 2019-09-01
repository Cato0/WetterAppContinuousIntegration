import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherdiagrammComponent } from './weatherdiagramm.component';
import { HttpModule } from '@angular/http';
import { isListLikeIterable } from '../../../node_modules/@angular/core/src/change_detection/change_detection_util';

describe('WeatherdiagrammComponent - ', () => {
  let component: WeatherdiagrammComponent;
  let fixture: ComponentFixture<WeatherdiagrammComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherdiagrammComponent ],
	  imports: [HttpModule]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherdiagrammComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('create Diagramm should work as intended', () => {

    let spy1 = spyOn(component, 'createTempDiagramm');
  
    let dataPoints = [20, 10, 5, 22, 17];
    let diagramm = component.createDiagramm("Temp", dataPoints);

    expect(spy1).toHaveBeenCalled();
  });

  it('createDiagramm should call createTempDiagramm', () => {

    let spy1 = spyOn(component, 'createTempDiagramm');
  
    let dataPoints = [20, 10, 5, 22, 17];

    component.createDiagramm("Temp", dataPoints);

    expect(spy1).toHaveBeenCalled();
  });

  it('createDiagramm should call createRainDiagramm', () => {

    let spy1 = spyOn(component, 'createRainDiagramm');
  
    let dataPoints = [20, 10, 5, 22, 17];

    component.createDiagramm("Rain", dataPoints);

    expect(spy1).toHaveBeenCalled();
  });

  it('createDiagramm should call createWindDiagramm', () => {

    let spy1 = spyOn(component, 'createWindDiagramm');
  
    let dataPoints = [20, 10, 5, 22, 17];

    component.createDiagramm("Wind", dataPoints);

    expect(spy1).toHaveBeenCalled();
  });

});
