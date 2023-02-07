import React, { useEffect, useState } from 'react';
import Course from './Course.js/Course';

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('https://hogwarts-school-backend.onrender.com/courses/')
            .then(result => result.json())
            .then(data => setCourses(data));
    }, []);

    return (
        <div className="bg-secondary">
            <div className="container">
                <div className="row">
                    {
                        courses.map(course => <Course
                            key={course}
                            info={course}
                        ></Course>)
                    }

                </div>

            </div>
        </div>
    );
};

export default Courses;