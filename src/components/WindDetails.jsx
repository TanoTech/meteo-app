import { Container, Spinner, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';

const getWindDirection = (degrees) => {
    const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW', 'N'];
    const index = Math.round(degrees / 45);
    return directions[index];
};

const WindDetails = ({ data }) => {

    const iconRotation = (degrees) => {
        const offset = -45;
        return { transform: `rotate(${degrees + offset}deg)` };
    };

    return (
        <Container className='windDetails'>
            {data && data.days ? (
                <div className='d-flex'>
                    <Card>
                        <p><img src="assets/imgs/icons/wind.png" alt="wind" /> {data.days[0].windspeed} km/h</p>
                        <p>{getWindDirection(data.days[0].winddir)}</p>
                        <FontAwesomeIcon
                            icon={faLocationArrow}
                            style={iconRotation(data.days[0].winddir)}
                        />
                        <p>{data.days[0].winddir}°</p>
                        <p>Windgust: {data.days[0].windgust} km/h</p>
                    </Card>
                </div>
            ) : (
                <p></p>
            )}
        </Container>
    );
};

export default WindDetails;