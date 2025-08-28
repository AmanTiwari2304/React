import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false)

    const API_URL = "https://api.openweathermap.org/data/2.5/weather"
    const API_Key = "a1412e770cb88de8c414760b80a2fb42";

    let getWeatherInfo = async () => {
        try {
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_Key}&units=metric`);
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        let result = {
            city : city,
            temp : jsonResponse.main.temp,
            temp_min : jsonResponse.main.temp_min,
            temp_max : jsonResponse.main.temp_max,
            humidity : jsonResponse.main.humidity,
            feels_like : jsonResponse.main.feels_like,
            weather : jsonResponse.weather[0].description

        }
        console.log(result);
        return result
        } catch (error) {
            throw error
        }
        

    }

    let handleChange = (evt) => {
        setCity(evt.target.value);
    }

    let handleSubmit = async(evt) => {
        try {
            evt.preventDefault();
            console.log(city);
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo)
        } catch (error) {
            setError(true)
        }
        
    }

    return(
        <div>
            <h3>Search Weather Condition Of Your City</h3>
            <form onSubmit={handleSubmit}>
                <TextField 
                    id="city" 
                    label="City Name" 
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleChange} 
                />
                <br /><br />

                <Button variant="contained" type='submit'>Search</Button>

                {error && <p style={{color : "red"}}>No such place exists!</p>}
            </form>
        </div>
    )
}