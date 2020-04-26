import React from 'react';
import './weatherdata.css'


function WeatherData({props}) {
    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">Weather on {props.city}</h4>
                <form className="form-inline">
                    <img src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`} alt='...'
                         />
                    <p className="card-text">{props.disc}</p>
                </form>
                <div id="data"></div>
                <div className="row">
                    <div className="col">
                        <a className="card-link" href="#temp">Temprature : {props.temp}° celsius </a>
                    </div>
                    <div className="col">
                        <a className="card-link" href="#wind">Wind speed : {props.wind} Km/h</a>
                    </div>
                    <div className="col">
                        <a className="card-link" href="#humidity">Humidity : {props.humid} %</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WeatherData;