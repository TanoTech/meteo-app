import { Container, Spinner, Col, Card, CardBody, CardImg } from 'react-bootstrap';
import MeteoIcons from './MeteoIcons';

const HourlyMeteo = ({ data }) => {
    const currentDate = new Date();
    const currentHour = currentDate.getHours();

    const formatDate = (datetime) => {
        const time = datetime.split(':')[0];
        return time;
    };

    return (
        <Container fluid className='hourlyMeteo'>
            {data && data.days ? (
                <div className='d-flex'>
                    {data.days[0].hours
                        .filter((hour) => {
                            const hourOfDay = parseInt(hour.datetime.split(':')[0]);
                            return hourOfDay >= currentHour;
                        })
                        .map((hour, index) => (
                            <Col key={index}>
                                <Card className='hourlyForecast'>
                                    <CardBody>
                                        <p>{index === 0 ? 'Now' : formatDate(hour.datetime)}</p>
                                        <CardImg className='img-fluid' src={MeteoIcons[hour.icon]} alt={hour.conditions}></CardImg>
                                        <p>{hour.temp}°C</p>
                                    </CardBody>
                                </Card>
                            </Col>
                        ))}
                </div>
            ) : (
                <Spinner></Spinner>
            )}
        </Container>
    );
};

export default HourlyMeteo;
