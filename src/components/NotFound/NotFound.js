import React from 'react';
import page from './page.gif'

const NotFound = () => {
    return (
        <div className="bg-secondary p-3">
            <div className="container bg-dark text-white card shadow-sm rounded-3 p-3">
                <img src={page} alt="secret page" className="w-50 img-thumbnail mx-auto my-3" />
                <h1 className="text-uppercase font-monospace">pagina evanesco!!!</h1>
                <p>This page has been vanished by a pureblood (404)</p>
            </div>
            
        </div>
    );
};

export default NotFound;