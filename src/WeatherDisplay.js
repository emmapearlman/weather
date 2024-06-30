import React from "react";
import './App.css';

export default function WeatherDisplay({ filterText, filteredWeather }) {
    if (Object.keys(filteredWeather)[0] === 'location') {

        return (
            <>
                <p>Weather details</p>
                <ul>
                    <li key={filteredWeather.location.name}>

                        <div className='weatherFrame' style={filteredWeather.current.is_day === 1 ?
                            { backgroundColor: "aqua", color: "black" } : { backgroundColor: "black", color: "white" }}>
                            <h2 >{filteredWeather.location.name}</h2>
                            <div className='leftWeather'>
                                <p> At {filteredWeather.current.last_updated}
                                    <br/>
                                    Temperature {filteredWeather.current.temp_c}&deg;C/{filteredWeather.current.temp_f}&deg;F<br />
                                    Feels like {filteredWeather.current.feelslike_c}&deg;C</p>
                                <p>Windspeed is {filteredWeather.current.wind_kph}, wind direction {filteredWeather.current.wind_dir}</p>
                                <p>Precipitation expected {filteredWeather.current.precip_mm}mm,
                                    with cloud cover at {filteredWeather.current.cloud}%</p>
                                <p>Air pressure is {filteredWeather.current.pressure_mb} bars, with humidity at {filteredWeather.current.humidity}%</p>
                            </div>
                            <div className='rightWeather'>
                                <img src={filteredWeather.current.condition.icon} alt={filteredWeather.current.condition.text} />
                            </div>
                        </div>
                    </li >


                </ul>
            </>
        );
    }
}
