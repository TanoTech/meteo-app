import { Container, Spinner, Card } from 'react-bootstrap';

const AllertsMeteo = ({ data }) => {
    return (
        <Container className='alertsDet'>
            {data && data.alerts && data.alerts.length > 0  ? (
                <div className='d-flex'>
                    <Card>
                        <h3>{data.alerts[0].event}</h3>
                        <p>{data.alerts[0].description}</p>
                    </Card>
                </div>
            ) : (
                <h3>No alerts to show</h3>
            )}
        </Container>
    );
};

export default AllertsMeteo;