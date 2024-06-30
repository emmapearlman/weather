import React, { useState } from "react";
import WeatherDisplay from "./WeatherDisplay";
import './App.css';

export default function WeatherFilter() {

    const key = '1faa36d6a3ac4ca0850174030242206';
    const [data, setData] = useState({ filteredWeather: [] })
    const [query, setQuery] = useState("");
    let url = 'http://api.weatherapi.com/v1/current.json?key=' + key;


    const getData = async () => {
        if (query.length >= 3) {
            url = url + '&q=' + query;
            console.log(url);
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            setData(data);
        }
    };

    return (
        <>

            <input
                id="filter"
                type="text"
                value={query} placeholder="Search..."
                onChange={event => setQuery(event.target.value)} />
            <button  onClick={getData}>Search</button>

            <WeatherDisplay
                filteredWeather={data}
            />
        </>
    );
}

