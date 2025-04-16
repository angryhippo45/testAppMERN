import React, { useState, useEffect } from "react";
import axios from 'axios';


export default function Weather() {

    const [coord, setCoord] = useState<number[]>([]);
    const [currentWeather, setCurrentWeather] = useState<number | undefined>();
    const [city, setCity] = useState<string | undefined>();
    const [icon, setIcon] = useState<string | undefined>();
    const [isImperial, setIsImperial] = useState<boolean>(true);

    useEffect(() => {
       popCoord();
    },[])
    
    const popCoord = () => {
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                setCoord([pos.coords.latitude, pos.coords.longitude]);
            }
        )
    }
    
    const getWeather = async () => {
        const results = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${coord[0]}&lon=${coord[1]}&appid=ce309858c9580a2f86ac0e0f45374afb&units=imperial`)
        .then((res) => res.data)

        setCurrentWeather(results.main.temp)
        setCity(results.name);
        setIcon(results.weather[0].icon);
    }

    const convert = () => {
        const tempImperial: boolean = !isImperial;
        if(!tempImperial && currentWeather !== undefined){
            //convert to celcius
            const celsius: number = (currentWeather - 32) / (1.8);
            console.log(celsius);
            setCurrentWeather(celsius);
    
        }else if(tempImperial && currentWeather !== undefined){
            //convert to farenheit
            const f: number = (currentWeather * (9/5)) + (32);
            console.log(f);
            setCurrentWeather(f);

        }       
        setIsImperial(tempImperial);
    }

    return (
        <div>
            <img 
                src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                alt="weatherIcon"
            />            
        <span><h1>Current Weather in {city}: {currentWeather} deg</h1></span>
            <button onClick={getWeather}>Get Weather</button>
            <button onClick={convert}>Celsuis / Fahrenheit</button>
        </div>
    )


}