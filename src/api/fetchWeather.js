import axios from 'axios';
//URL mta3 el API + KEY
const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'a62741405e2d3b9b8c6270196d087e68';

//bch na3mlou fonction bech tkoun responsable bch ta3mel fetch le DATA
    export const fetchWeather = async (query) => {
        const { data } = await axios.get(URL, {
            params: {
                q: query,
                units: 'metric',
                APPID: API_KEY,
            }
        });
    
        return data;
    }