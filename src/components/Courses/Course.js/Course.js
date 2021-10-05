import React from 'react';

const Course = (props) => {
    console.log(props);
    return (
        <div className="col-3 my-3" >
            <div className="card shadow-sm" style={{height:"380px"}}>
                <img src={props.info.image} className="card-img-top" alt={props.info.name} />
                <div className="card-body">
                    <table className=" text-start fs-6">
                        <tbody>
                            <tr>
                                <td className="py-1 fw-bolder fs-4" >{props.info.Name}</td>
                            </tr>
                            <tr>
                                <td className="py-1"><b>Course Code: </b>{props.info.Code}</td>
                            </tr>
                            <tr>
                                <td className="py-1"><b>Description: </b>{props.info.Detail}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    );
};

export default Course;