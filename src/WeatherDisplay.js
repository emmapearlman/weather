import React, { useState } from "react";
import './App.css';

export default function WeatherDisplay({ filterText, filteredWeather }) {

    const arrayDataItems = filteredWeather.filter(a => a.location.name.toLowerCase().includes(filterText));
    return (
        <>
            <p>Weather details</p>
            <ul>
                {arrayDataItems.map(item =>
                    <li key={item.location.name}>

                        <div className='weatherFrame' style={item.current.is_day === 1 ?
                            { backgroundColor: "aqua", color: "black" } : { backgroundColor: "black", color: "white" }}>
                            <h2 >{item.location.name}</h2>
                            <div className='leftWeather'>
                                <p>Temperature {item.current.temp_c}/{item.current.temp_f}<br />
                                    Feels like {item.current.feelslike_c}</p>
                                <p>Windspeed is {item.current.wind_kph}, wind direction {item.current.wind_dir}</p>
                                <p>Precipitation expected {item.current.precip_mm}mm,
                                    with cloud cover at {item.current.cloud}%</p>
                                <p>Air pressure is {item.current.pressure_mb} bars, with humidity at {item.current.humidity}</p>
                            </div>
                            <div className='rightWeather'>
                                <img src={item.current.condition.icon} alt={item.current.condition.text} />
                            </div>
                        </div>
                    </li >
                )};

            </ul>
        </>
    );
}