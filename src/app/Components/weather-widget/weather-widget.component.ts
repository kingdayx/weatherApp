import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.css'],
})
export class WeatherWidgetComponent implements OnInit {
  constructor() {}

  WeatherData: any;
  @Input() imgURL = '';
  ngOnInit(): void {
    this.getWeatherData();
    console.log(this.WeatherData);
    console.log('sunset', this.WeatherData.sun_set);
    console.log('input', this.WeatherData.consolidated_weather[0]);
    this.WeatherData.humidity =
      this.WeatherData.consolidated_weather[0].humidity;
    this.WeatherData.today =
      this.WeatherData.consolidated_weather[0].applicable_date;
    this.WeatherData.temp_min = (
      this.WeatherData.consolidated_weather[0].max_temp * 10
    ).toFixed(0);
    this.WeatherData.temp_max = (
      this.WeatherData.consolidated_weather[0].min_temp * 10
    ).toFixed(0);
    this.WeatherData.temp_feels_like =
      this.WeatherData.consolidated_weather[0].predictability;
  }

  getWeatherData() {
    let data = JSON.parse(
      '{"consolidated_weather":[{"id":6748738526642176,"weather_state_name":"Heavy Cloud","weather_state_abbr":"hc","wind_direction_compass":"SSW","created":"2022-02-12T00:59:02.049100Z","applicable_date":"2022-02-12","min_temp":3.0549999999999997,"max_temp":8.629999999999999,"the_temp":7.85,"wind_speed":10.23316724830722,"wind_direction":203.16659425877583,"air_pressure":1022.0,"humidity":63,"visibility":13.025182931678994,"predictability":71},{"id":5256292957421568,"weather_state_name":"Heavy Rain","weather_state_abbr":"hr","wind_direction_compass":"SSW","created":"2022-02-12T00:59:01.731560Z","applicable_date":"2022-02-13","min_temp":6.75,"max_temp":10.31,"the_temp":8.765,"wind_speed":12.725335167469977,"wind_direction":192.3496309918392,"air_pressure":1000.5,"humidity":84,"visibility":8.79333442694663,"predictability":77},{"id":4733042326241280,"weather_state_name":"Light Rain","weather_state_abbr":"lr","wind_direction_compass":"W","created":"2022-02-12T00:59:02.069371Z","applicable_date":"2022-02-14","min_temp":5.550000000000001,"max_temp":8.780000000000001,"the_temp":8.75,"wind_speed":8.769193151387896,"wind_direction":262.4109514477507,"air_pressure":1002.0,"humidity":78,"visibility":12.798382446512367,"predictability":75},{"id":4709654450929664,"weather_state_name":"Heavy Rain","weather_state_abbr":"hr","wind_direction_compass":"SW","created":"2022-02-12T00:59:01.653023Z","applicable_date":"2022-02-15","min_temp":3.45,"max_temp":10.23,"the_temp":9.625,"wind_speed":11.705018591715051,"wind_direction":227.99173569253674,"air_pressure":1013.5,"humidity":81,"visibility":8.96825041756144,"predictability":77},{"id":5890987286069248,"weather_state_name":"Heavy Rain","weather_state_abbr":"hr","wind_direction_compass":"SW","created":"2022-02-12T00:59:02.140531Z","applicable_date":"2022-02-16","min_temp":6.725,"max_temp":13.235,"the_temp":11.99,"wind_speed":9.273116002545137,"wind_direction":234.49999999999997,"air_pressure":1011.0,"humidity":90,"visibility":9.84003420027042,"predictability":77},{"id":4531152254664704,"weather_state_name":"Light Cloud","weather_state_abbr":"lc","wind_direction_compass":"WSW","created":"2022-02-12T00:59:04.471982Z","applicable_date":"2022-02-17","min_temp":5.915,"max_temp":10.809999999999999,"the_temp":8.06,"wind_speed":8.655043148015588,"wind_direction":255.0,"air_pressure":1031.0,"humidity":58,"visibility":9.999726596675416,"predictability":70}],"time":"2022-02-12T02:44:44.301919Z","sun_rise":"2022-02-12T07:20:10.389176Z","sun_set":"2022-02-12T17:10:00.647822Z","timezone_name":"LMT","parent":{"title":"England","location_type":"Region / State / Province","woeid":24554868,"latt_long":"52.883560,-1.974060"},"sources":[{"title":"BBC","slug":"bbc","url":"http://www.bbc.co.uk/weather/","crawl_rate":360},{"title":"Forecast.io","slug":"forecast-io","url":"http://forecast.io/","crawl_rate":480},{"title":"HAMweather","slug":"hamweather","url":"http://www.hamweather.com/","crawl_rate":360},{"title":"Met Office","slug":"met-office","url":"http://www.metoffice.gov.uk/","crawl_rate":180},{"title":"OpenWeatherMap","slug":"openweathermap","url":"http://openweathermap.org/","crawl_rate":360},{"title":"Weather Underground","slug":"wunderground","url":"https://www.wunderground.com/?apiref=fc30dc3cd224e19b","crawl_rate":720},{"title":"World Weather Online","slug":"world-weather-online","url":"http://www.worldweatheronline.com/","crawl_rate":360}],"title":"London","location_type":"City","woeid":44418,"latt_long":"51.506321,-0.12714","timezone":"Europe/London"}'
    );
    this.setWeatherData(data);
  }
  setWeatherData(data: any) {
    this.WeatherData = data;
    this.WeatherData.temp_celcius = (
      this.WeatherData.consolidated_weather[0].the_temp - 273.15
    ).toFixed(0);
    this.WeatherData.max_temp = (
      this.WeatherData.consolidated_weather[0].max_temp - 273.15
    ).toFixed(0);
    this.WeatherData.min_temp = (
      this.WeatherData.consolidated_weather[0].min_temp ** 10
    ).toFixed(0);
    this.WeatherData.temp_feels_like =
      this.WeatherData.consolidated_weather[0].temp_feels_like;
    this.WeatherData.consolidated_weather.humidity = this.WeatherData.humidity;
    this.WeatherData.title = this.WeatherData.title;
    this.WeatherData.today =
      this.WeatherData.consolidated_weather.applicable_date;
  }
}
