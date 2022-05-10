import React from 'react';
import img1 from '../../../images/team/img1.webp'
import img2 from '../../../images/team/img2.jpg'
import img3 from '../../../images/team/img3.jpg'



const Team = () => {
    return (
        <div className='container my-5'>
            <h3 className='text-center my-4'>Our Team</h3>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card h-100">
                        <img src={img1} className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">Sara</h5>
                            <p>CEO</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={img2} className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">Smith</h5>
                            <p>Advisor</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={img3} className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">Rasu</h5>
                            <p>Manager</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;