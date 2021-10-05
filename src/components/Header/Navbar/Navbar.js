import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav mx-auto fs-3 ">
                            <NavLink exact to="/home" className="nav-link mx-3" activeClassName="active fw-bolder">Home</NavLink>
                            <NavLink exact to="/courses" className="nav-link mx-3" activeClassName="active fw-bolder">Courses</NavLink> {/* Note: courses are similar to services */}
                            <NavLink exact to="/houses" className="nav-link mx-3" activeClassName="active fw-bolder">Houses</NavLink>
                            <NavLink exact to="/about" className="nav-link mx-3" activeClassName="active fw-bolder">About</NavLink>

                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;