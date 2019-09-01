export class WeatherItem {

	constructor(name?, temp?) // name, temperature, wind 
	{
		if (name) {this.City_name = name;}
		if (temp) {this.temp = temp;}
		// this.wind = wind;
	}

	public City_name				:	string;
	public weekday		:	string;
	public icon				:	string;
	public date				:	string;
	public temperature:	number;
	public minTemp		: number;
	public maxTemp		:	number;
	public humidity		: number;
	public wind				:	number;

	private temp			: any;
	//private temp = [];
	private rainProb:	number;
  
  // dont make function set Name

	setTemperature (temp) {
		this.temp = temp;
	}
  getTemperature () {
		return this.temp;
  }
}

/*
export enum WItem {
    mon = 'Monday',
    tue = 'Tuesday',
    wed = 'Wednesday',
    thu = 'Thursday',
    fri = "Friday",
    sat = 'Saturday',
    sun = 'Sunday'
  }
  */
