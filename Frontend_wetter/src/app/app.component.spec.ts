import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MainweatherdataComponent } from './mainweatherdata/mainweatherdata.component';
import { WeatherdiagrammComponent } from './weatherdiagramm/weatherdiagramm.component';
import { HttpModule } from '@angular/http';

describe('AppComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MenuComponent,
        MainweatherdataComponent,
        WeatherdiagrammComponent
      ],
	  imports: [HttpModule]
    }).compileComponents();

  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;

    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
   const fixture = TestBed.createComponent(AppComponent);
   const app = fixture.debugElement.componentInstance;
   expect(app.title).toEqual('Weather App');
  }));

  // it('should render title in a h1 tag', async(() => {
    // const fixture = TestBed.createComponent(AppComponent);
    // fixture.detectChanges();
    // const compiled = fixture.debugElement.nativeElement;
    
    // expect(compiled.querySelector('h1').textContent).toContain('Welcome to wetter!');
  // }));

  
  it('Button Text should be Stadt ' , async(() => {

    const fixture = TestBed.createComponent(AppComponent);
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('button').textContent).toBe("Stadt ");

  }));

  it('Menu should Contain Bochum' , async(() => {

    const fixture = TestBed.createComponent(AppComponent);
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('app-menu').textContent).toContain("Bochum");

  }));

});
