import React from 'react';
import { useNavigate } from 'react-router-dom';

const Cars = ({ service }) => {
    const { img, serviceName, service_info } = service;
    const navigate = useNavigate();

    const navigateToCheckout = serviceName => {
        navigate(`/checkout/${serviceName}`);
    }
    return (
        <div className="col">
            <div className="card h-100">
                <img src={img} className="card-img-top service-img" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{serviceName}</h5>
                    <p className="card-text">{service_info}</p>
                </div>

                <button onClick={() => navigateToCheckout(serviceName)} className='btn checkout-btn'>Checkout</button>

            </div>
        </div>
    );
};

export default Cars;