import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GetWeather from './GetWeather';
import WeeklyMeteo from './WeeklyMeteo';
import HourlyMeteo from './HourlyMeteo';
import WindDetails from './WindDetails';
import './GetWeather.css'
import PrecipitationDetails from './PrecipitationDetails';
import AllertsMeteo from './AllertsMeteo';
import SunsetDetails from './SunsetDetails';
import { Container } from 'react-bootstrap';
import MoonPhase from './MoonPhase';


const MeteoApp = ({ location }) => {
    const [data, setData] = useState(null);
    useEffect(() => {
        if (location) {
            fetchData();
        }
    }, [location]);

    const fetchData = async () => {
        const apiKey = 'TE449MAU229W75YZP92PSTHAM'
        try {
            const response = await axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&include=days%2Chours%2Calerts%2Ccurrent&key=${apiKey}&contentType=json`);
            setData(response.data);
        } catch (error) {
            console.error('Errore durante il recupero dei dati meteo:', error);
        }
    };

    return (
        <>

            <GetWeather data={data} />
            <h3>Hourly Forecast</h3>
            <HourlyMeteo data={data} />
            <Container fluid className='detailsComp'>
                <WindDetails data={data} />
                <PrecipitationDetails data={data} />
                <SunsetDetails data={data} />
                <MoonPhase data={data} />
            </Container>
            <h3>Weekly Forecast</h3>
            <WeeklyMeteo data={data} />
            <AllertsMeteo data={data} />
        </>
    );
};

export default MeteoApp;