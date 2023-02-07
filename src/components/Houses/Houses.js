import React, { useEffect, useState } from 'react';
import House from './House/House';

const Houses = () => {
    const [houses, setHouses] = useState([]);

    useEffect(() => {
        fetch('https://hogwarts-school-backend.onrender.com/houses/')
            .then(result => result.json())
            .then(data => setHouses(data));
    }, []);

    return (
        <div className="bg-secondary">
            <div className="container">
                <div className="row">
                    {
                        houses.map(house => <House
                            info={house}
                        ></House>)
                    }

                </div>

            </div>
        </div>
    );
};

export default Houses;