import React from 'react';

const House = (props) => {
    return (
        <div className="col-3 my-3">
            <div className="card shadow-sm">
                <img src={props.info.image} className="card-img-top" alt="Gryffindor" />
                <div className="card-body">
                <h5 class="card-title" className="fs-5 fw-bolder">{props.info.name}</h5>
                    <table className="table table-light text-start fs-6">
                        <tbody>
                            <tr>
                                <td className="fw-bolder p-1 w-25">Founder</td>
                                <td className="p-1">{props.info.Founder}</td>
                            </tr>
                            <tr>
                                <td className="fw-bolder p-1 w-25">Color</td>
                                <td className="p-1">{props.info.color}</td>
                            </tr>
                            <tr>
                                <td className="fw-bolder p-1 w-25">Animal</td>
                                <td className="p-1">{props.info.Animal}</td>
                            </tr>
                            <tr>
                                <td className="fw-bolder p-1 w-25">Traits</td>
                                <td className="p-1">{props.info.Traits}</td>
                            </tr>
                            <tr>
                                <td className="fw-bolder p-1 w-25">Head</td>
                                <td className="p-1">{props.info.Head}</td>
                            </tr>
                            <tr>
                                <td className="fw-bolder p-1 w-25">Room</td>
                                <td className="p-1">{props.info.room}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default House;