import React from "react";
import './App.css';

export default function WeatherFilter({ filterText,onFilterTextChange }) {

    return (
        <>
            <form>
                <input
                    type="text"
                    value={filterText} placeholder="Search..."
                    onChange={(e) => onFilterTextChange(e.target.value.trim())} />

            </form>
        </>
    );
}

