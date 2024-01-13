import { Container, Spinner, Col, Row, Card, CardHeader, CardBody, CardFooter } from 'react-bootstrap'
import MeteoIcons from './MeteoIcons';

const WeeklyMeteo = ({ data }) => {

    const formatDate = (datetime) => {
        const [year, month, day] = datetime.split('-');
        return `${day}/${month}`;
    };

    return (
        <Container fluid className='weeklyMeteo'>
            {data && data.days ? (
                <div className='d-flex'>
                    {data.days.slice(0, 7).map((day, index) => (
                        <Col key={index}>
                            <Card>
                                <CardHeader>
                                    <h4>{index === 0 ? 'Today' : formatDate(day.datetime)}</h4>
                                </CardHeader>
                                <CardBody>
                                    <img className='img-fluid' src={MeteoIcons[day.icon]} alt={day.conditions} />
                                </CardBody>
                                <CardFooter>
                                    <p><img src="assets/imgs/icons/temperature-high.png" alt="high temperature" />Max {day.tempmax}°C </p>
                                    <p><img src="assets/imgs/icons/temperature-low.png" alt="low temperature" />Min {day.tempmin}°C </p>
                                    <p><img src="assets/imgs/icons/humidity.png" alt="humidity" />Humidity {day.humidity}%</p>
                                    <p><img src="assets/imgs/icons/precipitation.png" alt="precipitation" />Precipitation:{day.precip}</p>
                                    <p><img src="assets/imgs/icons/wind.png" alt="wind" /> {day.windspeed} km/h</p>
                                    <p>Feels like {day.feelslike}</p>
                                </CardFooter>
                            </Card>
                        </Col>
                    ))}
                </div>
            ) : (
                <Spinner></Spinner>
            )}
        </Container>
    );
}

export default WeeklyMeteo;