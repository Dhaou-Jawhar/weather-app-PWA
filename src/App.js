import React, { useState } from 'react';

import { fetchWeather } from './api/fetchWeather';
import './App.css';

//fuction component fiha kelmet App bch nafficheha
const App = () => {
    //na3mlou function njibou fiha query ( search term ) w setquery ( set method le state field = query field ) 
    const [query, setQuery] = useState('');

    //3malna const samineha weather w bch n7otou fiha e data eli raj3a mel API ( ba3d ma tenzel Enter )
    const [weather, setWeather] = useState({});

    //bch njibou data mel API
    //ken nzelna Enter ba3d ma nektbou ( query = esm el bled )
    //y7ot esm el beld fel fonction mta3 el API w y7ot e reponse fi (data)
    const search = async (e) => {
        if (e.key === 'Enter') {
            const data = await fetchWeather(query);

            setWeather(data);
            setQuery('');
    }
}
    
    return (
        // main-container : fiha el background mta3 el page + style css
        <div className='main-container'>
            <input 
                type='text'
                className='search'
                placeholder='search ...'
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={search}
            />

            {weather.main &&(
                <div className='city'>
                    <h2 className='city-name'>
                        <span>{weather.name}</span>
                        <sup>{weather.sys.country}</sup>
                    </h2>
                    <div className='city-temp'>
                        {Math.round(weather.main.temp)}
                        <sup>&deg;C</sup>
                    </div>
                    <div>
                        <div className='info'>
                            <img className='city-icon' src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
                            <p>{weather.weather[0].description}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
        );
}

//export App : bch najjem n'importeha w nesta3melha fi index.js
export default App;