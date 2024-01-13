import { Container, Spinner, Card } from 'react-bootstrap';

const SunsetDetails = ({ data }) => {
    return (
        <Container className='sunSet'>
            {data && data.days ? (
                <div>
                    <Card className='sunsetCard'>
                        <p><img src="assets/imgs/icons/sunrise.png" alt="sunrise" />{data.days[0].sunrise}</p>
                        <p> <img src="assets/imgs/icons/sunset.png" alt="sunset" />{data.days[0].sunset}</p>
                    </Card>
                </div>
            ) : (
                <></>
            )}
        </Container>
    );
};

export default SunsetDetails;