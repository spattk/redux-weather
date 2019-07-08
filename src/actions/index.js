import axios from 'axios';

const API_KEY = '3a3941cb76d9fab6db6f023268d5ce52';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

//An action creator
export function fetchWeather(city){

    const url = `${ROOT_URL}&q=${city},in`;
    const request = axios.get(url);

    return {
        type : FETCH_WEATHER,
        payload : request
    };
}