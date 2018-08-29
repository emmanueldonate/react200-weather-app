import axios from 'axios';

const API_KEY = '7feee68cbd716c074531f44dc9d07fd9';

//export const searchWeather = 'SEARCH_WEATHER';

export function searchWeather(name) {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${name}&units=imperial&appid=${API_KEY}`;
    const promise = axios.get(url);
    console.log('url', url);
    


    return {
        type: 'SEARCH_CITY',
        payload: promise
    };  
}