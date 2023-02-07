import React, { useEffect, useState } from 'react';
import Course from '../Courses/Course.js/Course';


const Home = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://hogwarts-school-backend.onrender.com/courses/')
            .then(result => result.json())
            .then(data => setServices(data));
    }, []);

    const firstFourServices = services.slice(0, 4);

    return (
        <div className="bg-secondary">
            <div className="container">
                <div className="row">
                    {
                        firstFourServices.map(course => <Course
                            key={course}
                            info={course}
                        ></Course>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;