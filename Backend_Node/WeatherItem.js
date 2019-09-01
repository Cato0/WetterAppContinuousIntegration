class Item {
	constructor(name, temperature, weekday, minTemp, maxTemp, humidity, wind, date, icon) {

		this.City_name  = name
		this.temperature  = temperature,
		this.weekday  = weekday,
		this.minTemp  = minTemp,
		this.maxTemp  = maxTemp,
		this.humidity  = humidity,
		this.wind  = wind,
		this.date  = date,
		this.icon = icon
		
	}
}

module.exports = Item;