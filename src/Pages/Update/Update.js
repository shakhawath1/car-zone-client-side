import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Update = () => {

    const { carId } = useParams();
    const [car, setCar] = useState({});
    const { image, name, supplier, description, _id, price, quantity } = car;

    useEffect(() => {
        const url = `http://localhost:5000/cars/${carId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setCar(data));
    }, [carId]);

    return (
        <div className="col w-50 mx-auto">
            <div className="card h-100">
                <img src={image} className="card-img-top service-img" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h6 className="card-title">Id: {_id}</h6>
                    <h6 className="card-title">Price: {price}</h6>
                    <p className="card-text">Quantity: {quantity}</p>
                    <p className="card-text">{description}</p>
                    <p className="card-text">{supplier}</p>
                </div>

                {/* <button onClick={() => navigateToUpdate(_id)} className='btn checkout-btn'>Delivered</button> */}

            </div>
        </div>
    );
};

export default Update;