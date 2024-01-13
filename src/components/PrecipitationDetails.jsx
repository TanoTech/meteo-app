import { Container, Spinner, Card } from 'react-bootstrap';

const PrecipitationDetails = ({ data }) => {

    return (
        <Container fluid className='precDet'>
            {data && data.days ? (
                <div className='d-flex'>
                    <Card>
                        <p><img src="assets/imgs/icons/precipitation.png" alt="precipitation" />Precipitation:{data.days[0].precip}</p>
                        <p><img src="assets/imgs/icons/probability.png" alt="probability" />Probability: {data.days[0].precipprob} %</p>
                        <p><img src="assets/imgs/icons/pressure.png" alt="pressure" />Pressure: {data.days[0].pressure} hPa</p>
                    </Card>
                </div>
            ) : (
                <p></p>
            )}
        </Container>
    );
};

export default PrecipitationDetails;