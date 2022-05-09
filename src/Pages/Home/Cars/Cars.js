import React from 'react';
import { useNavigate } from 'react-router-dom';

const Cars = ({ car }) => {
    const { img, carName, car_info, _id } = car;
    const navigate = useNavigate();

    const navigateToUpdate = carId => {
        navigate(`/inventory/${carId}`);
    }
    return (
        <div className="col">
            <div className="card h-100">
                <img src={img} className="card-img-top service-img" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{carName}</h5>
                    <p className="card-text">{car_info}</p>
                </div>

                <button onClick={() => navigateToUpdate(_id)} className='btn checkout-btn'>Update</button>

            </div>
        </div>
    );
};

export default Cars;