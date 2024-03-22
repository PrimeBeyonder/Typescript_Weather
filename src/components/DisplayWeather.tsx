import React, { useCallback, useState } from "react";
import { MainWrapper } from "./weather.module";
import { AiOutlineSearch } from "react-icons/ai";
import { WiHumidity } from "react-icons/wi";
import { SiWindicss } from "react-icons/si";
import {
    BsFillSunFill,
    BsCloudyFill,
    BsFillCloudRainFill,
    BsCloudFog2Fill,
} from "react-icons/bs";
import { RiLoaderFill } from "react-icons/ri";
import { TiWeatherPartlySunny } from "react-icons/ti";
import axios from "axios";

interface WeatherDataProps {
    name: string;
    main: {
        temp: number;
        humidity: number;
    };
    sys: {
        country: string;
    };
    weather: {
        main: string;
    }[];
    wind: {
        speed: number;
    };

}
const DisplayWeather = () => {
    const api_key = "07c569eed39ebaf09b115ee1dda0a89f";
    const api_Endpoint = `https://api.openweathermap.org/data/3.0/`;
    const [weatherData, setWeatherData] = useState<WeatherDataProps | null>(null);
    const [isLoading, setLoading] = useState(false);
    const [searchCity, setSearchCity] = useState("");


    const fetchCurrentWeather = useCallback
        (async (lat: number, lon: number) => {
            const url = `${api_Endpoint}weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`;
            const res = await axios.get(url);
            return res.data;
        }, [api_Endpoint, api_key]);

    const fetchWeatherData = async (city: string) => {
        try {
            const url = `${api_Endpoint}weather?q=${city}&appid=${api_key}&units=metric`;
            const searchResponse = await axios.get(url);
            const currentWeatherData: WeatherDataProps = searchResponse.data;
            return { currentWeatherData };
        } catch (error) {
            throw error;
        };
    };
    

    return (
        <div>DisplayWeather</div>
    )
}

export default DisplayWeather