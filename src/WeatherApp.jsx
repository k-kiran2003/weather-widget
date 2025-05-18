import Box from "./Box";
import Input from "./Input";
import { useState } from "react";
export default function WeatherApp() {
    const [weatherInfo,setweatherInfo] = useState({

            city: "Amritsar",
            feels_like: 312.37,
            humidity: 8,
            temp: 312.37,
            temp_max: 312.37,
            temp_min: 312.37,
            weather: "Clear",
    });
    let updateinfo = (cityinfo) => {
    setweatherInfo(cityinfo);
    }
   
    return(
        <>


            <Input updateinfo={updateinfo}  />
            <Box cityinfo={weatherInfo}/>
        </>
    )


}