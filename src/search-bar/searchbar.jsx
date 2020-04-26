import React, { Component } from 'react';
import './searchbar.css';
import WeatherData from '../weather-data/weatherdata';
import ReactDOM from 'react-dom';

class Searchbar extends Component {

    render() {
        return (
            <div className="container">
                <form className="form-inline" method="GET" action={this.getdata()}>
                    <input type="text" name='city' id="query" className="form-control mb-2 mr-sm-2" placeholder="City name..." />
                    <button className="btn btn-primary mb-2" type="submit">
                        Get Weather
            </button>
                </form>
            </div>
        );
    }

    getdata (){

        const city = window.location.href.split('?city=')[1];

        // console.log(city);

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a4eb37937d05b86de85a79703099545c`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                // console.log(data);
                if (data['cod'] === 200) {

                    const temprature = data['main']['temp'] - 273;
                    
                    const weather_dict = {
                        'city': city,
                        'temp': this.formatStr(temprature, 2),
                        'disc': data['weather'][0]['description'],
                        'wind': data['wind']['speed'],
                        'humid': data['main']['humidity'],
                        'icon': data['weather'][0]['icon']
                    }

                    return weather_dict;
                }
                else if (window.location.href.split('?city=').length === 2) {
                    ReactDOM.render(
                        <div className="alert alert-danger text-center"><h3>City not fount in the world</h3></div>,
                        document.getElementById('weather_area')
                    );
                }

                return null;

            })
            .then((props) => {

                if (props != null) {
                    ReactDOM.render(
                        <WeatherData props={props} />,
                        document.getElementById('weather_area')
                    );
                    console.log(props);
                }
            });
    }

    formatStr (value, decimal) {
        const arrayRes = value.toString().split('.');
        const num = arrayRes[0];
        const decimalValue = arrayRes[1].substring(0, decimal);

        return `${num}.${decimalValue}`

    }
}
export default Searchbar;