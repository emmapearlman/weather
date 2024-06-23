import React, { useState } from "react";
import WeatherFilter from "./WeatherFilter";
import WeatherDisplay from "./WeatherDisplay";
import WeatherData from "./WeatherData";

export default function WeatherTable(){
    const [filterText, setFilterText] = useState("");
    const [filteredWeather, setFilteredWeather] = useState(WeatherData);
    return (
        <>
        <p>Please enter a location</p>
        <WeatherFilter filterText={filterText} onFilterTextChange={setFilterText} />
        <WeatherDisplay   filterText={filterText} 
            filteredWeather={filteredWeather} 
            />
        </>
    );
}