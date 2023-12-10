import React, { useState } from 'react';

import { fetchWeather } from './api/fetchWeather';
import './App.css';

//fuction component fiha kelmet App bch nafficheha
const App = () => {
    //na3mlou function njibou fiha query ( search term ) w setquery ( set method le state field = query field ) 
    const [query, setQuery] = useState('');

    //bch njibou data mel API
    //ken nzelna Enter ba3d ma nektbou ( query = esm el bled )
    //y7ot esm el beld fel fonction mta3 el API w y7ot e reponse fi (data)
    const search = async (e) => {
        if (e.key === 'Enter') {
            const data = await fetchWeather(query);

            console.log(data);
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
        </div>
        );
}

//export App : bch najjem n'importeha w nesta3melha fi index.js
export default App;