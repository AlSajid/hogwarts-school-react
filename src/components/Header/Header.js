import React from 'react';
import Navbar from './Navbar/Navbar';
import logo from './images/logo.png';
import Carousel from './Carousel/Carousel';

const Header = () => {
    return (

        <div className="bg-dark">
            {/* header */}
            <div className="container ">
                <div className="row">
                    <div className="col-2">
                        <img src={logo} alt="logo" className="img-thumbnail border-0 w-75" style={{ backgroundColor: "transparent" }} />
                    </div>
                    <div className="col-10">
                        <h1 className="text-white text-start pt-3">Hogwarts School of Witchcraft and Wizardry</h1>
                    </div>
                </div>
            </div>

            {/* Carousel */}
            <Carousel></Carousel>

            {/* navbar */}
            <Navbar></Navbar>

        </div>
    );
};

export default Header;