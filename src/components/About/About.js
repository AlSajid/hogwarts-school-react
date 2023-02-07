import React from 'react';

const About = () => {
    return (
        <div className="bg-secondary py-3">
            <div className="container border shadow card rounded-3">
                <div className="p-3">
                    <h1 className="fw-bold p-3 ">About Hogwarts</h1>
                    <div className="text-start">
                        <p style={{ textAlign: "justify" }}><b>Hogwarts School of Witchcraft and Wizardry</b> is a British boarding school of magic for students aged eleven to eighteen, and serves as a major setting in the Wizarding World universe.</p>

                        <h6 className="fw-bold">Establishment</h6>
                        <p style={{ textAlign: "justify" }}>
                            Founded in the 10th century by Godric Gryffindor, Rowena Ravenclaw, Helga Hufflepuff and Salazar Slytherin. Hogwarts was established in the Highlands of Scotland to educate young wizards and witches as well as to keep students safe from muggle persecution. Theory has it that Rowena Ravenclaw came up with the name of Hogwarts after dreaming of a warty hog that led her to a cliff by a lake. Since then, Hogwarts educated most wizarding children in the United Kingdom and its surrounding areas, keeping its location hidden from other wizarding schools and muggles.
                        </p>

                    </div>
                    <div className="container border w-50 my-3">
                        <caption className="fw-bolder fs-3">Glance</caption>
                        <table className="table table-light text-start fs-6 table-striped">
                            
                            <tbody>
                                <tr>
                                    <td className="fw-bold p-1 w-25">Universe</td>
                                    <td className="p-1">Wizarding World</td>
                                </tr>
                                <tr>
                                    <td className="fw-bold p-1 w-25">Type</td>
                                    <td className="p-1">Selective</td>
                                </tr>
                                <tr>
                                    <td className="fw-bold p-1 w-25">Level</td>
                                    <td className="p-1">Secondary</td>
                                </tr>
                                <tr>
                                    <td className="fw-bold p-1 w-25">Residence</td>
                                    <td className="p-1">Boarding Only</td>
                                </tr>
                                <tr>
                                    <td className="fw-bold p-1 w-25">Founded</td>
                                    <td className="p-1">around 990 A.D</td>
                                </tr>
                                <tr>
                                    <td className="fw-bold p-1 w-25">Location</td>
                                    <td className="p-1">Scotland</td>
                                </tr>
                                <tr>
                                    <td className="fw-bold p-1 w-25">Owner</td>
                                    <td className="p-1">Ministry of Magic</td>
                                </tr>
                                <tr>
                                    <td className="fw-bold p-1 w-25">Purpose</td>
                                    <td className="p-1">Training for children with magical abilities</td>
                                </tr>
                                <tr>
                                    <td className="fw-bold p-1 w-25">Motto</td>
                                    <td className="p-1">Never Tickle a Sleeping Dragon</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;