import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import { useState } from 'react'

export default function WeatherApp() {

    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        weather : "Dusty",
        temp : 34,
        temp_max : 36,
        temp_min : 28,
        humidity : 97,
        feels_like : 32
    })

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo)
    }

    return(
        <div>
            <SearchBox updateInfo={updateInfo}/>
            <hr />
            <InfoBox info={weatherInfo} />
        </div>
    )
}