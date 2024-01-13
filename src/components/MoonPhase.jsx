import React from 'react';
import { Container, Card } from 'react-bootstrap';
import MoonPhaseNames from './MoonPhaseName';

const MoonPhase = ({ data }) => {
    const MoonImage = ({ moonphase }) => {
        const findMoonPhase = (value) => {
            const roundedValue = Math.round(value * 4) / 4;

            const moonPhaseObject = MoonPhaseNames.find(phase => {
                return roundedValue === phase.value;
            });

            return moonPhaseObject;
        };

        const moonPhaseObject = findMoonPhase(moonphase);
        const moonPhaseName = moonPhaseObject.name;
        const imagePath = moonPhaseObject.imagePath;

        return (
            <div>
                <img src={imagePath} alt={moonPhaseName} />
                <p>{moonPhaseName}</p>
            </div>
        );
    };

    return (
        <Container fluid className='moonPhase'>
            {data && data.days ? (
                <div className='d-flex'>
                    <Card>
                        <MoonImage moonphase={data.days[0].moonphase} />
                    </Card>
                </div>
            ) : (
                <></>
            )}
        </Container>
    );
};

export default MoonPhase;
