import React from 'react';

const Footer = () => {
    return (
        <div className="bg-dark text-white py-3">
            <div className="container border p-3">
                <div className="row ">
                    <div className="col mx-auto">
                        <h6>Official Websites</h6>
                        <hr />
                        <a href="https://www.jkrowling.com/"
                            className="text-decoration-none text-white">J.K. Rowling</a>
                        <br />
                        <a href="https://www.wizardingworld.com"
                            className="text-decoration-none text-white">Wizarding World</a>
                        <br />
                        <a href="https://www.warnerbros.com/movies/harry-potter-complete-8-film-collection"
                            className="text-decoration-none text-white">Warner Bros.</a>
                        <br />
                        <a href="https://www.bloomsbury.com/au/discover/harry-potter/"
                            className="text-decoration-none text-white">Bloomsbury </a>
                    </div>
                    <div className="col mx-auto">
                        <h6>Branches</h6>
                        <hr />
                        <a href="https://www.hexrpg.com/"
                            className="text-decoration-none text-white">Hogwarts Extreme</a>
                        <br />
                        <a href="https://hol.org.uk/"
                            className="text-decoration-none text-white">Hogwarts Online</a>
                        <br />
                        <a href="http://hogwarts-school.net/"
                            className="text-decoration-none text-white">Hogwarts School</a>
                        <br />
                        <a href="https://www.hogwartsishere.com/"
                            className="text-decoration-none text-white">Hogwart Is Here</a>

                    </div>
                    <div className="text-center my-auto col ">
                        <h6>&copy; Hogwarts School of Witchcraft and Wizardry 2021</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;