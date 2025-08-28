import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import SunnyIcon from '@mui/icons-material/Sunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';


export default function InfoBox({info}){
    const Init_URL = "https://images.unsplash.com/photo-1662377824580-a540e7728635?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    
    const HOT_URL = "https://images.unsplash.com/photo-1504370805625-d32c54b16100?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL = "https://images.unsplash.com/photo-1612119276551-be9efb8ea36a?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL = "https://plus.unsplash.com/premium_photo-1725408051956-a6dc142169bd?q=80&w=997&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    
    return(
        <div>
            <h3>Weather Info</h3>

            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={
                            info && info.humidity !== undefined && info.temp !== undefined
                            ? (info.humidity > 80
                                ? RAIN_URL
                                : info.temp > 15
                                ? HOT_URL
                                : COLD_URL)
                            : Init_URL // fallback image
                        }
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city} {
                                info.humidity > 80
                                ? <ThunderstormIcon />
                                : info.temp > 15
                                ? <SunnyIcon />
                                : <AcUnitIcon />
                                
                            }
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}component="span">
                            <p>Temprature : {info.temp}&deg;C</p>
                            <p>Humidity : {info.humidity}</p>
                            <p>Max_Temp : {info.temp_max}&deg;C</p>
                            <p>Min_Temp : {info.temp_min}&deg;C</p>
                            <p>Weather can be described as {info.weather} and feels like {info.feels_like}&deg;C</p>
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}
