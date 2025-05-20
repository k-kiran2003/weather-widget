
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';



export default function Input({ updateinfo }) {
    const [city, setCity] = useState("");
    const url = "http://api.openweathermap.org/data/2.5/weather";

 
    
    const apiKey = import.meta.env.VITE_API_KEY;

    const fetchUrl = async () => {

        try{
            let data = await fetch(`${url}?q=${city}&appid=${apiKey}&units=metric`);
            console.log(import.meta.env.VITE_API_KEY); // Should show your API key now

            console.log(apiKey)
            let response = await data.json();
            const cityinfo = {
                city: city,
                humidity: response.main.humidity,
                temp: response.main.temp,
                temp_max: response.main.temp_max,
                temp_min: response.main.temp_min,
                weather: response.weather[0].main,
            }
            console.log(cityinfo);
            return cityinfo;
        }
        catch(error){
            console.log("Error fetching data:", error);
            return {
                city: "Error",
                humidity: 0,
                temp: 0,
                temp_max: 0,
                temp_min: 0,
                weather: "Error",
            };
        }
    
    }

    const handleChange = (event) => {
        setCity(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!city.trim()) return; // Prevent empty search
        console.log(city);
        let newinfo = await fetchUrl();
        updateinfo(newinfo);
        setCity("");
    };
    


    return (
        <>
            <form onSubmit={handleSubmit}>
                <h2>Search Weather</h2>
                <div>
                    <TextField
                        onChange={handleChange}
                        value={city}
                        id="city"
                        label=" Enter City"
                        variant="outlined"
                    />
                    <br></br> <br></br>
                    <Button type="submit" variant="contained">Search</Button><br></br><br></br>
                </div>
            </form>

        </>
    );
}
