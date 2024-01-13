import React, { useState, useEffect } from 'react';
import { Container, Spinner, CardFooter, CardHeader, CardBody, Card } from 'react-bootstrap'
import MeteoIcons from './MeteoIcons';

const GetWeather = ({ data }) => {

    return (
        <Container fluid className='getWeather'>
            {data && data.days ? (
                <>
                    {data.days.slice(0, 1).map((day, index) => (  
                        <Card className='getWeatherCard' key={index}>
                            <CardHeader>
                            <h1>{data.resolvedAddress}</h1>
                            </CardHeader>
                            <CardBody><img className='img-fluid' src={MeteoIcons[day.icon]} alt={day.conditions} /></CardBody>
                            <CardFooter>
                                <p>{day.description}</p>
                                <p><img src="assets/imgs/icons/temperature-high.png" alt="high temperature" />Max {day.tempmax}°C - <img src="assets/imgs/icons/temperature-low.png" alt="low temperature" /> Min {day.tempmin}°C </p>
                                <p><img src="assets/imgs/icons/humidity.png" alt="humidity" />Humidity {day.humidity}%</p>
                                <p>Feels like {day.feelslike}</p>
                            </CardFooter>
                        </Card>
                    ))}
                </>
            ) : (
                <Spinner></Spinner>
            )}
        </Container>
    );
}

export default GetWeather;