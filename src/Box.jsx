import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';

export default function Box({ cityinfo }){
 

    let clear = "https://images.unsplash.com/photo-1674469520825-eb4804928d32?q=80&w=1514&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let cloudy = "https://images.unsplash.com/photo-1630987437576-92688f9ad653?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let rain = "https://images.unsplash.com/photo-1558920778-a82b686f0521?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let winter = "https://plus.unsplash.com/premium_photo-1671628034479-84998f7a3022?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
return(
    <>
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image= {cityinfo.humidity > 70 ?rain: cityinfo.humidity < 30 ?clear: cityinfo.humidity < 70 ?cloudy: winter} 
               >
                </CardMedia>
               
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {cityinfo.city}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    <span>Weather: {cityinfo.weather}</span><br />
                    <span>Temp: {cityinfo.temp}</span><br />
                    <span>Humidity: {cityinfo.humidity}</span><br />
                    <span>Temp_max: {cityinfo.temp_max}</span><br />
                    <span>Temp_min: {cityinfo.temp_min}</span><br />
                </Typography>
            </CardContent>

     
            
        </Card>
    </>
)
}