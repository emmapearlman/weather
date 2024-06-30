import React, { useState } from "react";
import WeatherFilter from "./WeatherFilter";

export default function WeatherTable(){
    const [filteredWeather, setFilteredWeather] = useState([]);

    return (
        <>
        <p>Please enter a location</p>
        <WeatherFilter onClick={setFilteredWeather} 
            filteredWeather={filteredWeather} />
      
        </>
    );
}
