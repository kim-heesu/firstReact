import React, { useState } from "react";
import TemperatureInput from "./TemperatureInput";

function BoilingVerdict(props){
    if(props.celcius >= 100) {
        return <p>물이 끓습니다.</p>;
    }
    return <p>물이 끓지 않습니다.</p>
}

function toCelsius(fahrenheit){
    return ((fahrenheit - 32) * 5)/9;
}

function toFahrenheit(celsius){
    return (celsius * 9) / 5 + 32;
}

function tryConvert(temperature, convert){
    const input = parseFloat(temperature);
    if(Number.isNaN(input)){
        return "";
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

function Calculator(props){
    const [temperature, setTemperature] = useState("");
    const [scale, setScale] = useState("c");

    const handleCelsiusChange = (temperature)=>{
        setTemperature
    }
}